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
import { Component } from "../../component";
import { buildIconString } from "./utils";
var prefix = settings.prefix;
var NetworkCard = /** @class */ (function (_super) {
    __extends(NetworkCard, _super);
    function NetworkCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetworkCard.prototype.render = function () {
        var _a = this.configs, container = _a.container, selector = _a.selector, height = _a.height, width = _a.width, data = _a.data;
        var cards = container.selectAll(selector)
            .data(data);
        var cardGroup = cards
            .enter()
            .append("g")
            .attr("class", function (_a) {
            var _b;
            var kind = _a.kind;
            return classnames(prefix + "--network-card", (_b = {},
                _b[prefix + "--network-card--" + kind] = kind,
                _b));
        })
            .attr("transform", function (_a) {
            var x = _a.x, y = _a.y;
            return "translate(" + x + "," + y + ")";
        });
        var cardBackground = cardGroup
            .append("rect")
            .attr("height", height)
            .attr("width", width)
            .attr("focusable", true)
            .attr("tabindex", 0)
            .attr("class", prefix + "--network-card__background")
            .on("click", function (_a) {
            var onClick = _a.onClick;
            return onClick && onClick();
        });
        var textGroup = cardGroup
            .append("g")
            .attr("class", prefix + "--network-card__content");
        var textHeading = textGroup
            .append("text")
            .attr("class", prefix + "--network-card__heading")
            .text(function (_a) {
            var heading = _a.heading;
            return heading;
        });
        var textSubHeading = textGroup
            .append("text")
            .attr("class", prefix + "--network-card__subheading")
            .text(function (_a) {
            var subheading = _a.subheading;
            return subheading;
        });
        var cardStroke = cardGroup
            .append("rect")
            .attr("height", height)
            .attr("width", 4)
            .attr("class", prefix + "--network-card__stroke");
        var cardIcon = cardGroup
            .append("g")
            .attr("class", prefix + "--network-card__icon-path")
            .html(function (_a) {
            var renderIcon = _a.renderIcon;
            return renderIcon && buildIconString(renderIcon);
        });
    };
    return NetworkCard;
}(Component));
export { NetworkCard };
//# sourceMappingURL=../../../../src/components/graphs/network/network-card.js.map