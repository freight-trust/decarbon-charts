var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Internal Imports
import { AxisChart } from "../axis-chart";
import * as Configuration from "../configuration";
import { Tools } from "../tools";
import { SimpleBarChartModel } from "../model-simple-bar";
// Components
import { Grid, SimpleBar, TwoDimensionalAxes, ZeroLine, TooltipBar } from "../components/index";
var SimpleBarChart = /** @class */ (function (_super) {
    __extends(SimpleBarChart, _super);
    function SimpleBarChart(holder, chartConfigs) {
        var _this = _super.call(this, holder, chartConfigs) || this;
        _this.model = new SimpleBarChartModel(_this.services);
        // Merge the default options for this chart
        // With the user provided options
        _this.model.setOptions(Tools.mergeDefaultChartOptions(Configuration.options.simpleBarChart, chartConfigs.options));
        // Initialize data, services, components etc.
        _this.init(holder, chartConfigs);
        return _this;
    }
    SimpleBarChart.prototype.getComponents = function () {
        // Specify what to render inside the graph-frame
        var graphFrameComponents = [
            new TwoDimensionalAxes(this.model, this.services),
            new Grid(this.model, this.services),
            new SimpleBar(this.model, this.services),
            new ZeroLine(this.model, this.services)
        ];
        var components = this.getAxisChartComponents(graphFrameComponents);
        components.push(new TooltipBar(this.model, this.services));
        return components;
    };
    return SimpleBarChart;
}(AxisChart));
export { SimpleBarChart };
//# sourceMappingURL=../../src/charts/bar-simple.js.map