import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Heart, Share, Trash2 } from "lucide-react";

function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="relative">
      <pre className="max-h-48 overflow-auto rounded-md border bg-gray-900 p-3 text-sm text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function ShadcnButtonsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Shadcn/ui Buttons</h1>
        <p className="text-muted-foreground">
          Pre-built button components from Shadcn/ui with consistent design and accessibility.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Default Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Default Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button>Default Button</Button>
            <CodeBlock
              code={`import { Button } from "@workspace/ui/components/button"

export default function MyComponent() {
  return <Button>Default Button</Button>
}`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Secondary Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Secondary Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="secondary">Secondary Button</Button>
            <CodeBlock
              code={`<Button variant="secondary">Secondary Button</Button>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Destructive Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Destructive Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="destructive">Delete Item</Button>
            <CodeBlock
              code={`<Button variant="destructive">Delete Item</Button>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Outline Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Outline Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline">Outline Button</Button>
            <CodeBlock
              code={`<Button variant="outline">Outline Button</Button>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Ghost Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Ghost Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="ghost">Ghost Button</Button>
            <CodeBlock
              code={`<Button variant="ghost">Ghost Button</Button>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Link Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Link Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="link">Link Button</Button>
            <CodeBlock
              code={`<Button variant="link">Link Button</Button>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Button Sizes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Button Sizes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-2">
              <Button size="sm">Small Button</Button>
              <Button size="default">Default Button</Button>
              <Button size="lg">Large Button</Button>
            </div>
            <CodeBlock
              code={`<Button size="sm">Small Button</Button>
<Button size="default">Default Button</Button>
<Button size="lg">Large Button</Button>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Button with Icon */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Button with Icon</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button>
              <Download className="h-4 w-4" />
              Download
            </Button>
            <CodeBlock
              code={`import { Download } from "lucide-react"

<Button>
  <Download className="h-4 w-4" />
  Download
</Button>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Icon Only Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Icon Only Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button size="icon">
              <Heart className="h-4 w-4" />
            </Button>
            <CodeBlock
              code={`<Button size="icon">
  <Heart className="h-4 w-4" />
</Button>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Button States */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Button States</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-2">
              <Button disabled>Disabled Button</Button>
              <Button variant="destructive">
                <Trash2 className="h-4 w-4" />
                Delete
              </Button>
              <Button variant="outline">
                <Share className="h-4 w-4" />
                Share
              </Button>
            </div>
            <CodeBlock
              code={`<Button disabled>Disabled Button</Button>
<Button variant="destructive">
  <Trash2 className="h-4 w-4" />
  Delete
</Button>
<Button variant="outline">
  <Share className="h-4 w-4" />
  Share
</Button>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Loading Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Loading Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button disabled>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </Button>
            <CodeBlock
              code={`<Button disabled>
  <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Loading...
</Button>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Custom Styled Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Custom Styled</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
              Custom Gradient
            </Button>
            <CodeBlock
              code={`<Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
  Custom Gradient
</Button>`}
              language="tsx"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
