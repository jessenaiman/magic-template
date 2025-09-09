"use strict";
"use client";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagicCard = MagicCard;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("motion/react");
var react_2 = require("react");
var utils_1 = require("@/lib/utils");
function MagicCard(_a) {
    var children = _a.children, className = _a.className, _b = _a.gradientSize, gradientSize = _b === void 0 ? 200 : _b, _c = _a.gradientColor, gradientColor = _c === void 0 ? "#262626" : _c, _d = _a.gradientOpacity, gradientOpacity = _d === void 0 ? 0.8 : _d, _e = _a.gradientFrom, gradientFrom = _e === void 0 ? "#9E7AFF" : _e, _f = _a.gradientTo, gradientTo = _f === void 0 ? "#FE8BBB" : _f;
    var cardRef = (0, react_2.useRef)(null);
    var mouseX = (0, react_1.useMotionValue)(-gradientSize);
    var mouseY = (0, react_1.useMotionValue)(-gradientSize);
    var handleMouseMove = (0, react_2.useCallback)(function (e) {
        if (cardRef.current) {
            var _a = cardRef.current.getBoundingClientRect(), left = _a.left, top_1 = _a.top;
            var clientX = e.clientX;
            var clientY = e.clientY;
            mouseX.set(clientX - left);
            mouseY.set(clientY - top_1);
        }
    }, [mouseX, mouseY]);
    var handleMouseOut = (0, react_2.useCallback)(function (e) {
        if (!e.relatedTarget) {
            document.removeEventListener("mousemove", handleMouseMove);
            mouseX.set(-gradientSize);
            mouseY.set(-gradientSize);
        }
    }, [handleMouseMove, mouseX, gradientSize, mouseY]);
    var handleMouseEnter = (0, react_2.useCallback)(function () {
        document.addEventListener("mousemove", handleMouseMove);
        mouseX.set(-gradientSize);
        mouseY.set(-gradientSize);
    }, [handleMouseMove, mouseX, gradientSize, mouseY]);
    (0, react_2.useEffect)(function () {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseout", handleMouseOut);
        document.addEventListener("mouseenter", handleMouseEnter);
        return function () {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseout", handleMouseOut);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [handleMouseEnter, handleMouseMove, handleMouseOut]);
    (0, react_2.useEffect)(function () {
        mouseX.set(-gradientSize);
        mouseY.set(-gradientSize);
    }, [gradientSize, mouseX, mouseY]);
    return ((0, jsx_runtime_1.jsxs)("div", { ref: cardRef, className: (0, utils_1.cn)("group relative rounded-[inherit]", className), children: [(0, jsx_runtime_1.jsx)(react_1.motion.div, { className: "pointer-events-none absolute inset-0 rounded-[inherit] bg-border duration-300 group-hover:opacity-100", style: {
                    background: (0, react_1.useMotionTemplate)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          radial-gradient(", "px circle at ", "px ", "px,\n          ", ", \n          ", ", \n          var(--border) 100%\n          )\n          "], ["\n          radial-gradient(", "px circle at ", "px ", "px,\n          ", ", \n          ", ", \n          var(--border) 100%\n          )\n          "])), gradientSize, mouseX, mouseY, gradientFrom, gradientTo),
                } }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-px rounded-[inherit] bg-background" }), (0, jsx_runtime_1.jsx)(react_1.motion.div, { className: "pointer-events-none absolute inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100", style: {
                    background: (0, react_1.useMotionTemplate)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            radial-gradient(", "px circle at ", "px ", "px, ", ", transparent 100%)\n          "], ["\n            radial-gradient(", "px circle at ", "px ", "px, ", ", transparent 100%)\n          "])), gradientSize, mouseX, mouseY, gradientColor),
                    opacity: gradientOpacity,
                } }), (0, jsx_runtime_1.jsx)("div", { className: "relative", children: children })] }));
}
var templateObject_1, templateObject_2;
