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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RippleButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("@/lib/utils");
var react_1 = __importStar(require("react"));
exports.RippleButton = react_1.default.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, _b = _a.rippleColor, rippleColor = _b === void 0 ? "#ffffff" : _b, _c = _a.duration, duration = _c === void 0 ? "600ms" : _c, onClick = _a.onClick, props = __rest(_a, ["className", "children", "rippleColor", "duration", "onClick"]);
    var _d = (0, react_1.useState)([]), buttonRipples = _d[0], setButtonRipples = _d[1];
    var handleClick = function (event) {
        createRipple(event);
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
    };
    var createRipple = function (event) {
        var button = event.currentTarget;
        var rect = button.getBoundingClientRect();
        var size = Math.max(rect.width, rect.height);
        var x = event.clientX - rect.left - size / 2;
        var y = event.clientY - rect.top - size / 2;
        var newRipple = { x: x, y: y, size: size, key: Date.now() };
        setButtonRipples(function (prevRipples) { return __spreadArray(__spreadArray([], prevRipples, true), [newRipple], false); });
    };
    (0, react_1.useEffect)(function () {
        if (buttonRipples.length > 0) {
            var lastRipple_1 = buttonRipples[buttonRipples.length - 1];
            var timeout_1 = setTimeout(function () {
                setButtonRipples(function (prevRipples) {
                    return prevRipples.filter(function (ripple) { return ripple.key !== lastRipple_1.key; });
                });
            }, parseInt(duration));
            return function () { return clearTimeout(timeout_1); };
        }
    }, [buttonRipples, duration]);
    return ((0, jsx_runtime_1.jsxs)("button", __assign({ className: (0, utils_1.cn)("relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 bg-background px-4 py-2 text-center text-primary", className), onClick: handleClick, ref: ref }, props, { children: [(0, jsx_runtime_1.jsx)("div", { className: "relative z-10", children: children }), (0, jsx_runtime_1.jsx)("span", { className: "pointer-events-none absolute inset-0", children: buttonRipples.map(function (ripple) { return ((0, jsx_runtime_1.jsx)("span", { className: "absolute animate-rippling rounded-full bg-background opacity-30", style: {
                        width: "".concat(ripple.size, "px"),
                        height: "".concat(ripple.size, "px"),
                        top: "".concat(ripple.y, "px"),
                        left: "".concat(ripple.x, "px"),
                        backgroundColor: rippleColor,
                        transform: "scale(0)",
                    } }, ripple.key)); }) })] })));
});
exports.RippleButton.displayName = "RippleButton";
