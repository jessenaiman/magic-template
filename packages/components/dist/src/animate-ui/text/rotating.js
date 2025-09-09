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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotatingText = RotatingText;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
var utils_1 = require("@/lib/utils");
function RotatingText(_a) {
    var text = _a.text, _b = _a.y, y = _b === void 0 ? -50 : _b, _c = _a.duration, duration = _c === void 0 ? 2000 : _c, _d = _a.transition, transition = _d === void 0 ? { duration: 0.3, ease: 'easeOut' } : _d, containerClassName = _a.containerClassName, props = __rest(_a, ["text", "y", "duration", "transition", "containerClassName"]);
    var _e = React.useState(0), index = _e[0], setIndex = _e[1];
    React.useEffect(function () {
        if (!Array.isArray(text))
            return;
        var interval = setInterval(function () {
            setIndex(function (prevIndex) { return (prevIndex + 1) % text.length; });
        }, duration);
        return function () { return clearInterval(interval); };
    }, [text, duration]);
    var currentText = Array.isArray(text) ? text[index] : text;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)('overflow-hidden py-1', containerClassName), children: (0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { mode: "wait", children: (0, jsx_runtime_1.jsx)(react_1.motion.div, __assign({ transition: transition, initial: { opacity: 0, y: -y }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: y } }, props, { children: currentText }), currentText) }) }));
}
