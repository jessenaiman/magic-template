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
exports.InteractiveHoverButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var lucide_react_1 = require("lucide-react");
var utils_1 = require("@/lib/utils");
exports.InteractiveHoverButton = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return ((0, jsx_runtime_1.jsxs)("button", __assign({ ref: ref, className: (0, utils_1.cn)("group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold", className) }, props, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]" }), (0, jsx_runtime_1.jsx)("span", { className: "inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0", children: children })] }), (0, jsx_runtime_1.jsxs)("div", { className: "absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100", children: [(0, jsx_runtime_1.jsx)("span", { children: children }), (0, jsx_runtime_1.jsx)(lucide_react_1.ArrowRight, {})] })] })));
});
exports.InteractiveHoverButton.displayName = "InteractiveHoverButton";
