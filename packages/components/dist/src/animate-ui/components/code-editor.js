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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
exports.CodeEditor = CodeEditor;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
var next_themes_1 = require("next-themes");
var utils_1 = require("@/lib/utils");
var copy_1 = require("@/packages/ui/src/animate-ui/buttons/copy");
function CodeEditor(_a) {
    var _this = this;
    var code = _a.children, lang = _a.lang, _b = _a.themes, themes = _b === void 0 ? {
        light: 'github-light',
        dark: 'github-dark',
    } : _b, _c = _a.duration, duration = _c === void 0 ? 5 : _c, _d = _a.delay, delay = _d === void 0 ? 0 : _d, className = _a.className, _e = _a.header, header = _e === void 0 ? true : _e, _f = _a.dots, dots = _f === void 0 ? true : _f, icon = _a.icon, _g = _a.cursor, cursor = _g === void 0 ? false : _g, _h = _a.inView, inView = _h === void 0 ? false : _h, _j = _a.inViewMargin, inViewMargin = _j === void 0 ? '0px' : _j, _k = _a.inViewOnce, inViewOnce = _k === void 0 ? true : _k, _l = _a.copyButton, copyButton = _l === void 0 ? false : _l, _m = _a.writing, writing = _m === void 0 ? true : _m, title = _a.title, onDone = _a.onDone, onCopy = _a.onCopy, props = __rest(_a, ["children", "lang", "themes", "duration", "delay", "className", "header", "dots", "icon", "cursor", "inView", "inViewMargin", "inViewOnce", "copyButton", "writing", "title", "onDone", "onCopy"]);
    var resolvedTheme = (0, next_themes_1.useTheme)().resolvedTheme;
    var editorRef = React.useRef(null);
    var _o = React.useState(''), visibleCode = _o[0], setVisibleCode = _o[1];
    var _p = React.useState(''), highlightedCode = _p[0], setHighlightedCode = _p[1];
    var _q = React.useState(false), isDone = _q[0], setIsDone = _q[1];
    var inViewResult = (0, react_1.useInView)(editorRef, {
        once: inViewOnce,
        margin: inViewMargin,
    });
    var isInView = !inView || inViewResult;
    React.useEffect(function () {
        if (!visibleCode.length || !isInView)
            return;
        var loadHighlightedCode = function () { return __awaiter(_this, void 0, void 0, function () {
            var codeToHtml, highlighted, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('shiki')); })];
                    case 1:
                        codeToHtml = (_a.sent()).codeToHtml;
                        return [4 /*yield*/, codeToHtml(visibleCode, {
                                lang: lang,
                                themes: {
                                    light: themes.light,
                                    dark: themes.dark,
                                },
                                defaultColor: resolvedTheme === 'dark' ? 'dark' : 'light',
                            })];
                    case 2:
                        highlighted = _a.sent();
                        setHighlightedCode(highlighted);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error("Language \"".concat(lang, "\" could not be loaded."), e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        loadHighlightedCode();
    }, [
        lang,
        themes,
        writing,
        isInView,
        duration,
        delay,
        visibleCode,
        resolvedTheme,
    ]);
    React.useEffect(function () {
        if (!writing) {
            setVisibleCode(code);
            onDone === null || onDone === void 0 ? void 0 : onDone();
            return;
        }
        if (!code.length || !isInView)
            return;
        var characters = Array.from(code);
        var index = 0;
        var totalDuration = duration * 1000;
        var interval = totalDuration / characters.length;
        var intervalId;
        var timeout = setTimeout(function () {
            intervalId = setInterval(function () {
                var _a, _b;
                if (index < characters.length) {
                    setVisibleCode(function (prev) {
                        var currentIndex = index;
                        index += 1;
                        return prev + characters[currentIndex];
                    });
                    (_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
                        top: (_b = editorRef.current) === null || _b === void 0 ? void 0 : _b.scrollHeight,
                        behavior: 'smooth',
                    });
                }
                else {
                    clearInterval(intervalId);
                    setIsDone(true);
                    onDone === null || onDone === void 0 ? void 0 : onDone();
                }
            }, interval);
        }, delay * 1000);
        return function () {
            clearTimeout(timeout);
            clearInterval(intervalId);
        };
    }, [code, duration, delay, isInView, writing, onDone]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ "data-slot": "code-editor", className: (0, utils_1.cn)('relative bg-muted/50 w-[600px] h-[400px] border border-border overflow-hidden flex flex-col rounded-xl', className) }, props, { children: [header ? ((0, jsx_runtime_1.jsxs)("div", { className: "bg-muted border-b border-border/75 dark:border-border/50 relative flex flex-row items-center justify-between gap-y-2 h-10 px-4", children: [dots && ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-x-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "size-2 rounded-full bg-red-500" }), (0, jsx_runtime_1.jsx)("div", { className: "size-2 rounded-full bg-yellow-500" }), (0, jsx_runtime_1.jsx)("div", { className: "size-2 rounded-full bg-green-500" })] })), title && ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)('flex flex-row items-center gap-2', dots &&
                            'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'), children: [icon ? ((0, jsx_runtime_1.jsx)("div", { className: "text-muted-foreground [&_svg]:size-3.5", dangerouslySetInnerHTML: typeof icon === 'string' ? { __html: icon } : undefined, children: typeof icon !== 'string' ? icon : null })) : null, (0, jsx_runtime_1.jsx)("figcaption", { className: "flex-1 truncate text-muted-foreground text-[13px]", children: title })] })), copyButton ? ((0, jsx_runtime_1.jsx)(copy_1.CopyButton, { content: code, size: "sm", variant: "ghost", className: "-me-2 bg-transparent hover:bg-black/5 dark:hover:bg-white/10", onCopy: onCopy })) : null] })) : (copyButton && ((0, jsx_runtime_1.jsx)(copy_1.CopyButton, { content: code, size: "sm", variant: "ghost", className: "absolute right-2 top-2 z-[2] backdrop-blur-md bg-transparent hover:bg-black/5 dark:hover:bg-white/10", onCopy: onCopy }))), (0, jsx_runtime_1.jsx)("div", { ref: editorRef, className: "h-[calc(100%-2.75rem)] w-full text-sm p-4 font-mono relative overflow-auto flex-1", children: (0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)('[&>pre,_&_code]:!bg-transparent [&>pre,_&_code]:[background:transparent_!important] [&>pre,_&_code]:border-none [&_code]:!text-[13px]', cursor &&
                        !isDone &&
                        "[&_.line:last-of-type::after]:content-['|'] [&_.line:last-of-type::after]:animate-pulse [&_.line:last-of-type::after]:inline-block [&_.line:last-of-type::after]:w-[1ch] [&_.line:last-of-type::after]:-translate-px"), dangerouslySetInnerHTML: { __html: highlightedCode } }) })] })));
}
