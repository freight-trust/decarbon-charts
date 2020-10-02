/**
 * @fileoverview added by tsickle
 * Generated from: bar-chart-simple.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { BaseChart } from "./base-chart.component";
import { SimpleBarChart } from "@carbon/charts";
/**
 * Wrapper around `SimpleBarChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
var SimpleBarChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SimpleBarChartComponent, _super);
    function SimpleBarChartComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     */
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    SimpleBarChartComponent.prototype.ngAfterViewInit = /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    function () {
        this.chart = new SimpleBarChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    };
    SimpleBarChartComponent.decorators = [
        { type: Component, args: [{
                    selector: "ibm-simple-bar-chart",
                    template: ""
                }] }
    ];
    return SimpleBarChartComponent;
}(BaseChart));
export { SimpleBarChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0LXNpbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2FyYm9uL2NoYXJ0cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiYmFyLWNoYXJ0LXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFFVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFPaEQ7SUFJNkMsbURBQVM7SUFKdEQ7O0lBbUJBLENBQUM7SUFkQTs7T0FFRzs7Ozs7SUFDSCxpREFBZTs7OztJQUFmO1FBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGNBQWMsQ0FDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCO1lBQ0MsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3JCLENBQ0QsQ0FBQztRQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFsQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxFQUFFO2lCQUNaOztJQWdCRCw4QkFBQztDQUFBLEFBbkJELENBSTZDLFNBQVMsR0FlckQ7U0FmWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdEFmdGVyVmlld0luaXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQmFzZUNoYXJ0IH0gZnJvbSBcIi4vYmFzZS1jaGFydC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgU2ltcGxlQmFyQ2hhcnQgfSBmcm9tIFwiQGNhcmJvbi9jaGFydHNcIjtcblxuLyoqXG4gKiBXcmFwcGVyIGFyb3VuZCBgU2ltcGxlQmFyQ2hhcnRgIGluIGNhcmJvbiBjaGFydHMgbGlicmFyeVxuICpcbiAqIE1vc3QgZnVuY3Rpb25zIGp1c3QgY2FsbCB0aGVpciBlcXVpdmFsZW50IGZyb20gdGhlIGNoYXJ0IGxpYnJhcnkuXG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tc2ltcGxlLWJhci1jaGFydFwiLFxuXHR0ZW1wbGF0ZTogYGBcbn0pXG5leHBvcnQgY2xhc3MgU2ltcGxlQmFyQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblx0LyoqXG5cdCAqIFJ1bnMgYWZ0ZXIgdmlldyBpbml0IHRvIGNyZWF0ZSBhIGNoYXJ0LCBhdHRhY2ggaXQgdG8gYGVsZW1lbnRSZWZgIGFuZCBkcmF3IGl0LlxuXHQgKi9cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuY2hhcnQgPSBuZXcgU2ltcGxlQmFyQ2hhcnQoXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcblx0XHRcdHtcblx0XHRcdFx0ZGF0YTogdGhpcy5kYXRhLFxuXHRcdFx0XHRvcHRpb25zOiB0aGlzLm9wdGlvbnNcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLmNoYXJ0KTtcblx0fVxufVxuIl19