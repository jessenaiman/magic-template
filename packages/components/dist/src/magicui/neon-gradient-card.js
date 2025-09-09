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
exports.NeonGradientCard = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var utils_1 = require("@/lib/utils");
var NeonGradientCard = function (_a) {
    var className = _a.className, children = _a.children, _b = _a.borderSize, borderSize = _b === void 0 ? 2 : _b, _c = _a.borderRadius, borderRadius = _c === void 0 ? 20 : _c, _d = _a.neonColors, neonColors = _d === void 0 ? {
        firstColor: "#ff00aa",
        secondColor: "#00FFF1",
    } : _d, props = __rest(_a, ["className", "children", "borderSize", "borderRadius", "neonColors"]);
    var containerRef = (0, react_1.useRef)(null);
    var _e = (0, react_1.useState)({ width: 0, height: 0 }), dimensions = _e[0], setDimensions = _e[1];
    (0, react_1.useEffect)(function () {
        var updateDimensions = function () {
            if (containerRef.current) {
                var _a = containerRef.current, offsetWidth = _a.offsetWidth, offsetHeight = _a.offsetHeight;
                setDimensions({ width: offsetWidth, height: offsetHeight });
            }
        };
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return function () {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);
    (0, react_1.useEffect)(function () {
        if (containerRef.current) {
            var _a = containerRef.current, offsetWidth = _a.offsetWidth, offsetHeight = _a.offsetHeight;
            setDimensions({ width: offsetWidth, height: offsetHeight });
        }
    }, [children]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: containerRef, style: {
            "--border-size": "".concat(borderSize, "px"),
            "--border-radius": "".concat(borderRadius, "px"),
            "--neon-first-color": neonColors.firstColor,
            "--neon-second-color": neonColors.secondColor,
            "--card-width": "".concat(dimensions.width, "px"),
            "--card-height": "".concat(dimensions.height, "px"),
            "--card-content-radius": "".concat(borderRadius - borderSize, "px"),
            "--pseudo-element-background-image": "linear-gradient(0deg, ".concat(neonColors.firstColor, ", ").concat(neonColors.secondColor, ")"),
            "--pseudo-element-width": "".concat(dimensions.width + borderSize * 2, "px"),
            "--pseudo-element-height": "".concat(dimensions.height + borderSize * 2, "px"),
            "--after-blur": "".concat(dimensions.width / 3, "px"),
        }, className: (0, utils_1.cn)("relative z-10 size-full rounded-[var(--border-radius)]", className) }, props, { children: (0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("relative size-full min-h-[inherit] rounded-[var(--card-content-radius)] bg-gray-100 p-6", "before:absolute before:-left-[var(--border-size)] before:-top-[var(--border-size)] before:-z-10 before:block", "before:h-[var(--pseudo-element-height)] before:w-[var(--pseudo-element-width)] before:rounded-[var(--border-radius)] before:content-['']", "before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-[length:100%_200%]", "before:animate-background-position-spin", "after:absolute after:-left-[var(--border-size)] after:-top-[var(--border-size)] after:-z-10 after:block", "after:h-[var(--pseudo-element-height)] after:w-[var(--pseudo-element-width)] after:rounded-[var(--border-radius)] after:blur-[var(--after-blur)] after:content-['']", "after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-[length:100%_200%] after:opacity-80", "after:animate-background-position-spin", "dark:bg-neutral-900"), children: children }) })));
};
exports.NeonGradientCard = NeonGradientCard;
