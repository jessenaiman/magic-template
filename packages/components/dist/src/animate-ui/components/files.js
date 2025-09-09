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
exports.Files = Files;
exports.Folder = Folder;
exports.File = File;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("motion/react");
var lucide_react_1 = require("lucide-react");
var utils_1 = require("@/lib/utils");
var accordion_1 = require("@/packages/ui/src/animate-ui/radix/accordion");
var motion_highlight_1 = require("@/packages/ui/src/animate-ui/effects/motion-highlight");
function FileButton(_a) {
    var children = _a.children, className = _a.className, icons = _a.icons, icon = _a.icon, open = _a.open, sideComponent = _a.sideComponent, props = __rest(_a, ["children", "className", "icons", "icon", "open", "sideComponent"]);
    return ((0, jsx_runtime_1.jsx)(motion_highlight_1.MotionHighlightItem, { className: "size-full", children: (0, jsx_runtime_1.jsxs)("div", __assign({ "data-slot": "file-button", className: (0, utils_1.cn)('flex items-center truncate gap-2 p-2 h-10 relative z-10 rounded-lg w-full cursor-default', className) }, props, { children: [(0, jsx_runtime_1.jsxs)("span", { className: "flex [&_svg]:size-4 [&_svg]:shrink-0 items-center gap-2 shrink-1 truncate", children: [icon
                            ? typeof icon !== 'string'
                                ? icon
                                : null
                            : icons && ((0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { mode: "wait", children: (0, jsx_runtime_1.jsx)(react_1.motion.span, { initial: { scale: 0.9 }, animate: { scale: 1 }, exit: { scale: 0.9 }, transition: { duration: 0.15 }, children: open
                                        ? typeof icons.open !== 'string'
                                            ? icons.open
                                            : null
                                        : typeof icons.close !== 'string'
                                            ? icons.close
                                            : null }, open ? 'open' : 'close') })), (0, jsx_runtime_1.jsx)("span", { className: "shrink-1 text-sm block truncate break-words", children: children })] }), sideComponent] })) }));
}
function Files(_a) {
    var children = _a.children, className = _a.className, activeClassName = _a.activeClassName, defaultOpen = _a.defaultOpen, open = _a.open, onOpenChange = _a.onOpenChange, props = __rest(_a, ["children", "className", "activeClassName", "defaultOpen", "open", "onOpenChange"]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ "data-slot": "files", className: (0, utils_1.cn)('relative size-full rounded-xl border bg-background overflow-auto', className) }, props, { children: (0, jsx_runtime_1.jsx)(motion_highlight_1.MotionHighlight, { controlledItems: true, mode: "parent", hover: true, className: (0, utils_1.cn)('bg-muted rounded-lg pointer-events-none', activeClassName), children: (0, jsx_runtime_1.jsx)(accordion_1.Accordion, { type: "multiple", className: "p-2", defaultValue: defaultOpen, value: open, onValueChange: onOpenChange, children: children }) }) })));
}
function FolderTrigger(_a) {
    var children = _a.children, className = _a.className, sideComponent = _a.sideComponent, props = __rest(_a, ["children", "className", "sideComponent"]);
    var isOpen = (0, accordion_1.useAccordionItem)().isOpen;
    return ((0, jsx_runtime_1.jsx)(accordion_1.AccordionTrigger, __assign({ "data-slot": "folder-trigger", className: "h-auto py-0 hover:no-underline font-normal relative z-10 max-w-full" }, props, { chevron: false, children: (0, jsx_runtime_1.jsx)(FileButton, { open: isOpen, icons: { open: (0, jsx_runtime_1.jsx)(lucide_react_1.FolderOpenIcon, {}), close: (0, jsx_runtime_1.jsx)(lucide_react_1.FolderIcon, {}) }, className: className, sideComponent: sideComponent, children: children }) })));
}
function Folder(_a) {
    var children = _a.children, className = _a.className, name = _a.name, open = _a.open, defaultOpen = _a.defaultOpen, onOpenChange = _a.onOpenChange, sideComponent = _a.sideComponent, props = __rest(_a, ["children", "className", "name", "open", "defaultOpen", "onOpenChange", "sideComponent"]);
    return ((0, jsx_runtime_1.jsxs)(accordion_1.AccordionItem, __assign({ "data-slot": "folder", value: name, className: "relative border-b-0" }, props, { children: [(0, jsx_runtime_1.jsx)(FolderTrigger, { className: className, sideComponent: sideComponent, children: name }), children && ((0, jsx_runtime_1.jsx)(accordion_1.AccordionContent, { className: "relative pb-0 !ml-7 before:absolute before:-left-3 before:inset-y-0 before:w-px before:h-full before:bg-border", children: (0, jsx_runtime_1.jsx)(accordion_1.Accordion, { type: "multiple", defaultValue: defaultOpen, value: open, onValueChange: onOpenChange, children: children }) }))] })));
}
function File(_a) {
    var name = _a.name, className = _a.className, sideComponent = _a.sideComponent, props = __rest(_a, ["name", "className", "sideComponent"]);
    return ((0, jsx_runtime_1.jsx)(FileButton, __assign({ "data-slot": "file", icon: (0, jsx_runtime_1.jsx)(lucide_react_1.FileIcon, {}), className: className, sideComponent: sideComponent }, props, { children: name })));
}
