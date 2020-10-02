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
import { Bar } from "./bar";
import { Tools } from "../../tools";
import { CartesianOrientations, Events, Roles, TooltipTypes } from "../../interfaces";
// D3 Imports
import { select } from "d3-selection";
import { color } from "d3-color";
import { scaleBand } from "d3-scale";
var GroupedBar = /** @class */ (function (_super) {
    __extends(GroupedBar, _super);
    function GroupedBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "grouped-bar";
        // Highlight elements that match the hovered legend item
        _this.handleLegendOnHover = function (event) {
            var hoveredElement = event.detail.hoveredElement;
            _this.parent.selectAll("path.bar")
                .transition(_this.services.transitions.getTransition("legend-hover-bar"))
                .attr("opacity", function (d) { return (d.datasetLabel !== hoveredElement.datum()["key"]) ? 0.3 : 1; });
        };
        // Un-highlight all elements
        _this.handleLegendMouseOut = function (event) {
            _this.parent.selectAll("path.bar")
                .transition(_this.services.transitions.getTransition("legend-mouseout-bar"))
                .attr("opacity", 1);
        };
        return _this;
    }
    GroupedBar.prototype.init = function () {
        var eventsFragment = this.services.events;
        // Highlight correct circle on legend item hovers
        eventsFragment.addEventListener(Events.Legend.ITEM_HOVER, this.handleLegendOnHover);
        // Un-highlight circles on legend item mouseouts
        eventsFragment.addEventListener(Events.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
    };
    GroupedBar.prototype.getGroupWidth = function () {
        var datasets = this.model.getDisplayData().datasets;
        var padding = 5;
        return datasets.length * this.getBarWidth() + (padding * (datasets.length - 1));
    };
    GroupedBar.prototype.setGroupScale = function () {
        var datasets = this.model.getDisplayData().datasets;
        this.groupScale = scaleBand()
            .domain(datasets.map(function (dataset) { return dataset.label; }))
            .rangeRound([0, this.getGroupWidth()]);
    };
    // Gets the correct width for bars based on options & configurations
    GroupedBar.prototype.getBarWidth = function () {
        var datasets = this.model.getDisplayData().datasets;
        var domainScale = this.services.cartesianScales.getDomainScale();
        return Math.min(domainScale.step() / 2 / datasets.length, _super.prototype.getBarWidth.call(this));
    };
    GroupedBar.prototype.render = function (animate) {
        var _this = this;
        // Chart options mixed with the internal configurations
        var displayData = this.model.getDisplayData();
        this.setGroupScale();
        // Grab container SVG
        var svg = this.getContainerSVG();
        // Update data on bar groups
        var barGroups = svg.selectAll("g.bars")
            .data(displayData.labels);
        // Remove dot groups that need to be removed
        barGroups.exit()
            .attr("opacity", 0)
            .remove();
        // Add the bar groups that need to be introduced
        var barGroupsEnter = barGroups.enter()
            .append("g")
            .classed("bars", true)
            .attr("role", Roles.GROUP)
            .attr("aria-labelledby", function (d) { return d; });
        // Update data on all bars
        var bars = barGroupsEnter.merge(barGroups)
            .attr("transform", function (d, i) {
            var scaleValue = _this.services.cartesianScales.getDomainValue(d, i);
            var translateBy = scaleValue - _this.getGroupWidth() / 2 + _this.getBarWidth();
            if (_this.services.cartesianScales.getOrientation() === CartesianOrientations.VERTICAL) {
                return "translate(" + translateBy + ", 0)";
            }
            else {
                // translate in the y direction for horizontal groups
                return "translate(0, " + translateBy + ")";
            }
        })
            .selectAll("path.bar")
            .data(function (d, i) { return _this.addLabelsToDataPoints(d, i); });
        // Remove bars that are no longer needed
        bars.exit()
            .attr("opacity", 0)
            .remove();
        // Add the circles that need to be introduced
        var barsEnter = bars.enter()
            .append("path")
            .attr("opacity", 0);
        // code for vertical grouped bar charts
        barsEnter.merge(bars)
            .classed("bar", true)
            .transition(this.services.transitions.getTransition("bar-update-enter", animate))
            .attr("fill", function (d) { return _this.model.getFillScale()[d.datasetLabel](d.label); })
            .attr("d", function (d) {
            /*
             * Orientation support for horizontal/vertical bar charts
             * Determine coordinates needed for a vertical set of paths
             * to draw the bars needed, and pass those coordinates down to
             * generateSVGPathString() to decide whether it needs to flip them
             */
            var centerX = _this.groupScale(d.datasetLabel);
            var barWidth = _this.getBarWidth();
            var x0 = centerX - barWidth / 2;
            var x1 = centerX + barWidth / 2;
            var y0 = _this.services.cartesianScales.getRangeValue(0);
            var y1 = _this.services.cartesianScales.getRangeValue(d.value);
            return Tools.generateSVGPathString({ x0: x0, x1: x1, y0: y0, y1: y1 }, _this.services.cartesianScales.getOrientation());
        })
            .attr("opacity", 1)
            // a11y
            .attr("role", Roles.GRAPHICS_SYMBOL)
            .attr("aria-roledescription", "bar")
            .attr("aria-label", function (d) { return d.value; });
        // Add event listeners to elements drawn
        this.addEventListeners();
    };
    // TODO - This method could be re-used in more graphs
    GroupedBar.prototype.addLabelsToDataPoints = function (d, index) {
        var datasets = this.model.getDisplayData().datasets;
        return datasets.map(function (dataset) { return ({
            label: d,
            datasetLabel: dataset.label,
            value: dataset.data[index].value ? dataset.data[index].value : dataset.data[index]
        }); });
    };
    GroupedBar.prototype.addEventListeners = function () {
        var self = this;
        this.parent.selectAll("path.bar")
            .on("mouseover", function (datum) {
            var hoveredElement = select(this);
            hoveredElement.transition(self.services.transitions.getTransition("graph_element_mouseover_fill_update"))
                .attr("fill", color(hoveredElement.attr("fill")).darker(0.7).toString());
            // Dispatch mouse event
            self.services.events.dispatchEvent(Events.Bar.BAR_MOUSEOVER, {
                element: hoveredElement,
                datum: datum
            });
            // Show tooltip
            self.services.events.dispatchEvent(Events.Tooltip.SHOW, {
                hoveredElement: hoveredElement,
                type: TooltipTypes.DATAPOINT
            });
        })
            .on("mousemove", function (datum) {
            // Dispatch mouse event
            self.services.events.dispatchEvent(Events.Bar.BAR_MOUSEMOVE, {
                element: select(this),
                datum: datum
            });
        })
            .on("click", function (datum) {
            // Dispatch mouse event
            self.services.events.dispatchEvent(Events.Bar.BAR_CLICK, {
                element: select(this),
                datum: datum
            });
        })
            .on("mouseout", function (datum) {
            var hoveredElement = select(this);
            hoveredElement.classed("hovered", false);
            hoveredElement.transition(self.services.transitions.getTransition("graph_element_mouseout_fill_update"))
                .attr("fill", function (d) { return self.model.getFillScale()[d.datasetLabel](d.label); });
            // Dispatch mouse event
            self.services.events.dispatchEvent(Events.Bar.BAR_MOUSEOUT, {
                element: hoveredElement,
                datum: datum
            });
            // Hide tooltip
            self.services.events.dispatchEvent(Events.Tooltip.HIDE, { hoveredElement: hoveredElement });
        });
    };
    GroupedBar.prototype.destroy = function () {
        // Remove event listeners
        this.parent.selectAll("path.bar")
            .on("mouseover", null)
            .on("mousemove", null)
            .on("mouseout", null);
        // Remove legend listeners
        var eventsFragment = this.services.events;
        eventsFragment.removeEventListener(Events.Legend.ITEM_HOVER, this.handleLegendOnHover);
        eventsFragment.removeEventListener(Events.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
    };
    return GroupedBar;
}(Bar));
export { GroupedBar };
//# sourceMappingURL=../../../src/components/graphs/bar-grouped.js.map