"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ogl_1 = require("ogl");
function parseHexColor(hex) {
    var c = hex.replace('#', '');
    var r = parseInt(c.substring(0, 2), 16) / 255;
    var g = parseInt(c.substring(2, 4), 16) / 255;
    var b = parseInt(c.substring(4, 6), 16) / 255;
    return [r, g, b];
}
function fract(x) {
    return x - Math.floor(x);
}
function hash31(p) {
    var r = [p * 0.1031, p * 0.103, p * 0.0973].map(fract);
    var r_yzx = [r[1], r[2], r[0]];
    var dotVal = r[0] * (r_yzx[0] + 33.33) + r[1] * (r_yzx[1] + 33.33) + r[2] * (r_yzx[2] + 33.33);
    for (var i = 0; i < 3; i++) {
        r[i] = fract(r[i] + dotVal);
    }
    return r;
}
function hash33(v) {
    var p = [v[0] * 0.1031, v[1] * 0.103, v[2] * 0.0973].map(fract);
    var p_yxz = [p[1], p[0], p[2]];
    var dotVal = p[0] * (p_yxz[0] + 33.33) + p[1] * (p_yxz[1] + 33.33) + p[2] * (p_yxz[2] + 33.33);
    for (var i = 0; i < 3; i++) {
        p[i] = fract(p[i] + dotVal);
    }
    var p_xxy = [p[0], p[0], p[1]];
    var p_yxx = [p[1], p[0], p[0]];
    var p_zyx = [p[2], p[1], p[0]];
    var result = [];
    for (var i = 0; i < 3; i++) {
        result[i] = fract((p_xxy[i] + p_yxx[i]) * p_zyx[i]);
    }
    return result;
}
var vertex = "#version 300 es\nprecision highp float;\nlayout(location = 0) in vec2 position;\nvoid main() {\n    gl_Position = vec4(position, 0.0, 1.0);\n}\n";
var fragment = "#version 300 es\nprecision highp float;\nuniform vec3 iResolution;\nuniform float iTime;\nuniform vec3 iMouse;\nuniform vec3 iColor;\nuniform vec3 iCursorColor;\nuniform float iAnimationSize;\nuniform int iBallCount;\nuniform float iCursorBallSize;\nuniform vec3 iMetaBalls[50];\nuniform float iClumpFactor;\nuniform bool enableTransparency;\nout vec4 outColor;\nconst float PI = 3.14159265359;\n \nfloat getMetaBallValue(vec2 c, float r, vec2 p) {\n    vec2 d = p - c;\n    float dist2 = dot(d, d);\n    return (r * r) / dist2;\n}\n \nvoid main() {\n    vec2 fc = gl_FragCoord.xy;\n    float scale = iAnimationSize / iResolution.y;\n    vec2 coord = (fc - iResolution.xy * 0.5) * scale;\n    vec2 mouseW = (iMouse.xy - iResolution.xy * 0.5) * scale;\n    float m1 = 0.0;\n    for (int i = 0; i < 50; i++) {\n        if (i >= iBallCount) break;\n        m1 += getMetaBallValue(iMetaBalls[i].xy, iMetaBalls[i].z, coord);\n    }\n    float m2 = getMetaBallValue(mouseW, iCursorBallSize, coord);\n    float total = m1 + m2;\n    float f = smoothstep(-1.0, 1.0, (total - 1.3) / min(1.0, fwidth(total)));\n    vec3 cFinal = vec3(0.0);\n    if (total > 0.0) {\n        float alpha1 = m1 / total;\n        float alpha2 = m2 / total;\n        cFinal = iColor * alpha1 + iCursorColor * alpha2;\n    }\n    outColor = vec4(cFinal * f, enableTransparency ? f : 1.0);\n}\n";
var MetaBalls = function (_a) {
    var _b = _a.color, color = _b === void 0 ? '#ffffff' : _b, _c = _a.speed, speed = _c === void 0 ? 0.3 : _c, _d = _a.enableMouseInteraction, enableMouseInteraction = _d === void 0 ? true : _d, _e = _a.hoverSmoothness, hoverSmoothness = _e === void 0 ? 0.05 : _e, _f = _a.animationSize, animationSize = _f === void 0 ? 30 : _f, _g = _a.ballCount, ballCount = _g === void 0 ? 15 : _g, _h = _a.clumpFactor, clumpFactor = _h === void 0 ? 1 : _h, _j = _a.cursorBallSize, cursorBallSize = _j === void 0 ? 3 : _j, _k = _a.cursorBallColor, cursorBallColor = _k === void 0 ? '#ffffff' : _k, _l = _a.enableTransparency, enableTransparency = _l === void 0 ? false : _l;
    var containerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var container = containerRef.current;
        if (!container)
            return;
        var dpr = 1;
        var renderer = new ogl_1.Renderer({
            dpr: dpr,
            alpha: true,
            premultipliedAlpha: false
        });
        var gl = renderer.gl;
        gl.clearColor(0, 0, 0, enableTransparency ? 0 : 1);
        container.appendChild(gl.canvas);
        var camera = new ogl_1.Camera(gl, {
            left: -1,
            right: 1,
            top: 1,
            bottom: -1,
            near: 0.1,
            far: 10
        });
        camera.position.z = 1;
        var geometry = new ogl_1.Triangle(gl);
        var _a = parseHexColor(color), r1 = _a[0], g1 = _a[1], b1 = _a[2];
        var _b = parseHexColor(cursorBallColor), r2 = _b[0], g2 = _b[1], b2 = _b[2];
        var metaBallsUniform = [];
        for (var i = 0; i < 50; i++) {
            metaBallsUniform.push(new ogl_1.Vec3(0, 0, 0));
        }
        var program = new ogl_1.Program(gl, {
            vertex: vertex,
            fragment: fragment,
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new ogl_1.Vec3(0, 0, 0) },
                iMouse: { value: new ogl_1.Vec3(0, 0, 0) },
                iColor: { value: new ogl_1.Vec3(r1, g1, b1) },
                iCursorColor: { value: new ogl_1.Vec3(r2, g2, b2) },
                iAnimationSize: { value: animationSize },
                iBallCount: { value: ballCount },
                iCursorBallSize: { value: cursorBallSize },
                iMetaBalls: { value: metaBallsUniform },
                iClumpFactor: { value: clumpFactor },
                enableTransparency: { value: enableTransparency }
            }
        });
        var mesh = new ogl_1.Mesh(gl, { geometry: geometry, program: program });
        var scene = new ogl_1.Transform();
        mesh.setParent(scene);
        var maxBalls = 50;
        var effectiveBallCount = Math.min(ballCount, maxBalls);
        var ballParams = [];
        for (var i = 0; i < effectiveBallCount; i++) {
            var idx = i + 1;
            var h1 = hash31(idx);
            var st = h1[0] * (2 * Math.PI);
            var dtFactor = 0.1 * Math.PI + h1[1] * (0.4 * Math.PI - 0.1 * Math.PI);
            var baseScale = 5.0 + h1[1] * (10.0 - 5.0);
            var h2 = hash33(h1);
            var toggle = Math.floor(h2[0] * 2.0);
            var radiusVal = 0.5 + h2[2] * (2.0 - 0.5);
            ballParams.push({ st: st, dtFactor: dtFactor, baseScale: baseScale, toggle: toggle, radius: radiusVal });
        }
        var mouseBallPos = { x: 0, y: 0 };
        var pointerInside = false;
        var pointerX = 0;
        var pointerY = 0;
        function resize() {
            if (!container)
                return;
            var width = container.clientWidth;
            var height = container.clientHeight;
            renderer.setSize(width * dpr, height * dpr);
            gl.canvas.style.width = "".concat(width, "px");
            gl.canvas.style.height = "".concat(height, "px");
            program.uniforms.iResolution.value.set(gl.canvas.width, gl.canvas.height, 0);
        }
        window.addEventListener('resize', resize);
        resize();
        function onPointerMove(e) {
            if (!enableMouseInteraction || !container)
                return;
            var rect = container.getBoundingClientRect();
            var px = e.clientX - rect.left;
            var py = e.clientY - rect.top;
            pointerX = (px / rect.width) * gl.canvas.width;
            pointerY = (1 - py / rect.height) * gl.canvas.height;
        }
        function onPointerEnter() {
            if (!enableMouseInteraction)
                return;
            pointerInside = true;
        }
        function onPointerLeave() {
            if (!enableMouseInteraction)
                return;
            pointerInside = false;
        }
        container.addEventListener('pointermove', onPointerMove);
        container.addEventListener('pointerenter', onPointerEnter);
        container.addEventListener('pointerleave', onPointerLeave);
        var startTime = performance.now();
        var animationFrameId;
        function update(t) {
            animationFrameId = requestAnimationFrame(update);
            var elapsed = (t - startTime) * 0.001;
            program.uniforms.iTime.value = elapsed;
            for (var i = 0; i < effectiveBallCount; i++) {
                var p = ballParams[i];
                var dt = elapsed * speed * p.dtFactor;
                var th = p.st + dt;
                var x = Math.cos(th);
                var y = Math.sin(th + dt * p.toggle);
                var posX = x * p.baseScale * clumpFactor;
                var posY = y * p.baseScale * clumpFactor;
                metaBallsUniform[i].set(posX, posY, p.radius);
            }
            var targetX, targetY;
            if (pointerInside) {
                targetX = pointerX;
                targetY = pointerY;
            }
            else {
                var cx = gl.canvas.width * 0.5;
                var cy = gl.canvas.height * 0.5;
                var rx = gl.canvas.width * 0.15;
                var ry = gl.canvas.height * 0.15;
                targetX = cx + Math.cos(elapsed * speed) * rx;
                targetY = cy + Math.sin(elapsed * speed) * ry;
            }
            mouseBallPos.x += (targetX - mouseBallPos.x) * hoverSmoothness;
            mouseBallPos.y += (targetY - mouseBallPos.y) * hoverSmoothness;
            program.uniforms.iMouse.value.set(mouseBallPos.x, mouseBallPos.y, 0);
            renderer.render({ scene: scene, camera: camera });
        }
        animationFrameId = requestAnimationFrame(update);
        return function () {
            var _a;
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
            container.removeEventListener('pointermove', onPointerMove);
            container.removeEventListener('pointerenter', onPointerEnter);
            container.removeEventListener('pointerleave', onPointerLeave);
            container.removeChild(gl.canvas);
            (_a = gl.getExtension('WEBGL_lose_context')) === null || _a === void 0 ? void 0 : _a.loseContext();
        };
    }, [
        color,
        cursorBallColor,
        speed,
        enableMouseInteraction,
        hoverSmoothness,
        animationSize,
        ballCount,
        clumpFactor,
        cursorBallSize,
        enableTransparency
    ]);
    return (0, jsx_runtime_1.jsx)("div", { ref: containerRef, className: "w-full h-full relative" });
};
exports.default = MetaBalls;
