/**
 * @fileoverview added by tsickle
 * Generated from: bar-chart-grouped.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { BaseChart } from "./base-chart.component";
import { GroupedBarChart } from "@carbon/charts";
/**
 * Wrapper around `GroupedBarChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
var GroupedBarChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GroupedBarChartComponent, _super);
    function GroupedBarChartComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     */
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    GroupedBarChartComponent.prototype.ngAfterViewInit = /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    function () {
        this.chart = new GroupedBarChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    };
    GroupedBarChartComponent.decorators = [
        { type: Component, args: [{
                    selector: "ibm-grouped-bar-chart",
                    template: ""
                }] }
    ];
    return GroupedBarChartComponent;
}(BaseChart));
export { GroupedBarChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0LWdyb3VwZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNhcmJvbi9jaGFydHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbImJhci1jaGFydC1ncm91cGVkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUVULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQU9qRDtJQUk4QyxvREFBUztJQUp2RDs7SUFtQkEsQ0FBQztJQWRBOztPQUVHOzs7OztJQUNILGtEQUFlOzs7O0lBQWY7UUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksZUFBZSxDQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0I7WUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDckIsQ0FDRCxDQUFDO1FBRUYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQWxCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLEVBQUU7aUJBQ1o7O0lBZ0JELCtCQUFDO0NBQUEsQUFuQkQsQ0FJOEMsU0FBUyxHQWV0RDtTQWZZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0QWZ0ZXJWaWV3SW5pdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBCYXNlQ2hhcnQgfSBmcm9tIFwiLi9iYXNlLWNoYXJ0LmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBHcm91cGVkQmFyQ2hhcnQgfSBmcm9tIFwiQGNhcmJvbi9jaGFydHNcIjtcblxuLyoqXG4gKiBXcmFwcGVyIGFyb3VuZCBgR3JvdXBlZEJhckNoYXJ0YCBpbiBjYXJib24gY2hhcnRzIGxpYnJhcnlcbiAqXG4gKiBNb3N0IGZ1bmN0aW9ucyBqdXN0IGNhbGwgdGhlaXIgZXF1aXZhbGVudCBmcm9tIHRoZSBjaGFydCBsaWJyYXJ5LlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLWdyb3VwZWQtYmFyLWNoYXJ0XCIsXG5cdHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBHcm91cGVkQmFyQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblx0LyoqXG5cdCAqIFJ1bnMgYWZ0ZXIgdmlldyBpbml0IHRvIGNyZWF0ZSBhIGNoYXJ0LCBhdHRhY2ggaXQgdG8gYGVsZW1lbnRSZWZgIGFuZCBkcmF3IGl0LlxuXHQgKi9cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuY2hhcnQgPSBuZXcgR3JvdXBlZEJhckNoYXJ0KFxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGE6IHRoaXMuZGF0YSxcblx0XHRcdFx0b3B0aW9uczogdGhpcy5vcHRpb25zXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5jaGFydCk7XG5cdH1cbn1cbiJdfQ==