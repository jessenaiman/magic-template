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
exports.DotPattern = DotPattern;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("@/src/lib/utils");
var react_1 = require("motion/react");
var react_2 = require("react");
/**
 * DotPattern Component
 *
 * A React component that creates an animated or static dot pattern background using SVG.
 * The pattern automatically adjusts to fill its container and can optionally display glowing dots.
 *
 * @component
 *
 * @see DotPatternProps for the props interface.
 *
 * @example
 * // Basic usage
 * <DotPattern />
 *
 * // With glowing effect and custom spacing
 * <DotPattern
 *   width={20}
 *   height={20}
 *   glow={true}
 *   className="opacity-50"
 * />
 *
 * @notes
 * - The component is client-side only ("use client")
 * - Automatically responds to container size changes
 * - When glow is enabled, dots will animate with random delays and durations
 * - Uses Motion for animations
 * - Dots color can be controlled via the text color utility classes
 */
function DotPattern(_a) {
    var _b = _a.width, width = _b === void 0 ? 16 : _b, _c = _a.height, height = _c === void 0 ? 16 : _c, _d = _a.x, x = _d === void 0 ? 0 : _d, _e = _a.y, y = _e === void 0 ? 0 : _e, _f = _a.cx, cx = _f === void 0 ? 1 : _f, _g = _a.cy, cy = _g === void 0 ? 1 : _g, _h = _a.cr, cr = _h === void 0 ? 1 : _h, className = _a.className, _j = _a.glow, glow = _j === void 0 ? false : _j, props = __rest(_a, ["width", "height", "x", "y", "cx", "cy", "cr", "className", "glow"]);
    var id = (0, react_2.useId)();
    var containerRef = (0, react_2.useRef)(null);
    var _k = (0, react_2.useState)({ width: 0, height: 0 }), dimensions = _k[0], setDimensions = _k[1];
    (0, react_2.useEffect)(function () {
        var updateDimensions = function () {
            if (containerRef.current) {
                var _a = containerRef.current.getBoundingClientRect(), width_1 = _a.width, height_1 = _a.height;
                setDimensions({ width: width_1, height: height_1 });
            }
        };
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return function () { return window.removeEventListener("resize", updateDimensions); };
    }, []);
    var dots = Array.from({
        length: Math.ceil(dimensions.width / width) *
            Math.ceil(dimensions.height / height),
    }, function (_, i) {
        var col = i % Math.ceil(dimensions.width / width);
        var row = Math.floor(i / Math.ceil(dimensions.width / width));
        return {
            x: col * width + cx,
            y: row * height + cy,
            delay: Math.random() * 5,
            duration: Math.random() * 3 + 2,
        };
    });
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ ref: containerRef, "aria-hidden": "true", className: (0, utils_1.cn)("pointer-events-none absolute inset-0 h-full w-full", className) }, props, { children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsxs)("radialGradient", { id: "".concat(id, "-gradient"), children: [(0, jsx_runtime_1.jsx)("stop", { offset: "0%", stopColor: "currentColor", stopOpacity: "1" }), (0, jsx_runtime_1.jsx)("stop", { offset: "100%", stopColor: "currentColor", stopOpacity: "0" })] }) }), dots.map(function (dot, index) { return ((0, jsx_runtime_1.jsx)(react_1.motion.circle, { cx: dot.x, cy: dot.y, r: cr, fill: glow ? "url(#".concat(id, "-gradient)") : "currentColor", className: "text-neutral-400/80", initial: glow ? { opacity: 0.4, scale: 1 } : {}, animate: glow
                    ? {
                        opacity: [0.4, 1, 0.4],
                        scale: [1, 1.5, 1],
                    }
                    : {}, transition: glow
                    ? {
                        duration: dot.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: dot.delay,
                        ease: "easeInOut",
                    }
                    : {} }, "".concat(dot.x, "-").concat(dot.y))); })] })));
}
