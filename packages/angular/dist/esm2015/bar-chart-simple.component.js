/**
 * @fileoverview added by tsickle
 * Generated from: bar-chart-simple.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { BaseChart } from "./base-chart.component";
import { SimpleBarChart } from "@carbon/charts";
/**
 * Wrapper around `SimpleBarChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
export class SimpleBarChartComponent extends BaseChart {
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    ngAfterViewInit() {
        this.chart = new SimpleBarChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    }
}
SimpleBarChartComponent.decorators = [
    { type: Component, args: [{
                selector: "ibm-simple-bar-chart",
                template: ``
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0LXNpbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2FyYm9uL2NoYXJ0cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiYmFyLWNoYXJ0LXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUVULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQVdoRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsU0FBUzs7Ozs7SUFJckQsZUFBZTtRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxjQUFjLENBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QjtZQUNDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUNyQixDQUNELENBQUM7UUFFRixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBbEJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsRUFBRTthQUNaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRBZnRlclZpZXdJbml0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEJhc2VDaGFydCB9IGZyb20gXCIuL2Jhc2UtY2hhcnQuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFNpbXBsZUJhckNoYXJ0IH0gZnJvbSBcIkBjYXJib24vY2hhcnRzXCI7XG5cbi8qKlxuICogV3JhcHBlciBhcm91bmQgYFNpbXBsZUJhckNoYXJ0YCBpbiBjYXJib24gY2hhcnRzIGxpYnJhcnlcbiAqXG4gKiBNb3N0IGZ1bmN0aW9ucyBqdXN0IGNhbGwgdGhlaXIgZXF1aXZhbGVudCBmcm9tIHRoZSBjaGFydCBsaWJyYXJ5LlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLXNpbXBsZS1iYXItY2hhcnRcIixcblx0dGVtcGxhdGU6IGBgXG59KVxuZXhwb3J0IGNsYXNzIFNpbXBsZUJhckNoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cdC8qKlxuXHQgKiBSdW5zIGFmdGVyIHZpZXcgaW5pdCB0byBjcmVhdGUgYSBjaGFydCwgYXR0YWNoIGl0IHRvIGBlbGVtZW50UmVmYCBhbmQgZHJhdyBpdC5cblx0ICovXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLmNoYXJ0ID0gbmV3IFNpbXBsZUJhckNoYXJ0KFxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGE6IHRoaXMuZGF0YSxcblx0XHRcdFx0b3B0aW9uczogdGhpcy5vcHRpb25zXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5jaGFydCk7XG5cdH1cbn1cbiJdfQ==