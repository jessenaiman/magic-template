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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinningText = SpinningText;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("@/src/lib/utils");
var react_1 = require("motion/react");
var BASE_TRANSITION = {
    repeat: Infinity,
    ease: function (t) { return t; }, // linear easing as a function
};
var BASE_ITEM_VARIANTS = {
    hidden: {
        opacity: 1,
    },
    visible: {
        opacity: 1,
    },
};
function SpinningText(_a) {
    var _b;
    var children = _a.children, _c = _a.duration, duration = _c === void 0 ? 10 : _c, style = _a.style, className = _a.className, _d = _a.reverse, reverse = _d === void 0 ? false : _d, _e = _a.radius, radius = _e === void 0 ? 5 : _e, transition = _a.transition, variants = _a.variants;
    if (typeof children !== "string" && !Array.isArray(children)) {
        throw new Error("children must be a string or an array of strings");
    }
    if (Array.isArray(children)) {
        // Validate all elements are strings
        if (!children.every(function (child) { return typeof child === "string"; })) {
            throw new Error("all elements in children array must be strings");
        }
        children = children.join("");
    }
    var letters = children.split("");
    letters.push(" ");
    var finalTransition = __assign(__assign(__assign({}, BASE_TRANSITION), transition), { duration: (_b = transition === null || transition === void 0 ? void 0 : transition.duration) !== null && _b !== void 0 ? _b : duration });
    var containerVariants = __assign({ visible: { rotate: reverse ? -360 : 360 } }, variants === null || variants === void 0 ? void 0 : variants.container);
    var itemVariants = __assign(__assign({}, BASE_ITEM_VARIANTS), variants === null || variants === void 0 ? void 0 : variants.item);
    return ((0, jsx_runtime_1.jsxs)(react_1.motion.div, { className: (0, utils_1.cn)("relative", className), style: __assign({}, style), initial: "hidden", animate: "visible", variants: containerVariants, transition: finalTransition, children: [letters.map(function (letter, index) { return ((0, jsx_runtime_1.jsx)(react_1.motion.span, { "aria-hidden": "true", variants: itemVariants, className: "absolute left-1/2 top-1/2 inline-block", style: {
                    "--index": index,
                    "--total": letters.length,
                    "--radius": radius,
                    transform: "\n                  translate(-50%, -50%)\n                  rotate(calc(360deg / var(--total) * var(--index)))\n                  translateY(calc(var(--radius, 5) * -1ch))\n                ",
                    transformOrigin: "center",
                }, children: letter }, "".concat(index, "-").concat(letter))); }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: children })] }));
}
