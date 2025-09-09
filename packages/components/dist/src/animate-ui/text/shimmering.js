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
exports.ShimmeringText = ShimmeringText;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("motion/react");
var utils_1 = require("@/lib/utils");
function ShimmeringText(_a) {
    var _b;
    var text = _a.text, _c = _a.duration, duration = _c === void 0 ? 1 : _c, transition = _a.transition, _d = _a.wave, wave = _d === void 0 ? false : _d, className = _a.className, _e = _a.color, color = _e === void 0 ? 'var(--color-neutral-500)' : _e, _f = _a.shimmeringColor, shimmeringColor = _f === void 0 ? 'var(--color-neutral-300)' : _f, props = __rest(_a, ["text", "duration", "transition", "wave", "className", "color", "shimmeringColor"]);
    return ((0, jsx_runtime_1.jsx)(react_1.motion.span, __assign({ className: (0, utils_1.cn)('relative inline-block [perspective:500px]', className), style: {
            '--shimmering-color': shimmeringColor,
            '--color': color,
            color: 'var(--color)',
        } }, props, { children: (_b = text === null || text === void 0 ? void 0 : text.split('')) === null || _b === void 0 ? void 0 : _b.map(function (char, i) { return ((0, jsx_runtime_1.jsx)(react_1.motion.span, { className: "inline-block whitespace-pre [transform-style:preserve-3d]", initial: __assign(__assign({}, (wave
                ? {
                    scale: 1,
                    rotateY: 0,
                }
                : {})), { color: 'var(--color)' }), animate: __assign(__assign({}, (wave
                ? {
                    x: [0, 5, 0],
                    y: [0, -5, 0],
                    scale: [1, 1.1, 1],
                    rotateY: [0, 15, 0],
                }
                : {})), { color: ['var(--color)', 'var(--shimmering-color)', 'var(--color)'] }), transition: __assign({ duration: duration, repeat: Infinity, repeatType: 'loop', repeatDelay: text.length * 0.05, delay: (i * duration) / text.length, ease: 'easeInOut' }, transition), children: char }, i)); }) })));
}
