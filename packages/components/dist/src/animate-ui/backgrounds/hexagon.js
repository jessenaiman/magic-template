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
exports.HexagonBackground = HexagonBackground;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var utils_1 = require("@/lib/utils");
function HexagonBackground(_a) {
    var className = _a.className, children = _a.children, hexagonProps = _a.hexagonProps, _b = _a.hexagonSize, hexagonSize = _b === void 0 ? 75 : _b, _c = _a.hexagonMargin, hexagonMargin = _c === void 0 ? 3 : _c, props = __rest(_a, ["className", "children", "hexagonProps", "hexagonSize", "hexagonMargin"]);
    var hexagonWidth = hexagonSize;
    var hexagonHeight = hexagonSize * 1.1;
    var rowSpacing = hexagonSize * 0.8;
    var baseMarginTop = -36 - 0.275 * (hexagonSize - 100);
    var computedMarginTop = baseMarginTop + hexagonMargin;
    var oddRowMarginLeft = -(hexagonSize / 2);
    var evenRowMarginLeft = hexagonMargin / 2;
    var _d = React.useState({
        rows: 0,
        columns: 0,
    }), gridDimensions = _d[0], setGridDimensions = _d[1];
    var updateGridDimensions = React.useCallback(function () {
        var rows = Math.ceil(window.innerHeight / rowSpacing);
        var columns = Math.ceil(window.innerWidth / hexagonWidth) + 1;
        setGridDimensions({ rows: rows, columns: columns });
    }, [rowSpacing, hexagonWidth]);
    React.useEffect(function () {
        updateGridDimensions();
        window.addEventListener('resize', updateGridDimensions);
        return function () { return window.removeEventListener('resize', updateGridDimensions); };
    }, [updateGridDimensions]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ "data-slot": "hexagon-background", className: (0, utils_1.cn)('relative size-full overflow-hidden dark:bg-neutral-900 bg-neutral-100', className) }, props, { children: [(0, jsx_runtime_1.jsx)("style", { children: ":root { --hexagon-margin: ".concat(hexagonMargin, "px; }") }), (0, jsx_runtime_1.jsx)("div", { className: "absolute top-0 -left-0 size-full overflow-hidden", children: Array.from({ length: gridDimensions.rows }).map(function (_, rowIndex) { return ((0, jsx_runtime_1.jsx)("div", { style: {
                        marginTop: computedMarginTop,
                        marginLeft: ((rowIndex + 1) % 2 === 0
                            ? evenRowMarginLeft
                            : oddRowMarginLeft) - 10,
                    }, className: "inline-flex", children: Array.from({ length: gridDimensions.columns }).map(function (_, colIndex) { return ((0, jsx_runtime_1.jsx)("div", __assign({}, hexagonProps, { style: __assign({ width: hexagonWidth, height: hexagonHeight, marginLeft: hexagonMargin }, hexagonProps === null || hexagonProps === void 0 ? void 0 : hexagonProps.style), className: (0, utils_1.cn)('relative', '[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]', "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full dark:before:bg-neutral-950 before:bg-white before:opacity-100 before:transition-all before:duration-1000", "after:content-[''] after:absolute after:inset-[var(--hexagon-margin)] dark:after:bg-neutral-950 after:bg-white", 'after:[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]', 'hover:before:bg-neutral-200 dark:hover:before:bg-neutral-800 hover:before:opacity-100 hover:before:duration-0 dark:hover:after:bg-neutral-900 hover:after:bg-neutral-100 hover:after:opacity-100 hover:after:duration-0', hexagonProps === null || hexagonProps === void 0 ? void 0 : hexagonProps.className) }), "hexagon-".concat(rowIndex, "-").concat(colIndex))); }) }, "row-".concat(rowIndex))); }) }), children] })));
}
