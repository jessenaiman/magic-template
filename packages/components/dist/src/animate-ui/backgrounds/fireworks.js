"use strict";
'use client';
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FireworksBackground = FireworksBackground;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var utils_1 = require("@/lib/utils");
var rand = function (min, max) {
    return Math.random() * (max - min) + min;
};
var randInt = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
var randColor = function () { return "hsl(".concat(randInt(0, 360), ", 100%, 50%)"); };
function createParticle(x, y, color, speed, direction, gravity, friction, size) {
    var vx = Math.cos(direction) * speed;
    var vy = Math.sin(direction) * speed;
    var alpha = 1;
    var decay = rand(0.005, 0.02);
    return {
        x: x,
        y: y,
        color: color,
        speed: speed,
        direction: direction,
        vx: vx,
        vy: vy,
        gravity: gravity,
        friction: friction,
        alpha: alpha,
        decay: decay,
        size: size,
        update: function () {
            this.vx *= this.friction;
            this.vy *= this.friction;
            this.vy += this.gravity;
            this.x += this.vx;
            this.y += this.vy;
            this.alpha -= this.decay;
        },
        draw: function (ctx) {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.restore();
        },
        isAlive: function () {
            return this.alpha > 0;
        },
    };
}
function createFirework(x, y, targetY, color, speed, size, particleSpeed, particleSize, onExplode) {
    var angle = -Math.PI / 2 + rand(-0.3, 0.3);
    var vx = Math.cos(angle) * speed;
    var vy = Math.sin(angle) * speed;
    var trail = [];
    var trailLength = randInt(10, 25);
    return {
        x: x,
        y: y,
        targetY: targetY,
        color: color,
        speed: speed,
        size: size,
        angle: angle,
        vx: vx,
        vy: vy,
        trail: trail,
        trailLength: trailLength,
        exploded: false,
        update: function () {
            this.trail.push({ x: this.x, y: this.y });
            if (this.trail.length > this.trailLength) {
                this.trail.shift();
            }
            this.x += this.vx;
            this.y += this.vy;
            this.vy += 0.02;
            if (this.vy >= 0 || this.y <= this.targetY) {
                this.explode();
                return false;
            }
            return true;
        },
        explode: function () {
            var numParticles = randInt(50, 150);
            var particles = [];
            for (var i = 0; i < numParticles; i++) {
                var particleAngle = rand(0, Math.PI * 2);
                var localParticleSpeed = getValueByRange(particleSpeed);
                var localParticleSize = getValueByRange(particleSize);
                particles.push(createParticle(this.x, this.y, this.color, localParticleSpeed, particleAngle, 0.05, 0.98, localParticleSize));
            }
            onExplode(particles);
        },
        draw: function (ctx) {
            var _a, _b, _c, _d;
            ctx.save();
            ctx.beginPath();
            if (this.trail.length > 1) {
                ctx.moveTo((_b = (_a = this.trail[0]) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : this.x, (_d = (_c = this.trail[0]) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : this.y);
                for (var _i = 0, _e = this.trail; _i < _e.length; _i++) {
                    var point = _e[_i];
                    ctx.lineTo(point.x, point.y);
                }
            }
            else {
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x, this.y);
            }
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.size;
            ctx.lineCap = 'round';
            ctx.stroke();
            ctx.restore();
        },
    };
}
function getValueByRange(range) {
    if (typeof range === 'number') {
        return range;
    }
    return rand(range.min, range.max);
}
function getColor(color) {
    var _a;
    if (Array.isArray(color)) {
        return (_a = color[randInt(0, color.length)]) !== null && _a !== void 0 ? _a : randColor();
    }
    return color !== null && color !== void 0 ? color : randColor();
}
function FireworksBackground(_a) {
    var ref = _a.ref, className = _a.className, canvasProps = _a.canvasProps, _b = _a.population, population = _b === void 0 ? 1 : _b, color = _a.color, _c = _a.fireworkSpeed, fireworkSpeed = _c === void 0 ? { min: 4, max: 8 } : _c, _d = _a.fireworkSize, fireworkSize = _d === void 0 ? { min: 2, max: 5 } : _d, _e = _a.particleSpeed, particleSpeed = _e === void 0 ? { min: 2, max: 7 } : _e, _f = _a.particleSize, particleSize = _f === void 0 ? { min: 1, max: 5 } : _f, props = __rest(_a, ["ref", "className", "canvasProps", "population", "color", "fireworkSpeed", "fireworkSize", "particleSpeed", "particleSize"]);
    var canvasRef = React.useRef(null);
    var containerRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return containerRef.current; });
    React.useEffect(function () {
        var canvas = canvasRef.current;
        var container = containerRef.current;
        if (!canvas || !container)
            return;
        var ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        var maxX = window.innerWidth;
        var ratio = container.offsetHeight / container.offsetWidth;
        var maxY = maxX * ratio;
        canvas.width = maxX;
        canvas.height = maxY;
        var setCanvasSize = function () {
            maxX = window.innerWidth;
            ratio = container.offsetHeight / container.offsetWidth;
            maxY = maxX * ratio;
            canvas.width = maxX;
            canvas.height = maxY;
        };
        window.addEventListener('resize', setCanvasSize);
        var explosions = [];
        var fireworks = [];
        var handleExplosion = function (particles) {
            explosions.push.apply(explosions, particles);
        };
        var launchFirework = function () {
            var x = rand(maxX * 0.1, maxX * 0.9);
            var y = maxY;
            var targetY = rand(maxY * 0.1, maxY * 0.4);
            var fireworkColor = getColor(color);
            var speed = getValueByRange(fireworkSpeed);
            var size = getValueByRange(fireworkSize);
            fireworks.push(createFirework(x, y, targetY, fireworkColor, speed, size, particleSpeed, particleSize, handleExplosion));
            var timeout = rand(300, 800) / population;
            setTimeout(launchFirework, timeout);
        };
        launchFirework();
        var animationFrameId;
        var animate = function () {
            ctx.clearRect(0, 0, maxX, maxY);
            for (var i = fireworks.length - 1; i >= 0; i--) {
                var firework = fireworks[i];
                if (!(firework === null || firework === void 0 ? void 0 : firework.update())) {
                    fireworks.splice(i, 1);
                }
                else {
                    firework.draw(ctx);
                }
            }
            for (var i = explosions.length - 1; i >= 0; i--) {
                var particle = explosions[i];
                particle === null || particle === void 0 ? void 0 : particle.update();
                if (particle === null || particle === void 0 ? void 0 : particle.isAlive()) {
                    particle.draw(ctx);
                }
                else {
                    explosions.splice(i, 1);
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();
        var handleClick = function (event) {
            var x = event.clientX;
            var y = maxY;
            var targetY = event.clientY;
            var fireworkColor = getColor(color);
            var speed = getValueByRange(fireworkSpeed);
            var size = getValueByRange(fireworkSize);
            fireworks.push(createFirework(x, y, targetY, fireworkColor, speed, size, particleSpeed, particleSize, handleExplosion));
        };
        container.addEventListener('click', handleClick);
        return function () {
            window.removeEventListener('resize', setCanvasSize);
            container.removeEventListener('click', handleClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, [
        population,
        color,
        fireworkSpeed,
        fireworkSize,
        particleSpeed,
        particleSize,
    ]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: containerRef, "data-slot": "fireworks-background", className: (0, utils_1.cn)('relative size-full overflow-hidden', className) }, props, { children: (0, jsx_runtime_1.jsx)("canvas", __assign({}, canvasProps, { ref: canvasRef, className: (0, utils_1.cn)('absolute inset-0 size-full', canvasProps === null || canvasProps === void 0 ? void 0 : canvasProps.className) })) })));
}
