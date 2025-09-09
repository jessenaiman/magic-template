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
exports.Counter = Counter;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("motion/react");
var sliding_number_1 = require("@/packages/ui/src/animate-ui/text/sliding-number");
var button_1 = require("@/packages/ui/src/ui/button");
var utils_1 = require("@/lib/utils");
function Counter(_a) {
    var number = _a.number, setNumber = _a.setNumber, className = _a.className, slidingNumberProps = _a.slidingNumberProps, buttonProps = _a.buttonProps, _b = _a.transition, transition = _b === void 0 ? { type: 'spring', bounce: 0, stiffness: 300, damping: 30 } : _b, props = __rest(_a, ["number", "setNumber", "className", "slidingNumberProps", "buttonProps", "transition"]);
    return ((0, jsx_runtime_1.jsxs)(react_1.motion.div, __assign({ "data-slot": "counter", layout: true, transition: transition, className: (0, utils_1.cn)('flex items-center gap-x-2 p-1 rounded-xl bg-neutral-100 dark:bg-neutral-800', className) }, props, { children: [(0, jsx_runtime_1.jsx)(react_1.motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: (0, jsx_runtime_1.jsx)(button_1.Button, __assign({ size: "icon" }, buttonProps, { onClick: function () { return setNumber(number - 1); }, className: (0, utils_1.cn)('bg-white dark:bg-neutral-950 hover:bg-white/70 dark:hover:bg-neutral-950/70 text-neutral-950 dark:text-white text-2xl font-light pb-[3px]', buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.className), children: "-" })) }), (0, jsx_runtime_1.jsx)(sliding_number_1.SlidingNumber, __assign({ number: number }, slidingNumberProps, { className: (0, utils_1.cn)('text-lg', slidingNumberProps === null || slidingNumberProps === void 0 ? void 0 : slidingNumberProps.className) })), (0, jsx_runtime_1.jsx)(react_1.motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: (0, jsx_runtime_1.jsx)(button_1.Button, __assign({ size: "icon" }, buttonProps, { onClick: function () { return setNumber(number + 1); }, className: (0, utils_1.cn)('bg-white dark:bg-neutral-950 hover:bg-white/70 dark:hover:bg-neutral-950/70 text-neutral-950 dark:text-white text-2xl font-light pb-[3px]', buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.className), children: "+" })) })] })));
}
