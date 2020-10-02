export declare const createChartSandbox: {
    (chartTemplate: any): string;
    displayName: string;
    __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {};
    };
};
export declare const createVanillaChartApp: {
    (demo: any): {
        "index.html": string;
        "src/index.js": string;
        "package.json": {
            "scripts": {
                "start": string;
                "build": string;
            };
            "dependencies": {
                "@carbon/charts": any;
                "d3": string;
            };
            "devDependencies": {
                "parcel-bundler": string;
            };
        };
    };
    displayName: string;
    __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {};
    };
};
export declare const createReactChartApp: {
    (demo: any): {
        "src/index.html": string;
        "src/index.js": string;
        "package.json": {
            dependencies: {
                "@carbon/charts": any;
                "@carbon/charts-react": any;
                d3: string;
                react: string;
                "react-dom": string;
                "react-scripts": string;
            };
        };
    };
    displayName: string;
    __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {};
    };
};
export declare const createAngularChartApp: {
    (demo: any): {
        "src/index.html": string;
        "src/main.ts": string;
        "src/app/app.component.html": string;
        "src/app/app.component.ts": string;
        "src/app/app.module.ts": string;
        ".angular-cli.json": string;
        "package.json": string;
    };
    displayName: string;
    __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {};
    };
};
export declare const createVueChartApp: {
    (demo: any): {
        "src/components/chart.vue": string;
        "src/App.vue": string;
        "src/main.js": string;
        "package.json": string;
    };
    displayName: string;
    __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {};
    };
};
