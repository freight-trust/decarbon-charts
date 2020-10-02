import { OnInit, AfterViewInit, ElementRef } from "@angular/core";
/**
 * Wrapper around `BaseChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
export declare class BaseChart implements AfterViewInit, OnInit {
    protected elementRef: ElementRef;
    constructor(elementRef: ElementRef);
    /**
     * Data passed to charts library for displaying
     */
    data: any;
    /**
     * Options passed to charts library
     */
    options: any;
    /**
     * Chart width
     */
    width: any;
    /**
     * Chart height
     */
    height: any;
    /**
     * Chart container element ref
     */
    chartRef: any;
    /**
     * Chart object instance
     *
     * You can use this to do whatever you would normally do with a chart if you used
     * charts library directly.
     */
    chart: any;
    private _data;
    private _options;
    ngOnInit(): void;
    /**
     * Runs after view init to create a chart, attach it to `chartRef` and draw it.
     */
    ngAfterViewInit(): void;
}
