"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("motion/react");
var react_2 = require("react");
var buildKeyframes = function (from, steps) {
    var keys = new Set(__spreadArray(__spreadArray([], Object.keys(from), true), steps.flatMap(function (s) { return Object.keys(s); }), true));
    var keyframes = {};
    keys.forEach(function (k) {
        keyframes[k] = __spreadArray([from[k]], steps.map(function (s) { return s[k]; }), true);
    });
    return keyframes;
};
var BlurText = function (_a) {
    var _b = _a.text, text = _b === void 0 ? '' : _b, _c = _a.delay, delay = _c === void 0 ? 200 : _c, _d = _a.className, className = _d === void 0 ? '' : _d, _e = _a.animateBy, animateBy = _e === void 0 ? 'words' : _e, _f = _a.direction, direction = _f === void 0 ? 'top' : _f, _g = _a.threshold, threshold = _g === void 0 ? 0.1 : _g, _h = _a.rootMargin, rootMargin = _h === void 0 ? '0px' : _h, animationFrom = _a.animationFrom, animationTo = _a.animationTo, _j = _a.easing, easing = _j === void 0 ? function (t) { return t; } : _j, onAnimationComplete = _a.onAnimationComplete, _k = _a.stepDuration, stepDuration = _k === void 0 ? 0.35 : _k;
    var elements = animateBy === 'words' ? text.split(' ') : text.split('');
    var _l = (0, react_2.useState)(false), inView = _l[0], setInView = _l[1];
    var ref = (0, react_2.useRef)(null);
    (0, react_2.useEffect)(function () {
        if (!ref.current)
            return;
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                setInView(true);
                observer.unobserve(ref.current);
            }
        }, { threshold: threshold, rootMargin: rootMargin });
        observer.observe(ref.current);
        return function () { return observer.disconnect(); };
    }, [threshold, rootMargin]);
    var defaultFrom = (0, react_2.useMemo)(function () {
        return direction === 'top' ? { filter: 'blur(10px)', opacity: 0, y: -50 } : { filter: 'blur(10px)', opacity: 0, y: 50 };
    }, [direction]);
    var defaultTo = (0, react_2.useMemo)(function () { return [
        {
            filter: 'blur(5px)',
            opacity: 0.5,
            y: direction === 'top' ? 5 : -5
        },
        { filter: 'blur(0px)', opacity: 1, y: 0 }
    ]; }, [direction]);
    var fromSnapshot = animationFrom !== null && animationFrom !== void 0 ? animationFrom : defaultFrom;
    var toSnapshots = animationTo !== null && animationTo !== void 0 ? animationTo : defaultTo;
    var stepCount = toSnapshots.length + 1;
    var totalDuration = stepDuration * (stepCount - 1);
    var times = Array.from({ length: stepCount }, function (_, i) { return (stepCount === 1 ? 0 : i / (stepCount - 1)); });
    return ((0, jsx_runtime_1.jsx)("p", { ref: ref, className: "blur-text ".concat(className, " flex flex-wrap"), children: elements.map(function (segment, index) {
            var animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
            var spanTransition = {
                duration: totalDuration,
                times: times,
                delay: (index * delay) / 1000,
                ease: easing
            };
            return ((0, jsx_runtime_1.jsxs)(react_1.motion.span, { initial: fromSnapshot, animate: inView ? animateKeyframes : fromSnapshot, transition: spanTransition, onAnimationComplete: index === elements.length - 1 ? onAnimationComplete : undefined, style: {
                    display: 'inline-block',
                    willChange: 'transform, filter, opacity'
                }, children: [segment === ' ' ? '\u00A0' : segment, animateBy === 'words' && index < elements.length - 1 && '\u00A0'] }, index));
        }) }));
};
exports.default = BlurText;
