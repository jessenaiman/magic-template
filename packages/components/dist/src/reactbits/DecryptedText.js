"use strict";
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
exports.default = DecryptedText;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("motion/react");
function DecryptedText(_a) {
    var text = _a.text, _b = _a.speed, speed = _b === void 0 ? 50 : _b, _c = _a.maxIterations, maxIterations = _c === void 0 ? 10 : _c, _d = _a.sequential, sequential = _d === void 0 ? false : _d, _e = _a.revealDirection, revealDirection = _e === void 0 ? 'start' : _e, _f = _a.useOriginalCharsOnly, useOriginalCharsOnly = _f === void 0 ? false : _f, _g = _a.characters, characters = _g === void 0 ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+' : _g, _h = _a.className, className = _h === void 0 ? '' : _h, _j = _a.parentClassName, parentClassName = _j === void 0 ? '' : _j, _k = _a.encryptedClassName, encryptedClassName = _k === void 0 ? '' : _k, _l = _a.animateOn, animateOn = _l === void 0 ? 'hover' : _l, props = __rest(_a, ["text", "speed", "maxIterations", "sequential", "revealDirection", "useOriginalCharsOnly", "characters", "className", "parentClassName", "encryptedClassName", "animateOn"]);
    var _m = (0, react_1.useState)(text), displayText = _m[0], setDisplayText = _m[1];
    var _o = (0, react_1.useState)(false), isHovering = _o[0], setIsHovering = _o[1];
    var _p = (0, react_1.useState)(false), isScrambling = _p[0], setIsScrambling = _p[1];
    var _q = (0, react_1.useState)(new Set()), revealedIndices = _q[0], setRevealedIndices = _q[1];
    var _r = (0, react_1.useState)(false), hasAnimated = _r[0], setHasAnimated = _r[1];
    var containerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var interval;
        var currentIteration = 0;
        var getNextIndex = function (revealedSet) {
            var textLength = text.length;
            switch (revealDirection) {
                case 'start':
                    return revealedSet.size;
                case 'end':
                    return textLength - 1 - revealedSet.size;
                case 'center': {
                    var middle = Math.floor(textLength / 2);
                    var offset = Math.floor(revealedSet.size / 2);
                    var nextIndex = revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;
                    if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
                        return nextIndex;
                    }
                    for (var i = 0; i < textLength; i++) {
                        if (!revealedSet.has(i))
                            return i;
                    }
                    return 0;
                }
                default:
                    return revealedSet.size;
            }
        };
        var availableChars = useOriginalCharsOnly
            ? Array.from(new Set(text.split(''))).filter(function (char) { return char !== ' '; })
            : characters.split('');
        var shuffleText = function (originalText, currentRevealed) {
            var _a;
            if (useOriginalCharsOnly) {
                var positions = originalText.split('').map(function (char, i) { return ({
                    char: char,
                    isSpace: char === ' ',
                    index: i,
                    isRevealed: currentRevealed.has(i)
                }); });
                var nonSpaceChars_1 = positions.filter(function (p) { return !p.isSpace && !p.isRevealed; }).map(function (p) { return p.char; });
                for (var i = nonSpaceChars_1.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    _a = [nonSpaceChars_1[j], nonSpaceChars_1[i]], nonSpaceChars_1[i] = _a[0], nonSpaceChars_1[j] = _a[1];
                }
                var charIndex_1 = 0;
                return positions
                    .map(function (p) {
                    if (p.isSpace)
                        return ' ';
                    if (p.isRevealed)
                        return originalText[p.index];
                    return nonSpaceChars_1[charIndex_1++];
                })
                    .join('');
            }
            else {
                return originalText
                    .split('')
                    .map(function (char, i) {
                    if (char === ' ')
                        return ' ';
                    if (currentRevealed.has(i))
                        return originalText[i];
                    return availableChars[Math.floor(Math.random() * availableChars.length)];
                })
                    .join('');
            }
        };
        if (isHovering) {
            setIsScrambling(true);
            interval = setInterval(function () {
                setRevealedIndices(function (prevRevealed) {
                    if (sequential) {
                        if (prevRevealed.size < text.length) {
                            var nextIndex = getNextIndex(prevRevealed);
                            var newRevealed = new Set(prevRevealed);
                            newRevealed.add(nextIndex);
                            setDisplayText(shuffleText(text, newRevealed));
                            return newRevealed;
                        }
                        else {
                            clearInterval(interval);
                            setIsScrambling(false);
                            return prevRevealed;
                        }
                    }
                    else {
                        setDisplayText(shuffleText(text, prevRevealed));
                        currentIteration++;
                        if (currentIteration >= maxIterations) {
                            clearInterval(interval);
                            setIsScrambling(false);
                            setDisplayText(text);
                        }
                        return prevRevealed;
                    }
                });
            }, speed);
        }
        else {
            setDisplayText(text);
            setRevealedIndices(new Set());
            setIsScrambling(false);
        }
        return function () {
            if (interval)
                clearInterval(interval);
        };
    }, [isHovering, text, speed, maxIterations, sequential, revealDirection, characters, useOriginalCharsOnly]);
    (0, react_1.useEffect)(function () {
        if (animateOn !== 'view')
            return;
        var observerCallback = function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsHovering(true);
                    setHasAnimated(true);
                }
            });
        };
        var observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        var observer = new IntersectionObserver(observerCallback, observerOptions);
        var currentRef = containerRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        return function () {
            if (currentRef)
                observer.unobserve(currentRef);
        };
    }, [animateOn, hasAnimated]);
    var hoverProps = animateOn === 'hover'
        ? {
            onMouseEnter: function () { return setIsHovering(true); },
            onMouseLeave: function () { return setIsHovering(false); }
        }
        : {};
    return ((0, jsx_runtime_1.jsxs)(react_2.motion.span, __assign({ ref: containerRef, className: "inline-block whitespace-pre-wrap ".concat(parentClassName) }, hoverProps, props, { children: [(0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: displayText }), (0, jsx_runtime_1.jsx)("span", { "aria-hidden": "true", children: displayText.split('').map(function (char, index) {
                    var isRevealedOrDone = revealedIndices.has(index) || !isScrambling || !isHovering;
                    return ((0, jsx_runtime_1.jsx)("span", { className: isRevealedOrDone ? className : encryptedClassName, children: char }, index));
                }) })] })));
}
