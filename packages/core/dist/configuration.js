import { Tools } from "./tools";
import { LegendPositions, } from "./interfaces";
import enUSLocaleObject from "date-fns/locale/en-US/index";
/*
 *****************************
 * User configurable options *
 *****************************
 */
/**
 * Legend options
 */
export var legend = {
    position: LegendPositions.BOTTOM,
    clickable: true,
    enabled: true,
    items: {
        status: {
            ACTIVE: 1,
            DISABLED: 0
        },
        horizontalSpace: 12,
        verticalSpace: 24,
        textYOffset: 8
    },
    checkbox: {
        radius: 6.5,
        spaceAfter: 4
    }
};
/**
 * Grid options
 */
export var grid = {
    x: {
        numberOfTicks: 5
    },
    y: {
        numberOfTicks: 5
    }
};
/**
 * Tooltip options
 */
export var baseTooltip = {
    datapoint: {
        horizontalOffset: 10,
        enabled: true,
    },
    title: {
        verticalOffset: .75,
        width: .4
    }
};
export var axisChartTooltip = Tools.merge({}, baseTooltip, {
    gridline: {
        enabled: true,
        threshold: 0.25
    }
});
export var barChartTooltip = Tools.merge({}, axisChartTooltip, {
    datapoint: {
        verticalOffset: 4
    },
    gridline: {
        enabled: false
    }
});
// These options will be managed by Tools.mergeDefaultChartOptions
// by removing the ones the user is not providing,
// and by TwoDimensionalAxes.
var axes = {
    top: {
        includeZero: true
    },
    bottom: {
        includeZero: true
    },
    left: {
        includeZero: true
    },
    right: {
        includeZero: true
    }
};
export var timeScale = {
    addSpaceOnEdges: 1,
    showDayName: false,
    localeObject: enUSLocaleObject,
    timeIntervalFormats: {
        "15seconds": { primary: "MMM d, pp", secondary: "pp" },
        "minute": { primary: "MMM d, p", secondary: "p" },
        "30minutes": { primary: "MMM d, p", secondary: "p" },
        "hourly": { primary: "MMM d, hh a", secondary: "hh a" },
        "daily": { primary: "MMM d", secondary: "d" },
        "weekly": { primary: "eee, MMM d", secondary: "eee" },
        "monthly": { primary: "MMM yyyy", secondary: "MMM" },
        "quarterly": { primary: "QQQ ''yy", secondary: "QQQ" },
        "yearly": { primary: "yyyy", secondary: "yyyy" }
    }
};
/**
 * Base chart options common to any chart
 */
var chart = {
    width: null,
    height: null,
    resizable: true,
    tooltip: baseTooltip,
    legend: legend,
    style: {
        prefix: "cc"
    }
};
/**
 * Options common to any chart with an axis
 */
var axisChart = Tools.merge({}, chart, {
    axes: axes,
    timeScale: timeScale,
    grid: grid,
    tooltip: axisChartTooltip
});
/**
 * Options common to any chart with an axis
 */
var zoomableChart = Tools.merge({}, chart, {
    initialZoom: 1
});
/**
 * options specific to simple bar charts
 */
var baseBarChart = Tools.merge({}, axisChart, {
    bars: {
        maxWidth: 16
    },
    timeScale: Tools.merge(timeScale, {
        addSpaceOnEdges: 1
    }),
    tooltip: barChartTooltip,
});
/**
 * options specific to simple bar charts
 */
var simpleBarChart = Tools.merge({}, baseBarChart, {});
/**
 * options specific to simple bar charts
 */
var groupedBarChart = Tools.merge({}, baseBarChart, {});
/**
 * options specific to stacked bar charts
 */
var stackedBarChart = Tools.merge({}, baseBarChart, {
    bars: Tools.merge({}, baseBarChart.bars, {
        dividerSize: 1.5
    })
});
/**
 * options specific to line charts
 */
var lineChart = Tools.merge({}, axisChart, {
    points: {
        // default point radius to 3
        radius: 3,
        filled: false
    }
});
/**
 * options specific to scatter charts
 */
var scatterChart = Tools.merge({}, axisChart, {
    points: {
        // default point radius to 4
        radius: 4,
        fillOpacity: 0.3,
        filled: true
    }
});
/**
 * options specific to bubble charts
 */
var bubbleChart = Tools.merge({}, axisChart, {
    bubble: {
        radiusRange: function (chartSize, data) {
            var smallerChartDimension = Math.min(chartSize.width, chartSize.height);
            return [
                smallerChartDimension * 3 / 400,
                smallerChartDimension * 25 / 400
            ];
        },
        fillOpacity: 0.2
    }
});
/**
 * options specific to pie charts
 */
var pieChart = Tools.merge({}, chart, {
    pie: {
        radiusOffset: -15,
        innerRadius: 2,
        padAngle: 0.007,
        hoverArc: {
            outerRadiusOffset: 3
        },
        xOffset: 30,
        yOffset: 20,
        yOffsetCallout: 10,
        callout: {
            minSliceDegree: 5,
            offsetX: 15,
            offsetY: 12,
            horizontalLineLength: 8,
            textMargin: 2
        },
        labels: {
            formatter: null
        }
    }
});
/**
 * options specific to donut charts
 */
var donutChart = Tools.merge({}, pieChart, {
    donut: {
        center: {
            numberFontSize: function (radius) { return Math.min((radius / 100) * 24, 24) + "px"; },
            titleFontSize: function (radius) { return Math.min((radius / 100) * 15, 15) + "px"; },
            titleYPosition: function (radius) { return Math.min((radius / 80) * 20, 20); },
            numberFormatter: function (number) { return Math.floor(number).toLocaleString(); }
        }
    }
});
/**
 * options specific to donut charts
 */
var networkChart = Tools.merge({}, pieChart, {
    collapsed: false
});
export var options = {
    chart: chart,
    axisChart: axisChart,
    simpleBarChart: simpleBarChart,
    groupedBarChart: groupedBarChart,
    stackedBarChart: stackedBarChart,
    bubbleChart: bubbleChart,
    lineChart: lineChart,
    scatterChart: scatterChart,
    pieChart: pieChart,
    donutChart: donutChart,
    // Advanced Charts
    networkChart: networkChart,
    zoomableChart: zoomableChart
};
/**
 * Options for line behaviour
 */
export var lines = {
    opacity: {
        unselected: 0.3,
        selected: 1
    }
};
/**
 * Base transition configuration
 */
export var transitions = {
    default: {
        duration: 300
    },
    pie_slice_mouseover: {
        duration: 100
    },
    pie_chart_titles: {
        duration: 375
    },
    graph_element_mouseover_fill_update: {
        duration: 100
    },
    graph_element_mouseout_fill_update: {
        duration: 100
    }
};
export var axis = {
    ticks: {
        number: 7,
        rotateIfSmallerThan: 30
    },
    paddingRatio: 0.1
};
export var spacers = {
    default: {
        size: 24
    }
};
export var tickSpaceRatioVertical = 2.5;
export var tickSpaceRatioHorizontal = 3.5;
//# sourceMappingURL=../src/configuration.js.map