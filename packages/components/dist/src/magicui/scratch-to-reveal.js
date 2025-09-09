"use strict";
"use client";
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
exports.ScratchToReveal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("@/lib/utils");
var react_1 = require("motion/react");
var react_2 = require("react");
var ScratchToReveal = function (_a) {
    var width = _a.width, height = _a.height, _b = _a.minScratchPercentage, minScratchPercentage = _b === void 0 ? 50 : _b, onComplete = _a.onComplete, children = _a.children, className = _a.className, _c = _a.gradientColors, gradientColors = _c === void 0 ? ["#A97CF8", "#F38CB8", "#FDCC92"] : _c;
    var canvasRef = (0, react_2.useRef)(null);
    var _d = (0, react_2.useState)(false), isScratching = _d[0], setIsScratching = _d[1];
    var _e = (0, react_2.useState)(false), isComplete = _e[0], setIsComplete = _e[1];
    var controls = (0, react_1.useAnimation)();
    (0, react_2.useEffect)(function () {
        var canvas = canvasRef.current;
        var ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
        if (canvas && ctx) {
            ctx.fillStyle = "#ccc";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, gradientColors[0]);
            gradient.addColorStop(0.5, gradientColors[1]);
            gradient.addColorStop(1, gradientColors[2]);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    }, [gradientColors]);
    (0, react_2.useEffect)(function () {
        var handleDocumentMouseMove = function (event) {
            if (!isScratching)
                return;
            scratch(event.clientX, event.clientY);
        };
        var handleDocumentTouchMove = function (event) {
            if (!isScratching)
                return;
            var touch = event.touches[0];
            scratch(touch.clientX, touch.clientY);
        };
        var handleDocumentMouseUp = function () {
            setIsScratching(false);
            checkCompletion();
        };
        var handleDocumentTouchEnd = function () {
            setIsScratching(false);
            checkCompletion();
        };
        document.addEventListener("mousedown", handleDocumentMouseMove);
        document.addEventListener("mousemove", handleDocumentMouseMove);
        document.addEventListener("touchstart", handleDocumentTouchMove);
        document.addEventListener("touchmove", handleDocumentTouchMove);
        document.addEventListener("mouseup", handleDocumentMouseUp);
        document.addEventListener("touchend", handleDocumentTouchEnd);
        document.addEventListener("touchcancel", handleDocumentTouchEnd);
        return function () {
            document.removeEventListener("mousedown", handleDocumentMouseMove);
            document.removeEventListener("mousemove", handleDocumentMouseMove);
            document.removeEventListener("touchstart", handleDocumentTouchMove);
            document.removeEventListener("touchmove", handleDocumentTouchMove);
            document.removeEventListener("mouseup", handleDocumentMouseUp);
            document.removeEventListener("touchend", handleDocumentTouchEnd);
            document.removeEventListener("touchcancel", handleDocumentTouchEnd);
        };
    }, [isScratching]);
    var handleMouseDown = function () { return setIsScratching(true); };
    var handleTouchStart = function () { return setIsScratching(true); };
    var scratch = function (clientX, clientY) {
        var canvas = canvasRef.current;
        var ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
        if (canvas && ctx) {
            var rect = canvas.getBoundingClientRect();
            var x = clientX - rect.left + 16;
            var y = clientY - rect.top + 16;
            ctx.globalCompositeOperation = "destination-out";
            ctx.beginPath();
            ctx.arc(x, y, 30, 0, Math.PI * 2);
            ctx.fill();
        }
    };
    var startAnimation = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, controls.start({
                        scale: [1, 1.5, 1],
                        rotate: [0, 10, -10, 10, -10, 0],
                        transition: { duration: 0.5 },
                    })];
                case 1:
                    _a.sent();
                    // Call onComplete after animation finishes
                    if (onComplete) {
                        onComplete();
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var checkCompletion = function () {
        if (isComplete)
            return;
        var canvas = canvasRef.current;
        var ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
        if (canvas && ctx) {
            var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            var pixels = imageData.data;
            var totalPixels = pixels.length / 4;
            var clearPixels = 0;
            for (var i = 3; i < pixels.length; i += 4) {
                if (pixels[i] === 0)
                    clearPixels++;
            }
            var percentage = (clearPixels / totalPixels) * 100;
            if (percentage >= minScratchPercentage) {
                setIsComplete(true);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                startAnimation();
            }
        }
    };
    return ((0, jsx_runtime_1.jsxs)(react_1.motion.div, { className: (0, utils_1.cn)("relative select-none", className), style: {
            width: width,
            height: height,
            cursor: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNSIgc3R5bGU9ImZpbGw6I2ZmZjtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6MXB4OyIgLz4KPC9zdmc+'), auto",
        }, animate: controls, children: [(0, jsx_runtime_1.jsx)("canvas", { ref: canvasRef, width: width, height: height, className: "absolute left-0 top-0", onMouseDown: handleMouseDown, onTouchStart: handleTouchStart }), children] }));
};
exports.ScratchToReveal = ScratchToReveal;
