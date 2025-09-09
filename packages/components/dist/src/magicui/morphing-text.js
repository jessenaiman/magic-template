"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MorphingText = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var utils_1 = require("@/src/lib/utils");
var morphTime = 1.5;
var cooldownTime = 0.5;
var useMorphingText = function (texts) {
    var textIndexRef = (0, react_1.useRef)(0);
    var morphRef = (0, react_1.useRef)(0);
    var cooldownRef = (0, react_1.useRef)(0);
    var timeRef = (0, react_1.useRef)(new Date());
    var text1Ref = (0, react_1.useRef)(null);
    var text2Ref = (0, react_1.useRef)(null);
    var setStyles = (0, react_1.useCallback)(function (fraction) {
        var _a = [text1Ref.current, text2Ref.current], current1 = _a[0], current2 = _a[1];
        if (!current1 || !current2)
            return;
        current2.style.filter = "blur(".concat(Math.min(8 / fraction - 8, 100), "px)");
        current2.style.opacity = "".concat(Math.pow(fraction, 0.4) * 100, "%");
        var invertedFraction = 1 - fraction;
        current1.style.filter = "blur(".concat(Math.min(8 / invertedFraction - 8, 100), "px)");
        current1.style.opacity = "".concat(Math.pow(invertedFraction, 0.4) * 100, "%");
        current1.textContent = texts[textIndexRef.current % texts.length];
        current2.textContent = texts[(textIndexRef.current + 1) % texts.length];
    }, [texts]);
    var doMorph = (0, react_1.useCallback)(function () {
        morphRef.current -= cooldownRef.current;
        cooldownRef.current = 0;
        var fraction = morphRef.current / morphTime;
        if (fraction > 1) {
            cooldownRef.current = cooldownTime;
            fraction = 1;
        }
        setStyles(fraction);
        if (fraction === 1) {
            textIndexRef.current++;
        }
    }, [setStyles]);
    var doCooldown = (0, react_1.useCallback)(function () {
        morphRef.current = 0;
        var _a = [text1Ref.current, text2Ref.current], current1 = _a[0], current2 = _a[1];
        if (current1 && current2) {
            current2.style.filter = "none";
            current2.style.opacity = "100%";
            current1.style.filter = "none";
            current1.style.opacity = "0%";
        }
    }, []);
    (0, react_1.useEffect)(function () {
        var animationFrameId;
        var animate = function () {
            animationFrameId = requestAnimationFrame(animate);
            var newTime = new Date();
            var dt = (newTime.getTime() - timeRef.current.getTime()) / 1000;
            timeRef.current = newTime;
            cooldownRef.current -= dt;
            if (cooldownRef.current <= 0)
                doMorph();
            else
                doCooldown();
        };
        animate();
        return function () {
            cancelAnimationFrame(animationFrameId);
        };
    }, [doMorph, doCooldown]);
    return { text1Ref: text1Ref, text2Ref: text2Ref };
};
var Texts = function (_a) {
    var texts = _a.texts;
    var _b = useMorphingText(texts), text1Ref = _b.text1Ref, text2Ref = _b.text2Ref;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute inset-x-0 top-0 m-auto inline-block w-full", ref: text1Ref }), (0, jsx_runtime_1.jsx)("span", { className: "absolute inset-x-0 top-0 m-auto inline-block w-full", ref: text2Ref })] }));
};
var SvgFilters = function () { return ((0, jsx_runtime_1.jsx)("svg", { id: "filters", className: "fixed h-0 w-0", preserveAspectRatio: "xMidYMid slice", children: (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("filter", { id: "threshold", children: (0, jsx_runtime_1.jsx)("feColorMatrix", { in: "SourceGraphic", type: "matrix", values: "1 0 0 0 0\n                  0 1 0 0 0\n                  0 0 1 0 0\n                  0 0 0 255 -140" }) }) }) })); };
var MorphingText = function (_a) {
    var texts = _a.texts, className = _a.className;
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)("relative mx-auto h-16 w-full max-w-screen-md text-center font-sans text-[40pt] font-bold leading-none [filter:url(#threshold)_blur(0.6px)] md:h-24 lg:text-[6rem]", className), children: [(0, jsx_runtime_1.jsx)(Texts, { texts: texts }), (0, jsx_runtime_1.jsx)(SvgFilters, {})] }));
};
exports.MorphingText = MorphingText;
