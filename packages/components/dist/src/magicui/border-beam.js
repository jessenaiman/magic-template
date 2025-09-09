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
exports.BorderBeam = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("@/lib/utils");
var react_1 = require("motion/react");
var BorderBeam = function (_a) {
    var className = _a.className, _b = _a.size, size = _b === void 0 ? 50 : _b, _c = _a.delay, delay = _c === void 0 ? 0 : _c, _d = _a.duration, duration = _d === void 0 ? 6 : _d, _e = _a.colorFrom, colorFrom = _e === void 0 ? "#ffaa40" : _e, _f = _a.colorTo, colorTo = _f === void 0 ? "#9c40ff" : _f, transition = _a.transition, style = _a.style, _g = _a.reverse, reverse = _g === void 0 ? false : _g, _h = _a.initialOffset, initialOffset = _h === void 0 ? 0 : _h, _j = _a.borderWidth, borderWidth = _j === void 0 ? 1 : _j;
    return ((0, jsx_runtime_1.jsx)("div", { className: "pointer-events-none absolute inset-0 rounded-[inherit] border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] border-(length:--border-beam-width)", style: {
            "--border-beam-width": "".concat(borderWidth, "px"),
        }, children: (0, jsx_runtime_1.jsx)(react_1.motion.div, { className: (0, utils_1.cn)("absolute aspect-square", "bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent", className), style: __assign({ width: size, offsetPath: "rect(0 auto auto 0 round ".concat(size, "px)"), "--color-from": colorFrom, "--color-to": colorTo }, style), initial: { offsetDistance: "".concat(initialOffset, "%") }, animate: {
                offsetDistance: reverse
                    ? ["".concat(100 - initialOffset, "%"), "".concat(-initialOffset, "%")]
                    : ["".concat(initialOffset, "%"), "".concat(100 + initialOffset, "%")],
            }, transition: __assign({ repeat: Infinity, ease: "linear", duration: duration, delay: -delay }, transition) }) }));
};
exports.BorderBeam = BorderBeam;
