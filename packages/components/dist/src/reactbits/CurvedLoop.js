"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var CurvedLoop = function (_a) {
    var _b = _a.marqueeText, marqueeText = _b === void 0 ? '' : _b, _c = _a.speed, speed = _c === void 0 ? 2 : _c, className = _a.className, _d = _a.curveAmount, curveAmount = _d === void 0 ? 400 : _d, _e = _a.direction, direction = _e === void 0 ? 'left' : _e, _f = _a.interactive, interactive = _f === void 0 ? true : _f;
    var text = (0, react_1.useMemo)(function () {
        var hasTrailing = /\s|\u00A0$/.test(marqueeText);
        return (hasTrailing ? marqueeText.replace(/\s+$/, '') : marqueeText) + '\u00A0';
    }, [marqueeText]);
    var measureRef = (0, react_1.useRef)(null);
    var textPathRef = (0, react_1.useRef)(null);
    var pathRef = (0, react_1.useRef)(null);
    var _g = (0, react_1.useState)(0), spacing = _g[0], setSpacing = _g[1];
    var _h = (0, react_1.useState)(0), offset = _h[0], setOffset = _h[1];
    var uid = (0, react_1.useId)();
    var pathId = "curve-".concat(uid);
    var pathD = "M-100,40 Q500,".concat(40 + curveAmount, " 1540,40");
    var dragRef = (0, react_1.useRef)(false);
    var lastXRef = (0, react_1.useRef)(0);
    var dirRef = (0, react_1.useRef)(direction);
    var velRef = (0, react_1.useRef)(0);
    var textLength = spacing;
    var totalText = textLength
        ? Array(Math.ceil(1800 / textLength) + 2)
            .fill(text)
            .join('')
        : text;
    var ready = spacing > 0;
    (0, react_1.useEffect)(function () {
        if (measureRef.current)
            setSpacing(measureRef.current.getComputedTextLength());
    }, [text, className]);
    (0, react_1.useEffect)(function () {
        if (!spacing)
            return;
        if (textPathRef.current) {
            var initial = -spacing;
            textPathRef.current.setAttribute('startOffset', initial + 'px');
            setOffset(initial);
        }
    }, [spacing]);
    (0, react_1.useEffect)(function () {
        if (!spacing || !ready)
            return;
        var frame = 0;
        var step = function () {
            if (!dragRef.current && textPathRef.current) {
                var delta = dirRef.current === 'right' ? speed : -speed;
                var currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0');
                var newOffset = currentOffset + delta;
                var wrapPoint = spacing;
                if (newOffset <= -wrapPoint)
                    newOffset += wrapPoint;
                if (newOffset > 0)
                    newOffset -= wrapPoint;
                textPathRef.current.setAttribute('startOffset', newOffset + 'px');
                setOffset(newOffset);
            }
            frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
        return function () { return cancelAnimationFrame(frame); };
    }, [spacing, speed, ready]);
    var onPointerDown = function (e) {
        if (!interactive)
            return;
        dragRef.current = true;
        lastXRef.current = e.clientX;
        velRef.current = 0;
        e.target.setPointerCapture(e.pointerId);
    };
    var onPointerMove = function (e) {
        if (!interactive || !dragRef.current || !textPathRef.current)
            return;
        var dx = e.clientX - lastXRef.current;
        lastXRef.current = e.clientX;
        velRef.current = dx;
        var currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0');
        var newOffset = currentOffset + dx;
        var wrapPoint = spacing;
        if (newOffset <= -wrapPoint)
            newOffset += wrapPoint;
        if (newOffset > 0)
            newOffset -= wrapPoint;
        textPathRef.current.setAttribute('startOffset', newOffset + 'px');
        setOffset(newOffset);
    };
    var endDrag = function () {
        if (!interactive)
            return;
        dragRef.current = false;
        dirRef.current = velRef.current > 0 ? 'right' : 'left';
    };
    var cursorStyle = interactive ? (dragRef.current ? 'grabbing' : 'grab') : 'auto';
    return ((0, jsx_runtime_1.jsx)("div", { className: "min-h-screen flex items-center justify-center w-full", style: { visibility: ready ? 'visible' : 'hidden', cursor: cursorStyle }, onPointerDown: onPointerDown, onPointerMove: onPointerMove, onPointerUp: endDrag, onPointerLeave: endDrag, children: (0, jsx_runtime_1.jsxs)("svg", { className: "select-none w-full overflow-visible block aspect-[100/12] text-[6rem] font-bold uppercase leading-none", viewBox: "0 0 1440 120", children: [(0, jsx_runtime_1.jsx)("text", { ref: measureRef, xmlSpace: "preserve", style: { visibility: 'hidden', opacity: 0, pointerEvents: 'none' }, children: text }), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("path", { ref: pathRef, id: pathId, d: pathD, fill: "none", stroke: "transparent" }) }), ready && ((0, jsx_runtime_1.jsx)("text", { xmlSpace: "preserve", className: "fill-white ".concat(className !== null && className !== void 0 ? className : ''), children: (0, jsx_runtime_1.jsx)("textPath", { ref: textPathRef, href: "#".concat(pathId), startOffset: offset + 'px', xmlSpace: "preserve", children: totalText }) }))] }) }));
};
exports.default = CurvedLoop;
