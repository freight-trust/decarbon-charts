/**
 * enum of all events related to the chart on the DOM
 */
export var Chart;
(function (Chart) {
    Chart["RENDER_FINISHED"] = "render-finished";
    Chart["RESIZE"] = "chart-resize";
})(Chart || (Chart = {}));
/**
 * enum of all events related to the chart model
 */
export var Model;
(function (Model) {
    Model["UPDATE"] = "model-update";
})(Model || (Model = {}));
/**
 * enum of all axis-related events
 */
export var Axis;
(function (Axis) {
    Axis["LABEL_MOUSEOVER"] = "axis-label-mouseover";
    Axis["LABEL_MOUSEMOVE"] = "axis-label-mousemove";
    Axis["LABEL_CLICK"] = "axis-label-click";
    Axis["LABEL_MOUSEOUT"] = "axis-label-mouseout";
})(Axis || (Axis = {}));
/**
 * enum of all pie graph events
 */
export var Pie;
(function (Pie) {
    Pie["SLICE_MOUSEOVER"] = "pie-slice-mouseover";
    Pie["SLICE_MOUSEMOVE"] = "pie-slice-mousemove";
    Pie["SLICE_CLICK"] = "pie-slice-click";
    Pie["SLICE_MOUSEOUT"] = "pie-slice-mouseout";
})(Pie || (Pie = {}));
/**
 * enum of all bar graph events
 */
export var Bar;
(function (Bar) {
    Bar["BAR_MOUSEOVER"] = "bar-mouseover";
    Bar["BAR_MOUSEMOVE"] = "bar-mousemove";
    Bar["BAR_CLICK"] = "bar-click";
    Bar["BAR_MOUSEOUT"] = "bar-mouseout";
})(Bar || (Bar = {}));
/**
 * enum of all scatter graph events
 */
export var Scatter;
(function (Scatter) {
    Scatter["SCATTER_MOUSEOVER"] = "scatter-mouseover";
    Scatter["SCATTER_MOUSEMOVE"] = "scatter-mousemove";
    Scatter["SCATTER_CLICK"] = "scatter-click";
    Scatter["SCATTER_MOUSEOUT"] = "scatter-mouseout";
})(Scatter || (Scatter = {}));
/**
 * enum of all line graph events
 */
export var Line;
(function (Line) {
    Line["POINT_MOUSEOVER"] = "scatter-mouseover";
    Line["POINT_MOUSEMOVE"] = "scatter-mousemove";
    Line["POINT_CLICK"] = "scatter-click";
    Line["POINT_MOUSEOUT"] = "scatter-mouseout";
})(Line || (Line = {}));
/**
 * enum of all tooltip events
 */
export var Tooltip;
(function (Tooltip) {
    Tooltip["SHOW"] = "show-tooltip";
    Tooltip["HIDE"] = "hide-tooltip";
})(Tooltip || (Tooltip = {}));
/**
 * enum of all legend related events
 */
export var Legend;
(function (Legend) {
    Legend["ITEM_HOVER"] = "legend-item-onhover";
    Legend["ITEM_CLICK"] = "legend-item-onclick";
    Legend["ITEM_MOUSEOUT"] = "legend-item-onmouseout";
    Legend["ITEMS_UPDATE"] = "legend-items-update";
})(Legend || (Legend = {}));
//# sourceMappingURL=../../src/interfaces/events.js.map