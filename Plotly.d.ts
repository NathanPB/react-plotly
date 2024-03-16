/// <reference types="react" />
import { Config, Data, Layout, PlotlyHTMLElement } from 'plotly.js-dist-min';
import { PlotlyEvents } from './events';
export type PlotlyRefInterface = {
    root: HTMLDivElement | null;
    plot: PlotlyHTMLElement | null;
};
export type PlotlyProps = {
    divId?: string;
    data: Data[];
    layout?: Partial<Layout>;
    config?: Partial<Config>;
    onPlotCreated?: (plot: PlotlyHTMLElement) => void;
} & Partial<PlotlyEvents>;
/**
 * Wrapper of the Plotly.js library to use with React. It provides a convenient way to create and manage Plotly charts in React applications.
 */
export declare const Plotly: import('../../node_modules/react').ForwardRefExoticComponent<{
    divId?: string | undefined;
    data: Data[];
    layout?: Partial<Layout> | undefined;
    config?: Partial<Config> | undefined;
    onPlotCreated?: ((plot: PlotlyHTMLElement) => void) | undefined;
} & Partial<PlotlyEvents> & import('../../node_modules/react').RefAttributes<PlotlyRefInterface>>;
