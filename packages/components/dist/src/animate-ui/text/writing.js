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
exports.WritingText = WritingText;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
function WritingText(_a) {
    var ref = _a.ref, _b = _a.inView, inView = _b === void 0 ? false : _b, _c = _a.inViewMargin, inViewMargin = _c === void 0 ? '0px' : _c, _d = _a.inViewOnce, inViewOnce = _d === void 0 ? true : _d, _e = _a.spacing, spacing = _e === void 0 ? 5 : _e, text = _a.text, _f = _a.transition, transition = _f === void 0 ? { type: 'spring', bounce: 0, duration: 2, delay: 0.5 } : _f, props = __rest(_a, ["ref", "inView", "inViewMargin", "inViewOnce", "spacing", "text", "transition"]);
    var localRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return localRef.current; });
    var inViewResult = (0, react_1.useInView)(localRef, {
        once: inViewOnce,
        margin: inViewMargin,
    });
    var isInView = !inView || inViewResult;
    var words = React.useMemo(function () { return text.split(' '); }, [text]);
    return ((0, jsx_runtime_1.jsx)("span", __assign({ ref: localRef, "data-slot": "writing-text" }, props, { children: words.map(function (word, index) {
            var _a;
            return ((0, jsx_runtime_1.jsxs)(react_1.motion.span, { className: "inline-block will-change-transform will-change-opacity", style: { marginRight: spacing }, initial: { opacity: 0, y: 10 }, animate: isInView ? { opacity: 1, y: 0 } : undefined, transition: __assign(__assign({}, transition), { delay: index * ((_a = transition === null || transition === void 0 ? void 0 : transition.delay) !== null && _a !== void 0 ? _a : 0) }), children: [word, ' '] }, index));
        }) })));
}
