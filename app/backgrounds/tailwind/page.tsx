import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

export default function TailwindBackgroundsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Tailwind CSS Backgrounds</h1>
        <p className="text-muted-foreground">
          Modern background implementations using Tailwind CSS utilities and custom patterns.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Gradient Backgrounds */}
        <PreviewTile
          title="Gradient Variants"
          description="Multiple gradient directions and styles."
          componentName="TailwindGradients"
        >
          <div className="w-full h-full grid grid-cols-2 gap-2 p-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center text-white text-xs font-medium">
              to-r
            </div>
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded flex items-center justify-center text-white text-xs font-medium">
              to-br
            </div>
            <div className="bg-gradient-to-t from-pink-500 to-yellow-400 rounded flex items-center justify-center text-white text-xs font-medium">
              to-t
            </div>
            <div className="bg-gradient-to-bl from-purple-600 to-pink-500 rounded flex items-center justify-center text-white text-xs font-medium">
              to-bl
            </div>
          </div>
        </PreviewTile>

        {/* Background Patterns */}
        <PreviewTile
          title="Background Patterns"
          description="CSS pattern utilities with Tailwind."
          componentName="TailwindPatterns"
        >
          <div className="w-full h-full relative bg-slate-900 rounded-lg overflow-hidden">
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 25px 25px, white 1px, transparent 1px),
                  radial-gradient(circle at 75px 75px, white 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-white font-semibold">
                Dot Pattern
              </div>
            </div>
          </div>
        </PreviewTile>

        {/* Dark Mode Responsive */}
        <PreviewTile
          title="Dark Mode Support"
          description="Responsive dark mode backgrounds."
          componentName="TailwindDarkMode"
        >
          <div className="w-full h-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300">
            <div className="text-gray-900 dark:text-white font-semibold">
              Dark Mode Ready
            </div>
          </div>
        </PreviewTile>

        {/* Backdrop Effects */}
        <PreviewTile
          title="Backdrop Effects"
          description="Blur and backdrop utilities."
          componentName="TailwindBackdrop"
        >
          <div className="w-full h-full relative bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 m-4 rounded-lg flex items-center justify-center">
              <div className="text-white font-semibold">
                Glassmorphism
              </div>
            </div>
          </div>
        </PreviewTile>

        {/* Custom Animations */}
        <PreviewTile
          title="Animated Backgrounds"
          description="Tailwind animation utilities."
          componentName="TailwindAnimations"
        >
          <div className="w-full h-full relative bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 -skew-x-12 animate-pulse" />
            <div className="flex items-center justify-center h-full relative z-10">
              <div className="text-white font-semibold animate-bounce">
                Animated BG
              </div>
            </div>
          </div>
        </PreviewTile>

        {/* Responsive Backgrounds */}
        <PreviewTile
          title="Responsive Design"
          description="Breakpoint-specific backgrounds."
          componentName="TailwindResponsive"
        >
          <div className="w-full h-full bg-red-500 sm:bg-yellow-500 md:bg-green-500 lg:bg-blue-500 xl:bg-purple-500 rounded-lg flex items-center justify-center transition-colors duration-300">
            <div className="text-white font-semibold text-center">
              <div>Responsive</div>
              <div className="text-xs opacity-75">Resize to see</div>
            </div>
          </div>
        </PreviewTile>
      </div>

      {/* Utility Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Tailwind Utility Examples</h2>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Gradient Utilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded flex items-center justify-center text-white font-medium">
                  from-cyan-500 to-blue-500
                </div>
                <div className="h-12 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded flex items-center justify-center text-white font-medium">
                  3-color gradient
                </div>
              </div>
              <CodeBlock
                language="html"
                code={`<div class="bg-gradient-to-r from-cyan-500 to-blue-500">
  Linear gradient
</div>

<div class="bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
  3-color gradient
</div>`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Background Patterns</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-24 bg-slate-100 relative rounded overflow-hidden">
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)'
                  }}
                />
              </div>
              <CodeBlock
                language="css"
                code={`/* Custom pattern with arbitrary values */
<div class="bg-slate-100" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)">
  Striped pattern
</div>`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Backdrop Effects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-24 relative bg-gradient-to-r from-blue-600 to-purple-600 rounded overflow-hidden">
                <div className="absolute inset-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded flex items-center justify-center text-white font-medium">
                  Glassmorphism
                </div>
              </div>
              <CodeBlock
                language="html"
                code={`<div class="bg-white/20 backdrop-blur-sm border border-white/30">
  Glass effect
</div>`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dark Mode Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-24 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded flex items-center justify-center text-slate-900 dark:text-slate-100 font-medium transition-colors">
                Theme-aware background
              </div>
              <CodeBlock
                language="html"
                code={`<div class="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100">
  Dark mode ready
</div>`}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}