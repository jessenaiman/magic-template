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
exports.GitHubStarsButton = GitHubStarsButton;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var lucide_react_1 = require("lucide-react");
var react_1 = require("motion/react");
var utils_1 = require("@/src/lib/utils");
var sliding_number_1 = require("@/packages/ui/src/animate-ui/text/sliding-number");
function formatNumber(num, formatted) {
    var _a;
    if (formatted) {
        if (num < 1000) {
            return { number: [num.toString()], unit: '' };
        }
        var units = ['k', 'M', 'B', 'T'];
        var unitIndex = 0;
        var n = num;
        while (n >= 1000 && unitIndex < units.length) {
            n /= 1000;
            unitIndex++;
        }
        var finalNumber = Math.floor(n).toString();
        return { number: [finalNumber], unit: (_a = units[unitIndex - 1]) !== null && _a !== void 0 ? _a : '' };
    }
    else {
        return { number: num.toLocaleString('en-US').split(','), unit: '' };
    }
}
function GitHubStarsButton(_a) {
    var ref = _a.ref, username = _a.username, repo = _a.repo, _b = _a.transition, transition = _b === void 0 ? { stiffness: 90, damping: 50 } : _b, _c = _a.formatted, formatted = _c === void 0 ? false : _c, _d = _a.inView, inView = _d === void 0 ? false : _d, _e = _a.inViewOnce, inViewOnce = _e === void 0 ? true : _e, _f = _a.inViewMargin, inViewMargin = _f === void 0 ? '0px' : _f, className = _a.className, props = __rest(_a, ["ref", "username", "repo", "transition", "formatted", "inView", "inViewOnce", "inViewMargin", "className"]);
    var motionVal = (0, react_1.useMotionValue)(0);
    var springVal = (0, react_1.useSpring)(motionVal, transition);
    var motionNumberRef = React.useRef(0);
    var isCompletedRef = React.useRef(false);
    var _g = React.useReducer(function (x) { return x + 1; }, 0), forceRender = _g[1];
    var _h = React.useState(0), stars = _h[0], setStars = _h[1];
    var _j = React.useState(false), isCompleted = _j[0], setIsCompleted = _j[1];
    var _k = React.useState(false), displayParticles = _k[0], setDisplayParticles = _k[1];
    var _l = React.useState(true), isLoading = _l[0], setIsLoading = _l[1];
    var repoUrl = React.useMemo(function () { return "https://github.com/".concat(username, "/").concat(repo); }, [username, repo]);
    React.useEffect(function () {
        fetch("https://api.github.com/repos/".concat(username, "/").concat(repo))
            .then(function (response) { return response.json(); })
            .then(function (data) {
            if (data && typeof data.stargazers_count === 'number') {
                setStars(data.stargazers_count);
            }
        })
            .catch(console.error)
            .finally(function () { return setIsLoading(false); });
    }, [username, repo]);
    var handleDisplayParticles = React.useCallback(function () {
        setDisplayParticles(true);
        setTimeout(function () { return setDisplayParticles(false); }, 1500);
    }, []);
    var localRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return localRef.current; });
    var inViewResult = (0, react_1.useInView)(localRef, {
        once: inViewOnce,
        margin: inViewMargin,
    });
    var isComponentInView = !inView || inViewResult;
    React.useEffect(function () {
        var unsubscribe = springVal.on('change', function (latest) {
            var newValue = Math.round(latest);
            if (motionNumberRef.current !== newValue) {
                motionNumberRef.current = newValue;
                forceRender();
            }
            if (stars !== 0 && newValue >= stars && !isCompletedRef.current) {
                isCompletedRef.current = true;
                setIsCompleted(true);
                handleDisplayParticles();
            }
        });
        return function () { return unsubscribe(); };
    }, [springVal, stars, handleDisplayParticles]);
    React.useEffect(function () {
        if (stars > 0 && isComponentInView)
            motionVal.set(stars);
    }, [motionVal, stars, isComponentInView]);
    var fillPercentage = Math.min(100, (motionNumberRef.current / stars) * 100);
    var formattedResult = formatNumber(motionNumberRef.current, formatted);
    var ghostFormattedNumber = formatNumber(stars, formatted);
    var renderNumberSegments = function (segments, unit, isGhost) { return ((0, jsx_runtime_1.jsxs)("span", { className: (0, utils_1.cn)('flex items-center gap-px', isGhost ? 'invisible' : 'absolute top-0 left-0'), children: [segments.map(function (segment, index) { return ((0, jsx_runtime_1.jsx)(React.Fragment, { children: Array.from(segment).map(function (digit, digitIndex) { return ((0, jsx_runtime_1.jsx)(sliding_number_1.SlidingNumber, { number: +digit }, "".concat(index, "-").concat(digitIndex))); }) }, index)); }), formatted && unit && (0, jsx_runtime_1.jsx)("span", { className: "leading-[1]", children: unit })] })); };
    var handleClick = React.useCallback(function (e) {
        e.preventDefault();
        handleDisplayParticles();
        setTimeout(function () { return window.open(repoUrl, '_blank'); }, 500);
    }, [handleDisplayParticles, repoUrl]);
    if (isLoading)
        return null;
    return ((0, jsx_runtime_1.jsxs)(react_1.motion.a, __assign({ ref: localRef, href: repoUrl, rel: "noopener noreferrer", target: "_blank", whileTap: { scale: 0.95 }, whileHover: { scale: 1.05 }, onClick: handleClick, className: (0, utils_1.cn)("flex items-center gap-2 text-sm bg-primary text-primary-foreground rounded-lg px-4 py-2 h-10 has-[>svg]:px-3 cursor-pointer whitespace-nowrap font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-[18px] shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className) }, props, { children: [(0, jsx_runtime_1.jsx)("svg", { role: "img", viewBox: "0 0 24 24", fill: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" }) }), (0, jsx_runtime_1.jsx)("span", { children: "GitHub Stars" }), (0, jsx_runtime_1.jsxs)("div", { className: "relative inline-flex size-[18px] shrink-0", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Star, { className: "fill-muted-foreground text-muted-foreground", size: 18, "aria-hidden": "true" }), (0, jsx_runtime_1.jsx)(lucide_react_1.Star, { className: "absolute top-0 left-0 text-yellow-500 fill-yellow-500", "aria-hidden": "true", style: {
                            clipPath: "inset(".concat(100 - (isCompleted ? fillPercentage : fillPercentage - 10), "% 0 0 0)"),
                        } }), (0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { children: displayParticles && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_1.motion.div, { className: "absolute inset-0 rounded-full", style: {
                                        background: 'radial-gradient(circle, rgba(255,215,0,0.4) 0%, rgba(255,215,0,0) 70%)',
                                    }, initial: { scale: 1.2, opacity: 0 }, animate: { scale: [1.2, 1.8, 1.2], opacity: [0, 0.3, 0] }, transition: { duration: 1.2, ease: 'easeInOut' } }), (0, jsx_runtime_1.jsx)(react_1.motion.div, { className: "absolute inset-0 rounded-full", style: { boxShadow: '0 0 10px 2px rgba(255,215,0,0.6)' }, initial: { scale: 1, opacity: 0 }, animate: { scale: [1, 1.5], opacity: [0.8, 0] }, transition: { duration: 0.8, ease: 'easeOut' } }), __spreadArray([], Array(6), true).map(function (_, i) { return ((0, jsx_runtime_1.jsx)(react_1.motion.div, { className: "absolute w-1 h-1 rounded-full bg-yellow-500", initial: { x: '50%', y: '50%', scale: 0, opacity: 0 }, animate: {
                                        x: "calc(50% + ".concat(Math.cos((i * Math.PI) / 3) * 30, "px)"),
                                        y: "calc(50% + ".concat(Math.sin((i * Math.PI) / 3) * 30, "px)"),
                                        scale: [0, 1, 0],
                                        opacity: [0, 1, 0],
                                    }, transition: {
                                        duration: 0.8,
                                        delay: i * 0.05,
                                        ease: 'easeOut',
                                    } }, i)); })] })) })] }), (0, jsx_runtime_1.jsxs)("span", { className: "relative inline-flex", children: [renderNumberSegments(ghostFormattedNumber.number, ghostFormattedNumber.unit, true), renderNumberSegments(formattedResult.number, formattedResult.unit, false)] })] })));
}
