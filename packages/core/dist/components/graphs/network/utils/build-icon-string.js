var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { getAttributes, toString } from "@carbon/icon-helpers/es/index.js";
export default (function (icon) {
    return toString(__assign(__assign({}, icon), { attrs: getAttributes(icon.attrs) }));
});
//# sourceMappingURL=../../../../../src/components/graphs/network/utils/build-icon-string.js.map