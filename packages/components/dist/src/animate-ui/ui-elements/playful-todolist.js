"use strict";
'use client';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.PlayfulTodolist = PlayfulTodolist;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
var label_1 = require("@/packages/ui/src/ui/label");
var checkbox_1 = require("@/packages/ui/src/animate-ui/radix/checkbox");
var checkboxItems = [
    {
        id: 1,
        label: 'Code in Assembly 💾',
        defaultChecked: false,
    },
    {
        id: 2,
        label: 'Present a bug as a feature 🪲',
        defaultChecked: false,
    },
    {
        id: 3,
        label: 'Push to prod on a Friday 🚀',
        defaultChecked: false,
    },
];
var getPathAnimate = function (isChecked) { return ({
    pathLength: isChecked ? 1 : 0,
    opacity: isChecked ? 1 : 0,
}); };
var getPathTransition = function (isChecked) { return ({
    pathLength: { duration: 1, ease: 'easeInOut' },
    opacity: {
        duration: 0.01,
        delay: isChecked ? 0 : 1,
    },
}); };
function PlayfulTodolist() {
    var _a = React.useState(checkboxItems.map(function (i) { return !!i.defaultChecked; })), checked = _a[0], setChecked = _a[1];
    return ((0, jsx_runtime_1.jsx)("div", { className: "bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6 space-y-6", children: checkboxItems.map(function (item, idx) { return ((0, jsx_runtime_1.jsxs)("div", { className: "space-y-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-2", children: [(0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { checked: checked[idx], onCheckedChange: function (val) {
                                var updated = __spreadArray([], checked, true);
                                updated[idx] = val === true;
                                setChecked(updated);
                            }, id: "checkbox-".concat(item.id) }), (0, jsx_runtime_1.jsxs)("div", { className: "relative inline-block", children: [(0, jsx_runtime_1.jsx)(label_1.Label, { htmlFor: "checkbox-".concat(item.id), children: item.label }), (0, jsx_runtime_1.jsx)(react_1.motion.svg, { width: "340", height: "32", viewBox: "0 0 340 32", className: "absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-20 w-full h-10", children: (0, jsx_runtime_1.jsx)(react_1.motion.path, { d: "M 10 16.91 s 79.8 -11.36 98.1 -11.34 c 22.2 0.02 -47.82 14.25 -33.39 22.02 c 12.61 6.77 124.18 -27.98 133.31 -17.28 c 7.52 8.38 -26.8 20.02 4.61 22.05 c 24.55 1.93 113.37 -20.36 113.37 -20.36", vectorEffect: "non-scaling-stroke", strokeWidth: 2, strokeLinecap: "round", strokeMiterlimit: 10, fill: "none", initial: false, animate: getPathAnimate(!!checked[idx]), transition: getPathTransition(!!checked[idx]), className: "stroke-neutral-900 dark:stroke-neutral-100" }) })] })] }), idx !== checkboxItems.length - 1 && ((0, jsx_runtime_1.jsx)("div", { className: "border-t border-neutral-300 dark:border-neutral-700" }))] }, item.id)); }) }));
}
