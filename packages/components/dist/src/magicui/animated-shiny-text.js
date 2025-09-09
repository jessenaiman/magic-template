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
exports.AnimatedShinyText = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("@/src/lib/utils");
var AnimatedShinyText = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.shimmerWidth, shimmerWidth = _b === void 0 ? 100 : _b, props = __rest(_a, ["children", "className", "shimmerWidth"]);
    return ((0, jsx_runtime_1.jsx)("span", __assign({ style: {
            "--shiny-width": "".concat(shimmerWidth, "px"),
        }, className: (0, utils_1.cn)("mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70", 
        // Shine effect
        "animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]", 
        // Shine gradient
        "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80", className) }, props, { children: children })));
};
exports.AnimatedShinyText = AnimatedShinyText;
