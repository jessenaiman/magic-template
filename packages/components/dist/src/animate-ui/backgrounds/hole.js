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
exports.HoleBackground = HoleBackground;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
var utils_1 = require("@/lib/utils");
function HoleBackground(_a) {
    var _b = _a.strokeColor, strokeColor = _b === void 0 ? '#737373' : _b, _c = _a.numberOfLines, numberOfLines = _c === void 0 ? 50 : _c, _d = _a.numberOfDiscs, numberOfDiscs = _d === void 0 ? 50 : _d, _e = _a.particleRGBColor, particleRGBColor = _e === void 0 ? [255, 255, 255] : _e, className = _a.className, children = _a.children, props = __rest(_a, ["strokeColor", "numberOfLines", "numberOfDiscs", "particleRGBColor", "className", "children"]);
    var canvasRef = React.useRef(null);
    var animationFrameIdRef = React.useRef(0);
    var stateRef = React.useRef({
        discs: [],
        lines: [],
        particles: [],
        clip: {},
        startDisc: {},
        endDisc: {},
        rect: { width: 0, height: 0 },
        render: { width: 0, height: 0, dpi: 1 },
        particleArea: {},
        linesCanvas: null,
    });
    var linear = function (p) { return p; };
    var easeInExpo = function (p) { return (p === 0 ? 0 : Math.pow(2, 10 * (p - 1))); };
    var tweenValue = React.useCallback(function (start, end, p, ease) {
        if (ease === void 0) { ease = null; }
        var delta = end - start;
        var easeFn = ease === 'inExpo' ? easeInExpo : linear;
        return start + delta * easeFn(p);
    }, []);
    var tweenDisc = React.useCallback(function (disc) {
        var _a = stateRef.current, startDisc = _a.startDisc, endDisc = _a.endDisc;
        disc.x = tweenValue(startDisc.x, endDisc.x, disc.p);
        disc.y = tweenValue(startDisc.y, endDisc.y, disc.p, 'inExpo');
        disc.w = tweenValue(startDisc.w, endDisc.w, disc.p);
        disc.h = tweenValue(startDisc.h, endDisc.h, disc.p);
    }, [tweenValue]);
    var setSize = React.useCallback(function () {
        var canvas = canvasRef.current;
        if (!canvas)
            return;
        var rect = canvas.getBoundingClientRect();
        stateRef.current.rect = { width: rect.width, height: rect.height };
        stateRef.current.render = {
            width: rect.width,
            height: rect.height,
            dpi: window.devicePixelRatio || 1,
        };
        canvas.width = stateRef.current.render.width * stateRef.current.render.dpi;
        canvas.height =
            stateRef.current.render.height * stateRef.current.render.dpi;
    }, []);
    var setDiscs = React.useCallback(function () {
        var _a = stateRef.current.rect, width = _a.width, height = _a.height;
        stateRef.current.discs = [];
        stateRef.current.startDisc = {
            x: width * 0.5,
            y: height * 0.45,
            w: width * 0.75,
            h: height * 0.7,
        };
        stateRef.current.endDisc = {
            x: width * 0.5,
            y: height * 0.95,
            w: 0,
            h: 0,
        };
        var prevBottom = height;
        stateRef.current.clip = {};
        for (var i = 0; i < numberOfDiscs; i++) {
            var p = i / numberOfDiscs;
            var disc_1 = { p: p, x: 0, y: 0, w: 0, h: 0 };
            tweenDisc(disc_1);
            var bottom = disc_1.y + disc_1.h;
            if (bottom <= prevBottom) {
                stateRef.current.clip = { disc: __assign({}, disc_1), i: i };
            }
            prevBottom = bottom;
            stateRef.current.discs.push(disc_1);
        }
        var clipPath = new Path2D();
        var disc = stateRef.current.clip.disc;
        clipPath.ellipse(disc.x, disc.y, disc.w, disc.h, 0, 0, Math.PI * 2);
        clipPath.rect(disc.x - disc.w, 0, disc.w * 2, disc.y);
        stateRef.current.clip.path = clipPath;
    }, [numberOfDiscs, tweenDisc]);
    var setLines = React.useCallback(function () {
        var _a = stateRef.current.rect, width = _a.width, height = _a.height;
        stateRef.current.lines = [];
        var linesAngle = (Math.PI * 2) / numberOfLines;
        for (var i = 0; i < numberOfLines; i++) {
            stateRef.current.lines.push([]);
        }
        stateRef.current.discs.forEach(function (disc) {
            for (var i = 0; i < numberOfLines; i++) {
                var angle = i * linesAngle;
                var p = {
                    x: disc.x + Math.cos(angle) * disc.w,
                    y: disc.y + Math.sin(angle) * disc.h,
                };
                stateRef.current.lines[i].push(p);
            }
        });
        var offCanvas = document.createElement('canvas');
        offCanvas.width = width;
        offCanvas.height = height;
        var ctx = offCanvas.getContext('2d');
        if (!ctx)
            return;
        stateRef.current.lines.forEach(function (line) {
            ctx.save();
            var lineIsIn = false;
            line.forEach(function (p1, j) {
                if (j === 0)
                    return;
                var p0 = line[j - 1];
                if (!lineIsIn &&
                    (ctx.isPointInPath(stateRef.current.clip.path, p1.x, p1.y) ||
                        ctx.isPointInStroke(stateRef.current.clip.path, p1.x, p1.y))) {
                    lineIsIn = true;
                }
                else if (lineIsIn) {
                    ctx.clip(stateRef.current.clip.path);
                }
                ctx.beginPath();
                ctx.moveTo(p0.x, p0.y);
                ctx.lineTo(p1.x, p1.y);
                ctx.strokeStyle = strokeColor;
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.closePath();
            });
            ctx.restore();
        });
        stateRef.current.linesCanvas = offCanvas;
    }, [numberOfLines, strokeColor]);
    var initParticle = React.useCallback(function (start) {
        if (start === void 0) { start = false; }
        var sx = stateRef.current.particleArea.sx +
            stateRef.current.particleArea.sw * Math.random();
        var ex = stateRef.current.particleArea.ex +
            stateRef.current.particleArea.ew * Math.random();
        var dx = ex - sx;
        var y = start
            ? stateRef.current.particleArea.h * Math.random()
            : stateRef.current.particleArea.h;
        var r = 0.5 + Math.random() * 4;
        var vy = 0.5 + Math.random();
        return {
            x: sx,
            sx: sx,
            dx: dx,
            y: y,
            vy: vy,
            p: 0,
            r: r,
            c: "rgba(".concat(particleRGBColor[0], ", ").concat(particleRGBColor[1], ", ").concat(particleRGBColor[2], ", ").concat(Math.random(), ")"),
        };
    }, [particleRGBColor]);
    var setParticles = React.useCallback(function () {
        var _a = stateRef.current.rect, width = _a.width, height = _a.height;
        stateRef.current.particles = [];
        var disc = stateRef.current.clip.disc;
        stateRef.current.particleArea = {
            sw: disc.w * 0.5,
            ew: disc.w * 2,
            h: height * 0.85,
        };
        stateRef.current.particleArea.sx =
            (width - stateRef.current.particleArea.sw) / 2;
        stateRef.current.particleArea.ex =
            (width - stateRef.current.particleArea.ew) / 2;
        var totalParticles = 100;
        for (var i = 0; i < totalParticles; i++) {
            stateRef.current.particles.push(initParticle(true));
        }
    }, [initParticle]);
    var drawDiscs = React.useCallback(function (ctx) {
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 2;
        var outerDisc = stateRef.current.startDisc;
        ctx.beginPath();
        ctx.ellipse(outerDisc.x, outerDisc.y, outerDisc.w, outerDisc.h, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
        stateRef.current.discs.forEach(function (disc, i) {
            if (i % 5 !== 0)
                return;
            if (disc.w < stateRef.current.clip.disc.w - 5) {
                ctx.save();
                ctx.clip(stateRef.current.clip.path);
            }
            ctx.beginPath();
            ctx.ellipse(disc.x, disc.y, disc.w, disc.h, 0, 0, Math.PI * 2);
            ctx.stroke();
            ctx.closePath();
            if (disc.w < stateRef.current.clip.disc.w - 5) {
                ctx.restore();
            }
        });
    }, [strokeColor]);
    var drawLines = React.useCallback(function (ctx) {
        if (stateRef.current.linesCanvas) {
            ctx.drawImage(stateRef.current.linesCanvas, 0, 0);
        }
    }, []);
    var drawParticles = React.useCallback(function (ctx) {
        ctx.save();
        ctx.clip(stateRef.current.clip.path);
        stateRef.current.particles.forEach(function (particle) {
            ctx.fillStyle = particle.c;
            ctx.beginPath();
            ctx.rect(particle.x, particle.y, particle.r, particle.r);
            ctx.closePath();
            ctx.fill();
        });
        ctx.restore();
    }, []);
    var moveDiscs = React.useCallback(function () {
        stateRef.current.discs.forEach(function (disc) {
            disc.p = (disc.p + 0.001) % 1;
            tweenDisc(disc);
        });
    }, [tweenDisc]);
    var moveParticles = React.useCallback(function () {
        stateRef.current.particles.forEach(function (particle, idx) {
            particle.p = 1 - particle.y / stateRef.current.particleArea.h;
            particle.x = particle.sx + particle.dx * particle.p;
            particle.y -= particle.vy;
            if (particle.y < 0) {
                stateRef.current.particles[idx] = initParticle();
            }
        });
    }, [initParticle]);
    var tick = React.useCallback(function () {
        var canvas = canvasRef.current;
        if (!canvas)
            return;
        var ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.scale(stateRef.current.render.dpi, stateRef.current.render.dpi);
        moveDiscs();
        moveParticles();
        drawDiscs(ctx);
        drawLines(ctx);
        drawParticles(ctx);
        ctx.restore();
        animationFrameIdRef.current = requestAnimationFrame(tick);
    }, [moveDiscs, moveParticles, drawDiscs, drawLines, drawParticles]);
    var init = React.useCallback(function () {
        setSize();
        setDiscs();
        setLines();
        setParticles();
    }, [setSize, setDiscs, setLines, setParticles]);
    React.useEffect(function () {
        var canvas = canvasRef.current;
        if (!canvas)
            return;
        init();
        tick();
        var handleResize = function () {
            setSize();
            setDiscs();
            setLines();
            setParticles();
        };
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameIdRef.current);
        };
    }, [init, tick, setSize, setDiscs, setLines, setParticles]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ "data-slot": "hole-background", className: (0, utils_1.cn)('relative size-full overflow-hidden', 'before:content-[""] before:absolute before:top-1/2 before:left-1/2 before:block before:size-[140%] dark:before:[background:radial-gradient(ellipse_at_50%_55%,transparent_10%,black_50%)] before:[background:radial-gradient(ellipse_at_50%_55%,transparent_10%,white_50%)] before:[transform:translate3d(-50%,-50%,0)]', 'after:content-[""] after:absolute after:z-[5] after:top-1/2 after:left-1/2 after:block after:size-full after:[background:radial-gradient(ellipse_at_50%_75%,#a900ff_20%,transparent_75%)] after:[transform:translate3d(-50%,-50%,0)] after:mix-blend-overlay', className) }, props, { children: [children, (0, jsx_runtime_1.jsx)("canvas", { ref: canvasRef, className: "absolute inset-0 block size-full dark:opacity-20 opacity-10" }), (0, jsx_runtime_1.jsx)(react_1.motion.div, { className: (0, utils_1.cn)('absolute top-[-71.5%] left-1/2 z-[3] w-[30%] h-[140%] rounded-b-full blur-3xl opacity-75 dark:mix-blend-plus-lighter mix-blend-plus-darker [transform:translate3d(-50%,0,0)] [background-position:0%_100%] [background-size:100%_200%]', 'dark:[background:linear-gradient(20deg,#00f8f1,#ffbd1e20_16.5%,#fe848f_33%,#fe848f20_49.5%,#00f8f1_66%,#00f8f160_85.5%,#ffbd1e_100%)_0_100%_/_100%_200%] [background:linear-gradient(20deg,#00f8f1,#ffbd1e40_16.5%,#fe848f_33%,#fe848f40_49.5%,#00f8f1_66%,#00f8f180_85.5%,#ffbd1e_100%)_0_100%_/_100%_200%]'), animate: { backgroundPosition: '0% 300%' }, transition: { duration: 5, ease: 'linear', repeat: Infinity } }), (0, jsx_runtime_1.jsx)("div", { className: "absolute top-0 left-0 z-[7] size-full dark:[background:repeating-linear-gradient(transparent,transparent_1px,white_1px,white_2px)] mix-blend-overlay opacity-50" })] })));
}
