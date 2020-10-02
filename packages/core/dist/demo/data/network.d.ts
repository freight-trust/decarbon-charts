export declare const networkOptions: {
    title: string;
    margin: number;
    nodeHeight: number;
    nodeWidth: number;
    cellWidth: number;
    cellHeight: number;
    legend: {
        enabled: boolean;
    };
};
export declare const networkData: {
    labels: any[];
    datasets: {
        nodes: ({
            id: string;
            heading: string;
            subheading: string;
            column: number;
            row: number;
            renderIcon: any;
            onClick: () => void;
            kind?: undefined;
        } | {
            id: string;
            heading: string;
            subheading: string;
            column: number;
            row: number;
            renderIcon: any;
            onClick?: undefined;
            kind?: undefined;
        } | {
            id: string;
            heading: string;
            subheading: string;
            column: number;
            row: number;
            kind: string;
            renderIcon: any;
            onClick?: undefined;
        })[];
        links: ({
            source: string;
            target: string;
            directional: boolean;
            dash?: undefined;
            kind?: undefined;
        } | {
            source: string;
            target: string;
            dash: string;
            directional: boolean;
            kind?: undefined;
        } | {
            source: string;
            target: string;
            kind: string;
            directional: boolean;
            dash?: undefined;
        })[];
        data: any[];
    }[];
};
