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
exports.BubbleBackground = BubbleBackground;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
var utils_1 = require("@/src/lib/utils");
function BubbleBackground(_a) {
    var ref = _a.ref, className = _a.className, children = _a.children, _b = _a.interactive, interactive = _b === void 0 ? false : _b, _c = _a.transition, transition = _c === void 0 ? { stiffness: 100, damping: 20 } : _c, _d = _a.colors, colors = _d === void 0 ? {
        first: '18,113,255',
        second: '221,74,255',
        third: '0,220,255',
        fourth: '200,50,50',
        fifth: '180,180,50',
        sixth: '140,100,255',
    } : _d, props = __rest(_a, ["ref", "className", "children", "interactive", "transition", "colors"]);
    var containerRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return containerRef.current; });
    var mouseX = (0, react_1.useMotionValue)(0);
    var mouseY = (0, react_1.useMotionValue)(0);
    var springX = (0, react_1.useSpring)(mouseX, transition);
    var springY = (0, react_1.useSpring)(mouseY, transition);
    React.useEffect(function () {
        if (!interactive)
            return;
        var currentContainer = containerRef.current;
        if (!currentContainer)
            return;
        var handleMouseMove = function (e) {
            var rect = currentContainer.getBoundingClientRect();
            var centerX = rect.left + rect.width / 2;
            var centerY = rect.top + rect.height / 2;
            mouseX.set(e.clientX - centerX);
            mouseY.set(e.clientY - centerY);
        };
        currentContainer === null || currentContainer === void 0 ? void 0 : currentContainer.addEventListener('mousemove', handleMouseMove);
        return function () {
            return currentContainer === null || currentContainer === void 0 ? void 0 : currentContainer.removeEventListener('mousemove', handleMouseMove);
        };
    }, [interactive, mouseX, mouseY]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ ref: containerRef, "data-slot": "bubble-background", className: (0, utils_1.cn)('relative size-full overflow-hidden bg-gradient-to-br from-violet-900 to-blue-900', className) }, props, { children: [(0, jsx_runtime_1.jsx)("style", { children: "\n            :root {\n              --first-color: ".concat(colors.first, ";\n              --second-color: ").concat(colors.second, ";\n              --third-color: ").concat(colors.third, ";\n              --fourth-color: ").concat(colors.fourth, ";\n              --fifth-color: ").concat(colors.fifth, ";\n              --sixth-color: ").concat(colors.sixth, ";\n            }\n          ") }), (0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "absolute top-0 left-0 w-0 h-0", children: (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsxs)("filter", { id: "goo", children: [(0, jsx_runtime_1.jsx)("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "10", result: "blur" }), (0, jsx_runtime_1.jsx)("feColorMatrix", { in: "blur", mode: "matrix", values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8", result: "goo" }), (0, jsx_runtime_1.jsx)("feBlend", { in: "SourceGraphic", in2: "goo" })] }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "absolute inset-0", style: { filter: 'url(#goo) blur(40px)' }, children: [(0, jsx_runtime_1.jsx)(react_1.motion.div, { className: "absolute rounded-full size-[80%] top-[10%] left-[10%] mix-blend-hard-light bg-[radial-gradient(circle_at_center,rgba(var(--first-color),0.8)_0%,rgba(var(--first-color),0)_50%)]", animate: { y: [-50, 50, -50] }, transition: { duration: 30, ease: 'easeInOut', repeat: Infinity } }), (0, jsx_runtime_1.jsx)(react_1.motion.div, { className: "absolute inset-0 flex justify-center items-center origin-[calc(50%-400px)]", animate: { rotate: 360 }, transition: {
                            duration: 20,
                            ease: 'linear',
                            repeat: Infinity,
                            repeatType: 'loop',
                        }, children: (0, jsx_runtime_1.jsx)("div", { className: "rounded-full size-[80%] top-[10%] left-[10%] mix-blend-hard-light bg-[radial-gradient(circle_at_center,rgba(var(--second-color),0.8)_0%,rgba(var(--second-color),0)_50%)]" }) }), (0, jsx_runtime_1.jsx)(react_1.motion.div, { className: "absolute inset-0 flex justify-center items-center origin-[calc(50%+400px)]", animate: { rotate: 360 }, transition: { duration: 40, ease: 'linear', repeat: Infinity }, children: (0, jsx_runtime_1.jsx)("div", { className: "absolute rounded-full size-[80%] bg-[radial-gradient(circle_at_center,rgba(var(--third-color),0.8)_0%,rgba(var(--third-color),0)_50%)] mix-blend-hard-light top-[calc(50%+200px)] left-[calc(50%-500px)]" }) }), (0, jsx_runtime_1.jsx)(react_1.motion.div, { className: "absolute rounded-full size-[80%] top-[10%] left-[10%] mix-blend-hard-light bg-[radial-gradient(circle_at_center,rgba(var(--fourth-color),0.8)_0%,rgba(var(--fourth-color),0)_50%)] opacity-70", animate: { x: [-50, 50, -50] }, transition: { duration: 40, ease: 'easeInOut', repeat: Infinity } }), (0, jsx_runtime_1.jsx)(react_1.motion.div, { className: "absolute inset-0 flex justify-center items-center origin-[calc(50%_-_800px)_calc(50%_+_200px)]", animate: { rotate: 360 }, transition: { duration: 20, ease: 'linear', repeat: Infinity }, children: (0, jsx_runtime_1.jsx)("div", { className: "absolute rounded-full size-[160%] mix-blend-hard-light bg-[radial-gradient(circle_at_center,rgba(var(--fifth-color),0.8)_0%,rgba(var(--fifth-color),0)_50%)] top-[calc(50%-80%)] left-[calc(50%-80%)]" }) }), interactive && ((0, jsx_runtime_1.jsx)(react_1.motion.div, { className: "absolute rounded-full size-full mix-blend-hard-light bg-[radial-gradient(circle_at_center,rgba(var(--sixth-color),0.8)_0%,rgba(var(--sixth-color),0)_50%)] opacity-70", style: {
                            x: springX,
                            y: springY,
                        } }))] }), children] })));
}
