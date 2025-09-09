"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var fiber_1 = require("@react-three/fiber");
var three_1 = require("three");
var hexToNormalizedRGB = function (hex) {
    var clean = hex.replace('#', '');
    var r = parseInt(clean.slice(0, 2), 16) / 255;
    var g = parseInt(clean.slice(2, 4), 16) / 255;
    var b = parseInt(clean.slice(4, 6), 16) / 255;
    return [r, g, b];
};
var vertexShader = "\nvarying vec2 vUv;\nvarying vec3 vPosition;\n\nvoid main() {\n  vPosition = position;\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n";
var fragmentShader = "\nvarying vec2 vUv;\nvarying vec3 vPosition;\n\nuniform float uTime;\nuniform vec3  uColor;\nuniform float uSpeed;\nuniform float uScale;\nuniform float uRotation;\nuniform float uNoiseIntensity;\n\nconst float e = 2.71828182845904523536;\n\nfloat noise(vec2 texCoord) {\n  float G = e;\n  vec2  r = (G * sin(G * texCoord));\n  return fract(r.x * r.y * (1.0 + texCoord.x));\n}\n\nvec2 rotateUvs(vec2 uv, float angle) {\n  float c = cos(angle);\n  float s = sin(angle);\n  mat2  rot = mat2(c, -s, s, c);\n  return rot * uv;\n}\n\nvoid main() {\n  float rnd        = noise(gl_FragCoord.xy);\n  vec2  uv         = rotateUvs(vUv * uScale, uRotation);\n  vec2  tex        = uv * uScale;\n  float tOffset    = uSpeed * uTime;\n\n  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);\n\n  float pattern = 0.6 +\n                  0.4 * sin(5.0 * (tex.x + tex.y +\n                                   cos(3.0 * tex.x + 5.0 * tex.y) +\n                                   0.02 * tOffset) +\n                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));\n\n  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;\n  col.a = 1.0;\n  gl_FragColor = col;\n}\n";
var SilkPlane = (0, react_1.forwardRef)(function SilkPlane(_a, ref) {
    var uniforms = _a.uniforms;
    var viewport = (0, fiber_1.useThree)().viewport;
    (0, react_1.useLayoutEffect)(function () {
        var mesh = ref;
        if (mesh.current) {
            mesh.current.scale.set(viewport.width, viewport.height, 1);
        }
    }, [ref, viewport]);
    (0, fiber_1.useFrame)(function (_state, delta) {
        var mesh = ref;
        if (mesh.current) {
            var material = mesh.current.material;
            material.uniforms.uTime.value += 0.1 * delta;
        }
    });
    return ((0, jsx_runtime_1.jsxs)("mesh", { ref: ref, children: [(0, jsx_runtime_1.jsx)("planeGeometry", { args: [1, 1, 1, 1] }), (0, jsx_runtime_1.jsx)("shaderMaterial", { uniforms: uniforms, vertexShader: vertexShader, fragmentShader: fragmentShader })] }));
});
SilkPlane.displayName = 'SilkPlane';
var Silk = function (_a) {
    var _b = _a.speed, speed = _b === void 0 ? 5 : _b, _c = _a.scale, scale = _c === void 0 ? 1 : _c, _d = _a.color, color = _d === void 0 ? '#7B7481' : _d, _e = _a.noiseIntensity, noiseIntensity = _e === void 0 ? 1.5 : _e, _f = _a.rotation, rotation = _f === void 0 ? 0 : _f;
    var meshRef = (0, react_1.useRef)(null);
    var uniforms = (0, react_1.useMemo)(function () { return ({
        uSpeed: { value: speed },
        uScale: { value: scale },
        uNoiseIntensity: { value: noiseIntensity },
        uColor: { value: new (three_1.Color.bind.apply(three_1.Color, __spreadArray([void 0], hexToNormalizedRGB(color), false)))() },
        uRotation: { value: rotation },
        uTime: { value: 0 }
    }); }, [speed, scale, noiseIntensity, color, rotation]);
    return ((0, jsx_runtime_1.jsx)(fiber_1.Canvas, { dpr: [1, 2], frameloop: "always", children: (0, jsx_runtime_1.jsx)(SilkPlane, { ref: meshRef, uniforms: uniforms }) }));
};
exports.default = Silk;
