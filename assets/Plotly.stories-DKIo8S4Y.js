import{j as t,a as C,p as w}from"./plotlyArgTypes-B_bAMkZg.js";import{r as T}from"./index-BBkUAzwr.js";const P=({children:e})=>{const[a,c]=T.useState("");return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{margin:"2em"},children:[t.jsx("label",{htmlFor:"mapbox-access-token",children:"Mapbox access token:"}),t.jsx("br",{}),t.jsx("input",{id:"mapbox-access-token",value:a,onChange:r=>c(r.target.value),placeholder:"Paste your mapbox access token here",style:{width:"50%"}})]}),e(a)]})};P.__docgenInfo={description:"",methods:[],displayName:"MapboxTokenPrompt",props:{children:{required:!0,tsType:{name:"signature",type:"function",raw:"(token: string) => ReactElement",signature:{arguments:[{type:{name:"string"},name:"token"}],return:{name:"ReactElement"}}},description:""}}};const S={title:"Plotly",component:C,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:w},o={args:{layout:{title:"Basic Chart"},data:[{type:"bar",x:["giraffes","orangutans","monkeys"],y:[20,14,23]}]}},n={args:{layout:{hovermode:"closest",title:"Click on Points"},data:[{type:"scatter",x:[1,2,3,4,5],y:[10,20,30,20,10],mode:"markers",marker:{size:20}}],onPlotlyClick:e=>{window.alert(`You clicked on x ${e.points[0].x} y ${e.points[0].y}. Additional info in the console.`),console.log("onPlotlyClick",e)}}},s={render:e=>t.jsx(P,{children:a=>{var r;const c=(r=e.config)!=null&&r.mapboxAccessToken?e.config:{...e.config,mapboxAccessToken:a};return t.jsx(C,{...e,config:c})}}),args:{data:[{type:"choroplethmapbox",locations:["NY","MA","VT"],z:[-50,-10,-20],geojson:"https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json"}],config:{mapboxAccessToken:""},layout:{mapbox:{center:{lon:-74,lat:43},zoom:3.5}}}};var i,l,p,m,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    layout: {
      title: 'Basic Chart'
    },
    data: [{
      type: 'bar',
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: [20, 14, 23]
    }]
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source},description:{story:`Shows a simple chart. Note that any supported plotly.js chart can be created using this component, "bar" is a mere example.

See: https://plotly.com/javascript/bar-charts/#basic-bar-chart`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.description}}};var h,u,y,x,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    layout: {
      hovermode: 'closest',
      title: 'Click on Points'
    },
    data: [{
      type: 'scatter',
      x: [1, 2, 3, 4, 5],
      y: [10, 20, 30, 20, 10],
      mode: 'markers',
      marker: {
        size: 20
      }
    }],
    onPlotlyClick: e => {
      // Bundler issues, I will not worry about this for now
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      window.alert(\`You clicked on x \${e.points[0].x} y \${e.points[0].y}. Additional info in the console.\`);
      console.log('onPlotlyClick', e);
    }
  }
}`,...(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source},description:{story:`Shows a simple chart with bound click events. Click on the chart to see the event in the console.

See: https://plotly.com/javascript/plotlyjs-events/#simple-event-example`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.description}}};var b,k,f,j,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <MapboxTokenPrompt>
      {token => {
      const config = !args.config?.mapboxAccessToken ? {
        ...args.config,
        mapboxAccessToken: token
      } : args.config;
      return <Plotly {...args} config={config} />;
    }}
    </MapboxTokenPrompt>,
  args: {
    data: [{
      type: 'choroplethmapbox',
      locations: ['NY', 'MA', 'VT'],
      z: [-50, -10, -20],
      // @types/plotly.js is missing this property
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      geojson: 'https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json'
    }],
    config: {
      mapboxAccessToken: ''
    },
    layout: {
      mapbox: {
        center: {
          lon: -74,
          lat: 43
        },
        zoom: 3.5
      }
    }
  }
}`,...(f=(k=s.parameters)==null?void 0:k.docs)==null?void 0:f.source},description:{story:`Shows a Choropleth chart with Mapbox integration. Providing a mapbox access token is required to visualize this chart.

See: https://plotly.com/javascript/mapbox-county-choropleth/#basic-tile-needs-token`,...(v=(j=s.parameters)==null?void 0:j.docs)==null?void 0:v.description}}};const z=["BasicChart","ChartWithEvents","MapboxChoroplethPlot"];export{o as BasicChart,n as ChartWithEvents,s as MapboxChoroplethPlot,z as __namedExportsOrder,S as default};
