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
exports.AvatarGroup = AvatarGroup;
exports.AvatarGroupTooltip = AvatarGroupTooltip;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
var utils_1 = require("@/lib/utils");
var tooltip_1 = require("@/packages/ui/src/animate-ui/components/tooltip");
function AvatarContainer(_a) {
    var children = _a.children, zIndex = _a.zIndex, transition = _a.transition, translate = _a.translate, props = __rest(_a, ["children", "zIndex", "transition", "translate"]);
    return ((0, jsx_runtime_1.jsx)(tooltip_1.Tooltip, __assign({}, props, { children: (0, jsx_runtime_1.jsx)(tooltip_1.TooltipTrigger, { children: (0, jsx_runtime_1.jsx)(react_1.motion.div, { "data-slot": "avatar-container", initial: "initial", whileHover: "hover", whileTap: "hover", className: "relative", style: { zIndex: zIndex }, children: (0, jsx_runtime_1.jsx)(react_1.motion.div, { variants: {
                        initial: { y: 0 },
                        hover: { y: translate },
                    }, transition: transition, children: children }) }) }) })));
}
function AvatarGroupTooltip(props) {
    return (0, jsx_runtime_1.jsx)(tooltip_1.TooltipContent, __assign({}, props));
}
function AvatarGroup(_a) {
    var ref = _a.ref, children = _a.children, className = _a.className, _b = _a.transition, transition = _b === void 0 ? { type: 'spring', stiffness: 300, damping: 17 } : _b, _c = _a.invertOverlap, invertOverlap = _c === void 0 ? false : _c, _d = _a.translate, translate = _d === void 0 ? '-30%' : _d, _e = _a.tooltipProps, tooltipProps = _e === void 0 ? { side: 'top', sideOffset: 24 } : _e, props = __rest(_a, ["ref", "children", "className", "transition", "invertOverlap", "translate", "tooltipProps"]);
    return ((0, jsx_runtime_1.jsx)(tooltip_1.TooltipProvider, { openDelay: 0, closeDelay: 0, children: (0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, "data-slot": "avatar-group", className: (0, utils_1.cn)('flex flex-row -space-x-2 items-center h-8', className) }, props, { children: children === null || children === void 0 ? void 0 : children.map(function (child, index) { return ((0, jsx_runtime_1.jsx)(AvatarContainer, __assign({ zIndex: invertOverlap ? React.Children.count(children) - index : index, transition: transition, translate: translate }, tooltipProps, { children: child }), index)); }) })) }));
}
