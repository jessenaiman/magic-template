"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ClickSpark = function (_a) {
    var _b = _a.sparkColor, sparkColor = _b === void 0 ? '#fff' : _b, _c = _a.sparkSize, sparkSize = _c === void 0 ? 10 : _c, _d = _a.sparkRadius, sparkRadius = _d === void 0 ? 15 : _d, _e = _a.sparkCount, sparkCount = _e === void 0 ? 8 : _e, _f = _a.duration, duration = _f === void 0 ? 400 : _f, _g = _a.easing, easing = _g === void 0 ? 'ease-out' : _g, _h = _a.extraScale, extraScale = _h === void 0 ? 1.0 : _h, children = _a.children;
    var canvasRef = (0, react_1.useRef)(null);
    var sparksRef = (0, react_1.useRef)([]);
    var startTimeRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var canvas = canvasRef.current;
        if (!canvas)
            return;
        var parent = canvas.parentElement;
        if (!parent)
            return;
        var resizeTimeout;
        var resizeCanvas = function () {
            var _a = parent.getBoundingClientRect(), width = _a.width, height = _a.height;
            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
            }
        };
        var handleResize = function () {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resizeCanvas, 100);
        };
        var ro = new ResizeObserver(handleResize);
        ro.observe(parent);
        resizeCanvas();
        return function () {
            ro.disconnect();
            clearTimeout(resizeTimeout);
        };
    }, []);
    var easeFunc = (0, react_1.useCallback)(function (t) {
        switch (easing) {
            case 'linear':
                return t;
            case 'ease-in':
                return t * t;
            case 'ease-in-out':
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            default:
                return t * (2 - t);
        }
    }, [easing]);
    (0, react_1.useEffect)(function () {
        var canvas = canvasRef.current;
        if (!canvas)
            return;
        var ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        var animationId;
        var draw = function (timestamp) {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp;
            }
            ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, canvas.width, canvas.height);
            sparksRef.current = sparksRef.current.filter(function (spark) {
                var elapsed = timestamp - spark.startTime;
                if (elapsed >= duration) {
                    return false;
                }
                var progress = elapsed / duration;
                var eased = easeFunc(progress);
                var distance = eased * sparkRadius * extraScale;
                var lineLength = sparkSize * (1 - eased);
                var x1 = spark.x + distance * Math.cos(spark.angle);
                var y1 = spark.y + distance * Math.sin(spark.angle);
                var x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
                var y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);
                ctx.strokeStyle = sparkColor;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
                return true;
            });
            animationId = requestAnimationFrame(draw);
        };
        animationId = requestAnimationFrame(draw);
        return function () {
            cancelAnimationFrame(animationId);
        };
    }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, easeFunc, extraScale]);
    var handleClick = function (e) {
        var _a;
        var canvas = canvasRef.current;
        if (!canvas)
            return;
        var rect = canvas.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var now = performance.now();
        var newSparks = Array.from({ length: sparkCount }, function (_, i) { return ({
            x: x,
            y: y,
            angle: (2 * Math.PI * i) / sparkCount,
            startTime: now
        }); });
        (_a = sparksRef.current).push.apply(_a, newSparks);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative w-full h-full", onClick: handleClick, children: [(0, jsx_runtime_1.jsx)("canvas", { ref: canvasRef, className: "absolute inset-0 pointer-events-none" }), children] }));
};
exports.default = ClickSpark;
