import { Component, ElementRef, Input, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __extends } from 'tslib';
import { SimpleBarChart, GroupedBarChart, StackedBarChart, BubbleChart, DonutChart, LineChart, PieChart, ScatterChart } from '@carbon/charts';

/**
 * @fileoverview added by tsickle
 * Generated from: base-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: bar-chart-simple.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper around `SimpleBarChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
var SimpleBarChartComponent = /** @class */ (function (_super) {
    __extends(SimpleBarChartComponent, _super);
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

/**
 * @fileoverview added by tsickle
 * Generated from: bar-chart-grouped.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper around `GroupedBarChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
var GroupedBarChartComponent = /** @class */ (function (_super) {
    __extends(GroupedBarChartComponent, _super);
    function GroupedBarChartComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     */
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    GroupedBarChartComponent.prototype.ngAfterViewInit = /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    function () {
        this.chart = new GroupedBarChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    };
    GroupedBarChartComponent.decorators = [
        { type: Component, args: [{
                    selector: "ibm-grouped-bar-chart",
                    template: ""
                }] }
    ];
    return GroupedBarChartComponent;
}(BaseChart));

/**
 * @fileoverview added by tsickle
 * Generated from: bar-chart-stacked.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper around `StackedBarChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
var StackedBarChartComponent = /** @class */ (function (_super) {
    __extends(StackedBarChartComponent, _super);
    function StackedBarChartComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     */
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    StackedBarChartComponent.prototype.ngAfterViewInit = /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    function () {
        this.chart = new StackedBarChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    };
    StackedBarChartComponent.decorators = [
        { type: Component, args: [{
                    selector: "ibm-stacked-bar-chart",
                    template: ""
                }] }
    ];
    return StackedBarChartComponent;
}(BaseChart));

/**
 * @fileoverview added by tsickle
 * Generated from: bubble-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper around `BubbleChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
var BubbleChartComponent = /** @class */ (function (_super) {
    __extends(BubbleChartComponent, _super);
    function BubbleChartComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     */
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    BubbleChartComponent.prototype.ngAfterViewInit = /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    function () {
        this.chart = new BubbleChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    };
    BubbleChartComponent.decorators = [
        { type: Component, args: [{
                    selector: "ibm-bubble-chart",
                    template: ""
                }] }
    ];
    return BubbleChartComponent;
}(BaseChart));

/**
 * @fileoverview added by tsickle
 * Generated from: donut-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper around `DonutChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
var DonutChartComponent = /** @class */ (function (_super) {
    __extends(DonutChartComponent, _super);
    function DonutChartComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     */
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    DonutChartComponent.prototype.ngAfterViewInit = /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    function () {
        this.chart = new DonutChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    };
    DonutChartComponent.decorators = [
        { type: Component, args: [{
                    selector: "ibm-donut-chart",
                    template: ""
                }] }
    ];
    return DonutChartComponent;
}(BaseChart));

/**
 * @fileoverview added by tsickle
 * Generated from: line-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper around `LineChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
var LineChartComponent = /** @class */ (function (_super) {
    __extends(LineChartComponent, _super);
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

/**
 * @fileoverview added by tsickle
 * Generated from: pie-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper around `PieChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
var PieChartComponent = /** @class */ (function (_super) {
    __extends(PieChartComponent, _super);
    function PieChartComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     */
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    PieChartComponent.prototype.ngAfterViewInit = /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    function () {
        this.chart = new PieChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    };
    PieChartComponent.decorators = [
        { type: Component, args: [{
                    selector: "ibm-pie-chart",
                    template: ""
                }] }
    ];
    return PieChartComponent;
}(BaseChart));

/**
 * @fileoverview added by tsickle
 * Generated from: scatter-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper around `ScatterChart` in carbon charts library
 *
 * Most functions just call their equivalent from the chart library.
 */
var ScatterChartComponent = /** @class */ (function (_super) {
    __extends(ScatterChartComponent, _super);
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

/**
 * @fileoverview added by tsickle
 * Generated from: charts.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: carbon-charts-angular.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseChart, BubbleChartComponent, ChartsModule, DonutChartComponent, GroupedBarChartComponent, LineChartComponent, PieChartComponent, ScatterChartComponent, SimpleBarChartComponent, StackedBarChartComponent };
//# sourceMappingURL=carbon-charts-angular.js.map
