"use strict";
"use client";
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
exports.InteractiveGridPattern = InteractiveGridPattern;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("@/lib/utils");
var react_1 = require("react");
/**
 * The InteractiveGridPattern component.
 *
 * @see InteractiveGridPatternProps for the props interface.
 * @returns A React component.
 */
function InteractiveGridPattern(_a) {
    var _b = _a.width, width = _b === void 0 ? 40 : _b, _c = _a.height, height = _c === void 0 ? 40 : _c, _d = _a.squares, squares = _d === void 0 ? [24, 24] : _d, className = _a.className, squaresClassName = _a.squaresClassName, props = __rest(_a, ["width", "height", "squares", "className", "squaresClassName"]);
    var horizontal = squares[0], vertical = squares[1];
    var _e = (0, react_1.useState)(null), hoveredSquare = _e[0], setHoveredSquare = _e[1];
    return ((0, jsx_runtime_1.jsx)("svg", __assign({ width: width * horizontal, height: height * vertical, className: (0, utils_1.cn)("absolute inset-0 h-full w-full border border-gray-400/30", className) }, props, { children: Array.from({ length: horizontal * vertical }).map(function (_, index) {
            var x = (index % horizontal) * width;
            var y = Math.floor(index / horizontal) * height;
            return ((0, jsx_runtime_1.jsx)("rect", { x: x, y: y, width: width, height: height, className: (0, utils_1.cn)("stroke-gray-400/30 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000", hoveredSquare === index ? "fill-gray-300/30" : "fill-transparent", squaresClassName), onMouseEnter: function () { return setHoveredSquare(index); }, onMouseLeave: function () { return setHoveredSquare(null); } }, index));
        }) })));
}
