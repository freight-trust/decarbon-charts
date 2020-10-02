/**
 * @fileoverview added by tsickle
 * Generated from: line-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { BaseChart } from "./base-chart.component";
import { LineChart } from "@carbon/charts";
/**
 * Wrapper around `LineChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
var LineChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LineChartComponent, _super);
    function LineChartComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     */
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    LineChartComponent.prototype.ngAfterViewInit = /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    function () {
        this.chart = new LineChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    };
    LineChartComponent.decorators = [
        { type: Component, args: [{
                    selector: "ibm-line-chart",
                    template: ""
                }] }
    ];
    return LineChartComponent;
}(BaseChart));
export { LineChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2FyYm9uL2NoYXJ0cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGluZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFFVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFPM0M7SUFJd0MsOENBQVM7SUFKakQ7O0lBbUJBLENBQUM7SUFkQTs7T0FFRzs7Ozs7SUFDSCw0Q0FBZTs7OztJQUFmO1FBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFNBQVMsQ0FDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCO1lBQ0MsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3JCLENBQ0QsQ0FBQztRQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFsQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxFQUFFO2lCQUNaOztJQWdCRCx5QkFBQztDQUFBLEFBbkJELENBSXdDLFNBQVMsR0FlaEQ7U0FmWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdEFmdGVyVmlld0luaXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQmFzZUNoYXJ0IH0gZnJvbSBcIi4vYmFzZS1jaGFydC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgTGluZUNoYXJ0IH0gZnJvbSBcIkBjYXJib24vY2hhcnRzXCI7XG5cbi8qKlxuICogV3JhcHBlciBhcm91bmQgYExpbmVDaGFydGAgaW4gY2FyYm9uIGNoYXJ0cyBsaWJyYXJ5XG4gKlxuICogTW9zdCBmdW5jdGlvbnMganVzdCBjYWxsIHRoZWlyIGVxdWl2YWxlbnQgZnJvbSB0aGUgY2hhcnQgbGlicmFyeS5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1saW5lLWNoYXJ0XCIsXG5cdHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBMaW5lQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblx0LyoqXG5cdCAqIFJ1bnMgYWZ0ZXIgdmlldyBpbml0IHRvIGNyZWF0ZSBhIGNoYXJ0LCBhdHRhY2ggaXQgdG8gYGVsZW1lbnRSZWZgIGFuZCBkcmF3IGl0LlxuXHQgKi9cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuY2hhcnQgPSBuZXcgTGluZUNoYXJ0KFxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGE6IHRoaXMuZGF0YSxcblx0XHRcdFx0b3B0aW9uczogdGhpcy5vcHRpb25zXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5jaGFydCk7XG5cdH1cbn1cbiJdfQ==