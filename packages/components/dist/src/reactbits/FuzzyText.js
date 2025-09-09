"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var FuzzyText = function (_a) {
    var children = _a.children, _b = _a.fontSize, fontSize = _b === void 0 ? 'clamp(2rem, 8vw, 8rem)' : _b, _c = _a.fontWeight, fontWeight = _c === void 0 ? 900 : _c, _d = _a.fontFamily, fontFamily = _d === void 0 ? 'inherit' : _d, _e = _a.color, color = _e === void 0 ? '#fff' : _e, _f = _a.enableHover, enableHover = _f === void 0 ? true : _f, _g = _a.baseIntensity, baseIntensity = _g === void 0 ? 0.18 : _g, _h = _a.hoverIntensity, hoverIntensity = _h === void 0 ? 0.5 : _h;
    var canvasRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var animationFrameId;
        var isCancelled = false;
        var canvas = canvasRef.current;
        if (!canvas)
            return;
        var init = function () { return __awaiter(void 0, void 0, void 0, function () {
            var ctx, computedFontFamily, fontSizeStr, numericFontSize, temp, computedSize, text, offscreen, offCtx, metrics, actualLeft, actualRight, actualAscent, actualDescent, textBoundingWidth, tightHeight, extraWidthBuffer, offscreenWidth, xOffset, horizontalMargin, verticalMargin, interactiveLeft, interactiveTop, interactiveRight, interactiveBottom, isHovering, fuzzRange, run, isInsideTextArea, handleMouseMove, handleMouseLeave, handleTouchMove, handleTouchEnd, cleanup;
            var _a, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (!((_a = document.fonts) === null || _a === void 0 ? void 0 : _a.ready)) return [3 /*break*/, 2];
                        return [4 /*yield*/, document.fonts.ready];
                    case 1:
                        _f.sent();
                        _f.label = 2;
                    case 2:
                        if (isCancelled)
                            return [2 /*return*/];
                        ctx = canvas.getContext('2d');
                        if (!ctx)
                            return [2 /*return*/];
                        computedFontFamily = fontFamily === 'inherit' ? window.getComputedStyle(canvas).fontFamily || 'sans-serif' : fontFamily;
                        fontSizeStr = typeof fontSize === 'number' ? "".concat(fontSize, "px") : fontSize;
                        if (typeof fontSize === 'number') {
                            numericFontSize = fontSize;
                        }
                        else {
                            temp = document.createElement('span');
                            temp.style.fontSize = fontSize;
                            document.body.appendChild(temp);
                            computedSize = window.getComputedStyle(temp).fontSize;
                            numericFontSize = parseFloat(computedSize);
                            document.body.removeChild(temp);
                        }
                        text = react_1.default.Children.toArray(children).join('');
                        offscreen = document.createElement('canvas');
                        offCtx = offscreen.getContext('2d');
                        if (!offCtx)
                            return [2 /*return*/];
                        offCtx.font = "".concat(fontWeight, " ").concat(fontSizeStr, " ").concat(computedFontFamily);
                        offCtx.textBaseline = 'alphabetic';
                        metrics = offCtx.measureText(text);
                        actualLeft = (_b = metrics.actualBoundingBoxLeft) !== null && _b !== void 0 ? _b : 0;
                        actualRight = (_c = metrics.actualBoundingBoxRight) !== null && _c !== void 0 ? _c : metrics.width;
                        actualAscent = (_d = metrics.actualBoundingBoxAscent) !== null && _d !== void 0 ? _d : numericFontSize;
                        actualDescent = (_e = metrics.actualBoundingBoxDescent) !== null && _e !== void 0 ? _e : numericFontSize * 0.2;
                        textBoundingWidth = Math.ceil(actualLeft + actualRight);
                        tightHeight = Math.ceil(actualAscent + actualDescent);
                        extraWidthBuffer = 10;
                        offscreenWidth = textBoundingWidth + extraWidthBuffer;
                        offscreen.width = offscreenWidth;
                        offscreen.height = tightHeight;
                        xOffset = extraWidthBuffer / 2;
                        offCtx.font = "".concat(fontWeight, " ").concat(fontSizeStr, " ").concat(computedFontFamily);
                        offCtx.textBaseline = 'alphabetic';
                        offCtx.fillStyle = color;
                        offCtx.fillText(text, xOffset - actualLeft, actualAscent);
                        horizontalMargin = 50;
                        verticalMargin = 0;
                        canvas.width = offscreenWidth + horizontalMargin * 2;
                        canvas.height = tightHeight + verticalMargin * 2;
                        ctx.translate(horizontalMargin, verticalMargin);
                        interactiveLeft = horizontalMargin + xOffset;
                        interactiveTop = verticalMargin;
                        interactiveRight = interactiveLeft + textBoundingWidth;
                        interactiveBottom = interactiveTop + tightHeight;
                        isHovering = false;
                        fuzzRange = 30;
                        run = function () {
                            if (isCancelled)
                                return;
                            ctx.clearRect(-fuzzRange, -fuzzRange, offscreenWidth + 2 * fuzzRange, tightHeight + 2 * fuzzRange);
                            var intensity = isHovering ? hoverIntensity : baseIntensity;
                            for (var j = 0; j < tightHeight; j++) {
                                var dx = Math.floor(intensity * (Math.random() - 0.5) * fuzzRange);
                                ctx.drawImage(offscreen, 0, j, offscreenWidth, 1, dx, j, offscreenWidth, 1);
                            }
                            animationFrameId = window.requestAnimationFrame(run);
                        };
                        run();
                        isInsideTextArea = function (x, y) {
                            return x >= interactiveLeft && x <= interactiveRight && y >= interactiveTop && y <= interactiveBottom;
                        };
                        handleMouseMove = function (e) {
                            if (!enableHover)
                                return;
                            var rect = canvas.getBoundingClientRect();
                            var x = e.clientX - rect.left;
                            var y = e.clientY - rect.top;
                            isHovering = isInsideTextArea(x, y);
                        };
                        handleMouseLeave = function () {
                            isHovering = false;
                        };
                        handleTouchMove = function (e) {
                            if (!enableHover)
                                return;
                            e.preventDefault();
                            var rect = canvas.getBoundingClientRect();
                            var touch = e.touches[0];
                            var x = touch.clientX - rect.left;
                            var y = touch.clientY - rect.top;
                            isHovering = isInsideTextArea(x, y);
                        };
                        handleTouchEnd = function () {
                            isHovering = false;
                        };
                        if (enableHover) {
                            canvas.addEventListener('mousemove', handleMouseMove);
                            canvas.addEventListener('mouseleave', handleMouseLeave);
                            canvas.addEventListener('touchmove', handleTouchMove, {
                                passive: false
                            });
                            canvas.addEventListener('touchend', handleTouchEnd);
                        }
                        cleanup = function () {
                            window.cancelAnimationFrame(animationFrameId);
                            if (enableHover) {
                                canvas.removeEventListener('mousemove', handleMouseMove);
                                canvas.removeEventListener('mouseleave', handleMouseLeave);
                                canvas.removeEventListener('touchmove', handleTouchMove);
                                canvas.removeEventListener('touchend', handleTouchEnd);
                            }
                        };
                        canvas.cleanupFuzzyText = cleanup;
                        return [2 /*return*/];
                }
            });
        }); };
        init();
        return function () {
            isCancelled = true;
            window.cancelAnimationFrame(animationFrameId);
            if (canvas && canvas.cleanupFuzzyText) {
                canvas.cleanupFuzzyText();
            }
        };
    }, [children, fontSize, fontWeight, fontFamily, color, enableHover, baseIntensity, hoverIntensity]);
    return (0, jsx_runtime_1.jsx)("canvas", { ref: canvasRef });
};
exports.default = FuzzyText;
