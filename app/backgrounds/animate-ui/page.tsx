'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PreviewTile } from "@/components/preview-tile";
import { Sparkles, Code } from "lucide-react";

function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="relative">
      <pre className="max-h-48 overflow-auto rounded-md border bg-gray-900 p-3 text-sm text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Simple animated components since animate-ui specific components aren't fully available
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500/30 rounded-full animate-ping" />
      <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-500/30 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-pink-500/30 rounded-full animate-bounce" />
    </div>
  );
}

function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent),
            linear-gradient(0deg, transparent, rgba(168, 85, 247, 0.3), transparent)
          `,
          animation: 'wave 3s ease-in-out infinite'
        }}
      />
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
      `}</style>
    </div>
  );
}

function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animation: 'twinkle 2s ease-in-out infinite'
          }}
        />
      ))}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
    </div>
  );
}

export default function AnimateUIBackgroundsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Animate-UI Backgrounds</h1>
        <p className="text-muted-foreground">
          Interactive animated backgrounds with smooth transitions and motion effects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Floating Orbs */}
        <PreviewTile
          title="Floating Orbs"
          description="Floating animated elements with various effects."
          componentName="FloatingOrbs"
        >
          <div className="w-full h-full relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg overflow-hidden">
            <FloatingOrbs />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-white font-semibold">
                Floating Elements
              </div>
            </div>
          </div>
        </PreviewTile>

        {/* Wave Animation */}
        <PreviewTile
          title="Wave Background"
          description="Flowing wave animation with gradient colors."
          componentName="WaveBackground"
        >
          <div className="w-full h-full relative bg-slate-900 rounded-lg overflow-hidden">
            <WaveBackground />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-white font-semibold">
                Wave Motion
              </div>
            </div>
          </div>
        </PreviewTile>

        {/* Particle Field */}
        <PreviewTile
          title="Particle Field"
          description="Twinkling particle effect background."
          componentName="ParticleField"
        >
          <div className="w-full h-full relative bg-gradient-to-b from-slate-900 to-blue-900 rounded-lg overflow-hidden">
            <ParticleField />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-white font-semibold">
                Particle System
              </div>
            </div>
          </div>
        </PreviewTile>

        {/* Gradient Animation */}
        <PreviewTile
          title="Animated Gradient"
          description="Smooth gradient color transitions."
          componentName="AnimatedGradient"
        >
          <div className="w-full h-full relative rounded-lg overflow-hidden">
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(-45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 8s ease infinite'
              }}
            />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-white font-semibold shadow-lg">
                Gradient Shift
              </div>
            </div>
            <style jsx>{`
              @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
            `}</style>
          </div>
        </PreviewTile>

        {/* Matrix Effect */}
        <PreviewTile
          title="Matrix Effect"
          description="Digital rain animation effect."
          componentName="MatrixBackground"
        >
          <div className="w-full h-full relative bg-black rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 text-green-400 font-mono text-xs opacity-70"
                  style={{
                    left: `${i * 10}%`,
                    animation: `matrix 3s linear infinite`,
                    animationDelay: `${i * 0.3}s`
                  }}
                >
                  01101001
                </div>
              ))}
            </div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-green-400 font-semibold bg-black/50 px-3 py-1 rounded">
                Matrix Rain
              </div>
            </div>
            <style jsx>{`
              @keyframes matrix {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(200px); }
              }
            `}</style>
          </div>
        </PreviewTile>

        {/* Ripple Effect */}
        <PreviewTile
          title="Ripple Effect"
          description="Expanding ripple animation from center."
          componentName="RippleBackground"
        >
          <div className="w-full h-full relative bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute border-2 border-white/20 rounded-full"
                  style={{
                    width: '20px',
                    height: '20px',
                    animation: `ripple 2s ease-out infinite`,
                    animationDelay: `${i * 0.6}s`
                  }}
                />
              ))}
            </div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-white font-semibold">
                Ripple Waves
              </div>
            </div>
            <style jsx>{`
              @keyframes ripple {
                0% {
                  width: 20px;
                  height: 20px;
                  opacity: 1;
                }
                100% {
                  width: 200px;
                  height: 200px;
                  opacity: 0;
                }
              }
            `}</style>
          </div>
        </PreviewTile>
      </div>

      {/* Implementation Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Animation Implementation</h2>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Floating Orbs Component</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500/30 rounded-full animate-ping" />
      <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-500/30 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-pink-500/30 rounded-full animate-bounce" />
    </div>
  );
}`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Animated Gradient Background</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="css"
                code={`.animated-gradient {
  background: linear-gradient(-45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Particle System</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: \`\${Math.random() * 100}%\`,
            top: \`\${Math.random() * 100}%\`,
            animation: 'twinkle 2s ease-in-out infinite'
          }}
        />
      ))}
    </div>
  );
}`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ripple Animation</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="css"
                code={`@keyframes ripple {
  0% {
    width: 20px;
    height: 20px;
    opacity: 1;
  }
  100% {
    width: 200px;
    height: 200px;
    opacity: 0;
  }
}

.ripple-element {
  animation: ripple 2s ease-out infinite;
}`}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
