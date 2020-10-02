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
import { TooltipTypes, Events } from "./../../interfaces";
var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "title";
        return _this;
    }
    /**
     * Truncates title creating ellipses and attaching tooltip for exposing full title.
     */
    Title.prototype.truncateTitle = function () {
        // get a reference to the title elements to calculate the size the title can be
        var containerWidth = DOMUtils.getSVGElementSize(this.services.domUtils.getMainSVG(), { useAttr: true }).width;
        var title = DOMUtils.appendOrSelect(this.parent, "text.title");
        // sanity check to prevent stack overflow on binary search
        if (containerWidth <= 0) {
            return;
        }
        // check if the title is too big for the containing svg
        if (title.node().getComputedTextLength() > containerWidth) {
            // append the ellipses to their own tspan to calculate the text length
            title.append("tspan")
                .text("...");
            // get the bounding width including the elipses '...'
            var tspanLength = DOMUtils.appendOrSelect(title, "tspan").node().getComputedTextLength();
            var truncatedSize = Math.floor(containerWidth - tspanLength);
            var titleString = this.model.getOptions().title;
            // get the index for creating the max length substring that fit within the svg
            // use one less than the index to avoid crowding (the elipsis)
            var substringIndex = this.getSubstringIndex(title.node(), 0, titleString.length - 1, truncatedSize);
            // use the substring as the title
            title.text(titleString.substring(0, substringIndex - 1))
                .append("tspan")
                .text("...");
            // add events for displaying the tooltip with the title
            var self_1 = this;
            title
                .on("mouseenter", function () {
                self_1.services.events.dispatchEvent(Events.Tooltip.SHOW, {
                    hoveredElement: title,
                    type: TooltipTypes.TITLE
                });
            })
                .on("mouseout", function () {
                self_1.services.events.dispatchEvent(Events.Tooltip.HIDE, {
                    hoveredElement: title
                });
            });
        }
    };
    Title.prototype.render = function () {
        var svg = this.getContainerSVG();
        var text = DOMUtils.appendOrSelect(svg, "text.title");
        text.attr("x", 0)
            .attr("y", 20)
            .text(this.model.getOptions().title);
        // title needs to first render so that we can check for overflow
        this.truncateTitle();
    };
    /**
     * Returns the index for a maximum length substring that is less than the width parameter.
     * @param title the title node used for getting the text lengths of substrings
     * @param start the start index for the binary search
     * @param end the end index for the binary search
     * @param width the width of the svg container that holds the title
     */
    Title.prototype.getSubstringIndex = function (title, start, end, width) {
        var mid = Math.floor((end + start) / 2);
        if (title.getSubStringLength(0, mid) > width) {
            return this.getSubstringIndex(title, start, mid, width);
        }
        else if (title.getSubStringLength(0, mid) < width) {
            if (title.getSubStringLength(0, mid + 1) > width) {
                return mid;
            }
            return this.getSubstringIndex(title, mid, end, width);
        }
        else {
            return mid;
        }
    };
    return Title;
}(Component));
export { Title };
//# sourceMappingURL=../../../src/components/essentials/title.js.map