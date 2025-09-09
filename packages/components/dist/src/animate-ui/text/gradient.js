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
exports.GradientText = GradientText;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("motion/react");
var utils_1 = require("@/lib/utils");
function GradientText(_a) {
    var text = _a.text, className = _a.className, _b = _a.gradient, gradient = _b === void 0 ? 'linear-gradient(90deg, #3b82f6 0%, #a855f7 20%, #ec4899 50%, #a855f7 80%, #3b82f6 100%)' : _b, _c = _a.neon, neon = _c === void 0 ? false : _c, _d = _a.transition, transition = _d === void 0 ? { duration: 50, repeat: Infinity, ease: 'linear' } : _d, props = __rest(_a, ["text", "className", "gradient", "neon", "transition"]);
    var baseStyle = {
        backgroundImage: gradient,
    };
    return ((0, jsx_runtime_1.jsxs)("span", __assign({ "data-slot": "gradient-text", className: (0, utils_1.cn)('relative inline-block', className) }, props, { children: [(0, jsx_runtime_1.jsx)(react_1.motion.span, { className: "m-0 text-transparent bg-clip-text bg-[length:700%_100%] bg-[position:0%_0%]", style: baseStyle, initial: { backgroundPosition: '0% 0%' }, animate: { backgroundPosition: '500% 100%' }, transition: transition, children: text }), neon && ((0, jsx_runtime_1.jsx)(react_1.motion.span, { className: "m-0 absolute top-0 left-0 text-transparent bg-clip-text blur-[8px] mix-blend-plus-lighter bg-[length:700%_100%] bg-[position:0%_0%]", style: baseStyle, initial: { backgroundPosition: '0% 0%' }, animate: { backgroundPosition: '500% 100%' }, transition: transition, children: text }))] })));
}
