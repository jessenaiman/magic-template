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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ripple = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var utils_1 = require("@/lib/utils");
exports.Ripple = react_1.default.memo(function Ripple(_a) {
    var _b = _a.mainCircleSize, mainCircleSize = _b === void 0 ? 210 : _b, _c = _a.mainCircleOpacity, mainCircleOpacity = _c === void 0 ? 0.24 : _c, _d = _a.numCircles, numCircles = _d === void 0 ? 8 : _d, className = _a.className, props = __rest(_a, ["mainCircleSize", "mainCircleOpacity", "numCircles", "className"]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, utils_1.cn)("pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]", className) }, props, { children: Array.from({ length: numCircles }, function (_, i) {
            var size = mainCircleSize + i * 70;
            var opacity = mainCircleOpacity - i * 0.03;
            var animationDelay = "".concat(i * 0.06, "s");
            var borderStyle = "solid";
            return ((0, jsx_runtime_1.jsx)("div", { className: "absolute animate-ripple rounded-full border bg-foreground/25 shadow-xl", style: {
                    "--i": i,
                    width: "".concat(size, "px"),
                    height: "".concat(size, "px"),
                    opacity: opacity,
                    animationDelay: animationDelay,
                    borderStyle: borderStyle,
                    borderWidth: "1px",
                    borderColor: "var(--foreground)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                } }, i));
        }) })));
});
exports.Ripple.displayName = "Ripple";
