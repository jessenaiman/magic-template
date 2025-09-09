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
exports.StarLayer = StarLayer;
exports.StarsBackground = StarsBackground;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
var utils_1 = require("@/src/lib/utils");
function generateStars(count, starColor) {
    var shadows = [];
    for (var i = 0; i < count; i++) {
        var x = Math.floor(Math.random() * 4000) - 2000;
        var y = Math.floor(Math.random() * 4000) - 2000;
        shadows.push("".concat(x, "px ").concat(y, "px ").concat(starColor));
    }
    return shadows.join(', ');
}
function StarLayer(_a) {
    var _b = _a.count, count = _b === void 0 ? 1000 : _b, _c = _a.size, size = _c === void 0 ? 1 : _c, _d = _a.transition, transition = _d === void 0 ? { repeat: Infinity, duration: 50, ease: 'linear' } : _d, _e = _a.starColor, starColor = _e === void 0 ? '#fff' : _e, className = _a.className, props = __rest(_a, ["count", "size", "transition", "starColor", "className"]);
    var _f = React.useState(''), boxShadow = _f[0], setBoxShadow = _f[1];
    React.useEffect(function () {
        setBoxShadow(generateStars(count, starColor));
    }, [count, starColor]);
    return ((0, jsx_runtime_1.jsxs)(react_1.motion.div, __assign({ "data-slot": "star-layer", animate: { y: [0, -2000] }, transition: transition, className: (0, utils_1.cn)('absolute top-0 left-0 w-full h-[2000px]', className) }, props, { children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute bg-transparent rounded-full", style: {
                    width: "".concat(size, "px"),
                    height: "".concat(size, "px"),
                    boxShadow: boxShadow,
                } }), (0, jsx_runtime_1.jsx)("div", { className: "absolute bg-transparent rounded-full top-[2000px]", style: {
                    width: "".concat(size, "px"),
                    height: "".concat(size, "px"),
                    boxShadow: boxShadow,
                } })] })));
}
function StarsBackground(_a) {
    var children = _a.children, className = _a.className, _b = _a.factor, factor = _b === void 0 ? 0.05 : _b, _c = _a.speed, speed = _c === void 0 ? 50 : _c, _d = _a.transition, transition = _d === void 0 ? { stiffness: 50, damping: 20 } : _d, _e = _a.starColor, starColor = _e === void 0 ? '#fff' : _e, _f = _a.pointerEvents, pointerEvents = _f === void 0 ? true : _f, props = __rest(_a, ["children", "className", "factor", "speed", "transition", "starColor", "pointerEvents"]);
    var offsetX = (0, react_1.useMotionValue)(1);
    var offsetY = (0, react_1.useMotionValue)(1);
    var springX = (0, react_1.useSpring)(offsetX, transition);
    var springY = (0, react_1.useSpring)(offsetY, transition);
    var handleMouseMove = React.useCallback(function (e) {
        var centerX = window.innerWidth / 2;
        var centerY = window.innerHeight / 2;
        var newOffsetX = -(e.clientX - centerX) * factor;
        var newOffsetY = -(e.clientY - centerY) * factor;
        offsetX.set(newOffsetX);
        offsetY.set(newOffsetY);
    }, [offsetX, offsetY, factor]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ "data-slot": "stars-background", className: (0, utils_1.cn)('relative size-full overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)]', className), onMouseMove: handleMouseMove }, props, { children: [(0, jsx_runtime_1.jsxs)(react_1.motion.div, { style: { x: springX, y: springY }, className: (0, utils_1.cn)({ 'pointer-events-none': !pointerEvents }), children: [(0, jsx_runtime_1.jsx)(StarLayer, { count: 1000, size: 1, transition: { repeat: Infinity, duration: speed, ease: 'linear' }, starColor: starColor }), (0, jsx_runtime_1.jsx)(StarLayer, { count: 400, size: 2, transition: {
                            repeat: Infinity,
                            duration: speed * 2,
                            ease: 'linear',
                        }, starColor: starColor }), (0, jsx_runtime_1.jsx)(StarLayer, { count: 200, size: 3, transition: {
                            repeat: Infinity,
                            duration: speed * 3,
                            ease: 'linear',
                        }, starColor: starColor })] }), children] })));
}
