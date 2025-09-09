"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridPattern = GridPattern;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var utils_1 = require("@/lib/utils");
function GridPattern(_a) {
    var _b = _a.width, width = _b === void 0 ? 40 : _b, _c = _a.height, height = _c === void 0 ? 40 : _c, _d = _a.x, x = _d === void 0 ? -1 : _d, _e = _a.y, y = _e === void 0 ? -1 : _e, _f = _a.strokeDasharray, strokeDasharray = _f === void 0 ? "0" : _f, squares = _a.squares, className = _a.className, props = __rest(_a, ["width", "height", "x", "y", "strokeDasharray", "squares", "className"]);
    var id = (0, react_1.useId)();
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ "aria-hidden": "true", className: (0, utils_1.cn)("pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30", className) }, props, { children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("pattern", { id: id, width: width, height: height, patternUnits: "userSpaceOnUse", x: x, y: y, children: (0, jsx_runtime_1.jsx)("path", { d: "M.5 ".concat(height, "V.5H").concat(width), fill: "none", strokeDasharray: strokeDasharray }) }) }), (0, jsx_runtime_1.jsx)("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: "url(#".concat(id, ")") }), squares && ((0, jsx_runtime_1.jsx)("svg", { x: x, y: y, className: "overflow-visible", children: squares.map(function (_a) {
                    var x = _a[0], y = _a[1];
                    return ((0, jsx_runtime_1.jsx)("rect", { strokeWidth: "0", width: width - 1, height: height - 1, x: x * width + 1, y: y * height + 1 }, "".concat(x, "-").concat(y)));
                }) }))] })));
}
