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
exports.RainbowButton = RainbowButton;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("@/src/lib/utils");
var button_1 = require("@/packages/ui/src/ui/button");
function RainbowButton(_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return ((0, jsx_runtime_1.jsx)(button_1.Button, __assign({ className: (0, utils_1.cn)("group relative inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] font-medium text-white transition-all hover:bg-gradient-to-l", className) }, props, { children: (0, jsx_runtime_1.jsx)("span", { className: "relative rounded-md bg-black px-6 py-2 transition-all group-hover:bg-transparent", children: children }) })));
}
