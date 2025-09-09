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
exports.useAccordionItem = void 0;
exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.AccordionTrigger = AccordionTrigger;
exports.AccordionContent = AccordionContent;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var radix_ui_1 = require("radix-ui");
var lucide_react_1 = require("lucide-react");
var react_1 = require("motion/react");
var utils_1 = require("@/lib/utils");
var AccordionItemContext = React.createContext(undefined);
var useAccordionItem = function () {
    var context = React.useContext(AccordionItemContext);
    if (!context) {
        throw new Error('useAccordionItem must be used within an AccordionItem');
    }
    return context;
};
exports.useAccordionItem = useAccordionItem;
function Accordion(props) {
    return (0, jsx_runtime_1.jsx)(radix_ui_1.Accordion.Root, __assign({ "data-slot": "accordion" }, props));
}
function AccordionItem(_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    return ((0, jsx_runtime_1.jsx)(AccordionItemContext.Provider, { value: { isOpen: isOpen, setIsOpen: setIsOpen }, children: (0, jsx_runtime_1.jsx)(radix_ui_1.Accordion.Item, __assign({ "data-slot": "accordion-item", className: (0, utils_1.cn)('border-b', className) }, props, { children: children })) }));
}
function AccordionTrigger(_a) {
    var ref = _a.ref, className = _a.className, children = _a.children, _b = _a.transition, transition = _b === void 0 ? { type: 'spring', stiffness: 150, damping: 22 } : _b, _c = _a.chevron, chevron = _c === void 0 ? true : _c, props = __rest(_a, ["ref", "className", "children", "transition", "chevron"]);
    var triggerRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return triggerRef.current; });
    var _d = useAccordionItem(), isOpen = _d.isOpen, setIsOpen = _d.setIsOpen;
    React.useEffect(function () {
        var node = triggerRef.current;
        if (!node)
            return;
        var observer = new MutationObserver(function (mutationsList) {
            mutationsList.forEach(function (mutation) {
                if (mutation.attributeName === 'data-state') {
                    var currentState = node.getAttribute('data-state');
                    setIsOpen(currentState === 'open');
                }
            });
        });
        observer.observe(node, {
            attributes: true,
            attributeFilter: ['data-state'],
        });
        var initialState = node.getAttribute('data-state');
        setIsOpen(initialState === 'open');
        return function () {
            observer.disconnect();
        };
    }, [setIsOpen]);
    return ((0, jsx_runtime_1.jsx)(radix_ui_1.Accordion.Header, { "data-slot": "accordion-header", className: "flex", children: (0, jsx_runtime_1.jsxs)(radix_ui_1.Accordion.Trigger, __assign({ ref: triggerRef, "data-slot": "accordion-trigger", className: (0, utils_1.cn)('flex flex-1 text-start items-center justify-between py-4 font-medium hover:underline', className) }, props, { children: [children, chevron && ((0, jsx_runtime_1.jsx)(react_1.motion.div, { "data-slot": "accordion-trigger-chevron", animate: { rotate: isOpen ? 180 : 0 }, transition: transition, children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronDown, { className: "size-5 shrink-0" }) }))] })) }));
}
function AccordionContent(_a) {
    var className = _a.className, children = _a.children, _b = _a.transition, transition = _b === void 0 ? { type: 'spring', stiffness: 150, damping: 22 } : _b, props = __rest(_a, ["className", "children", "transition"]);
    var isOpen = useAccordionItem().isOpen;
    return ((0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { children: isOpen && ((0, jsx_runtime_1.jsx)(radix_ui_1.Accordion.Content, __assign({ forceMount: true }, props, { children: (0, jsx_runtime_1.jsx)(react_1.motion.div, __assign({ "data-slot": "accordion-content", initial: { height: 0, opacity: 0, '--mask-stop': '0%' }, animate: { height: 'auto', opacity: 1, '--mask-stop': '100%' }, exit: { height: 0, opacity: 0, '--mask-stop': '0%' }, transition: transition, style: {
                    maskImage: 'linear-gradient(black var(--mask-stop), transparent var(--mask-stop))',
                    WebkitMaskImage: 'linear-gradient(black var(--mask-stop), transparent var(--mask-stop))',
                }, className: "overflow-hidden" }, props, { children: (0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)('pb-4 pt-0 text-sm', className), children: children }) }), "accordion-content") }))) }));
}
