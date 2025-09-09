"use strict";
'use client';
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
exports.GradientBackground = GradientBackground;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("motion/react");
var utils_1 = require("@/src/lib/utils");
function GradientBackground(_a) {
    var className = _a.className, _b = _a.transition, transition = _b === void 0 ? { duration: 15, ease: 'easeInOut', repeat: Infinity } : _b, props = __rest(_a, ["className", "transition"]);
    return ((0, jsx_runtime_1.jsx)(react_1.motion.div, __assign({ "data-slot": "gradient-background", className: (0, utils_1.cn)('size-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-[length:400%_400%]', className), animate: {
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }, transition: transition }, props)));
}
