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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfettiButton = exports.Confetti = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var canvas_confetti_1 = __importDefault(require("canvas-confetti"));
var react_1 = require("react");
var button_1 = require("@/packages/ui/src/ui/button");
var ConfettiContext = (0, react_1.createContext)({});
// Define component first
var ConfettiComponent = (0, react_1.forwardRef)(function (props, ref) {
    var options = props.options, _a = props.globalOptions, globalOptions = _a === void 0 ? { resize: true, useWorker: true } : _a, _b = props.manualstart, manualstart = _b === void 0 ? false : _b, children = props.children, rest = __rest(props, ["options", "globalOptions", "manualstart", "children"]);
    var instanceRef = (0, react_1.useRef)(null);
    var canvasRef = (0, react_1.useCallback)(function (node) {
        if (node !== null) {
            if (instanceRef.current)
                return;
            instanceRef.current = canvas_confetti_1.default.create(node, __assign(__assign({}, globalOptions), { resize: true }));
        }
        else {
            if (instanceRef.current) {
                instanceRef.current.reset();
                instanceRef.current = null;
            }
        }
    }, [globalOptions]);
    var fire = (0, react_1.useCallback)(function () {
        var args_1 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args_1[_i] = arguments[_i];
        }
        return __awaiter(void 0, __spreadArray([], args_1, true), void 0, function (opts) {
            var error_1;
            var _a;
            if (opts === void 0) { opts = {}; }
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, ((_a = instanceRef.current) === null || _a === void 0 ? void 0 : _a.call(instanceRef, __assign(__assign({}, options), opts)))];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.error("Confetti error:", error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }, [options]);
    var api = (0, react_1.useMemo)(function () { return ({
        fire: fire,
    }); }, [fire]);
    (0, react_1.useImperativeHandle)(ref, function () { return api; }, [api]);
    (0, react_1.useEffect)(function () {
        if (!manualstart) {
            (function () { return __awaiter(void 0, void 0, void 0, function () {
                var error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, fire()];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            console.error("Confetti effect error:", error_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); })();
        }
    }, [manualstart, fire]);
    return ((0, jsx_runtime_1.jsxs)(ConfettiContext.Provider, { value: api, children: [(0, jsx_runtime_1.jsx)("canvas", __assign({ ref: canvasRef }, rest)), children] }));
});
// Set display name immediately
ConfettiComponent.displayName = "Confetti";
// Export as Confetti
exports.Confetti = ConfettiComponent;
var ConfettiButtonComponent = function (_a) {
    var options = _a.options, children = _a.children, props = __rest(_a, ["options", "children"]);
    var handleClick = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var rect, x, y, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    rect = event.currentTarget.getBoundingClientRect();
                    x = rect.left + rect.width / 2;
                    y = rect.top + rect.height / 2;
                    return [4 /*yield*/, (0, canvas_confetti_1.default)(__assign(__assign({}, options), { origin: {
                                x: x / window.innerWidth,
                                y: y / window.innerHeight,
                            } }))];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error("Confetti button error:", error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(button_1.Button, __assign({ onClick: handleClick }, props, { children: children })));
};
ConfettiButtonComponent.displayName = "ConfettiButton";
exports.ConfettiButton = ConfettiButtonComponent;
