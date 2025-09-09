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
exports.HyperText = HyperText;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("@/src/lib/utils");
var react_1 = require("motion/react");
var react_2 = require("react");
var DEFAULT_CHARACTER_SET = Object.freeze("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
var getRandomInt = function (max) { return Math.floor(Math.random() * max); };
function HyperText(_a) {
    var children = _a.children, className = _a.className, _b = _a.duration, duration = _b === void 0 ? 800 : _b, _c = _a.delay, delay = _c === void 0 ? 0 : _c, _d = _a.as, Component = _d === void 0 ? "div" : _d, _e = _a.startOnView, startOnView = _e === void 0 ? false : _e, _f = _a.animateOnHover, animateOnHover = _f === void 0 ? true : _f, _g = _a.characterSet, characterSet = _g === void 0 ? DEFAULT_CHARACTER_SET : _g, props = __rest(_a, ["children", "className", "duration", "delay", "as", "startOnView", "animateOnHover", "characterSet"]);
    var MotionComponent = react_1.motion.create(Component, {
        forwardMotionProps: true,
    });
    var _h = (0, react_2.useState)(function () {
        return children.split("");
    }), displayText = _h[0], setDisplayText = _h[1];
    var _j = (0, react_2.useState)(false), isAnimating = _j[0], setIsAnimating = _j[1];
    var iterationCount = (0, react_2.useRef)(0);
    var elementRef = (0, react_2.useRef)(null);
    var handleAnimationTrigger = function () {
        if (animateOnHover && !isAnimating) {
            iterationCount.current = 0;
            setIsAnimating(true);
        }
    };
    // Handle animation start based on view or delay
    (0, react_2.useEffect)(function () {
        if (!startOnView) {
            var startTimeout_1 = setTimeout(function () {
                setIsAnimating(true);
            }, delay);
            return function () { return clearTimeout(startTimeout_1); };
        }
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                setTimeout(function () {
                    setIsAnimating(true);
                }, delay);
                observer.disconnect();
            }
        }, { threshold: 0.1, rootMargin: "-30% 0px -30% 0px" });
        if (elementRef.current) {
            observer.observe(elementRef.current);
        }
        return function () { return observer.disconnect(); };
    }, [delay, startOnView]);
    // Handle scramble animation
    (0, react_2.useEffect)(function () {
        if (!isAnimating)
            return;
        var maxIterations = children.length;
        var startTime = performance.now();
        var animationFrameId;
        var animate = function (currentTime) {
            var elapsed = currentTime - startTime;
            var progress = Math.min(elapsed / duration, 1);
            iterationCount.current = progress * maxIterations;
            setDisplayText(function (currentText) {
                return currentText.map(function (letter, index) {
                    return letter === " "
                        ? letter
                        : index <= iterationCount.current
                            ? children[index]
                            : characterSet[getRandomInt(characterSet.length)];
                });
            });
            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            }
            else {
                setIsAnimating(false);
            }
        };
        animationFrameId = requestAnimationFrame(animate);
        return function () { return cancelAnimationFrame(animationFrameId); };
    }, [children, duration, isAnimating, characterSet]);
    return ((0, jsx_runtime_1.jsx)(MotionComponent, __assign({ ref: elementRef, className: (0, utils_1.cn)("overflow-hidden py-2 text-4xl font-bold", className), onMouseEnter: handleAnimationTrigger }, props, { children: (0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { children: displayText.map(function (letter, index) { return ((0, jsx_runtime_1.jsx)(react_1.motion.span, { className: (0, utils_1.cn)("font-mono", letter === " " ? "w-3" : ""), children: letter.toUpperCase() }, index)); }) }) })));
}
