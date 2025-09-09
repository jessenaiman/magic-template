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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carousel = Carousel;
exports.CarouselContent = CarouselContent;
exports.CarouselItem = CarouselItem;
exports.CarouselPrevious = CarouselPrevious;
exports.CarouselNext = CarouselNext;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var embla_carousel_react_1 = __importDefault(require("embla-carousel-react"));
var lucide_react_1 = require("lucide-react");
var utils_1 = require("@/lib/utils");
var button_1 = require("@/packages/ui/src/ui/button");
var CarouselContext = React.createContext(null);
function useCarousel() {
    var context = React.useContext(CarouselContext);
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }
    return context;
}
function Carousel(_a) {
    var _b = _a.orientation, orientation = _b === void 0 ? "horizontal" : _b, opts = _a.opts, setApi = _a.setApi, plugins = _a.plugins, className = _a.className, children = _a.children, props = __rest(_a, ["orientation", "opts", "setApi", "plugins", "className", "children"]);
    var _c = (0, embla_carousel_react_1.default)(__assign(__assign({}, opts), { axis: orientation === "horizontal" ? "x" : "y" }), plugins), carouselRef = _c[0], api = _c[1];
    var _d = React.useState(false), canScrollPrev = _d[0], setCanScrollPrev = _d[1];
    var _e = React.useState(false), canScrollNext = _e[0], setCanScrollNext = _e[1];
    var onSelect = React.useCallback(function (api) {
        if (!api)
            return;
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    }, []);
    var scrollPrev = React.useCallback(function () {
        api === null || api === void 0 ? void 0 : api.scrollPrev();
    }, [api]);
    var scrollNext = React.useCallback(function () {
        api === null || api === void 0 ? void 0 : api.scrollNext();
    }, [api]);
    var handleKeyDown = React.useCallback(function (event) {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollPrev();
        }
        else if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollNext();
        }
    }, [scrollPrev, scrollNext]);
    React.useEffect(function () {
        if (!api || !setApi)
            return;
        setApi(api);
    }, [api, setApi]);
    React.useEffect(function () {
        if (!api)
            return;
        onSelect(api);
        api.on("reInit", onSelect);
        api.on("select", onSelect);
        return function () {
            api === null || api === void 0 ? void 0 : api.off("select", onSelect);
        };
    }, [api, onSelect]);
    return ((0, jsx_runtime_1.jsx)(CarouselContext.Provider, { value: {
            carouselRef: carouselRef,
            api: api,
            opts: opts,
            orientation: orientation || ((opts === null || opts === void 0 ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
            scrollPrev: scrollPrev,
            scrollNext: scrollNext,
            canScrollPrev: canScrollPrev,
            canScrollNext: canScrollNext,
        }, children: (0, jsx_runtime_1.jsx)("div", __assign({ onKeyDownCapture: handleKeyDown, className: (0, utils_1.cn)("relative", className), role: "region", "aria-roledescription": "carousel", "data-slot": "carousel" }, props, { children: children })) }));
}
function CarouselContent(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var _b = useCarousel(), carouselRef = _b.carouselRef, orientation = _b.orientation;
    return ((0, jsx_runtime_1.jsx)("div", { ref: carouselRef, className: "overflow-hidden", "data-slot": "carousel-content", children: (0, jsx_runtime_1.jsx)("div", __assign({ className: (0, utils_1.cn)("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className) }, props)) }));
}
function CarouselItem(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var orientation = useCarousel().orientation;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ role: "group", "aria-roledescription": "slide", "data-slot": "carousel-item", className: (0, utils_1.cn)("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className) }, props)));
}
function CarouselPrevious(_a) {
    var className = _a.className, _b = _a.variant, variant = _b === void 0 ? "outline" : _b, _c = _a.size, size = _c === void 0 ? "icon" : _c, props = __rest(_a, ["className", "variant", "size"]);
    var _d = useCarousel(), orientation = _d.orientation, scrollPrev = _d.scrollPrev, canScrollPrev = _d.canScrollPrev;
    return ((0, jsx_runtime_1.jsxs)(button_1.Button, __assign({ "data-slot": "carousel-previous", variant: variant, size: size, className: (0, utils_1.cn)("absolute size-8 rounded-full", orientation === "horizontal"
            ? "top-1/2 -left-12 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className), disabled: !canScrollPrev, onClick: scrollPrev }, props, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.ArrowLeft, {}), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Previous slide" })] })));
}
function CarouselNext(_a) {
    var className = _a.className, _b = _a.variant, variant = _b === void 0 ? "outline" : _b, _c = _a.size, size = _c === void 0 ? "icon" : _c, props = __rest(_a, ["className", "variant", "size"]);
    var _d = useCarousel(), orientation = _d.orientation, scrollNext = _d.scrollNext, canScrollNext = _d.canScrollNext;
    return ((0, jsx_runtime_1.jsxs)(button_1.Button, __assign({ "data-slot": "carousel-next", variant: variant, size: size, className: (0, utils_1.cn)("absolute size-8 rounded-full", orientation === "horizontal"
            ? "top-1/2 -right-12 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className), disabled: !canScrollNext, onClick: scrollNext }, props, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.ArrowRight, {}), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Next slide" })] })));
}
