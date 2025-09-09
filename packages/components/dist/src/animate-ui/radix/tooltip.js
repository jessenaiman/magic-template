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
exports.useTooltip = void 0;
exports.Tooltip = Tooltip;
exports.TooltipTrigger = TooltipTrigger;
exports.TooltipContent = TooltipContent;
exports.TooltipProvider = TooltipProvider;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var radix_ui_1 = require("radix-ui");
var react_1 = require("motion/react");
var utils_1 = require("@/lib/utils");
var TooltipContext = React.createContext(undefined);
var useTooltip = function () {
    var context = React.useContext(TooltipContext);
    if (!context) {
        throw new Error('useTooltip must be used within a Tooltip');
    }
    return context;
};
exports.useTooltip = useTooltip;
var getInitialPosition = function (side) {
    switch (side) {
        case 'top':
            return { y: 15 };
        case 'bottom':
            return { y: -15 };
        case 'left':
            return { x: 15 };
        case 'right':
            return { x: -15 };
    }
};
function TooltipProvider(props) {
    return (0, jsx_runtime_1.jsx)(radix_ui_1.Tooltip.Provider, __assign({ "data-slot": "tooltip-provider" }, props));
}
function Tooltip(props) {
    var _a, _b;
    var _c = React.useState((_b = (_a = props === null || props === void 0 ? void 0 : props.open) !== null && _a !== void 0 ? _a : props === null || props === void 0 ? void 0 : props.defaultOpen) !== null && _b !== void 0 ? _b : false), isOpen = _c[0], setIsOpen = _c[1];
    React.useEffect(function () {
        if ((props === null || props === void 0 ? void 0 : props.open) !== undefined)
            setIsOpen(props.open);
    }, [props === null || props === void 0 ? void 0 : props.open]);
    var handleOpenChange = React.useCallback(function (open) {
        var _a;
        setIsOpen(open);
        (_a = props.onOpenChange) === null || _a === void 0 ? void 0 : _a.call(props, open);
    }, [props]);
    return ((0, jsx_runtime_1.jsx)(TooltipContext.Provider, { value: { isOpen: isOpen }, children: (0, jsx_runtime_1.jsx)(radix_ui_1.Tooltip.Root, __assign({ "data-slot": "tooltip" }, props, { onOpenChange: handleOpenChange })) }));
}
function TooltipTrigger(props) {
    return (0, jsx_runtime_1.jsx)(radix_ui_1.Tooltip.Trigger, __assign({ "data-slot": "tooltip-trigger" }, props));
}
function TooltipContent(_a) {
    var className = _a.className, _b = _a.side, side = _b === void 0 ? 'top' : _b, _c = _a.sideOffset, sideOffset = _c === void 0 ? 4 : _c, _d = _a.transition, transition = _d === void 0 ? { type: 'spring', stiffness: 300, damping: 25 } : _d, _e = _a.arrow, arrow = _e === void 0 ? true : _e, children = _a.children, props = __rest(_a, ["className", "side", "sideOffset", "transition", "arrow", "children"]);
    var isOpen = useTooltip().isOpen;
    var initialPosition = getInitialPosition(side);
    return ((0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { children: isOpen && ((0, jsx_runtime_1.jsx)(radix_ui_1.Tooltip.Portal, { forceMount: true, "data-slot": "tooltip-portal", children: (0, jsx_runtime_1.jsx)(radix_ui_1.Tooltip.Content, __assign({ forceMount: true, sideOffset: sideOffset, className: "z-50" }, props, { children: (0, jsx_runtime_1.jsxs)(react_1.motion.div, { "data-slot": "tooltip-content", initial: __assign({ opacity: 0, scale: 0 }, initialPosition), animate: { opacity: 1, scale: 1, x: 0, y: 0 }, exit: __assign({ opacity: 0, scale: 0 }, initialPosition), transition: transition, className: (0, utils_1.cn)('relative bg-primary text-primary-foreground shadow-md w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-sm text-balance', className), children: [children, arrow && ((0, jsx_runtime_1.jsx)(radix_ui_1.Tooltip.Arrow, { "data-slot": "tooltip-content-arrow", className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px]" }))] }, "tooltip-content") })) })) }));
}
