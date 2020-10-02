import { Component, ElementRef, Input, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
class BaseChart {
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
class SimpleBarChartComponent extends BaseChart {
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    ngAfterViewInit() {
        this.chart = new SimpleBarChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    }
}
SimpleBarChartComponent.decorators = [
    { type: Component, args: [{
                selector: "ibm-simple-bar-chart",
                template: ``
            }] }
];

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
class GroupedBarChartComponent extends BaseChart {
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    ngAfterViewInit() {
        this.chart = new GroupedBarChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    }
}
GroupedBarChartComponent.decorators = [
    { type: Component, args: [{
                selector: "ibm-grouped-bar-chart",
                template: ``
            }] }
];

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
class StackedBarChartComponent extends BaseChart {
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
class BubbleChartComponent extends BaseChart {
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    ngAfterViewInit() {
        this.chart = new BubbleChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    }
}
BubbleChartComponent.decorators = [
    { type: Component, args: [{
                selector: "ibm-bubble-chart",
                template: ``
            }] }
];

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
class DonutChartComponent extends BaseChart {
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
class LineChartComponent extends BaseChart {
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    ngAfterViewInit() {
        this.chart = new LineChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    }
}
LineChartComponent.decorators = [
    { type: Component, args: [{
                selector: "ibm-line-chart",
                template: ``
            }] }
];

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
class PieChartComponent extends BaseChart {
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
class ScatterChartComponent extends BaseChart {
    /**
     * Runs after view init to create a chart, attach it to `elementRef` and draw it.
     * @return {?}
     */
    ngAfterViewInit() {
        this.chart = new ScatterChart(this.elementRef.nativeElement, {
            data: this.data,
            options: this.options
        });
        Object.assign(this, this.chart);
    }
}
ScatterChartComponent.decorators = [
    { type: Component, args: [{
                selector: "ibm-scatter-chart",
                template: ``
            }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: charts.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChartsModule {
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
