/**
 * @fileoverview added by tsickle
 * Generated from: pie-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { BaseChart } from "./base-chart.component";
import { PieChart } from "@carbon/charts";
/**
 * Wrapper around `PieChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
export class PieChartComponent extends BaseChart {
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    ngAfterViewInit() {
        this.chart = new PieChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    }
}
PieChartComponent.decorators = [
    { type: Component, args: [{
                selector: "ibm-pie-chart",
                template: ``
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjYXJib24vY2hhcnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJwaWUtY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFFVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFXMUMsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFNBQVM7Ozs7O0lBSS9DLGVBQWU7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksUUFBUSxDQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0I7WUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDckIsQ0FDRCxDQUFDO1FBRUYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQWxCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxFQUFFO2FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdEFmdGVyVmlld0luaXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQmFzZUNoYXJ0IH0gZnJvbSBcIi4vYmFzZS1jaGFydC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgUGllQ2hhcnQgfSBmcm9tIFwiQGNhcmJvbi9jaGFydHNcIjtcblxuLyoqXG4gKiBXcmFwcGVyIGFyb3VuZCBgUGllQ2hhcnRgIGluIGNhcmJvbiBjaGFydHMgbGlicmFyeVxuICpcbiAqIE1vc3QgZnVuY3Rpb25zIGp1c3QgY2FsbCB0aGVpciBlcXVpdmFsZW50IGZyb20gdGhlIGNoYXJ0IGxpYnJhcnkuXG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tcGllLWNoYXJ0XCIsXG5cdHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBQaWVDaGFydENvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXHQvKipcblx0ICogUnVucyBhZnRlciB2aWV3IGluaXQgdG8gY3JlYXRlIGEgY2hhcnQsIGF0dGFjaCBpdCB0byBgZWxlbWVudFJlZmAgYW5kIGRyYXcgaXQuXG5cdCAqL1xuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5jaGFydCA9IG5ldyBQaWVDaGFydChcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuXHRcdFx0e1xuXHRcdFx0XHRkYXRhOiB0aGlzLmRhdGEsXG5cdFx0XHRcdG9wdGlvbnM6IHRoaXMub3B0aW9uc1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuY2hhcnQpO1xuXHR9XG59XG4iXX0=