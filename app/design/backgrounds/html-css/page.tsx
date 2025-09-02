'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { PreviewTile } from "@/components/design/preview-tile";
import { Code } from "lucide-react";

function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="relative">
      <pre className="max-h-48 overflow-auto rounded-md border bg-gray-900 p-3 text-sm text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function HtmlCssBackgroundsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">HTML/CSS Backgrounds</h1>
        <p className="text-muted-foreground">
          Classic background implementations using pure HTML and CSS with modern styling techniques.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Linear Gradient Background */}
        <PreviewTile
          title="Linear Gradient"
          description="Smooth linear gradient transitions."
          componentName="LinearGradient"
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-lg flex items-center justify-center">
            <div className="text-white font-semibold text-lg shadow-lg">
              Gradient Background
            </div>
          </div>
        </PreviewTile>

        {/* Radial Gradient Background */}
        <PreviewTile
          title="Radial Gradient"
          description="Circular gradient emanating from center."
          componentName="RadialGradient"
        >
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400 via-red-500 to-pink-500 rounded-lg flex items-center justify-center">
            <div className="text-white font-semibold text-lg shadow-lg">
              Radial Gradient
            </div>
          </div>
        </PreviewTile>

        {/* Conic Gradient Background */}
        <PreviewTile
          title="Conic Gradient"
          description="Rotating color wheel effect."
          componentName="ConicGradient"
        >
          <div className="w-full h-full bg-[conic-gradient(from_0deg,_#ff0000,_#ffff00,_#00ff00,_#00ffff,_#0000ff,_#ff00ff,_#ff0000)] rounded-lg flex items-center justify-center">
            <div className="text-white font-semibold text-lg shadow-lg bg-black/50 px-3 py-1 rounded">
              Conic Gradient
            </div>
          </div>
        </PreviewTile>

        {/* Mesh Gradient Background */}
        <PreviewTile
          title="Mesh Gradient"
          description="Complex multi-point gradient."
          componentName="MeshGradient"
        >
          <div 
            className="w-full h-full rounded-lg flex items-center justify-center relative overflow-hidden"
            style={{
              background: `
                radial-gradient(at 0% 0%, #ff006e 0px, transparent 50%),
                radial-gradient(at 100% 0%, #8338ec 0px, transparent 50%),
                radial-gradient(at 100% 100%, #3a86ff 0px, transparent 50%),
                radial-gradient(at 0% 100%, #06ffa5 0px, transparent 50%)
              `
            }}
          >
            <div className="text-white font-semibold text-lg shadow-lg">
              Mesh Gradient
            </div>
          </div>
        </PreviewTile>

        {/* Animated Gradient Background */}
        <PreviewTile
          title="Animated Gradient"
          description="Moving gradient with CSS animation."
          componentName="AnimatedGradient"
        >
          <div className="w-full h-full relative rounded-lg overflow-hidden">
            <div 
              className="absolute inset-0 opacity-75 animate-pulse"
              style={{
                background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
                backgroundSize: '400% 400%',
                animation: 'gradient 15s ease infinite'
              }}
            />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-white font-semibold text-lg shadow-lg">
                Animated Gradient
              </div>
            </div>
            <style jsx>{`
              @keyframes gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
            `}</style>
          </div>
        </PreviewTile>

        {/* Pattern Background */}
        <PreviewTile
          title="CSS Pattern"
          description="Geometric pattern with CSS."
          componentName="CSSPattern"
        >
          <div 
            className="w-full h-full rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: '#4f46e5',
              backgroundImage: `
                radial-gradient(circle at 25px 25px, white 2px, transparent 2px),
                radial-gradient(circle at 75px 75px, white 2px, transparent 2px)
              `,
              backgroundSize: '100px 100px'
            }}
          >
            <div className="text-white font-semibold text-lg shadow-lg bg-black/50 px-3 py-1 rounded">
              CSS Pattern
            </div>
          </div>
        </PreviewTile>
      </div>

      {/* Code Examples Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">CSS Implementation Examples</h2>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Linear Gradient CSS</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="css"
                code={`.linear-gradient-bg {
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 100%
  );
}

/* Tailwind equivalent */
.bg-gradient-to-br.from-purple-500.to-pink-500`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Animated Gradient CSS</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="css"
                code={`.animated-gradient {
  background: linear-gradient(
    -45deg,
    #ee7752,
    #e73c7e,
    #23a6d5,
    #23d5ab
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}