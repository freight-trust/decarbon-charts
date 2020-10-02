import { Component } from "../../component";
export declare class Network extends Component {
    type: string;
    data: any;
    options: any;
    xMax: any;
    yMax: any;
    innerWidth: any;
    innerHeight: any;
    xScale: any;
    yScale: any;
    parsedNodes: any;
    parsedLinks: any;
    calculateInnerHeight: (yMax: any) => number;
    calculateInnerWidth: (xMax: any) => number;
    calculatePositions: () => void;
    drawCards(container: any): void;
    drawLines(container: any): void;
    render(): void;
}
