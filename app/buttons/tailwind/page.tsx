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

export default function TailwindButtonsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Tailwind CSS Buttons</h1>
        <p className="text-muted-foreground">
          Modern button designs using Tailwind CSS utility classes for rapid development.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Primary Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Primary Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 shadow-md hover:shadow-lg">
              Primary Action
            </button>
            <CodeBlock
              code={`<button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 shadow-md hover:shadow-lg">
  Primary Action
</button>`}
              language="html"
            />
          </CardContent>
        </Card>

        {/* Secondary Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Secondary Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 border border-gray-300">
              Secondary Action
            </button>
            <CodeBlock
              code={`<button className="px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 border border-gray-300">
  Secondary Action
</button>`}
              language="html"
            />
          </CardContent>
        </Card>

        {/* Success Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Success Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 shadow-md hover:shadow-lg">
              Success Action
            </button>
            <CodeBlock
              code={`<button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 shadow-md hover:shadow-lg">
  Success Action
</button>`}
              language="html"
            />
          </CardContent>
        </Card>

        {/* Danger Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Danger Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 shadow-md hover:shadow-lg">
              Danger Action
            </button>
            <CodeBlock
              code={`<button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 shadow-md hover:shadow-lg">
  Danger Action
</button>`}
              language="html"
            />
          </CardContent>
        </Card>

        {/* Outline Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Outline Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="px-6 py-3 bg-transparent text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
              Outline Action
            </button>
            <CodeBlock
              code={`<button className="px-6 py-3 bg-transparent text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
  Outline Action
</button>`}
              language="html"
            />
          </CardContent>
        </Card>

        {/* Ghost Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Ghost Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="px-6 py-3 bg-transparent text-gray-600 font-semibold rounded-lg hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200">
              Ghost Action
            </button>
            <CodeBlock
              code={`<button className="px-6 py-3 bg-transparent text-gray-600 font-semibold rounded-lg hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200">
  Ghost Action
</button>`}
              language="html"
            />
          </CardContent>
        </Card>

        {/* Large Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Large Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="px-8 py-4 bg-purple-600 text-white font-bold text-lg rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Large Action
            </button>
            <CodeBlock
              code={`<button className="px-8 py-4 bg-purple-600 text-white font-bold text-lg rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200 shadow-md hover:shadow-lg">
  Large Action
</button>`}
              language="html"
            />
          </CardContent>
        </Card>

        {/* Small Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Small Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="px-3 py-1.5 bg-indigo-600 text-white font-medium text-sm rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200">
              Small Action
            </button>
            <CodeBlock
              code={`<button className="px-3 py-1.5 bg-indigo-600 text-white font-medium text-sm rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200">
  Small Action
</button>`}
              language="html"
            />
          </CardContent>
        </Card>

        {/* Loading Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Loading Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md flex items-center gap-2" disabled>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </button>
            <CodeBlock
              code={`<button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md flex items-center gap-2" disabled>
  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Loading...
</button>`}
              language="html"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
