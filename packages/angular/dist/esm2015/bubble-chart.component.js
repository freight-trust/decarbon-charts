/**
 * @fileoverview added by tsickle
 * Generated from: bubble-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { BaseChart } from "./base-chart.component";
import { BubbleChart } from "@carbon/charts";
/**
 * Wrapper around `BubbleChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
export class BubbleChartComponent extends BaseChart {
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    ngAfterViewInit() {
        this.chart = new BubbleChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    }
}
BubbleChartComponent.decorators = [
    { type: Component, args: [{
                selector: "ibm-bubble-chart",
                template: ``
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjYXJib24vY2hhcnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJidWJibGUtY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFFVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFXN0MsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFNBQVM7Ozs7O0lBSWxELGVBQWU7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksV0FBVyxDQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0I7WUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDckIsQ0FDRCxDQUFDO1FBRUYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQWxCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLEVBQUU7YUFDWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0QWZ0ZXJWaWV3SW5pdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBCYXNlQ2hhcnQgfSBmcm9tIFwiLi9iYXNlLWNoYXJ0LmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBCdWJibGVDaGFydCB9IGZyb20gXCJAY2FyYm9uL2NoYXJ0c1wiO1xuXG4vKipcbiAqIFdyYXBwZXIgYXJvdW5kIGBCdWJibGVDaGFydGAgaW4gY2FyYm9uIGNoYXJ0cyBsaWJyYXJ5XG4gKlxuICogTW9zdCBmdW5jdGlvbnMganVzdCBjYWxsIHRoZWlyIGVxdWl2YWxlbnQgZnJvbSB0aGUgY2hhcnQgbGlicmFyeS5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1idWJibGUtY2hhcnRcIixcblx0dGVtcGxhdGU6IGBgXG59KVxuZXhwb3J0IGNsYXNzIEJ1YmJsZUNoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cdC8qKlxuXHQgKiBSdW5zIGFmdGVyIHZpZXcgaW5pdCB0byBjcmVhdGUgYSBjaGFydCwgYXR0YWNoIGl0IHRvIGBlbGVtZW50UmVmYCBhbmQgZHJhdyBpdC5cblx0ICovXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLmNoYXJ0ID0gbmV3IEJ1YmJsZUNoYXJ0KFxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGE6IHRoaXMuZGF0YSxcblx0XHRcdFx0b3B0aW9uczogdGhpcy5vcHRpb25zXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5jaGFydCk7XG5cdH1cbn1cbiJdfQ==