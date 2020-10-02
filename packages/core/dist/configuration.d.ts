import { BaseChartOptions, AxisChartOptions, ScatterChartOptions, LineChartOptions, BarChartOptions, StackedBarChartOptions, PieChartOptions, DonutChartOptions, BubbleChartOptions, ZoomableChartOptions, GridOptions, TimeScaleOptions, TooltipOptions, AxisTooltipOptions, BarTooltipOptions, LegendOptions, NetworkChartOptions } from "./interfaces";
/**
 * Legend options
 */
export declare const legend: LegendOptions;
/**
 * Grid options
 */
export declare const grid: GridOptions;
/**
 * Tooltip options
 */
export declare const baseTooltip: TooltipOptions;
export declare const axisChartTooltip: AxisTooltipOptions;
export declare const barChartTooltip: BarTooltipOptions;
export declare const timeScale: TimeScaleOptions;
export declare const options: {
    chart: BaseChartOptions;
    axisChart: AxisChartOptions;
    simpleBarChart: BarChartOptions;
    groupedBarChart: BarChartOptions;
    stackedBarChart: StackedBarChartOptions;
    bubbleChart: BubbleChartOptions;
    lineChart: LineChartOptions;
    scatterChart: ScatterChartOptions;
    pieChart: PieChartOptions;
    donutChart: DonutChartOptions;
    networkChart: NetworkChartOptions;
    zoomableChart: ZoomableChartOptions;
};
/**
 * Options for line behaviour
 */
export declare const lines: {
    opacity: {
        unselected: number;
        selected: number;
    };
};
/**
 * Base transition configuration
 */
export declare const transitions: {
    default: {
        duration: number;
    };
    pie_slice_mouseover: {
        duration: number;
    };
    pie_chart_titles: {
        duration: number;
    };
    graph_element_mouseover_fill_update: {
        duration: number;
    };
    graph_element_mouseout_fill_update: {
        duration: number;
    };
};
export declare const axis: {
    ticks: {
        number: number;
        rotateIfSmallerThan: number;
    };
    paddingRatio: number;
};
export declare const spacers: {
    default: {
        size: number;
    };
};
export declare const tickSpaceRatioVertical = 2.5;
export declare const tickSpaceRatioHorizontal = 3.5;
