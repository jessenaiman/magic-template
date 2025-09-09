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
exports.MotionEffect = MotionEffect;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
function MotionEffect(_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var ref = _a.ref, children = _a.children, className = _a.className, _j = _a.transition, transition = _j === void 0 ? { type: 'spring', stiffness: 200, damping: 20 } : _j, _k = _a.delay, delay = _k === void 0 ? 0 : _k, _l = _a.inView, inView = _l === void 0 ? false : _l, _m = _a.inViewMargin, inViewMargin = _m === void 0 ? '0px' : _m, _o = _a.inViewOnce, inViewOnce = _o === void 0 ? true : _o, _p = _a.blur, blur = _p === void 0 ? false : _p, _q = _a.slide, slide = _q === void 0 ? false : _q, _r = _a.fade, fade = _r === void 0 ? false : _r, _s = _a.zoom, zoom = _s === void 0 ? false : _s, props = __rest(_a, ["ref", "children", "className", "transition", "delay", "inView", "inViewMargin", "inViewOnce", "blur", "slide", "fade", "zoom"]);
    var localRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return localRef.current; });
    var inViewResult = (0, react_1.useInView)(localRef, {
        once: inViewOnce,
        margin: inViewMargin,
    });
    var isInView = !inView || inViewResult;
    var hiddenVariant = {};
    var visibleVariant = {};
    if (slide) {
        var offset = typeof slide === 'boolean' ? 100 : ((_b = slide.offset) !== null && _b !== void 0 ? _b : 100);
        var direction = typeof slide === 'boolean' ? 'left' : ((_c = slide.direction) !== null && _c !== void 0 ? _c : 'left');
        var axis = direction === 'up' || direction === 'down' ? 'y' : 'x';
        hiddenVariant[axis] =
            direction === 'left' || direction === 'up' ? -offset : offset;
        visibleVariant[axis] = 0;
    }
    if (fade) {
        hiddenVariant.opacity =
            typeof fade === 'boolean' ? 0 : ((_d = fade.initialOpacity) !== null && _d !== void 0 ? _d : 0);
        visibleVariant.opacity =
            typeof fade === 'boolean' ? 1 : ((_e = fade.opacity) !== null && _e !== void 0 ? _e : 1);
    }
    if (zoom) {
        hiddenVariant.scale =
            typeof zoom === 'boolean' ? 0.5 : ((_f = zoom.initialScale) !== null && _f !== void 0 ? _f : 0.5);
        visibleVariant.scale = typeof zoom === 'boolean' ? 1 : ((_g = zoom.scale) !== null && _g !== void 0 ? _g : 1);
    }
    if (blur) {
        hiddenVariant.filter =
            typeof blur === 'boolean' ? 'blur(10px)' : "blur(".concat(blur, ")");
        visibleVariant.filter = 'blur(0px)';
    }
    return ((0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { children: (0, jsx_runtime_1.jsx)(react_1.motion.div, __assign({ ref: localRef, "data-slot": "motion-effect", initial: "hidden", animate: isInView ? 'visible' : 'hidden', exit: "hidden", variants: {
                hidden: hiddenVariant,
                visible: visibleVariant,
            }, transition: __assign(__assign({}, transition), { delay: ((_h = transition === null || transition === void 0 ? void 0 : transition.delay) !== null && _h !== void 0 ? _h : 0) + delay }), className: className }, props, { children: children })) }));
}
