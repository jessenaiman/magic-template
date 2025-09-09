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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPresenceAvatar = UserPresenceAvatar;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("motion/react");
var avatar_1 = require("@/packages/ui/src/ui/avatar");
var avatar_group_1 = require("@/packages/ui/src/animate-ui/components/avatar-group");
var utils_1 = require("@/lib/utils");
var USERS = [
    {
        id: 1,
        src: 'https://pbs.twimg.com/profile_images/1897311929028255744/otxpL-ke_400x400.jpg',
        fallback: 'AK',
        tooltip: 'Arhamkhnz',
        online: true,
    },
    {
        id: 2,
        src: 'https://pbs.twimg.com/profile_images/1909615404789506048/MTqvRsjo_400x400.jpg',
        fallback: 'SK',
        tooltip: 'Skyleen',
        online: true,
    },
    {
        id: 3,
        src: 'https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg',
        fallback: 'CN',
        tooltip: 'Shadcn',
        online: true,
    },
    {
        id: 4,
        src: 'https://pbs.twimg.com/profile_images/1677042510839857154/Kq4tpySA_400x400.jpg',
        fallback: 'AW',
        tooltip: 'Adam Wathan',
        online: false,
    },
    {
        id: 5,
        src: 'https://pbs.twimg.com/profile_images/1783856060249595904/8TfcCN0r_400x400.jpg',
        fallback: 'GR',
        tooltip: 'Guillermo Rauch',
        online: false,
    },
    {
        id: 6,
        src: 'https://pbs.twimg.com/profile_images/1534700564810018816/anAuSfkp_400x400.jpg',
        fallback: 'JH',
        tooltip: 'Jhey',
        online: false,
    },
];
var AVATAR_MOTION_TRANSITION = {
    type: 'spring',
    stiffness: 200,
    damping: 25,
};
var GROUP_CONTAINER_TRANSITION = {
    type: 'spring',
    stiffness: 150,
    damping: 20,
};
function UserPresenceAvatar() {
    var _a = React.useState(USERS), users = _a[0], setUsers = _a[1];
    var _b = React.useState(null), togglingGroup = _b[0], setTogglingGroup = _b[1];
    var online = users.filter(function (u) { return u.online; });
    var offline = users.filter(function (u) { return !u.online; });
    var toggleStatus = function (id) {
        var user = users.find(function (u) { return u.id === id; });
        if (!user)
            return;
        setTogglingGroup(user.online ? 'online' : 'offline');
        setUsers(function (prev) {
            var idx = prev.findIndex(function (u) { return u.id === id; });
            if (idx === -1)
                return prev;
            var updated = __spreadArray([], prev, true);
            var target = updated[idx];
            if (!target)
                return prev;
            updated.splice(idx, 1);
            updated.push(__assign(__assign({}, target), { online: !target.online }));
            return updated;
        });
        // Reset group z-index after the animation duration (keep in sync with animation timing)
        setTimeout(function () { return setTogglingGroup(null); }, 500);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex items-center gap-5", children: (0, jsx_runtime_1.jsxs)(react_1.LayoutGroup, { children: [online.length > 0 && ((0, jsx_runtime_1.jsx)(react_1.motion.div, { layout: true, className: (0, utils_1.cn)('bg-neutral-300 dark:bg-neutral-700 p-0.5 rounded-full', togglingGroup === 'online' ? 'z-5' : 'z-10'), transition: GROUP_CONTAINER_TRANSITION, children: (0, jsx_runtime_1.jsx)(avatar_group_1.AvatarGroup, { translate: "0", className: "h-12 -space-x-3", tooltipProps: { side: 'top', sideOffset: 14 }, children: online.map(function (user) { return ((0, jsx_runtime_1.jsx)(react_1.motion.div, { layoutId: "avatar-".concat(user.id), className: "cursor-pointer", onClick: function () { return toggleStatus(user.id); }, animate: {
                                filter: 'grayscale(0)',
                                scale: 1,
                            }, transition: AVATAR_MOTION_TRANSITION, title: "Click to go offline", initial: false, children: (0, jsx_runtime_1.jsxs)(avatar_1.Avatar, { className: "size-12 border-3 border-neutral-300 dark:border-neutral-700", children: [(0, jsx_runtime_1.jsx)(avatar_1.AvatarImage, { src: user.src }), (0, jsx_runtime_1.jsx)(avatar_1.AvatarFallback, { children: user.fallback }), (0, jsx_runtime_1.jsx)(avatar_group_1.AvatarGroupTooltip, { children: (0, jsx_runtime_1.jsx)("p", { children: user.tooltip }) })] }) }, user.id)); }) }, online.map(function (u) { return u.id; }).join('_') + '-online') })), offline.length > 0 && ((0, jsx_runtime_1.jsx)(react_1.motion.div, { layout: true, className: (0, utils_1.cn)('bg-neutral-300 dark:bg-neutral-700 p-0.5 rounded-full', togglingGroup === 'offline' ? 'z-5' : 'z-10'), transition: GROUP_CONTAINER_TRANSITION, children: (0, jsx_runtime_1.jsx)(avatar_group_1.AvatarGroup, { translate: "0", className: "h-12 -space-x-3", tooltipProps: { side: 'top', sideOffset: 14 }, children: offline.map(function (user) { return ((0, jsx_runtime_1.jsx)(react_1.motion.div, { layoutId: "avatar-".concat(user.id), className: "cursor-pointer", onClick: function () { return toggleStatus(user.id); }, animate: {
                                filter: 'grayscale(1)',
                                scale: 1,
                            }, transition: AVATAR_MOTION_TRANSITION, title: "Click to go online", initial: false, children: (0, jsx_runtime_1.jsxs)(avatar_1.Avatar, { className: "size-12 border-3 border-neutral-300 dark:border-neutral-700", children: [(0, jsx_runtime_1.jsx)(avatar_1.AvatarImage, { src: user.src }), (0, jsx_runtime_1.jsx)(avatar_1.AvatarFallback, { children: user.fallback }), (0, jsx_runtime_1.jsx)(avatar_group_1.AvatarGroupTooltip, { children: (0, jsx_runtime_1.jsx)("p", { children: user.tooltip }) })] }) }, user.id)); }) }, offline.map(function (u) { return u.id; }).join('_') + '-offline') }))] }) }));
}
