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

import {forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState} from 'react';
import {Layout} from 'plotly.js-dist-min'
import {Plotly, PlotlyProps, PlotlyRefInterface} from './Plotly';

export type PlotlyAutoSizedRefInterface = PlotlyRefInterface

export type PlotlyAutoSizedProps = Omit<PlotlyProps, 'layout'> & {
  layout?: Partial<Omit<Layout, 'width' | 'height'>>
}

/**
 * Wrapper of the Plotly.js library to use with React. Similar to `Plotly` component, but it automatically resizes the plot to the size of the parent element.
 */
export const PlotlyAutoSized = forwardRef<PlotlyAutoSizedRefInterface, PlotlyAutoSizedProps>(({ ...props }, ref) => {
  const plotRef = useRef<PlotlyRefInterface | null>(null)

  const [[width, height], setSize] = useState<[number, number]>([0, 0])

  useImperativeHandle(ref, () => ({
    root: plotRef.current?.root ?? null,
    plot: plotRef.current?.plot ?? null,
  }), [plotRef])

  useEffect(() => {
    const element = plotRef.current?.root?.parentElement
    if (element) {
      const handler = () => {
        console.log(element, 'resized')
        const { width, height } = element.getBoundingClientRect()
        setSize([width, height])
      }

      element.addEventListener('resize', handler)
      window.addEventListener('resize', handler)
      handler()

      return () => {
        element.removeEventListener('resize', handler)
        window.removeEventListener('resize', handler)
      }
    }
  }, [plotRef]);

  const layout = useMemo((): Partial<Layout> => ({ width, height, ...props.layout }), [width, height, props.layout])

  return <Plotly ref={plotRef} {...props} layout={layout}/>
})
