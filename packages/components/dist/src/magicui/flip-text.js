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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlipText = FlipText;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("motion/react");
var utils_1 = require("@/src/lib/utils");
var react_2 = __importDefault(require("react"));
var defaultVariants = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
};
function FlipText(_a) {
    var children = _a.children, _b = _a.duration, duration = _b === void 0 ? 0.5 : _b, _c = _a.delayMultiple, delayMultiple = _c === void 0 ? 0.08 : _c, className = _a.className, _d = _a.as, Component = _d === void 0 ? "span" : _d, variants = _a.variants, props = __rest(_a, ["children", "duration", "delayMultiple", "className", "as", "variants"]);
    var MotionComponent = react_1.motion.create(Component);
    var characters = react_2.default.Children.toArray(children).join("").split("");
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center space-x-2", children: (0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { mode: "wait", children: characters.map(function (char, i) { return ((0, jsx_runtime_1.jsx)(MotionComponent, __assign({ initial: "hidden", animate: "visible", exit: "hidden", variants: variants || defaultVariants, transition: { duration: duration, delay: i * delayMultiple }, className: (0, utils_1.cn)("origin-center drop-shadow-sm", className) }, props, { children: char }), i)); }) }) }));
}
