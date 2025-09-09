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
exports.Checkbox = Checkbox;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var radix_ui_1 = require("radix-ui");
var react_1 = require("motion/react");
var utils_1 = require("@/lib/utils");
function Checkbox(_a) {
    var _b, _c;
    var className = _a.className, onCheckedChange = _a.onCheckedChange, props = __rest(_a, ["className", "onCheckedChange"]);
    var _d = React.useState((_c = (_b = props === null || props === void 0 ? void 0 : props.checked) !== null && _b !== void 0 ? _b : props === null || props === void 0 ? void 0 : props.defaultChecked) !== null && _c !== void 0 ? _c : false), isChecked = _d[0], setIsChecked = _d[1];
    React.useEffect(function () {
        if ((props === null || props === void 0 ? void 0 : props.checked) !== undefined)
            setIsChecked(props.checked);
    }, [props === null || props === void 0 ? void 0 : props.checked]);
    var handleCheckedChange = React.useCallback(function (checked) {
        setIsChecked(checked);
        onCheckedChange === null || onCheckedChange === void 0 ? void 0 : onCheckedChange(checked);
    }, [onCheckedChange]);
    return ((0, jsx_runtime_1.jsx)(radix_ui_1.Checkbox.Root, __assign({}, props, { onCheckedChange: handleCheckedChange, asChild: true, children: (0, jsx_runtime_1.jsx)(react_1.motion.button, __assign({ "data-slot": "checkbox", className: (0, utils_1.cn)('peer size-5 flex items-center justify-center shrink-0 rounded-sm bg-input transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground', className), whileTap: { scale: 0.95 }, whileHover: { scale: 1.05 } }, props, { children: (0, jsx_runtime_1.jsx)(radix_ui_1.Checkbox.Indicator, { forceMount: true, asChild: true, children: (0, jsx_runtime_1.jsx)(react_1.motion.svg, { "data-slot": "checkbox-indicator", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "3.5", stroke: "currentColor", className: "size-3.5", initial: "unchecked", animate: isChecked ? 'checked' : 'unchecked', children: (0, jsx_runtime_1.jsx)(react_1.motion.path, { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5", variants: {
                            checked: {
                                pathLength: 1,
                                opacity: 1,
                                transition: {
                                    duration: 0.2,
                                    delay: 0.2,
                                },
                            },
                            unchecked: {
                                pathLength: 0,
                                opacity: 0,
                                transition: {
                                    duration: 0.2,
                                },
                            },
                        } }) }) }) })) })));
}
