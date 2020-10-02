/**
 * @fileoverview added by tsickle
 * Generated from: base-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef } from "@angular/core";
/**
 * Wrapper around `BaseChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
export class BaseChart {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    /**
     * Data passed to charts library for displaying
     * @param {?} newData
     * @return {?}
     */
    set data(newData) {
        // If data already exists, that means the chart has been initialized
        /** @type {?} */
        const dataExistsAlready = this._data !== null && this._data !== undefined;
        this._data = newData;
        if (dataExistsAlready) {
            this.chart.model.setData(newData);
        }
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * Options passed to charts library
     * @param {?} newOptions
     * @return {?}
     */
    set options(newOptions) {
        // If data already exists, that means the chart has been initialized
        /** @type {?} */
        const optionsExistAlready = this._options !== null && this._options !== undefined;
        this._options = newOptions;
        if (optionsExistAlready) {
            this.chart.model.setOptions(newOptions);
        }
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Width prop is mandatory for the wrappers
        if (this.width) {
            this.options.width = this.width;
        }
        // Height prop is mandatory for the wrappers
        if (this.height) {
            this.options.height = this.height;
        }
    }
    /**
     * Runs after view init to create a chart, attach it to `chartRef` and draw it.
     * @return {?}
     */
    ngAfterViewInit() {
        console.log("You need to implement your own `ngAfterViewInit()` function");
    }
}
BaseChart.decorators = [
    { type: Component, args: [{
                selector: "ibm-base-chart",
                template: ``
            }] }
];
/** @nocollapse */
BaseChart.ctorParameters = () => [
    { type: ElementRef }
];
BaseChart.propDecorators = {
    data: [{ type: Input }],
    options: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    chartRef: [{ type: ViewChild, args: ["nChart",] }]
};
if (false) {
    /**
     * Chart width
     * @type {?}
     */
    BaseChart.prototype.width;
    /**
     * Chart height
     * @type {?}
     */
    BaseChart.prototype.height;
    /**
     * Chart container element ref
     * @type {?}
     */
    BaseChart.prototype.chartRef;
    /**
     * Chart object instance
     *
     * You can use this to do whatever you would normally do with a chart if you used
     * charts library directly.
     * @type {?}
     */
    BaseChart.prototype.chart;
    /**
     * @type {?}
     * @private
     */
    BaseChart.prototype._data;
    /**
     * @type {?}
     * @private
     */
    BaseChart.prototype._options;
    /**
     * @type {?}
     * @protected
     */
    BaseChart.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2FyYm9uL2NoYXJ0cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiYmFzZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBR1QsVUFBVSxFQUNWLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFXdkIsTUFBTSxPQUFPLFNBQVM7Ozs7SUFDckIsWUFBc0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFHLENBQUM7Ozs7OztJQUtoRCxJQUFhLElBQUksQ0FBQyxPQUFPOzs7Y0FFbEIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTO1FBRXpFLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBRXJCLElBQUksaUJBQWlCLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xDO0lBQ0YsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFLRCxJQUFhLE9BQU8sQ0FBQyxVQUFVOzs7Y0FFeEIsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTO1FBRWpGLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBRTNCLElBQUksbUJBQW1CLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0YsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBNEJELFFBQVE7UUFDUCwyQ0FBMkM7UUFDM0MsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNoQztRQUVELDRDQUE0QztRQUM1QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNsQztJQUNGLENBQUM7Ozs7O0lBS0QsZUFBZTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkRBQTZELENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7WUF0RkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxFQUFFO2FBQ1o7Ozs7WUFYQSxVQUFVOzs7bUJBa0JULEtBQUs7c0JBa0JMLEtBQUs7b0JBa0JMLEtBQUs7cUJBS0wsS0FBSzt1QkFLTCxTQUFTLFNBQUMsUUFBUTs7Ozs7OztJQVZuQiwwQkFBb0I7Ozs7O0lBS3BCLDJCQUFxQjs7Ozs7SUFLckIsNkJBQThCOzs7Ozs7OztJQVE5QiwwQkFBTTs7Ozs7SUFFTiwwQkFBbUI7Ozs7O0lBQ25CLDZCQUFzQjs7Ozs7SUE5RFYsK0JBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0Vmlld0NoaWxkLFxuXHRPbkluaXQsXG5cdEFmdGVyVmlld0luaXQsXG5cdEVsZW1lbnRSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuLyoqXG4gKiBXcmFwcGVyIGFyb3VuZCBgQmFzZUNoYXJ0YCBpbiBjYXJib24gY2hhcnRzIGxpYnJhcnlcbiAqXG4gKiBNb3N0IGZ1bmN0aW9ucyBqdXN0IGNhbGwgdGhlaXIgZXF1aXZhbGVudCBmcm9tIHRoZSBjaGFydCBsaWJyYXJ5LlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLWJhc2UtY2hhcnRcIixcblx0dGVtcGxhdGU6IGBgXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VDaGFydCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG5cdC8qKlxuXHQgKiBEYXRhIHBhc3NlZCB0byBjaGFydHMgbGlicmFyeSBmb3IgZGlzcGxheWluZ1xuXHQgKi9cblx0QElucHV0KCkgc2V0IGRhdGEobmV3RGF0YSkge1xuXHRcdC8vIElmIGRhdGEgYWxyZWFkeSBleGlzdHMsIHRoYXQgbWVhbnMgdGhlIGNoYXJ0IGhhcyBiZWVuIGluaXRpYWxpemVkXG5cdFx0Y29uc3QgZGF0YUV4aXN0c0FscmVhZHkgPSB0aGlzLl9kYXRhICE9PSBudWxsICYmIHRoaXMuX2RhdGEgIT09IHVuZGVmaW5lZDtcblxuXHRcdHRoaXMuX2RhdGEgPSBuZXdEYXRhO1xuXG5cdFx0aWYgKGRhdGFFeGlzdHNBbHJlYWR5KSB7XG5cdFx0XHR0aGlzLmNoYXJ0Lm1vZGVsLnNldERhdGEobmV3RGF0YSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGRhdGEoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2RhdGE7XG5cdH1cblxuXHQvKipcblx0ICogT3B0aW9ucyBwYXNzZWQgdG8gY2hhcnRzIGxpYnJhcnlcblx0ICovXG5cdEBJbnB1dCgpIHNldCBvcHRpb25zKG5ld09wdGlvbnMpIHtcblx0XHQvLyBJZiBkYXRhIGFscmVhZHkgZXhpc3RzLCB0aGF0IG1lYW5zIHRoZSBjaGFydCBoYXMgYmVlbiBpbml0aWFsaXplZFxuXHRcdGNvbnN0IG9wdGlvbnNFeGlzdEFscmVhZHkgPSB0aGlzLl9vcHRpb25zICE9PSBudWxsICYmIHRoaXMuX29wdGlvbnMgIT09IHVuZGVmaW5lZDtcblxuXHRcdHRoaXMuX29wdGlvbnMgPSBuZXdPcHRpb25zO1xuXG5cdFx0aWYgKG9wdGlvbnNFeGlzdEFscmVhZHkpIHtcblx0XHRcdHRoaXMuY2hhcnQubW9kZWwuc2V0T3B0aW9ucyhuZXdPcHRpb25zKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgb3B0aW9ucygpIHtcblx0XHRyZXR1cm4gdGhpcy5fb3B0aW9ucztcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGFydCB3aWR0aFxuXHQgKi9cblx0QElucHV0KCkgd2lkdGg6IGFueTtcblxuXHQvKipcblx0ICogQ2hhcnQgaGVpZ2h0XG5cdCAqL1xuXHRASW5wdXQoKSBoZWlnaHQ6IGFueTtcblxuXHQvKipcblx0ICogQ2hhcnQgY29udGFpbmVyIGVsZW1lbnQgcmVmXG5cdCAqL1xuXHRAVmlld0NoaWxkKFwibkNoYXJ0XCIpIGNoYXJ0UmVmO1xuXG5cdC8qKlxuXHQgKiBDaGFydCBvYmplY3QgaW5zdGFuY2Vcblx0ICpcblx0ICogWW91IGNhbiB1c2UgdGhpcyB0byBkbyB3aGF0ZXZlciB5b3Ugd291bGQgbm9ybWFsbHkgZG8gd2l0aCBhIGNoYXJ0IGlmIHlvdSB1c2VkXG5cdCAqIGNoYXJ0cyBsaWJyYXJ5IGRpcmVjdGx5LlxuXHQgKi9cblx0Y2hhcnQ7XG5cblx0cHJpdmF0ZSBfZGF0YTogYW55O1xuXHRwcml2YXRlIF9vcHRpb25zOiBhbnk7XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Ly8gV2lkdGggcHJvcCBpcyBtYW5kYXRvcnkgZm9yIHRoZSB3cmFwcGVyc1xuXHRcdGlmICh0aGlzLndpZHRoKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMud2lkdGggPSB0aGlzLndpZHRoO1xuXHRcdH1cblxuXHRcdC8vIEhlaWdodCBwcm9wIGlzIG1hbmRhdG9yeSBmb3IgdGhlIHdyYXBwZXJzXG5cdFx0aWYgKHRoaXMuaGVpZ2h0KSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJ1bnMgYWZ0ZXIgdmlldyBpbml0IHRvIGNyZWF0ZSBhIGNoYXJ0LCBhdHRhY2ggaXQgdG8gYGNoYXJ0UmVmYCBhbmQgZHJhdyBpdC5cblx0ICovXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRjb25zb2xlLmxvZyhcIllvdSBuZWVkIHRvIGltcGxlbWVudCB5b3VyIG93biBgbmdBZnRlclZpZXdJbml0KClgIGZ1bmN0aW9uXCIpO1xuXHR9XG59XG4iXX0=