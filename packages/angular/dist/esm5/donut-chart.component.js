/**
 * @fileoverview added by tsickle
 * Generated from: donut-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { BaseChart } from "./base-chart.component";
import { DonutChart } from "@carbon/charts";
/**
 * Wrapper around `DonutChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
var DonutChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DonutChartComponent, _super);
    function DonutChartComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     */
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    DonutChartComponent.prototype.ngAfterViewInit = /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    function () {
        this.chart = new DonutChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    };
    DonutChartComponent.decorators = [
        { type: Component, args: [{
                    selector: "ibm-donut-chart",
                    template: ""
                }] }
    ];
    return DonutChartComponent;
}(BaseChart));
export { DonutChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9udXQtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNhcmJvbi9jaGFydHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbImRvbnV0LWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUVULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQU81QztJQUl5QywrQ0FBUztJQUpsRDs7SUFtQkEsQ0FBQztJQWRBOztPQUVHOzs7OztJQUNILDZDQUFlOzs7O0lBQWY7UUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksVUFBVSxDQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0I7WUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDckIsQ0FDRCxDQUFDO1FBRUYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQWxCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLEVBQUU7aUJBQ1o7O0lBZ0JELDBCQUFDO0NBQUEsQUFuQkQsQ0FJeUMsU0FBUyxHQWVqRDtTQWZZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0QWZ0ZXJWaWV3SW5pdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBCYXNlQ2hhcnQgfSBmcm9tIFwiLi9iYXNlLWNoYXJ0LmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBEb251dENoYXJ0IH0gZnJvbSBcIkBjYXJib24vY2hhcnRzXCI7XG5cbi8qKlxuICogV3JhcHBlciBhcm91bmQgYERvbnV0Q2hhcnRgIGluIGNhcmJvbiBjaGFydHMgbGlicmFyeVxuICpcbiAqIE1vc3QgZnVuY3Rpb25zIGp1c3QgY2FsbCB0aGVpciBlcXVpdmFsZW50IGZyb20gdGhlIGNoYXJ0IGxpYnJhcnkuXG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tZG9udXQtY2hhcnRcIixcblx0dGVtcGxhdGU6IGBgXG59KVxuZXhwb3J0IGNsYXNzIERvbnV0Q2hhcnRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblx0LyoqXG5cdCAqIFJ1bnMgYWZ0ZXIgdmlldyBpbml0IHRvIGNyZWF0ZSBhIGNoYXJ0LCBhdHRhY2ggaXQgdG8gYGVsZW1lbnRSZWZgIGFuZCBkcmF3IGl0LlxuXHQgKi9cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuY2hhcnQgPSBuZXcgRG9udXRDaGFydChcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuXHRcdFx0e1xuXHRcdFx0XHRkYXRhOiB0aGlzLmRhdGEsXG5cdFx0XHRcdG9wdGlvbnM6IHRoaXMub3B0aW9uc1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuY2hhcnQpO1xuXHR9XG59XG4iXX0=