"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ogl_1 = require("ogl");
var Ribbons = function (_a) {
    var _b = _a.colors, colors = _b === void 0 ? ['#ff9346', '#7cff67', '#ffee51', '#5227FF'] : _b, _c = _a.baseSpring, baseSpring = _c === void 0 ? 0.03 : _c, _d = _a.baseFriction, baseFriction = _d === void 0 ? 0.9 : _d, _e = _a.baseThickness, baseThickness = _e === void 0 ? 30 : _e, _f = _a.offsetFactor, offsetFactor = _f === void 0 ? 0.05 : _f, _g = _a.maxAge, maxAge = _g === void 0 ? 500 : _g, _h = _a.pointCount, pointCount = _h === void 0 ? 50 : _h, _j = _a.speedMultiplier, speedMultiplier = _j === void 0 ? 0.6 : _j, _k = _a.enableFade, enableFade = _k === void 0 ? false : _k, _l = _a.enableShaderEffect, enableShaderEffect = _l === void 0 ? false : _l, _m = _a.effectAmplitude, effectAmplitude = _m === void 0 ? 2 : _m, _o = _a.backgroundColor, backgroundColor = _o === void 0 ? [0, 0, 0, 0] : _o;
    var containerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var container = containerRef.current;
        if (!container)
            return;
        var renderer = new ogl_1.Renderer({ dpr: window.devicePixelRatio || 2, alpha: true });
        var gl = renderer.gl;
        if (Array.isArray(backgroundColor) && backgroundColor.length === 4) {
            gl.clearColor(backgroundColor[0], backgroundColor[1], backgroundColor[2], backgroundColor[3]);
        }
        else {
            gl.clearColor(0, 0, 0, 0);
        }
        gl.canvas.style.position = 'absolute';
        gl.canvas.style.top = '0';
        gl.canvas.style.left = '0';
        gl.canvas.style.width = '100%';
        gl.canvas.style.height = '100%';
        container.appendChild(gl.canvas);
        var scene = new ogl_1.Transform();
        var lines = [];
        var vertex = "\n      precision highp float;\n      \n      attribute vec3 position;\n      attribute vec3 next;\n      attribute vec3 prev;\n      attribute vec2 uv;\n      attribute float side;\n      \n      uniform vec2 uResolution;\n      uniform float uDPR;\n      uniform float uThickness;\n      uniform float uTime;\n      uniform float uEnableShaderEffect;\n      uniform float uEffectAmplitude;\n      \n      varying vec2 vUV;\n      \n      vec4 getPosition() {\n          vec4 current = vec4(position, 1.0);\n          vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);\n          vec2 nextScreen = next.xy * aspect;\n          vec2 prevScreen = prev.xy * aspect;\n          vec2 tangent = normalize(nextScreen - prevScreen);\n          vec2 normal = vec2(-tangent.y, tangent.x);\n          normal /= aspect;\n          normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));\n          float dist = length(nextScreen - prevScreen);\n          normal *= smoothstep(0.0, 0.02, dist);\n          float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);\n          float pixelWidth = current.w * pixelWidthRatio;\n          normal *= pixelWidth * uThickness;\n          current.xy -= normal * side;\n          if(uEnableShaderEffect > 0.5) {\n            current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;\n          }\n          return current;\n      }\n      \n      void main() {\n          vUV = uv;\n          gl_Position = getPosition();\n      }\n    ";
        var fragment = "\n      precision highp float;\n      uniform vec3 uColor;\n      uniform float uOpacity;\n      uniform float uEnableFade;\n      varying vec2 vUV;\n      void main() {\n          float fadeFactor = 1.0;\n          if(uEnableFade > 0.5) {\n              fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y);\n          }\n          gl_FragColor = vec4(uColor, uOpacity * fadeFactor);\n      }\n    ";
        function resize() {
            if (!container)
                return;
            var width = container.clientWidth;
            var height = container.clientHeight;
            renderer.setSize(width, height);
            lines.forEach(function (line) { return line.polyline.resize(); });
        }
        window.addEventListener('resize', resize);
        var center = (colors.length - 1) / 2;
        colors.forEach(function (color, index) {
            var spring = baseSpring + (Math.random() - 0.5) * 0.05;
            var friction = baseFriction + (Math.random() - 0.5) * 0.05;
            var thickness = baseThickness + (Math.random() - 0.5) * 3;
            var mouseOffset = new ogl_1.Vec3((index - center) * offsetFactor + (Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.1, 0);
            var line = {
                spring: spring,
                friction: friction,
                mouseVelocity: new ogl_1.Vec3(),
                mouseOffset: mouseOffset,
                points: [],
                polyline: {}
            };
            var count = pointCount;
            var points = [];
            for (var i = 0; i < count; i++) {
                points.push(new ogl_1.Vec3());
            }
            line.points = points;
            line.polyline = new ogl_1.Polyline(gl, {
                points: points,
                vertex: vertex,
                fragment: fragment,
                uniforms: {
                    uColor: { value: new ogl_1.Color(color) },
                    uThickness: { value: thickness },
                    uOpacity: { value: 1.0 },
                    uTime: { value: 0.0 },
                    uEnableShaderEffect: { value: enableShaderEffect ? 1.0 : 0.0 },
                    uEffectAmplitude: { value: effectAmplitude },
                    uEnableFade: { value: enableFade ? 1.0 : 0.0 }
                }
            });
            line.polyline.mesh.setParent(scene);
            lines.push(line);
        });
        resize();
        var mouse = new ogl_1.Vec3();
        function updateMouse(e) {
            var x, y;
            if (!container)
                return;
            var rect = container.getBoundingClientRect();
            if ('changedTouches' in e && e.changedTouches.length) {
                x = e.changedTouches[0].clientX - rect.left;
                y = e.changedTouches[0].clientY - rect.top;
            }
            else if (e instanceof MouseEvent) {
                x = e.clientX - rect.left;
                y = e.clientY - rect.top;
            }
            else {
                x = 0;
                y = 0;
            }
            var width = container.clientWidth;
            var height = container.clientHeight;
            mouse.set((x / width) * 2 - 1, (y / height) * -2 + 1, 0);
        }
        container.addEventListener('mousemove', updateMouse);
        container.addEventListener('touchstart', updateMouse);
        container.addEventListener('touchmove', updateMouse);
        var tmp = new ogl_1.Vec3();
        var frameId;
        var lastTime = performance.now();
        function update() {
            frameId = requestAnimationFrame(update);
            var currentTime = performance.now();
            var dt = currentTime - lastTime;
            lastTime = currentTime;
            lines.forEach(function (line) {
                tmp.copy(mouse).add(line.mouseOffset).sub(line.points[0]).multiply(line.spring);
                line.mouseVelocity.add(tmp).multiply(line.friction);
                line.points[0].add(line.mouseVelocity);
                for (var i = 1; i < line.points.length; i++) {
                    if (isFinite(maxAge) && maxAge > 0) {
                        var segmentDelay = maxAge / (line.points.length - 1);
                        var alpha = Math.min(1, (dt * speedMultiplier) / segmentDelay);
                        line.points[i].lerp(line.points[i - 1], alpha);
                    }
                    else {
                        line.points[i].lerp(line.points[i - 1], 0.9);
                    }
                }
                if (line.polyline.mesh.program.uniforms.uTime) {
                    line.polyline.mesh.program.uniforms.uTime.value = currentTime * 0.001;
                }
                line.polyline.updateGeometry();
            });
            renderer.render({ scene: scene });
        }
        update();
        return function () {
            window.removeEventListener('resize', resize);
            container.removeEventListener('mousemove', updateMouse);
            container.removeEventListener('touchstart', updateMouse);
            container.removeEventListener('touchmove', updateMouse);
            cancelAnimationFrame(frameId);
            if (gl.canvas && gl.canvas.parentNode === container) {
                container.removeChild(gl.canvas);
            }
        };
    }, [
        colors,
        baseSpring,
        baseFriction,
        baseThickness,
        offsetFactor,
        maxAge,
        pointCount,
        speedMultiplier,
        enableFade,
        enableShaderEffect,
        effectAmplitude,
        backgroundColor
    ]);
    return (0, jsx_runtime_1.jsx)("div", { ref: containerRef, className: "relative w-full h-full" });
};
exports.default = Ribbons;
