"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PulsatingButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var utils_1 = require("@/lib/utils");
exports.PulsatingButton = react_1.default.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, _b = _a.pulseColor, pulseColor = _b === void 0 ? "#808080" : _b, _c = _a.duration, duration = _c === void 0 ? "1.5s" : _c, props = __rest(_a, ["className", "children", "pulseColor", "duration"]);
    return ((0, jsx_runtime_1.jsxs)("button", __assign({ ref: ref, className: (0, utils_1.cn)("relative flex cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-2 text-center text-primary-foreground", className), style: {
            "--pulse-color": pulseColor,
            "--duration": duration,
        } }, props, { children: [(0, jsx_runtime_1.jsx)("div", { className: "relative z-10", children: children }), (0, jsx_runtime_1.jsx)("div", { className: "absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-lg bg-inherit" })] })));
});
exports.PulsatingButton.displayName = "PulsatingButton";
