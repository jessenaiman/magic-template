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
exports.LiquidButton = LiquidButton;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("motion/react");
var class_variance_authority_1 = require("class-variance-authority");
var utils_1 = require("@/src/lib/utils");
var buttonVariants = (0, class_variance_authority_1.cva)("relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium cursor-pointer overflow-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [background:_linear-gradient(var(--liquid-button-color)_0_0)_no-repeat_calc(200%-var(--liquid-button-fill,0%))_100%/200%_var(--liquid-button-fill,0.2em)] hover:[--liquid-button-fill:100%] hover:[--liquid-button-delay:0.3s] [transition:_background_0.3s_var(--liquid-button-delay,0s),_color_0.3s_var(--liquid-button-delay,0s),_background-position_0.3s_calc(0.3s_-_var(--liquid-button-delay,0s))] focus:outline-none", {
    variants: {
        variant: {
            default: 'text-primary hover:text-primary-foreground !bg-muted [--liquid-button-color:var(--primary)]',
            outline: 'border !bg-background dark:!bg-input/30 dark:border-input [--liquid-button-color:var(--primary)]',
            secondary: 'text-secondary hover:text-secondary-foreground !bg-muted [--liquid-button-color:var(--secondary)]',
        },
        size: {
            default: 'h-10 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-9 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-12 rounded-xl px-8 has-[>svg]:px-6',
            icon: 'size-10',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});
function LiquidButton(_a) {
    var className = _a.className, variant = _a.variant, size = _a.size, props = __rest(_a, ["className", "variant", "size"]);
    return ((0, jsx_runtime_1.jsx)(react_1.motion.button, __assign({ whileTap: { scale: 0.95 }, whileHover: { scale: 1.05 }, className: (0, utils_1.cn)(buttonVariants({ variant: variant, size: size, className: className })) }, props)));
}
