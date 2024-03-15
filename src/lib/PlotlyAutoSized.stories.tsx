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

import type { Meta, StoryObj } from '@storybook/react';
import { PlotlyAutoSized } from '.';
import {plotlyArgTypes} from '../utils/storybook/plotlyArgTypes';

const meta = {
  title: 'PlotlyAutoSized',
  component: PlotlyAutoSized,
  tags: ['autodocs'],
  argTypes: plotlyArgTypes,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PlotlyAutoSized>;

export default meta;
type Story = StoryObj<typeof meta>;


export const AutoResizeablePlot: Story = {
  render: (args) => (
    <div style={{ width: '50vw', height: '100vh', background: 'green' }}>
      <PlotlyAutoSized {...args} />
    </div>
  ),
  args: {
    layout: {
      title: 'Plot that has the size of 50vw x 70vh',
      margin: { b: 0, l: 0, r: 0, t: 32 }
    },
    data: [
      {
        type: 'bar',
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
      }
    ]
  }
};
