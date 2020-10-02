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
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
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
    return ChartsModule;
}());
export { ChartsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjYXJib24vY2hhcnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJjaGFydHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWxFO0lBQUE7SUE0QjJCLENBQUM7O2dCQTVCM0IsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3FCQUNaO29CQUNELFlBQVksRUFBRTt3QkFDYixTQUFTO3dCQUNULHVCQUF1Qjt3QkFDdkIsd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGlCQUFpQjt3QkFDakIscUJBQXFCO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsU0FBUzt3QkFDVCx1QkFBdUI7d0JBQ3ZCLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4QixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLHFCQUFxQjtxQkFDckI7aUJBQ0Q7O0lBRTBCLG1CQUFDO0NBQUEsQUE1QjVCLElBNEI0QjtTQUFmLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IEJhc2VDaGFydCB9IGZyb20gXCIuL2Jhc2UtY2hhcnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaW1wbGVCYXJDaGFydENvbXBvbmVudCB9IGZyb20gXCIuL2Jhci1jaGFydC1zaW1wbGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBHcm91cGVkQmFyQ2hhcnRDb21wb25lbnQgfSBmcm9tIFwiLi9iYXItY2hhcnQtZ3JvdXBlZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFN0YWNrZWRCYXJDaGFydENvbXBvbmVudCB9IGZyb20gXCIuL2Jhci1jaGFydC1zdGFja2VkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQnViYmxlQ2hhcnRDb21wb25lbnQgfSBmcm9tIFwiLi9idWJibGUtY2hhcnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEb251dENoYXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vZG9udXQtY2hhcnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMaW5lQ2hhcnRDb21wb25lbnQgfSBmcm9tIFwiLi9saW5lLWNoYXJ0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGllQ2hhcnRDb21wb25lbnQgfSBmcm9tIFwiLi9waWUtY2hhcnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTY2F0dGVyQ2hhcnRDb21wb25lbnQgfSBmcm9tIFwiLi9zY2F0dGVyLWNoYXJ0LmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEJhc2VDaGFydCxcblx0XHRTaW1wbGVCYXJDaGFydENvbXBvbmVudCxcblx0XHRHcm91cGVkQmFyQ2hhcnRDb21wb25lbnQsXG5cdFx0U3RhY2tlZEJhckNoYXJ0Q29tcG9uZW50LFxuXHRcdEJ1YmJsZUNoYXJ0Q29tcG9uZW50LFxuXHRcdERvbnV0Q2hhcnRDb21wb25lbnQsXG5cdFx0TGluZUNoYXJ0Q29tcG9uZW50LFxuXHRcdFBpZUNoYXJ0Q29tcG9uZW50LFxuXHRcdFNjYXR0ZXJDaGFydENvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0QmFzZUNoYXJ0LFxuXHRcdFNpbXBsZUJhckNoYXJ0Q29tcG9uZW50LFxuXHRcdEdyb3VwZWRCYXJDaGFydENvbXBvbmVudCxcblx0XHRTdGFja2VkQmFyQ2hhcnRDb21wb25lbnQsXG5cdFx0QnViYmxlQ2hhcnRDb21wb25lbnQsXG5cdFx0RG9udXRDaGFydENvbXBvbmVudCxcblx0XHRMaW5lQ2hhcnRDb21wb25lbnQsXG5cdFx0UGllQ2hhcnRDb21wb25lbnQsXG5cdFx0U2NhdHRlckNoYXJ0Q29tcG9uZW50XG5cdF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDaGFydHNNb2R1bGUge31cbiJdfQ==