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
exports.MotionHighlight = MotionHighlight;
exports.MotionHighlightItem = MotionHighlightItem;
exports.useMotionHighlight = useMotionHighlight;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
var utils_1 = require("@/lib/utils");
var MotionHighlightContext = React.createContext(undefined);
function useMotionHighlight() {
    var context = React.useContext(MotionHighlightContext);
    if (!context) {
        throw new Error('useMotionHighlight must be used within a MotionHighlightProvider');
    }
    return context;
}
function MotionHighlight(_a) {
    var _b;
    var ref = _a.ref, props = __rest(_a, ["ref"]);
    var children = props.children, value = props.value, defaultValue = props.defaultValue, onValueChange = props.onValueChange, className = props.className, _c = props.transition, transition = _c === void 0 ? { type: 'spring', stiffness: 350, damping: 35 } : _c, _d = props.hover, hover = _d === void 0 ? false : _d, _e = props.enabled, enabled = _e === void 0 ? true : _e, controlledItems = props.controlledItems, _f = props.disabled, disabled = _f === void 0 ? false : _f, _g = props.exitDelay, exitDelay = _g === void 0 ? 0.2 : _g, _h = props.mode, mode = _h === void 0 ? 'children' : _h;
    var localRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return localRef.current; });
    var _j = React.useState((_b = value !== null && value !== void 0 ? value : defaultValue) !== null && _b !== void 0 ? _b : null), activeValue = _j[0], setActiveValue = _j[1];
    var _k = React.useState(null), boundsState = _k[0], setBoundsState = _k[1];
    var _l = React.useState(''), activeClassNameState = _l[0], setActiveClassNameState = _l[1];
    var safeSetActiveValue = React.useCallback(function (id) {
        setActiveValue(function (prev) { return (prev === id ? prev : id); });
        if (id !== activeValue)
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(id);
    }, [activeValue, onValueChange]);
    var safeSetBounds = React.useCallback(function (bounds) {
        var _a, _b, _c, _d, _e;
        if (!localRef.current)
            return;
        var boundsOffset = (_a = props === null || props === void 0 ? void 0 : props.boundsOffset) !== null && _a !== void 0 ? _a : {
            top: 0,
            left: 0,
            width: 0,
            height: 0,
        };
        var containerRect = localRef.current.getBoundingClientRect();
        var newBounds = {
            top: bounds.top - containerRect.top + ((_b = boundsOffset.top) !== null && _b !== void 0 ? _b : 0),
            left: bounds.left - containerRect.left + ((_c = boundsOffset.left) !== null && _c !== void 0 ? _c : 0),
            width: bounds.width + ((_d = boundsOffset.width) !== null && _d !== void 0 ? _d : 0),
            height: bounds.height + ((_e = boundsOffset.height) !== null && _e !== void 0 ? _e : 0),
        };
        setBoundsState(function (prev) {
            if (prev &&
                prev.top === newBounds.top &&
                prev.left === newBounds.left &&
                prev.width === newBounds.width &&
                prev.height === newBounds.height) {
                return prev;
            }
            return newBounds;
        });
    }, [props]);
    var clearBounds = React.useCallback(function () {
        setBoundsState(function (prev) { return (prev === null ? prev : null); });
    }, []);
    React.useEffect(function () {
        if (value !== undefined)
            setActiveValue(value);
        else if (defaultValue !== undefined)
            setActiveValue(defaultValue);
    }, [value, defaultValue]);
    var id = React.useId();
    React.useEffect(function () {
        if (mode !== 'parent')
            return;
        var container = localRef.current;
        if (!container)
            return;
        var onScroll = function () {
            if (!activeValue)
                return;
            var activeEl = container.querySelector("[data-value=\"".concat(activeValue, "\"][data-highlight=\"true\"]"));
            if (activeEl)
                safeSetBounds(activeEl.getBoundingClientRect());
        };
        container.addEventListener('scroll', onScroll, { passive: true });
        return function () { return container.removeEventListener('scroll', onScroll); };
    }, [mode, activeValue, safeSetBounds]);
    var render = React.useCallback(function (children) {
        var _a;
        if (mode === 'parent') {
            return ((0, jsx_runtime_1.jsxs)("div", { ref: localRef, "data-slot": "motion-highlight-container", className: (0, utils_1.cn)('relative', props === null || props === void 0 ? void 0 : props.containerClassName), children: [(0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { initial: false, children: boundsState && ((0, jsx_runtime_1.jsx)(react_1.motion.div, { "data-slot": "motion-highlight", animate: {
                                top: boundsState.top,
                                left: boundsState.left,
                                width: boundsState.width,
                                height: boundsState.height,
                                opacity: 1,
                            }, initial: {
                                top: boundsState.top,
                                left: boundsState.left,
                                width: boundsState.width,
                                height: boundsState.height,
                                opacity: 0,
                            }, exit: {
                                opacity: 0,
                                transition: __assign(__assign({}, transition), { delay: ((_a = transition === null || transition === void 0 ? void 0 : transition.delay) !== null && _a !== void 0 ? _a : 0) + (exitDelay !== null && exitDelay !== void 0 ? exitDelay : 0) }),
                            }, transition: transition, className: (0, utils_1.cn)('absolute bg-muted z-0', className, activeClassNameState) })) }), children] }));
        }
        return children;
    }, [
        mode,
        props,
        boundsState,
        transition,
        exitDelay,
        className,
        activeClassNameState,
    ]);
    return ((0, jsx_runtime_1.jsx)(MotionHighlightContext.Provider, { value: {
            mode: mode,
            activeValue: activeValue,
            setActiveValue: safeSetActiveValue,
            id: id,
            hover: hover,
            className: className,
            transition: transition,
            disabled: disabled,
            enabled: enabled,
            exitDelay: exitDelay,
            setBounds: safeSetBounds,
            clearBounds: clearBounds,
            activeClassName: activeClassNameState,
            setActiveClassName: setActiveClassNameState,
            forceUpdateBounds: props === null || props === void 0 ? void 0 : props.forceUpdateBounds,
        }, children: enabled
            ? controlledItems
                ? render(children)
                : render(React.Children.map(children, function (child, index) { return ((0, jsx_runtime_1.jsx)(MotionHighlightItem, { className: props === null || props === void 0 ? void 0 : props.itemsClassName, children: child }, index)); }))
            : children }));
}
function getNonOverridingDataAttributes(element, dataAttributes) {
    return Object.keys(dataAttributes).reduce(function (acc, key) {
        if (element.props[key] === undefined) {
            acc[key] = dataAttributes[key];
        }
        return acc;
    }, {});
}
function MotionHighlightItem(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var ref = _a.ref, children = _a.children, id = _a.id, value = _a.value, className = _a.className, transition = _a.transition, _l = _a.disabled, disabled = _l === void 0 ? false : _l, activeClassName = _a.activeClassName, exitDelay = _a.exitDelay, _m = _a.asChild, asChild = _m === void 0 ? false : _m, forceUpdateBounds = _a.forceUpdateBounds, props = __rest(_a, ["ref", "children", "id", "value", "className", "transition", "disabled", "activeClassName", "exitDelay", "asChild", "forceUpdateBounds"]);
    var itemId = React.useId();
    var _o = useMotionHighlight(), activeValue = _o.activeValue, setActiveValue = _o.setActiveValue, mode = _o.mode, setBounds = _o.setBounds, clearBounds = _o.clearBounds, hover = _o.hover, enabled = _o.enabled, contextClassName = _o.className, contextTransition = _o.transition, contextId = _o.id, contextDisabled = _o.disabled, contextExitDelay = _o.exitDelay, contextForceUpdateBounds = _o.forceUpdateBounds, setActiveClassName = _o.setActiveClassName;
    var element = children;
    var childValue = (_f = (_d = (_b = id !== null && id !== void 0 ? id : value) !== null && _b !== void 0 ? _b : (_c = element.props) === null || _c === void 0 ? void 0 : _c['data-value']) !== null && _d !== void 0 ? _d : (_e = element.props) === null || _e === void 0 ? void 0 : _e.id) !== null && _f !== void 0 ? _f : itemId;
    var isActive = activeValue === childValue;
    var isDisabled = disabled === undefined ? contextDisabled : disabled;
    var itemTransition = transition !== null && transition !== void 0 ? transition : contextTransition;
    var localRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return localRef.current; });
    React.useEffect(function () {
        if (mode !== 'parent')
            return;
        var rafId;
        var previousBounds = null;
        var shouldUpdateBounds = forceUpdateBounds === true ||
            (contextForceUpdateBounds && forceUpdateBounds !== false);
        var updateBounds = function () {
            if (!localRef.current)
                return;
            var bounds = localRef.current.getBoundingClientRect();
            if (shouldUpdateBounds) {
                if (previousBounds &&
                    previousBounds.top === bounds.top &&
                    previousBounds.left === bounds.left &&
                    previousBounds.width === bounds.width &&
                    previousBounds.height === bounds.height) {
                    rafId = requestAnimationFrame(updateBounds);
                    return;
                }
                previousBounds = bounds;
                rafId = requestAnimationFrame(updateBounds);
            }
            setBounds(bounds);
        };
        if (isActive) {
            updateBounds();
            setActiveClassName(activeClassName !== null && activeClassName !== void 0 ? activeClassName : '');
        }
        else if (!activeValue)
            clearBounds();
        if (shouldUpdateBounds)
            return function () { return cancelAnimationFrame(rafId); };
    }, [
        mode,
        isActive,
        activeValue,
        setBounds,
        clearBounds,
        activeClassName,
        setActiveClassName,
        forceUpdateBounds,
        contextForceUpdateBounds,
    ]);
    if (!React.isValidElement(children))
        return children;
    var dataAttributes = {
        'data-active': isActive ? 'true' : 'false',
        'aria-selected': isActive,
        'data-disabled': isDisabled,
        'data-value': childValue,
        'data-highlight': true,
    };
    var commonHandlers = hover
        ? {
            onMouseEnter: function (e) {
                var _a, _b;
                setActiveValue(childValue);
                (_b = (_a = element.props).onMouseEnter) === null || _b === void 0 ? void 0 : _b.call(_a, e);
            },
            onMouseLeave: function (e) {
                var _a, _b;
                setActiveValue(null);
                (_b = (_a = element.props).onMouseLeave) === null || _b === void 0 ? void 0 : _b.call(_a, e);
            },
        }
        : {
            onClick: function (e) {
                var _a, _b;
                setActiveValue(childValue);
                (_b = (_a = element.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, e);
            },
        };
    if (asChild) {
        if (mode === 'children') {
            return React.cloneElement(element, __assign(__assign(__assign({ key: childValue, ref: localRef, className: (0, utils_1.cn)('relative', element.props.className) }, getNonOverridingDataAttributes(element, __assign(__assign({}, dataAttributes), { 'data-slot': 'motion-highlight-item-container' }))), commonHandlers), props), (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { initial: false, children: isActive && !isDisabled && ((0, jsx_runtime_1.jsx)(react_1.motion.div, __assign({ layoutId: "transition-background-".concat(contextId), "data-slot": "motion-highlight", className: (0, utils_1.cn)('absolute inset-0 bg-muted z-0', contextClassName, activeClassName), transition: itemTransition, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: {
                                opacity: 0,
                                transition: __assign(__assign({}, itemTransition), { delay: ((_g = itemTransition === null || itemTransition === void 0 ? void 0 : itemTransition.delay) !== null && _g !== void 0 ? _g : 0) +
                                        ((_h = exitDelay !== null && exitDelay !== void 0 ? exitDelay : contextExitDelay) !== null && _h !== void 0 ? _h : 0) }),
                            } }, dataAttributes))) }), (0, jsx_runtime_1.jsx)("div", __assign({ "data-slot": "motion-highlight-item", className: (0, utils_1.cn)('relative z-[1]', className) }, dataAttributes, { children: children }))] }));
        }
        return React.cloneElement(element, __assign(__assign({ ref: localRef }, getNonOverridingDataAttributes(element, __assign(__assign({}, dataAttributes), { 'data-slot': 'motion-highlight-item' }))), commonHandlers));
    }
    return enabled ? ((0, jsx_runtime_1.jsxs)("div", __assign({ ref: localRef, "data-slot": "motion-highlight-item-container", className: (0, utils_1.cn)(mode === 'children' && 'relative', className) }, dataAttributes, props, commonHandlers, { children: [mode === 'children' && ((0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { initial: false, children: isActive && !isDisabled && ((0, jsx_runtime_1.jsx)(react_1.motion.div, __assign({ layoutId: "transition-background-".concat(contextId), "data-slot": "motion-highlight", className: (0, utils_1.cn)('absolute inset-0 bg-muted z-0', contextClassName, activeClassName), transition: itemTransition, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: {
                        opacity: 0,
                        transition: __assign(__assign({}, itemTransition), { delay: ((_j = itemTransition === null || itemTransition === void 0 ? void 0 : itemTransition.delay) !== null && _j !== void 0 ? _j : 0) +
                                ((_k = exitDelay !== null && exitDelay !== void 0 ? exitDelay : contextExitDelay) !== null && _k !== void 0 ? _k : 0) }),
                    } }, dataAttributes))) })), React.cloneElement(element, __assign({ className: (0, utils_1.cn)('relative z-[1]', element.props.className) }, getNonOverridingDataAttributes(element, __assign(__assign({}, dataAttributes), { 'data-slot': 'motion-highlight-item' }))))] }), childValue)) : (children);
}
