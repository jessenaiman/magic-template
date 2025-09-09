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
exports.RippleButton = RippleButton;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var utils_1 = require("@/src/lib/utils");
var button_1 = require("@/packages/ui/src/ui/button");
function RippleButton(_a) {
    var className = _a.className, children = _a.children, _b = _a.rippleColor, rippleColor = _b === void 0 ? "rgba(255, 255, 255, 0.2)" : _b, props = __rest(_a, ["className", "children", "rippleColor"]);
    var _c = React.useState([]), ripples = _c[0], setRipples = _c[1];
    var createRipple = function (event) {
        var button = event.currentTarget;
        var rect = button.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        var ripple = { x: x, y: y, id: Date.now() };
        setRipples(function (prevRipples) { return __spreadArray(__spreadArray([], prevRipples, true), [ripple], false); });
        setTimeout(function () {
            setRipples(function (prevRipples) {
                return prevRipples.filter(function (r) { return r.id !== ripple.id; });
            });
        }, 1000);
    };
    return ((0, jsx_runtime_1.jsxs)(button_1.Button, __assign({ className: (0, utils_1.cn)("relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary px-6 py-2 text-primary-foreground shadow-lg transition-all hover:shadow-xl", className), onClick: createRipple }, props, { children: [(0, jsx_runtime_1.jsx)("span", { className: "relative z-10", children: children }), ripples.map(function (ripple) { return ((0, jsx_runtime_1.jsx)("div", { className: "absolute animate-ripple rounded-full", style: {
                    left: ripple.x,
                    top: ripple.y,
                    backgroundColor: rippleColor,
                    transform: "translate(-50%, -50%)",
                    width: "200%",
                    paddingBottom: "200%",
                } }, ripple.id)); })] })));
}
