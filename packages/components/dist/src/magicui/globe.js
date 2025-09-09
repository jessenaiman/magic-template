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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Globe = Globe;
var jsx_runtime_1 = require("react/jsx-runtime");
var cobe_1 = __importDefault(require("cobe"));
var react_1 = require("motion/react");
var react_2 = require("react");
var utils_1 = require("@/lib/utils");
var MOVEMENT_DAMPING = 1400;
var GLOBE_CONFIG = {
    width: 800,
    height: 800,
    onRender: function () { },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [1, 1, 1],
    markers: [
        { location: [14.5995, 120.9842], size: 0.03 },
        { location: [19.076, 72.8777], size: 0.1 },
        { location: [23.8103, 90.4125], size: 0.05 },
        { location: [30.0444, 31.2357], size: 0.07 },
        { location: [39.9042, 116.4074], size: 0.08 },
        { location: [-23.5505, -46.6333], size: 0.1 },
        { location: [19.4326, -99.1332], size: 0.1 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [34.6937, 135.5022], size: 0.05 },
        { location: [41.0082, 28.9784], size: 0.06 },
    ],
};
function Globe(_a) {
    var className = _a.className, _b = _a.config, config = _b === void 0 ? GLOBE_CONFIG : _b;
    var phi = 0;
    var width = 0;
    var canvasRef = (0, react_2.useRef)(null);
    var pointerInteracting = (0, react_2.useRef)(null);
    var pointerInteractionMovement = (0, react_2.useRef)(0);
    var r = (0, react_1.useMotionValue)(0);
    var rs = (0, react_1.useSpring)(r, {
        mass: 1,
        damping: 30,
        stiffness: 100,
    });
    var updatePointerInteraction = function (value) {
        pointerInteracting.current = value;
        if (canvasRef.current) {
            canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
        }
    };
    var updateMovement = function (clientX) {
        if (pointerInteracting.current !== null) {
            var delta = clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            r.set(r.get() + delta / MOVEMENT_DAMPING);
        }
    };
    (0, react_2.useEffect)(function () {
        var onResize = function () {
            if (canvasRef.current) {
                width = canvasRef.current.offsetWidth;
            }
        };
        window.addEventListener("resize", onResize);
        onResize();
        var globe = (0, cobe_1.default)(canvasRef.current, __assign(__assign({}, config), { width: width * 2, height: width * 2, onRender: function (state) {
                if (!pointerInteracting.current)
                    phi += 0.005;
                state.phi = phi + rs.get();
                state.width = width * 2;
                state.height = width * 2;
            } }));
        setTimeout(function () { return (canvasRef.current.style.opacity = "1"); }, 0);
        return function () {
            globe.destroy();
            window.removeEventListener("resize", onResize);
        };
    }, [rs, config]);
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]", className), children: (0, jsx_runtime_1.jsx)("canvas", { className: (0, utils_1.cn)("size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"), ref: canvasRef, onPointerDown: function (e) {
                pointerInteracting.current = e.clientX;
                updatePointerInteraction(e.clientX);
            }, onPointerUp: function () { return updatePointerInteraction(null); }, onPointerOut: function () { return updatePointerInteraction(null); }, onMouseMove: function (e) { return updateMovement(e.clientX); }, onTouchMove: function (e) {
                return e.touches[0] && updateMovement(e.touches[0].clientX);
            } }) }));
}
