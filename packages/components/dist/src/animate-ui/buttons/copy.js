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
exports.buttonVariants = void 0;
exports.CopyButton = CopyButton;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
var lucide_react_1 = require("lucide-react");
var class_variance_authority_1 = require("class-variance-authority");
var utils_1 = require("@/src/lib/utils");
var buttonVariants = (0, class_variance_authority_1.cva)('inline-flex items-center justify-center cursor-pointer rounded-md transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
            muted: 'bg-muted text-muted-foreground',
            destructive: 'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        },
        size: {
            default: 'size-8 rounded-lg [&_svg]:size-4',
            sm: 'size-6 [&_svg]:size-3',
            md: 'size-10 rounded-lg [&_svg]:size-5',
            lg: 'size-12 rounded-xl [&_svg]:size-6',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});
exports.buttonVariants = buttonVariants;
function CopyButton(_a) {
    var content = _a.content, className = _a.className, size = _a.size, variant = _a.variant, _b = _a.delay, delay = _b === void 0 ? 3000 : _b, onClick = _a.onClick, onCopy = _a.onCopy, isCopied = _a.isCopied, onCopyChange = _a.onCopyChange, props = __rest(_a, ["content", "className", "size", "variant", "delay", "onClick", "onCopy", "isCopied", "onCopyChange"]);
    var _c = React.useState(isCopied !== null && isCopied !== void 0 ? isCopied : false), localIsCopied = _c[0], setLocalIsCopied = _c[1];
    var Icon = localIsCopied ? lucide_react_1.CheckIcon : lucide_react_1.CopyIcon;
    React.useEffect(function () {
        setLocalIsCopied(isCopied !== null && isCopied !== void 0 ? isCopied : false);
    }, [isCopied]);
    var handleIsCopied = React.useCallback(function (isCopied) {
        setLocalIsCopied(isCopied);
        onCopyChange === null || onCopyChange === void 0 ? void 0 : onCopyChange(isCopied);
    }, [onCopyChange]);
    var handleCopy = React.useCallback(function (e) {
        if (isCopied)
            return;
        if (content) {
            navigator.clipboard
                .writeText(content)
                .then(function () {
                handleIsCopied(true);
                setTimeout(function () { return handleIsCopied(false); }, delay);
                onCopy === null || onCopy === void 0 ? void 0 : onCopy(content);
            })
                .catch(function (error) {
                console.error('Error copying command', error);
            });
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    }, [isCopied, content, delay, onClick, onCopy, handleIsCopied]);
    return ((0, jsx_runtime_1.jsx)(react_1.motion.button, __assign({ "data-slot": "copy-button", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: (0, utils_1.cn)(buttonVariants({ variant: variant, size: size }), className), onClick: handleCopy }, props, { children: (0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { mode: "wait", children: (0, jsx_runtime_1.jsx)(react_1.motion.span, { "data-slot": "copy-button-icon", initial: { scale: 0 }, animate: { scale: 1 }, exit: { scale: 0 }, transition: { duration: 0.15 }, children: (0, jsx_runtime_1.jsx)(Icon, {}) }, localIsCopied ? 'check' : 'copy') }) })));
}
