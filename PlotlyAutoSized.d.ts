/// <reference types="react" />
import { Layout } from 'plotly.js-dist-min';
import { PlotlyProps, PlotlyRefInterface } from './Plotly';
export type PlotlyAutoSizedRefInterface = PlotlyRefInterface;
export type PlotlyAutoSizedProps = Omit<PlotlyProps, 'layout'> & {
    layout?: Partial<Omit<Layout, 'width' | 'height'>>;
};
/**
 * Wrapper of the Plotly.js library to use with React. Similar to `Plotly` component, but it automatically resizes the plot to the size of the parent element.
 */
export declare const PlotlyAutoSized: import('../../node_modules/react').ForwardRefExoticComponent<Omit<PlotlyProps, "layout"> & {
    layout?: Partial<Omit<Layout, "height" | "width">> | undefined;
} & import('../../node_modules/react').RefAttributes<PlotlyRefInterface>>;
