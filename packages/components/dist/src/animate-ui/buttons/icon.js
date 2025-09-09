"use strict";
'use client';
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
exports.sizes = void 0;
exports.IconButton = IconButton;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
var utils_1 = require("@/src/lib/utils");
var sizes = {
    default: 'size-8 [&_svg]:size-5',
    sm: 'size-6 [&_svg]:size-4',
    md: 'size-10 [&_svg]:size-6',
    lg: 'size-12 [&_svg]:size-7',
};
exports.sizes = sizes;
function IconButton(_a) {
    var Icon = _a.icon, className = _a.className, _b = _a.active, active = _b === void 0 ? false : _b, _c = _a.animate, animate = _c === void 0 ? true : _c, _d = _a.size, size = _d === void 0 ? 'default' : _d, _e = _a.color, color = _e === void 0 ? [59, 130, 246] : _e, _f = _a.transition, transition = _f === void 0 ? { type: 'spring', stiffness: 300, damping: 15 } : _f, props = __rest(_a, ["icon", "className", "active", "animate", "size", "color", "transition"]);
    return ((0, jsx_runtime_1.jsxs)(react_1.motion.button, __assign({ "data-slot": "icon-button", className: (0, utils_1.cn)("group/icon-button cursor-pointer relative inline-flex size-10 shrink-0 rounded-full hover:bg-[var(--icon-button-color)]/10 active:bg-[var(--icon-button-color)]/20 text-[var(--icon-button-color)]", sizes[size], className), whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, style: {
            '--icon-button-color': "rgb(".concat(color[0], ", ").concat(color[1], ", ").concat(color[2], ")"),
        } }, props, { children: [(0, jsx_runtime_1.jsx)(react_1.motion.div, { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stroke-muted-foreground group-hover/icon-button:stroke-[var(--icon-button-color)]", "aria-hidden": "true", children: React.createElement(Icon, {
                    className: active ? 'fill-[var(--icon-button-color)]' : 'fill-transparent'
                }) }), (0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { mode: "wait", children: active && ((0, jsx_runtime_1.jsx)(react_1.motion.div, { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[var(--icon-button-color)] fill-[var(--icon-button-color)]", "aria-hidden": "true", initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0 }, transition: transition, children: React.createElement(Icon) })) }), (0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { children: animate && active && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_1.motion.div, { className: "absolute inset-0 z-10 rounded-full ", style: {
                                background: "radial-gradient(circle, rgba(".concat(color[0], ", ").concat(color[1], ", ").concat(color[2], ", 0.4) 0%, rgba(").concat(color[0], ", ").concat(color[1], ", ").concat(color[2], ", 0) 70%)"),
                            }, initial: { scale: 1.2, opacity: 0 }, animate: { scale: [1.2, 1.8, 1.2], opacity: [0, 0.3, 0] }, transition: { duration: 1.2, ease: 'easeInOut' } }), (0, jsx_runtime_1.jsx)(react_1.motion.div, { className: "absolute inset-0 z-10 rounded-full", style: {
                                boxShadow: "0 0 10px 2px rgba(".concat(color[0], ", ").concat(color[1], ", ").concat(color[2], ", 0.6)"),
                            }, initial: { scale: 1, opacity: 0 }, animate: { scale: [1, 1.5], opacity: [0.8, 0] }, transition: { duration: 0.8, ease: 'easeOut' } }), __spreadArray([], Array(6), true).map(function (_, i) { return ((0, jsx_runtime_1.jsx)(react_1.motion.div, { className: "absolute w-1 h-1 rounded-full bg-[var(--icon-button-color)]", initial: { x: '50%', y: '50%', scale: 0, opacity: 0 }, animate: {
                                x: "calc(50% + ".concat(Math.cos((i * Math.PI) / 3) * 30, "px)"),
                                y: "calc(50% + ".concat(Math.sin((i * Math.PI) / 3) * 30, "px)"),
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                            }, transition: { duration: 0.8, delay: i * 0.05, ease: 'easeOut' } }, i)); })] })) })] })));
}
