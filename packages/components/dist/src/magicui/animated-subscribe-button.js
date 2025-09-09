"use strict";
"use client";
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
exports.AnimatedSubscribeButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("@/lib/utils");
var react_1 = require("motion/react");
var react_2 = __importStar(require("react"));
exports.AnimatedSubscribeButton = react_2.default.forwardRef(function (_a, ref) {
    var subscribeStatus = _a.subscribeStatus, onClick = _a.onClick, className = _a.className, children = _a.children, props = __rest(_a, ["subscribeStatus", "onClick", "className", "children"]);
    var isControlled = subscribeStatus !== undefined; // controlled vs uncontrolled check
    var _b = (0, react_2.useState)(subscribeStatus !== null && subscribeStatus !== void 0 ? subscribeStatus : false), isSubscribed = _b[0], setIsSubscribed = _b[1];
    (0, react_2.useEffect)(function () {
        if (isControlled) {
            setIsSubscribed(subscribeStatus);
        }
    }, [subscribeStatus, isControlled]);
    if (react_2.default.Children.count(children) !== 2 ||
        !react_2.default.Children.toArray(children).every(function (child) { return react_2.default.isValidElement(child) && child.type === "span"; })) {
        throw new Error("AnimatedSubscribeButton expects two children, both of which must be <span> elements.");
    }
    var childrenArray = react_2.default.Children.toArray(children);
    var initialChild = childrenArray[0];
    var changeChild = childrenArray[1];
    return ((0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { mode: "wait", children: isSubscribed ? ((0, jsx_runtime_1.jsx)(react_1.motion.button, __assign({ ref: ref, className: (0, utils_1.cn)("relative flex h-10 w-fit items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-primary-foreground", className), onClick: function (e) {
                if (!isControlled) {
                    setIsSubscribed(false); // Only toggle manually if uncontrolled
                }
                onClick === null || onClick === void 0 ? void 0 : onClick(e);
            }, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }, props, { children: (0, jsx_runtime_1.jsxs)(react_1.motion.span, { className: "relative flex h-full w-full items-center justify-center font-semibold", initial: { y: -50 }, animate: { y: 0 }, children: [changeChild, " "] }, "action") }))) : ((0, jsx_runtime_1.jsx)(react_1.motion.button, __assign({ ref: ref, className: (0, utils_1.cn)("relative flex h-10 w-fit cursor-pointer items-center justify-center rounded-lg border-none bg-primary px-6 text-primary-foreground", className), onClick: function (e) {
                if (!isControlled) {
                    setIsSubscribed(true); // Only toggle manually if uncontrolled
                }
                onClick === null || onClick === void 0 ? void 0 : onClick(e);
            }, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }, props, { children: (0, jsx_runtime_1.jsxs)(react_1.motion.span, { className: "relative flex items-center justify-center font-semibold", initial: { x: 0 }, exit: { x: 50, transition: { duration: 0.1 } }, children: [initialChild, " "] }, "reaction") }))) }));
});
exports.AnimatedSubscribeButton.displayName = "AnimatedSubscribeButton";
