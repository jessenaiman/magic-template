"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var FadeContent = function (_a) {
    var children = _a.children, _b = _a.blur, blur = _b === void 0 ? false : _b, _c = _a.duration, duration = _c === void 0 ? 1000 : _c, _d = _a.easing, easing = _d === void 0 ? 'ease-out' : _d, _e = _a.delay, delay = _e === void 0 ? 0 : _e, _f = _a.threshold, threshold = _f === void 0 ? 0.1 : _f, _g = _a.initialOpacity, initialOpacity = _g === void 0 ? 0 : _g, _h = _a.className, className = _h === void 0 ? '' : _h;
    var _j = (0, react_1.useState)(false), inView = _j[0], setInView = _j[1];
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var element = ref.current;
        if (!element)
            return;
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                observer.unobserve(element);
                setTimeout(function () {
                    setInView(true);
                }, delay);
            }
        }, { threshold: threshold });
        observer.observe(element);
        return function () { return observer.disconnect(); };
    }, [threshold, delay]);
    return ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: className, style: {
            opacity: inView ? 1 : initialOpacity,
            transition: "opacity ".concat(duration, "ms ").concat(easing, ", filter ").concat(duration, "ms ").concat(easing),
            filter: blur ? (inView ? 'blur(0px)' : 'blur(10px)') : 'none'
        }, children: children }));
};
exports.default = FadeContent;
