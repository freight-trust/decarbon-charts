import { Service } from "./service";
import { AxisPositions, CartesianOrientations } from "../interfaces";
export declare class CartesianScales extends Service {
    protected scaleTypes: {
        top: any;
        right: any;
        bottom: any;
        left: any;
    };
    protected scales: {
        top: any;
        right: any;
        bottom: any;
        left: any;
    };
    protected domainAxisPosition: AxisPositions;
    protected rangeAxisPosition: AxisPositions;
    protected orientation: CartesianOrientations;
    getDomainAxisPosition(): AxisPositions;
    getRangeAxisPosition(): AxisPositions;
    setDefaultAxes(): void;
    update(animate?: boolean): void;
    determineOrientation(): void;
    getOrientation(): CartesianOrientations;
    getScaleByPosition(axisPosition: AxisPositions): any;
    getScaleTypeByPosition(axisPosition: AxisPositions): any;
    getDomainScale(): any;
    getRangeScale(): any;
    getMainXAxisPosition(): AxisPositions;
    getMainYAxisPosition(): AxisPositions;
    getMainXScale(): any;
    getMainYScale(): any;
    getValueFromScale(axisPosition: AxisPositions, datum: any, index?: number): any;
    getDomainValue(d: any, i: any): any;
    getRangeValue(d: any, i: any): any;
    /** Uses the primary Y Axis to get data items associated with that value.  */
    getDataFromDomain(domainValue: any): any[];
    protected getScaleDomain(axisPosition: AxisPositions): any;
    protected createScale(axisPosition: AxisPositions): any;
}
