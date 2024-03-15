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

import {PlotMouseEvent} from 'plotly.js-dist-min';
import {
  BeforePlotEvent,
  ClickAnnotationEvent,
  FrameAnimationEvent, LegendClickEvent,
  PlotHoverEvent,
  PlotRelayoutEvent,
  PlotRestyleEvent,
  PlotSelectionEvent, SliderChangeEvent,
  SliderEndEvent, SliderStartEvent, SunburstClickEvent
} from 'plotly.js';

export type plotlyEventNames =
  | 'plotly_click'
  | 'plotly_unhover'
  | 'plotly_hover'
  | 'plotly_selecting'
  | 'plotly_selected'
  | 'plotly_restyle'
  | 'plotly_relayout'
  | 'plotly_relayouting'
  | 'plotly_clickannotation'
  | 'plotly_animatingframe'
  | 'plotly_legendclick'
  | 'plotly_legenddoubleclick'
  | 'plotly_sliderchange'
  | 'plotly_sliderend'
  | 'plotly_sliderstart'
  | 'plotly_sunburstclick'
  | 'plotly_event'
  | 'plotly_beforeplot'
  | 'plotly_afterexport'
  | 'plotly_afterplot'
  | 'plotly_animated'
  | 'plotly_animationinterrupted'
  | 'plotly_autosize'
  | 'plotly_beforeexport'
  | 'plotly_deselect'
  | 'plotly_doubleclick'
  | 'plotly_framework'
  | 'plotly_redraw'
  | 'plotly_transitioning'
  | 'plotly_transitioninterrupted'

export type PlotlyEvents = {
  onPlotlyClick: (event: PlotMouseEvent) => void
  onPlotlyUnhover: (event: PlotMouseEvent) => void
  onPlotlyHover: (event: PlotHoverEvent) => void
  onPlotlySelecting: (event: PlotSelectionEvent) => void
  onPlotlySelected: (event: PlotSelectionEvent) => void
  onPlotlyRestyle: (event: PlotRestyleEvent) => void
  onPlotlyRelayout: (event: PlotRelayoutEvent) => void
  onPlotlyRelayouting: (event: PlotRelayoutEvent) => void
  onPlotlyClickAnnotation: (event: ClickAnnotationEvent) => void
  onPlotlyAnimatingFrame: (event: FrameAnimationEvent) => void
  onPlotlyLegendClick: (event: LegendClickEvent) => void
  onPlotlyLegendDoubleClick: (event: LegendClickEvent) => void
  onPlotlySliderChange: (event: SliderChangeEvent) => void
  onPlotlySliderEnd: (event: SliderEndEvent) => void
  onPlotlySliderStart: (event: SliderStartEvent) => void
  onPlotlySunburstClick: (event: SunburstClickEvent) => void
  onPlotlyEvent: (data: unknown) => void
  onPlotlyBeforePlot: (event: BeforePlotEvent) => void
  onPlotlyAfterExport: () => void
  onPlotlyAfterPlot: () => void
  onPlotlyAnimated: () => void
  onPlotlyAnimationInterrupted: () => void
  onPlotlyAutosize: () => void
  onPlotlyBeforeExport: () => void
  onPlotlyDeselect: () => void
  onPlotlyDoubleClick: () => void
  onPlotlyFramework: () => void
  onPlotlyRedraw: () => void
  onPlotlyTransitioning: () => void
  onPlotlyTransitionInterrupted: () => void
}

export const plotlyEventHandlerMap: { [K in plotlyEventNames]: keyof PlotlyEvents} = {
  'plotly_click': 'onPlotlyClick',
  'plotly_unhover': 'onPlotlyUnhover',
  'plotly_hover': 'onPlotlyHover',
  'plotly_selecting': 'onPlotlySelecting',
  'plotly_selected': 'onPlotlySelected',
  'plotly_restyle': 'onPlotlyRestyle',
  'plotly_relayout': 'onPlotlyRelayout',
  'plotly_relayouting': 'onPlotlyRelayouting',
  'plotly_clickannotation': 'onPlotlyClickAnnotation',
  'plotly_animatingframe': 'onPlotlyAnimatingFrame',
  'plotly_legendclick': 'onPlotlyLegendClick',
  'plotly_legenddoubleclick': 'onPlotlyLegendDoubleClick',
  'plotly_sliderchange': 'onPlotlySliderChange',
  'plotly_sliderend': 'onPlotlySliderEnd',
  'plotly_sliderstart': 'onPlotlySliderStart',
  'plotly_sunburstclick': 'onPlotlySunburstClick',
  'plotly_event': 'onPlotlyEvent',
  'plotly_beforeplot': 'onPlotlyBeforePlot',
  'plotly_afterexport': 'onPlotlyAfterExport',
  'plotly_afterplot': 'onPlotlyAfterPlot',
  'plotly_animated': 'onPlotlyAnimated',
  'plotly_animationinterrupted': 'onPlotlyAnimationInterrupted',
  'plotly_autosize': 'onPlotlyAutosize',
  'plotly_beforeexport': 'onPlotlyBeforeExport',
  'plotly_deselect': 'onPlotlyDeselect',
  'plotly_doubleclick': 'onPlotlyDoubleClick',
  'plotly_framework': 'onPlotlyFramework',
  'plotly_redraw': 'onPlotlyRedraw',
  'plotly_transitioning': 'onPlotlyTransitioning',
  'plotly_transitioninterrupted': 'onPlotlyTransitionInterrupted',
}

export const plotlyEventHandlerMapInverted =
  Object.entries(plotlyEventHandlerMap)
    .reduce(
      (acc, [key, value]) => ({ ...acc, [value]: key as plotlyEventNames }),
      {} as { [K in keyof PlotlyEvents]: plotlyEventNames }
    )
