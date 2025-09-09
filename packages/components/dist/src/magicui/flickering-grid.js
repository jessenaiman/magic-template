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
exports.FlickeringGrid = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("../../lib/utils");
var react_1 = require("react");
var FlickeringGrid = function (_a) {
    var _b = _a.squareSize, squareSize = _b === void 0 ? 4 : _b, _c = _a.gridGap, gridGap = _c === void 0 ? 6 : _c, _d = _a.flickerChance, flickerChance = _d === void 0 ? 0.3 : _d, _e = _a.color, color = _e === void 0 ? "rgb(0, 0, 0)" : _e, width = _a.width, height = _a.height, className = _a.className, _f = _a.maxOpacity, maxOpacity = _f === void 0 ? 0.3 : _f, props = __rest(_a, ["squareSize", "gridGap", "flickerChance", "color", "width", "height", "className", "maxOpacity"]);
    var canvasRef = (0, react_1.useRef)(null);
    var containerRef = (0, react_1.useRef)(null);
    var _g = (0, react_1.useState)(false), isInView = _g[0], setIsInView = _g[1];
    var _h = (0, react_1.useState)({ width: 0, height: 0 }), canvasSize = _h[0], setCanvasSize = _h[1];
    var memoizedColor = (0, react_1.useMemo)(function () {
        var toRGBA = function (color) {
            if (typeof window === "undefined") {
                return "rgba(0, 0, 0,";
            }
            var canvas = document.createElement("canvas");
            canvas.width = canvas.height = 1;
            var ctx = canvas.getContext("2d");
            if (!ctx)
                return "rgba(255, 0, 0,";
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, 1, 1);
            var _a = Array.from(ctx.getImageData(0, 0, 1, 1).data), r = _a[0], g = _a[1], b = _a[2];
            return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ",");
        };
        return toRGBA(color);
    }, [color]);
    var setupCanvas = (0, react_1.useCallback)(function (canvas, width, height) {
        var dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = "".concat(width, "px");
        canvas.style.height = "".concat(height, "px");
        var cols = Math.floor(width / (squareSize + gridGap));
        var rows = Math.floor(height / (squareSize + gridGap));
        var squares = new Float32Array(cols * rows);
        for (var i = 0; i < squares.length; i++) {
            squares[i] = Math.random() * maxOpacity;
        }
        return { cols: cols, rows: rows, squares: squares, dpr: dpr };
    }, [squareSize, gridGap, maxOpacity]);
    var updateSquares = (0, react_1.useCallback)(function (squares, deltaTime) {
        for (var i = 0; i < squares.length; i++) {
            if (Math.random() < flickerChance * deltaTime) {
                squares[i] = Math.random() * maxOpacity;
            }
        }
    }, [flickerChance, maxOpacity]);
    var drawGrid = (0, react_1.useCallback)(function (ctx, width, height, cols, rows, squares, dpr) {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "transparent";
        ctx.fillRect(0, 0, width, height);
        for (var i = 0; i < cols; i++) {
            for (var j = 0; j < rows; j++) {
                var opacity = squares[i * rows + j];
                ctx.fillStyle = "".concat(memoizedColor).concat(opacity, ")");
                ctx.fillRect(i * (squareSize + gridGap) * dpr, j * (squareSize + gridGap) * dpr, squareSize * dpr, squareSize * dpr);
            }
        }
    }, [memoizedColor, squareSize, gridGap]);
    (0, react_1.useEffect)(function () {
        var canvas = canvasRef.current;
        var container = containerRef.current;
        if (!canvas || !container)
            return;
        var ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        var animationFrameId;
        var gridParams;
        var updateCanvasSize = function () {
            var newWidth = width || container.clientWidth;
            var newHeight = height || container.clientHeight;
            setCanvasSize({ width: newWidth, height: newHeight });
            gridParams = setupCanvas(canvas, newWidth, newHeight);
        };
        updateCanvasSize();
        var lastTime = 0;
        var animate = function (time) {
            if (!isInView)
                return;
            var deltaTime = (time - lastTime) / 1000;
            lastTime = time;
            updateSquares(gridParams.squares, deltaTime);
            drawGrid(ctx, canvas.width, canvas.height, gridParams.cols, gridParams.rows, gridParams.squares, gridParams.dpr);
            animationFrameId = requestAnimationFrame(animate);
        };
        var resizeObserver = new ResizeObserver(function () {
            updateCanvasSize();
        });
        resizeObserver.observe(container);
        var intersectionObserver = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            setIsInView(entry.isIntersecting);
        }, { threshold: 0 });
        intersectionObserver.observe(canvas);
        if (isInView) {
            animationFrameId = requestAnimationFrame(animate);
        }
        return function () {
            cancelAnimationFrame(animationFrameId);
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
        };
    }, [setupCanvas, updateSquares, drawGrid, width, height, isInView]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: containerRef, className: (0, utils_1.cn)("h-full w-full ".concat(className)) }, props, { children: (0, jsx_runtime_1.jsx)("canvas", { ref: canvasRef, className: "pointer-events-none", style: {
                width: canvasSize.width,
                height: canvasSize.height,
            } }) })));
};
exports.FlickeringGrid = FlickeringGrid;
