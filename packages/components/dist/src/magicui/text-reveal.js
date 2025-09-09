"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextReveal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("motion/react");
var react_2 = require("react");
var utils_1 = require("@/src/lib/utils");
var TextReveal = function (_a) {
    var children = _a.children, className = _a.className;
    var targetRef = (0, react_2.useRef)(null);
    var scrollYProgress = (0, react_1.useScroll)({
        target: targetRef,
    }).scrollYProgress;
    if (typeof children !== "string") {
        throw new Error("TextReveal: children must be a string");
    }
    var words = children.split(" ");
    return ((0, jsx_runtime_1.jsx)("div", { ref: targetRef, className: (0, utils_1.cn)("relative z-0 h-[200vh]", className), children: (0, jsx_runtime_1.jsx)("div", { className: "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]", children: (0, jsx_runtime_1.jsx)("span", { ref: targetRef, className: "flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl", children: words.map(function (word, i) {
                    var start = i / words.length;
                    var end = start + 1 / words.length;
                    return ((0, jsx_runtime_1.jsx)(Word, { progress: scrollYProgress, range: [start, end], children: word }, i));
                }) }) }) }));
};
exports.TextReveal = TextReveal;
var Word = function (_a) {
    var children = _a.children, progress = _a.progress, range = _a.range;
    var opacity = (0, react_1.useTransform)(progress, range, [0, 1]);
    return ((0, jsx_runtime_1.jsxs)("span", { className: "xl:lg-3 relative mx-1 lg:mx-1.5", children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute opacity-30", children: children }), (0, jsx_runtime_1.jsx)(react_1.motion.span, { style: { opacity: opacity }, className: "text-black dark:text-white", children: children })] }));
};
