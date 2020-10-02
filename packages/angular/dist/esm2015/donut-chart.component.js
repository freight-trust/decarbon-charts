/**
 * @fileoverview added by tsickle
 * Generated from: donut-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { BaseChart } from "./base-chart.component";
import { DonutChart } from "@carbon/charts";
/**
 * Wrapper around `DonutChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
export class DonutChartComponent extends BaseChart {
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    ngAfterViewInit() {
        this.chart = new DonutChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    }
}
DonutChartComponent.decorators = [
    { type: Component, args: [{
                selector: "ibm-donut-chart",
                template: ``
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9udXQtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNhcmJvbi9jaGFydHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbImRvbnV0LWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBRVQsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBVzVDLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxTQUFTOzs7OztJQUlqRCxlQUFlO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCO1lBQ0MsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3JCLENBQ0QsQ0FBQztRQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFsQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxFQUFFO2FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdEFmdGVyVmlld0luaXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQmFzZUNoYXJ0IH0gZnJvbSBcIi4vYmFzZS1jaGFydC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgRG9udXRDaGFydCB9IGZyb20gXCJAY2FyYm9uL2NoYXJ0c1wiO1xuXG4vKipcbiAqIFdyYXBwZXIgYXJvdW5kIGBEb251dENoYXJ0YCBpbiBjYXJib24gY2hhcnRzIGxpYnJhcnlcbiAqXG4gKiBNb3N0IGZ1bmN0aW9ucyBqdXN0IGNhbGwgdGhlaXIgZXF1aXZhbGVudCBmcm9tIHRoZSBjaGFydCBsaWJyYXJ5LlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLWRvbnV0LWNoYXJ0XCIsXG5cdHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBEb251dENoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cdC8qKlxuXHQgKiBSdW5zIGFmdGVyIHZpZXcgaW5pdCB0byBjcmVhdGUgYSBjaGFydCwgYXR0YWNoIGl0IHRvIGBlbGVtZW50UmVmYCBhbmQgZHJhdyBpdC5cblx0ICovXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLmNoYXJ0ID0gbmV3IERvbnV0Q2hhcnQoXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcblx0XHRcdHtcblx0XHRcdFx0ZGF0YTogdGhpcy5kYXRhLFxuXHRcdFx0XHRvcHRpb25zOiB0aGlzLm9wdGlvbnNcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLmNoYXJ0KTtcblx0fVxufVxuIl19