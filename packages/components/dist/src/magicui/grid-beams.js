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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridBeams = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("motion/react");
var react_2 = __importStar(require("react"));
var utils_1 = require("@/src/lib/utils");
var createGridMask = function (start, end) {
    var mid = (start + end) / 2;
    return "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) ".concat(start, "%, rgba(0,0,0,0.2) ").concat(mid, "%, rgba(0,0,0,0.6) ").concat(end - 20, "%, rgba(0,0,0,1) ").concat(end, "%)");
};
var generateRayConfig = function (index, total) {
    var progress = index / Math.max(total - 1, 1);
    var leftPercent = 2 + progress * 96;
    var rotation = 28 - progress * 56;
    var variation = (index * 0.618) % 1;
    return {
        left: "".concat(leftPercent, "%"),
        rotation: rotation,
        width: 40 + variation * 25,
        duration: 6 + variation * 5,
        delay: -variation * 10,
        swayDuration: 12 + variation * 9,
        swayDelay: -variation * 10,
        blur: 24 + variation * 9,
        strongSway: index % 2 === 0,
    };
};
var LightRay = react_2.default.memo(function (_a) {
    var left = _a.left, rotation = _a.rotation, width = _a.width, delay = _a.delay, duration = _a.duration, swayDuration = _a.swayDuration, swayDelay = _a.swayDelay, blurAmount = _a.blurAmount, isStrongerSway = _a.isStrongerSway, opacity = _a.opacity, speed = _a.speed, length = _a.length;
    return ((0, jsx_runtime_1.jsx)(react_1.motion.div, { className: "absolute pointer-events-none -top-[5%] left-[var(--ray-left)] w-[var(--ray-width)] h-[var(--ray-height)] origin-top mix-blend-screen bg-[linear-gradient(to_bottom,rgba(200,220,255,var(--ray-opacity)),rgba(200,220,255,0))] blur-[var(--ray-blur)] translate-x-[-50%] rotate-[var(--ray-rotation)]", style: {
            "--ray-left": left,
            "--ray-width": "".concat(width, "px"),
            "--ray-height": length,
            "--ray-opacity": opacity,
            "--ray-blur": "".concat(blurAmount, "px"),
            "--ray-rotation": "".concat(rotation, "deg"),
        }, animate: {
            opacity: [0.3, 0.7, 0.3],
            transform: [
                "translateX(-50%) rotate(".concat(rotation, "deg)"),
                "translateX(-50%) rotate(".concat(rotation + (isStrongerSway ? 1 : 0.5), "deg)"),
                "translateX(-50%) rotate(".concat(rotation, "deg)"),
            ],
        }, transition: {
            opacity: {
                duration: duration / speed,
                delay: delay / speed,
                repeat: Infinity,
                ease: "easeInOut",
            },
            transform: {
                duration: swayDuration / speed,
                delay: swayDelay / speed,
                repeat: Infinity,
                ease: "easeInOut",
            },
        } }));
});
var GridBeams = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.gridSize, gridSize = _b === void 0 ? 40 : _b, _c = _a.gridColor, gridColor = _c === void 0 ? "rgba(200, 220, 255, 0.2)" : _c, _d = _a.rayCount, rayCount = _d === void 0 ? 15 : _d, _e = _a.rayOpacity, rayOpacity = _e === void 0 ? 0.35 : _e, _f = _a.raySpeed, raySpeed = _f === void 0 ? 1 : _f, _g = _a.rayLength, rayLength = _g === void 0 ? "45vh" : _g, _h = _a.gridFadeStart, gridFadeStart = _h === void 0 ? 30 : _h, _j = _a.gridFadeEnd, gridFadeEnd = _j === void 0 ? 90 : _j, _k = _a.backgroundColor, backgroundColor = _k === void 0 ? "#020412" : _k, props = __rest(_a, ["children", "className", "gridSize", "gridColor", "rayCount", "rayOpacity", "raySpeed", "rayLength", "gridFadeStart", "gridFadeEnd", "backgroundColor"]);
    var rayConfigs = (0, react_2.useMemo)(function () {
        return Array.from({ length: rayCount }, function (_, i) {
            return generateRayConfig(i, rayCount);
        });
    }, [rayCount]);
    var gridMask = (0, react_2.useMemo)(function () { return createGridMask(gridFadeStart, gridFadeEnd); }, [gridFadeStart, gridFadeEnd]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, utils_1.cn)("relative overflow-hidden bg-[var(--bg-color)] bg-[radial-gradient(ellipse_at_50%_-20%,#1a2c5a,transparent_70%)]", className), style: {
            "--bg-color": backgroundColor,
        } }, props, { children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 pointer-events-none bg-[linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)] bg-size-[var(--grid-size)_var(--grid-size)] [mask-image:var(--grid-mask)] [webkit-mask-image:var(--grid-mask)]", style: {
                    "--grid-color": gridColor,
                    "--grid-size": "".concat(gridSize, "px"),
                    "--grid-mask": gridMask,
                } }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: rayConfigs.map(function (config, index) { return ((0, jsx_runtime_1.jsx)(LightRay, { left: config.left, rotation: config.rotation, width: config.width, delay: config.delay, duration: config.duration, swayDuration: config.swayDuration, swayDelay: config.swayDelay, blurAmount: config.blur, isStrongerSway: config.strongSway, opacity: rayOpacity, speed: raySpeed, length: rayLength }, index)); }) }), (0, jsx_runtime_1.jsx)("div", { className: "relative z-10", children: children })] })));
};
exports.GridBeams = GridBeams;
