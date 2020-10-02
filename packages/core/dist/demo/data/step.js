import { Tools } from "@carbon/charts/tools";
import { lineData, lineOptions, lineTimeSeriesData, lineTimeSeriesOptions } from "./line";
export var stepOptions = Tools.merge({}, lineOptions, {
    title: "Step (discrete)",
    curve: "curveStepAfter"
});
export var stepData = lineData;
export var stepTimeSeriesOptions = Tools.merge({}, lineTimeSeriesOptions, {
    title: "Step (time series)",
    curve: "curveStepAfter"
});
export var stepTimeSeriesData = lineTimeSeriesData;
//# sourceMappingURL=../../../demo/data/step.js.map