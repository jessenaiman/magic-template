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
exports.Magnetic = Magnetic;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
function Magnetic(_a) {
    var ref = _a.ref, children = _a.children, _b = _a.strength, strength = _b === void 0 ? 0.5 : _b, _c = _a.range, range = _c === void 0 ? 120 : _c, _d = _a.springOptions, springOptions = _d === void 0 ? { stiffness: 100, damping: 10, mass: 0.5 } : _d, _e = _a.onlyOnHover, onlyOnHover = _e === void 0 ? false : _e, _f = _a.disableOnTouch, disableOnTouch = _f === void 0 ? true : _f, style = _a.style, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, onMouseMove = _a.onMouseMove, props = __rest(_a, ["ref", "children", "strength", "range", "springOptions", "onlyOnHover", "disableOnTouch", "style", "onMouseEnter", "onMouseLeave", "onMouseMove"]);
    var localRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return localRef.current; });
    var isTouchDevice = React.useMemo(function () {
        if (typeof window === 'undefined')
            return false;
        return window.matchMedia('(pointer:coarse)').matches;
    }, []);
    var _g = React.useState(!onlyOnHover), active = _g[0], setActive = _g[1];
    var rawX = (0, react_1.useMotionValue)(0);
    var rawY = (0, react_1.useMotionValue)(0);
    var x = (0, react_1.useSpring)(rawX, springOptions);
    var y = (0, react_1.useSpring)(rawY, springOptions);
    var compute = React.useCallback(function (e) {
        if (!localRef.current)
            return;
        var _a = localRef.current.getBoundingClientRect(), left = _a.left, top = _a.top, width = _a.width, height = _a.height;
        var cx = left + width / 2;
        var cy = top + height / 2;
        var dx = e.clientX - cx;
        var dy = e.clientY - cy;
        var dist = Math.hypot(dx, dy);
        if ((active || !onlyOnHover) && dist <= range) {
            var factor = (1 - dist / range) * strength;
            rawX.set(dx * factor);
            rawY.set(dy * factor);
        }
        else {
            rawX.set(0);
            rawY.set(0);
        }
    }, [active, onlyOnHover, range, strength, rawX, rawY]);
    React.useEffect(function () {
        if (disableOnTouch && isTouchDevice)
            return;
        var handle = function (e) { return compute(e); };
        window.addEventListener('mousemove', handle);
        return function () { return window.removeEventListener('mousemove', handle); };
    }, [compute, disableOnTouch, isTouchDevice]);
    return ((0, jsx_runtime_1.jsx)(react_1.motion.div, __assign({ ref: localRef, style: __assign(__assign({ display: 'inline-block' }, style), { x: x, y: y }), onMouseEnter: function (e) {
            if (onlyOnHover)
                setActive(true);
            onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter(e);
        }, onMouseLeave: function (e) {
            if (onlyOnHover)
                setActive(false);
            rawX.set(0);
            rawY.set(0);
            onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave(e);
        }, onMouseMove: function (e) {
            if (onlyOnHover)
                compute(e);
            onMouseMove === null || onMouseMove === void 0 ? void 0 : onMouseMove(e);
        } }, props, { children: children })));
}
