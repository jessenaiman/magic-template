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
exports.Particles = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("@/lib/utils");
var react_1 = require("react");
function MousePosition() {
    var _a = (0, react_1.useState)({
        x: 0,
        y: 0,
    }), mousePosition = _a[0], setMousePosition = _a[1];
    (0, react_1.useEffect)(function () {
        var handleMouseMove = function (event) {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return function () {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return mousePosition;
}
function hexToRgb(hex) {
    hex = hex.replace("#", "");
    if (hex.length === 3) {
        hex = hex
            .split("")
            .map(function (char) { return char + char; })
            .join("");
    }
    var hexInt = parseInt(hex, 16);
    var red = (hexInt >> 16) & 255;
    var green = (hexInt >> 8) & 255;
    var blue = hexInt & 255;
    return [red, green, blue];
}
var Particles = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.quantity, quantity = _c === void 0 ? 100 : _c, _d = _a.staticity, staticity = _d === void 0 ? 50 : _d, _e = _a.ease, ease = _e === void 0 ? 50 : _e, _f = _a.size, size = _f === void 0 ? 0.4 : _f, _g = _a.refresh, refresh = _g === void 0 ? false : _g, _h = _a.color, color = _h === void 0 ? "#ffffff" : _h, _j = _a.vx, vx = _j === void 0 ? 0 : _j, _k = _a.vy, vy = _k === void 0 ? 0 : _k, props = __rest(_a, ["className", "quantity", "staticity", "ease", "size", "refresh", "color", "vx", "vy"]);
    var canvasRef = (0, react_1.useRef)(null);
    var canvasContainerRef = (0, react_1.useRef)(null);
    var context = (0, react_1.useRef)(null);
    var circles = (0, react_1.useRef)([]);
    var mousePosition = MousePosition();
    var mouse = (0, react_1.useRef)({ x: 0, y: 0 });
    var canvasSize = (0, react_1.useRef)({ w: 0, h: 0 });
    var dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
    var rafID = (0, react_1.useRef)(null);
    var resizeTimeout = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (canvasRef.current) {
            context.current = canvasRef.current.getContext("2d");
        }
        initCanvas();
        animate();
        var handleResize = function () {
            if (resizeTimeout.current) {
                clearTimeout(resizeTimeout.current);
            }
            resizeTimeout.current = setTimeout(function () {
                initCanvas();
            }, 200);
        };
        window.addEventListener("resize", handleResize);
        return function () {
            if (rafID.current != null) {
                window.cancelAnimationFrame(rafID.current);
            }
            if (resizeTimeout.current) {
                clearTimeout(resizeTimeout.current);
            }
            window.removeEventListener("resize", handleResize);
        };
    }, [color]);
    (0, react_1.useEffect)(function () {
        onMouseMove();
    }, [mousePosition.x, mousePosition.y]);
    (0, react_1.useEffect)(function () {
        initCanvas();
    }, [refresh]);
    var initCanvas = function () {
        resizeCanvas();
        drawParticles();
    };
    var onMouseMove = function () {
        if (canvasRef.current) {
            var rect = canvasRef.current.getBoundingClientRect();
            var _a = canvasSize.current, w = _a.w, h = _a.h;
            var x = mousePosition.x - rect.left - w / 2;
            var y = mousePosition.y - rect.top - h / 2;
            var inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
            if (inside) {
                mouse.current.x = x;
                mouse.current.y = y;
            }
        }
    };
    var resizeCanvas = function () {
        if (canvasContainerRef.current && canvasRef.current && context.current) {
            canvasSize.current.w = canvasContainerRef.current.offsetWidth;
            canvasSize.current.h = canvasContainerRef.current.offsetHeight;
            canvasRef.current.width = canvasSize.current.w * dpr;
            canvasRef.current.height = canvasSize.current.h * dpr;
            canvasRef.current.style.width = "".concat(canvasSize.current.w, "px");
            canvasRef.current.style.height = "".concat(canvasSize.current.h, "px");
            context.current.scale(dpr, dpr);
            // Clear existing particles and create new ones with exact quantity
            circles.current = [];
            for (var i = 0; i < quantity; i++) {
                var circle = circleParams();
                drawCircle(circle);
            }
        }
    };
    var circleParams = function () {
        var x = Math.floor(Math.random() * canvasSize.current.w);
        var y = Math.floor(Math.random() * canvasSize.current.h);
        var translateX = 0;
        var translateY = 0;
        var pSize = Math.floor(Math.random() * 2) + size;
        var alpha = 0;
        var targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
        var dx = (Math.random() - 0.5) * 0.1;
        var dy = (Math.random() - 0.5) * 0.1;
        var magnetism = 0.1 + Math.random() * 4;
        return {
            x: x,
            y: y,
            translateX: translateX,
            translateY: translateY,
            size: pSize,
            alpha: alpha,
            targetAlpha: targetAlpha,
            dx: dx,
            dy: dy,
            magnetism: magnetism,
        };
    };
    var rgb = hexToRgb(color);
    var drawCircle = function (circle, update) {
        if (update === void 0) { update = false; }
        if (context.current) {
            var x = circle.x, y = circle.y, translateX = circle.translateX, translateY = circle.translateY, size_1 = circle.size, alpha = circle.alpha;
            context.current.translate(translateX, translateY);
            context.current.beginPath();
            context.current.arc(x, y, size_1, 0, 2 * Math.PI);
            context.current.fillStyle = "rgba(".concat(rgb.join(", "), ", ").concat(alpha, ")");
            context.current.fill();
            context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
            if (!update) {
                circles.current.push(circle);
            }
        }
    };
    var clearContext = function () {
        if (context.current) {
            context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
        }
    };
    var drawParticles = function () {
        clearContext();
        var particleCount = quantity;
        for (var i = 0; i < particleCount; i++) {
            var circle = circleParams();
            drawCircle(circle);
        }
    };
    var remapValue = function (value, start1, end1, start2, end2) {
        var remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
        return remapped > 0 ? remapped : 0;
    };
    var animate = function () {
        clearContext();
        circles.current.forEach(function (circle, i) {
            // Handle the alpha value
            var edge = [
                circle.x + circle.translateX - circle.size, // distance from left edge
                canvasSize.current.w - circle.x - circle.translateX - circle.size, // distance from right edge
                circle.y + circle.translateY - circle.size, // distance from top edge
                canvasSize.current.h - circle.y - circle.translateY - circle.size, // distance from bottom edge
            ];
            var closestEdge = edge.reduce(function (a, b) { return Math.min(a, b); });
            var remapClosestEdge = parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2));
            if (remapClosestEdge > 1) {
                circle.alpha += 0.02;
                if (circle.alpha > circle.targetAlpha) {
                    circle.alpha = circle.targetAlpha;
                }
            }
            else {
                circle.alpha = circle.targetAlpha * remapClosestEdge;
            }
            circle.x += circle.dx + vx;
            circle.y += circle.dy + vy;
            circle.translateX +=
                (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) /
                    ease;
            circle.translateY +=
                (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) /
                    ease;
            drawCircle(circle, true);
            // circle gets out of the canvas
            if (circle.x < -circle.size ||
                circle.x > canvasSize.current.w + circle.size ||
                circle.y < -circle.size ||
                circle.y > canvasSize.current.h + circle.size) {
                // remove the circle from the array
                circles.current.splice(i, 1);
                // create a new circle
                var newCircle = circleParams();
                drawCircle(newCircle);
            }
        });
        rafID.current = window.requestAnimationFrame(animate);
    };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, utils_1.cn)("pointer-events-none", className), ref: canvasContainerRef, "aria-hidden": "true" }, props, { children: (0, jsx_runtime_1.jsx)("canvas", { ref: canvasRef, className: "size-full" }) })));
};
exports.Particles = Particles;
