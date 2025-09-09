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
exports.TypingText = TypingText;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
var utils_1 = require("@/lib/utils");
function CursorBlinker(_a) {
    var className = _a.className;
    return ((0, jsx_runtime_1.jsx)(react_1.motion.span, { "data-slot": "cursor-blinker", variants: {
            blinking: {
                opacity: [0, 0, 1, 1],
                transition: {
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 0,
                    ease: 'linear',
                    times: [0, 0.5, 0.5, 1],
                },
            },
        }, animate: "blinking", className: (0, utils_1.cn)('inline-block h-5 w-[1px] translate-y-1 bg-black dark:bg-white', className) }));
}
function TypingText(_a) {
    var ref = _a.ref, _b = _a.duration, duration = _b === void 0 ? 100 : _b, _c = _a.delay, delay = _c === void 0 ? 0 : _c, _d = _a.inView, inView = _d === void 0 ? false : _d, _e = _a.inViewMargin, inViewMargin = _e === void 0 ? '0px' : _e, _f = _a.inViewOnce, inViewOnce = _f === void 0 ? true : _f, _g = _a.cursor, cursor = _g === void 0 ? false : _g, _h = _a.loop, loop = _h === void 0 ? false : _h, _j = _a.holdDelay, holdDelay = _j === void 0 ? 1000 : _j, text = _a.text, cursorClassName = _a.cursorClassName, _k = _a.animateOnChange, animateOnChange = _k === void 0 ? true : _k, props = __rest(_a, ["ref", "duration", "delay", "inView", "inViewMargin", "inViewOnce", "cursor", "loop", "holdDelay", "text", "cursorClassName", "animateOnChange"]);
    var localRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return localRef.current; });
    var inViewResult = (0, react_1.useInView)(localRef, {
        once: inViewOnce,
        margin: inViewMargin,
    });
    var isInView = !inView || inViewResult;
    var _l = React.useState(false), started = _l[0], setStarted = _l[1];
    var _m = React.useState(''), displayedText = _m[0], setDisplayedText = _m[1];
    React.useEffect(function () {
        // Reset animation when text changes (if animateOnChange is true)
        if (animateOnChange) {
            setStarted(false);
            setDisplayedText('');
        }
        if (isInView) {
            var timeoutId_1 = setTimeout(function () {
                setStarted(true);
            }, delay);
            return function () { return clearTimeout(timeoutId_1); };
        }
        else {
            var timeoutId_2 = setTimeout(function () {
                setStarted(true);
            }, delay);
            return function () { return clearTimeout(timeoutId_2); };
        }
    }, __spreadArray([isInView, delay], (animateOnChange ? [text] : []), true));
    React.useEffect(function () {
        if (!started)
            return;
        var timeoutIds = [];
        var texts = typeof text === 'string' ? [text] : text;
        var typeText = function (str, onComplete) {
            var currentIndex = 0;
            var type = function () {
                if (currentIndex <= str.length) {
                    setDisplayedText(str.substring(0, currentIndex));
                    currentIndex++;
                    var id = setTimeout(type, duration);
                    timeoutIds.push(id);
                }
                else {
                    onComplete();
                }
            };
            type();
        };
        var eraseText = function (str, onComplete) {
            var currentIndex = str.length;
            var erase = function () {
                if (currentIndex >= 0) {
                    setDisplayedText(str.substring(0, currentIndex));
                    currentIndex--;
                    var id = setTimeout(erase, duration);
                    timeoutIds.push(id);
                }
                else {
                    onComplete();
                }
            };
            erase();
        };
        var animateTexts = function (index) {
            var _a;
            typeText((_a = texts[index]) !== null && _a !== void 0 ? _a : '', function () {
                var isLast = index === texts.length - 1;
                if (isLast && !loop) {
                    return;
                }
                var id = setTimeout(function () {
                    var _a;
                    eraseText((_a = texts[index]) !== null && _a !== void 0 ? _a : '', function () {
                        var nextIndex = isLast ? 0 : index + 1;
                        animateTexts(nextIndex);
                    });
                }, holdDelay);
                timeoutIds.push(id);
            });
        };
        animateTexts(0);
        return function () {
            timeoutIds.forEach(clearTimeout);
        };
    }, [text, duration, started, loop, holdDelay]);
    return ((0, jsx_runtime_1.jsxs)("span", __assign({ ref: localRef, "data-slot": "typing-text" }, props, { children: [(0, jsx_runtime_1.jsx)(react_1.motion.span, { children: displayedText }), cursor && (0, jsx_runtime_1.jsx)(CursorBlinker, { className: cursorClassName })] })));
}
