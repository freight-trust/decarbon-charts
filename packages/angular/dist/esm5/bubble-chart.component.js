/**
 * @fileoverview added by tsickle
 * Generated from: bubble-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { BaseChart } from "./base-chart.component";
import { BubbleChart } from "@carbon/charts";
/**
 * Wrapper around `BubbleChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
var BubbleChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BubbleChartComponent, _super);
    function BubbleChartComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     */
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    BubbleChartComponent.prototype.ngAfterViewInit = /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    function () {
        this.chart = new BubbleChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    };
    BubbleChartComponent.decorators = [
        { type: Component, args: [{
                    selector: "ibm-bubble-chart",
                    template: ""
                }] }
    ];
    return BubbleChartComponent;
}(BaseChart));
export { BubbleChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjYXJib24vY2hhcnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJidWJibGUtY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBRVQsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRW5ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBTzdDO0lBSTBDLGdEQUFTO0lBSm5EOztJQW1CQSxDQUFDO0lBZEE7O09BRUc7Ozs7O0lBQ0gsOENBQWU7Ozs7SUFBZjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QjtZQUNDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUNyQixDQUNELENBQUM7UUFFRixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0JBbEJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsRUFBRTtpQkFDWjs7SUFnQkQsMkJBQUM7Q0FBQSxBQW5CRCxDQUkwQyxTQUFTLEdBZWxEO1NBZlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRBZnRlclZpZXdJbml0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEJhc2VDaGFydCB9IGZyb20gXCIuL2Jhc2UtY2hhcnQuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IEJ1YmJsZUNoYXJ0IH0gZnJvbSBcIkBjYXJib24vY2hhcnRzXCI7XG5cbi8qKlxuICogV3JhcHBlciBhcm91bmQgYEJ1YmJsZUNoYXJ0YCBpbiBjYXJib24gY2hhcnRzIGxpYnJhcnlcbiAqXG4gKiBNb3N0IGZ1bmN0aW9ucyBqdXN0IGNhbGwgdGhlaXIgZXF1aXZhbGVudCBmcm9tIHRoZSBjaGFydCBsaWJyYXJ5LlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLWJ1YmJsZS1jaGFydFwiLFxuXHR0ZW1wbGF0ZTogYGBcbn0pXG5leHBvcnQgY2xhc3MgQnViYmxlQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblx0LyoqXG5cdCAqIFJ1bnMgYWZ0ZXIgdmlldyBpbml0IHRvIGNyZWF0ZSBhIGNoYXJ0LCBhdHRhY2ggaXQgdG8gYGVsZW1lbnRSZWZgIGFuZCBkcmF3IGl0LlxuXHQgKi9cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuY2hhcnQgPSBuZXcgQnViYmxlQ2hhcnQoXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcblx0XHRcdHtcblx0XHRcdFx0ZGF0YTogdGhpcy5kYXRhLFxuXHRcdFx0XHRvcHRpb25zOiB0aGlzLm9wdGlvbnNcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLmNoYXJ0KTtcblx0fVxufVxuIl19