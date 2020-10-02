import { path as d3Path } from "d3-path";
export default (function (source, target, offsetHeight, offsetWidth, percent) {
    if (offsetHeight === void 0) { offsetHeight = 0; }
    if (offsetWidth === void 0) { offsetWidth = 0; }
    if (percent === void 0) { percent = 0.5; }
    var sx = source.x;
    var sy = source.y;
    var tx = target.x;
    var ty = target.y;
    sy = sy + (offsetHeight / 2);
    ty = ty + (offsetHeight / 2);
    // If it's pointing pure N
    if (sy > ty && tx === sx) {
        ty = ty + (offsetHeight / 2);
        sy = sy - (offsetHeight / 2);
        sx = sx + (offsetWidth / 2);
        tx = tx + (offsetWidth / 2);
    }
    // If it's pointing pure S
    if (ty > sy && tx === sx) {
        ty = ty - (offsetHeight / 2);
        sy = sy + (offsetHeight / 2);
        sx = sx + (offsetWidth / 2);
        tx = tx + (offsetWidth / 2);
    }
    // If it's pointing W
    if (tx > sx) {
        sx = sx + offsetWidth;
    }
    // If it's pointing E
    if (sx > tx) {
        tx = tx + offsetWidth;
    }
    var midPointX = sx + (tx - sx) * percent;
    var midPointY = sy + 4;
    var path = d3Path();
    path.moveTo(sx, sy);
    if (ty !== sy && tx !== sx) {
        path.lineTo(midPointX, sy);
        path.lineTo(midPointX, ty);
    }
    path.lineTo(tx, ty);
    return path.toString();
});
//# sourceMappingURL=../../../../../src/components/graphs/network/utils/build-path-string.js.map