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
var BaseChart = /** @class */ (function () {
    function BaseChart(elementRef) {
        this.elementRef = elementRef;
    }
    Object.defineProperty(BaseChart.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        /**
         * Data passed to charts library for displaying
         */
        set: /**
         * Data passed to charts library for displaying
         * @param {?} newData
         * @return {?}
         */
        function (newData) {
            // If data already exists, that means the chart has been initialized
            /** @type {?} */
            var dataExistsAlready = this._data !== null && this._data !== undefined;
            this._data = newData;
            if (dataExistsAlready) {
                this.chart.model.setData(newData);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseChart.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
        },
        /**
         * Options passed to charts library
         */
        set: /**
         * Options passed to charts library
         * @param {?} newOptions
         * @return {?}
         */
        function (newOptions) {
            // If data already exists, that means the chart has been initialized
            /** @type {?} */
            var optionsExistAlready = this._options !== null && this._options !== undefined;
            this._options = newOptions;
            if (optionsExistAlready) {
                this.chart.model.setOptions(newOptions);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BaseChart.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // Width prop is mandatory for the wrappers
        if (this.width) {
            this.options.width = this.width;
        }
        // Height prop is mandatory for the wrappers
        if (this.height) {
            this.options.height = this.height;
        }
    };
    /**
     * Runs after view init to create a chart, attach it to `chartRef` and draw it.
     */
    /**
     * Runs after view init to create a chart, attach it to `chartRef` and draw it.
     * @return {?}
     */
    BaseChart.prototype.ngAfterViewInit = /**
     * Runs after view init to create a chart, attach it to `chartRef` and draw it.
     * @return {?}
     */
    function () {
        console.log("You need to implement your own `ngAfterViewInit()` function");
    };
    BaseChart.decorators = [
        { type: Component, args: [{
                    selector: "ibm-base-chart",
                    template: ""
                }] }
    ];
    /** @nocollapse */
    BaseChart.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    BaseChart.propDecorators = {
        data: [{ type: Input }],
        options: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        chartRef: [{ type: ViewChild, args: ["nChart",] }]
    };
    return BaseChart;
}());
export { BaseChart };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2FyYm9uL2NoYXJ0cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiYmFzZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBR1QsVUFBVSxFQUNWLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFPdkI7SUFLQyxtQkFBc0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFHLENBQUM7SUFLaEQsc0JBQWEsMkJBQUk7Ozs7UUFXakI7WUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkIsQ0FBQztRQWhCRDs7V0FFRzs7Ozs7O1FBQ0gsVUFBa0IsT0FBTzs7O2dCQUVsQixpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVM7WUFFekUsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7WUFFckIsSUFBSSxpQkFBaUIsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2xDO1FBQ0YsQ0FBQzs7O09BQUE7SUFTRCxzQkFBYSw4QkFBTzs7OztRQVdwQjtZQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN0QixDQUFDO1FBaEJEOztXQUVHOzs7Ozs7UUFDSCxVQUFxQixVQUFVOzs7Z0JBRXhCLG1CQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUztZQUVqRixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztZQUUzQixJQUFJLG1CQUFtQixFQUFFO2dCQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDeEM7UUFDRixDQUFDOzs7T0FBQTs7OztJQWdDRCw0QkFBUTs7O0lBQVI7UUFDQywyQ0FBMkM7UUFDM0MsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNoQztRQUVELDRDQUE0QztRQUM1QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNsQztJQUNGLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxtQ0FBZTs7OztJQUFmO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO0lBQzVFLENBQUM7O2dCQXRGRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLEVBQUU7aUJBQ1o7Ozs7Z0JBWEEsVUFBVTs7O3VCQWtCVCxLQUFLOzBCQWtCTCxLQUFLO3dCQWtCTCxLQUFLO3lCQUtMLEtBQUs7MkJBS0wsU0FBUyxTQUFDLFFBQVE7O0lBK0JwQixnQkFBQztDQUFBLEFBdkZELElBdUZDO1NBbkZZLFNBQVM7Ozs7OztJQTBDckIsMEJBQW9COzs7OztJQUtwQiwyQkFBcUI7Ozs7O0lBS3JCLDZCQUE4Qjs7Ozs7Ozs7SUFROUIsMEJBQU07Ozs7O0lBRU4sMEJBQW1COzs7OztJQUNuQiw2QkFBc0I7Ozs7O0lBOURWLCtCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdFZpZXdDaGlsZCxcblx0T25Jbml0LFxuXHRBZnRlclZpZXdJbml0LFxuXHRFbGVtZW50UmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbi8qKlxuICogV3JhcHBlciBhcm91bmQgYEJhc2VDaGFydGAgaW4gY2FyYm9uIGNoYXJ0cyBsaWJyYXJ5XG4gKlxuICogTW9zdCBmdW5jdGlvbnMganVzdCBjYWxsIHRoZWlyIGVxdWl2YWxlbnQgZnJvbSB0aGUgY2hhcnQgbGlicmFyeS5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1iYXNlLWNoYXJ0XCIsXG5cdHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBCYXNlQ2hhcnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuXHQvKipcblx0ICogRGF0YSBwYXNzZWQgdG8gY2hhcnRzIGxpYnJhcnkgZm9yIGRpc3BsYXlpbmdcblx0ICovXG5cdEBJbnB1dCgpIHNldCBkYXRhKG5ld0RhdGEpIHtcblx0XHQvLyBJZiBkYXRhIGFscmVhZHkgZXhpc3RzLCB0aGF0IG1lYW5zIHRoZSBjaGFydCBoYXMgYmVlbiBpbml0aWFsaXplZFxuXHRcdGNvbnN0IGRhdGFFeGlzdHNBbHJlYWR5ID0gdGhpcy5fZGF0YSAhPT0gbnVsbCAmJiB0aGlzLl9kYXRhICE9PSB1bmRlZmluZWQ7XG5cblx0XHR0aGlzLl9kYXRhID0gbmV3RGF0YTtcblxuXHRcdGlmIChkYXRhRXhpc3RzQWxyZWFkeSkge1xuXHRcdFx0dGhpcy5jaGFydC5tb2RlbC5zZXREYXRhKG5ld0RhdGEpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBkYXRhKCkge1xuXHRcdHJldHVybiB0aGlzLl9kYXRhO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9wdGlvbnMgcGFzc2VkIHRvIGNoYXJ0cyBsaWJyYXJ5XG5cdCAqL1xuXHRASW5wdXQoKSBzZXQgb3B0aW9ucyhuZXdPcHRpb25zKSB7XG5cdFx0Ly8gSWYgZGF0YSBhbHJlYWR5IGV4aXN0cywgdGhhdCBtZWFucyB0aGUgY2hhcnQgaGFzIGJlZW4gaW5pdGlhbGl6ZWRcblx0XHRjb25zdCBvcHRpb25zRXhpc3RBbHJlYWR5ID0gdGhpcy5fb3B0aW9ucyAhPT0gbnVsbCAmJiB0aGlzLl9vcHRpb25zICE9PSB1bmRlZmluZWQ7XG5cblx0XHR0aGlzLl9vcHRpb25zID0gbmV3T3B0aW9ucztcblxuXHRcdGlmIChvcHRpb25zRXhpc3RBbHJlYWR5KSB7XG5cdFx0XHR0aGlzLmNoYXJ0Lm1vZGVsLnNldE9wdGlvbnMobmV3T3B0aW9ucyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IG9wdGlvbnMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX29wdGlvbnM7XG5cdH1cblxuXHQvKipcblx0ICogQ2hhcnQgd2lkdGhcblx0ICovXG5cdEBJbnB1dCgpIHdpZHRoOiBhbnk7XG5cblx0LyoqXG5cdCAqIENoYXJ0IGhlaWdodFxuXHQgKi9cblx0QElucHV0KCkgaGVpZ2h0OiBhbnk7XG5cblx0LyoqXG5cdCAqIENoYXJ0IGNvbnRhaW5lciBlbGVtZW50IHJlZlxuXHQgKi9cblx0QFZpZXdDaGlsZChcIm5DaGFydFwiKSBjaGFydFJlZjtcblxuXHQvKipcblx0ICogQ2hhcnQgb2JqZWN0IGluc3RhbmNlXG5cdCAqXG5cdCAqIFlvdSBjYW4gdXNlIHRoaXMgdG8gZG8gd2hhdGV2ZXIgeW91IHdvdWxkIG5vcm1hbGx5IGRvIHdpdGggYSBjaGFydCBpZiB5b3UgdXNlZFxuXHQgKiBjaGFydHMgbGlicmFyeSBkaXJlY3RseS5cblx0ICovXG5cdGNoYXJ0O1xuXG5cdHByaXZhdGUgX2RhdGE6IGFueTtcblx0cHJpdmF0ZSBfb3B0aW9uczogYW55O1xuXG5cdG5nT25Jbml0KCkge1xuXHRcdC8vIFdpZHRoIHByb3AgaXMgbWFuZGF0b3J5IGZvciB0aGUgd3JhcHBlcnNcblx0XHRpZiAodGhpcy53aWR0aCkge1xuXHRcdFx0dGhpcy5vcHRpb25zLndpZHRoID0gdGhpcy53aWR0aDtcblx0XHR9XG5cblx0XHQvLyBIZWlnaHQgcHJvcCBpcyBtYW5kYXRvcnkgZm9yIHRoZSB3cmFwcGVyc1xuXHRcdGlmICh0aGlzLmhlaWdodCkge1xuXHRcdFx0dGhpcy5vcHRpb25zLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSdW5zIGFmdGVyIHZpZXcgaW5pdCB0byBjcmVhdGUgYSBjaGFydCwgYXR0YWNoIGl0IHRvIGBjaGFydFJlZmAgYW5kIGRyYXcgaXQuXG5cdCAqL1xuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJZb3UgbmVlZCB0byBpbXBsZW1lbnQgeW91ciBvd24gYG5nQWZ0ZXJWaWV3SW5pdCgpYCBmdW5jdGlvblwiKTtcblx0fVxufVxuIl19