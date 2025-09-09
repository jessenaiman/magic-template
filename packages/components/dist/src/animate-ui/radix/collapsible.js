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
exports.useCollapsible = void 0;
exports.Collapsible = Collapsible;
exports.CollapsibleTrigger = CollapsibleTrigger;
exports.CollapsibleContent = CollapsibleContent;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var radix_ui_1 = require("radix-ui");
var react_1 = require("motion/react");
var CollapsibleContext = React.createContext(undefined);
var useCollapsible = function () {
    var context = React.useContext(CollapsibleContext);
    if (!context) {
        throw new Error('useCollapsible must be used within a Collapsible');
    }
    return context;
};
exports.useCollapsible = useCollapsible;
function Collapsible(_a) {
    var _b, _c;
    var children = _a.children, props = __rest(_a, ["children"]);
    var _d = React.useState((_c = (_b = props === null || props === void 0 ? void 0 : props.open) !== null && _b !== void 0 ? _b : props === null || props === void 0 ? void 0 : props.defaultOpen) !== null && _c !== void 0 ? _c : false), isOpen = _d[0], setIsOpen = _d[1];
    React.useEffect(function () {
        if ((props === null || props === void 0 ? void 0 : props.open) !== undefined)
            setIsOpen(props.open);
    }, [props === null || props === void 0 ? void 0 : props.open]);
    var handleOpenChange = React.useCallback(function (open) {
        var _a;
        setIsOpen(open);
        (_a = props.onOpenChange) === null || _a === void 0 ? void 0 : _a.call(props, open);
    }, [props]);
    return ((0, jsx_runtime_1.jsx)(CollapsibleContext.Provider, { value: { isOpen: isOpen }, children: (0, jsx_runtime_1.jsx)(radix_ui_1.Collapsible.Root, __assign({ "data-slot": "collapsible" }, props, { onOpenChange: handleOpenChange, children: children })) }));
}
function CollapsibleTrigger(props) {
    return ((0, jsx_runtime_1.jsx)(radix_ui_1.Collapsible.Trigger, __assign({ "data-slot": "collapsible-trigger" }, props)));
}
function CollapsibleContent(_a) {
    var className = _a.className, children = _a.children, _b = _a.transition, transition = _b === void 0 ? { type: 'spring', stiffness: 150, damping: 22 } : _b, props = __rest(_a, ["className", "children", "transition"]);
    var isOpen = useCollapsible().isOpen;
    return ((0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { children: isOpen && ((0, jsx_runtime_1.jsx)(radix_ui_1.Collapsible.Content, __assign({ asChild: true, forceMount: true }, props, { children: (0, jsx_runtime_1.jsx)(react_1.motion.div, __assign({ "data-slot": "collapsible-content", layout: true, initial: { opacity: 0, height: 0, overflow: 'hidden' }, animate: { opacity: 1, height: 'auto', overflow: 'hidden' }, exit: { opacity: 0, height: 0, overflow: 'hidden' }, transition: transition, className: className }, props, { children: children }), "collapsible-content") }))) }));
}
