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
exports.RippleButton = RippleButton;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
var class_variance_authority_1 = require("class-variance-authority");
var utils_1 = require("@/src/lib/utils");
var buttonVariants = (0, class_variance_authority_1.cva)("relative overflow-hidden cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        },
        size: {
            default: 'h-10 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-9 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-11 px-8 has-[>svg]:px-6',
            icon: 'size-10',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});
var rippleVariants = (0, class_variance_authority_1.cva)('absolute rounded-full size-5 pointer-events-none', {
    variants: {
        variant: {
            default: 'bg-primary-foreground',
            destructive: 'bg-destructive',
            outline: 'bg-input',
            secondary: 'bg-secondary',
            ghost: 'bg-accent',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
function RippleButton(_a) {
    var ref = _a.ref, children = _a.children, onClick = _a.onClick, className = _a.className, rippleClassName = _a.rippleClassName, variant = _a.variant, size = _a.size, _b = _a.scale, scale = _b === void 0 ? 10 : _b, _c = _a.transition, transition = _c === void 0 ? { duration: 0.6, ease: 'easeOut' } : _c, props = __rest(_a, ["ref", "children", "onClick", "className", "rippleClassName", "variant", "size", "scale", "transition"]);
    var _d = React.useState([]), ripples = _d[0], setRipples = _d[1];
    var buttonRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return buttonRef.current; });
    var createRipple = React.useCallback(function (event) {
        var button = buttonRef.current;
        if (!button)
            return;
        var rect = button.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        var newRipple = {
            id: Date.now(),
            x: x,
            y: y,
        };
        setRipples(function (prev) { return __spreadArray(__spreadArray([], prev, true), [newRipple], false); });
        setTimeout(function () {
            setRipples(function (prev) { return prev.filter(function (r) { return r.id !== newRipple.id; }); });
        }, 600);
    }, []);
    var handleClick = React.useCallback(function (event) {
        createRipple(event);
        if (onClick) {
            onClick(event);
        }
    }, [createRipple, onClick]);
    return ((0, jsx_runtime_1.jsxs)(react_1.motion.button, __assign({ ref: buttonRef, "data-slot": "ripple-button", onClick: handleClick, whileTap: { scale: 0.95 }, whileHover: { scale: 1.05 }, className: (0, utils_1.cn)(buttonVariants({ variant: variant, size: size, className: className })) }, props, { children: [children, ripples.map(function (ripple) { return ((0, jsx_runtime_1.jsx)(react_1.motion.span, { initial: { scale: 0, opacity: 0.5 }, animate: { scale: scale, opacity: 0 }, transition: transition, className: (0, utils_1.cn)(rippleVariants({ variant: variant, className: rippleClassName })), style: {
                    top: ripple.y - 10,
                    left: ripple.x - 10,
                } }, ripple.id)); })] })));
}
