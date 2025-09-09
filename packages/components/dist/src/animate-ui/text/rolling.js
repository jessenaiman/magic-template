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
exports.RollingText = RollingText;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
var ENTRY_ANIMATION = {
    initial: { rotateX: 0 },
    animate: { rotateX: 90 },
};
var EXIT_ANIMATION = {
    initial: { rotateX: 90 },
    animate: { rotateX: 0 },
};
var formatCharacter = function (char) { return (char === ' ' ? '\u00A0' : char); };
function RollingText(_a) {
    var ref = _a.ref, _b = _a.transition, transition = _b === void 0 ? { duration: 0.5, delay: 0.1, ease: 'easeOut' } : _b, _c = _a.inView, inView = _c === void 0 ? false : _c, _d = _a.inViewMargin, inViewMargin = _d === void 0 ? '0px' : _d, _e = _a.inViewOnce, inViewOnce = _e === void 0 ? true : _e, text = _a.text, props = __rest(_a, ["ref", "transition", "inView", "inViewMargin", "inViewOnce", "text"]);
    var localRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return localRef.current; });
    var inViewResult = (0, react_1.useInView)(localRef, {
        once: inViewOnce,
        margin: inViewMargin,
    });
    var isInView = !inView || inViewResult;
    var characters = React.useMemo(function () { return text.split(''); }, [text]);
    return ((0, jsx_runtime_1.jsxs)("span", __assign({ "data-slot": "rolling-text" }, props, { ref: ref, children: [characters.map(function (char, idx) {
                var _a, _b;
                return ((0, jsx_runtime_1.jsxs)("span", { className: "relative inline-block perspective-[9999999px] transform-3d w-auto", "aria-hidden": "true", children: [(0, jsx_runtime_1.jsx)(react_1.motion.span, { className: "absolute inline-block backface-hidden origin-[50%_25%]", initial: ENTRY_ANIMATION.initial, animate: isInView ? ENTRY_ANIMATION.animate : undefined, transition: __assign(__assign({}, transition), { delay: idx * ((_a = transition === null || transition === void 0 ? void 0 : transition.delay) !== null && _a !== void 0 ? _a : 0) }), children: formatCharacter(char) }), (0, jsx_runtime_1.jsx)(react_1.motion.span, { className: "absolute inline-block backface-hidden origin-[50%_100%]", initial: EXIT_ANIMATION.initial, animate: isInView ? EXIT_ANIMATION.animate : undefined, transition: __assign(__assign({}, transition), { delay: idx * ((_b = transition === null || transition === void 0 ? void 0 : transition.delay) !== null && _b !== void 0 ? _b : 0) + 0.3 }), children: formatCharacter(char) }), (0, jsx_runtime_1.jsx)("span", { className: "invisible", children: formatCharacter(char) })] }, idx));
            }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: text })] })));
}
