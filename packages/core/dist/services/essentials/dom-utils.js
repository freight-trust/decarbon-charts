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
import { Service } from "../service";
import { Events } from "./../../interfaces";
// D3 Imports
import { select } from "d3-selection";
import { Tools } from "../../tools";
// import the settings for the css prefix
import settings from "carbon-components/src/globals/js/settings";
// MISC
import ResizeObserver from "resize-observer-polyfill";
var DOMUtils = /** @class */ (function (_super) {
    __extends(DOMUtils, _super);
    function DOMUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DOMUtils.getSVGElementSize = function (svgSelector, options) {
        if (!svgSelector.attr) {
            svgSelector = select(svgSelector);
        }
        var finalDimensions = {
            width: 0,
            height: 0
        };
        var validateAndSetDimensions = function (dimensions) {
            if (dimensions) {
                Object.keys(finalDimensions).forEach(function (dimensionKey) {
                    if (dimensions[dimensionKey]) {
                        var dimension = dimensions[dimensionKey];
                        var dimensionNumber = parseFloat(dimension);
                        if (dimension &&
                            dimensionNumber > finalDimensions[dimensionKey] &&
                            ("" + dimension).indexOf("%") === -1) {
                            finalDimensions[dimensionKey] = dimensionNumber;
                        }
                    }
                });
            }
        };
        var attrDimensions = {
            width: svgSelector.attr("width"),
            height: svgSelector.attr("height")
        };
        var bbox, bboxDimensions, boundingRect, boundingRectDimensions;
        // In many versions of Firefox
        // getBBox will cause an "NSFailure" error
        try {
            bbox = svgSelector.node().getBBox();
            bboxDimensions = {
                width: bbox.width,
                height: bbox.height
            };
        }
        catch (e) { }
        try {
            boundingRect = svgSelector.node().getBoundingClientRect();
            boundingRectDimensions = {
                width: boundingRect.width,
                height: boundingRect.height
            };
        }
        catch (e) { }
        var clientDimensions = {
            width: svgSelector.node().clientWidth,
            height: svgSelector.node().clientHeight
        };
        // If both attribute values are numbers
        // And not percentages or NaN
        if (options) {
            if (options.useAttrs) {
                validateAndSetDimensions(attrDimensions);
                if (finalDimensions.width > 0 && finalDimensions.height > 0) {
                    return finalDimensions;
                }
            }
            if (options.useClientDimensions) {
                validateAndSetDimensions(clientDimensions);
                if (finalDimensions.width > 0 && finalDimensions.height > 0) {
                    return clientDimensions;
                }
            }
            if (options.useBBox) {
                validateAndSetDimensions(bboxDimensions);
                if (finalDimensions.width > 0 && finalDimensions.height > 0) {
                    return bboxDimensions;
                }
            }
            if (options.useBoundingRect) {
                validateAndSetDimensions(boundingRectDimensions);
                if (finalDimensions.width > 0 && finalDimensions.height > 0) {
                    return boundingRectDimensions;
                }
            }
        }
        try {
            var nativeDimensions = {
                width: Tools.getProperty(svgSelector.node(), "width", "baseVal", "value"),
                height: Tools.getProperty(svgSelector.node(), "height", "baseVal", "value")
            };
            validateAndSetDimensions(nativeDimensions);
        }
        catch (e) {
            validateAndSetDimensions(clientDimensions);
            validateAndSetDimensions(bboxDimensions);
            validateAndSetDimensions(attrDimensions);
        }
        return finalDimensions;
    };
    DOMUtils.appendOrSelect = function (parent, query) {
        var querySections = query.split(".");
        var elementToAppend = querySections[0];
        var selection = parent.select(query);
        if (selection.empty()) {
            return parent.append(elementToAppend)
                .attr("class", querySections.slice(1).join(" "));
        }
        return selection;
    };
    DOMUtils.prototype.init = function () {
        // Add width & height to the chart holder if necessary, and add a classname
        this.styleHolderElement();
        // Add main SVG
        this.addSVGElement();
        if (this.model.getOptions().resizable) {
            this.addResizeListener();
        }
    };
    DOMUtils.prototype.update = function () {
        this.styleHolderElement();
    };
    DOMUtils.prototype.styleHolderElement = function () {
        var holderElement = this.getHolder();
        // Add class to chart holder
        select(this.getHolder()).classed(settings.prefix + "--chart-holder", true);
        // In order for resize events to not clash with these updates
        // We'll check if the width & height values passed in options
        // Have changed, before setting them to the holder
        var _a = this.model.getOptions(), width = _a.width, height = _a.height;
        if (width !== this.width) {
            // Apply formatted width attribute to chart
            holderElement.style.width = width;
            this.width = width;
        }
        if (height !== this.height) {
            // Apply formatted width attribute to chart
            holderElement.style.height = height;
            this.height = height;
        }
    };
    DOMUtils.prototype.getHolder = function () {
        return this.model.get("holder");
    };
    DOMUtils.prototype.addSVGElement = function () {
        var chartsprefix = Tools.getProperty(this.model.getOptions(), "style", "prefix");
        var svg = select(this.getHolder())
            .append("svg")
            .classed(settings.prefix + "--" + chartsprefix + "--chart-svg", true)
            .attr("height", "100%")
            .attr("width", "100%");
        this.svg = svg.node();
    };
    DOMUtils.prototype.getMainSVG = function () {
        return this.svg;
    };
    DOMUtils.prototype.addResizeListener = function () {
        var _this = this;
        var holder = this.getHolder();
        if (!holder) {
            return;
        }
        // Grab current dimensions of the chart holder
        var containerWidth = holder.clientWidth;
        var containerHeight = holder.clientHeight;
        // The resize callback function
        var resizeCallback = Tools.debounce(function (entries, observer) {
            if (!holder) {
                return;
            }
            if (Math.abs(containerWidth - holder.clientWidth) > 1
                || Math.abs(containerHeight - holder.clientHeight) > 1) {
                containerWidth = holder.clientWidth;
                containerHeight = holder.clientHeight;
                _this.services.events.dispatchEvent(Events.Chart.RESIZE);
            }
        }, 12.5);
        // Observe the behaviour of resizing on the holder
        var resizeObserver = new ResizeObserver(resizeCallback);
        resizeObserver.observe(holder);
    };
    return DOMUtils;
}(Service));
export { DOMUtils };
//# sourceMappingURL=../../../src/services/essentials/dom-utils.js.map