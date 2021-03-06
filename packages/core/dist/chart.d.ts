import { ChartConfig, BaseChartOptions } from "./interfaces/index";
import { ChartModel } from "./model";
import { Component, LayoutComponent } from "./components";
export declare class Chart {
    components: Component[];
    services: any;
    model: ChartModel;
    constructor(holder: Element, chartConfigs: ChartConfig<BaseChartOptions>);
    init(holder: Element, chartConfigs: ChartConfig<BaseChartOptions>): void;
    getComponents(): any[];
    update(animate?: boolean): void;
    destroy(): void;
    protected getChartComponents(graphFrameComponents: any[]): LayoutComponent[];
}
