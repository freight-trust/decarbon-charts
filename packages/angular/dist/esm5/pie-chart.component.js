/**
 * @fileoverview added by tsickle
 * Generated from: pie-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { BaseChart } from "./base-chart.component";
import { PieChart } from "@carbon/charts";
/**
 * Wrapper around `PieChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
var PieChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PieChartComponent, _super);
    function PieChartComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     */
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    PieChartComponent.prototype.ngAfterViewInit = /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    function () {
        this.chart = new PieChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    };
    PieChartComponent.decorators = [
        { type: Component, args: [{
                    selector: "ibm-pie-chart",
                    template: ""
                }] }
    ];
    return PieChartComponent;
}(BaseChart));
export { PieChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjYXJib24vY2hhcnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJwaWUtY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBRVQsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRW5ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBTzFDO0lBSXVDLDZDQUFTO0lBSmhEOztJQW1CQSxDQUFDO0lBZEE7O09BRUc7Ozs7O0lBQ0gsMkNBQWU7Ozs7SUFBZjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QjtZQUNDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUNyQixDQUNELENBQUM7UUFFRixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0JBbEJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLEVBQUU7aUJBQ1o7O0lBZ0JELHdCQUFDO0NBQUEsQUFuQkQsQ0FJdUMsU0FBUyxHQWUvQztTQWZZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0QWZ0ZXJWaWV3SW5pdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBCYXNlQ2hhcnQgfSBmcm9tIFwiLi9iYXNlLWNoYXJ0LmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBQaWVDaGFydCB9IGZyb20gXCJAY2FyYm9uL2NoYXJ0c1wiO1xuXG4vKipcbiAqIFdyYXBwZXIgYXJvdW5kIGBQaWVDaGFydGAgaW4gY2FyYm9uIGNoYXJ0cyBsaWJyYXJ5XG4gKlxuICogTW9zdCBmdW5jdGlvbnMganVzdCBjYWxsIHRoZWlyIGVxdWl2YWxlbnQgZnJvbSB0aGUgY2hhcnQgbGlicmFyeS5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1waWUtY2hhcnRcIixcblx0dGVtcGxhdGU6IGBgXG59KVxuZXhwb3J0IGNsYXNzIFBpZUNoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cdC8qKlxuXHQgKiBSdW5zIGFmdGVyIHZpZXcgaW5pdCB0byBjcmVhdGUgYSBjaGFydCwgYXR0YWNoIGl0IHRvIGBlbGVtZW50UmVmYCBhbmQgZHJhdyBpdC5cblx0ICovXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLmNoYXJ0ID0gbmV3IFBpZUNoYXJ0KFxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGE6IHRoaXMuZGF0YSxcblx0XHRcdFx0b3B0aW9uczogdGhpcy5vcHRpb25zXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5jaGFydCk7XG5cdH1cbn1cbiJdfQ==