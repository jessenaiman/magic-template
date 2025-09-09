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
exports.TextAnimate = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("@/src/lib/utils");
var react_1 = require("motion/react");
var react_2 = require("react");
var staggerTimings = {
    text: 0.06,
    word: 0.05,
    character: 0.03,
    line: 0.06,
};
var defaultContainerVariants = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0,
            staggerChildren: 0.05,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};
var defaultItemVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
};
var defaultItemAnimationVariants = {
    fadeIn: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, y: 20 },
            show: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.3,
                },
            },
            exit: {
                opacity: 0,
                y: 20,
                transition: { duration: 0.3 },
            },
        },
    },
    blurIn: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, filter: "blur(10px)" },
            show: {
                opacity: 1,
                filter: "blur(0px)",
                transition: {
                    duration: 0.3,
                },
            },
            exit: {
                opacity: 0,
                filter: "blur(10px)",
                transition: { duration: 0.3 },
            },
        },
    },
    blurInUp: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
            show: {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                transition: {
                    y: { duration: 0.3 },
                    opacity: { duration: 0.4 },
                    filter: { duration: 0.3 },
                },
            },
            exit: {
                opacity: 0,
                filter: "blur(10px)",
                y: 20,
                transition: {
                    y: { duration: 0.3 },
                    opacity: { duration: 0.4 },
                    filter: { duration: 0.3 },
                },
            },
        },
    },
    blurInDown: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, filter: "blur(10px)", y: -20 },
            show: {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                transition: {
                    y: { duration: 0.3 },
                    opacity: { duration: 0.4 },
                    filter: { duration: 0.3 },
                },
            },
        },
    },
    slideUp: {
        container: defaultContainerVariants,
        item: {
            hidden: { y: 20, opacity: 0 },
            show: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.3,
                },
            },
            exit: {
                y: -20,
                opacity: 0,
                transition: {
                    duration: 0.3,
                },
            },
        },
    },
    slideDown: {
        container: defaultContainerVariants,
        item: {
            hidden: { y: -20, opacity: 0 },
            show: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.3 },
            },
            exit: {
                y: 20,
                opacity: 0,
                transition: { duration: 0.3 },
            },
        },
    },
    slideLeft: {
        container: defaultContainerVariants,
        item: {
            hidden: { x: 20, opacity: 0 },
            show: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.3 },
            },
            exit: {
                x: -20,
                opacity: 0,
                transition: { duration: 0.3 },
            },
        },
    },
    slideRight: {
        container: defaultContainerVariants,
        item: {
            hidden: { x: -20, opacity: 0 },
            show: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.3 },
            },
            exit: {
                x: 20,
                opacity: 0,
                transition: { duration: 0.3 },
            },
        },
    },
    scaleUp: {
        container: defaultContainerVariants,
        item: {
            hidden: { scale: 0.5, opacity: 0 },
            show: {
                scale: 1,
                opacity: 1,
                transition: {
                    duration: 0.3,
                    scale: {
                        type: "spring",
                        damping: 15,
                        stiffness: 300,
                    },
                },
            },
            exit: {
                scale: 0.5,
                opacity: 0,
                transition: { duration: 0.3 },
            },
        },
    },
    scaleDown: {
        container: defaultContainerVariants,
        item: {
            hidden: { scale: 1.5, opacity: 0 },
            show: {
                scale: 1,
                opacity: 1,
                transition: {
                    duration: 0.3,
                    scale: {
                        type: "spring",
                        damping: 15,
                        stiffness: 300,
                    },
                },
            },
            exit: {
                scale: 1.5,
                opacity: 0,
                transition: { duration: 0.3 },
            },
        },
    },
};
var TextAnimateBase = function (_a) {
    var children = _a.children, _b = _a.delay, delay = _b === void 0 ? 0 : _b, _c = _a.duration, duration = _c === void 0 ? 0.3 : _c, variants = _a.variants, className = _a.className, segmentClassName = _a.segmentClassName, _d = _a.as, Component = _d === void 0 ? "p" : _d, _e = _a.startOnView, startOnView = _e === void 0 ? true : _e, _f = _a.once, once = _f === void 0 ? false : _f, _g = _a.by, by = _g === void 0 ? "word" : _g, _h = _a.animation, animation = _h === void 0 ? "fadeIn" : _h, _j = _a.accessible, accessible = _j === void 0 ? true : _j, props = __rest(_a, ["children", "delay", "duration", "variants", "className", "segmentClassName", "as", "startOnView", "once", "by", "animation", "accessible"]);
    var MotionComponent = react_1.motion.create(Component);
    var segments = [];
    switch (by) {
        case "word":
            segments = children.split(/(\s+)/);
            break;
        case "character":
            segments = children.split("");
            break;
        case "line":
            segments = children.split("\n");
            break;
        case "text":
        default:
            segments = [children];
            break;
    }
    var finalVariants = variants
        ? {
            container: {
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        opacity: { duration: 0.01, delay: delay },
                        delayChildren: delay,
                        staggerChildren: duration / segments.length,
                    },
                },
                exit: {
                    opacity: 0,
                    transition: {
                        staggerChildren: duration / segments.length,
                        staggerDirection: -1,
                    },
                },
            },
            item: variants,
        }
        : animation
            ? {
                container: __assign(__assign({}, defaultItemAnimationVariants[animation].container), { show: __assign(__assign({}, defaultItemAnimationVariants[animation].container.show), { transition: {
                            delayChildren: delay,
                            staggerChildren: duration / segments.length,
                        } }), exit: __assign(__assign({}, defaultItemAnimationVariants[animation].container.exit), { transition: {
                            staggerChildren: duration / segments.length,
                            staggerDirection: -1,
                        } }) }),
                item: defaultItemAnimationVariants[animation].item,
            }
            : { container: defaultContainerVariants, item: defaultItemVariants };
    return ((0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { mode: "popLayout", children: (0, jsx_runtime_1.jsxs)(MotionComponent, __assign({ variants: finalVariants.container, initial: "hidden", whileInView: startOnView ? "show" : undefined, animate: startOnView ? undefined : "show", exit: "exit", className: (0, utils_1.cn)("whitespace-pre-wrap", className), viewport: { once: once }, "aria-label": accessible ? children : undefined }, props, { children: [accessible && (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: children }), segments.map(function (segment, i) { return ((0, jsx_runtime_1.jsx)(react_1.motion.span, { variants: finalVariants.item, custom: i * staggerTimings[by], className: (0, utils_1.cn)(by === "line" ? "block" : "inline-block whitespace-pre", by === "character" && "", segmentClassName), "aria-hidden": accessible ? true : undefined, children: segment }, "".concat(by, "-").concat(segment, "-").concat(i))); })] })) }));
};
// Export the memoized version
exports.TextAnimate = (0, react_2.memo)(TextAnimateBase);
