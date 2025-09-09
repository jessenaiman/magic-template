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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountingNumber = CountingNumber;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
function CountingNumber(_a) {
    var _b, _c;
    var ref = _a.ref, number = _a.number, _d = _a.fromNumber, fromNumber = _d === void 0 ? 0 : _d, _e = _a.padStart, padStart = _e === void 0 ? false : _e, _f = _a.inView, inView = _f === void 0 ? false : _f, _g = _a.inViewMargin, inViewMargin = _g === void 0 ? '0px' : _g, _h = _a.inViewOnce, inViewOnce = _h === void 0 ? true : _h, _j = _a.decimalSeparator, decimalSeparator = _j === void 0 ? '.' : _j, _k = _a.transition, transition = _k === void 0 ? { stiffness: 90, damping: 50 } : _k, _l = _a.decimalPlaces, decimalPlaces = _l === void 0 ? 0 : _l, className = _a.className, props = __rest(_a, ["ref", "number", "fromNumber", "padStart", "inView", "inViewMargin", "inViewOnce", "decimalSeparator", "transition", "decimalPlaces", "className"]);
    var localRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return localRef.current; });
    var numberStr = number.toString();
    var decimals = typeof decimalPlaces === 'number'
        ? decimalPlaces
        : numberStr.includes('.')
            ? ((_c = (_b = numberStr.split('.')[1]) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0)
            : 0;
    var motionVal = (0, react_1.useMotionValue)(fromNumber);
    var springVal = (0, react_1.useSpring)(motionVal, transition);
    var inViewResult = (0, react_1.useInView)(localRef, {
        once: inViewOnce,
        margin: inViewMargin,
    });
    var isInView = !inView || inViewResult;
    React.useEffect(function () {
        if (isInView)
            motionVal.set(number);
    }, [isInView, number, motionVal]);
    React.useEffect(function () {
        var unsubscribe = springVal.on('change', function (latest) {
            var _a;
            if (localRef.current) {
                var formatted = decimals > 0
                    ? latest.toFixed(decimals)
                    : Math.round(latest).toString();
                if (decimals > 0) {
                    formatted = formatted.replace('.', decimalSeparator);
                }
                if (padStart) {
                    var finalIntLength_1 = Math.floor(Math.abs(number)).toString().length;
                    var _b = formatted.split(decimalSeparator), intPart = _b[0], fracPart = _b[1];
                    var paddedInt = (_a = intPart === null || intPart === void 0 ? void 0 : intPart.padStart(finalIntLength_1, '0')) !== null && _a !== void 0 ? _a : '';
                    formatted = fracPart
                        ? "".concat(paddedInt).concat(decimalSeparator).concat(fracPart)
                        : paddedInt;
                }
                localRef.current.textContent = formatted;
            }
        });
        return function () { return unsubscribe(); };
    }, [springVal, decimals, padStart, number, decimalSeparator]);
    var finalIntLength = Math.floor(Math.abs(number)).toString().length;
    var initialText = padStart
        ? '0'.padStart(finalIntLength, '0') +
            (decimals > 0 ? decimalSeparator + '0'.repeat(decimals) : '')
        : '0' + (decimals > 0 ? decimalSeparator + '0'.repeat(decimals) : '');
    return ((0, jsx_runtime_1.jsx)("span", __assign({ ref: localRef, "data-slot": "counting-number", className: className }, props, { children: initialText })));
}
