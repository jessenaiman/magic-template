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
exports.WarpBackground = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("@/src/lib/utils");
var react_1 = require("motion/react");
var react_2 = require("react");
var Beam = function (_a) {
    var width = _a.width, x = _a.x, delay = _a.delay, duration = _a.duration;
    var hue = Math.floor(Math.random() * 360);
    var ar = Math.floor(Math.random() * 10) + 1;
    return ((0, jsx_runtime_1.jsx)(react_1.motion.div, { style: {
            "--x": "".concat(x),
            "--width": "".concat(width),
            "--aspect-ratio": "".concat(ar),
            "--background": "linear-gradient(hsl(".concat(hue, " 80% 60%), transparent)"),
        }, className: "absolute left-[var(--x)] top-0 [aspect-ratio:1/var(--aspect-ratio)] [background:var(--background)] [width:var(--width)]", initial: { y: "100cqmax", x: "-50%" }, animate: { y: "-100%", x: "-50%" }, transition: {
            duration: duration,
            delay: delay,
            repeat: Infinity,
            ease: "linear",
        } }));
};
var WarpBackground = function (_a) {
    var children = _a.children, _b = _a.perspective, perspective = _b === void 0 ? 100 : _b, className = _a.className, _c = _a.beamsPerSide, beamsPerSide = _c === void 0 ? 3 : _c, _d = _a.beamSize, beamSize = _d === void 0 ? 5 : _d, _e = _a.beamDelayMax, beamDelayMax = _e === void 0 ? 3 : _e, _f = _a.beamDelayMin, beamDelayMin = _f === void 0 ? 0 : _f, _g = _a.beamDuration, beamDuration = _g === void 0 ? 3 : _g, _h = _a.gridColor, gridColor = _h === void 0 ? "var(--border)" : _h, props = __rest(_a, ["children", "perspective", "className", "beamsPerSide", "beamSize", "beamDelayMax", "beamDelayMin", "beamDuration", "gridColor"]);
    var generateBeams = (0, react_2.useCallback)(function () {
        var beams = [];
        var cellsPerSide = Math.floor(100 / beamSize);
        var step = cellsPerSide / beamsPerSide;
        for (var i = 0; i < beamsPerSide; i++) {
            var x = Math.floor(i * step);
            var delay = Math.random() * (beamDelayMax - beamDelayMin) + beamDelayMin;
            beams.push({ x: x, delay: delay });
        }
        return beams;
    }, [beamsPerSide, beamSize, beamDelayMax, beamDelayMin]);
    var topBeams = (0, react_2.useMemo)(function () { return generateBeams(); }, [generateBeams]);
    var rightBeams = (0, react_2.useMemo)(function () { return generateBeams(); }, [generateBeams]);
    var bottomBeams = (0, react_2.useMemo)(function () { return generateBeams(); }, [generateBeams]);
    var leftBeams = (0, react_2.useMemo)(function () { return generateBeams(); }, [generateBeams]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, utils_1.cn)("relative rounded border p-20", className) }, props, { children: [(0, jsx_runtime_1.jsxs)("div", { style: {
                    "--perspective": "".concat(perspective, "px"),
                    "--grid-color": gridColor,
                    "--beam-size": "".concat(beamSize, "%"),
                }, className: "pointer-events-none absolute left-0 top-0 size-full overflow-hidden [clipPath:inset(0)] [container-type:size] [perspective:var(--perspective)] [transform-style:preserve-3d]", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute z-20 [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [width:100cqi]", children: topBeams.map(function (beam, index) { return ((0, jsx_runtime_1.jsx)(Beam, { width: "".concat(beamSize, "%"), x: "".concat(beam.x * beamSize, "%"), delay: beam.delay, duration: beamDuration }, "top-".concat(index))); }) }), (0, jsx_runtime_1.jsx)("div", { className: "absolute top-full [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [width:100cqi]", children: bottomBeams.map(function (beam, index) { return ((0, jsx_runtime_1.jsx)(Beam, { width: "".concat(beamSize, "%"), x: "".concat(beam.x * beamSize, "%"), delay: beam.delay, duration: beamDuration }, "bottom-".concat(index))); }) }), (0, jsx_runtime_1.jsx)("div", { className: "absolute left-0 top-0 [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:0%_0%] [transform:rotate(90deg)_rotateX(-90deg)] [width:100cqh]", children: leftBeams.map(function (beam, index) { return ((0, jsx_runtime_1.jsx)(Beam, { width: "".concat(beamSize, "%"), x: "".concat(beam.x * beamSize, "%"), delay: beam.delay, duration: beamDuration }, "left-".concat(index))); }) }), (0, jsx_runtime_1.jsx)("div", { className: "absolute right-0 top-0 [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [width:100cqh] [transform-origin:100%_0%] [transform:rotate(-90deg)_rotateX(-90deg)]", children: rightBeams.map(function (beam, index) { return ((0, jsx_runtime_1.jsx)(Beam, { width: "".concat(beamSize, "%"), x: "".concat(beam.x * beamSize, "%"), delay: beam.delay, duration: beamDuration }, "right-".concat(index))); }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "relative", children: children })] })));
};
exports.WarpBackground = WarpBackground;
