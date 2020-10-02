export declare const groupedBarData: {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
    }[];
};
export declare const groupedBarOptions: {
    title: string;
    axes: {
        left: {
            primary: boolean;
        };
        bottom: {
            scaleType: string;
            secondary: boolean;
        };
    };
};
export declare const groupedHorizontalBarData: {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
    }[];
};
export declare const groupedHorizontalBarOptions: {
    title: string;
    axes: {
        left: {
            scaleType: string;
            primary: boolean;
        };
        bottom: {
            secondary: boolean;
        };
    };
};
export declare const simpleBarData: {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
    }[];
};
export declare const simpleBarOptions: {
    title: string;
    axes: {
        left: {
            primary: boolean;
        };
        bottom: {
            scaleType: string;
            secondary: boolean;
        };
    };
};
export declare const simpleBarFixedDomainOptions: {
    title: string;
    axes: {
        left: {
            primary: boolean;
            domain: number[];
        };
        bottom: {
            scaleType: string;
            secondary: boolean;
        };
    };
};
export declare const simpleHorizontalBarData: {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
    }[];
};
export declare const simpleHorizontalBarOptions: {
    title: string;
    axes: {
        left: {
            primary: boolean;
            scaleType: string;
        };
        bottom: {
            secondary: boolean;
        };
    };
};
export declare const simpleBarTimeSeriesData: {
    labels: string[];
    datasets: {
        label: string;
        data: {
            date: Date;
            value: number;
        }[];
    }[];
};
export declare const simpleBarTimeSeriesOptions: {
    title: string;
    axes: {
        left: {
            primary: boolean;
        };
        bottom: {
            scaleType: string;
            secondary: boolean;
        };
    };
    timeScale: {
        "localeObject": Locale;
    };
};
export declare const simpleHorizontalBarTimeSeriesOptions: {
    title: string;
    axes: {
        left: {
            scaleType: string;
            primary: boolean;
        };
        bottom: {
            secondary: boolean;
        };
    };
};
export declare const simpleHorizontalBarTimeSeriesData: {
    labels: string[];
    datasets: {
        label: string;
        data: {
            date: Date;
            value: number;
        }[];
    }[];
};
export declare const stackedBarData: {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
    }[];
};
export declare const stackedBarOptions: {
    title: string;
    axes: {
        left: {
            primary: boolean;
            stacked: boolean;
        };
        bottom: {
            scaleType: string;
            secondary: boolean;
        };
    };
};
export declare const stackedHorizontalBarData: {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
    }[];
};
export declare const stackedHorizontalBarOptions: {
    title: string;
    axes: {
        left: {
            scaleType: string;
            primary: boolean;
        };
        bottom: {
            stacked: boolean;
            secondary: boolean;
        };
    };
};
export declare const stackedBarTimeSeriesData: {
    labels: string[];
    datasets: {
        label: string;
        data: {
            date: Date;
            value: number;
        }[];
    }[];
};
export declare const stackedBarTimeSeriesOptions: {
    title: string;
    axes: {
        left: {
            primary: boolean;
            stacked: boolean;
        };
        bottom: {
            scaleType: string;
            secondary: boolean;
        };
    };
};
export declare const stackedHorizontalBarTimeSeriesOptions: {
    title: string;
    axes: {
        left: {
            primary: boolean;
            scaleType: string;
        };
        bottom: {
            stacked: boolean;
            secondary: boolean;
        };
    };
};
export declare const stackedHorizontalBarTimeSeriesData: {
    labels: string[];
    datasets: {
        label: string;
        data: {
            date: Date;
            value: number;
        }[];
    }[];
};
