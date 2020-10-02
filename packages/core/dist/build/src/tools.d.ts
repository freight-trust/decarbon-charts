import { CartesianOrientations, AxisChartOptions } from "./interfaces";
export declare namespace Tools {
    export const debounce: any;
    export const clone: any;
    export const merge: any;
    export const removeArrayDuplicates: any;
    export const clamp: any;
    /**
     * Returns default chart options merged with provided options,
     * with special cases for axes.
     * Axes object will not merge the not provided axes.
     *
     * @export
     * @param {AxisChartOptions} defaultOptions Configuration.options[chartType]
     * @param {AxisChartOptions} providedOptions user provided options
     * @returns merged options
     */
    export function mergeDefaultChartOptions(defaultOptions: AxisChartOptions, providedOptions: AxisChartOptions): any;
    /**************************************
     *  DOM-related operations            *
     *************************************/
    /**
     * Get width & height of an element
     *
     * @export
     * @param {any} el element to get dimensions from
     * @returns an object containing the width and height of el
     */
    export function getDimensions(el: any): {
        width: number;
        height: number;
    };
    /**
     * Returns an elements's x and y translations from attribute transform
     * @param {HTMLElement} element
     * @returns an object containing the x and y translations or null
     */
    export function getTranslationValues(elementRef: HTMLElement): {
        tx: string;
        ty: string;
    };
    /**************************************
     *  Formatting & calculations         *
     *************************************/
    /**
     * Gets x and y coordinates from a HTML transform attribute
     *
     * @export
     * @param {any} string the transform attribute string ie. transform(x,y)
     * @returns Returns an object with x and y offsets of the transform
     */
    export function getTranformOffsets(string: any): {
        x: number;
        y: number;
    };
    /**
     * Capitalizes first letter of a string
     *
     * @export
     * @param {any} string the string whose first letter you'd like to capitalize
     * @returns The input string with its first letter capitalized
     */
    export function capitalizeFirstLetter(string: any): any;
    /**
     * Get the percentage of a datapoint compared to the entire data-set.
     * Returns 1 significant digit if percentage is less than 1%.
     * @export
     * @param {any} item
     * @param {any} fullData
     * @returns The percentage in the form of a number
     */
    export function convertValueToPercentage(item: any, fullData: any): string | number;
    /**************************************
     *  Object/array related checks       *
     *************************************/
    /**
     * Get the difference between two arrays' items
     *
     * @export
     * @param {any[]} oldArray
     * @param {any[]} newArray
     * @returns The items missing in newArray from oldArray, and items added to newArray compared to oldArray
     */
    export function arrayDifferences(oldArray: any[], newArray: any[]): {
        missing: any[];
        added: any[];
    };
    /**
     * Lists out the duplicated keys in an array of data
     *
     * @export
     * @param {*} data - array of data
     * @returns A list of the duplicated keys in data
     */
    export function getDuplicateValues(arr: any): any[];
    /**
     * In D3, moves an element to the front of the canvas
     *
     * @export
     * @param {any} element
     * @returns The function to be used by D3 to push element to the top of the canvas
     */
    export function moveToFront(element: any): any;
    export const getProperty: (object: any, ...propPath: any[]) => any;
    interface SVGPathCoordinates {
        x0: number;
        x1: number;
        y0: number;
        y1: number;
    }
    export const flipSVGCoordinatesBasedOnOrientation: (verticalCoordinates: SVGPathCoordinates, orientation?: CartesianOrientations) => SVGPathCoordinates;
    export const generateSVGPathString: (verticalCoordinates: SVGPathCoordinates, orientation?: CartesianOrientations) => string;
    export {};
}
