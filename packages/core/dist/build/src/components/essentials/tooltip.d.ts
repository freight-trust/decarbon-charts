import { Component } from "../component";
import { ChartModel } from "../../model";
import Position from "@carbon/utils-position";
import { TooltipTypes, TooltipPosition } from "../../interfaces";
export declare class Tooltip extends Component {
    type: string;
    tooltip: any;
    positionService: Position;
    constructor(model: ChartModel, services: any, configs?: any);
    init(): void;
    getTooltipHTML(data: any, type: TooltipTypes): string;
    getMultilineTooltipHTML(data: any): string;
    render(): void;
    getTooltipPosition(hoveredElement: any): {
        placement: TooltipPosition;
        position: {
            left: number;
            top: number;
        };
    };
    positionTooltip(positionOverride?: any): void;
}
