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
exports.FlipButton = FlipButton;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("motion/react");
var utils_1 = require("@/src/lib/utils");
var DEFAULT_SPAN_CLASS_NAME = 'absolute inset-0 flex items-center justify-center rounded-lg';
function FlipButton(_a) {
    var frontText = _a.frontText, backText = _a.backText, _b = _a.transition, transition = _b === void 0 ? { type: 'spring', stiffness: 280, damping: 20 } : _b, className = _a.className, frontClassName = _a.frontClassName, backClassName = _a.backClassName, _c = _a.from, from = _c === void 0 ? 'top' : _c, props = __rest(_a, ["frontText", "backText", "transition", "className", "frontClassName", "backClassName", "from"]);
    var isVertical = from === 'top' || from === 'bottom';
    var rotateAxis = isVertical ? 'rotateX' : 'rotateY';
    var frontOffset = from === 'top' || from === 'left' ? '50%' : '-50%';
    var backOffset = from === 'top' || from === 'left' ? '-50%' : '50%';
    var buildVariant = function (opacity, rotation, offset) {
        var _a;
        if (offset === void 0) { offset = null; }
        return (__assign(__assign((_a = { opacity: opacity }, _a[rotateAxis] = rotation, _a), (isVertical && offset !== null ? { y: offset } : {})), (!isVertical && offset !== null ? { x: offset } : {})));
    };
    var frontVariants = {
        initial: buildVariant(1, 0, '0%'),
        hover: buildVariant(0, 90, frontOffset),
    };
    var backVariants = {
        initial: buildVariant(0, 90, backOffset),
        hover: buildVariant(1, 0, '0%'),
    };
    return ((0, jsx_runtime_1.jsxs)(react_1.motion.button, __assign({ "data-slot": "flip-button", initial: "initial", whileHover: "hover", whileTap: { scale: 0.95 }, className: (0, utils_1.cn)('relative inline-block h-10 px-4 py-2 text-sm font-medium cursor-pointer perspective-[1000px] focus:outline-none', className) }, props, { children: [(0, jsx_runtime_1.jsx)(react_1.motion.span, { "data-slot": "flip-button-front", variants: frontVariants, transition: transition, className: (0, utils_1.cn)(DEFAULT_SPAN_CLASS_NAME, 'bg-muted text-black dark:text-white', frontClassName), children: frontText }), (0, jsx_runtime_1.jsx)(react_1.motion.span, { "data-slot": "flip-button-back", variants: backVariants, transition: transition, className: (0, utils_1.cn)(DEFAULT_SPAN_CLASS_NAME, 'bg-primary text-primary-foreground', backClassName), children: backText }), (0, jsx_runtime_1.jsx)("span", { className: "invisible", children: frontText })] })));
}
