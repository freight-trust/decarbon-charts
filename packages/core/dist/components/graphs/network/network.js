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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { zoom } from "d3-zoom";
import { event as d3Event } from "d3";
import { scaleLinear } from "d3-scale";
import { max } from "d3-array";
import settings from "carbon-components/src/globals/js/settings";
// Internal Imports
import { DOMUtils } from "../../../services";
import { Component } from "../../component";
import { NetworkCard } from "./network-card";
import { NetworkLine } from "./network-line";
var prefix = settings.prefix;
var Network = /** @class */ (function (_super) {
    __extends(Network, _super);
    function Network() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "network";
        _this.data = _this.model.getDisplayData().datasets[0];
        _this.options = _this.model.getOptions();
        _this.calculateInnerHeight = function (yMax) {
            var cellHeight = _this.options.cellHeight;
            return (yMax + 1) * cellHeight;
        };
        _this.calculateInnerWidth = function (xMax) {
            var cellWidth = _this.options.cellWidth;
            return (xMax + 1) * cellWidth;
        };
        _this.calculatePositions = function () {
            var _a = _this.data, nodes = _a.nodes, links = _a.links;
            _this.xMax = max(nodes, function (_a) {
                var column = _a.column;
                return column;
            });
            _this.yMax = max(nodes, function (_a) {
                var row = _a.row;
                return row;
            });
            _this.innerWidth = _this.calculateInnerWidth(_this.xMax);
            _this.innerHeight = _this.calculateInnerHeight(_this.yMax);
            _this.xScale = scaleLinear()
                .rangeRound([0, _this.innerWidth])
                .domain([0, _this.xMax + 1]);
            _this.yScale = scaleLinear()
                .rangeRound([0, _this.innerHeight])
                .domain([0, _this.yMax + 1]);
            _this.parsedNodes = nodes.map(function (_a) {
                var column = _a.column, row = _a.row, rest = __rest(_a, ["column", "row"]);
                var xScaled = _this.xScale(column);
                var yScaled = _this.yScale(row);
                return __assign({ x: xScaled, y: yScaled, column: column,
                    row: row }, rest);
            });
            _this.parsedLinks = links.map(function (_a) {
                var source = _a.source, target = _a.target, rest = __rest(_a, ["source", "target"]);
                var sourceNode = _this.parsedNodes.find(function (node) { return node.id === source; });
                var targetNode = _this.parsedNodes.find(function (node) { return node.id === target; });
                return __assign({ source: sourceNode, target: targetNode }, rest);
            });
        };
        return _this;
    }
    Network.prototype.drawCards = function (container) {
        var _a = this.options, nodeHeight = _a.nodeHeight, nodeWidth = _a.nodeWidth;
        var cards = new NetworkCard(this.model, this.services, {
            container: container,
            selector: "rect.network-card",
            height: nodeHeight,
            width: nodeWidth,
            data: this.parsedNodes
        });
        cards.render();
    };
    Network.prototype.drawLines = function (container) {
        var _a = this.options, nodeHeight = _a.nodeHeight, nodeWidth = _a.nodeWidth;
        var lines = new NetworkLine(this.model, this.services, {
            container: container,
            selector: "rect.network-line",
            nodeHeight: nodeHeight,
            nodeWidth: nodeWidth,
            data: this.parsedLinks
        });
        lines.render();
    };
    Network.prototype.render = function () {
        var _a = DOMUtils.getSVGElementSize(this.parent, { useAttrs: true }), width = _a.width, height = _a.height;
        var svg = this.getContainerSVG();
        var zoomBox = svg.append("rect")
            .attr("height", height)
            .attr("width", width)
            .attr("class", prefix + "--network__background");
        var container = svg.append("g")
            .attr("class", prefix + "--network__content")
            .attr("transform", "translate(0,0)");
        // TODO Move this into ZoomableChart class
        var zoomed = zoom()
            .scaleExtent([0.25, 3])
            .on("zoom", function () {
            container.attr("transform", d3Event.transform);
            container.selectAll("text").attr("user-select", "none");
        })
            .on("end", function () {
            container.selectAll("text").attr("user-select", "auto");
        });
        svg.call(zoomed);
        this.calculatePositions();
        this.drawCards(container);
        this.drawLines(container);
    };
    return Network;
}(Component));
export { Network };
//# sourceMappingURL=../../../../src/components/graphs/network/network.js.map