import { Component } from "../component";
import { Selection } from "d3-selection";
export declare class Scatter extends Component {
    type: string;
    init(): void;
    render(animate: boolean): void;
    styleCircles(selection: Selection<any, any, any, any>, animate: boolean): void;
    handleLegendOnHover: (event: CustomEvent<any>) => void;
    handleLegendMouseOut: (event: CustomEvent<any>) => void;
    addLabelsToDataPoints(d: any, index: any): any;
    addEventListeners(): void;
    destroy(): void;
}
