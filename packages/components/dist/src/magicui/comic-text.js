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
exports.ComicText = ComicText;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("@/lib/utils");
var react_1 = require("motion/react");
function ComicText(_a) {
    var children = _a.children, className = _a.className, style = _a.style, _b = _a.fontSize, fontSize = _b === void 0 ? 5 : _b;
    if (typeof children !== "string") {
        throw new Error("children must be a string");
    }
    var dotColor = "#EF4444";
    var backgroundColor = "#FACC15";
    return ((0, jsx_runtime_1.jsx)(react_1.motion.div, { className: (0, utils_1.cn)("select-none text-center", className), style: __assign({ fontSize: "".concat(fontSize, "rem"), fontFamily: "'Bangers', 'Comic Sans MS', 'Impact', sans-serif", fontWeight: "900", WebkitTextStroke: "".concat(fontSize * 0.35, "px #000000"), transform: "skewX(-10deg)", textTransform: "uppercase", filter: "\n          drop-shadow(5px 5px 0px #000000) \n          drop-shadow(3px 3px 0px ".concat(dotColor, ")\n        "), backgroundColor: backgroundColor, backgroundImage: "radial-gradient(circle at 1px 1px, ".concat(dotColor, " 1px, transparent 0)"), backgroundSize: "8px 8px", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }, style), initial: { opacity: 0, scale: 0.8, rotate: -2 }, animate: { opacity: 1, scale: 1, rotate: 0 }, transition: {
            duration: 0.6,
            ease: [0.175, 0.885, 0.32, 1.275],
            type: "spring",
        }, children: children }));
}
