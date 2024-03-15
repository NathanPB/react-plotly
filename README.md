# Plotly.js for React

This is a simple, dependency-free wrapper for Plotly.js to be used with React.

**This is not an official package from Plotly!**

It features a fully typesafe simple API for convenient usage with React, as well as a auto-sizing feature to make it easier to use in responsive designs.

Further documentation available at [https://react-plotly.nathanpb.dev](https://react-plotly.nathanpb.dev).

## Installation & Usage

```bash
yarn add plotly.js-dist-min @nathanpb/react-plotly # Note: at the moment only the minified version is supported
yarn add -D @types/plotly.js # If you are using TypeScript
```

```jsx
import {Plotly} from '@nathanpb/react-plotly'

export const Example = () => {
  const trace1 = { type: 'bar', x: ['giraffes', 'orangutans', 'monkeys'], y: [20, 14, 23] }
  const layout = {
    title: { text: 'Basic Chart' },
    xaxis: {
      autorange: true,
      range: [-0.5, 2.5],
      type: 'category',
    },
    yaxis: {
      autorange: true,
      range: [0, 24.210526315789473],
      type: 'linear',
    }
  }
  
  return (
    <Plotly
      data={[trace1]}
      layout={layout}
    />
  )
}
```

## License

This package or the author of this package is **NOT** in any ways affiliated with Plotly, nor is this package endorsed by Plotly.

```
Copyright 2024 Nathan P. Bombana

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

Do whatever you want with my code, just don't make it boring.
