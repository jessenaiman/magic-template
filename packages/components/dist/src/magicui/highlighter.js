"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Highlighter = Highlighter;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("motion/react");
var rough_notation_1 = require("rough-notation");
function Highlighter(_a) {
    var children = _a.children, _b = _a.action, action = _b === void 0 ? "highlight" : _b, _c = _a.color, color = _c === void 0 ? "#ffd1dc" : _c, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, _e = _a.animationDuration, animationDuration = _e === void 0 ? 600 : _e, _f = _a.iterations, iterations = _f === void 0 ? 2 : _f, _g = _a.padding, padding = _g === void 0 ? 2 : _g, _h = _a.multiline, multiline = _h === void 0 ? true : _h, _j = _a.isView, isView = _j === void 0 ? false : _j;
    var elementRef = (0, react_1.useRef)(null);
    var isInView = (0, react_2.useInView)(elementRef, {
        once: true,
        margin: "-10%",
    });
    // If isView is false, always show. If isView is true, wait for inView
    var shouldShow = !isView || isInView;
    (0, react_1.useEffect)(function () {
        if (!shouldShow)
            return;
        var element = elementRef.current;
        if (!element)
            return;
        var annotation = (0, rough_notation_1.annotate)(element, {
            type: action,
            color: color,
            strokeWidth: strokeWidth,
            animationDuration: animationDuration,
            iterations: iterations,
            padding: padding,
            multiline: multiline,
        });
        annotation.show();
        return function () {
            if (element) {
                (0, rough_notation_1.annotate)(element, { type: action }).remove();
            }
        };
    }, [
        shouldShow,
        action,
        color,
        strokeWidth,
        animationDuration,
        iterations,
        padding,
        multiline,
    ]);
    return ((0, jsx_runtime_1.jsx)("span", { ref: elementRef, className: "relative inline-block bg-transparent", children: children }));
}
