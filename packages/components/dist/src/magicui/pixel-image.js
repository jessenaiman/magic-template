"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixelImage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("@/lib/utils");
var react_1 = require("react");
var DEFAULT_GRIDS = {
    "6x4": { rows: 4, cols: 6 },
    "8x8": { rows: 8, cols: 8 },
    "8x3": { rows: 3, cols: 8 },
    "4x6": { rows: 6, cols: 4 },
    "3x8": { rows: 8, cols: 3 },
};
var PixelImage = function (_a) {
    var src = _a.src, _b = _a.grid, grid = _b === void 0 ? "6x4" : _b, _c = _a.grayscaleAnimation, grayscaleAnimation = _c === void 0 ? true : _c, _d = _a.pixelFadeInDuration, pixelFadeInDuration = _d === void 0 ? 1000 : _d, _e = _a.maxAnimationDelay, maxAnimationDelay = _e === void 0 ? 1200 : _e, _f = _a.colorRevealDelay, colorRevealDelay = _f === void 0 ? 1300 : _f, customGrid = _a.customGrid;
    var _g = (0, react_1.useState)(false), isVisible = _g[0], setIsVisible = _g[1];
    var _h = (0, react_1.useState)(false), showColor = _h[0], setShowColor = _h[1];
    var MIN_GRID = 1;
    var MAX_GRID = 16;
    var _j = (0, react_1.useMemo)(function () {
        var isValidGrid = function (grid) {
            if (!grid)
                return false;
            var rows = grid.rows, cols = grid.cols;
            return (Number.isInteger(rows) &&
                Number.isInteger(cols) &&
                rows >= MIN_GRID &&
                cols >= MIN_GRID &&
                rows <= MAX_GRID &&
                cols <= MAX_GRID);
        };
        return isValidGrid(customGrid) ? customGrid : DEFAULT_GRIDS[grid];
    }, [customGrid, grid]), rows = _j.rows, cols = _j.cols;
    (0, react_1.useEffect)(function () {
        setIsVisible(true);
        var colorTimeout = setTimeout(function () {
            setShowColor(true);
        }, colorRevealDelay);
        return function () { return clearTimeout(colorTimeout); };
    }, [colorRevealDelay]);
    var pieces = (0, react_1.useMemo)(function () {
        var total = rows * cols;
        return Array.from({ length: total }, function (_, index) {
            var row = Math.floor(index / cols);
            var col = index % cols;
            var clipPath = "polygon(\n        ".concat(col * (100 / cols), "% ").concat(row * (100 / rows), "%,\n        ").concat((col + 1) * (100 / cols), "% ").concat(row * (100 / rows), "%,\n        ").concat((col + 1) * (100 / cols), "% ").concat((row + 1) * (100 / rows), "%,\n        ").concat(col * (100 / cols), "% ").concat((row + 1) * (100 / rows), "%\n      )");
            var delay = Math.random() * maxAnimationDelay;
            return {
                clipPath: clipPath,
                delay: delay,
            };
        });
    }, [rows, cols, maxAnimationDelay]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "relative h-72 w-72 select-none md:h-96 md:w-96", children: pieces.map(function (piece, index) { return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("absolute inset-0 transition-all ease-out", isVisible ? "opacity-100" : "opacity-0"), style: {
                clipPath: piece.clipPath,
                transitionDelay: "".concat(piece.delay, "ms"),
                transitionDuration: "".concat(pixelFadeInDuration, "ms"),
            }, children: (0, jsx_runtime_1.jsx)("img", { src: src, alt: "Pixel image piece ".concat(index + 1), className: (0, utils_1.cn)("z-1 object-cover rounded-[2.5rem]", grayscaleAnimation && (showColor ? "grayscale-0" : "grayscale")), style: {
                    transition: grayscaleAnimation
                        ? "filter ".concat(pixelFadeInDuration, "ms cubic-bezier(0.4, 0, 0.2, 1)")
                        : "none",
                }, draggable: false }) }, index)); }) }));
};
exports.PixelImage = PixelImage;
