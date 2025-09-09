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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var gsap_1 = require("gsap");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
var SplitText_1 = require("gsap/SplitText");
var react_2 = require("@gsap/react");
gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger, SplitText_1.SplitText, react_2.useGSAP);
var SplitText = function (_a) {
    var text = _a.text, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.delay, delay = _c === void 0 ? 100 : _c, _d = _a.duration, duration = _d === void 0 ? 0.6 : _d, _e = _a.ease, ease = _e === void 0 ? 'power3.out' : _e, _f = _a.splitType, splitType = _f === void 0 ? 'chars' : _f, _g = _a.from, from = _g === void 0 ? { opacity: 0, y: 40 } : _g, _h = _a.to, to = _h === void 0 ? { opacity: 1, y: 0 } : _h, _j = _a.threshold, threshold = _j === void 0 ? 0.1 : _j, _k = _a.rootMargin, rootMargin = _k === void 0 ? '-100px' : _k, _l = _a.tag, tag = _l === void 0 ? 'p' : _l, _m = _a.textAlign, textAlign = _m === void 0 ? 'center' : _m, onLetterAnimationComplete = _a.onLetterAnimationComplete;
    var ref = (0, react_1.useRef)(null);
    var animationCompletedRef = (0, react_1.useRef)(false);
    var _o = (0, react_1.useState)(false), fontsLoaded = _o[0], setFontsLoaded = _o[1];
    (0, react_1.useEffect)(function () {
        if (document.fonts.status === 'loaded') {
            setFontsLoaded(true);
        }
        else {
            document.fonts.ready.then(function () {
                setFontsLoaded(true);
            });
        }
    }, []);
    (0, react_2.useGSAP)(function () {
        if (!ref.current || !text || !fontsLoaded)
            return;
        var el = ref.current;
        if (el._rbsplitInstance) {
            try {
                el._rbsplitInstance.revert();
            }
            catch (_) { }
            el._rbsplitInstance = undefined;
        }
        var startPct = (1 - threshold) * 100;
        var marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
        var marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
        var marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
        var sign = marginValue === 0
            ? ''
            : marginValue < 0
                ? "-=".concat(Math.abs(marginValue)).concat(marginUnit)
                : "+=".concat(marginValue).concat(marginUnit);
        var start = "top ".concat(startPct, "%").concat(sign);
        var targets = [];
        var assignTargets = function (self) {
            var _a;
            if (splitType.includes('chars') && ((_a = self.chars) === null || _a === void 0 ? void 0 : _a.length))
                targets = self.chars;
            if (!targets.length && splitType.includes('words') && self.words.length)
                targets = self.words;
            if (!targets.length && splitType.includes('lines') && self.lines.length)
                targets = self.lines;
            if (!targets.length)
                targets = self.chars || self.words || self.lines;
        };
        var splitInstance = new SplitText_1.SplitText(el, {
            type: splitType,
            smartWrap: true,
            autoSplit: splitType === 'lines',
            linesClass: 'split-line',
            wordsClass: 'split-word',
            charsClass: 'split-char',
            reduceWhiteSpace: false,
            onSplit: function (self) {
                assignTargets(self);
                return gsap_1.gsap.fromTo(targets, __assign({}, from), __assign(__assign({}, to), { duration: duration, ease: ease, stagger: delay / 1000, scrollTrigger: {
                        trigger: el,
                        start: start,
                        once: true,
                        fastScrollEnd: true,
                        anticipatePin: 0.4
                    }, onComplete: function () {
                        animationCompletedRef.current = true;
                        onLetterAnimationComplete === null || onLetterAnimationComplete === void 0 ? void 0 : onLetterAnimationComplete();
                    }, willChange: 'transform, opacity', force3D: true }));
            }
        });
        el._rbsplitInstance = splitInstance;
        return function () {
            ScrollTrigger_1.ScrollTrigger.getAll().forEach(function (st) {
                if (st.trigger === el)
                    st.kill();
            });
            try {
                splitInstance.revert();
            }
            catch (_) { }
            el._rbsplitInstance = undefined;
        };
    }, {
        dependencies: [
            text,
            delay,
            duration,
            ease,
            splitType,
            JSON.stringify(from),
            JSON.stringify(to),
            threshold,
            rootMargin,
            fontsLoaded,
            onLetterAnimationComplete
        ],
        scope: ref
    });
    var renderTag = function () {
        var style = {
            textAlign: textAlign,
            wordWrap: 'break-word',
            willChange: 'transform, opacity'
        };
        var classes = "split-parent overflow-hidden inline-block whitespace-normal ".concat(className);
        switch (tag) {
            case 'h1':
                return ((0, jsx_runtime_1.jsx)("h1", { ref: ref, style: style, className: classes, children: text }));
            case 'h2':
                return ((0, jsx_runtime_1.jsx)("h2", { ref: ref, style: style, className: classes, children: text }));
            case 'h3':
                return ((0, jsx_runtime_1.jsx)("h3", { ref: ref, style: style, className: classes, children: text }));
            case 'h4':
                return ((0, jsx_runtime_1.jsx)("h4", { ref: ref, style: style, className: classes, children: text }));
            case 'h5':
                return ((0, jsx_runtime_1.jsx)("h5", { ref: ref, style: style, className: classes, children: text }));
            case 'h6':
                return ((0, jsx_runtime_1.jsx)("h6", { ref: ref, style: style, className: classes, children: text }));
            default:
                return ((0, jsx_runtime_1.jsx)("p", { ref: ref, style: style, className: classes, children: text }));
        }
    };
    return renderTag();
};
exports.default = SplitText;
