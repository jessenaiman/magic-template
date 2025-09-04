'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PreviewTile } from "@/components/design/preview-tile";
import { ToyBrick } from "lucide-react";

function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="relative">
      <pre className="max-h-48 overflow-auto rounded-md border bg-gray-900 p-3 text-sm text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Custom ReactBits-inspired components
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 animate-pulse"
          style={{
            left: `${20 + (i * 10)}%`,
            top: `${20 + (i * 8)}%`,
            width: `${20 + (i * 5)}px`,
            height: `${20 + (i * 5)}px`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${2 + (i * 0.3)}s`
          }}
        />
      ))}
    </div>
  );
}

function GooeyBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full animate-ping" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/15 rounded-full animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-pink-500/10 rounded-full animate-bounce" />
    </div>
  );
}

export default function ReactBitsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">ReactBits Backgrounds</h1>
        <p className="text-muted-foreground">
          Interactive background components inspired by ReactBits design patterns and modern UI trends.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Floating Orbs */}
        <PreviewTile
          title="Floating Orbs"
          description="Animated floating orb elements with gradients."
          componentName="FloatingOrbs"
        >
          <div className="relative w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg overflow-hidden">
            <FloatingOrbs />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-white font-semibold">
                Floating Elements
              </div>
            </div>
          </div>
        </PreviewTile>

        {/* Gooey Navigation Background */}
        <PreviewTile
          title="Gooey Blobs"
          description="Soft, gooey blob animations in the background."
          componentName="GooeyBlobs"
        >
          <div className="relative w-full h-full bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg overflow-hidden">
            <GooeyBlobs />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-white font-semibold">
                Gooey Interface
              </div>
            </div>
          </div>
        </PreviewTile>

        {/* Prism Effect */}
        <PreviewTile
          title="Prism Light"
          description="Light refraction prism effect background."
          componentName="PrismEffect"
        >
          <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: `
                  conic-gradient(from 0deg at 30% 30%, #ff006e, #8338ec, #3a86ff, #06ffa5, #ff006e),
                  conic-gradient(from 180deg at 70% 70%, #06ffa5, #3a86ff, #8338ec, #ff006e, #06ffa5)
                `,
                filter: 'blur(40px)'
              }}
            />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-white font-semibold">
                Prism Lights
              </div>
            </div>
          </div>
        </PreviewTile>

        {/* Magic Bento Background */}
        <PreviewTile
          title="Bento Grid"
          description="Inspired by bento box layouts with animated sections."
          componentName="BentoBackground"
        >
          <div className="relative w-full h-full bg-slate-100 dark:bg-slate-900 rounded-lg overflow-hidden p-2">
            <div className="grid grid-cols-3 grid-rows-3 gap-1 h-full">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white/50 dark:bg-slate-800/50 rounded animate-pulse"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${2 + (i * 0.1)}s`
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/50 dark:bg-white/10 text-white px-3 py-1 rounded font-semibold">
                Bento Layout
              </div>
            </div>
          </div>
        </PreviewTile>

        {/* Interactive Hover Background */}
        <PreviewTile
          title="Interactive Hover"
          description="Background that responds to user interaction."
          componentName="InteractiveBackground"
        >
          <div className="relative w-full h-full bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center">
              <div className="w-full h-full bg-white/10 rounded-full animate-ping" />
            </div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-white font-semibold">
                Hover Me!
              </div>
            </div>
          </div>
        </PreviewTile>

        {/* Morphing Shapes */}
        <PreviewTile
          title="Morphing Shapes"
          description="CSS shapes that morph and transform continuously."
          componentName="MorphingShapes"
        >
          <div className="relative w-full h-full bg-slate-900 rounded-lg overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-yellow-400/30 animate-spin rounded-lg transform-gpu" />
            <div 
              className="absolute bottom-1/4 right-1/4 w-16 h-8 bg-pink-400/30 transform-gpu"
              style={{
                animation: 'morph 3s ease-in-out infinite',
                borderRadius: '50% 20% 50% 20%'
              }}
            />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-white font-semibold">
                Shape Morphing
              </div>
            </div>
            <style jsx>{`
              @keyframes morph {
                0%, 100% { border-radius: 50% 20% 50% 20%; transform: rotate(0deg) scale(1); }
                25% { border-radius: 20% 50% 20% 50%; transform: rotate(90deg) scale(1.1); }
                50% { border-radius: 50% 50% 50% 50%; transform: rotate(180deg) scale(0.9); }
                75% { border-radius: 20% 80% 20% 80%; transform: rotate(270deg) scale(1.1); }
              }
            `}</style>
          </div>
        </PreviewTile>
      </div>

      {/* Implementation Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">ReactBits-Inspired Implementation</h2>
        
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
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 animate-pulse"
          style={{
            left: \`\${20 + (i * 10)}%\`,
            top: \`\${20 + (i * 8)}%\`,
            width: \`\${20 + (i * 5)}px\`,
            height: \`\${20 + (i * 5)}px\`,
            animationDelay: \`\${i * 0.5}s\`
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
              <CardTitle>Interactive Hover Background</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`<div className="relative group cursor-pointer">
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  <div className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-500">
    <div className="w-full h-full bg-white/10 rounded-full animate-ping" />
  </div>
  <div className="relative z-10">Your content</div>
</div>`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Morphing Shapes Animation</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="css"
                code={`@keyframes morph {
  0%, 100% { 
    border-radius: 50% 20% 50% 20%; 
    transform: rotate(0deg) scale(1); 
  }
  25% { 
    border-radius: 20% 50% 20% 50%; 
    transform: rotate(90deg) scale(1.1); 
  }
  50% { 
    border-radius: 50% 50% 50% 50%; 
    transform: rotate(180deg) scale(0.9); 
  }
  75% { 
    border-radius: 20% 80% 20% 80%; 
    transform: rotate(270deg) scale(1.1); 
  }
}

.morphing-shape {
  animation: morph 3s ease-in-out infinite;
}`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bento Grid Layout</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`<div className="grid grid-cols-3 grid-rows-3 gap-1 h-full">
  {Array.from({ length: 9 }).map((_, i) => (
    <div
      key={i}
      className="bg-white/50 dark:bg-slate-800/50 rounded animate-pulse"
      style={{
        animationDelay: \`\${i * 0.1}s\`,
        animationDuration: \`\${2 + (i * 0.1)}s\`
      }}
    />
  ))}
</div>`}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}