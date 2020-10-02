(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@carbon/charts')) :
    typeof define === 'function' && define.amd ? define('@carbon/charts-angular', ['exports', '@angular/core', '@angular/common', '@carbon/charts'], factory) :
    (global = global || self, factory((global.carbon = global.carbon || {}, global.carbon['charts-angular'] = {}), global.ng.core, global.ng.common, global.charts));
}(this, (function (exports, core, common, charts) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
            { type: core.Component, args: [{
                        selector: "ibm-base-chart",
                        template: ""
                    }] }
        ];
        /** @nocollapse */
        BaseChart.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        BaseChart.propDecorators = {
            data: [{ type: core.Input }],
            options: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            chartRef: [{ type: core.ViewChild, args: ["nChart",] }]
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
            this.chart = new charts.SimpleBarChart(this.elementRef.nativeElement, {
                data: this.data,
                options: this.options
            });
            Object.assign(this, this.chart);
        };
        SimpleBarChartComponent.decorators = [
            { type: core.Component, args: [{
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
            this.chart = new charts.GroupedBarChart(this.elementRef.nativeElement, {
                data: this.data,
                options: this.options
            });
            Object.assign(this, this.chart);
        };
        GroupedBarChartComponent.decorators = [
            { type: core.Component, args: [{
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
            this.chart = new charts.StackedBarChart(this.elementRef.nativeElement, {
                data: this.data,
                options: this.options
            });
            Object.assign(this, this.chart);
        };
        StackedBarChartComponent.decorators = [
            { type: core.Component, args: [{
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
            this.chart = new charts.BubbleChart(this.elementRef.nativeElement, {
                data: this.data,
                options: this.options
            });
            Object.assign(this, this.chart);
        };
        BubbleChartComponent.decorators = [
            { type: core.Component, args: [{
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
            this.chart = new charts.DonutChart(this.elementRef.nativeElement, {
                data: this.data,
                options: this.options
            });
            Object.assign(this, this.chart);
        };
        DonutChartComponent.decorators = [
            { type: core.Component, args: [{
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
            this.chart = new charts.LineChart(this.elementRef.nativeElement, {
                data: this.data,
                options: this.options
            });
            Object.assign(this, this.chart);
        };
        LineChartComponent.decorators = [
            { type: core.Component, args: [{
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
            this.chart = new charts.PieChart(this.elementRef.nativeElement, {
                data: this.data,
                options: this.options
            });
            Object.assign(this, this.chart);
        };
        PieChartComponent.decorators = [
            { type: core.Component, args: [{
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
            this.chart = new charts.ScatterChart(this.elementRef.nativeElement, {
                data: this.data,
                options: this.options
            });
            Object.assign(this, this.chart);
        };
        ScatterChartComponent.decorators = [
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.BaseChart = BaseChart;
    exports.BubbleChartComponent = BubbleChartComponent;
    exports.ChartsModule = ChartsModule;
    exports.DonutChartComponent = DonutChartComponent;
    exports.GroupedBarChartComponent = GroupedBarChartComponent;
    exports.LineChartComponent = LineChartComponent;
    exports.PieChartComponent = PieChartComponent;
    exports.ScatterChartComponent = ScatterChartComponent;
    exports.SimpleBarChartComponent = SimpleBarChartComponent;
    exports.StackedBarChartComponent = StackedBarChartComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=carbon-charts-angular.umd.js.map
