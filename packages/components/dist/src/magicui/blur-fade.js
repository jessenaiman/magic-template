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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlurFade = BlurFade;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("motion/react");
var react_2 = require("react");
function BlurFade(_a) {
    var _b, _c;
    var children = _a.children, className = _a.className, variant = _a.variant, _d = _a.duration, duration = _d === void 0 ? 0.4 : _d, _e = _a.delay, delay = _e === void 0 ? 0 : _e, _f = _a.offset, offset = _f === void 0 ? 6 : _f, _g = _a.direction, direction = _g === void 0 ? "down" : _g, _h = _a.inView, inView = _h === void 0 ? false : _h, _j = _a.inViewMargin, inViewMargin = _j === void 0 ? "-50px" : _j, _k = _a.blur, blur = _k === void 0 ? "6px" : _k, props = __rest(_a, ["children", "className", "variant", "duration", "delay", "offset", "direction", "inView", "inViewMargin", "blur"]);
    var ref = (0, react_2.useRef)(null);
    var inViewResult = (0, react_1.useInView)(ref, { once: true, margin: inViewMargin });
    var isInView = !inView || inViewResult;
    var defaultVariants = {
        hidden: (_b = {},
            _b[direction === "left" || direction === "right" ? "x" : "y"] = direction === "right" || direction === "down" ? -offset : offset,
            _b.opacity = 0,
            _b.filter = "blur(".concat(blur, ")"),
            _b),
        visible: (_c = {},
            _c[direction === "left" || direction === "right" ? "x" : "y"] = 0,
            _c.opacity = 1,
            _c.filter = "blur(0px)",
            _c),
    };
    var combinedVariants = variant || defaultVariants;
    return ((0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { children: (0, jsx_runtime_1.jsx)(react_1.motion.div, __assign({ ref: ref, initial: "hidden", animate: isInView ? "visible" : "hidden", exit: "hidden", variants: combinedVariants, transition: {
                delay: 0.04 + delay,
                duration: duration,
                ease: "easeOut",
            }, className: className }, props, { children: children })) }));
}
