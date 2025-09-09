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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementBar = ManagementBar;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var lucide_react_1 = require("lucide-react");
var sliding_number_1 = require("@/packages/ui/src/animate-ui/text/sliding-number");
var react_1 = require("motion/react");
var TOTAL_PAGES = 10;
var BUTTON_MOTION_CONFIG = {
    initial: 'rest',
    whileHover: 'hover',
    whileTap: 'tap',
    variants: {
        rest: { maxWidth: '40px' },
        hover: {
            maxWidth: '140px',
            transition: { type: 'spring', stiffness: 200, damping: 35, delay: 0.15 },
        },
        tap: { scale: 0.95 },
    },
    transition: { type: 'spring', stiffness: 250, damping: 25 },
};
var LABEL_VARIANTS = {
    rest: { opacity: 0, x: 4 },
    hover: { opacity: 1, x: 0, visibility: 'visible' },
    tap: { opacity: 1, x: 0, visibility: 'visible' },
};
var LABEL_TRANSITION = {
    type: 'spring',
    stiffness: 200,
    damping: 25,
};
function ManagementBar() {
    var _a = React.useState(1), currentPage = _a[0], setCurrentPage = _a[1];
    var handlePrevPage = React.useCallback(function () {
        if (currentPage > 1)
            setCurrentPage(currentPage - 1);
    }, [currentPage]);
    var handleNextPage = React.useCallback(function () {
        if (currentPage < TOTAL_PAGES)
            setCurrentPage(currentPage + 1);
    }, [currentPage]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex w-fit flex-wrap items-center gap-y-2 rounded-2xl border border-border bg-background p-2 shadow-lg", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mx-auto flex shrink-0 items-center", children: [(0, jsx_runtime_1.jsx)("button", { disabled: currentPage === 1, className: "p-1 text-muted-foreground transition-colors hover:text-foreground disabled:text-muted-foreground/30 disabled:hover:text-muted-foreground/30", onClick: handlePrevPage, children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronLeft, { size: 20 }) }), (0, jsx_runtime_1.jsxs)("div", { className: "mx-2 flex items-center space-x-1 text-sm tabular-nums", children: [(0, jsx_runtime_1.jsx)(sliding_number_1.SlidingNumber, { className: "text-foreground", padStart: true, number: currentPage }), (0, jsx_runtime_1.jsxs)("span", { className: "text-muted-foreground", children: ["/ ", TOTAL_PAGES] })] }), (0, jsx_runtime_1.jsx)("button", { disabled: currentPage === TOTAL_PAGES, className: "p-1 text-muted-foreground transition-colors hover:text-foreground disabled:text-muted-foreground/30 disabled:hover:text-muted-foreground/30", onClick: handleNextPage, children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRight, { size: 20 }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "mx-3 h-6 w-px bg-border rounded-full" }), (0, jsx_runtime_1.jsxs)(react_1.motion.div, { layout: true, layoutRoot: true, className: "mx-auto flex flex-wrap space-x-2 sm:flex-nowrap", children: [(0, jsx_runtime_1.jsxs)(react_1.motion.button, __assign({}, BUTTON_MOTION_CONFIG, { className: "flex h-10 items-center space-x-2 overflow-hidden whitespace-nowrap rounded-lg bg-neutral-200/60 dark:bg-neutral-600/80 px-2.5 py-2 text-neutral-600 dark:text-neutral-200", "aria-label": "Blacklist", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Ban, { size: 20, className: "shrink-0" }), (0, jsx_runtime_1.jsx)(react_1.motion.span, { variants: LABEL_VARIANTS, transition: LABEL_TRANSITION, className: "invisible text-sm", children: "Blacklist" })] })), (0, jsx_runtime_1.jsxs)(react_1.motion.button, __assign({}, BUTTON_MOTION_CONFIG, { className: "flex h-10 items-center space-x-2 overflow-hidden whitespace-nowrap rounded-lg bg-red-200/60 dark:bg-red-800/80 px-2.5 py-2 text-red-600 dark:text-red-300", "aria-label": "Reject", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.X, { size: 20, className: "shrink-0" }), (0, jsx_runtime_1.jsx)(react_1.motion.span, { variants: LABEL_VARIANTS, transition: LABEL_TRANSITION, className: "invisible text-sm", children: "Reject" })] })), (0, jsx_runtime_1.jsxs)(react_1.motion.button, __assign({}, BUTTON_MOTION_CONFIG, { className: "flex h-10 items-center space-x-2 overflow-hidden whitespace-nowrap rounded-lg bg-green-200/60 dark:bg-green-800/80 px-2.5 py-2 text-green-600 dark:text-green-300", "aria-label": "Hire", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.IdCard, { size: 20, className: "shrink-0" }), (0, jsx_runtime_1.jsx)(react_1.motion.span, { variants: LABEL_VARIANTS, transition: LABEL_TRANSITION, className: "invisible text-sm", children: "Hire" })] }))] }), (0, jsx_runtime_1.jsx)("div", { className: "mx-3 hidden h-6 w-px bg-border sm:block rounded-full" }), (0, jsx_runtime_1.jsxs)(react_1.motion.button, { whileTap: { scale: 0.975 }, className: "flex w-full h-10 text-sm cursor-pointer items-center justify-center rounded-lg bg-teal-500 dark:bg-teal-600/80 px-3 py-2 text-white transition-colors duration-300 dark:hover:bg-teal-800 hover:bg-teal-600 sm:w-auto", children: [(0, jsx_runtime_1.jsx)("span", { className: "mr-1 text-neutral-200", children: "Move to:" }), (0, jsx_runtime_1.jsx)("span", { children: "Interview I" }), (0, jsx_runtime_1.jsx)("div", { className: "mx-3 h-5 w-px bg-white/40 rounded-full" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-1 rounded-md bg-white/20 px-1.5 py-0.5 -mr-1", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Command, { size: 14 }), "E"] })] })] }));
}
