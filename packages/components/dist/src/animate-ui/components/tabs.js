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
exports.Tabs = Tabs;
exports.TabsList = TabsList;
exports.TabsTrigger = TabsTrigger;
exports.TabsContents = TabsContents;
exports.TabsContent = TabsContent;
exports.useTabs = useTabs;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
var utils_1 = require("@/lib/utils");
var motion_highlight_1 = require("@/packages/ui/src/animate-ui/effects/motion-highlight");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var TabsContext = React.createContext(undefined);
function useTabs() {
    var context = React.useContext(TabsContext);
    if (!context) {
        throw new Error('useTabs must be used within a TabsProvider');
    }
    return context;
}
function Tabs(_a) {
    var defaultValue = _a.defaultValue, value = _a.value, onValueChange = _a.onValueChange, children = _a.children, className = _a.className, props = __rest(_a, ["defaultValue", "value", "onValueChange", "children", "className"]);
    var _b = React.useState(defaultValue !== null && defaultValue !== void 0 ? defaultValue : undefined), activeValue = _b[0], setActiveValue = _b[1];
    var triggersRef = React.useRef(new Map());
    var initialSet = React.useRef(false);
    var isControlled = value !== undefined;
    React.useEffect(function () {
        if (!isControlled &&
            activeValue === undefined &&
            triggersRef.current.size > 0 &&
            !initialSet.current) {
            var firstTab = Array.from(triggersRef.current.keys())[0];
            setActiveValue(firstTab);
            initialSet.current = true;
        }
    }, [activeValue, isControlled]);
    var registerTrigger = function (value, node) {
        if (node) {
            triggersRef.current.set(value, node);
            if (!isControlled && activeValue === undefined && !initialSet.current) {
                setActiveValue(value);
                initialSet.current = true;
            }
        }
        else {
            triggersRef.current.delete(value);
        }
    };
    var handleValueChange = function (val) {
        if (!isControlled)
            setActiveValue(val);
        else
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(val);
    };
    return ((0, jsx_runtime_1.jsx)(TabsContext.Provider, { value: {
            activeValue: (value !== null && value !== void 0 ? value : activeValue),
            handleValueChange: handleValueChange,
            registerTrigger: registerTrigger,
        }, children: (0, jsx_runtime_1.jsx)("div", __assign({ "data-slot": "tabs", className: (0, utils_1.cn)('flex flex-col gap-2', className) }, props, { children: children })) }));
}
function TabsList(_a) {
    var children = _a.children, className = _a.className, activeClassName = _a.activeClassName, _b = _a.transition, transition = _b === void 0 ? {
        type: 'spring',
        stiffness: 200,
        damping: 25,
    } : _b, props = __rest(_a, ["children", "className", "activeClassName", "transition"]);
    var activeValue = useTabs().activeValue;
    return ((0, jsx_runtime_1.jsx)(motion_highlight_1.MotionHighlight, { controlledItems: true, className: (0, utils_1.cn)('rounded-sm bg-background shadow-sm', activeClassName), value: activeValue, transition: transition, children: (0, jsx_runtime_1.jsx)("div", __assign({ role: "tablist", "data-slot": "tabs-list", className: (0, utils_1.cn)('bg-muted text-muted-foreground inline-flex h-10 w-fit items-center justify-center rounded-lg p-[4px]', className) }, props, { children: children })) }));
}
function TabsTrigger(_a) {
    var ref = _a.ref, value = _a.value, children = _a.children, className = _a.className, props = __rest(_a, ["ref", "value", "children", "className"]);
    var _b = useTabs(), activeValue = _b.activeValue, handleValueChange = _b.handleValueChange, registerTrigger = _b.registerTrigger;
    var localRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return localRef.current; });
    React.useEffect(function () {
        registerTrigger(value, localRef.current);
        return function () { return registerTrigger(value, null); };
    }, [value, registerTrigger]);
    return ((0, jsx_runtime_1.jsx)(motion_highlight_1.MotionHighlightItem, { value: value, className: "size-full", children: (0, jsx_runtime_1.jsx)(react_1.motion.button, __assign({ ref: localRef, "data-slot": "tabs-trigger", role: "tab", whileTap: { scale: 0.95 }, onClick: function () { return handleValueChange(value); }, "data-state": activeValue === value ? 'active' : 'inactive', className: (0, utils_1.cn)('inline-flex cursor-pointer items-center size-full justify-center whitespace-nowrap rounded-sm px-2 py-1 text-sm font-medium ring-offset-background transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground z-[1]', className) }, props, { children: children })) }));
}
function TabsContents(_a) {
    var children = _a.children, className = _a.className, _b = _a.transition, transition = _b === void 0 ? {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        bounce: 0,
        restDelta: 0.01,
    } : _b, props = __rest(_a, ["children", "className", "transition"]);
    var activeValue = useTabs().activeValue;
    var childrenArray = React.Children.toArray(children);
    var activeIndex = childrenArray.findIndex(function (child) {
        return React.isValidElement(child) &&
            typeof child.props === 'object' &&
            child.props !== null &&
            'value' in child.props &&
            child.props.value === activeValue;
    });
    return ((0, jsx_runtime_1.jsx)("div", __assign({ "data-slot": "tabs-contents", className: (0, utils_1.cn)('overflow-hidden', className) }, props, { children: (0, jsx_runtime_1.jsx)(react_1.motion.div, { className: "flex -mx-2", animate: { x: activeIndex * -100 + '%' }, transition: transition, children: childrenArray.map(function (child, index) { return ((0, jsx_runtime_1.jsx)("div", { className: "w-full shrink-0 px-2", children: child }, index)); }) }) })));
}
function TabsContent(_a) {
    var children = _a.children, value = _a.value, className = _a.className, props = __rest(_a, ["children", "value", "className"]);
    var activeValue = useTabs().activeValue;
    var isActive = activeValue === value;
    return ((0, jsx_runtime_1.jsx)(react_1.motion.div, __assign({ role: "tabpanel", "data-slot": "tabs-content", className: (0, utils_1.cn)('overflow-hidden', className), initial: { filter: 'blur(0px)' }, animate: { filter: isActive ? 'blur(0px)' : 'blur(4px)' }, exit: { filter: 'blur(0px)' }, transition: { type: 'spring', stiffness: 200, damping: 25 } }, props, { children: children })));
}
