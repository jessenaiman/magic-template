"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LiquidEther;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var THREE = __importStar(require("three"));
var defaultColors = ['#5227FF', '#FF9FFC', '#B19EEF'];
function LiquidEther(_a) {
    var _b = _a.mouseForce, mouseForce = _b === void 0 ? 20 : _b, _c = _a.cursorSize, cursorSize = _c === void 0 ? 100 : _c, _d = _a.isViscous, isViscous = _d === void 0 ? false : _d, _e = _a.viscous, viscous = _e === void 0 ? 30 : _e, _f = _a.iterationsViscous, iterationsViscous = _f === void 0 ? 32 : _f, _g = _a.iterationsPoisson, iterationsPoisson = _g === void 0 ? 32 : _g, _h = _a.dt, dt = _h === void 0 ? 0.014 : _h, _j = _a.BFECC, BFECC = _j === void 0 ? true : _j, _k = _a.resolution, resolution = _k === void 0 ? 0.5 : _k, _l = _a.isBounce, isBounce = _l === void 0 ? false : _l, _m = _a.colors, colors = _m === void 0 ? defaultColors : _m, _o = _a.style, style = _o === void 0 ? {} : _o, _p = _a.className, className = _p === void 0 ? '' : _p, _q = _a.autoDemo, autoDemo = _q === void 0 ? true : _q, _r = _a.autoSpeed, autoSpeed = _r === void 0 ? 0.5 : _r, _s = _a.autoIntensity, autoIntensity = _s === void 0 ? 2.2 : _s, _t = _a.takeoverDuration, takeoverDuration = _t === void 0 ? 0.25 : _t, _u = _a.autoResumeDelay, autoResumeDelay = _u === void 0 ? 1000 : _u, _v = _a.autoRampDuration, autoRampDuration = _v === void 0 ? 0.6 : _v;
    var mountRef = (0, react_1.useRef)(null);
    var webglRef = (0, react_1.useRef)(null);
    var resizeObserverRef = (0, react_1.useRef)(null);
    var rafRef = (0, react_1.useRef)(null);
    var intersectionObserverRef = (0, react_1.useRef)(null);
    var isVisibleRef = (0, react_1.useRef)(true);
    var resizeRafRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!mountRef.current)
            return;
        function makePaletteTexture(stops) {
            var arr;
            if (Array.isArray(stops) && stops.length > 0) {
                arr = stops.length === 1 ? [stops[0], stops[0]] : stops;
            }
            else {
                arr = ['#ffffff', '#ffffff'];
            }
            var w = arr.length;
            var data = new Uint8Array(w * 4);
            for (var i = 0; i < w; i++) {
                var c = new THREE.Color(arr[i]);
                data[i * 4 + 0] = Math.round(c.r * 255);
                data[i * 4 + 1] = Math.round(c.g * 255);
                data[i * 4 + 2] = Math.round(c.b * 255);
                data[i * 4 + 3] = 255;
            }
            var tex = new THREE.DataTexture(data, w, 1, THREE.RGBAFormat);
            tex.magFilter = THREE.LinearFilter;
            tex.minFilter = THREE.LinearFilter;
            tex.wrapS = THREE.ClampToEdgeWrapping;
            tex.wrapT = THREE.ClampToEdgeWrapping;
            tex.generateMipmaps = false;
            tex.needsUpdate = true;
            return tex;
        }
        var paletteTex = makePaletteTexture(colors);
        // Hard-code transparent background vector (alpha 0)
        var bgVec4 = new THREE.Vector4(0, 0, 0, 0);
        var CommonClass = /** @class */ (function () {
            function CommonClass() {
                this.width = 0;
                this.height = 0;
                this.aspect = 1;
                this.pixelRatio = 1;
                this.isMobile = false;
                this.breakpoint = 768;
                this.fboWidth = null;
                this.fboHeight = null;
                this.time = 0;
                this.delta = 0;
                this.container = null;
                this.renderer = null;
                this.clock = null;
            }
            CommonClass.prototype.init = function (container) {
                this.container = container;
                this.pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
                this.resize();
                this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                // Always transparent
                this.renderer.autoClear = false;
                this.renderer.setClearColor(new THREE.Color(0x000000), 0);
                this.renderer.setPixelRatio(this.pixelRatio);
                this.renderer.setSize(this.width, this.height);
                var el = this.renderer.domElement;
                el.style.width = '100%';
                el.style.height = '100%';
                el.style.display = 'block';
                this.clock = new THREE.Clock();
                this.clock.start();
            };
            CommonClass.prototype.resize = function () {
                if (!this.container)
                    return;
                var rect = this.container.getBoundingClientRect();
                this.width = Math.max(1, Math.floor(rect.width));
                this.height = Math.max(1, Math.floor(rect.height));
                this.aspect = this.width / this.height;
                if (this.renderer)
                    this.renderer.setSize(this.width, this.height, false);
            };
            CommonClass.prototype.update = function () {
                if (!this.clock)
                    return;
                this.delta = this.clock.getDelta();
                this.time += this.delta;
            };
            return CommonClass;
        }());
        var Common = new CommonClass();
        var MouseClass = /** @class */ (function () {
            function MouseClass() {
                this.mouseMoved = false;
                this.coords = new THREE.Vector2();
                this.coords_old = new THREE.Vector2();
                this.diff = new THREE.Vector2();
                this.timer = null;
                this.container = null;
                this.isHoverInside = false;
                this.hasUserControl = false;
                this.isAutoActive = false;
                this.autoIntensity = 2.0;
                this.takeoverActive = false;
                this.takeoverStartTime = 0;
                this.takeoverDuration = 0.25;
                this.takeoverFrom = new THREE.Vector2();
                this.takeoverTo = new THREE.Vector2();
                this.onInteract = null;
                this._onMouseMove = this.onDocumentMouseMove.bind(this);
                this._onTouchStart = this.onDocumentTouchStart.bind(this);
                this._onTouchMove = this.onDocumentTouchMove.bind(this);
                this._onMouseEnter = this.onMouseEnter.bind(this);
                this._onMouseLeave = this.onMouseLeave.bind(this);
                this._onTouchEnd = this.onTouchEnd.bind(this);
            }
            MouseClass.prototype.init = function (container) {
                this.container = container;
                container.addEventListener('mousemove', this._onMouseMove);
                container.addEventListener('touchstart', this._onTouchStart, { passive: true });
                container.addEventListener('touchmove', this._onTouchMove, { passive: true });
                container.addEventListener('mouseenter', this._onMouseEnter);
                container.addEventListener('mouseleave', this._onMouseLeave);
                container.addEventListener('touchend', this._onTouchEnd);
            };
            MouseClass.prototype.dispose = function () {
                var c = this.container;
                if (!c)
                    return;
                c.removeEventListener('mousemove', this._onMouseMove);
                c.removeEventListener('touchstart', this._onTouchStart);
                c.removeEventListener('touchmove', this._onTouchMove);
                c.removeEventListener('mouseenter', this._onMouseEnter);
                c.removeEventListener('mouseleave', this._onMouseLeave);
                c.removeEventListener('touchend', this._onTouchEnd);
            };
            MouseClass.prototype.setCoords = function (x, y) {
                var _this = this;
                if (!this.container)
                    return;
                if (this.timer)
                    window.clearTimeout(this.timer);
                var rect = this.container.getBoundingClientRect();
                var nx = (x - rect.left) / rect.width;
                var ny = (y - rect.top) / rect.height;
                this.coords.set(nx * 2 - 1, -(ny * 2 - 1));
                this.mouseMoved = true;
                this.timer = window.setTimeout(function () {
                    _this.mouseMoved = false;
                }, 100);
            };
            MouseClass.prototype.setNormalized = function (nx, ny) {
                this.coords.set(nx, ny);
                this.mouseMoved = true;
            };
            MouseClass.prototype.onDocumentMouseMove = function (event) {
                if (this.onInteract)
                    this.onInteract();
                if (this.isAutoActive && !this.hasUserControl && !this.takeoverActive) {
                    if (!this.container)
                        return;
                    var rect = this.container.getBoundingClientRect();
                    var nx = (event.clientX - rect.left) / rect.width;
                    var ny = (event.clientY - rect.top) / rect.height;
                    this.takeoverFrom.copy(this.coords);
                    this.takeoverTo.set(nx * 2 - 1, -(ny * 2 - 1));
                    this.takeoverStartTime = performance.now();
                    this.takeoverActive = true;
                    this.hasUserControl = true;
                    this.isAutoActive = false;
                    return;
                }
                this.setCoords(event.clientX, event.clientY);
                this.hasUserControl = true;
            };
            MouseClass.prototype.onDocumentTouchStart = function (event) {
                if (event.touches.length === 1) {
                    var t = event.touches[0];
                    if (this.onInteract)
                        this.onInteract();
                    this.setCoords(t.pageX, t.pageY);
                    this.hasUserControl = true;
                }
            };
            MouseClass.prototype.onDocumentTouchMove = function (event) {
                if (event.touches.length === 1) {
                    var t = event.touches[0];
                    if (this.onInteract)
                        this.onInteract();
                    this.setCoords(t.pageX, t.pageY);
                }
            };
            MouseClass.prototype.onTouchEnd = function () {
                this.isHoverInside = false;
            };
            MouseClass.prototype.onMouseEnter = function () {
                this.isHoverInside = true;
            };
            MouseClass.prototype.onMouseLeave = function () {
                this.isHoverInside = false;
            };
            MouseClass.prototype.update = function () {
                if (this.takeoverActive) {
                    var t = (performance.now() - this.takeoverStartTime) / (this.takeoverDuration * 1000);
                    if (t >= 1) {
                        this.takeoverActive = false;
                        this.coords.copy(this.takeoverTo);
                        this.coords_old.copy(this.coords);
                        this.diff.set(0, 0);
                    }
                    else {
                        var k = t * t * (3 - 2 * t);
                        this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo, k);
                    }
                }
                this.diff.subVectors(this.coords, this.coords_old);
                this.coords_old.copy(this.coords);
                if (this.coords_old.x === 0 && this.coords_old.y === 0)
                    this.diff.set(0, 0);
                if (this.isAutoActive && !this.takeoverActive)
                    this.diff.multiplyScalar(this.autoIntensity);
            };
            return MouseClass;
        }());
        var Mouse = new MouseClass();
        var AutoDriver = /** @class */ (function () {
            function AutoDriver(mouse, manager, opts) {
                this.active = false;
                this.current = new THREE.Vector2(0, 0);
                this.target = new THREE.Vector2();
                this.lastTime = performance.now();
                this.activationTime = 0;
                this.margin = 0.2;
                this._tmpDir = new THREE.Vector2();
                this.mouse = mouse;
                this.manager = manager;
                this.enabled = opts.enabled;
                this.speed = opts.speed;
                this.resumeDelay = opts.resumeDelay || 3000;
                this.rampDurationMs = (opts.rampDuration || 0) * 1000;
                this.pickNewTarget();
            }
            AutoDriver.prototype.pickNewTarget = function () {
                var r = Math.random;
                this.target.set((r() * 2 - 1) * (1 - this.margin), (r() * 2 - 1) * (1 - this.margin));
            };
            AutoDriver.prototype.forceStop = function () {
                this.active = false;
                this.mouse.isAutoActive = false;
            };
            AutoDriver.prototype.update = function () {
                if (!this.enabled)
                    return;
                var now = performance.now();
                var idle = now - this.manager.lastUserInteraction;
                if (idle < this.resumeDelay) {
                    if (this.active)
                        this.forceStop();
                    return;
                }
                if (this.mouse.isHoverInside) {
                    if (this.active)
                        this.forceStop();
                    return;
                }
                if (!this.active) {
                    this.active = true;
                    this.current.copy(this.mouse.coords);
                    this.lastTime = now;
                    this.activationTime = now;
                }
                if (!this.active)
                    return;
                this.mouse.isAutoActive = true;
                var dtSec = (now - this.lastTime) / 1000;
                this.lastTime = now;
                if (dtSec > 0.2)
                    dtSec = 0.016;
                var dir = this._tmpDir.subVectors(this.target, this.current);
                var dist = dir.length();
                if (dist < 0.01) {
                    this.pickNewTarget();
                    return;
                }
                dir.normalize();
                var ramp = 1;
                if (this.rampDurationMs > 0) {
                    var t = Math.min(1, (now - this.activationTime) / this.rampDurationMs);
                    ramp = t * t * (3 - 2 * t);
                }
                var step = this.speed * dtSec * ramp;
                var move = Math.min(step, dist);
                this.current.addScaledVector(dir, move);
                this.mouse.setNormalized(this.current.x, this.current.y);
            };
            return AutoDriver;
        }());
        var face_vert = "\n  attribute vec3 position;\n  uniform vec2 px;\n  uniform vec2 boundarySpace;\n  varying vec2 uv;\n  precision highp float;\n  void main(){\n  vec3 pos = position;\n  vec2 scale = 1.0 - boundarySpace * 2.0;\n  pos.xy = pos.xy * scale;\n  uv = vec2(0.5)+(pos.xy)*0.5;\n  gl_Position = vec4(pos, 1.0);\n}\n";
        var line_vert = "\n  attribute vec3 position;\n  uniform vec2 px;\n  precision highp float;\n  varying vec2 uv;\n  void main(){\n  vec3 pos = position;\n  uv = 0.5 + pos.xy * 0.5;\n  vec2 n = sign(pos.xy);\n  pos.xy = abs(pos.xy) - px * 1.0;\n  pos.xy *= n;\n  gl_Position = vec4(pos, 1.0);\n}\n";
        var mouse_vert = "\n    precision highp float;\n    attribute vec3 position;\n    attribute vec2 uv;\n    uniform vec2 center;\n    uniform vec2 scale;\n    uniform vec2 px;\n    varying vec2 vUv;\n    void main(){\n    vec2 pos = position.xy * scale * 2.0 * px + center;\n    vUv = uv;\n    gl_Position = vec4(pos, 0.0, 1.0);\n}\n";
        var advection_frag = "\n    precision highp float;\n    uniform sampler2D velocity;\n    uniform float dt;\n    uniform bool isBFECC;\n    uniform vec2 fboSize;\n    uniform vec2 px;\n    varying vec2 uv;\n    void main(){\n    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;\n    if(isBFECC == false){\n        vec2 vel = texture2D(velocity, uv).xy;\n        vec2 uv2 = uv - vel * dt * ratio;\n        vec2 newVel = texture2D(velocity, uv2).xy;\n        gl_FragColor = vec4(newVel, 0.0, 0.0);\n    } else {\n        vec2 spot_new = uv;\n        vec2 vel_old = texture2D(velocity, uv).xy;\n        vec2 spot_old = spot_new - vel_old * dt * ratio;\n        vec2 vel_new1 = texture2D(velocity, spot_old).xy;\n        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;\n        vec2 error = spot_new2 - spot_new;\n        vec2 spot_new3 = spot_new - error / 2.0;\n        vec2 vel_2 = texture2D(velocity, spot_new3).xy;\n        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;\n        vec2 newVel2 = texture2D(velocity, spot_old2).xy; \n        gl_FragColor = vec4(newVel2, 0.0, 0.0);\n    }\n}\n";
        var color_frag = "\n    precision highp float;\n    uniform sampler2D velocity;\n    uniform sampler2D palette;\n    uniform vec4 bgColor;\n    varying vec2 uv;\n    void main(){\n    vec2 vel = texture2D(velocity, uv).xy;\n    float lenv = clamp(length(vel), 0.0, 1.0);\n    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;\n    vec3 outRGB = mix(bgColor.rgb, c, lenv);\n    float outA = mix(bgColor.a, 1.0, lenv);\n    gl_FragColor = vec4(outRGB, outA);\n}\n";
        var divergence_frag = "\n    precision highp float;\n    uniform sampler2D velocity;\n    uniform float dt;\n    uniform vec2 px;\n    varying vec2 uv;\n    void main(){\n    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;\n    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;\n    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;\n    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;\n    float divergence = (x1 - x0 + y1 - y0) / 2.0;\n    gl_FragColor = vec4(divergence / dt);\n}\n";
        var externalForce_frag = "\n    precision highp float;\n    uniform vec2 force;\n    uniform vec2 center;\n    uniform vec2 scale;\n    uniform vec2 px;\n    varying vec2 vUv;\n    void main(){\n    vec2 circle = (vUv - 0.5) * 2.0;\n    float d = 1.0 - min(length(circle), 1.0);\n    d *= d;\n    gl_FragColor = vec4(force * d, 0.0, 1.0);\n}\n";
        var poisson_frag = "\n    precision highp float;\n    uniform sampler2D pressure;\n    uniform sampler2D divergence;\n    uniform vec2 px;\n    varying vec2 uv;\n    void main(){\n    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;\n    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;\n    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;\n    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;\n    float div = texture2D(divergence, uv).r;\n    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;\n    gl_FragColor = vec4(newP);\n}\n";
        var pressure_frag = "\n    precision highp float;\n    uniform sampler2D pressure;\n    uniform sampler2D velocity;\n    uniform vec2 px;\n    uniform float dt;\n    varying vec2 uv;\n    void main(){\n    float step = 1.0;\n    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;\n    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;\n    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;\n    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;\n    vec2 v = texture2D(velocity, uv).xy;\n    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;\n    v = v - gradP * dt;\n    gl_FragColor = vec4(v, 0.0, 1.0);\n}\n";
        var viscous_frag = "\n    precision highp float;\n    uniform sampler2D velocity;\n    uniform sampler2D velocity_new;\n    uniform float v;\n    uniform vec2 px;\n    uniform float dt;\n    varying vec2 uv;\n    void main(){\n    vec2 old = texture2D(velocity, uv).xy;\n    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;\n    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;\n    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;\n    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;\n    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);\n    newv /= 4.0 * (1.0 + v * dt);\n    gl_FragColor = vec4(newv, 0.0, 0.0);\n}\n";
        var ShaderPass = /** @class */ (function () {
            function ShaderPass(props) {
                var _a;
                this.scene = null;
                this.camera = null;
                this.material = null;
                this.geometry = null;
                this.plane = null;
                this.props = props || {};
                this.uniforms = (_a = this.props.material) === null || _a === void 0 ? void 0 : _a.uniforms;
            }
            ShaderPass.prototype.init = function () {
                var _args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _args[_i] = arguments[_i];
                }
                this.scene = new THREE.Scene();
                this.camera = new THREE.Camera();
                if (this.uniforms) {
                    this.material = new THREE.RawShaderMaterial(this.props.material);
                    this.geometry = new THREE.PlaneGeometry(2, 2);
                    this.plane = new THREE.Mesh(this.geometry, this.material);
                    this.scene.add(this.plane);
                }
            };
            ShaderPass.prototype.update = function () {
                var _args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _args[_i] = arguments[_i];
                }
                if (!Common.renderer || !this.scene || !this.camera)
                    return;
                Common.renderer.setRenderTarget(this.props.output || null);
                Common.renderer.render(this.scene, this.camera);
                Common.renderer.setRenderTarget(null);
            };
            return ShaderPass;
        }());
        var Advection = /** @class */ (function (_super) {
            __extends(Advection, _super);
            function Advection(simProps) {
                var _this = _super.call(this, {
                    material: {
                        vertexShader: face_vert,
                        fragmentShader: advection_frag,
                        uniforms: {
                            boundarySpace: { value: simProps.cellScale },
                            px: { value: simProps.cellScale },
                            fboSize: { value: simProps.fboSize },
                            velocity: { value: simProps.src.texture },
                            dt: { value: simProps.dt },
                            isBFECC: { value: true }
                        }
                    },
                    output: simProps.dst
                }) || this;
                if (_this.props.material && _this.props.material.uniforms) {
                    _this.uniforms = _this.props.material.uniforms;
                }
                _this.init();
                return _this;
            }
            Advection.prototype.init = function () {
                _super.prototype.init.call(this);
                this.createBoundary();
            };
            Advection.prototype.createBoundary = function () {
                var boundaryG = new THREE.BufferGeometry();
                var vertices_boundary = new Float32Array([
                    -1, -1, 0, -1, 1, 0, -1, 1, 0, 1, 1, 0, 1, 1, 0, 1, -1, 0, 1, -1, 0, -1, -1, 0
                ]);
                boundaryG.setAttribute('position', new THREE.BufferAttribute(vertices_boundary, 3));
                var boundaryM = new THREE.RawShaderMaterial({
                    vertexShader: line_vert,
                    fragmentShader: advection_frag,
                    uniforms: this.uniforms
                });
                this.line = new THREE.LineSegments(boundaryG, boundaryM);
                this.scene.add(this.line);
            };
            Advection.prototype.update = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _a = (args[0] || {}), dt = _a.dt, isBounce = _a.isBounce, BFECC = _a.BFECC;
                if (!this.uniforms)
                    return;
                if (typeof dt === 'number')
                    this.uniforms.dt.value = dt;
                if (typeof isBounce === 'boolean')
                    this.line.visible = isBounce;
                if (typeof BFECC === 'boolean')
                    this.uniforms.isBFECC.value = BFECC;
                _super.prototype.update.call(this);
            };
            return Advection;
        }(ShaderPass));
        var ExternalForce = /** @class */ (function (_super) {
            __extends(ExternalForce, _super);
            function ExternalForce(simProps) {
                var _this = _super.call(this, { output: simProps.dst }) || this;
                _this.init(simProps);
                return _this;
            }
            ExternalForce.prototype.init = function (simProps) {
                _super.prototype.init.call(this);
                var mouseG = new THREE.PlaneGeometry(1, 1);
                var mouseM = new THREE.RawShaderMaterial({
                    vertexShader: mouse_vert,
                    fragmentShader: externalForce_frag,
                    blending: THREE.AdditiveBlending,
                    depthWrite: false,
                    uniforms: {
                        px: { value: simProps.cellScale },
                        force: { value: new THREE.Vector2(0, 0) },
                        center: { value: new THREE.Vector2(0, 0) },
                        scale: { value: new THREE.Vector2(simProps.cursor_size, simProps.cursor_size) }
                    }
                });
                this.mouse = new THREE.Mesh(mouseG, mouseM);
                this.scene.add(this.mouse);
            };
            ExternalForce.prototype.update = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var props = args[0] || {};
                var forceX = (Mouse.diff.x / 2) * (props.mouse_force || 0);
                var forceY = (Mouse.diff.y / 2) * (props.mouse_force || 0);
                var cellScale = props.cellScale || { x: 1, y: 1 };
                var cursorSize = props.cursor_size || 0;
                var cursorSizeX = cursorSize * cellScale.x;
                var cursorSizeY = cursorSize * cellScale.y;
                var centerX = Math.min(Math.max(Mouse.coords.x, -1 + cursorSizeX + cellScale.x * 2), 1 - cursorSizeX - cellScale.x * 2);
                var centerY = Math.min(Math.max(Mouse.coords.y, -1 + cursorSizeY + cellScale.y * 2), 1 - cursorSizeY - cellScale.y * 2);
                var uniforms = this.mouse.material.uniforms;
                uniforms.force.value.set(forceX, forceY);
                uniforms.center.value.set(centerX, centerY);
                uniforms.scale.value.set(cursorSize, cursorSize);
                _super.prototype.update.call(this);
            };
            return ExternalForce;
        }(ShaderPass));
        var Viscous = /** @class */ (function (_super) {
            __extends(Viscous, _super);
            function Viscous(simProps) {
                var _this = _super.call(this, {
                    material: {
                        vertexShader: face_vert,
                        fragmentShader: viscous_frag,
                        uniforms: {
                            boundarySpace: { value: simProps.boundarySpace },
                            velocity: { value: simProps.src.texture },
                            velocity_new: { value: simProps.dst_.texture },
                            v: { value: simProps.viscous },
                            px: { value: simProps.cellScale },
                            dt: { value: simProps.dt }
                        }
                    },
                    output: simProps.dst,
                    output0: simProps.dst_,
                    output1: simProps.dst
                }) || this;
                _this.init();
                return _this;
            }
            Viscous.prototype.update = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _a = (args[0] || {}), viscous = _a.viscous, iterations = _a.iterations, dt = _a.dt;
                if (!this.uniforms)
                    return;
                var fbo_in, fbo_out;
                if (typeof viscous === 'number')
                    this.uniforms.v.value = viscous;
                var iter = iterations !== null && iterations !== void 0 ? iterations : 0;
                for (var i = 0; i < iter; i++) {
                    if (i % 2 === 0) {
                        fbo_in = this.props.output0;
                        fbo_out = this.props.output1;
                    }
                    else {
                        fbo_in = this.props.output1;
                        fbo_out = this.props.output0;
                    }
                    this.uniforms.velocity_new.value = fbo_in.texture;
                    this.props.output = fbo_out;
                    if (typeof dt === 'number')
                        this.uniforms.dt.value = dt;
                    _super.prototype.update.call(this);
                }
                return fbo_out;
            };
            return Viscous;
        }(ShaderPass));
        var Divergence = /** @class */ (function (_super) {
            __extends(Divergence, _super);
            function Divergence(simProps) {
                var _this = _super.call(this, {
                    material: {
                        vertexShader: face_vert,
                        fragmentShader: divergence_frag,
                        uniforms: {
                            boundarySpace: { value: simProps.boundarySpace },
                            velocity: { value: simProps.src.texture },
                            px: { value: simProps.cellScale },
                            dt: { value: simProps.dt }
                        }
                    },
                    output: simProps.dst
                }) || this;
                _this.init();
                return _this;
            }
            Divergence.prototype.update = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var vel = (args[0] || {}).vel;
                if (this.uniforms && vel) {
                    this.uniforms.velocity.value = vel.texture;
                }
                _super.prototype.update.call(this);
            };
            return Divergence;
        }(ShaderPass));
        var Poisson = /** @class */ (function (_super) {
            __extends(Poisson, _super);
            function Poisson(simProps) {
                var _this = _super.call(this, {
                    material: {
                        vertexShader: face_vert,
                        fragmentShader: poisson_frag,
                        uniforms: {
                            boundarySpace: { value: simProps.boundarySpace },
                            pressure: { value: simProps.dst_.texture },
                            divergence: { value: simProps.src.texture },
                            px: { value: simProps.cellScale }
                        }
                    },
                    output: simProps.dst,
                    output0: simProps.dst_,
                    output1: simProps.dst
                }) || this;
                _this.init();
                return _this;
            }
            Poisson.prototype.update = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var iterations = (args[0] || {}).iterations;
                var p_in, p_out;
                var iter = iterations !== null && iterations !== void 0 ? iterations : 0;
                for (var i = 0; i < iter; i++) {
                    if (i % 2 === 0) {
                        p_in = this.props.output0;
                        p_out = this.props.output1;
                    }
                    else {
                        p_in = this.props.output1;
                        p_out = this.props.output0;
                    }
                    if (this.uniforms)
                        this.uniforms.pressure.value = p_in.texture;
                    this.props.output = p_out;
                    _super.prototype.update.call(this);
                }
                return p_out;
            };
            return Poisson;
        }(ShaderPass));
        var Pressure = /** @class */ (function (_super) {
            __extends(Pressure, _super);
            function Pressure(simProps) {
                var _this = _super.call(this, {
                    material: {
                        vertexShader: face_vert,
                        fragmentShader: pressure_frag,
                        uniforms: {
                            boundarySpace: { value: simProps.boundarySpace },
                            pressure: { value: simProps.src_p.texture },
                            velocity: { value: simProps.src_v.texture },
                            px: { value: simProps.cellScale },
                            dt: { value: simProps.dt }
                        }
                    },
                    output: simProps.dst
                }) || this;
                _this.init();
                return _this;
            }
            Pressure.prototype.update = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _a = (args[0] || {}), vel = _a.vel, pressure = _a.pressure;
                if (this.uniforms && vel && pressure) {
                    this.uniforms.velocity.value = vel.texture;
                    this.uniforms.pressure.value = pressure.texture;
                }
                _super.prototype.update.call(this);
            };
            return Pressure;
        }(ShaderPass));
        var Simulation = /** @class */ (function () {
            function Simulation(options) {
                this.fbos = {
                    vel_0: null,
                    vel_1: null,
                    vel_viscous0: null,
                    vel_viscous1: null,
                    div: null,
                    pressure_0: null,
                    pressure_1: null
                };
                this.fboSize = new THREE.Vector2();
                this.cellScale = new THREE.Vector2();
                this.boundarySpace = new THREE.Vector2();
                this.options = __assign({ iterations_poisson: 32, iterations_viscous: 32, mouse_force: 20, resolution: 0.5, cursor_size: 100, viscous: 30, isBounce: false, dt: 0.014, isViscous: false, BFECC: true }, options);
                this.init();
            }
            Simulation.prototype.init = function () {
                this.calcSize();
                this.createAllFBO();
                this.createShaderPass();
            };
            Simulation.prototype.getFloatType = function () {
                var isIOS = /(iPad|iPhone|iPod)/i.test(navigator.userAgent);
                return isIOS ? THREE.HalfFloatType : THREE.FloatType;
            };
            Simulation.prototype.createAllFBO = function () {
                var type = this.getFloatType();
                var opts = {
                    type: type,
                    depthBuffer: false,
                    stencilBuffer: false,
                    minFilter: THREE.LinearFilter,
                    magFilter: THREE.LinearFilter,
                    wrapS: THREE.ClampToEdgeWrapping,
                    wrapT: THREE.ClampToEdgeWrapping
                };
                for (var key in this.fbos) {
                    this.fbos[key] = new THREE.WebGLRenderTarget(this.fboSize.x, this.fboSize.y, opts);
                }
            };
            Simulation.prototype.createShaderPass = function () {
                this.advection = new Advection({
                    cellScale: this.cellScale,
                    fboSize: this.fboSize,
                    dt: this.options.dt,
                    src: this.fbos.vel_0,
                    dst: this.fbos.vel_1
                });
                this.externalForce = new ExternalForce({
                    cellScale: this.cellScale,
                    cursor_size: this.options.cursor_size,
                    dst: this.fbos.vel_1
                });
                this.viscous = new Viscous({
                    cellScale: this.cellScale,
                    boundarySpace: this.boundarySpace,
                    viscous: this.options.viscous,
                    src: this.fbos.vel_1,
                    dst: this.fbos.vel_viscous1,
                    dst_: this.fbos.vel_viscous0,
                    dt: this.options.dt
                });
                this.divergence = new Divergence({
                    cellScale: this.cellScale,
                    boundarySpace: this.boundarySpace,
                    src: this.fbos.vel_viscous0,
                    dst: this.fbos.div,
                    dt: this.options.dt
                });
                this.poisson = new Poisson({
                    cellScale: this.cellScale,
                    boundarySpace: this.boundarySpace,
                    src: this.fbos.div,
                    dst: this.fbos.pressure_1,
                    dst_: this.fbos.pressure_0
                });
                this.pressure = new Pressure({
                    cellScale: this.cellScale,
                    boundarySpace: this.boundarySpace,
                    src_p: this.fbos.pressure_0,
                    src_v: this.fbos.vel_viscous0,
                    dst: this.fbos.vel_0,
                    dt: this.options.dt
                });
            };
            Simulation.prototype.calcSize = function () {
                var width = Math.max(1, Math.round(this.options.resolution * Common.width));
                var height = Math.max(1, Math.round(this.options.resolution * Common.height));
                this.cellScale.set(1 / width, 1 / height);
                this.fboSize.set(width, height);
            };
            Simulation.prototype.resize = function () {
                this.calcSize();
                for (var key in this.fbos) {
                    this.fbos[key].setSize(this.fboSize.x, this.fboSize.y);
                }
            };
            Simulation.prototype.update = function () {
                if (this.options.isBounce)
                    this.boundarySpace.set(0, 0);
                else
                    this.boundarySpace.copy(this.cellScale);
                this.advection.update({ dt: this.options.dt, isBounce: this.options.isBounce, BFECC: this.options.BFECC });
                this.externalForce.update({
                    cursor_size: this.options.cursor_size,
                    mouse_force: this.options.mouse_force,
                    cellScale: this.cellScale
                });
                var vel = this.fbos.vel_1;
                if (this.options.isViscous) {
                    vel = this.viscous.update({
                        viscous: this.options.viscous,
                        iterations: this.options.iterations_viscous,
                        dt: this.options.dt
                    });
                }
                this.divergence.update({ vel: vel });
                var pressure = this.poisson.update({ iterations: this.options.iterations_poisson });
                this.pressure.update({ vel: vel, pressure: pressure });
            };
            return Simulation;
        }());
        var Output = /** @class */ (function () {
            function Output() {
                this.simulation = new Simulation();
                this.scene = new THREE.Scene();
                this.camera = new THREE.Camera();
                this.output = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.RawShaderMaterial({
                    vertexShader: face_vert,
                    fragmentShader: color_frag,
                    transparent: true,
                    depthWrite: false,
                    uniforms: {
                        velocity: { value: this.simulation.fbos.vel_0.texture },
                        boundarySpace: { value: new THREE.Vector2() },
                        palette: { value: paletteTex },
                        bgColor: { value: bgVec4 }
                    }
                }));
                this.scene.add(this.output);
            }
            Output.prototype.resize = function () {
                this.simulation.resize();
            };
            Output.prototype.render = function () {
                if (!Common.renderer)
                    return;
                Common.renderer.setRenderTarget(null);
                Common.renderer.render(this.scene, this.camera);
            };
            Output.prototype.update = function () {
                this.simulation.update();
                this.render();
            };
            return Output;
        }());
        var WebGLManager = /** @class */ (function () {
            function WebGLManager(props) {
                var _this = this;
                this.lastUserInteraction = performance.now();
                this.running = false;
                this._loop = this.loop.bind(this);
                this._resize = this.resize.bind(this);
                this.props = props;
                Common.init(props.$wrapper);
                Mouse.init(props.$wrapper);
                Mouse.autoIntensity = props.autoIntensity;
                Mouse.takeoverDuration = props.takeoverDuration;
                Mouse.onInteract = function () {
                    _this.lastUserInteraction = performance.now();
                    if (_this.autoDriver)
                        _this.autoDriver.forceStop();
                };
                this.autoDriver = new AutoDriver(Mouse, this, {
                    enabled: props.autoDemo,
                    speed: props.autoSpeed,
                    resumeDelay: props.autoResumeDelay,
                    rampDuration: props.autoRampDuration
                });
                this.init();
                window.addEventListener('resize', this._resize);
                this._onVisibility = function () {
                    var hidden = document.hidden;
                    if (hidden) {
                        _this.pause();
                    }
                    else if (isVisibleRef.current) {
                        _this.start();
                    }
                };
                document.addEventListener('visibilitychange', this._onVisibility);
            }
            WebGLManager.prototype.init = function () {
                if (!Common.renderer)
                    return;
                this.props.$wrapper.prepend(Common.renderer.domElement);
                this.output = new Output();
            };
            WebGLManager.prototype.resize = function () {
                Common.resize();
                this.output.resize();
            };
            WebGLManager.prototype.render = function () {
                if (this.autoDriver)
                    this.autoDriver.update();
                Mouse.update();
                Common.update();
                this.output.update();
            };
            WebGLManager.prototype.loop = function () {
                if (!this.running)
                    return;
                this.render();
                rafRef.current = requestAnimationFrame(this._loop);
            };
            WebGLManager.prototype.start = function () {
                if (this.running)
                    return;
                this.running = true;
                this._loop();
            };
            WebGLManager.prototype.pause = function () {
                this.running = false;
                if (rafRef.current) {
                    cancelAnimationFrame(rafRef.current);
                    rafRef.current = null;
                }
            };
            WebGLManager.prototype.dispose = function () {
                try {
                    window.removeEventListener('resize', this._resize);
                    if (this._onVisibility)
                        document.removeEventListener('visibilitychange', this._onVisibility);
                    Mouse.dispose();
                    if (Common.renderer) {
                        var canvas = Common.renderer.domElement;
                        if (canvas && canvas.parentNode)
                            canvas.parentNode.removeChild(canvas);
                        Common.renderer.dispose();
                    }
                }
                catch (_a) {
                    /* noop */
                }
            };
            return WebGLManager;
        }());
        var container = mountRef.current;
        container.style.position = container.style.position || 'relative';
        container.style.overflow = container.style.overflow || 'hidden';
        var webgl = new WebGLManager({
            $wrapper: container,
            autoDemo: autoDemo,
            autoSpeed: autoSpeed,
            autoIntensity: autoIntensity,
            takeoverDuration: takeoverDuration,
            autoResumeDelay: autoResumeDelay,
            autoRampDuration: autoRampDuration
        });
        webglRef.current = webgl;
        var applyOptionsFromProps = function () {
            var _a;
            if (!webglRef.current)
                return;
            var sim = (_a = webglRef.current.output) === null || _a === void 0 ? void 0 : _a.simulation;
            if (!sim)
                return;
            var prevRes = sim.options.resolution;
            Object.assign(sim.options, {
                mouse_force: mouseForce,
                cursor_size: cursorSize,
                isViscous: isViscous,
                viscous: viscous,
                iterations_viscous: iterationsViscous,
                iterations_poisson: iterationsPoisson,
                dt: dt,
                BFECC: BFECC,
                resolution: resolution,
                isBounce: isBounce
            });
            if (resolution !== prevRes)
                sim.resize();
        };
        applyOptionsFromProps();
        webgl.start();
        var io = new IntersectionObserver(function (entries) {
            var entry = entries[0];
            var isVisible = entry.isIntersecting && entry.intersectionRatio > 0;
            isVisibleRef.current = isVisible;
            if (!webglRef.current)
                return;
            if (isVisible && !document.hidden) {
                webglRef.current.start();
            }
            else {
                webglRef.current.pause();
            }
        }, { threshold: [0, 0.01, 0.1] });
        io.observe(container);
        intersectionObserverRef.current = io;
        var ro = new ResizeObserver(function () {
            if (!webglRef.current)
                return;
            if (resizeRafRef.current)
                cancelAnimationFrame(resizeRafRef.current);
            resizeRafRef.current = requestAnimationFrame(function () {
                if (!webglRef.current)
                    return;
                webglRef.current.resize();
            });
        });
        ro.observe(container);
        resizeObserverRef.current = ro;
        return function () {
            if (rafRef.current)
                cancelAnimationFrame(rafRef.current);
            if (resizeObserverRef.current) {
                try {
                    resizeObserverRef.current.disconnect();
                }
                catch (_a) {
                    /* noop */
                }
            }
            if (intersectionObserverRef.current) {
                try {
                    intersectionObserverRef.current.disconnect();
                }
                catch (_b) {
                    /* noop */
                }
            }
            if (webglRef.current) {
                webglRef.current.dispose();
            }
            webglRef.current = null;
        };
    }, [
        BFECC,
        cursorSize,
        dt,
        isBounce,
        isViscous,
        iterationsPoisson,
        iterationsViscous,
        mouseForce,
        resolution,
        viscous,
        colors,
        autoDemo,
        autoSpeed,
        autoIntensity,
        takeoverDuration,
        autoResumeDelay,
        autoRampDuration
    ]);
    (0, react_1.useEffect)(function () {
        var _a;
        var webgl = webglRef.current;
        if (!webgl)
            return;
        var sim = (_a = webgl.output) === null || _a === void 0 ? void 0 : _a.simulation;
        if (!sim)
            return;
        var prevRes = sim.options.resolution;
        Object.assign(sim.options, {
            mouse_force: mouseForce,
            cursor_size: cursorSize,
            isViscous: isViscous,
            viscous: viscous,
            iterations_viscous: iterationsViscous,
            iterations_poisson: iterationsPoisson,
            dt: dt,
            BFECC: BFECC,
            resolution: resolution,
            isBounce: isBounce
        });
        if (webgl.autoDriver) {
            webgl.autoDriver.enabled = autoDemo;
            webgl.autoDriver.speed = autoSpeed;
            webgl.autoDriver.resumeDelay = autoResumeDelay;
            webgl.autoDriver.rampDurationMs = autoRampDuration * 1000;
            if (webgl.autoDriver.mouse) {
                webgl.autoDriver.mouse.autoIntensity = autoIntensity;
                webgl.autoDriver.mouse.takeoverDuration = takeoverDuration;
            }
        }
        if (resolution !== prevRes)
            sim.resize();
    }, [
        mouseForce,
        cursorSize,
        isViscous,
        viscous,
        iterationsViscous,
        iterationsPoisson,
        dt,
        BFECC,
        resolution,
        isBounce,
        autoDemo,
        autoSpeed,
        autoIntensity,
        takeoverDuration,
        autoResumeDelay,
        autoRampDuration
    ]);
    return ((0, jsx_runtime_1.jsx)("div", { ref: mountRef, className: "w-full h-full relative overflow-hidden pointer-events-none touch-none ".concat(className || ''), style: style }));
}
