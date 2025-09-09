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
exports.WordRotate = WordRotate;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("motion/react");
var react_2 = require("react");
var utils_1 = require("@/src/lib/utils");
function WordRotate(_a) {
    var words = _a.words, _b = _a.duration, duration = _b === void 0 ? 2500 : _b, _c = _a.motionProps, motionProps = _c === void 0 ? {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
        transition: { duration: 0.25, ease: "easeOut" },
    } : _c, className = _a.className;
    var _d = (0, react_2.useState)(0), index = _d[0], setIndex = _d[1];
    (0, react_2.useEffect)(function () {
        var interval = setInterval(function () {
            setIndex(function (prevIndex) { return (prevIndex + 1) % words.length; });
        }, duration);
        // Clean up interval on unmount
        return function () { return clearInterval(interval); };
    }, [words, duration]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "overflow-hidden py-2", children: (0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { mode: "wait", children: (0, jsx_runtime_1.jsx)(react_1.motion.h1, __assign({ className: (0, utils_1.cn)(className) }, motionProps, { children: words[index] }), words[index]) }) }));
}
