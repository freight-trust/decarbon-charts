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
import { ZoomableChart } from "../zoomable-chart";
import * as Configuration from "../configuration";
import { Tools } from "../tools";
// Components
import { Network } from "../components";
var NetworkChart = /** @class */ (function (_super) {
    __extends(NetworkChart, _super);
    function NetworkChart(holder, chartConfigs) {
        var _this = _super.call(this, holder, chartConfigs) || this;
        // Merge the default options for this chart
        // With the user provided options
        _this.model.setOptions(Tools.merge(Tools.clone(Configuration.options.networkChart), chartConfigs.options));
        // Initialize data, services, components etc.
        _this.init(holder, chartConfigs);
        return _this;
    }
    NetworkChart.prototype.getComponents = function () {
        var graphFrameComponents = [
            new Network(this.model, this.services)
        ];
        var components = this.getChartComponents(graphFrameComponents);
        return components;
    };
    return NetworkChart;
}(ZoomableChart));
export { NetworkChart };
//# sourceMappingURL=../../src/charts/network.js.map