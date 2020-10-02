import { AfterViewInit } from "@angular/core";
import { BaseChart } from "./base-chart.component";
/**
 * Wrapper around `SimpleBarChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
export declare class SimpleBarChartComponent extends BaseChart implements AfterViewInit {
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     */
    ngAfterViewInit(): void;
}
