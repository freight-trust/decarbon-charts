import trLocaleObject from "date-fns/locale/tr/index";
// Demo turkish locale for simple bar time-series
export var groupedBarData = {
    labels: ["Qty", "More", "Sold", "Restocking", "Misc"],
    datasets: [
        {
            label: "Dataset 1",
            data: [
                65000,
                -29123,
                -35213,
                51213,
                16932
            ]
        },
        {
            label: "Dataset 2",
            data: [
                32432,
                -21312,
                -56456,
                -21312,
                34234
            ]
        },
        {
            label: "Dataset 3",
            data: [
                -12312,
                23232,
                34232,
                -12312,
                -34234
            ]
        },
        {
            label: "Dataset 4",
            data: [
                -32423,
                21313,
                64353,
                24134,
                32423
            ]
        }
    ]
};
export var groupedBarOptions = {
    title: "Grouped bar (discrete)",
    axes: {
        left: {
            primary: true,
        },
        bottom: {
            scaleType: "labels",
            secondary: true
        }
    }
};
// Horizontal Grouped
export var groupedHorizontalBarData = groupedBarData;
export var groupedHorizontalBarOptions = {
    title: "Grouped horizontal bar (discrete)",
    axes: {
        left: {
            scaleType: "labels",
            primary: true,
        },
        bottom: {
            secondary: true
        }
    }
};
// Simple bar
export var simpleBarData = {
    labels: ["Qty", "More", "Sold", "Restocking", "Misc"],
    datasets: [
        {
            label: "Dataset 1",
            data: [
                65000,
                29123,
                35213,
                51213,
                16932
            ]
        }
    ]
};
export var simpleBarOptions = {
    title: "Simple bar (discrete)",
    axes: {
        left: {
            primary: true
        },
        bottom: {
            scaleType: "labels",
            secondary: true
        }
    }
};
export var simpleBarFixedDomainOptions = {
    title: "Simple bar (fixed domain)",
    axes: {
        left: {
            primary: true,
            domain: [-100000, 100000]
        },
        bottom: {
            scaleType: "labels",
            secondary: true
        }
    }
};
// Horizontal Simple
export var simpleHorizontalBarData = simpleBarData;
export var simpleHorizontalBarOptions = {
    title: "Simple horizontal bar (discrete)",
    axes: {
        left: {
            primary: true,
            scaleType: "labels"
        },
        bottom: {
            secondary: true
        }
    }
};
export var simpleBarTimeSeriesData = {
    labels: ["Qty", "More", "Sold", "Restocking", "Miscellaneous"],
    datasets: [
        {
            label: "Dataset 1",
            data: [
                {
                    date: new Date(2019, 0, 1),
                    value: 10000
                },
                {
                    date: new Date(2019, 0, 2),
                    value: 65000
                },
                {
                    date: new Date(2019, 0, 3),
                    value: null
                },
                {
                    date: new Date(2019, 0, 6),
                    value: 49213
                },
                {
                    date: new Date(2019, 0, 7),
                    value: 51213
                }
            ]
        }
    ]
};
export var simpleBarTimeSeriesOptions = {
    title: "Simple bar (time series - Turkish)",
    axes: {
        left: {
            primary: true
        },
        bottom: {
            scaleType: "time",
            secondary: true
        }
    },
    timeScale: { "localeObject": trLocaleObject }
};
// Horizontal simple time series
export var simpleHorizontalBarTimeSeriesOptions = {
    title: "Simple horizontal bar (time series)",
    axes: {
        left: {
            scaleType: "time",
            primary: true
        },
        bottom: {
            secondary: true
        }
    }
};
export var simpleHorizontalBarTimeSeriesData = simpleBarTimeSeriesData;
// Stacked bar
export var stackedBarData = {
    labels: ["Qty", "More", "Sold", "Restocking", "Misc"],
    datasets: [
        {
            label: "Dataset 1",
            data: [
                65000,
                29123,
                35213,
                51213,
                16932
            ]
        },
        {
            label: "Dataset 2",
            data: [
                32432,
                21312,
                56456,
                21312,
                34234
            ]
        },
        {
            label: "Dataset 3",
            data: [
                12312,
                23232,
                34232,
                12312,
                34234
            ]
        },
        {
            label: "Dataset 4",
            data: [
                32423,
                21313,
                64353,
                24134,
                32423
            ]
        }
    ]
};
export var stackedBarOptions = {
    title: "Stacked bar (discrete)",
    axes: {
        left: {
            primary: true,
            stacked: true
        },
        bottom: {
            scaleType: "labels",
            secondary: true
        }
    }
};
// horizontal stacked bar
export var stackedHorizontalBarData = stackedBarData;
export var stackedHorizontalBarOptions = {
    title: "Stacked horizontal bar (discrete)",
    axes: {
        left: {
            scaleType: "labels",
            primary: true
        },
        bottom: {
            stacked: true,
            secondary: true
        }
    }
};
export var stackedBarTimeSeriesData = {
    labels: ["Qty", "More", "Sold", "Restocking", "Misc"],
    datasets: [
        {
            label: "Dataset 1",
            data: [
                {
                    date: new Date(2019, 0, 1),
                    value: 10000
                },
                {
                    date: new Date(2019, 0, 5),
                    value: 65000
                },
                {
                    date: new Date(2019, 0, 8),
                    value: 10000
                },
                {
                    date: new Date(2019, 0, 13),
                    value: 49213
                },
                {
                    date: new Date(2019, 0, 17),
                    value: 51213
                }
            ]
        },
        {
            label: "Dataset 2",
            data: [
                {
                    date: new Date(2019, 0, 3),
                    value: 75000
                },
                {
                    date: new Date(2019, 0, 6),
                    value: 57312
                },
                {
                    date: new Date(2019, 0, 8),
                    value: 21432
                },
                {
                    date: new Date(2019, 0, 15),
                    value: 70323
                },
                {
                    date: new Date(2019, 0, 19),
                    value: 21300
                }
            ]
        },
        {
            label: "Dataset 3",
            data: [
                {
                    date: new Date(2019, 0, 1),
                    value: 50000
                },
                {
                    date: new Date(2019, 0, 5),
                    value: 15000
                },
                {
                    date: new Date(2019, 0, 8),
                    value: 20000
                },
                {
                    date: new Date(2019, 0, 13),
                    value: 39213
                },
                {
                    date: new Date(2019, 0, 17),
                    value: 61213
                }
            ]
        },
        {
            label: "Dataset 4",
            data: [
                {
                    date: new Date(2019, 0, 2),
                    value: 10
                },
                {
                    date: new Date(2019, 0, 6),
                    value: 37312
                },
                {
                    date: new Date(2019, 0, 8),
                    value: 51432
                },
                {
                    date: new Date(2019, 0, 15),
                    value: 40323
                },
                {
                    date: new Date(2019, 0, 19),
                    value: 31300
                }
            ]
        }
    ]
};
export var stackedBarTimeSeriesOptions = {
    title: "Stacked bar (time series)",
    axes: {
        left: {
            primary: true,
            stacked: true
        },
        bottom: {
            scaleType: "time",
            secondary: true
        }
    }
};
// Stacked horizontal bar (time series)
export var stackedHorizontalBarTimeSeriesOptions = {
    title: "Stacked horizontal bar (time series)",
    axes: {
        left: {
            primary: true,
            scaleType: "time"
        },
        bottom: {
            stacked: true,
            secondary: true
        }
    }
};
export var stackedHorizontalBarTimeSeriesData = stackedBarTimeSeriesData;
//# sourceMappingURL=../../../demo/data/bar.js.map