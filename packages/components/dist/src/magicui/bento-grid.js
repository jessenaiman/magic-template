"use strict";
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
exports.BentoGrid = exports.BentoCard = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_icons_1 = require("@radix-ui/react-icons");
var button_1 = require("@/packages/ui/src/ui/button");
var utils_1 = require("@/lib/utils");
var BentoGrid = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, utils_1.cn)("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className) }, props, { children: children })));
};
exports.BentoGrid = BentoGrid;
var BentoCard = function (_a) {
    var name = _a.name, className = _a.className, background = _a.background, Icon = _a.Icon, description = _a.description, href = _a.href, cta = _a.cta, props = __rest(_a, ["name", "className", "background", "Icon", "description", "href", "cta"]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, utils_1.cn)("group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl", 
        // light styles
        "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]", 
        // dark styles
        "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]", className) }, props, { children: [(0, jsx_runtime_1.jsx)("div", { children: background }), (0, jsx_runtime_1.jsxs)("div", { className: "p-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10", children: [(0, jsx_runtime_1.jsx)(Icon, { className: "h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" }), (0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold text-neutral-700 dark:text-neutral-300", children: name }), (0, jsx_runtime_1.jsx)("p", { className: "max-w-lg text-neutral-400", children: description })] }), (0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("lg:hidden pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"), children: (0, jsx_runtime_1.jsx)(button_1.Button, { variant: "link", asChild: true, size: "sm", className: "pointer-events-auto p-0", children: (0, jsx_runtime_1.jsxs)("a", { href: href, children: [cta, (0, jsx_runtime_1.jsx)(react_icons_1.ArrowRightIcon, { className: "ms-2 h-4 w-4 rtl:rotate-180" })] }) }) })] }), (0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("hidden lg:flex pointer-events-none absolute bottom-0 w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"), children: (0, jsx_runtime_1.jsx)(button_1.Button, { variant: "link", asChild: true, size: "sm", className: "pointer-events-auto p-0", children: (0, jsx_runtime_1.jsxs)("a", { href: href, children: [cta, (0, jsx_runtime_1.jsx)(react_icons_1.ArrowRightIcon, { className: "ms-2 h-4 w-4 rtl:rotate-180" })] }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" })] }), name));
};
exports.BentoCard = BentoCard;
