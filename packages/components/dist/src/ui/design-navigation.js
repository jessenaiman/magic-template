"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignNavigation = DesignNavigation;
var jsx_runtime_1 = require("react/jsx-runtime");
var link_1 = __importDefault(require("next/link"));
var navigation_1 = require("next/navigation");
var utils_1 = require("@/lib/utils");
var designCategories = [
    {
        name: 'Backgrounds',
        href: '/design/backgrounds',
    },
    {
        name: 'Buttons',
        href: '/design/buttons',
    },
    {
        name: 'Effects',
        href: '/design/effects',
    },
    {
        name: 'Page Transitions',
        href: '/design/page-transitions',
    },
    {
        name: 'Responsive Design',
        href: '/design/responsive-design',
    },
    {
        name: 'Text',
        href: '/design/text',
    },
];
function DesignNavigation() {
    var pathname = (0, navigation_1.usePathname)();
    return ((0, jsx_runtime_1.jsx)("div", { className: "mb-8 border-b border-border pb-4", children: (0, jsx_runtime_1.jsx)("nav", { className: "flex space-x-4 overflow-x-auto", children: designCategories.map(function (category) {
                var isActive = pathname.startsWith(category.href);
                return ((0, jsx_runtime_1.jsx)(link_1.default, { href: category.href, className: (0, utils_1.cn)('whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors hover:text-foreground', isActive
                        ? 'border-b-2 border-foreground text-foreground'
                        : 'text-muted-foreground hover:text-foreground'), children: category.name }, category.name));
            }) }) }));
}
