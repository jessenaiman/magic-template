"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CountUp;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("motion/react");
function CountUp(_a) {
    var to = _a.to, _b = _a.from, from = _b === void 0 ? 0 : _b, _c = _a.direction, direction = _c === void 0 ? 'up' : _c, _d = _a.delay, delay = _d === void 0 ? 0 : _d, _e = _a.duration, duration = _e === void 0 ? 2 : _e, _f = _a.className, className = _f === void 0 ? '' : _f, _g = _a.startWhen, startWhen = _g === void 0 ? true : _g, _h = _a.separator, separator = _h === void 0 ? '' : _h, onStart = _a.onStart, onEnd = _a.onEnd;
    var ref = (0, react_1.useRef)(null);
    var motionValue = (0, react_2.useMotionValue)(direction === 'down' ? to : from);
    var damping = 20 + 40 * (1 / duration);
    var stiffness = 100 * (1 / duration);
    var springValue = (0, react_2.useSpring)(motionValue, {
        damping: damping,
        stiffness: stiffness
    });
    var isInView = (0, react_2.useInView)(ref, { once: true, margin: '0px' });
    var getDecimalPlaces = function (num) {
        var str = num.toString();
        if (str.includes('.')) {
            var decimals = str.split('.')[1];
            if (parseInt(decimals) !== 0) {
                return decimals.length;
            }
        }
        return 0;
    };
    var maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));
    (0, react_1.useEffect)(function () {
        if (ref.current) {
            ref.current.textContent = String(direction === 'down' ? to : from);
        }
    }, [from, to, direction]);
    (0, react_1.useEffect)(function () {
        if (isInView && startWhen) {
            if (typeof onStart === 'function') {
                onStart();
            }
            var timeoutId_1 = setTimeout(function () {
                motionValue.set(direction === 'down' ? from : to);
            }, delay * 1000);
            var durationTimeoutId_1 = setTimeout(function () {
                if (typeof onEnd === 'function') {
                    onEnd();
                }
            }, delay * 1000 + duration * 1000);
            return function () {
                clearTimeout(timeoutId_1);
                clearTimeout(durationTimeoutId_1);
            };
        }
    }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration]);
    (0, react_1.useEffect)(function () {
        var unsubscribe = springValue.on('change', function (latest) {
            if (ref.current) {
                var hasDecimals = maxDecimals > 0;
                var options = {
                    useGrouping: !!separator,
                    minimumFractionDigits: hasDecimals ? maxDecimals : 0,
                    maximumFractionDigits: hasDecimals ? maxDecimals : 0
                };
                var formattedNumber = Intl.NumberFormat('en-US', options).format(latest);
                ref.current.textContent = separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
            }
        });
        return function () { return unsubscribe(); };
    }, [springValue, separator, maxDecimals]);
    return (0, jsx_runtime_1.jsx)("span", { className: className, ref: ref });
}
