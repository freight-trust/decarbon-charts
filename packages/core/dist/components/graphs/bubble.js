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
import { Scatter } from "./scatter";
import { DOMUtils } from "../../services";
import { extent } from "d3-array";
import { scaleLinear } from "d3-scale";
var Bubble = /** @class */ (function (_super) {
    __extends(Bubble, _super);
    function Bubble() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "bubble";
        return _this;
    }
    Bubble.prototype.getRadiusScale = function (selection) {
        var data = selection.data();
        // Filter out any null/undefined values
        var allRadii = data.map(function (d) { return d.radius; }).filter(function (radius) { return radius; });
        var options = this.model.getOptions();
        var chartSize = DOMUtils.getSVGElementSize(this.services.domUtils.getMainSVG(), { useAttr: true });
        return scaleLinear().domain(extent(allRadii))
            .range(options.bubble.radiusRange(chartSize, data));
    };
    Bubble.prototype.styleCircles = function (selection, animate) {
        var _this = this;
        // Chart options mixed with the internal configurations
        var options = this.model.getOptions();
        var radiusScale = this.getRadiusScale(selection);
        selection.raise()
            .classed("dot", true)
            .attr("cx", function (d, i) { return _this.services.cartesianScales.getDomainValue(d, i); })
            .transition(this.services.transitions.getTransition("bubble-update-enter", animate))
            .attr("cy", function (d, i) { return _this.services.cartesianScales.getRangeValue(d, i); })
            .attr("r", function (d) { return radiusScale(d.radius); })
            .attr("fill", function (d) { return _this.model.getFillScale()[d.datasetLabel](d.label); })
            .attr("fill-opacity", options.bubble.fillOpacity)
            .attr("stroke", function (d) { return _this.model.getStrokeColor(d.datasetLabel, d.label, d.value); })
            .attr("opacity", 1);
    };
    // TODO - This method could be re-used in more graphs
    Bubble.prototype.addLabelsToDataPoints = function (d, index) {
        // Chart options mixed with the internal configurations
        var options = this.model.getOptions();
        var labels = this.model.getDisplayData().labels;
        return d.data.map(function (datum, i) { return ({
            date: datum.date,
            label: labels[i],
            datasetLabel: d.label,
            value: isNaN(datum) ? datum.value : datum,
            radius: datum.radius || options.points.radius
        }); });
    };
    return Bubble;
}(Scatter));
export { Bubble };
//# sourceMappingURL=../../../src/components/graphs/bubble.js.map