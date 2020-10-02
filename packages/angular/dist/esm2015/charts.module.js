/**
 * @fileoverview added by tsickle
 * Generated from: charts.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaseChart } from "./base-chart.component";
import { SimpleBarChartComponent } from "./bar-chart-simple.component";
import { GroupedBarChartComponent } from "./bar-chart-grouped.component";
import { StackedBarChartComponent } from "./bar-chart-stacked.component";
import { BubbleChartComponent } from "./bubble-chart.component";
import { DonutChartComponent } from "./donut-chart.component";
import { LineChartComponent } from "./line-chart.component";
import { PieChartComponent } from "./pie-chart.component";
import { ScatterChartComponent } from "./scatter-chart.component";
export class ChartsModule {
}
ChartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    BaseChart,
                    SimpleBarChartComponent,
                    GroupedBarChartComponent,
                    StackedBarChartComponent,
                    BubbleChartComponent,
                    DonutChartComponent,
                    LineChartComponent,
                    PieChartComponent,
                    ScatterChartComponent
                ],
                exports: [
                    BaseChart,
                    SimpleBarChartComponent,
                    GroupedBarChartComponent,
                    StackedBarChartComponent,
                    BubbleChartComponent,
                    DonutChartComponent,
                    LineChartComponent,
                    PieChartComponent,
                    ScatterChartComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjYXJib24vY2hhcnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJjaGFydHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBOEJsRSxNQUFNLE9BQU8sWUFBWTs7O1lBNUJ4QixRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLFNBQVM7b0JBQ1QsdUJBQXVCO29CQUN2Qix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtvQkFDeEIsb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQixxQkFBcUI7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUixTQUFTO29CQUNULHVCQUF1QjtvQkFDdkIsd0JBQXdCO29CQUN4Qix3QkFBd0I7b0JBQ3hCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtvQkFDakIscUJBQXFCO2lCQUNyQjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBCYXNlQ2hhcnQgfSBmcm9tIFwiLi9iYXNlLWNoYXJ0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2ltcGxlQmFyQ2hhcnRDb21wb25lbnQgfSBmcm9tIFwiLi9iYXItY2hhcnQtc2ltcGxlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgR3JvdXBlZEJhckNoYXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vYmFyLWNoYXJ0LWdyb3VwZWQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTdGFja2VkQmFyQ2hhcnRDb21wb25lbnQgfSBmcm9tIFwiLi9iYXItY2hhcnQtc3RhY2tlZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJ1YmJsZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vYnViYmxlLWNoYXJ0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRG9udXRDaGFydENvbXBvbmVudCB9IGZyb20gXCIuL2RvbnV0LWNoYXJ0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGluZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vbGluZS1jaGFydC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBpZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vcGllLWNoYXJ0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2NhdHRlckNoYXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vc2NhdHRlci1jaGFydC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRCYXNlQ2hhcnQsXG5cdFx0U2ltcGxlQmFyQ2hhcnRDb21wb25lbnQsXG5cdFx0R3JvdXBlZEJhckNoYXJ0Q29tcG9uZW50LFxuXHRcdFN0YWNrZWRCYXJDaGFydENvbXBvbmVudCxcblx0XHRCdWJibGVDaGFydENvbXBvbmVudCxcblx0XHREb251dENoYXJ0Q29tcG9uZW50LFxuXHRcdExpbmVDaGFydENvbXBvbmVudCxcblx0XHRQaWVDaGFydENvbXBvbmVudCxcblx0XHRTY2F0dGVyQ2hhcnRDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEJhc2VDaGFydCxcblx0XHRTaW1wbGVCYXJDaGFydENvbXBvbmVudCxcblx0XHRHcm91cGVkQmFyQ2hhcnRDb21wb25lbnQsXG5cdFx0U3RhY2tlZEJhckNoYXJ0Q29tcG9uZW50LFxuXHRcdEJ1YmJsZUNoYXJ0Q29tcG9uZW50LFxuXHRcdERvbnV0Q2hhcnRDb21wb25lbnQsXG5cdFx0TGluZUNoYXJ0Q29tcG9uZW50LFxuXHRcdFBpZUNoYXJ0Q29tcG9uZW50LFxuXHRcdFNjYXR0ZXJDaGFydENvbXBvbmVudFxuXHRdXG59KVxuXG5leHBvcnQgY2xhc3MgQ2hhcnRzTW9kdWxlIHt9XG4iXX0=