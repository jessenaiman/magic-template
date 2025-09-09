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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var gsap_1 = require("gsap");
var TextType = function (_a) {
    var text = _a.text, _b = _a.as, Component = _b === void 0 ? 'div' : _b, _c = _a.typingSpeed, typingSpeed = _c === void 0 ? 50 : _c, _d = _a.initialDelay, initialDelay = _d === void 0 ? 0 : _d, _e = _a.pauseDuration, pauseDuration = _e === void 0 ? 2000 : _e, _f = _a.deletingSpeed, deletingSpeed = _f === void 0 ? 30 : _f, _g = _a.loop, loop = _g === void 0 ? true : _g, _h = _a.className, className = _h === void 0 ? '' : _h, _j = _a.showCursor, showCursor = _j === void 0 ? true : _j, _k = _a.hideCursorWhileTyping, hideCursorWhileTyping = _k === void 0 ? false : _k, _l = _a.cursorCharacter, cursorCharacter = _l === void 0 ? '|' : _l, _m = _a.cursorClassName, cursorClassName = _m === void 0 ? '' : _m, _o = _a.cursorBlinkDuration, cursorBlinkDuration = _o === void 0 ? 0.5 : _o, _p = _a.textColors, textColors = _p === void 0 ? [] : _p, variableSpeed = _a.variableSpeed, onSentenceComplete = _a.onSentenceComplete, _q = _a.startOnVisible, startOnVisible = _q === void 0 ? false : _q, _r = _a.reverseMode, reverseMode = _r === void 0 ? false : _r, props = __rest(_a, ["text", "as", "typingSpeed", "initialDelay", "pauseDuration", "deletingSpeed", "loop", "className", "showCursor", "hideCursorWhileTyping", "cursorCharacter", "cursorClassName", "cursorBlinkDuration", "textColors", "variableSpeed", "onSentenceComplete", "startOnVisible", "reverseMode"]);
    var _s = (0, react_1.useState)(''), displayedText = _s[0], setDisplayedText = _s[1];
    var _t = (0, react_1.useState)(0), currentCharIndex = _t[0], setCurrentCharIndex = _t[1];
    var _u = (0, react_1.useState)(false), isDeleting = _u[0], setIsDeleting = _u[1];
    var _v = (0, react_1.useState)(0), currentTextIndex = _v[0], setCurrentTextIndex = _v[1];
    var _w = (0, react_1.useState)(!startOnVisible), isVisible = _w[0], setIsVisible = _w[1];
    var cursorRef = (0, react_1.useRef)(null);
    var containerRef = (0, react_1.useRef)(null);
    var textArray = (0, react_1.useMemo)(function () { return (Array.isArray(text) ? text : [text]); }, [text]);
    var getRandomSpeed = (0, react_1.useCallback)(function () {
        if (!variableSpeed)
            return typingSpeed;
        var min = variableSpeed.min, max = variableSpeed.max;
        return Math.random() * (max - min) + min;
    }, [variableSpeed, typingSpeed]);
    var getCurrentTextColor = function () {
        if (textColors.length === 0)
            return '#ffffff';
        return textColors[currentTextIndex % textColors.length];
    };
    (0, react_1.useEffect)(function () {
        if (!startOnVisible || !containerRef.current)
            return;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        }, { threshold: 0.1 });
        observer.observe(containerRef.current);
        return function () { return observer.disconnect(); };
    }, [startOnVisible]);
    (0, react_1.useEffect)(function () {
        if (showCursor && cursorRef.current) {
            gsap_1.gsap.set(cursorRef.current, { opacity: 1 });
            gsap_1.gsap.to(cursorRef.current, {
                opacity: 0,
                duration: cursorBlinkDuration,
                repeat: -1,
                yoyo: true,
                ease: 'power2.inOut'
            });
        }
    }, [showCursor, cursorBlinkDuration]);
    (0, react_1.useEffect)(function () {
        if (!isVisible)
            return;
        var timeout;
        var currentText = textArray[currentTextIndex];
        var processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;
        var executeTypingAnimation = function () {
            if (isDeleting) {
                if (displayedText === '') {
                    setIsDeleting(false);
                    if (currentTextIndex === textArray.length - 1 && !loop) {
                        return;
                    }
                    if (onSentenceComplete) {
                        onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
                    }
                    setCurrentTextIndex(function (prev) { return (prev + 1) % textArray.length; });
                    setCurrentCharIndex(0);
                    timeout = setTimeout(function () { }, pauseDuration);
                }
                else {
                    timeout = setTimeout(function () {
                        setDisplayedText(function (prev) { return prev.slice(0, -1); });
                    }, deletingSpeed);
                }
            }
            else {
                if (currentCharIndex < processedText.length) {
                    timeout = setTimeout(function () {
                        setDisplayedText(function (prev) { return prev + processedText[currentCharIndex]; });
                        setCurrentCharIndex(function (prev) { return prev + 1; });
                    }, variableSpeed ? getRandomSpeed() : typingSpeed);
                }
                else if (textArray.length > 1) {
                    timeout = setTimeout(function () {
                        setIsDeleting(true);
                    }, pauseDuration);
                }
            }
        };
        if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
            timeout = setTimeout(executeTypingAnimation, initialDelay);
        }
        else {
            executeTypingAnimation();
        }
        return function () { return clearTimeout(timeout); };
    }, [
        currentCharIndex,
        displayedText,
        isDeleting,
        typingSpeed,
        deletingSpeed,
        pauseDuration,
        textArray,
        currentTextIndex,
        loop,
        initialDelay,
        isVisible,
        reverseMode,
        variableSpeed,
        onSentenceComplete
    ]);
    var shouldHideCursor = hideCursorWhileTyping && (currentCharIndex < textArray[currentTextIndex].length || isDeleting);
    return (0, react_1.createElement)(Component, __assign({ ref: containerRef, className: "inline-block whitespace-pre-wrap tracking-tight ".concat(className) }, props), (0, jsx_runtime_1.jsx)("span", { className: "inline", style: { color: getCurrentTextColor() }, children: displayedText }), showCursor && ((0, jsx_runtime_1.jsx)("span", { ref: cursorRef, className: "ml-1 inline-block opacity-100 ".concat(shouldHideCursor ? 'hidden' : '', " ").concat(cursorClassName), children: cursorCharacter })));
};
exports.default = TextType;
