"use strict";
"use client";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoText = VideoText;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("@/lib/utils");
var react_1 = __importStar(require("react"));
function VideoText(_a) {
    var src = _a.src, children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.autoPlay, autoPlay = _c === void 0 ? true : _c, _d = _a.muted, muted = _d === void 0 ? true : _d, _e = _a.loop, loop = _e === void 0 ? true : _e, _f = _a.preload, preload = _f === void 0 ? "auto" : _f, _g = _a.fontSize, fontSize = _g === void 0 ? 20 : _g, _h = _a.fontWeight, fontWeight = _h === void 0 ? "bold" : _h, _j = _a.textAnchor, textAnchor = _j === void 0 ? "middle" : _j, _k = _a.dominantBaseline, dominantBaseline = _k === void 0 ? "middle" : _k, _l = _a.fontFamily, fontFamily = _l === void 0 ? "sans-serif" : _l, _m = _a.as, Component = _m === void 0 ? "div" : _m;
    var _o = (0, react_1.useState)(""), svgMask = _o[0], setSvgMask = _o[1];
    var content = react_1.default.Children.toArray(children).join("");
    (0, react_1.useEffect)(function () {
        var updateSvgMask = function () {
            var responsiveFontSize = typeof fontSize === "number" ? "".concat(fontSize, "vw") : fontSize;
            var newSvgMask = "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><text x='50%' y='50%' font-size='".concat(responsiveFontSize, "' font-weight='").concat(fontWeight, "' text-anchor='").concat(textAnchor, "' dominant-baseline='").concat(dominantBaseline, "' font-family='").concat(fontFamily, "'>").concat(content, "</text></svg>");
            setSvgMask(newSvgMask);
        };
        updateSvgMask();
        window.addEventListener("resize", updateSvgMask);
        return function () { return window.removeEventListener("resize", updateSvgMask); };
    }, [content, fontSize, fontWeight, textAnchor, dominantBaseline, fontFamily]);
    var dataUrlMask = "url(\"data:image/svg+xml,".concat(encodeURIComponent(svgMask), "\")");
    return ((0, jsx_runtime_1.jsxs)(Component, { className: (0, utils_1.cn)("relative size-full", className), children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 flex items-center justify-center", style: {
                    maskImage: dataUrlMask,
                    WebkitMaskImage: dataUrlMask,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                }, children: (0, jsx_runtime_1.jsxs)("video", { className: "w-full h-full object-cover", autoPlay: autoPlay, muted: muted, loop: loop, preload: preload, playsInline: true, children: [(0, jsx_runtime_1.jsx)("source", { src: src }), "Your browser does not support the video tag."] }) }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: content })] }));
}
