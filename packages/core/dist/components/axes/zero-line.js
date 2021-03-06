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
import { Component } from "../component";
import { DOMUtils } from "../../services";
import { Tools } from "../../tools";
var ZeroLine = /** @class */ (function (_super) {
    __extends(ZeroLine, _super);
    function ZeroLine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "zero-line";
        return _this;
    }
    ZeroLine.prototype.render = function (animate) {
        // Grab container SVG
        var svg = this.getContainerSVG();
        // Get x & y position of the line
        var _a = this.services.cartesianScales.getDomainScale().range(), x0 = _a[0], x1 = _a[1];
        var yPosition = +this.services.cartesianScales.getRangeValue(0) + 0.5;
        var lineCoordinates = Tools.flipSVGCoordinatesBasedOnOrientation({
            x0: x0,
            x1: x1,
            y0: yPosition,
            y1: yPosition
        }, this.services.cartesianScales.getOrientation());
        var line = DOMUtils.appendOrSelect(svg, "line.domain");
        line.transition(this.services.transitions.getTransition("zero-line-update", animate))
            .attr("y1", lineCoordinates.y0)
            .attr("y2", lineCoordinates.y1)
            .attr("x1", lineCoordinates.x0)
            .attr("x2", lineCoordinates.x1);
    };
    return ZeroLine;
}(Component));
export { ZeroLine };
//# sourceMappingURL=../../../src/components/axes/zero-line.js.map