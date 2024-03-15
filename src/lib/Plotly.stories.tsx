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

import type {Meta, StoryObj} from '@storybook/react';
import {Plotly} from '.';
import {MapboxTokenPrompt} from '../utils/components/MapboxTokenPrompt';
import {plotlyArgTypes} from '../utils/storybook/plotlyArgTypes';

const meta = {
  title: 'Plotly',
  component: Plotly,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: plotlyArgTypes,
} satisfies Meta<typeof Plotly>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Shows a simple chart. Note that any supported plotly.js chart can be created using this component, "bar" is a mere example.
 *
 * See: https://plotly.com/javascript/bar-charts/#basic-bar-chart
 */
export const BasicChart: Story = {
  args: {
    layout: { title: 'Basic Chart' },
    data: [
      {
        type: 'bar',
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
      }
    ]
  }
};

/**
 * Shows a simple chart with bound click events. Click on the chart to see the event in the console.
 *
 * See: https://plotly.com/javascript/plotlyjs-events/#simple-event-example
 */
export const ChartWithEvents: Story = {
  args: {
    layout: { hovermode:'closest', title:'Click on Points' },
    data: [
      {
        type:'scatter',
        x: [1, 2, 3, 4, 5],
        y: [10, 20, 30, 20, 10],
        mode: 'markers',
        marker: { size: 20 }
      }
    ],
    onPlotlyClick: (e) => {
      // Bundler issues, I will not worry about this for now
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      window.alert(`You clicked on x ${e.points[0].x} y ${e.points[0].y}. Additional info in the console.`)
      console.log('onPlotlyClick', e)
    }
  }
};

/**
 * Shows a Choropleth chart with Mapbox integration. Providing a mapbox access token is required to visualize this chart.
 *
 * See: https://plotly.com/javascript/mapbox-county-choropleth/#basic-tile-needs-token
 */
export const MapboxChoroplethPlot: Story = {
  render: (args) => (
    <MapboxTokenPrompt>
      {
        (token) => {
          const config = !args.config?.mapboxAccessToken
            ? { ...args.config, mapboxAccessToken: token }
            : args.config
          return <Plotly {...args} config={config}/>
        }
      }
    </MapboxTokenPrompt>
  ),
  args: {
    data: [
      {
        type: 'choroplethmapbox',
        locations: ['NY', 'MA', 'VT'],
        z: [-50, -10, -20],
        // @types/plotly.js is missing this property
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        geojson: 'https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json'
      }
    ],
    config: { mapboxAccessToken: '' },
    layout: {
      mapbox: { center: { lon: -74, lat: 43 }, zoom: 3.5 },
    },
  },
}
