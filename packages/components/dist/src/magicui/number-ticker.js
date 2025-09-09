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
exports.NumberTicker = NumberTicker;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("motion/react");
var react_2 = require("react");
var utils_1 = require("@/src/lib/utils");
function NumberTicker(_a) {
    var value = _a.value, _b = _a.startValue, startValue = _b === void 0 ? 0 : _b, _c = _a.direction, direction = _c === void 0 ? "up" : _c, _d = _a.delay, delay = _d === void 0 ? 0 : _d, className = _a.className, _e = _a.decimalPlaces, decimalPlaces = _e === void 0 ? 0 : _e, props = __rest(_a, ["value", "startValue", "direction", "delay", "className", "decimalPlaces"]);
    var ref = (0, react_2.useRef)(null);
    var motionValue = (0, react_1.useMotionValue)(direction === "down" ? value : startValue);
    var springValue = (0, react_1.useSpring)(motionValue, {
        damping: 60,
        stiffness: 100,
    });
    var isInView = (0, react_1.useInView)(ref, { once: true, margin: "0px" });
    (0, react_2.useEffect)(function () {
        if (isInView) {
            var timer_1 = setTimeout(function () {
                motionValue.set(direction === "down" ? startValue : value);
            }, delay * 1000);
            return function () { return clearTimeout(timer_1); };
        }
    }, [motionValue, isInView, delay, value, direction, startValue]);
    (0, react_2.useEffect)(function () {
        return springValue.on("change", function (latest) {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US", {
                    minimumFractionDigits: decimalPlaces,
                    maximumFractionDigits: decimalPlaces,
                }).format(Number(latest.toFixed(decimalPlaces)));
            }
        });
    }, [springValue, decimalPlaces]);
    return ((0, jsx_runtime_1.jsx)("span", __assign({ ref: ref, className: (0, utils_1.cn)("inline-block tabular-nums tracking-wider text-black dark:text-white", className) }, props, { children: startValue })));
}
