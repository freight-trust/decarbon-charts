import { ZoomableChart } from "../zoomable-chart";
import { ChartConfig, NetworkChartOptions } from "../interfaces/index";
export declare class NetworkChart extends ZoomableChart {
    constructor(holder: Element, chartConfigs: ChartConfig<NetworkChartOptions>);
    getComponents(): any[];
}
