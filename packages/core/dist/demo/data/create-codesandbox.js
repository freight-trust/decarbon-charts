import { getParameters } from "codesandbox/lib/api/define";
var libraryVersion = require("@carbon/charts/package.json").version;
export var createChartSandbox = function (chartTemplate) {
    var files = {};
    Object.keys(chartTemplate)
        .forEach(function (filePath) { return files[filePath] = { content: chartTemplate[filePath] }; });
    return "https://codesandbox.io/api/v1/sandboxes/define?parameters=" + getParameters({ files: files });
};
export var createVanillaChartApp = function (demo) {
    var chartData = JSON.stringify(demo.data, null, "\t");
    var chartOptions = JSON.stringify(demo.options, null, "\t");
    var chartComponent = demo.chartType.vanilla;
    var indexHtml = "<html>\n\t<head>\n\t\t<title>Parcel Sandbox</title>\n\t\t<meta charset=\"UTF-8\" />\n\t</head>\n\t<body>\n\t\t<div id=\"app\" style=\"width: 100%; height: 100%;\"></div>\n\n\t\t<script src=\"src/index.js\"></script>\n\t</body>\n</html>";
    var indexJs = "import \"@carbon/charts/styles.css\";\nimport { " + chartComponent + " } from \"@carbon/charts\";\n\nconst data = " + chartData + ";\n\nconst options = " + chartOptions + ";\n\n// Grab chart holder HTML element and initialize the chart\nconst chartHolder = document.getElementById(\"app\");\nnew " + chartComponent + "(chartHolder, {\n\tdata,\n\toptions\n});\n";
    var packageJson = {
        "scripts": {
            "start": "parcel index.html --open",
            "build": "parcel build index.html"
        },
        "dependencies": {
            "@carbon/charts": libraryVersion,
            "d3": "5.9.2"
        },
        "devDependencies": {
            "parcel-bundler": "^1.6.1"
        }
    };
    return {
        "index.html": indexHtml,
        "src/index.js": indexJs,
        "package.json": packageJson
    };
};
export var createReactChartApp = function (demo) {
    var chartData = JSON.stringify(demo.data, null, "\t");
    var chartOptions = JSON.stringify(demo.options, null, "\t");
    var chartComponent = demo.chartType.vanilla;
    var indexHtml = "<div id=\"root\"></div>\n  ";
    var indexJs = "import React from \"react\";\nimport ReactDOM from \"react-dom\";\nimport { " + chartComponent + " } from \"@carbon/charts-react\";\nimport \"@carbon/charts/styles.css\";\n// Or\n// import \"@carbon/charts/styles/styles.scss\";\n\nclass App extends React.Component {\n\tstate = {\n\t\tdata: " + chartData + ",\n\t\toptions: " + chartOptions + "\n\t};\n\n\trender = () => (\n\t\t<" + chartComponent + "\n\t\t\tdata={this.state.data}\n\t\t\toptions={this.state.options}>\n\t\t</" + chartComponent + ">\n\t);\n}\nReactDOM.render(<App />, document.getElementById(\"root\"));\n  ";
    var packageJson = {
        dependencies: {
            "@carbon/charts": libraryVersion,
            "@carbon/charts-react": libraryVersion,
            d3: "5.12.0",
            react: "16.12.0",
            "react-dom": "16.12.0",
            "react-scripts": "3.0.1"
        }
    };
    return {
        "src/index.html": indexHtml,
        "src/index.js": indexJs,
        "package.json": packageJson
    };
};
export var createAngularChartApp = function (demo) {
    var chartData = JSON.stringify(demo.data, null, "\t\t");
    var chartOptions = JSON.stringify(demo.options, null, "\t\t");
    var chartComponent = demo.chartType.angular;
    var appComponentHtml = "<" + chartComponent + " [data]=\"data\" [options]=\"options\"></" + chartComponent + ">";
    var appComponentTs = "import { Component } from \"@angular/core\";\n@Component({\n\tselector: \"app-root\",\n\ttemplateUrl: \"./app.component.html\"\n})\nexport class AppComponent {\n\tdata = " + chartData + ";\n\toptions = " + chartOptions + ";\n}";
    var appModule = "import { NgModule } from \"@angular/core\";\nimport { BrowserModule } from \"@angular/platform-browser\";\nimport { ChartsModule } from \"@carbon/charts-angular\";\nimport { AppComponent } from \"./app.component\";\n@NgModule({\n\timports: [BrowserModule, ChartsModule],\n\tdeclarations: [AppComponent],\n\tbootstrap: [AppComponent]\n})\nexport class AppModule {}";
    var indexHtml = "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>Angular</title>\n\t</head>\n\t<body>\n\t\t<app-root></app-root>\n\t</body>\n</html>";
    var mainTs = "import { platformBrowserDynamic } from \"@angular/platform-browser-dynamic\";\nimport { AppModule } from \"./app/app.module\";\nplatformBrowserDynamic()\n\t.bootstrapModule(AppModule)\n\t.catch(err => console.log(err));\n";
    var angularCliJson = "{\n\t\"apps\": [\n\t\t{\n\t\t\t\"root\": \"src\",\n\t\t\t\"outDir\": \"dist\",\n\t\t\t\"assets\": [\"assets\", \"favicon.ico\"],\n\t\t\t\"index\": \"index.html\",\n\t\t\t\"main\": \"main.ts\",\n\t\t\t\"polyfills\": \"polyfills.ts\",\n\t\t\t\"prefix\": \"app\",\n\t\t\t\"styles\": [\"styles.css\"],\n\t\t\t\"scripts\": [],\n\t\t\t\"environmentSource\": \"environments/environment.ts\",\n\t\t\t\"environments\": {\n\t\t\t\t\"dev\": \"environments/environment.ts\",\n\t\t\t\t\"prod\": \"environments/environment.prod.ts\"\n\t\t\t}\n\t\t}\n\t]\n}";
    var packageJson = JSON.stringify({
        dependencies: {
            "@angular/animations": "8.2.14",
            "@angular/common": "8.2.14",
            "@angular/compiler": "8.2.14",
            "@angular/core": "8.2.14",
            "@angular/forms": "8.2.14",
            "@angular/platform-browser": "8.2.14",
            "@angular/platform-browser-dynamic": "8.2.14",
            "@angular/router": "8.2.14",
            "@carbon/charts": libraryVersion,
            "@carbon/charts-angular": libraryVersion,
            "core-js": "3.6.0",
            d3: "5.15.0",
            rxjs: "6.5.3",
            "zone.js": "0.10.2"
        }
    }, null, "\t");
    return {
        "src/index.html": indexHtml,
        "src/main.ts": mainTs,
        "src/app/app.component.html": appComponentHtml,
        "src/app/app.component.ts": appComponentTs,
        "src/app/app.module.ts": appModule,
        ".angular-cli.json": angularCliJson,
        "package.json": packageJson
    };
};
export var createVueChartApp = function (demo) {
    var chartData = JSON.stringify(demo.data, null, "\t\t");
    var chartOptions = JSON.stringify(demo.options, null, "\t\t");
    var chartComponent = demo.chartType.vue;
    var chartVue = "<script>\nimport Vue from \"vue\";\nimport \"@carbon/charts/styles.css\";\nimport chartsVue from \"@carbon/charts-vue\";\nVue.use(chartsVue);\nexport default {\n\tname: \"Chart\",\n\tcomponents: {},\n\tdata() {\n\t\treturn {\n\t\t\tdata: " + chartData + ",\n\t\t\toptions: " + chartOptions + "\n\t\t};\n\t},\n\ttemplate: \"<" + chartComponent + " :data='data' :options='options'></" + chartComponent + ">\"\n};\n</script>\n  ";
    var appVue = "<template>\n\t<div id=\"app\">\n\t\t<Chart/>\n\t</div>\n</template>\n<script>\nimport Chart from \"./components/chart\";\nexport default {\n\tname: \"App\",\n\tcomponents: {\n\t\tChart\n\t}\n};\n</script>\n  ";
    var mainJs = "import Vue from \"vue\";\nimport App from \"./App.vue\";\nVue.config.productionTip = false;\nnew Vue({\n\trender: h => h(App)\n}).$mount(\"#app\");\n";
    var packageJson = JSON.stringify({
        dependencies: {
            "@carbon/charts": libraryVersion,
            "@carbon/charts-vue": libraryVersion,
            "@vue/cli-plugin-babel": "4.1.1",
            d3: "5.15.0",
            vue: "^2.6.11"
        }
    }, null, "\t\t");
    return {
        "src/components/chart.vue": chartVue,
        "src/App.vue": appVue,
        "src/main.js": mainJs,
        "package.json": packageJson
    };
};
//# sourceMappingURL=../../../demo/data/create-codesandbox.js.map