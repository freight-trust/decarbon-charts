export declare const lineData: {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
    }[];
};
export declare const lineOptions: {
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
export declare const lineTimeSeriesData: {
    labels: string[];
    datasets: {
        label: string;
        data: {
            date: Date;
            value: number;
        }[];
    }[];
};
export declare const lineTimeSeriesOptions: {
    title: string;
    axes: {
        left: {
            secondary: boolean;
        };
        bottom: {
            scaleType: string;
            primary: boolean;
        };
    };
    curve: string;
};
export declare const lineTimeSeriesDataRotatedTicks: {
    labels: string[];
    datasets: {
        label: string;
        data: {
            date: Date;
            value: number;
        }[];
    }[];
};
export declare const lineTimeSeriesRotatedTicksOptions: {
    title: string;
    axes: {
        left: {
            secondary: boolean;
        };
        bottom: {
            scaleType: string;
            primary: boolean;
        };
    };
};
