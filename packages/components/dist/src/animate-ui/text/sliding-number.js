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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlidingNumber = SlidingNumber;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
var react_use_measure_1 = __importDefault(require("react-use-measure"));
var utils_1 = require("@/src/lib/utils");
function SlidingNumberRoller(_a) {
    var prevValue = _a.prevValue, value = _a.value, place = _a.place, transition = _a.transition;
    var startNumber = Math.floor(prevValue / place) % 10;
    var targetNumber = Math.floor(value / place) % 10;
    var animatedValue = (0, react_1.useSpring)(startNumber, transition);
    React.useEffect(function () {
        animatedValue.set(targetNumber);
    }, [targetNumber, animatedValue]);
    var _b = (0, react_use_measure_1.default)(), measureRef = _b[0], height = _b[1].height;
    return ((0, jsx_runtime_1.jsxs)("span", { ref: measureRef, "data-slot": "sliding-number-roller", className: "relative inline-block w-[1ch] overflow-x-visible overflow-y-clip leading-none tabular-nums", children: [(0, jsx_runtime_1.jsx)("span", { className: "invisible", children: "0" }), Array.from({ length: 10 }, function (_, i) { return ((0, jsx_runtime_1.jsx)(SlidingNumberDisplay, { motionValue: animatedValue, number: i, height: height, transition: transition }, i)); })] }));
}
function SlidingNumberDisplay(_a) {
    var motionValue = _a.motionValue, number = _a.number, height = _a.height, transition = _a.transition;
    var y = (0, react_1.useTransform)(motionValue, function (latest) {
        if (!height)
            return 0;
        var currentNumber = latest % 10;
        var offset = (10 + number - currentNumber) % 10;
        var translateY = offset * height;
        if (offset > 5)
            translateY -= 10 * height;
        return translateY;
    });
    if (!height) {
        return (0, jsx_runtime_1.jsx)("span", { className: "invisible absolute", children: number });
    }
    return ((0, jsx_runtime_1.jsx)(react_1.motion.span, { "data-slot": "sliding-number-display", style: { y: y }, className: "absolute inset-0 flex items-center justify-center", transition: __assign(__assign({}, transition), { type: 'spring' }), children: number }));
}
function SlidingNumber(_a) {
    var _b;
    var ref = _a.ref, number = _a.number, className = _a.className, _c = _a.inView, inView = _c === void 0 ? false : _c, _d = _a.inViewMargin, inViewMargin = _d === void 0 ? '0px' : _d, _e = _a.inViewOnce, inViewOnce = _e === void 0 ? true : _e, _f = _a.padStart, padStart = _f === void 0 ? false : _f, _g = _a.decimalSeparator, decimalSeparator = _g === void 0 ? '.' : _g, _h = _a.decimalPlaces, decimalPlaces = _h === void 0 ? 0 : _h, _j = _a.transition, transition = _j === void 0 ? {
        stiffness: 200,
        damping: 20,
        mass: 0.4,
    } : _j, props = __rest(_a, ["ref", "number", "className", "inView", "inViewMargin", "inViewOnce", "padStart", "decimalSeparator", "decimalPlaces", "transition"]);
    var localRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return localRef.current; });
    var inViewResult = (0, react_1.useInView)(localRef, {
        once: inViewOnce,
        margin: inViewMargin,
    });
    var isInView = !inView || inViewResult;
    var prevNumberRef = React.useRef(0);
    var effectiveNumber = React.useMemo(function () { return (!isInView ? 0 : Math.abs(Number(number))); }, [number, isInView]);
    var formatNumber = React.useCallback(function (num) {
        return decimalPlaces != null ? num.toFixed(decimalPlaces) : num.toString();
    }, [decimalPlaces]);
    var numberStr = formatNumber(effectiveNumber);
    var _k = numberStr.split('.'), newIntStrRaw = _k[0], _l = _k[1], newDecStrRaw = _l === void 0 ? '' : _l;
    var newIntStr = padStart && (newIntStrRaw === null || newIntStrRaw === void 0 ? void 0 : newIntStrRaw.length) === 1 ? '0' + newIntStrRaw : newIntStrRaw;
    var prevFormatted = formatNumber(prevNumberRef.current);
    var _m = prevFormatted.split('.'), _o = _m[0], prevIntStrRaw = _o === void 0 ? '' : _o, _p = _m[1], prevDecStrRaw = _p === void 0 ? '' : _p;
    var prevIntStr = padStart && prevIntStrRaw.length === 1
        ? '0' + prevIntStrRaw
        : prevIntStrRaw;
    var adjustedPrevInt = React.useMemo(function () {
        var _a, _b, _c;
        return prevIntStr.length > ((_a = newIntStr === null || newIntStr === void 0 ? void 0 : newIntStr.length) !== null && _a !== void 0 ? _a : 0)
            ? prevIntStr.slice(-((_b = newIntStr === null || newIntStr === void 0 ? void 0 : newIntStr.length) !== null && _b !== void 0 ? _b : 0))
            : prevIntStr.padStart((_c = newIntStr === null || newIntStr === void 0 ? void 0 : newIntStr.length) !== null && _c !== void 0 ? _c : 0, '0');
    }, [prevIntStr, newIntStr]);
    var adjustedPrevDec = React.useMemo(function () {
        if (!newDecStrRaw)
            return '';
        return prevDecStrRaw.length > newDecStrRaw.length
            ? prevDecStrRaw.slice(0, newDecStrRaw.length)
            : prevDecStrRaw.padEnd(newDecStrRaw.length, '0');
    }, [prevDecStrRaw, newDecStrRaw]);
    React.useEffect(function () {
        if (isInView)
            prevNumberRef.current = effectiveNumber;
    }, [effectiveNumber, isInView]);
    var intDigitCount = (_b = newIntStr === null || newIntStr === void 0 ? void 0 : newIntStr.length) !== null && _b !== void 0 ? _b : 0;
    var intPlaces = React.useMemo(function () {
        return Array.from({ length: intDigitCount }, function (_, i) {
            return Math.pow(10, intDigitCount - i - 1);
        });
    }, [intDigitCount]);
    var decPlaces = React.useMemo(function () {
        return newDecStrRaw
            ? Array.from({ length: newDecStrRaw.length }, function (_, i) {
                return Math.pow(10, newDecStrRaw.length - i - 1);
            })
            : [];
    }, [newDecStrRaw]);
    var newDecValue = newDecStrRaw ? parseInt(newDecStrRaw, 10) : 0;
    var prevDecValue = adjustedPrevDec ? parseInt(adjustedPrevDec, 10) : 0;
    return ((0, jsx_runtime_1.jsxs)("span", __assign({ ref: localRef, "data-slot": "sliding-number", className: (0, utils_1.cn)('flex items-center', className) }, props, { children: [isInView && Number(number) < 0 && (0, jsx_runtime_1.jsx)("span", { className: "mr-1", children: "-" }), intPlaces.map(function (place) { return ((0, jsx_runtime_1.jsx)(SlidingNumberRoller, { prevValue: parseInt(adjustedPrevInt, 10), value: parseInt(newIntStr !== null && newIntStr !== void 0 ? newIntStr : '0', 10), place: place, transition: transition }, "int-".concat(place))); }), newDecStrRaw && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: decimalSeparator }), decPlaces.map(function (place) { return ((0, jsx_runtime_1.jsx)(SlidingNumberRoller, { prevValue: prevDecValue, value: newDecValue, place: place, transition: transition }, "dec-".concat(place))); })] }))] })));
}
