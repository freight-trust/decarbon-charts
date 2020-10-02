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
import { TooltipTypes, Roles, Events } from "../../interfaces";
// D3 Imports
import { select, event as d3Event } from "d3-selection";
var Scatter = /** @class */ (function (_super) {
    __extends(Scatter, _super);
    function Scatter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "scatter";
        _this.handleLegendOnHover = function (event) {
            var hoveredElement = event.detail.hoveredElement;
            _this.parent.selectAll("circle.dot")
                .transition(_this.services.transitions.getTransition("legend-hover-scatter"))
                .attr("opacity", function (d) { return (d.datasetLabel !== hoveredElement.datum()["key"]) ? 0.3 : 1; });
        };
        _this.handleLegendMouseOut = function (event) {
            _this.parent.selectAll("circle.dot")
                .transition(_this.services.transitions.getTransition("legend-mouseout-scatter"))
                .attr("opacity", 1);
        };
        return _this;
    }
    Scatter.prototype.init = function () {
        var eventsFragment = this.services.events;
        // Highlight correct circle on legend item hovers
        eventsFragment.addEventListener(Events.Legend.ITEM_HOVER, this.handleLegendOnHover);
        // Un-highlight circles on legend item mouseouts
        eventsFragment.addEventListener(Events.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
    };
    Scatter.prototype.render = function (animate) {
        var _this = this;
        // Chart options mixed with the internal configurations
        var options = this.model.getOptions();
        // Grab container SVG
        var svg = this.getContainerSVG();
        // Update data on dot groups
        var dotGroups = svg.selectAll("g.dots")
            .data(this.model.getDisplayData().datasets, function (dataset) { return dataset.label; });
        // Remove dot groups that need to be removed
        dotGroups.exit()
            .attr("opacity", 0)
            .remove();
        // Add the dot groups that need to be introduced
        var dotGroupsEnter = dotGroups.enter()
            .append("g")
            .classed("dots", true)
            .attr("role", Roles.GROUP);
        // Update data on all circles
        var dots = dotGroupsEnter.merge(dotGroups)
            .selectAll("circle.dot")
            .data(function (d, i) { return _this.addLabelsToDataPoints(d, i); });
        // Add the circles that need to be introduced
        var dotsEnter = dots.enter()
            .append("circle")
            .attr("opacity", 0);
        // Apply styling & position
        var circlesToStyle = dotsEnter.merge(dots);
        this.styleCircles(circlesToStyle, animate);
        // Add event listeners to elements drawn
        this.addEventListeners();
    };
    Scatter.prototype.styleCircles = function (selection, animate) {
        var _this = this;
        // Chart options mixed with the internal configurations
        var options = this.model.getOptions();
        var filled = options.points.filled;
        selection.raise()
            .classed("dot", true)
            .classed("filled", function (d) { return _this.model.getIsFilled(d.datasetLabel, d.label, d, filled); })
            .classed("unfilled", function (d) { return !_this.model.getIsFilled(d.datasetLabel, d.label, d, filled); })
            .attr("cx", function (d, i) { return _this.services.cartesianScales.getDomainValue(d, i); })
            .transition(this.services.transitions.getTransition("scatter-update-enter", animate))
            .attr("cy", function (d, i) { return _this.services.cartesianScales.getRangeValue(d, i); })
            .attr("r", options.points.radius)
            .attr("fill", function (d) {
            if (_this.model.getIsFilled(d.datasetLabel, d.label, d, filled)) {
                return _this.model.getFillColor(d.datasetLabel, d.label, d);
            }
        })
            .attr("fill-opacity", filled ? 0.2 : 1)
            .attr("stroke", function (d) { return _this.model.getStrokeColor(d.datasetLabel, d.label, d); })
            .attr("opacity", 1)
            // a11y
            .attr("role", Roles.GRAPHICS_SYMBOL)
            .attr("aria-roledescription", "point")
            .attr("aria-label", function (d) { return d.value; });
        // Add event listeners to elements drawn
        this.addEventListeners();
    };
    // TODO - This method could be re-used in more graphs
    Scatter.prototype.addLabelsToDataPoints = function (d, index) {
        var labels = this.model.getDisplayData().labels;
        return d.data
            // Remove datapoints with no value
            .filter(function (datum) {
            var value = isNaN(datum) ? datum.value : datum;
            if (value === null || value === undefined) {
                return false;
            }
            return true;
        })
            .map(function (datum, i) { return ({
            date: datum.date,
            label: labels[i],
            datasetLabel: d.label,
            class: datum.class,
            value: isNaN(datum) ? datum.value : datum
        }); });
    };
    Scatter.prototype.addEventListeners = function () {
        var self = this;
        this.parent.selectAll("circle")
            .on("mouseover mousemove", function (datum) {
            var hoveredElement = select(this);
            hoveredElement.classed("hovered", true)
                .style("fill", function (d) { return self.model.getFillColor(d.datasetLabel, d.label, d); });
            var eventNameToDispatch = d3Event.type === "mouseover" ? Events.Scatter.SCATTER_MOUSEOVER : Events.Scatter.SCATTER_MOUSEMOVE;
            // Dispatch mouse event
            self.services.events.dispatchEvent(eventNameToDispatch, {
                element: hoveredElement,
                datum: datum
            });
            // Show tooltip
            self.services.events.dispatchEvent(Events.Tooltip.SHOW, {
                hoveredElement: hoveredElement,
                type: TooltipTypes.DATAPOINT
            });
        })
            .on("click", function (datum) {
            // Dispatch mouse event
            self.services.events.dispatchEvent(Events.Scatter.SCATTER_CLICK, {
                element: select(this),
                datum: datum
            });
        })
            .on("mouseout", function (datum) {
            var hoveredElement = select(this);
            hoveredElement.classed("hovered", false);
            if (!self.configs.filled) {
                hoveredElement.style("fill", null);
            }
            // Dispatch mouse event
            self.services.events.dispatchEvent(Events.Scatter.SCATTER_MOUSEOUT, {
                element: hoveredElement,
                datum: datum
            });
            // Hide tooltip
            self.services.events.dispatchEvent(Events.Tooltip.HIDE, { hoveredElement: hoveredElement });
        });
    };
    Scatter.prototype.destroy = function () {
        // Remove event listeners
        this.parent.selectAll("circle")
            .on("mousemove", null)
            .on("mouseout", null);
        // Remove legend listeners
        var eventsFragment = this.services.events;
        eventsFragment.removeEventListener(Events.Legend.ITEM_HOVER, this.handleLegendOnHover);
        eventsFragment.removeEventListener(Events.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
    };
    return Scatter;
}(Component));
export { Scatter };
//# sourceMappingURL=../../../src/components/graphs/scatter.js.map