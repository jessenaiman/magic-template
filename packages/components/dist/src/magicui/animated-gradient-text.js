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
exports.AnimatedGradientText = AnimatedGradientText;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("@/src/lib/utils");
function AnimatedGradientText(_a) {
    var children = _a.children, className = _a.className, _b = _a.speed, speed = _b === void 0 ? 1 : _b, _c = _a.colorFrom, colorFrom = _c === void 0 ? "#ffaa40" : _c, _d = _a.colorTo, colorTo = _d === void 0 ? "#9c40ff" : _d, props = __rest(_a, ["children", "className", "speed", "colorFrom", "colorTo"]);
    return ((0, jsx_runtime_1.jsx)("span", __assign({ style: {
            "--bg-size": "".concat(speed * 300, "%"),
            "--color-from": colorFrom,
            "--color-to": colorTo,
        }, className: (0, utils_1.cn)("inline animate-gradient bg-gradient-to-r from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent", className) }, props, { children: children })));
}
