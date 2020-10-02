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
import * as Configuration from "../configuration";
import { Service } from "./service";
import { AxisPositions, CartesianOrientations, ScaleTypes } from "../interfaces";
import { Tools } from "../tools";
// D3 Imports
import { scaleBand, scaleLinear, scaleTime, scaleLog } from "d3-scale";
import { min, extent } from "d3-array";
// Misc
import { differenceInYears, addYears, subYears, differenceInMonths, addMonths, subMonths, differenceInDays, addDays, subDays, differenceInHours, addHours, subHours, differenceInMinutes, addMinutes, subMinutes, differenceInSeconds, subSeconds, addSeconds } from "date-fns";
function addPaddingInDomain(_a, paddingRatio) {
    var lower = _a[0], upper = _a[1];
    var domainLength = upper - lower;
    var padding = domainLength * paddingRatio;
    // If padding crosses 0, keep 0 as new upper bound
    var newUpper = upper <= 0 && upper + padding > 0 ? 0 : upper + padding;
    // If padding crosses 0, keep 0 as new lower bound
    var newLower = lower >= 0 && lower - padding < 0 ? 0 : lower - padding;
    return [newLower, newUpper];
}
var CartesianScales = /** @class */ (function (_super) {
    __extends(CartesianScales, _super);
    function CartesianScales() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scaleTypes = {
            top: null,
            right: null,
            bottom: null,
            left: null
        };
        _this.scales = {
            top: null,
            right: null,
            bottom: null,
            left: null
        };
        return _this;
    }
    CartesianScales.prototype.getDomainAxisPosition = function () {
        return this.domainAxisPosition;
    };
    CartesianScales.prototype.getRangeAxisPosition = function () {
        return this.rangeAxisPosition;
    };
    CartesianScales.prototype.setDefaultAxes = function () {
        var axesOptions = Tools.getProperty(this.model.getOptions(), "axes");
        if (!axesOptions) {
            this.model.getOptions().axes = {
                left: {
                    primary: true,
                    includeZero: true,
                },
                bottom: {
                    secondary: true,
                    includeZero: true,
                    scaleType: this.model.getDisplayData().labels ? ScaleTypes.LABELS : undefined
                }
            };
        }
    };
    CartesianScales.prototype.update = function (animate) {
        var _this = this;
        if (animate === void 0) { animate = true; }
        this.setDefaultAxes();
        this.determineOrientation();
        var axisPositions = Object.keys(AxisPositions).map(function (axisPositionKey) { return AxisPositions[axisPositionKey]; });
        axisPositions.forEach(function (axisPosition) {
            _this.scales[axisPosition] = _this.createScale(axisPosition);
        });
    };
    CartesianScales.prototype.determineOrientation = function () {
        var _this = this;
        var options = this.model.getOptions();
        // Manually specifying positions here
        // In order to enforce a priority
        [
            AxisPositions.LEFT,
            AxisPositions.BOTTOM,
            AxisPositions.RIGHT,
            AxisPositions.TOP
        ].forEach(function (axisPosition) {
            var axisOptions = Tools.getProperty(options, "axes", axisPosition);
            if (axisOptions) {
                var scaleType = axisOptions.scaleType || ScaleTypes.LINEAR;
                _this.scaleTypes[axisPosition] = scaleType;
                if (scaleType === ScaleTypes.LINEAR) {
                    _this.rangeAxisPosition = axisPosition;
                }
                else {
                    _this.domainAxisPosition = axisPosition;
                }
            }
        });
        if (this.rangeAxisPosition === AxisPositions.LEFT && this.domainAxisPosition === AxisPositions.BOTTOM) {
            this.orientation = CartesianOrientations.VERTICAL;
        }
        else {
            this.orientation = CartesianOrientations.HORIZONTAL;
        }
    };
    CartesianScales.prototype.getOrientation = function () {
        return this.orientation;
    };
    CartesianScales.prototype.getScaleByPosition = function (axisPosition) {
        return this.scales[axisPosition];
    };
    CartesianScales.prototype.getScaleTypeByPosition = function (axisPosition) {
        return this.scaleTypes[axisPosition];
    };
    CartesianScales.prototype.getDomainScale = function () {
        return this.scales[this.domainAxisPosition];
    };
    CartesianScales.prototype.getRangeScale = function () {
        return this.scales[this.rangeAxisPosition];
    };
    // Find the main x-axis out of the 2 x-axis on the chart (when 2D axis is used)
    CartesianScales.prototype.getMainXAxisPosition = function () {
        var possibleXAxisPositions = [AxisPositions.BOTTOM, AxisPositions.TOP];
        return [this.domainAxisPosition, this.rangeAxisPosition]
            .find(function (position) { return possibleXAxisPositions.indexOf(position) > -1; });
    };
    // Find the main y-axis out of the 2 y-axis on the chart (when 2D axis is used)
    CartesianScales.prototype.getMainYAxisPosition = function () {
        var possibleYAxisPositions = [AxisPositions.LEFT, AxisPositions.RIGHT];
        return [this.domainAxisPosition, this.rangeAxisPosition]
            .find(function (position) { return possibleYAxisPositions.indexOf(position) > -1; });
    };
    CartesianScales.prototype.getMainXScale = function () {
        return this.scales[this.getMainXAxisPosition()];
    };
    CartesianScales.prototype.getMainYScale = function () {
        return this.scales[this.getMainYAxisPosition()];
    };
    CartesianScales.prototype.getValueFromScale = function (axisPosition, datum, index) {
        var value = isNaN(datum) ? datum.value : datum;
        var scaleType = this.scaleTypes[axisPosition];
        var scale = this.scales[axisPosition];
        if (scaleType === ScaleTypes.LABELS) {
            var correspondingLabel = this.model.getDisplayData().labels[index];
            return scale(correspondingLabel) + scale.step() / 2;
        }
        else if (scaleType === ScaleTypes.TIME) {
            return scale(new Date(datum.date || datum.label));
        }
        return scale(value);
    };
    CartesianScales.prototype.getDomainValue = function (d, i) {
        return this.getValueFromScale(this.domainAxisPosition, d, i);
    };
    CartesianScales.prototype.getRangeValue = function (d, i) {
        return this.getValueFromScale(this.rangeAxisPosition, d, i);
    };
    /** Uses the primary Y Axis to get data items associated with that value.  */
    CartesianScales.prototype.getDataFromDomain = function (domainValue) {
        var displayData = this.model.getDisplayData();
        var activePoints = [];
        var scaleType = this.scaleTypes[this.domainAxisPosition];
        switch (scaleType) {
            case ScaleTypes.LABELS:
                // based on labels we use the index to get the associated data
                var index_1 = displayData.labels.indexOf(domainValue);
                displayData.datasets.forEach(function (dataset) {
                    activePoints.push({
                        datasetLabel: dataset.label,
                        value: dataset.data[index_1],
                    });
                });
                break;
            case ScaleTypes.TIME:
                // time series we filter using the date
                var domainKey_1 = Object.keys(displayData.datasets[0].data[0]).filter(function (key) { return key !== "value"; })[0];
                displayData.datasets.forEach(function (dataset) {
                    var sharedLabel = dataset.label;
                    // filter the items in each dataset for the points associated with the Domain
                    var dataItems = dataset.data.filter(function (item) {
                        var date1 = new Date(item[domainKey_1]);
                        var date2 = new Date(domainValue);
                        return date1.getTime() === date2.getTime();
                    });
                    // assign the shared label on the data items and add them to the array
                    dataItems.forEach(function (item) {
                        activePoints.push(Object.assign({
                            datasetLabel: sharedLabel,
                            value: item.value,
                        }, item));
                    });
                });
                break;
        }
        return activePoints;
    };
    CartesianScales.prototype.getScaleDomain = function (axisPosition) {
        var options = this.model.getOptions();
        var axisOptions = Tools.getProperty(options, "axes", axisPosition);
        var includeZero = axisOptions.includeZero;
        var _a = this.model.getDisplayData(), datasets = _a.datasets, labels = _a.labels;
        // If scale is a LABELS scale, return some labels as the domain
        if (axisOptions && axisOptions.scaleType === ScaleTypes.LABELS) {
            if (labels) {
                return labels;
            }
            else {
                return this.model.getDisplayData().datasets[0].data.map(function (d, i) { return i + 1; });
            }
        }
        // Get the extent of the domain
        var domain;
        // If domain is specified return that domain
        if (axisOptions.domain) {
            return axisOptions.domain;
        }
        // If the scale is stacked
        if (axisOptions.stacked) {
            domain = extent(labels.reduce(function (m, label, i) {
                var correspondingValues = datasets.map(function (dataset) {
                    return !isNaN(dataset.data[i]) ? dataset.data[i] : dataset.data[i].value;
                });
                var totalValue = correspondingValues.reduce(function (a, b) { return a + b; }, 0);
                // Save both the total value and the minimum
                return m.concat(totalValue, min(correspondingValues));
            }, [])
                // Currently stack layouts in the library
                // Only support positive values
                .concat(0));
        }
        else {
            // Get all the chart's data values in a flat array
            var allDataValues = datasets.reduce(function (dataValues, dataset) {
                dataset.data.forEach(function (datum) {
                    if (axisOptions.scaleType === ScaleTypes.TIME) {
                        dataValues = dataValues.concat(datum.date);
                    }
                    else {
                        dataValues = dataValues.concat(isNaN(datum) ? datum.value : datum);
                    }
                });
                return dataValues;
            }, []);
            if (axisOptions.scaleType !== ScaleTypes.TIME && includeZero) {
                allDataValues = allDataValues.concat(0);
            }
            domain = extent(allDataValues);
        }
        if (axisOptions.scaleType === ScaleTypes.TIME) {
            var spaceToAddToEdges = Tools.getProperty(options, "timeScale", "addSpaceOnEdges");
            if (spaceToAddToEdges) {
                var startDate = new Date(domain[0]);
                var endDate = new Date(domain[1]);
                if (differenceInYears(endDate, startDate) > 1) {
                    return [subYears(startDate, spaceToAddToEdges), addYears(endDate, spaceToAddToEdges)];
                }
                if (differenceInMonths(endDate, startDate) > 1) {
                    return [subMonths(startDate, spaceToAddToEdges), addMonths(endDate, spaceToAddToEdges)];
                }
                if (differenceInDays(endDate, startDate) > 1) {
                    return [subDays(startDate, spaceToAddToEdges), addDays(endDate, spaceToAddToEdges)];
                }
                if (differenceInHours(endDate, startDate) > 1) {
                    return [subHours(startDate, spaceToAddToEdges), addHours(endDate, spaceToAddToEdges)];
                }
                if (differenceInMinutes(endDate, startDate) > 30) {
                    return [subMinutes(startDate, spaceToAddToEdges * 30), addMinutes(endDate, spaceToAddToEdges * 30)];
                }
                if (differenceInMinutes(endDate, startDate) > 1) {
                    return [subMinutes(startDate, spaceToAddToEdges), addMinutes(endDate, spaceToAddToEdges)];
                }
                if (differenceInSeconds(endDate, startDate) > 15) {
                    return [subSeconds(startDate, spaceToAddToEdges * 15), addSeconds(endDate, spaceToAddToEdges * 15)];
                }
                if (differenceInSeconds(endDate, startDate) > 1) {
                    return [subSeconds(startDate, spaceToAddToEdges), addSeconds(endDate, spaceToAddToEdges)];
                }
                return [startDate, endDate];
            }
            return [
                new Date(domain[0]),
                new Date(domain[1])
            ];
        }
        return addPaddingInDomain(domain, Configuration.axis.paddingRatio);
    };
    CartesianScales.prototype.createScale = function (axisPosition) {
        var options = this.model.getOptions();
        var axisOptions = Tools.getProperty(options, "axes", axisPosition);
        if (!axisOptions) {
            return null;
        }
        var scaleType = Tools.getProperty(axisOptions, "scaleType") || ScaleTypes.LINEAR;
        this.scaleTypes[axisPosition] = scaleType;
        var scale;
        if (scaleType === ScaleTypes.TIME) {
            scale = scaleTime();
        }
        else if (scaleType === ScaleTypes.LOG) {
            scale = scaleLog().base(axisOptions.base || 10);
        }
        else if (scaleType === ScaleTypes.LABELS) {
            scale = scaleBand();
        }
        else {
            scale = scaleLinear();
        }
        scale.domain(this.getScaleDomain(axisPosition));
        return scale;
    };
    return CartesianScales;
}(Service));
export { CartesianScales };
//# sourceMappingURL=../../src/services/scales-cartesian.js.map