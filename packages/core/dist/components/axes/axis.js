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
import { AxisPositions, Events, ScaleTypes, Roles } from "../../interfaces";
import { Tools } from "../../tools";
import { DOMUtils } from "../../services";
import * as Configuration from "../../configuration";
import { computeTimeIntervalName, formatTick, isTickPrimary } from "../../services/time-series";
// D3 Imports
import { select } from "d3-selection";
import { axisBottom, axisLeft, axisRight, axisTop } from "d3-axis";
var Axis = /** @class */ (function (_super) {
    __extends(Axis, _super);
    function Axis(model, services, configs) {
        var _this = _super.call(this, model, services, configs) || this;
        _this.type = "axes";
        if (configs) {
            _this.configs = configs;
        }
        _this.margins = _this.configs.margins;
        return _this;
    }
    Axis.prototype.render = function (animate) {
        if (animate === void 0) { animate = true; }
        var axisPosition = this.configs.position;
        var options = this.model.getOptions();
        var axisOptions = Tools.getProperty(options, "axes", axisPosition);
        var numberOfTicksProvided = Tools.getProperty(axisOptions, "ticks", "number");
        var isNumberOfTicksProvided = numberOfTicksProvided !== null;
        var isVerticalAxis = axisPosition === AxisPositions.LEFT || axisPosition === AxisPositions.RIGHT;
        var timeScaleOptions = Tools.getProperty(options, "timeScale");
        var svg = this.getContainerSVG();
        var _a = DOMUtils.getSVGElementSize(this.parent, { useAttrs: true }), width = _a.width, height = _a.height;
        var startPosition, endPosition;
        if (axisPosition === AxisPositions.BOTTOM || axisPosition === AxisPositions.TOP) {
            startPosition = this.configs.axes[AxisPositions.LEFT] ? this.margins.left : 0;
            endPosition = this.configs.axes[AxisPositions.RIGHT] ? width - this.margins.right : width;
        }
        else {
            startPosition = height - this.margins.bottom;
            endPosition = this.margins.top;
        }
        // Grab the scale off of the Scales service
        var scale = this.services.cartesianScales.getScaleByPosition(axisPosition);
        if (this.scaleType === ScaleTypes.LABELS) {
            scale.rangeRound([startPosition, endPosition]);
        }
        else {
            scale.range([startPosition, endPosition]);
        }
        // Identify the corresponding d3 axis function
        var axisFunction;
        switch (axisPosition) {
            case AxisPositions.LEFT:
                axisFunction = axisLeft;
                break;
            case AxisPositions.BOTTOM:
                axisFunction = axisBottom;
                break;
            case AxisPositions.RIGHT:
                axisFunction = axisRight;
                break;
            case AxisPositions.TOP:
                axisFunction = axisTop;
                break;
        }
        // Add axis into the parent
        var container = DOMUtils.appendOrSelect(svg, "g.axis." + axisPosition);
        var axisRefExists = !container.select("g.ticks").empty();
        var axisRef = DOMUtils.appendOrSelect(container, "g.ticks");
        if (!axisRefExists) {
            axisRef.attr("role", Roles.GRAPHICS_OBJECT + " " + Roles.GROUP);
        }
        // We draw the invisible axis because of the async nature of d3 transitions
        // To be able to tell the final width & height of the axis when initiaing the transition
        // The invisible axis is updated instantly and without a transition
        var invisibleAxisRef = DOMUtils.appendOrSelect(container, "g.ticks.invisible")
            .style("opacity", "0")
            .attr("aria-hidden", true);
        // Append to DOM a fake tick to get the right computed font height
        var fakeTick = DOMUtils.appendOrSelect(invisibleAxisRef, "g.tick");
        var fakeTickText = DOMUtils.appendOrSelect(fakeTick, "text").text("0");
        var tickHeight = DOMUtils.getSVGElementSize(fakeTickText.node(), { useBBox: true }).height;
        fakeTick.remove();
        var isTimeScaleType = this.scaleType === ScaleTypes.TIME || axisOptions.scaleType === ScaleTypes.TIME;
        // Initialize axis object
        var axis = axisFunction(scale).tickSizeOuter(0);
        if (scale.ticks) {
            var numberOfTicks = void 0;
            if (isNumberOfTicksProvided) {
                numberOfTicks = numberOfTicksProvided;
            }
            else {
                numberOfTicks = Configuration.axis.ticks.number;
                if (isVerticalAxis) {
                    // Set how many ticks based on height
                    numberOfTicks = this.getNumberOfFittingTicks(height, tickHeight, Configuration.tickSpaceRatioVertical);
                }
            }
            axis.ticks(numberOfTicks);
            if (isTimeScaleType) {
                var tickValues = scale
                    .ticks(numberOfTicks)
                    .concat(scale.domain())
                    .map(function (date) { return +date; })
                    .sort();
                tickValues = Tools.removeArrayDuplicates(tickValues);
                // Remove labels on the edges
                // If there are more than 2 labels to show
                if (Tools.getProperty(options, "timeScale", "addSpaceOnEdges") && tickValues.length > 2) {
                    tickValues.splice(tickValues.length - 1, 1);
                    tickValues.splice(0, 1);
                }
                axis.tickValues(tickValues);
            }
            // create the right ticks formatter
            var formatter = void 0;
            if (isTimeScaleType) {
                var timeInterval_1 = computeTimeIntervalName(axis.tickValues());
                formatter = function (t, i) { return formatTick(t, i, timeInterval_1, timeScaleOptions); };
            }
            else {
                formatter = Tools.getProperty(axisOptions, "ticks", "formatter");
            }
            // Set ticks formatter
            axis.tickFormat(formatter);
        }
        // Position and transition the axis
        switch (axisPosition) {
            case AxisPositions.LEFT:
                axisRef.attr("transform", "translate(" + this.margins.left + ", 0)");
                break;
            case AxisPositions.BOTTOM:
                axisRef.attr("transform", "translate(0, " + (height - this.margins.bottom) + ")");
                break;
            case AxisPositions.RIGHT:
                axisRef.attr("transform", "translate(" + (width - this.margins.right) + ", 0)");
                break;
            case AxisPositions.TOP:
                axisRef.attr("transform", "translate(0, " + this.margins.top + ")");
                break;
        }
        // Position the axis title
        if (axisOptions.title) {
            var axisTitleRef = DOMUtils.appendOrSelect(container, "text.axis-title")
                .text(axisOptions.title);
            switch (axisPosition) {
                case AxisPositions.LEFT:
                    axisTitleRef.attr("transform", "rotate(-90)")
                        .attr("y", 0)
                        .attr("x", -(scale.range()[0] / 2))
                        .attr("dy", "1em")
                        .style("text-anchor", "middle");
                    break;
                case AxisPositions.BOTTOM:
                    axisTitleRef.attr("transform", "translate(" + (this.margins.left / 2 + scale.range()[1] / 2) + ", " + height + ")")
                        .style("text-anchor", "middle");
                    break;
                case AxisPositions.RIGHT:
                    axisTitleRef.attr("transform", "rotate(90)")
                        .attr("y", -width)
                        .attr("x", scale.range()[0] / 2)
                        .attr("dy", "1em")
                        .style("text-anchor", "middle");
                    break;
                case AxisPositions.TOP:
                    var titleHeight = DOMUtils.getSVGElementSize(axisTitleRef, { useBBox: true }).height;
                    axisTitleRef.attr("transform", "translate(" + (this.margins.left / 2 + scale.range()[1] / 2) + ", " + titleHeight / 2 + ")")
                        .style("text-anchor", "middle");
                    break;
            }
        }
        // Apply new axis to the axis element
        if (isTimeScaleType) {
            var timeInterval_2 = computeTimeIntervalName(axis.tickValues());
            var showDayName_1 = timeScaleOptions.showDayName;
            var axisRefSelection = axisRef;
            if (animate) {
                axisRef = axisRef.transition(this.services.transitions.getTransition("axis-update", animate));
            }
            axisRef = axisRef.call(axis);
            // Manipulate tick labels to make bold those that are in long format
            var ticks = axisRefSelection.selectAll(".tick").data(axis.tickValues(), scale).order().select("text");
            ticks.style("font-weight", function (tickValue, i) {
                return isTickPrimary(tickValue, i, timeInterval_2, showDayName_1) ? "bold" : "normal";
            });
        }
        else {
            if (!animate || !axisRefExists) {
                axisRef = axisRef.call(axis);
            }
            else {
                axisRef = axisRef
                    .transition(this.services.transitions.getTransition("axis-update"))
                    .call(axis);
            }
        }
        invisibleAxisRef.call(axis);
        if (axisPosition === AxisPositions.BOTTOM || axisPosition === AxisPositions.TOP) {
            var rotateTicks = false;
            // If we're dealing with a discrete scale type
            // We're able to grab the spacing between the ticks
            if (scale.step) {
                var textNodes = invisibleAxisRef.selectAll("g.tick text").nodes();
                // If any ticks are any larger than the scale step size
                rotateTicks = textNodes.some(function (textNode) { return DOMUtils.getSVGElementSize(textNode, { useBBox: true }).width >= scale.step(); });
            }
            else {
                // When dealing with a continuous scale
                // We need to calculate an estimated size of the ticks
                var minTickSize = Tools.getProperty(axisOptions, "ticks", "rotateIfSmallerThan") || Configuration.axis.ticks.rotateIfSmallerThan;
                var ticksNumber = isTimeScaleType ? axis.tickValues().length : scale.ticks().length;
                var estimatedTickSize = width / ticksNumber / 2;
                rotateTicks = estimatedTickSize < minTickSize;
            }
            if (rotateTicks) {
                if (!isNumberOfTicksProvided) {
                    axis.ticks(this.getNumberOfFittingTicks(width, tickHeight, Configuration.tickSpaceRatioHorizontal));
                    invisibleAxisRef.call(axis);
                    axisRef.call(axis);
                }
                container.selectAll("g.ticks g.tick text")
                    .attr("transform", "rotate(45)")
                    .style("text-anchor", axisPosition === AxisPositions.TOP ? "end" : "start");
            }
            else {
                container.selectAll("g.ticks g.tick text")
                    .attr("transform", null)
                    .style("text-anchor", null);
            }
        }
        // Add event listeners to elements drawn
        this.addEventListeners();
    };
    Axis.prototype.addEventListeners = function () {
        var svg = this.getContainerSVG();
        var axisPosition = this.configs.position;
        var container = DOMUtils.appendOrSelect(svg, "g.axis." + axisPosition);
        var self = this;
        container.selectAll("g.tick text")
            .on("mouseover", function (datum) {
            // Dispatch mouse event
            self.services.events.dispatchEvent(Events.Axis.LABEL_MOUSEOVER, {
                element: select(this),
                datum: datum
            });
        })
            .on("mousemove", function (datum) {
            // Dispatch mouse event
            self.services.events.dispatchEvent(Events.Axis.LABEL_MOUSEMOVE, {
                element: select(this),
                datum: datum
            });
        })
            .on("click", function (datum) {
            // Dispatch mouse event
            self.services.events.dispatchEvent(Events.Axis.LABEL_CLICK, {
                element: select(this),
                datum: datum
            });
        })
            .on("mouseout", function (datum) {
            // Dispatch mouse event
            self.services.events.dispatchEvent(Events.Axis.LABEL_MOUSEOUT, {
                element: select(this),
                datum: datum
            });
        });
    };
    Axis.prototype.getInvisibleAxisRef = function () {
        var axisPosition = this.configs.position;
        return this.getContainerSVG()
            .select("g.axis." + axisPosition + " g.ticks.invisible");
    };
    Axis.prototype.getTitleRef = function () {
        var axisPosition = this.configs.position;
        return this.getContainerSVG()
            .select("g.axis." + axisPosition + " text.axis-title");
    };
    Axis.prototype.getNumberOfFittingTicks = function (size, tickSize, spaceRatio) {
        var numberOfTicksFit = Math.floor(size / (tickSize * spaceRatio));
        return Tools.clamp(numberOfTicksFit, 2, Configuration.axis.ticks.number);
    };
    Axis.prototype.destroy = function () {
        var svg = this.getContainerSVG();
        var axisPosition = this.configs.position;
        var container = DOMUtils.appendOrSelect(svg, "g.axis." + axisPosition);
        // Remove event listeners
        container.selectAll("g.tick text")
            .on("mouseover", null)
            .on("mousemove", null)
            .on("mouseout", null);
    };
    return Axis;
}(Component));
export { Axis };
//# sourceMappingURL=../../../src/components/axes/axis.js.map