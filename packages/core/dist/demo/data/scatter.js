import { lineTimeSeriesData } from "./line";
export var scatterData = {
    labels: ["Qty", "More", "Sold", "Restocking", "Misc"],
    datasets: [
        {
            label: "Dataset 1",
            data: [
                32100,
                23500,
                53100,
                42300,
                12300
            ]
        },
        {
            label: "Dataset 2",
            data: [
                34200,
                53200,
                42300,
                21400,
                0
            ]
        },
        {
            label: "Dataset 3 long name",
            data: [
                41200,
                23400,
                34210,
                1400,
                42100
            ]
        },
        {
            label: "Dataset 4 long name",
            data: [
                22000,
                1200,
                9000,
                24000,
                3000
            ]
        },
        {
            label: "Dataset 5 long name",
            data: [
                2412,
                30000,
                10000,
                5000,
                31000
            ]
        },
        {
            label: "Dataset 6 long name",
            data: [
                0,
                20000,
                40000,
                60000,
                80000
            ]
        }
    ]
};
export var scatterOptions = {
    title: "Scatter (discrete)",
    axes: {
        bottom: {
            title: "2018 Annual Sales Figures",
            scaleType: "labels",
            secondary: true
        },
        left: {
            primary: true
        }
    }
};
export var scatterTimeSeriesData = lineTimeSeriesData;
export var scatterTimeSeriesOptions = {
    title: "Scatter (time series)",
    axes: {
        bottom: {
            title: "2019 Annual Sales Figures",
            scaleType: "time",
            secondary: true
        },
        left: {
            primary: true
        }
    }
};
//# sourceMappingURL=../../../demo/data/scatter.js.map