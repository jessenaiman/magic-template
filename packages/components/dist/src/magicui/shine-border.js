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
exports.ShineBorder = ShineBorder;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("@/lib/utils");
/**
 * Shine Border
 *
 * An animated background border effect component with configurable properties.
 */
function ShineBorder(_a) {
    var _b = _a.borderWidth, borderWidth = _b === void 0 ? 1 : _b, _c = _a.duration, duration = _c === void 0 ? 14 : _c, _d = _a.shineColor, shineColor = _d === void 0 ? "#000000" : _d, className = _a.className, style = _a.style, props = __rest(_a, ["borderWidth", "duration", "shineColor", "className", "style"]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ style: __assign({ "--border-width": "".concat(borderWidth, "px"), "--duration": "".concat(duration, "s"), backgroundImage: "radial-gradient(transparent,transparent, ".concat(Array.isArray(shineColor) ? shineColor.join(",") : shineColor, ",transparent,transparent)"), backgroundSize: "300% 300%", mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude", padding: "var(--border-width)" }, style), className: (0, utils_1.cn)("pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position] motion-safe:animate-shine", className) }, props)));
}
