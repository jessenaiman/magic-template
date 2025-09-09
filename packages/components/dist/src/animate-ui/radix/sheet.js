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
exports.useSheet = void 0;
exports.Sheet = Sheet;
exports.SheetPortal = SheetPortal;
exports.SheetOverlay = SheetOverlay;
exports.SheetTrigger = SheetTrigger;
exports.SheetClose = SheetClose;
exports.SheetContent = SheetContent;
exports.SheetHeader = SheetHeader;
exports.SheetFooter = SheetFooter;
exports.SheetTitle = SheetTitle;
exports.SheetDescription = SheetDescription;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var radix_ui_1 = require("radix-ui");
var react_1 = require("motion/react");
var class_variance_authority_1 = require("class-variance-authority");
var lucide_react_1 = require("lucide-react");
var utils_1 = require("@/lib/utils");
var SheetContext = React.createContext(undefined);
var useSheet = function () {
    var context = React.useContext(SheetContext);
    if (!context) {
        throw new Error('useSheet must be used within a Sheet');
    }
    return context;
};
exports.useSheet = useSheet;
function Sheet(_a) {
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
    return ((0, jsx_runtime_1.jsx)(SheetContext.Provider, { value: { isOpen: isOpen }, children: (0, jsx_runtime_1.jsx)(radix_ui_1.Dialog.Root, __assign({ "data-slot": "sheet" }, props, { onOpenChange: handleOpenChange, children: children })) }));
}
function SheetTrigger(props) {
    return (0, jsx_runtime_1.jsx)(radix_ui_1.Dialog.Trigger, __assign({ "data-slot": "sheet-trigger" }, props));
}
function SheetClose(props) {
    return (0, jsx_runtime_1.jsx)(radix_ui_1.Dialog.Close, __assign({ "data-slot": "sheet-close" }, props));
}
function SheetPortal(props) {
    return (0, jsx_runtime_1.jsx)(radix_ui_1.Dialog.Portal, __assign({ "data-slot": "sheet-portal" }, props));
}
function SheetOverlay(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(radix_ui_1.Dialog.Overlay, __assign({ "data-slot": "sheet-overlay", className: (0, utils_1.cn)('fixed inset-0 z-50 bg-black/80', className) }, props)));
}
var sheetVariants = (0, class_variance_authority_1.cva)('fixed z-50 gap-4 bg-background p-6 shadow-lg', {
    variants: {
        side: {
            top: 'inset-x-0 top-0 border-b',
            bottom: 'inset-x-0 bottom-0 border-t',
            left: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
            right: 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
        },
    },
    defaultVariants: {
        side: 'right',
    },
});
function SheetContent(_a) {
    var _b = _a.side, side = _b === void 0 ? 'right' : _b, className = _a.className, _c = _a.transition, transition = _c === void 0 ? { type: 'spring', stiffness: 150, damping: 25 } : _c, _d = _a.overlay, overlay = _d === void 0 ? true : _d, children = _a.children, props = __rest(_a, ["side", "className", "transition", "overlay", "children"]);
    var isOpen = useSheet().isOpen;
    return ((0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { children: isOpen && ((0, jsx_runtime_1.jsxs)(SheetPortal, { forceMount: true, "data-slot": "sheet-portal", children: [overlay && ((0, jsx_runtime_1.jsx)(SheetOverlay, { asChild: true, forceMount: true, children: (0, jsx_runtime_1.jsx)(react_1.motion.div, { "data-slot": "sheet-overlay", initial: { opacity: 0, filter: 'blur(4px)' }, animate: { opacity: 1, filter: 'blur(0px)' }, exit: { opacity: 0, filter: 'blur(4px)' }, transition: { duration: 0.2, ease: 'easeInOut' } }, "sheet-overlay") })), (0, jsx_runtime_1.jsx)(radix_ui_1.Dialog.Content, __assign({ asChild: true, forceMount: true }, props, { children: (0, jsx_runtime_1.jsxs)(react_1.motion.div, __assign({ "data-slot": "sheet-content", initial: side === 'right'
                            ? { x: '100%', opacity: 0 }
                            : side === 'left'
                                ? { x: '-100%', opacity: 0 }
                                : side === 'top'
                                    ? { y: '-100%', opacity: 0 }
                                    : { y: '100%', opacity: 0 }, animate: { x: 0, y: 0, opacity: 1 }, exit: side === 'right'
                            ? { x: '100%', opacity: 0 }
                            : side === 'left'
                                ? { x: '-100%', opacity: 0 }
                                : side === 'top'
                                    ? { y: '-100%', opacity: 0 }
                                    : { y: '100%', opacity: 0 }, transition: transition, className: (0, utils_1.cn)(sheetVariants({ side: side }), className) }, props, { children: [children, (0, jsx_runtime_1.jsxs)(radix_ui_1.Dialog.Close, { "data-slot": "sheet-close", className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.X, { className: "h-4 w-4" }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Close" })] })] }), "sheet-content") }))] })) }));
}
function SheetHeader(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ "data-slot": "sheet-header", className: (0, utils_1.cn)('flex flex-col space-y-2 text-center sm:text-left', className) }, props)));
}
function SheetFooter(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ "data-slot": "sheet-footer", className: (0, utils_1.cn)('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className) }, props)));
}
function SheetTitle(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(radix_ui_1.Dialog.Title, __assign({ "data-slot": "sheet-title", className: (0, utils_1.cn)('text-lg font-semibold text-foreground', className) }, props)));
}
function SheetDescription(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(radix_ui_1.Dialog.Description, __assign({ "data-slot": "sheet-description", className: (0, utils_1.cn)('text-sm text-muted-foreground', className) }, props)));
}
