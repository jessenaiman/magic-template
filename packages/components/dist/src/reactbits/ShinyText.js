"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var ShinyText = function (_a) {
    var text = _a.text, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.speed, speed = _c === void 0 ? 5 : _c, _d = _a.className, className = _d === void 0 ? '' : _d;
    var animationDuration = "".concat(speed, "s");
    return ((0, jsx_runtime_1.jsx)("div", { className: "text-[#b5b5b5a4] bg-clip-text inline-block ".concat(disabled ? '' : 'animate-shine', " ").concat(className), style: {
            backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            animationDuration: animationDuration
        }, children: text }));
};
exports.default = ShinyText;
