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
exports.useTooltip = exports.useGlobalTooltip = void 0;
exports.TooltipProvider = TooltipProvider;
exports.Tooltip = Tooltip;
exports.TooltipContent = TooltipContent;
exports.TooltipTrigger = TooltipTrigger;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_dom_1 = require("react-dom");
var react_1 = require("motion/react");
var utils_1 = require("@/lib/utils");
var GlobalTooltipContext = React.createContext(undefined);
var useGlobalTooltip = function () {
    var context = React.useContext(GlobalTooltipContext);
    if (!context) {
        throw new Error('useGlobalTooltip must be used within a TooltipProvider');
    }
    return context;
};
exports.useGlobalTooltip = useGlobalTooltip;
function getTooltipPosition(_a) {
    var rect = _a.rect, side = _a.side, sideOffset = _a.sideOffset, align = _a.align, alignOffset = _a.alignOffset;
    switch (side) {
        case 'top':
            if (align === 'start') {
                return {
                    x: rect.left + alignOffset,
                    y: rect.top - sideOffset,
                    transform: 'translate(0, -100%)',
                    initial: { y: 15 },
                };
            }
            else if (align === 'end') {
                return {
                    x: rect.right + alignOffset,
                    y: rect.top - sideOffset,
                    transform: 'translate(-100%, -100%)',
                    initial: { y: 15 },
                };
            }
            else {
                // center
                return {
                    x: rect.left + rect.width / 2,
                    y: rect.top - sideOffset,
                    transform: 'translate(-50%, -100%)',
                    initial: { y: 15 },
                };
            }
        case 'bottom':
            if (align === 'start') {
                return {
                    x: rect.left + alignOffset,
                    y: rect.bottom + sideOffset,
                    transform: 'translate(0, 0)',
                    initial: { y: -15 },
                };
            }
            else if (align === 'end') {
                return {
                    x: rect.right + alignOffset,
                    y: rect.bottom + sideOffset,
                    transform: 'translate(-100%, 0)',
                    initial: { y: -15 },
                };
            }
            else {
                // center
                return {
                    x: rect.left + rect.width / 2,
                    y: rect.bottom + sideOffset,
                    transform: 'translate(-50%, 0)',
                    initial: { y: -15 },
                };
            }
        case 'left':
            if (align === 'start') {
                return {
                    x: rect.left - sideOffset,
                    y: rect.top + alignOffset,
                    transform: 'translate(-100%, 0)',
                    initial: { x: 15 },
                };
            }
            else if (align === 'end') {
                return {
                    x: rect.left - sideOffset,
                    y: rect.bottom + alignOffset,
                    transform: 'translate(-100%, -100%)',
                    initial: { x: 15 },
                };
            }
            else {
                // center
                return {
                    x: rect.left - sideOffset,
                    y: rect.top + rect.height / 2,
                    transform: 'translate(-100%, -50%)',
                    initial: { x: 15 },
                };
            }
        case 'right':
            if (align === 'start') {
                return {
                    x: rect.right + sideOffset,
                    y: rect.top + alignOffset,
                    transform: 'translate(0, 0)',
                    initial: { x: -15 },
                };
            }
            else if (align === 'end') {
                return {
                    x: rect.right + sideOffset,
                    y: rect.bottom + alignOffset,
                    transform: 'translate(0, -100%)',
                    initial: { x: -15 },
                };
            }
            else {
                // center
                return {
                    x: rect.right + sideOffset,
                    y: rect.top + rect.height / 2,
                    transform: 'translate(0, -50%)',
                    initial: { x: -15 },
                };
            }
    }
}
function TooltipProvider(_a) {
    var children = _a.children, _b = _a.openDelay, openDelay = _b === void 0 ? 700 : _b, _c = _a.closeDelay, closeDelay = _c === void 0 ? 300 : _c, _d = _a.transition, transition = _d === void 0 ? { type: 'spring', stiffness: 300, damping: 25 } : _d;
    var globalId = React.useId();
    var _e = React.useState(null), currentTooltip = _e[0], setCurrentTooltip = _e[1];
    var timeoutRef = React.useRef(null);
    var lastCloseTimeRef = React.useRef(0);
    var showTooltip = React.useCallback(function (data) {
        if (timeoutRef.current)
            clearTimeout(timeoutRef.current);
        if (currentTooltip !== null) {
            setCurrentTooltip(data);
            return;
        }
        var now = Date.now();
        var delay = now - lastCloseTimeRef.current < closeDelay ? 0 : openDelay;
        timeoutRef.current = window.setTimeout(function () { return setCurrentTooltip(data); }, delay);
    }, [openDelay, closeDelay, currentTooltip]);
    var hideTooltip = React.useCallback(function () {
        if (timeoutRef.current)
            clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(function () {
            setCurrentTooltip(null);
            lastCloseTimeRef.current = Date.now();
        }, closeDelay);
    }, [closeDelay]);
    var hideImmediate = React.useCallback(function () {
        if (timeoutRef.current)
            clearTimeout(timeoutRef.current);
        setCurrentTooltip(null);
        lastCloseTimeRef.current = Date.now();
    }, []);
    React.useEffect(function () {
        window.addEventListener('scroll', hideImmediate, true);
        return function () { return window.removeEventListener('scroll', hideImmediate, true); };
    }, [hideImmediate]);
    return ((0, jsx_runtime_1.jsxs)(GlobalTooltipContext.Provider, { value: {
            showTooltip: showTooltip,
            hideTooltip: hideTooltip,
            currentTooltip: currentTooltip,
            transition: transition,
            globalId: globalId,
        }, children: [(0, jsx_runtime_1.jsx)(react_1.LayoutGroup, { children: children }), (0, jsx_runtime_1.jsx)(TooltipOverlay, {})] }));
}
function TooltipArrow(_a) {
    var side = _a.side;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)('absolute bg-primary z-50 size-2.5 rotate-45 rounded-[2px]', (side === 'top' || side === 'bottom') && 'left-1/2 -translate-x-1/2', (side === 'left' || side === 'right') && 'top-1/2 -translate-y-1/2', side === 'top' && '-bottom-[3px]', side === 'bottom' && '-top-[3px]', side === 'left' && '-right-[3px]', side === 'right' && '-left-[3px]') }));
}
function TooltipPortal(_a) {
    var children = _a.children;
    var _b = React.useState(false), isMounted = _b[0], setIsMounted = _b[1];
    React.useEffect(function () { return setIsMounted(true); }, []);
    return isMounted ? (0, react_dom_1.createPortal)(children, document.body) : null;
}
function TooltipOverlay() {
    var _a = useGlobalTooltip(), currentTooltip = _a.currentTooltip, transition = _a.transition, globalId = _a.globalId;
    var position = React.useMemo(function () {
        if (!currentTooltip)
            return null;
        return getTooltipPosition({
            rect: currentTooltip.rect,
            side: currentTooltip.side,
            sideOffset: currentTooltip.sideOffset,
            align: currentTooltip.align,
            alignOffset: currentTooltip.alignOffset,
        });
    }, [currentTooltip]);
    return ((0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { children: currentTooltip && currentTooltip.content && position && ((0, jsx_runtime_1.jsx)(TooltipPortal, { children: (0, jsx_runtime_1.jsx)(react_1.motion.div, { "data-slot": "tooltip-overlay-container", className: "fixed z-50", style: {
                    top: position.y,
                    left: position.x,
                    transform: position.transform,
                }, children: (0, jsx_runtime_1.jsxs)(react_1.motion.div, { "data-slot": "tooltip-overlay", layoutId: "tooltip-overlay-".concat(globalId), initial: __assign({ opacity: 0, scale: 0 }, position.initial), animate: { opacity: 1, scale: 1, x: 0, y: 0 }, exit: __assign({ opacity: 0, scale: 0 }, position.initial), transition: transition, className: "relative rounded-md bg-primary fill-primary px-3 py-1.5 text-sm text-primary-foreground shadow-md w-fit text-balance", children: [currentTooltip.content, currentTooltip.arrow && ((0, jsx_runtime_1.jsx)(TooltipArrow, { side: currentTooltip.side }))] }) }) })) }));
}
var TooltipContext = React.createContext(undefined);
var useTooltip = function () {
    var context = React.useContext(TooltipContext);
    if (!context) {
        throw new Error('useTooltip must be used within a TooltipProvider');
    }
    return context;
};
exports.useTooltip = useTooltip;
function Tooltip(_a) {
    var children = _a.children, _b = _a.side, side = _b === void 0 ? 'top' : _b, _c = _a.sideOffset, sideOffset = _c === void 0 ? 14 : _c, _d = _a.align, align = _d === void 0 ? 'center' : _d, _e = _a.alignOffset, alignOffset = _e === void 0 ? 0 : _e;
    var id = React.useId();
    var _f = React.useState(null), content = _f[0], setContent = _f[1];
    var _g = React.useState(true), arrow = _g[0], setArrow = _g[1];
    return ((0, jsx_runtime_1.jsx)(TooltipContext.Provider, { value: {
            content: content,
            setContent: setContent,
            arrow: arrow,
            setArrow: setArrow,
            side: side,
            sideOffset: sideOffset,
            align: align,
            alignOffset: alignOffset,
            id: id,
        }, children: children }));
}
function TooltipContent(_a) {
    var children = _a.children, _b = _a.arrow, arrow = _b === void 0 ? true : _b;
    var _c = useTooltip(), setContent = _c.setContent, setArrow = _c.setArrow;
    React.useEffect(function () {
        setContent(children);
        setArrow(arrow);
    }, [children, setContent, setArrow, arrow]);
    return null;
}
function TooltipTrigger(_a) {
    var children = _a.children;
    var _b = useTooltip(), content = _b.content, side = _b.side, sideOffset = _b.sideOffset, align = _b.align, alignOffset = _b.alignOffset, id = _b.id, arrow = _b.arrow;
    var _c = useGlobalTooltip(), showTooltip = _c.showTooltip, hideTooltip = _c.hideTooltip, currentTooltip = _c.currentTooltip;
    var triggerRef = React.useRef(null);
    var handleOpen = React.useCallback(function () {
        if (!triggerRef.current)
            return;
        var rect = triggerRef.current.getBoundingClientRect();
        showTooltip({
            content: content,
            rect: rect,
            side: side,
            sideOffset: sideOffset,
            align: align,
            alignOffset: alignOffset,
            id: id,
            arrow: arrow,
        });
    }, [showTooltip, content, side, sideOffset, align, alignOffset, id, arrow]);
    var handleMouseEnter = React.useCallback(function (e) {
        var _a, _b;
        (_b = (_a = children.props) === null || _a === void 0 ? void 0 : _a.onMouseEnter) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        handleOpen();
    }, [handleOpen, children.props]);
    var handleMouseLeave = React.useCallback(function (e) {
        var _a, _b;
        (_b = (_a = children.props) === null || _a === void 0 ? void 0 : _a.onMouseLeave) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        hideTooltip();
    }, [hideTooltip, children.props]);
    var handleFocus = React.useCallback(function (e) {
        var _a, _b;
        (_b = (_a = children.props) === null || _a === void 0 ? void 0 : _a.onFocus) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        handleOpen();
    }, [handleOpen, children.props]);
    var handleBlur = React.useCallback(function (e) {
        var _a, _b;
        (_b = (_a = children.props) === null || _a === void 0 ? void 0 : _a.onBlur) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        hideTooltip();
    }, [hideTooltip, children.props]);
    React.useEffect(function () {
        if ((currentTooltip === null || currentTooltip === void 0 ? void 0 : currentTooltip.id) !== id)
            return;
        if (!triggerRef.current)
            return;
        if (currentTooltip.content === content && currentTooltip.arrow === arrow)
            return;
        var rect = triggerRef.current.getBoundingClientRect();
        showTooltip({
            content: content,
            rect: rect,
            side: side,
            sideOffset: sideOffset,
            align: align,
            alignOffset: alignOffset,
            id: id,
            arrow: arrow,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content, arrow, currentTooltip === null || currentTooltip === void 0 ? void 0 : currentTooltip.id]);
    return React.cloneElement(children, {
        ref: triggerRef,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onFocus: handleFocus,
        onBlur: handleBlur,
        'data-state': (currentTooltip === null || currentTooltip === void 0 ? void 0 : currentTooltip.id) === id ? 'open' : 'closed',
        'data-side': side,
        'data-align': align,
        'data-slot': 'tooltip-trigger',
    });
}
