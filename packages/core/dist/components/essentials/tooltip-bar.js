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
import { Tooltip } from "./tooltip";
import { Tools } from "../../tools";
import { DOMUtils } from "../../services";
import { TooltipPosition, TooltipTypes, CartesianOrientations } from "./../../interfaces/enums";
// import the settings for the css prefix
import settings from "carbon-components/src/globals/js/settings";
// D3 Imports
import { select } from "d3-selection";
var TooltipBar = /** @class */ (function (_super) {
    __extends(TooltipBar, _super);
    function TooltipBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TooltipBar.prototype.init = function () {
        var _this = this;
        // Grab the tooltip element
        var holder = select(this.services.domUtils.getHolder());
        var chartprefix = Tools.getProperty(this.model.getOptions(), "style", "prefix");
        this.tooltip = DOMUtils.appendOrSelect(holder, "div." + settings.prefix + "--" + chartprefix + "--tooltip");
        // Apply html content to the tooltip
        var tooltipTextContainer = DOMUtils.appendOrSelect(this.tooltip, "div.content-box");
        this.tooltip.style("max-width", null);
        // listen to show-tooltip Custom Events to render the tooltip
        this.services.events.addEventListener("show-tooltip", function (e) {
            // check the type of tooltip and that it is enabled
            if ((e.detail.type === TooltipTypes.DATAPOINT && Tools.getProperty(_this.model.getOptions(), "tooltip", "datapoint", "enabled"))
                || (e.detail.type === TooltipTypes.GRIDLINE && Tools.getProperty(_this.model.getOptions(), "tooltip", "gridline", "enabled"))) {
                var data = e.detail.hoveredElement.datum();
                var hoveredElement = e.detail.hoveredElement.node();
                var defaultHTML = void 0;
                if (e.detail.multidata) {
                    // multi tooltip
                    data = e.detail.multidata;
                    defaultHTML = _this.getMultilineTooltipHTML(data);
                }
                else {
                    defaultHTML = _this.getTooltipHTML(e.detail.hoveredElement.datum());
                }
                // if there is a provided tooltip HTML function call it and pass the defaultHTML
                if (Tools.getProperty(_this.model.getOptions(), "tooltip", "customHTML")) {
                    tooltipTextContainer.html(_this.model.getOptions().tooltip.customHTML(data, defaultHTML));
                }
                else {
                    // default tooltip
                    tooltipTextContainer.html(defaultHTML);
                }
                var position = _this.getTooltipPosition(hoveredElement);
                // Position the tooltip relative to the bars
                _this.positionTooltip(e.detail.multidata ? undefined : position);
            }
            else if (e.detail.type === TooltipTypes.TITLE) {
                // use the chart size to enforce a max width on the tooltip
                var chart = DOMUtils.appendOrSelect(holder, "svg." + settings.prefix + "--" + chartprefix + "--chart-svg");
                // use the configs to determine how large the tooltip should be
                var tooltipMax = DOMUtils.getSVGElementSize(chart).width * Tools.getProperty(_this.model.getOptions(), "tooltip", "title", "width");
                _this.tooltip.style("max-width", tooltipMax);
                // use tooltip.ts to get the tooltip html for titles
                tooltipTextContainer.html(_super.prototype.getTooltipHTML.call(_this, e.detail.hoveredElement, TooltipTypes.TITLE));
                // get the position based on the title positioning (static)
                var position = _super.prototype.getTooltipPosition.call(_this, e.detail.hoveredElement.node());
                _this.positionTooltip(position);
            }
            // Fade in
            _this.tooltip.classed("hidden", false);
        });
        // listen to hide-tooltip Custom Events to hide the tooltip
        this.services.events.addEventListener("hide-tooltip", function () {
            _this.tooltip.classed("hidden", true);
        });
    };
    /**
     * Get the position of the tooltip relative to the active hovered bar. Tooltip should appear above
     * positive valued data and below negative value data.
     * @param hoveredElement
     */
    TooltipBar.prototype.getTooltipPosition = function (hoveredElement) {
        var data = select(hoveredElement).datum();
        var holderPosition = select(this.services.domUtils.getHolder()).node().getBoundingClientRect();
        var barPosition = hoveredElement.getBoundingClientRect();
        var verticalOffset = this.model.getOptions().tooltip.datapoint.verticalOffset;
        // if there is a negative value bar chart, need to place the tooltip below the bar
        if (data.value <= 0) {
            // negative bars
            var tooltipPos = {
                left: (barPosition.left - holderPosition.left) + barPosition.width / 2,
                top: (barPosition.bottom - holderPosition.top) + verticalOffset
            };
            return { placement: TooltipPosition.BOTTOM, position: tooltipPos };
        }
        else {
            // positive bars
            var tooltipPos = {
                left: (barPosition.left - holderPosition.left) + barPosition.width / 2,
                top: (barPosition.top - holderPosition.top) - verticalOffset
            };
            return { placement: TooltipPosition.TOP, position: tooltipPos };
        }
    };
    /**
     * Returns the html for the bar single point tooltip
     * @param data associated values for the hovered bar
     */
    TooltipBar.prototype.getTooltipHTML = function (data) {
        var formattedValue = Tools.getProperty(this.model.getOptions(), "tooltip", "valueFormatter") ?
            this.model.getOptions().tooltip.valueFormatter(data.value) : data.value.toLocaleString("en");
        return "<div class=\"datapoint-tooltip\"><p class=\"value\">" + formattedValue + "</p></div>";
    };
    /**
     * Multip tooltips for bar charts include totals for each stack
     * @param data
     */
    TooltipBar.prototype.getMultilineTooltipHTML = function (data) {
        var _this = this;
        var points = data;
        points.reverse();
        // in a vertical bar chart the tooltip should display in order of the drawn bars
        // in horizontal stacked bar, the order of the segments from Left to Right are displayed top down in tooltip
        if (this.services.cartesianScales.getOrientation() === CartesianOrientations.VERTICAL) {
            points.reverse();
        }
        // get the total for the stacked tooltip
        var total = points.reduce(function (sum, item) { return sum + item.value; }, 0);
        // format the total value
        total = Tools.getProperty(this.model.getOptions(), "tooltip", "valueFormatter") ?
            this.model.getOptions().tooltip.valueFormatter(total) : total.toLocaleString("en");
        return "<ul class='multi-tooltip'>" +
            points.map(function (datapoint) {
                var formattedValue = Tools.getProperty(_this.model.getOptions(), "tooltip", "valueFormatter") ?
                    _this.model.getOptions().tooltip.valueFormatter(datapoint.value) : datapoint.value.toLocaleString("en");
                // For the tooltip color, we always want the normal stroke color, not dynamically determined by data value.
                var indicatorColor = _this.model.getStrokeColor(datapoint.datasetLabel, datapoint.label);
                return "\n\t\t\t\t<li>\n\t\t\t\t\t<div class=\"datapoint-tooltip\">\n\t\t\t\t\t\t<a style=\"background-color:" + indicatorColor + "\" class=\"tooltip-color\"></a>\n\t\t\t\t\t\t<p class=\"label\">" + datapoint.datasetLabel + "</p>\n\t\t\t\t\t\t<p class=\"value\">" + formattedValue + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t</li>";
            }).join("") +
            ("<li>\n\t\t\t\t\t<div class='total-val'>\n\t\t\t\t\t\t<p class='label'>Total</p>\n\t\t\t\t\t\t<p class='value'>" + total + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>");
    };
    return TooltipBar;
}(Tooltip));
export { TooltipBar };
//# sourceMappingURL=../../../src/components/essentials/tooltip-bar.js.map