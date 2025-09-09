"use strict";
"use client";
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
exports.CoolMode = void 0;
var react_1 = __importStar(require("react"));
var getContainer = function () {
    var id = "_coolMode_effect";
    var existingContainer = document.getElementById(id);
    if (existingContainer) {
        return existingContainer;
    }
    var container = document.createElement("div");
    container.setAttribute("id", id);
    container.setAttribute("style", "overflow:hidden; position:fixed; height:100%; top:0; left:0; right:0; bottom:0; pointer-events:none; z-index:2147483647");
    document.body.appendChild(container);
    return container;
};
var instanceCounter = 0;
var applyParticleEffect = function (element, options) {
    instanceCounter++;
    var defaultParticle = "circle";
    var particleType = (options === null || options === void 0 ? void 0 : options.particle) || defaultParticle;
    var sizes = [15, 20, 25, 35, 45];
    var limit = 45;
    var particles = [];
    var autoAddParticle = false;
    var mouseX = 0;
    var mouseY = 0;
    var container = getContainer();
    function generateParticle() {
        var size = (options === null || options === void 0 ? void 0 : options.size) || sizes[Math.floor(Math.random() * sizes.length)];
        var speedHorz = (options === null || options === void 0 ? void 0 : options.speedHorz) || Math.random() * 10;
        var speedUp = (options === null || options === void 0 ? void 0 : options.speedUp) || Math.random() * 25;
        var spinVal = Math.random() * 360;
        var spinSpeed = Math.random() * 35 * (Math.random() <= 0.5 ? -1 : 1);
        var top = mouseY - size / 2;
        var left = mouseX - size / 2;
        var direction = Math.random() <= 0.5 ? -1 : 1;
        var particle = document.createElement("div");
        if (particleType === "circle") {
            var svgNS = "http://www.w3.org/2000/svg";
            var circleSVG = document.createElementNS(svgNS, "svg");
            var circle = document.createElementNS(svgNS, "circle");
            circle.setAttributeNS(null, "cx", (size / 2).toString());
            circle.setAttributeNS(null, "cy", (size / 2).toString());
            circle.setAttributeNS(null, "r", (size / 2).toString());
            circle.setAttributeNS(null, "fill", "hsl(".concat(Math.random() * 360, ", 70%, 50%)"));
            circleSVG.appendChild(circle);
            circleSVG.setAttribute("width", size.toString());
            circleSVG.setAttribute("height", size.toString());
            particle.appendChild(circleSVG);
        }
        else if (particleType.startsWith("http") ||
            particleType.startsWith("/")) {
            // Handle URL-based images
            particle.innerHTML = "<img src=\"".concat(particleType, "\" width=\"").concat(size, "\" height=\"").concat(size, "\" style=\"border-radius: 50%\">");
        }
        else {
            // Handle emoji or text characters
            var fontSizeMultiplier = 3; // Make emojis 3x bigger
            var emojiSize = size * fontSizeMultiplier;
            particle.innerHTML = "<div style=\"font-size: ".concat(emojiSize, "px; line-height: 1; text-align: center; width: ").concat(size, "px; height: ").concat(size, "px; display: flex; align-items: center; justify-content: center; transform: scale(").concat(fontSizeMultiplier, "); transform-origin: center;\">").concat(particleType, "</div>");
        }
        particle.style.position = "absolute";
        particle.style.transform = "translate3d(".concat(left, "px, ").concat(top, "px, 0px) rotate(").concat(spinVal, "deg)");
        container.appendChild(particle);
        particles.push({
            direction: direction,
            element: particle,
            left: left,
            size: size,
            speedHorz: speedHorz,
            speedUp: speedUp,
            spinSpeed: spinSpeed,
            spinVal: spinVal,
            top: top,
        });
    }
    function refreshParticles() {
        particles.forEach(function (p) {
            p.left = p.left - p.speedHorz * p.direction;
            p.top = p.top - p.speedUp;
            p.speedUp = Math.min(p.size, p.speedUp - 1);
            p.spinVal = p.spinVal + p.spinSpeed;
            if (p.top >=
                Math.max(window.innerHeight, document.body.clientHeight) + p.size) {
                particles = particles.filter(function (o) { return o !== p; });
                p.element.remove();
            }
            p.element.setAttribute("style", [
                "position:absolute",
                "will-change:transform",
                "top:".concat(p.top, "px"),
                "left:".concat(p.left, "px"),
                "transform:rotate(".concat(p.spinVal, "deg)"),
            ].join(";"));
        });
    }
    var animationFrame;
    var lastParticleTimestamp = 0;
    var particleGenerationDelay = 30;
    function loop() {
        var currentTime = performance.now();
        if (autoAddParticle &&
            particles.length < limit &&
            currentTime - lastParticleTimestamp > particleGenerationDelay) {
            generateParticle();
            lastParticleTimestamp = currentTime;
        }
        refreshParticles();
        animationFrame = requestAnimationFrame(loop);
    }
    loop();
    var isTouchInteraction = "ontouchstart" in window;
    var tap = isTouchInteraction ? "touchstart" : "mousedown";
    var tapEnd = isTouchInteraction ? "touchend" : "mouseup";
    var move = isTouchInteraction ? "touchmove" : "mousemove";
    var updateMousePosition = function (e) {
        var _a, _b;
        if ("touches" in e) {
            mouseX = (_a = e.touches) === null || _a === void 0 ? void 0 : _a[0].clientX;
            mouseY = (_b = e.touches) === null || _b === void 0 ? void 0 : _b[0].clientY;
        }
        else {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }
    };
    var tapHandler = function (e) {
        updateMousePosition(e);
        autoAddParticle = true;
    };
    var disableAutoAddParticle = function () {
        autoAddParticle = false;
    };
    element.addEventListener(move, updateMousePosition, { passive: true });
    element.addEventListener(tap, tapHandler, { passive: true });
    element.addEventListener(tapEnd, disableAutoAddParticle, { passive: true });
    element.addEventListener("mouseleave", disableAutoAddParticle, {
        passive: true,
    });
    return function () {
        element.removeEventListener(move, updateMousePosition);
        element.removeEventListener(tap, tapHandler);
        element.removeEventListener(tapEnd, disableAutoAddParticle);
        element.removeEventListener("mouseleave", disableAutoAddParticle);
        var interval = setInterval(function () {
            if (animationFrame && particles.length === 0) {
                cancelAnimationFrame(animationFrame);
                clearInterval(interval);
                if (--instanceCounter === 0) {
                    container.remove();
                }
            }
        }, 500);
    };
};
var CoolMode = function (_a) {
    var children = _a.children, options = _a.options;
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (ref.current) {
            return applyParticleEffect(ref.current, options);
        }
    }, [options]);
    return react_1.default.cloneElement(children, { ref: ref });
};
exports.CoolMode = CoolMode;
