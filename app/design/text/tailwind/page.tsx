'use client';

import { useState } from 'react';
import { PreviewSurface } from "@/components/preview-surface";
import { PreviewTile } from "@/components/preview-tile";

export default function TailwindTextPage() {
  const [animationSpeed, setAnimationSpeed] = useState<'normal' | 'fast'>('normal');
  const [gradientStyle, setGradientStyle] = useState<'rainbow' | 'sunset' | 'ocean'>('rainbow');

  const gradientClasses = {
    rainbow: 'bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500',
    sunset: 'bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400',
    ocean: 'bg-gradient-to-r from-teal-400 via-blue-400 to-green-400'
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">TailwindCSS Text Utilities</h2>
        <p className="text-muted-foreground">
          Text styling and animations using TailwindCSS utility classes. These examples demonstrate
          how to achieve text effects using Tailwind's comprehensive utility system.
        </p>
      </div>

      <PreviewSurface>
        {/* Gradient Text Animation */}
        <PreviewTile
          title="Animated Gradient Text"
          description="Text with animated gradient background using Tailwind's gradient utilities and animation classes."
          componentName="GradientTextTailwind"
          code={`<div class="text-2xl font-semibold">
  <span class="bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-300% animate-gradient">
    Tailwind Gradient
  </span>
</div>`}
          initialCustomization={{
            backgroundColor: '#0a0a0a',
            textColor: '#ffffff',
            borderRadius: 20,
            padding: 24,
            fontSize: 24
          }}
        >
          {(customization) => (
            <div className="text-2xl font-semibold">
              <span className={`${gradientClasses[gradientStyle]} bg-clip-text text-transparent bg-300% animate-gradient`}>
                Tailwind Gradient
              </span>
            </div>
          )}
        </PreviewTile>

        {/* Blur Reveal Text */}
        <PreviewTile
          title="Blur Reveal Animation"
          description="Text that reveals from a blurred state using Tailwind's filter and transition utilities."
          componentName="BlurTextTailwind"
          code={`<div class="text-center">
  <span class="text-2xl font-semibold blur-sm opacity-0 animate-blur-reveal">
    Blur Reveal Effect
  </span>
</div>`}
          initialCustomization={{
            backgroundColor: '#170D27',
            textColor: '#ffffff',
            borderRadius: 12,
            padding: 24,
            fontSize: 18
          }}
        >
          {(customization) => (
            <div className="text-center">
              <span className="text-2xl font-semibold blur-sm opacity-0 animate-blur-reveal">
                Blur Reveal Effect
              </span>
            </div>
          )}
        </PreviewTile>

        {/* Shiny Text */}
        <PreviewTile
          title="Shiny Text Effect"
          description="Text with a moving shine effect using Tailwind's background gradient and animation utilities."
          componentName="ShinyTextTailwind"
          code={`<div class="text-4xl font-bold text-gray-400 bg-clip-text bg-200% animate-shine">
  Shiny Text
</div>`}
          initialCustomization={{
            backgroundColor: '#1a1a1a',
            textColor: '#b5b5b5',
            borderRadius: 8,
            padding: 24,
            fontSize: 32
          }}
        >
          {(customization) => (
            <div className={`text-4xl font-bold text-gray-400 bg-clip-text bg-200% animate-shine ${animationSpeed === 'fast' ? 'animate-shine-fast' : ''}`}>
              Shiny Text
            </div>
          )}
        </PreviewTile>

        {/* Typewriter Effect */}
        <PreviewTile
          title="Typewriter Animation"
          description="Classic typewriter effect using Tailwind's animation and border utilities with monospace font."
          componentName="TypewriterTailwind"
          code={`<div class="font-mono overflow-hidden border-r-2 border-green-400 whitespace-nowrap animate-typewriter">
  Hello, Tailwind!
</div>`}
          initialCustomization={{
            backgroundColor: '#1a1a1a',
            textColor: '#00ff00',
            borderRadius: 8,
            padding: 24,
            fontSize: 18
          }}
        >
          {(customization) => (
            <div className="font-mono overflow-hidden border-r-2 border-green-400 whitespace-nowrap animate-typewriter">
              Hello, Tailwind!
            </div>
          )}
        </PreviewTile>

        {/* Text Shadow Glow */}
        <PreviewTile
          title="Glowing Text Shadow"
          description="Text with animated glowing shadow effects using Tailwind's text shadow and animation utilities."
          componentName="GlowTextTailwind"
          code={`<div class="text-4xl font-bold text-white animate-pulse-glow">
  Glowing Text
</div>`}
          initialCustomization={{
            backgroundColor: '#000000',
            textColor: '#ffffff',
            borderRadius: 12,
            padding: 32,
            fontSize: 36
          }}
        >
          {(customization) => (
            <div className="text-4xl font-bold text-white animate-pulse-glow">
              Glowing Text
            </div>
          )}
        </PreviewTile>

        {/* Bouncing Text */}
        <PreviewTile
          title="Bouncing Text Animation"
          description="Text with bounce animation using Tailwind's animation utilities with custom keyframes."
          componentName="BounceTextTailwind"
          code={`<div class="text-3xl font-bold text-white animate-bounce">
  Bounce!
</div>`}
          initialCustomization={{
            backgroundColor: '#1a1a1a',
            textColor: '#ffffff',
            borderRadius: 12,
            padding: 32,
            fontSize: 32
          }}
        >
          {(customization) => (
            <div className="text-3xl font-bold text-white animate-bounce">
              Bounce!
            </div>
          )}
        </PreviewTile>
      </PreviewSurface>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes shine {
          0% { background-position: 100%; }
          100% { background-position: -100%; }
        }
        
        @keyframes blurReveal {
          0% {
            filter: blur(8px);
            opacity: 0;
          }
          100% {
            filter: blur(0px);
            opacity: 1;
          }
        }
        
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00de, 0 0 20px #ff00de;
          }
          50% {
            text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de;
          }
        }
        
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
        
        .animate-shine {
          background-image: linear-gradient(120deg, 
            rgba(255, 255, 255, 0) 40%, 
            rgba(255, 255, 255, 0.8) 50%, 
            rgba(255, 255, 255, 0) 60%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shine 5s linear infinite;
        }
        
        .animate-shine-fast {
          animation-duration: 2s;
        }
        
        .animate-blur-reveal {
          animation: blurReveal 2s ease-out forwards;
          animation-delay: 0.5s;
        }
        
        .animate-typewriter {
          animation: typewriter 3.5s steps(40, end) forwards;
          width: 0;
        }
        
        .animate-pulse-glow {
          animation: pulseGlow 2s infinite;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
        
        .bg-200% {
          background-size: 200% 100%;
        }
      `}</style>
    </div>
  );
}