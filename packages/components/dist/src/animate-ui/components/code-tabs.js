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
exports.CodeTabs = CodeTabs;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var next_themes_1 = require("next-themes");
var utils_1 = require("@/lib/utils");
var tabs_1 = require("@/packages/ui/src/animate-ui/components/tabs");
var copy_1 = require("@/packages/ui/src/animate-ui/buttons/copy");
function CodeTabs(_a) {
    var _b, _c;
    var codes = _a.codes, _d = _a.lang, lang = _d === void 0 ? 'bash' : _d, _e = _a.themes, themes = _e === void 0 ? {
        light: 'github-light',
        dark: 'github-dark',
    } : _e, className = _a.className, defaultValue = _a.defaultValue, value = _a.value, onValueChange = _a.onValueChange, _f = _a.copyButton, copyButton = _f === void 0 ? true : _f, onCopy = _a.onCopy, props = __rest(_a, ["codes", "lang", "themes", "className", "defaultValue", "value", "onValueChange", "copyButton", "onCopy"]);
    var resolvedTheme = (0, next_themes_1.useTheme)().resolvedTheme;
    var _g = React.useState(null), highlightedCodes = _g[0], setHighlightedCodes = _g[1];
    var _h = React.useState((_c = (_b = value !== null && value !== void 0 ? value : defaultValue) !== null && _b !== void 0 ? _b : Object.keys(codes)[0]) !== null && _c !== void 0 ? _c : ''), selectedCode = _h[0], setSelectedCode = _h[1];
    React.useEffect(function () {
        function loadHighlightedCode() {
            return __awaiter(this, void 0, void 0, function () {
                var codeToHtml, newHighlightedCodes, _i, _a, _b, command, val, highlighted, error_1;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 6, , 7]);
                            return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('shiki')); })];
                        case 1:
                            codeToHtml = (_c.sent()).codeToHtml;
                            newHighlightedCodes = {};
                            _i = 0, _a = Object.entries(codes);
                            _c.label = 2;
                        case 2:
                            if (!(_i < _a.length)) return [3 /*break*/, 5];
                            _b = _a[_i], command = _b[0], val = _b[1];
                            return [4 /*yield*/, codeToHtml(val, {
                                    lang: lang,
                                    themes: {
                                        light: themes.light,
                                        dark: themes.dark,
                                    },
                                    defaultColor: resolvedTheme === 'dark' ? 'dark' : 'light',
                                })];
                        case 3:
                            highlighted = _c.sent();
                            newHighlightedCodes[command] = highlighted;
                            _c.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5:
                            setHighlightedCodes(newHighlightedCodes);
                            return [3 /*break*/, 7];
                        case 6:
                            error_1 = _c.sent();
                            console.error('Error highlighting codes', error_1);
                            setHighlightedCodes(codes);
                            return [3 /*break*/, 7];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        }
        loadHighlightedCode();
    }, [resolvedTheme, lang, themes.light, themes.dark, codes]);
    return ((0, jsx_runtime_1.jsxs)(tabs_1.Tabs, __assign({ "data-slot": "install-tabs", className: (0, utils_1.cn)('w-full gap-0 bg-muted/50 rounded-xl border overflow-hidden', className) }, props, { value: selectedCode, onValueChange: function (val) {
            setSelectedCode(val);
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(val);
        }, children: [(0, jsx_runtime_1.jsxs)(tabs_1.TabsList, { "data-slot": "install-tabs-list", className: "w-full relative justify-between rounded-none h-10 bg-muted border-b border-border/75 dark:border-border/50 text-current py-0 px-4", activeClassName: "rounded-none shadow-none bg-transparent after:content-[''] after:absolute after:inset-x-0 after:h-0.5 after:bottom-0 dark:after:bg-white after:bg-black after:rounded-t-full", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex gap-x-3 h-full", children: highlightedCodes &&
                            Object.keys(highlightedCodes).map(function (code) { return ((0, jsx_runtime_1.jsx)(tabs_1.TabsTrigger, { value: code, className: "text-muted-foreground data-[state=active]:text-current px-0", children: code }, code)); }) }), copyButton && highlightedCodes && ((0, jsx_runtime_1.jsx)(copy_1.CopyButton, { content: codes[selectedCode], size: "sm", variant: "ghost", className: "-me-2 bg-transparent hover:bg-black/5 dark:hover:bg-white/10", onCopy: onCopy }))] }), (0, jsx_runtime_1.jsx)(tabs_1.TabsContents, { "data-slot": "install-tabs-contents", children: highlightedCodes &&
                    Object.entries(highlightedCodes).map(function (_a) {
                        var code = _a[0], val = _a[1];
                        return ((0, jsx_runtime_1.jsx)(tabs_1.TabsContent, { "data-slot": "install-tabs-content", className: "w-full text-sm flex items-center p-4 overflow-auto", value: code, children: (0, jsx_runtime_1.jsx)("div", { className: "[&>pre,_&_code]:!bg-transparent [&>pre,_&_code]:[background:transparent_!important] [&>pre,_&_code]:border-none [&_code]:!text-[13px]", dangerouslySetInnerHTML: { __html: val } }) }, code));
                    }) })] })));
}
