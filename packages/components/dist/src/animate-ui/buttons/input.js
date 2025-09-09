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
exports.useInputButton = void 0;
exports.InputButton = InputButton;
exports.InputButtonProvider = InputButtonProvider;
exports.InputButtonAction = InputButtonAction;
exports.InputButtonSubmit = InputButtonSubmit;
exports.InputButtonInput = InputButtonInput;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
var lucide_react_1 = require("lucide-react");
var utils_1 = require("@/src/lib/utils");
var InputButtonContext = React.createContext(undefined);
var useInputButton = function () {
    var context = React.useContext(InputButtonContext);
    if (!context) {
        throw new Error('useInputButton must be used within a InputButton');
    }
    return context;
};
exports.useInputButton = useInputButton;
function InputButtonProvider(_a) {
    var className = _a.className, _b = _a.transition, transition = _b === void 0 ? { type: 'spring', stiffness: 300, damping: 20 } : _b, showInput = _a.showInput, setShowInput = _a.setShowInput, id = _a.id, props = __rest(_a, ["className", "transition", "showInput", "setShowInput", "id"]);
    var localId = React.useId();
    var _c = React.useState(false), localShowInput = _c[0], setLocalShowInput = _c[1];
    return ((0, jsx_runtime_1.jsx)(InputButtonContext.Provider, { value: {
            showInput: showInput !== null && showInput !== void 0 ? showInput : localShowInput,
            setShowInput: setShowInput !== null && setShowInput !== void 0 ? setShowInput : setLocalShowInput,
            transition: transition,
            id: id !== null && id !== void 0 ? id : localId,
        }, children: (0, jsx_runtime_1.jsx)("div", __assign({ "data-slot": "input-button-provider", className: (0, utils_1.cn)('relative w-fit flex items-center justify-center h-10', (showInput || localShowInput) && 'w-full max-w-[400px]', className) }, props)) }));
}
function InputButton(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(react_1.motion.div, __assign({ "data-slot": "input-button", className: (0, utils_1.cn)('flex size-full', className) }, props)));
}
function InputButtonAction(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var _b = useInputButton(), transition = _b.transition, setShowInput = _b.setShowInput, id = _b.id;
    return ((0, jsx_runtime_1.jsx)(react_1.motion.button, __assign({ "data-slot": "input-button-action", className: (0, utils_1.cn)('bg-background text-sm whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive rounded-full border text-background-foreground cursor-pointer pl-4 pr-12 size-full font-medium', className), layoutId: "input-button-action-".concat(id), transition: transition, onClick: function () { return setShowInput(function (prev) { return !prev; }); } }, props)));
}
function InputButtonSubmit(_a) {
    var className = _a.className, children = _a.children, _b = _a.icon, Icon = _b === void 0 ? lucide_react_1.ArrowRight : _b, props = __rest(_a, ["className", "children", "icon"]);
    var _c = useInputButton(), transition = _c.transition, showInput = _c.showInput, setShowInput = _c.setShowInput, id = _c.id;
    return ((0, jsx_runtime_1.jsx)(react_1.motion.button, __assign({ "data-slot": "input-button-submit", layoutId: "input-button-submit-".concat(id), transition: transition, className: (0, utils_1.cn)("z-[1] [&_svg:not([class*='size-'])]:size-4 cursor-pointer disabled:pointer-events-none  disabled:opacity-50 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap bg-primary hover:bg-primary/90 transition-colors text-primary-foreground rounded-full text-sm flex items-center justify-center font-medium absolute inset-y-1 right-1", showInput ? 'px-4' : 'aspect-square', className), onClick: function () { return setShowInput(function (prev) { return !prev; }); } }, props, { children: showInput ? ((0, jsx_runtime_1.jsx)(react_1.motion.span, { initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.2 }, children: children }, "show-button")) : ((0, jsx_runtime_1.jsx)(react_1.motion.span, { initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.2 }, children: React.createElement(Icon, { className: "size-4" }) }, "show-icon")) })));
}
function InputButtonInput(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var _b = useInputButton(), transition = _b.transition, showInput = _b.showInput, id = _b.id;
    return ((0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { children: showInput && ((0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 size-full flex items-center justify-center", children: (0, jsx_runtime_1.jsx)(react_1.motion.div, { layoutId: "input-button-input-".concat(id), className: "size-full flex items-center bg-background rounded-full relative", transition: transition, children: (0, jsx_runtime_1.jsx)("input", __assign({ "data-slot": "input-button-input", className: (0, utils_1.cn)('size-full selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground inset-0 pl-4 focus-visible:border-ring border focus-visible:ring-ring/50 focus-visible:ring-[3px] pr-32 py-2 text-sm bg-background rounded-full focus:outline-none absolute shrink-0 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive disabled:pointer-events-none disabled:cursor-not-allowed', className) }, props)) }) })) }));
}
