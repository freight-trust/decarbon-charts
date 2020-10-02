/**
 * @fileoverview added by tsickle
 * Generated from: scatter-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { BaseChart } from "./base-chart.component";
import { ScatterChart } from "@carbon/charts";
/**
 * Wrapper around `ScatterChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
var ScatterChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ScatterChartComponent, _super);
    function ScatterChartComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     */
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    ScatterChartComponent.prototype.ngAfterViewInit = /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    function () {
        this.chart = new ScatterChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    };
    ScatterChartComponent.decorators = [
        { type: Component, args: [{
                    selector: "ibm-scatter-chart",
                    template: ""
                }] }
    ];
    return ScatterChartComponent;
}(BaseChart));
export { ScatterChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhdHRlci1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2FyYm9uL2NoYXJ0cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsic2NhdHRlci1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFFVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFPOUM7SUFJMkMsaURBQVM7SUFKcEQ7O0lBbUJBLENBQUM7SUFkQTs7T0FFRzs7Ozs7SUFDSCwrQ0FBZTs7OztJQUFmO1FBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFlBQVksQ0FDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCO1lBQ0MsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3JCLENBQ0QsQ0FBQztRQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFsQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxFQUFFO2lCQUNaOztJQWdCRCw0QkFBQztDQUFBLEFBbkJELENBSTJDLFNBQVMsR0FlbkQ7U0FmWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdEFmdGVyVmlld0luaXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQmFzZUNoYXJ0IH0gZnJvbSBcIi4vYmFzZS1jaGFydC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgU2NhdHRlckNoYXJ0IH0gZnJvbSBcIkBjYXJib24vY2hhcnRzXCI7XG5cbi8qKlxuICogV3JhcHBlciBhcm91bmQgYFNjYXR0ZXJDaGFydGAgaW4gY2FyYm9uIGNoYXJ0cyBsaWJyYXJ5XG4gKlxuICogTW9zdCBmdW5jdGlvbnMganVzdCBjYWxsIHRoZWlyIGVxdWl2YWxlbnQgZnJvbSB0aGUgY2hhcnQgbGlicmFyeS5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1zY2F0dGVyLWNoYXJ0XCIsXG5cdHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBTY2F0dGVyQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblx0LyoqXG5cdCAqIFJ1bnMgYWZ0ZXIgdmlldyBpbml0IHRvIGNyZWF0ZSBhIGNoYXJ0LCBhdHRhY2ggaXQgdG8gYGVsZW1lbnRSZWZgIGFuZCBkcmF3IGl0LlxuXHQgKi9cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuY2hhcnQgPSBuZXcgU2NhdHRlckNoYXJ0KFxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGE6IHRoaXMuZGF0YSxcblx0XHRcdFx0b3B0aW9uczogdGhpcy5vcHRpb25zXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5jaGFydCk7XG5cdH1cbn1cbiJdfQ==