/**
 * @fileoverview added by tsickle
 * Generated from: bar-chart-stacked.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { BaseChart } from "./base-chart.component";
import { StackedBarChart } from "@carbon/charts";
/**
 * Wrapper around `StackedBarChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
export class StackedBarChartComponent extends BaseChart {
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    ngAfterViewInit() {
        this.chart = new StackedBarChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    }
}
StackedBarChartComponent.decorators = [
    { type: Component, args: [{
                selector: "ibm-stacked-bar-chart",
                template: ``
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0LXN0YWNrZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNhcmJvbi9jaGFydHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbImJhci1jaGFydC1zdGFja2VkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBRVQsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBV2pELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxTQUFTOzs7OztJQUl0RCxlQUFlO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGVBQWUsQ0FDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCO1lBQ0MsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3JCLENBQ0QsQ0FBQztRQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFsQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRSxFQUFFO2FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdEFmdGVyVmlld0luaXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQmFzZUNoYXJ0IH0gZnJvbSBcIi4vYmFzZS1jaGFydC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgU3RhY2tlZEJhckNoYXJ0IH0gZnJvbSBcIkBjYXJib24vY2hhcnRzXCI7XG5cbi8qKlxuICogV3JhcHBlciBhcm91bmQgYFN0YWNrZWRCYXJDaGFydGAgaW4gY2FyYm9uIGNoYXJ0cyBsaWJyYXJ5XG4gKlxuICogTW9zdCBmdW5jdGlvbnMganVzdCBjYWxsIHRoZWlyIGVxdWl2YWxlbnQgZnJvbSB0aGUgY2hhcnQgbGlicmFyeS5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1zdGFja2VkLWJhci1jaGFydFwiLFxuXHR0ZW1wbGF0ZTogYGBcbn0pXG5leHBvcnQgY2xhc3MgU3RhY2tlZEJhckNoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cdC8qKlxuXHQgKiBSdW5zIGFmdGVyIHZpZXcgaW5pdCB0byBjcmVhdGUgYSBjaGFydCwgYXR0YWNoIGl0IHRvIGBlbGVtZW50UmVmYCBhbmQgZHJhdyBpdC5cblx0ICovXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLmNoYXJ0ID0gbmV3IFN0YWNrZWRCYXJDaGFydChcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuXHRcdFx0e1xuXHRcdFx0XHRkYXRhOiB0aGlzLmRhdGEsXG5cdFx0XHRcdG9wdGlvbnM6IHRoaXMub3B0aW9uc1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuY2hhcnQpO1xuXHR9XG59XG4iXX0=