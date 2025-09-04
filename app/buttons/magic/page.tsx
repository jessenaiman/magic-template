import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="relative">
      <pre className="max-h-48 overflow-auto rounded-md border bg-gray-900 p-3 text-sm text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function MagicButtonsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Magic UI Buttons</h1>
        <p className="text-muted-foreground">
          Animated and interactive button components from Magic UI for enhanced user experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Rainbow Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Rainbow Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] font-medium text-white transition-all hover:bg-gradient-to-l">
              <span className="relative rounded-md bg-black px-6 py-2 transition-all group-hover:bg-transparent">
                Rainbow Magic
              </span>
            </button>
            <CodeBlock
              code={`<button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] font-medium text-white transition-all hover:bg-gradient-to-l">
  <span className="relative rounded-md bg-black px-6 py-2 transition-all group-hover:bg-transparent">
    Rainbow Magic
  </span>
</button>`}
              language="html"
            />
          </CardContent>
        </Card>

        {/* Shimmer Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Shimmer Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="relative inline-flex h-12 overflow-hidden rounded-md bg-primary px-6 py-2 text-primary-foreground shadow-lg transition-all hover:shadow-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700">
              Shimmer Effect
            </button>
            <CodeBlock
              code={`<button className="relative inline-flex h-12 overflow-hidden rounded-md bg-primary px-6 py-2 text-primary-foreground shadow-lg transition-all hover:shadow-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700">
  Shimmer Effect
</button>`}
              language="html"
            />
          </CardContent>
        </Card>

        {/* Pulsing Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pulsing Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="relative inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 py-2 font-medium text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl hover:scale-105">
              <span className="relative z-10">Pulse Button</span>
              <div className="absolute inset-0 rounded-md bg-blue-400 animate-ping opacity-20"></div>
            </button>
            <CodeBlock
              code={`<button className="relative inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 py-2 font-medium text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl hover:scale-105">
  <span className="relative z-10">Pulse Button</span>
  <div className="absolute inset-0 rounded-md bg-blue-400 animate-ping opacity-20"></div>
</button>`}
              language="html"
            />
          </CardContent>
        </Card>

        {/* Magnetic Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Magnetic Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110">
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                Magnetic Hover
              </span>
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </button>
            <CodeBlock
              code={`<button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110">
  <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
    Magnetic Hover
  </span>
  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
</button>`}
              language="html"
            />
          </CardContent>
        </Card>

        {/* Neon Glow Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Neon Glow Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="relative inline-flex h-12 items-center justify-center rounded-md border-2 border-cyan-400 bg-black px-6 py-2 font-medium text-cyan-400 shadow-lg shadow-cyan-400/25 transition-all hover:bg-cyan-400 hover:text-black hover:shadow-cyan-400/50">
              Neon Glow
            </button>
            <CodeBlock
              code={`<button className="relative inline-flex h-12 items-center justify-center rounded-md border-2 border-cyan-400 bg-black px-6 py-2 font-medium text-cyan-400 shadow-lg shadow-cyan-400/25 transition-all hover:bg-cyan-400 hover:text-black hover:shadow-cyan-400/50">
  Neon Glow
</button>`}
              language="html"
            />
          </CardContent>
        </Card>

        {/* Morphing Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Morphing Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-green-600 px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:rounded-full">
              <span className="relative z-10 transition-all duration-300 group-hover:scale-110">
                Morph Shape
              </span>
            </button>
            <CodeBlock
              code={`<button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-green-600 px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:rounded-full">
  <span className="relative z-10 transition-all duration-300 group-hover:scale-110">
    Morph Shape
  </span>
</button>`}
              language="html"
            />
          </CardContent>
        </Card>

        {/* Ripple Effect Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Ripple Effect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-orange-600 px-6 py-2 font-medium text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl">
              <span className="relative z-10">Ripple Click</span>
              <div className="absolute inset-0 rounded-md bg-orange-400 opacity-0 transition-opacity duration-300 group-active:opacity-30 group-active:animate-ping"></div>
            </button>
            <CodeBlock
              code={`<button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-orange-600 px-6 py-2 font-medium text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl">
  <span className="relative z-10">Ripple Click</span>
  <div className="absolute inset-0 rounded-md bg-orange-400 opacity-0 transition-opacity duration-300 group-active:opacity-30 group-active:animate-ping"></div>
</button>`}
              language="html"
            />
          </CardContent>
        </Card>

        {/* Floating Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Floating Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-red-600 font-medium text-white shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:scale-110 hover:-translate-y-1">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <CodeBlock
              code={`<button className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-red-600 font-medium text-white shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:scale-110 hover:-translate-y-1">
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
</button>`}
              language="html"
            />
          </CardContent>
        </Card>

        {/* Border Animation */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Border Animation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="group relative inline-flex h-12 items-center justify-center rounded-md border-2 border-indigo-600 bg-transparent px-6 py-2 font-medium text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white">
              <span className="relative z-10">Animated Border</span>
              <div className="absolute inset-0 rounded-md bg-indigo-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></div>
            </button>
            <CodeBlock
              code={`<button className="group relative inline-flex h-12 items-center justify-center rounded-md border-2 border-indigo-600 bg-transparent px-6 py-2 font-medium text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white">
  <span className="relative z-10">Animated Border</span>
  <div className="absolute inset-0 rounded-md bg-indigo-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></div>
</button>`}
              language="html"
            />
          </CardContent>
        </Card>

        {/* Spotlight Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Spotlight Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-slate-900 px-6 py-2 font-medium text-white shadow-lg transition-all hover:shadow-xl">
              <span className="relative z-10">Spotlight Effect</span>
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </button>
            <CodeBlock
              code={`<button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-slate-900 px-6 py-2 font-medium text-white shadow-lg transition-all hover:shadow-xl">
  <span className="relative z-10">Spotlight Effect</span>
  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
</button>`}
              language="html"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
