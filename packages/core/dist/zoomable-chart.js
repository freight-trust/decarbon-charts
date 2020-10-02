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
import { Chart } from "./chart";
import * as Configuration from "./configuration";
import { Tools } from "./tools";
var ZoomableChart = /** @class */ (function (_super) {
    __extends(ZoomableChart, _super);
    function ZoomableChart(holder, chartConfigs) {
        var _this = _super.call(this, holder, chartConfigs) || this;
        // Merge the default options for this chart
        // With the user provided options
        _this.model.setOptions(Tools.merge(Tools.clone(Configuration.options.zoomableChart), chartConfigs.options));
        return _this;
    }
    return ZoomableChart;
}(Chart));
export { ZoomableChart };
//# sourceMappingURL=../src/zoomable-chart.js.map