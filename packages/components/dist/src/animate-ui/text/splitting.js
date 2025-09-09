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
exports.SplittingText = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
var defaultItemVariant = {
    hidden: { x: 150, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
};
var SplittingText = function (_a) {
    var _b;
    var ref = _a.ref, text = _a.text, _c = _a.type, type = _c === void 0 ? 'chars' : _c, _d = _a.motionVariants, motionVariants = _d === void 0 ? {} : _d, _e = _a.inView, inView = _e === void 0 ? false : _e, _f = _a.inViewMargin, inViewMargin = _f === void 0 ? '0px' : _f, _g = _a.inViewOnce, inViewOnce = _g === void 0 ? true : _g, _h = _a.delay, delay = _h === void 0 ? 0 : _h, props = __rest(_a, ["ref", "text", "type", "motionVariants", "inView", "inViewMargin", "inViewOnce", "delay"]);
    var items = React.useMemo(function () {
        if (Array.isArray(text)) {
            return text.flatMap(function (line, i) { return [
                (0, jsx_runtime_1.jsx)(React.Fragment, { children: line }, "line-".concat(i)),
                i < text.length - 1 ? (0, jsx_runtime_1.jsx)("br", {}, "br-".concat(i)) : null,
            ]; });
        }
        if (type === 'words') {
            var tokens = text.match(/\S+\s*/g) || [];
            return tokens.map(function (token, i) { return ((0, jsx_runtime_1.jsx)(React.Fragment, { children: token }, i)); });
        }
        return text
            .split('')
            .map(function (char, i) { return (0, jsx_runtime_1.jsx)(React.Fragment, { children: char }, i); });
    }, [text, type]);
    var containerVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: delay / 1000,
                staggerChildren: (_b = motionVariants.stagger) !== null && _b !== void 0 ? _b : (type === 'chars' ? 0.05 : type === 'words' ? 0.2 : 0.3),
            },
        },
    };
    var itemVariants = {
        hidden: __assign(__assign({}, defaultItemVariant.hidden), (motionVariants.initial || {})),
        visible: __assign(__assign(__assign({}, defaultItemVariant.visible), (motionVariants.animate || {})), { transition: __assign(__assign({}, (defaultItemVariant.visible.transition ||
                {})), (motionVariants.transition || {})) }),
    };
    var localRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return localRef.current; });
    var inViewResult = (0, react_1.useInView)(localRef, {
        once: inViewOnce,
        margin: inViewMargin,
    });
    var isInView = !inView || inViewResult;
    return ((0, jsx_runtime_1.jsx)(react_1.motion.span, __assign({ ref: localRef, initial: "hidden", animate: isInView ? 'visible' : 'hidden', variants: containerVariants }, props, { children: items.map(function (item, index) {
            return item && ((0, jsx_runtime_1.jsxs)(React.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_1.motion.span, { variants: itemVariants, style: {
                            display: 'inline-block',
                            whiteSpace: type === 'chars'
                                ? 'pre'
                                : Array.isArray(text)
                                    ? 'normal'
                                    : 'normal',
                        }, children: item }, index), type === 'words' && ' '] }, index));
        }) })));
};
exports.SplittingText = SplittingText;
