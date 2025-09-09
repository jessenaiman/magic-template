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
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuShortcut = DropdownMenuShortcut;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuPortal = DropdownMenuPortal;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var radix_ui_1 = require("radix-ui");
var lucide_react_1 = require("lucide-react");
var react_1 = require("motion/react");
var utils_1 = require("@/lib/utils");
var motion_highlight_1 = require("@/packages/ui/src/animate-ui/effects/motion-highlight");
var DropdownMenuContext = React.createContext(undefined);
var useDropdownMenu = function () {
    var context = React.useContext(DropdownMenuContext);
    if (!context) {
        throw new Error('useDropdownMenu must be used within a DropdownMenu');
    }
    return context;
};
function DropdownMenu(_a) {
    var _b, _c;
    var children = _a.children, _d = _a.transition, transition = _d === void 0 ? { type: 'spring', stiffness: 350, damping: 35 } : _d, _e = _a.animateOnHover, animateOnHover = _e === void 0 ? true : _e, props = __rest(_a, ["children", "transition", "animateOnHover"]);
    var _f = React.useState((_c = (_b = props === null || props === void 0 ? void 0 : props.open) !== null && _b !== void 0 ? _b : props === null || props === void 0 ? void 0 : props.defaultOpen) !== null && _c !== void 0 ? _c : false), isOpen = _f[0], setIsOpen = _f[1];
    React.useEffect(function () {
        if ((props === null || props === void 0 ? void 0 : props.open) !== undefined)
            setIsOpen(props.open);
    }, [props === null || props === void 0 ? void 0 : props.open]);
    var handleOpenChange = React.useCallback(function (open) {
        var _a;
        setIsOpen(open);
        (_a = props.onOpenChange) === null || _a === void 0 ? void 0 : _a.call(props, open);
    }, [props]);
    return ((0, jsx_runtime_1.jsx)(DropdownMenuContext.Provider, { value: { isOpen: isOpen, highlightTransition: transition, animateOnHover: animateOnHover }, children: (0, jsx_runtime_1.jsx)(radix_ui_1.DropdownMenu.Root, __assign({ "data-slot": "dropdown-menu" }, props, { onOpenChange: handleOpenChange, children: children })) }));
}
function DropdownMenuTrigger(props) {
    return ((0, jsx_runtime_1.jsx)(radix_ui_1.DropdownMenu.Trigger, __assign({ "data-slot": "dropdown-menu-trigger" }, props)));
}
function DropdownMenuGroup(props) {
    return ((0, jsx_runtime_1.jsx)(radix_ui_1.DropdownMenu.Group, __assign({ "data-slot": "dropdown-menu-group" }, props)));
}
function DropdownMenuPortal(props) {
    return ((0, jsx_runtime_1.jsx)(radix_ui_1.DropdownMenu.Portal, __assign({ "data-slot": "dropdown-menu-portal" }, props)));
}
function DropdownMenuSub(props) {
    return (0, jsx_runtime_1.jsx)(radix_ui_1.DropdownMenu.Sub, __assign({ "data-slot": "dropdown-menu-sub" }, props));
}
function DropdownMenuRadioGroup(props) {
    return ((0, jsx_runtime_1.jsx)(radix_ui_1.DropdownMenu.RadioGroup, __assign({ "data-slot": "dropdown-menu-radio-group" }, props)));
}
function DropdownMenuSubTrigger(_a) {
    var className = _a.className, children = _a.children, inset = _a.inset, disabled = _a.disabled, props = __rest(_a, ["className", "children", "inset", "disabled"]);
    return ((0, jsx_runtime_1.jsx)(motion_highlight_1.MotionHighlightItem, { disabled: disabled, children: (0, jsx_runtime_1.jsx)(radix_ui_1.DropdownMenu.SubTrigger, __assign({}, props, { disabled: disabled, asChild: true, children: (0, jsx_runtime_1.jsxs)(react_1.motion.div, { "data-slot": "dropdown-menu-sub-trigger", "data-inset": inset, "data-disabled": disabled, whileTap: { scale: 0.95 }, className: (0, utils_1.cn)("[&:not([data-highlight])]:focus:bg-accent focus:text-accent-foreground [&:not([data-highlight])]:data-[state=open]:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:[&_[data-chevron]]:rotate-90 [&_[data-chevron]]:transition-transform [&_[data-chevron]]:duration-150 [&_[data-chevron]]:ease-in-out [&_svg:not([class*='text-'])]:text-muted-foreground relative z-[1] flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && 'pl-8', className), children: [children, (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRight, { "data-chevron": true, className: "ml-auto" })] }) })) }));
}
function DropdownMenuSubContent(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(radix_ui_1.DropdownMenu.SubContent, __assign({ "data-slot": "dropdown-menu-sub-content", className: (0, utils_1.cn)('z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]', className) }, props)));
}
function DropdownMenuContent(_a) {
    var className = _a.className, children = _a.children, _b = _a.sideOffset, sideOffset = _b === void 0 ? 4 : _b, _c = _a.transition, transition = _c === void 0 ? { duration: 0.2 } : _c, props = __rest(_a, ["className", "children", "sideOffset", "transition"]);
    var _d = useDropdownMenu(), isOpen = _d.isOpen, highlightTransition = _d.highlightTransition, animateOnHover = _d.animateOnHover;
    return ((0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { children: isOpen && ((0, jsx_runtime_1.jsx)(radix_ui_1.DropdownMenu.Portal, { forceMount: true, "data-slot": "dropdown-menu-portal", children: (0, jsx_runtime_1.jsx)(radix_ui_1.DropdownMenu.Content, __assign({ sideOffset: sideOffset, asChild: true }, props, { children: (0, jsx_runtime_1.jsx)(react_1.motion.div, __assign({ "data-slot": "dropdown-menu-content", className: (0, utils_1.cn)('z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]', className), initial: {
                        opacity: 0,
                        scale: 0.95,
                    }, animate: {
                        opacity: 1,
                        scale: 1,
                    }, exit: {
                        opacity: 0,
                        scale: 0.95,
                    }, transition: transition, style: { willChange: 'opacity, transform' } }, props, { children: (0, jsx_runtime_1.jsx)(motion_highlight_1.MotionHighlight, { hover: true, className: "rounded-sm", controlledItems: true, transition: highlightTransition, enabled: animateOnHover, children: children }) }), "dropdown-menu-content") })) })) }));
}
function DropdownMenuItem(_a) {
    var className = _a.className, children = _a.children, inset = _a.inset, disabled = _a.disabled, _b = _a.variant, variant = _b === void 0 ? 'default' : _b, props = __rest(_a, ["className", "children", "inset", "disabled", "variant"]);
    return ((0, jsx_runtime_1.jsx)(motion_highlight_1.MotionHighlightItem, { activeClassName: variant === 'default'
            ? 'bg-accent'
            : 'bg-destructive/10 dark:bg-destructive/20', disabled: disabled, children: (0, jsx_runtime_1.jsx)(radix_ui_1.DropdownMenu.Item, __assign({}, props, { disabled: disabled, asChild: true, children: (0, jsx_runtime_1.jsx)(react_1.motion.div, { "data-slot": "dropdown-menu-item", "data-inset": inset, "data-variant": variant, "data-disabled": disabled, whileTap: { scale: 0.95 }, className: (0, utils_1.cn)("[&:not([data-highlight])]:focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive [&:not([data-highlight])]:data-[variant=destructive]:focus:bg-destructive/10 dark:[&:not([data-highlight])]:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative z-[1] flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus-visible:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && 'pl-8', className), children: children }) })) }));
}
function DropdownMenuCheckboxItem(_a) {
    var className = _a.className, children = _a.children, checked = _a.checked, disabled = _a.disabled, props = __rest(_a, ["className", "children", "checked", "disabled"]);
    return ((0, jsx_runtime_1.jsx)(motion_highlight_1.MotionHighlightItem, { disabled: disabled, children: (0, jsx_runtime_1.jsx)(radix_ui_1.DropdownMenu.CheckboxItem, __assign({}, props, { checked: checked, disabled: disabled, asChild: true, children: (0, jsx_runtime_1.jsxs)(react_1.motion.div, { "data-slot": "dropdown-menu-checkbox-item", "data-disabled": disabled, whileTap: { scale: 0.95 }, className: (0, utils_1.cn)("[&:not([data-highlight])]:focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(radix_ui_1.DropdownMenu.ItemIndicator, { "data-slot": "dropdown-menu-checkbox-item-indicator", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Check, { className: "size-4" }) }) }), children] }) })) }));
}
function DropdownMenuRadioItem(_a) {
    var className = _a.className, children = _a.children, disabled = _a.disabled, props = __rest(_a, ["className", "children", "disabled"]);
    return ((0, jsx_runtime_1.jsx)(motion_highlight_1.MotionHighlightItem, { disabled: disabled, children: (0, jsx_runtime_1.jsx)(radix_ui_1.DropdownMenu.RadioItem, __assign({}, props, { disabled: disabled, asChild: true, children: (0, jsx_runtime_1.jsxs)(react_1.motion.div, { "data-slot": "dropdown-menu-radio-item", "data-disabled": disabled, whileTap: { scale: 0.95 }, className: (0, utils_1.cn)("[&:not([data-highlight])]:focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), children: [(0, jsx_runtime_1.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(radix_ui_1.DropdownMenu.ItemIndicator, { "data-slot": "dropdown-menu-radio-item-indicator", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Circle, { className: "size-2 fill-current" }) }) }), children] }) })) }));
}
function DropdownMenuLabel(_a) {
    var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
    return ((0, jsx_runtime_1.jsx)(radix_ui_1.DropdownMenu.Label, __assign({ "data-slot": "dropdown-menu-label", "data-inset": inset, className: (0, utils_1.cn)('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className) }, props)));
}
function DropdownMenuSeparator(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(radix_ui_1.DropdownMenu.Separator, __assign({ "data-slot": "dropdown-menu-separator", className: (0, utils_1.cn)('-mx-1 my-1 h-px bg-border', className) }, props)));
}
function DropdownMenuShortcut(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)("span", __assign({ "data-slot": "dropdown-menu-shortcut", className: (0, utils_1.cn)('text-muted-foreground ml-auto text-xs tracking-widest', className) }, props)));
}
