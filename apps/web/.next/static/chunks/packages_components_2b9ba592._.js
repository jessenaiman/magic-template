(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/packages/components/ui/tooltip.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tooltip": (()=>Tooltip),
    "TooltipContent": (()=>TooltipContent),
    "TooltipProvider": (()=>TooltipProvider),
    "TooltipTrigger": (()=>TooltipTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$2$2e$8_$40$types$2b$react$2d$dom$40$19$2e$1$2e$9_$40$types$2b$react$40$19$2e$1$2e$12_$5f40$types$2b$react$40$19$2e$1_xvsirg77z6tgfg6ck6fmtxftrq$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-tooltip@1.2.8_@types+react-dom@19.1.9_@types+react@19.1.12__@types+react@19.1_xvsirg77z6tgfg6ck6fmtxftrq/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/src/lib/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
function TooltipProvider({ delayDuration = 0, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$2$2e$8_$40$types$2b$react$2d$dom$40$19$2e$1$2e$9_$40$types$2b$react$40$19$2e$1$2e$12_$5f40$types$2b$react$40$19$2e$1_xvsirg77z6tgfg6ck6fmtxftrq$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        "data-slot": "tooltip-provider",
        delayDuration: delayDuration,
        ...props
    }, void 0, false, {
        fileName: "[project]/packages/components/ui/tooltip.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = TooltipProvider;
function Tooltip({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TooltipProvider, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$2$2e$8_$40$types$2b$react$2d$dom$40$19$2e$1$2e$9_$40$types$2b$react$40$19$2e$1$2e$12_$5f40$types$2b$react$40$19$2e$1_xvsirg77z6tgfg6ck6fmtxftrq$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "tooltip",
            ...props
        }, void 0, false, {
            fileName: "[project]/packages/components/ui/tooltip.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/components/ui/tooltip.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c1 = Tooltip;
function TooltipTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$2$2e$8_$40$types$2b$react$2d$dom$40$19$2e$1$2e$9_$40$types$2b$react$40$19$2e$1$2e$12_$5f40$types$2b$react$40$19$2e$1_xvsirg77z6tgfg6ck6fmtxftrq$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tooltip-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/packages/components/ui/tooltip.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
_c2 = TooltipTrigger;
function TooltipContent({ className, sideOffset = 0, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$2$2e$8_$40$types$2b$react$2d$dom$40$19$2e$1$2e$9_$40$types$2b$react$40$19$2e$1$2e$12_$5f40$types$2b$react$40$19$2e$1_xvsirg77z6tgfg6ck6fmtxftrq$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$2$2e$8_$40$types$2b$react$2d$dom$40$19$2e$1$2e$9_$40$types$2b$react$40$19$2e$1$2e$12_$5f40$types$2b$react$40$19$2e$1_xvsirg77z6tgfg6ck6fmtxftrq$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "tooltip-content",
            sideOffset: sideOffset,
            className: cn("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$2$2e$8_$40$types$2b$react$2d$dom$40$19$2e$1$2e$9_$40$types$2b$react$40$19$2e$1$2e$12_$5f40$types$2b$react$40$19$2e$1_xvsirg77z6tgfg6ck6fmtxftrq$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
                    className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
                }, void 0, false, {
                    fileName: "[project]/packages/components/ui/tooltip.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/components/ui/tooltip.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/components/ui/tooltip.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c3 = TooltipContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "TooltipProvider");
__turbopack_context__.k.register(_c1, "Tooltip");
__turbopack_context__.k.register(_c2, "TooltipTrigger");
__turbopack_context__.k.register(_c3, "TooltipContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/components/magicui/flickering-grid.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FlickeringGrid": (()=>FlickeringGrid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/src/lib/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const FlickeringGrid = ({ squareSize = 4, gridGap = 6, flickerChance = 0.3, color = "rgb(0, 0, 0)", width, height, className, maxOpacity = 0.3, ...props })=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canvasSize, setCanvasSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    const memoizedColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FlickeringGrid.useMemo[memoizedColor]": ()=>{
            const toRGBA = {
                "FlickeringGrid.useMemo[memoizedColor].toRGBA": (color)=>{
                    if ("TURBOPACK compile-time falsy", 0) {
                        "TURBOPACK unreachable";
                    }
                    const canvas = document.createElement("canvas");
                    canvas.width = canvas.height = 1;
                    const ctx = canvas.getContext("2d");
                    if (!ctx) return "rgba(255, 0, 0,";
                    ctx.fillStyle = color;
                    ctx.fillRect(0, 0, 1, 1);
                    const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
                    return `rgba(${r}, ${g}, ${b},`;
                }
            }["FlickeringGrid.useMemo[memoizedColor].toRGBA"];
            return toRGBA(color);
        }
    }["FlickeringGrid.useMemo[memoizedColor]"], [
        color
    ]);
    const setupCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FlickeringGrid.useCallback[setupCanvas]": (canvas, width, height)=>{
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            const cols = Math.floor(width / (squareSize + gridGap));
            const rows = Math.floor(height / (squareSize + gridGap));
            const squares = new Float32Array(cols * rows);
            for(let i = 0; i < squares.length; i++){
                squares[i] = Math.random() * maxOpacity;
            }
            return {
                cols,
                rows,
                squares,
                dpr
            };
        }
    }["FlickeringGrid.useCallback[setupCanvas]"], [
        squareSize,
        gridGap,
        maxOpacity
    ]);
    const updateSquares = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FlickeringGrid.useCallback[updateSquares]": (squares, deltaTime)=>{
            for(let i = 0; i < squares.length; i++){
                if (Math.random() < flickerChance * deltaTime) {
                    squares[i] = Math.random() * maxOpacity;
                }
            }
        }
    }["FlickeringGrid.useCallback[updateSquares]"], [
        flickerChance,
        maxOpacity
    ]);
    const drawGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FlickeringGrid.useCallback[drawGrid]": (ctx, width, height, cols, rows, squares, dpr)=>{
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = "transparent";
            ctx.fillRect(0, 0, width, height);
            for(let i = 0; i < cols; i++){
                for(let j = 0; j < rows; j++){
                    const opacity = squares[i * rows + j];
                    ctx.fillStyle = `${memoizedColor}${opacity})`;
                    ctx.fillRect(i * (squareSize + gridGap) * dpr, j * (squareSize + gridGap) * dpr, squareSize * dpr, squareSize * dpr);
                }
            }
        }
    }["FlickeringGrid.useCallback[drawGrid]"], [
        memoizedColor,
        squareSize,
        gridGap
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlickeringGrid.useEffect": ()=>{
            const canvas = canvasRef.current;
            const container = containerRef.current;
            if (!canvas || !container) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            let animationFrameId;
            let gridParams;
            const updateCanvasSize = {
                "FlickeringGrid.useEffect.updateCanvasSize": ()=>{
                    const newWidth = width || container.clientWidth;
                    const newHeight = height || container.clientHeight;
                    setCanvasSize({
                        width: newWidth,
                        height: newHeight
                    });
                    gridParams = setupCanvas(canvas, newWidth, newHeight);
                }
            }["FlickeringGrid.useEffect.updateCanvasSize"];
            updateCanvasSize();
            let lastTime = 0;
            const animate = {
                "FlickeringGrid.useEffect.animate": (time)=>{
                    if (!isInView) return;
                    const deltaTime = (time - lastTime) / 1000;
                    lastTime = time;
                    updateSquares(gridParams.squares, deltaTime);
                    drawGrid(ctx, canvas.width, canvas.height, gridParams.cols, gridParams.rows, gridParams.squares, gridParams.dpr);
                    animationFrameId = requestAnimationFrame(animate);
                }
            }["FlickeringGrid.useEffect.animate"];
            const resizeObserver = new ResizeObserver({
                "FlickeringGrid.useEffect": ()=>{
                    updateCanvasSize();
                }
            }["FlickeringGrid.useEffect"]);
            resizeObserver.observe(container);
            const intersectionObserver = new IntersectionObserver({
                "FlickeringGrid.useEffect": ([entry])=>{
                    setIsInView(entry.isIntersecting);
                }
            }["FlickeringGrid.useEffect"], {
                threshold: 0
            });
            intersectionObserver.observe(canvas);
            if (isInView) {
                animationFrameId = requestAnimationFrame(animate);
            }
            return ({
                "FlickeringGrid.useEffect": ()=>{
                    cancelAnimationFrame(animationFrameId);
                    resizeObserver.disconnect();
                    intersectionObserver.disconnect();
                }
            })["FlickeringGrid.useEffect"];
        }
    }["FlickeringGrid.useEffect"], [
        setupCanvas,
        updateSquares,
        drawGrid,
        width,
        height,
        isInView
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: cn(`h-full w-full ${className}`),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "pointer-events-none",
            style: {
                width: canvasSize.width,
                height: canvasSize.height
            }
        }, void 0, false, {
            fileName: "[project]/packages/components/magicui/flickering-grid.tsx",
            lineNumber: 189,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/components/magicui/flickering-grid.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
};
_s(FlickeringGrid, "7Vndbdt2AFlpSnyPt/Wgdl+/JDY=");
_c = FlickeringGrid;
var _c;
__turbopack_context__.k.register(_c, "FlickeringGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=packages_components_2b9ba592._.js.map