/**
 * enum of all events related to the chart on the DOM
 */
export declare enum Chart {
    RENDER_FINISHED = "render-finished",
    RESIZE = "chart-resize"
}
/**
 * enum of all events related to the chart model
 */
export declare enum Model {
    UPDATE = "model-update"
}
/**
 * enum of all axis-related events
 */
export declare enum Axis {
    LABEL_MOUSEOVER = "axis-label-mouseover",
    LABEL_MOUSEMOVE = "axis-label-mousemove",
    LABEL_CLICK = "axis-label-click",
    LABEL_MOUSEOUT = "axis-label-mouseout"
}
/**
 * enum of all pie graph events
 */
export declare enum Pie {
    SLICE_MOUSEOVER = "pie-slice-mouseover",
    SLICE_MOUSEMOVE = "pie-slice-mousemove",
    SLICE_CLICK = "pie-slice-click",
    SLICE_MOUSEOUT = "pie-slice-mouseout"
}
/**
 * enum of all bar graph events
 */
export declare enum Bar {
    BAR_MOUSEOVER = "bar-mouseover",
    BAR_MOUSEMOVE = "bar-mousemove",
    BAR_CLICK = "bar-click",
    BAR_MOUSEOUT = "bar-mouseout"
}
/**
 * enum of all scatter graph events
 */
export declare enum Scatter {
    SCATTER_MOUSEOVER = "scatter-mouseover",
    SCATTER_MOUSEMOVE = "scatter-mousemove",
    SCATTER_CLICK = "scatter-click",
    SCATTER_MOUSEOUT = "scatter-mouseout"
}
/**
 * enum of all line graph events
 */
export declare enum Line {
    POINT_MOUSEOVER = "scatter-mouseover",
    POINT_MOUSEMOVE = "scatter-mousemove",
    POINT_CLICK = "scatter-click",
    POINT_MOUSEOUT = "scatter-mouseout"
}
/**
 * enum of all tooltip events
 */
export declare enum Tooltip {
    SHOW = "show-tooltip",
    HIDE = "hide-tooltip"
}
/**
 * enum of all legend related events
 */
export declare enum Legend {
    ITEM_HOVER = "legend-item-onhover",
    ITEM_CLICK = "legend-item-onclick",
    ITEM_MOUSEOUT = "legend-item-onmouseout",
    ITEMS_UPDATE = "legend-items-update"
}
