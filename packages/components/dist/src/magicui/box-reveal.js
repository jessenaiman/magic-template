"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxReveal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("motion/react");
var react_2 = require("react");
var BoxReveal = function (_a) {
    var children = _a.children, _b = _a.width, width = _b === void 0 ? "fit-content" : _b, _c = _a.boxColor, boxColor = _c === void 0 ? "#5046e6" : _c, duration = _a.duration;
    var mainControls = (0, react_1.useAnimation)();
    var slideControls = (0, react_1.useAnimation)();
    var ref = (0, react_2.useRef)(null);
    var isInView = (0, react_1.useInView)(ref, { once: true });
    (0, react_2.useEffect)(function () {
        if (isInView) {
            slideControls.start("visible");
            mainControls.start("visible");
        }
        else {
            slideControls.start("hidden");
            mainControls.start("hidden");
        }
    }, [isInView, mainControls, slideControls]);
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, style: { position: "relative", width: width, overflow: "hidden" }, children: [(0, jsx_runtime_1.jsx)(react_1.motion.div, { variants: {
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }, initial: "hidden", animate: mainControls, transition: { duration: duration ? duration : 0.5, delay: 0.25 }, children: children }), (0, jsx_runtime_1.jsx)(react_1.motion.div, { variants: {
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }, initial: "hidden", animate: slideControls, transition: { duration: duration ? duration : 0.5, ease: "easeIn" }, style: {
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    zIndex: 20,
                    background: boxColor,
                } })] }));
};
exports.BoxReveal = BoxReveal;
