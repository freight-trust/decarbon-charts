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
import settings from "carbon-components/src/globals/js/settings";
import classnames from "classnames";
import { buildPathString } from "./utils";
import { Component } from "../../component";
// Marker icons
import ChevronRight from "@carbon/icons/es/chevron--right/16";
import ChevronLeft from "@carbon/icons/es/chevron--left/16";
import { buildIconString } from "./utils";
var prefix = settings.prefix;
var NetworkLine = /** @class */ (function (_super) {
    __extends(NetworkLine, _super);
    function NetworkLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetworkLine.prototype.render = function () {
        var _a = this.configs, container = _a.container, selector = _a.selector, nodeHeight = _a.nodeHeight, nodeWidth = _a.nodeWidth, data = _a.data;
        var buildMarkerDefs = function () { return data.reduce(function (unique, link) {
            var _a;
            var kind = link.kind, multiDirectional = link.multiDirectional, directional = link.directional;
            var markerClasses = classnames(prefix + "--network-link__marker", (_a = {},
                _a[prefix + "--network-link__marker--" + kind] = kind,
                _a));
            if (directional || multiDirectional) {
                var endMarkerID = "arrow" + (kind ? "-" + kind : "") + "-end";
                unique[endMarkerID] = { id: endMarkerID, end: true, markerClasses: markerClasses };
            }
            if (multiDirectional) {
                var startMarkerId = "arrow" + (kind ? "-" + kind : "") + "-start";
                unique[startMarkerId] = { id: startMarkerId, end: false, markerClasses: markerClasses };
            }
            return unique;
        }, {}); };
        var markerData = buildMarkerDefs();
        var markers = container.append("svg:defs")
            .selectAll("marker")
            .data(Object.keys(markerData).map(function (key) { return markerData[key]; }))
            .enter()
            .append("svg:marker")
            .attr("id", function (_a) {
            var id = _a.id;
            return id;
        })
            .attr("class", function (_a) {
            var markerClasses = _a.markerClasses;
            return markerClasses;
        })
            .attr("markerHeight", 16)
            .attr("markerWidth", 16)
            .attr("orient", "auto")
            .attr("refX", function (_a) {
            var end = _a.end;
            return end ? 10 : 6;
        })
            .attr("refY", 8)
            .html(function (_a) {
            var end = _a.end;
            return buildIconString(end ? ChevronRight : ChevronLeft);
        });
        var lines = container.selectAll(selector)
            .data(data)
            .enter()
            .append("path")
            .attr("class", function (_a) {
            var _b;
            var kind = _a.kind;
            return classnames(prefix + "--network-link__line", (_b = {},
                _b[prefix + "--network-link__line--" + kind] = kind,
                _b));
        })
            .attr("marker-start", function (_a) {
            var kind = _a.kind, multiDirectional = _a.multiDirectional;
            return multiDirectional && "url(#arrow" + (kind ? "-" + kind : "") + "-start)";
        })
            .attr("marker-end", function (_a) {
            var kind = _a.kind, directional = _a.directional, multiDirectional = _a.multiDirectional;
            return (directional || multiDirectional) && "url(#arrow" + (kind ? "-" + kind : "") + "-end)";
        })
            .attr("d", function (_a) {
            var source = _a.source, target = _a.target;
            return buildPathString(source, target, nodeHeight, nodeWidth);
        })
            .style("stroke-dasharray", function (_a) {
            var dash = _a.dash;
            return dash;
        });
    };
    return NetworkLine;
}(Component));
export { NetworkLine };
//# sourceMappingURL=../../../../src/components/graphs/network/network-line.js.map