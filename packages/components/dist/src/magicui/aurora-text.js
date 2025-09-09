"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuroraText = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
exports.AuroraText = (0, react_1.memo)(function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.colors, colors = _c === void 0 ? ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"] : _c, _d = _a.speed, speed = _d === void 0 ? 1 : _d;
    var gradientStyle = {
        backgroundImage: "linear-gradient(135deg, ".concat(colors.join(", "), ", ").concat(colors[0], ")"),
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animationDuration: "".concat(10 / speed, "s"),
    };
    return ((0, jsx_runtime_1.jsxs)("span", { className: "relative inline-block ".concat(className), children: [(0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: children }), (0, jsx_runtime_1.jsx)("span", { className: "relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent", style: gradientStyle, "aria-hidden": "true", children: children })] }));
});
exports.AuroraText.displayName = "AuroraText";
