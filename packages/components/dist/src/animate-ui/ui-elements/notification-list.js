"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationList = NotificationList;
var jsx_runtime_1 = require("react/jsx-runtime");
var lucide_react_1 = require("lucide-react");
var react_1 = require("motion/react");
var notifications = [
    {
        id: 1,
        title: 'NPM Install Complete',
        subtitle: '1,227 packages added!',
        time: 'just now',
        count: 2,
    },
    {
        id: 2,
        title: 'Build Succeeded',
        subtitle: 'Build finished in 12.34s',
        time: '1m 11s',
    },
    {
        id: 3,
        title: 'Lint Passed',
        subtitle: 'No problems found',
        time: '5m',
    },
];
var transition = {
    type: 'spring',
    stiffness: 300,
    damping: 26,
};
var getCardVariants = function (i) { return ({
    collapsed: {
        marginTop: i === 0 ? 0 : -44,
        scaleX: 1 - i * 0.05,
    },
    expanded: {
        marginTop: i === 0 ? 0 : 4,
        scaleX: 1,
    },
}); };
var textSwitchTransition = {
    duration: 0.22,
    ease: 'easeInOut',
};
var notificationTextVariants = {
    collapsed: { opacity: 1, y: 0, pointerEvents: 'auto' },
    expanded: { opacity: 0, y: -16, pointerEvents: 'none' },
};
var viewAllTextVariants = {
    collapsed: { opacity: 0, y: 16, pointerEvents: 'none' },
    expanded: { opacity: 1, y: 0, pointerEvents: 'auto' },
};
function NotificationList() {
    return ((0, jsx_runtime_1.jsxs)(react_1.motion.div, { className: "bg-neutral-200 dark:bg-neutral-900 p-3 rounded-3xl w-xs space-y-3 shadow-md", initial: "collapsed", whileHover: "expanded", children: [(0, jsx_runtime_1.jsx)("div", { children: notifications.map(function (notification, i) { return ((0, jsx_runtime_1.jsxs)(react_1.motion.div, { className: "bg-neutral-100 dark:bg-neutral-800 rounded-xl px-4 py-2 shadow-sm hover:shadow-lg transition-shadow duration-200 relative", variants: getCardVariants(i), transition: transition, style: {
                        zIndex: notifications.length - i,
                    }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-center", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-sm font-medium", children: notification.title }), notification.count && ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center text-xs gap-0.5 font-medium text-neutral-500 dark:text-neutral-300", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.RotateCcw, { className: "size-3" }), (0, jsx_runtime_1.jsx)("span", { children: notification.count })] }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-xs text-neutral-500 font-medium", children: [(0, jsx_runtime_1.jsx)("span", { children: notification.time }), "\u00A0\u2022\u00A0", (0, jsx_runtime_1.jsx)("span", { children: notification.subtitle })] })] }, notification.id)); }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "size-5 rounded-full bg-neutral-400 text-white text-xs flex items-center justify-center font-medium", children: notifications.length }), (0, jsx_runtime_1.jsxs)("span", { className: "grid", children: [(0, jsx_runtime_1.jsx)(react_1.motion.span, { className: "text-sm font-medium text-neutral-600 dark:text-neutral-300 row-start-1 col-start-1", variants: notificationTextVariants, transition: textSwitchTransition, children: "Notifications" }), (0, jsx_runtime_1.jsxs)(react_1.motion.span, { className: "text-sm font-medium text-neutral-600 dark:text-neutral-300 flex items-center gap-1 cursor-pointer select-none row-start-1 col-start-1", variants: viewAllTextVariants, transition: textSwitchTransition, children: ["View all ", (0, jsx_runtime_1.jsx)(lucide_react_1.ArrowUpRight, { className: "size-4" })] })] })] })] }));
}
