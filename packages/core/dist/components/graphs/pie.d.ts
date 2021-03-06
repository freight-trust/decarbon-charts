import { Component } from "../component";
export declare class Pie extends Component {
    type: string;
    arc: any;
    hoverArc: any;
    init(): void;
    getDataList(): any;
    getInnerRadius(): any;
    render(animate?: boolean): void;
    renderCallouts(calloutData: any[]): void;
    handleLegendOnHover: (event: CustomEvent<any>) => void;
    handleLegendMouseOut: (event: CustomEvent<any>) => void;
    addEventListeners(): void;
    protected computeRadius(): any;
}
