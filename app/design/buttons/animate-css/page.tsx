"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Heart, Download, Share, Zap, Sparkles } from "lucide-react";
import { PreviewTile } from "@/components/preview-tile";

function CodeBlock({ code, language: _language }: { code: string; language: string }) {
  return (
    <div className="relative">
      <pre className="max-h-48 overflow-auto rounded-md border bg-gray-900 p-3 text-sm text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function AnimateCssButtonsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Animate.css Buttons</h1>
        <p className="text-muted-foreground">
          Interactive button animations using CSS keyframes and Animate.css library for smooth, performant effects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Bounce Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Bounce Effect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTile
              title="Bounce Button"
              description="Button with bounce animation"
              componentName="bounce-button"
            >
              <button 
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:animate-bounce transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Play className="inline-block w-4 h-4 mr-2" />
                Bounce Me
              </button>
            </PreviewTile>
            <CodeBlock
              code={`<button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:animate-bounce transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  <Play className="inline-block w-4 h-4 mr-2" />
  Bounce Me
</button>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Pulse Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pulse Effect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTile
              title="Pulse Button"
              description="Button with pulse animation"
              componentName="pulse-button"
            >
              <button 
                className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:animate-pulse transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <Heart className="inline-block w-4 h-4 mr-2" />
                Pulse Me
              </button>
            </PreviewTile>
            <CodeBlock
              code={`<button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:animate-pulse transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
  <Heart className="inline-block w-4 h-4 mr-2" />
  Pulse Me
</button>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Ping Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Ping Effect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTile
              title="Ping Button"
              description="Button with ping animation"
              componentName="ping-button"
            >
              <button 
                className="relative px-6 py-3 bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <Download className="inline-block w-4 h-4 mr-2" />
                Download
              </button>
            </PreviewTile>
            <CodeBlock
              code={`<button className="relative px-6 py-3 bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
  <span className="absolute -top-1 -right-1 flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
  </span>
  <Download className="inline-block w-4 h-4 mr-2" />
  Download
</button>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Spin Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Spin Effect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTile
              title="Spin Button"
              description="Button with spinning icon"
              componentName="spin-button"
            >
              <button 
                className="group px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hover:bg-purple-700"
              >
                <Zap className="inline-block w-4 h-4 mr-2 group-hover:animate-spin transition-transform" />
                Spin Icon
              </button>
            </PreviewTile>
            <CodeBlock
              code={`<button className="group px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hover:bg-purple-700">
  <Zap className="inline-block w-4 h-4 mr-2 group-hover:animate-spin transition-transform" />
  Spin Icon
</button>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Shake Effect */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Shake Effect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTile
              title="Shake Button"
              description="Custom shake animation"
              componentName="shake-button"
            >
              <style jsx>{`
                @keyframes shake {
                  0%, 100% { transform: translateX(0); }
                  25% { transform: translateX(-5px); }
                  75% { transform: translateX(5px); }
                }
                .animate-shake:hover {
                  animation: shake 0.5s ease-in-out;
                }
              `}</style>
              <button 
                className="animate-shake px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <Share className="inline-block w-4 h-4 mr-2" />
                Shake Me
              </button>
            </PreviewTile>
            <CodeBlock
              code={`/* CSS */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
.animate-shake:hover {
  animation: shake 0.5s ease-in-out;
}

/* JSX */
<button className="animate-shake px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
  <Share className="inline-block w-4 h-4 mr-2" />
  Shake Me
</button>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Wiggle Effect */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Wiggle Effect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTile
              title="Wiggle Button"
              description="Custom wiggle animation"
              componentName="wiggle-button"
            >
              <style jsx>{`
                @keyframes wiggle {
                  0%, 7% { transform: rotateZ(0); }
                  15% { transform: rotateZ(-15deg); }
                  20% { transform: rotateZ(10deg); }
                  25% { transform: rotateZ(-10deg); }
                  30% { transform: rotateZ(6deg); }
                  35% { transform: rotateZ(-4deg); }
                  40%, 100% { transform: rotateZ(0); }
                }
                .animate-wiggle:hover {
                  animation: wiggle 1s ease-in-out;
                }
              `}</style>
              <button 
                className="animate-wiggle px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                <Sparkles className="inline-block w-4 h-4 mr-2" />
                Wiggle Fun
              </button>
            </PreviewTile>
            <CodeBlock
              code={`/* CSS */
@keyframes wiggle {
  0%, 7% { transform: rotateZ(0); }
  15% { transform: rotateZ(-15deg); }
  20% { transform: rotateZ(10deg); }
  25% { transform: rotateZ(-10deg); }
  30% { transform: rotateZ(6deg); }
  35% { transform: rotateZ(-4deg); }
  40%, 100% { transform: rotateZ(0); }
}
.animate-wiggle:hover {
  animation: wiggle 1s ease-in-out;
}

/* JSX */
<button className="animate-wiggle px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
  <Sparkles className="inline-block w-4 h-4 mr-2" />
  Wiggle Fun
</button>`}
              language="tsx"
            />
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Adding Custom Animations</h3>
        <p className="text-muted-foreground mb-4">
          To extend Tailwind with custom animations, add them to your <code className="bg-background px-2 py-1 rounded">tailwind.config.js</code>:
        </p>
        <CodeBlock
          code={`module.exports = {
  theme: {
    extend: {
      animation: {
        'shake': 'shake 0.5s ease-in-out',
        'wiggle': 'wiggle 1s ease-in-out',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        wiggle: {
          '0%, 7%': { transform: 'rotateZ(0)' },
          '15%': { transform: 'rotateZ(-15deg)' },
          '20%': { transform: 'rotateZ(10deg)' },
          '25%': { transform: 'rotateZ(-10deg)' },
          '30%': { transform: 'rotateZ(6deg)' },
          '35%': { transform: 'rotateZ(-4deg)' },
          '40%, 100%': { transform: 'rotateZ(0)' },
        }
      }
    }
  }
}`}
          language="javascript"
        />
      </div>
    </div>
  );
}