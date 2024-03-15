/*
 * Copyright 2024 Nathan P. Bombana
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';
import {Config, Data, Layout, newPlot, react, PlotlyHTMLElement} from 'plotly.js-dist-min'
import {plotlyEventHandlerMapInverted, PlotlyEvents} from './events';

export type PlotlyRefInterface = {
  root: HTMLDivElement | null
  plot: PlotlyHTMLElement | null
}

export type PlotlyProps = {
  divId?: string
  data: Data[]
  layout?: Partial<Layout>
  config?: Partial<Config>
  onPlotCreated?: (plot: PlotlyHTMLElement) => void
} & Partial<PlotlyEvents>

/**
 * Wrapper of the Plotly.js library to use with React. It provides a convenient way to create and manage Plotly charts in React applications.
 */
export const Plotly = forwardRef<PlotlyRefInterface, PlotlyProps>(({ divId, data, layout, config, onPlotCreated, ...rest }, ref) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const [plot, setPlot] = useState<PlotlyHTMLElement | null>(null)

  useEffect(() => {
    if (plot) return // Should run only on the first render to create the plot
    if (rootRef.current) newPlot(rootRef.current, data, layout, config)
      .then((plot) => {
        setPlot(plot)
        onPlotCreated?.(plot)
      })
  }, [plot, data, layout, config, onPlotCreated]);

  useEffect(() => {
    if (plot) react(plot, data, layout, config)
  }, [plot, data, layout, config]);

  useImperativeHandle(ref, () => ({
    root: rootRef.current,
    plot,
  }), [plot])

  useEffect(() => {
    if (plot) {
      const events = Object.entries(rest)
        .filter(([key]) => key.startsWith('onPlotly'))
        .map(([key, value]) => [plotlyEventHandlerMapInverted[key as keyof PlotlyEvents], value])

      for (const [eventName, eventHandler] of events) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        plot.on(eventName as any, eventHandler as any)
      }

      return () => {
        for (const [eventName, eventHandler] of events) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          plot.removeEventListener(eventName as any, eventHandler as any)
        }
      }
    }
  }, [plot, rest])

  return <div id={divId} ref={rootRef}/>
})

