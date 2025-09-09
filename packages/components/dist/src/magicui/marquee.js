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
exports.Marquee = Marquee;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("@/lib/utils");
function Marquee(_a) {
    var className = _a.className, _b = _a.reverse, reverse = _b === void 0 ? false : _b, _c = _a.pauseOnHover, pauseOnHover = _c === void 0 ? false : _c, children = _a.children, _d = _a.vertical, vertical = _d === void 0 ? false : _d, _e = _a.repeat, repeat = _e === void 0 ? 4 : _e, props = __rest(_a, ["className", "reverse", "pauseOnHover", "children", "vertical", "repeat"]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({}, props, { className: (0, utils_1.cn)("group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]", {
            "flex-row": !vertical,
            "flex-col": vertical,
        }, className), children: Array(repeat)
            .fill(0)
            .map(function (_, i) { return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("flex shrink-0 justify-around [gap:var(--gap)]", {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
            }), children: children }, i)); }) })));
}
