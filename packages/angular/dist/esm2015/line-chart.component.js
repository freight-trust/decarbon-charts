/**
 * @fileoverview added by tsickle
 * Generated from: line-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { BaseChart } from "./base-chart.component";
import { LineChart } from "@carbon/charts";
/**
 * Wrapper around `LineChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
export class LineChartComponent extends BaseChart {
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    ngAfterViewInit() {
        this.chart = new LineChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    }
}
LineChartComponent.decorators = [
    { type: Component, args: [{
                selector: "ibm-line-chart",
                template: ``
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2FyYm9uL2NoYXJ0cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGluZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUVULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQVczQyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsU0FBUzs7Ozs7SUFJaEQsZUFBZTtRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QjtZQUNDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUNyQixDQUNELENBQUM7UUFFRixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBbEJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsRUFBRTthQUNaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRBZnRlclZpZXdJbml0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEJhc2VDaGFydCB9IGZyb20gXCIuL2Jhc2UtY2hhcnQuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IExpbmVDaGFydCB9IGZyb20gXCJAY2FyYm9uL2NoYXJ0c1wiO1xuXG4vKipcbiAqIFdyYXBwZXIgYXJvdW5kIGBMaW5lQ2hhcnRgIGluIGNhcmJvbiBjaGFydHMgbGlicmFyeVxuICpcbiAqIE1vc3QgZnVuY3Rpb25zIGp1c3QgY2FsbCB0aGVpciBlcXVpdmFsZW50IGZyb20gdGhlIGNoYXJ0IGxpYnJhcnkuXG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tbGluZS1jaGFydFwiLFxuXHR0ZW1wbGF0ZTogYGBcbn0pXG5leHBvcnQgY2xhc3MgTGluZUNoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cdC8qKlxuXHQgKiBSdW5zIGFmdGVyIHZpZXcgaW5pdCB0byBjcmVhdGUgYSBjaGFydCwgYXR0YWNoIGl0IHRvIGBlbGVtZW50UmVmYCBhbmQgZHJhdyBpdC5cblx0ICovXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLmNoYXJ0ID0gbmV3IExpbmVDaGFydChcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuXHRcdFx0e1xuXHRcdFx0XHRkYXRhOiB0aGlzLmRhdGEsXG5cdFx0XHRcdG9wdGlvbnM6IHRoaXMub3B0aW9uc1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuY2hhcnQpO1xuXHR9XG59XG4iXX0=