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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meteors = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("@/src/lib/utils");
var react_1 = require("react");
var Meteors = function (_a) {
    var _b = _a.number, number = _b === void 0 ? 20 : _b, _c = _a.minDelay, minDelay = _c === void 0 ? 0.2 : _c, _d = _a.maxDelay, maxDelay = _d === void 0 ? 1.2 : _d, _e = _a.minDuration, minDuration = _e === void 0 ? 2 : _e, _f = _a.maxDuration, maxDuration = _f === void 0 ? 10 : _f, _g = _a.angle, angle = _g === void 0 ? 215 : _g, className = _a.className;
    var _h = (0, react_1.useState)([]), meteorStyles = _h[0], setMeteorStyles = _h[1];
    (0, react_1.useEffect)(function () {
        var styles = __spreadArray([], new Array(number), true).map(function () { return ({
            "--angle": -angle + "deg",
            top: "-5%",
            left: "calc(0% + ".concat(Math.floor(Math.random() * window.innerWidth), "px)"),
            animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
            animationDuration: Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) +
                "s",
        }); });
        setMeteorStyles(styles);
    }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: __spreadArray([], meteorStyles, true).map(function (style, idx) { return (
        // Meteor Head
        (0, jsx_runtime_1.jsx)("span", { style: __assign({}, style), className: (0, utils_1.cn)("pointer-events-none absolute size-0.5 rotate-[var(--angle)] animate-meteor rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]", className), children: (0, jsx_runtime_1.jsx)("div", { className: "pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent" }) }, idx)); }) }));
};
exports.Meteors = Meteors;
