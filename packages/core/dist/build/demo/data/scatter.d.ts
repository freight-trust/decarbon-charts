export declare const scatterData: {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
    }[];
};
export declare const scatterOptions: {
    title: string;
    axes: {
        bottom: {
            title: string;
            scaleType: string;
            secondary: boolean;
        };
        left: {
            primary: boolean;
        };
    };
};
export declare const scatterTimeSeriesData: {
    labels: string[];
    datasets: {
        label: string;
        data: {
            date: Date;
            value: number;
        }[];
    }[];
};
export declare const scatterTimeSeriesOptions: {
    title: string;
    axes: {
        bottom: {
            title: string;
            scaleType: string;
            secondary: boolean;
        };
        left: {
            primary: boolean;
        };
    };
};
