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

import {Plotly} from '../../lib';
import {Meta} from '@storybook/react';

export const plotlyArgTypes: Required<Meta<typeof Plotly>['argTypes']> = {
  key: { table: { disable: true } },
  ref: { table: { disable: true } },
  divId: { description: 'ID to be assigned to the div that the plot is created on.' },
  layout: { description: "Plotly's layout object. See https://plotly.com/javascript/reference/layout/" },
  data: { description: "Plotly's data object. See https://plotly.com/javascript/reference/" },
  config: { description: "Plotly's config object. See https://plotly.com/javascript/configuration-options/" },
  onPlotCreated: { type: 'function', description: 'Callback function that is called when the plot is created, passing the HTML div element that the plot is hosted on.' },
  onPlotlyClick: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/#click-event' },
  onPlotlyUnhover: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/#hover-event' },
  onPlotlyHover: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/#hover-event' },
  onPlotlySelecting: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/' },
  onPlotlySelected: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/#select-event' },
  onPlotlyRestyle: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/#update-data' },
  onPlotlyRelayout: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/#update-data' },
  onPlotlyRelayouting: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/' },
  onPlotlyClickAnnotation: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/' },
  onPlotlyAnimatingFrame: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/' },
  onPlotlyLegendClick: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/#legend-click-events' },
  onPlotlyLegendDoubleClick: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/#legend-click-events' },
  onPlotlySliderChange: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/' },
  onPlotlySliderEnd: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/' },
  onPlotlySliderStart: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/' },
  onPlotlySunburstClick: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/' },
  onPlotlyEvent: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/' },
  onPlotlyBeforePlot: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/' },
  onPlotlyAfterExport: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/' },
  onPlotlyAfterPlot: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/#afterplot-event' },
  onPlotlyAnimated: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/#additional-events' },
  onPlotlyAnimationInterrupted: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/' },
  onPlotlyAutosize: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/#additional-events' },
  onPlotlyBeforeExport: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/' },
  onPlotlyDeselect: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/#additional-events' },
  onPlotlyDoubleClick: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/#double-click-event' },
  onPlotlyFramework: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/' },
  onPlotlyRedraw: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/#additional-events' },
  onPlotlyTransitioning: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/' },
  onPlotlyTransitionInterrupted: { type: 'function', description: 'https://plotly.com/javascript/plotlyjs-events/' },
}
