"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PreviewTile } from "@/components/preview-tile";
import { PreviewSurface } from "@/components/preview-surface";
import { Copy } from "lucide-react";
import React from "react";
import { RippleButton } from "@/components/animate-ui/buttons/ripple";
import { LiquidButton } from "@/components/animate-ui/buttons/liquid";
import { FlipButton } from "@/components/animate-ui/buttons/flip";
import { CopyButton } from "@/components/animate-ui/buttons/copy";
import { GitHubStarsButton } from "@/components/animate-ui/buttons/github-stars";
import { IconButton } from "@/components/animate-ui/buttons/icon";
import { InputButton } from "@/components/animate-ui/buttons/input";

// Error boundary for PreviewTile context errors
class PreviewTileErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: any}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: any) {
    if (
      typeof error?.message === "string" &&
      error.message.includes("usePreviewTileExpansion must be used within a PreviewSurface")
    ) {
      return { hasError: true, error };
    }
    return null;
  }
  componentDidCatch(error: any, info: any) {
    // Optionally log error
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-md border border-destructive bg-destructive/10 p-4 text-destructive text-sm">
          This preview cannot be displayed because it is not wrapped in a <b>PreviewSurface</b>.
        </div>
      );
    }
    return this.props.children;
  }
}

function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="relative">
      <pre className="max-h-48 overflow-auto rounded-md border bg-gray-900 p-3 text-sm text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}


export default function AnimateUIButtonsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Animate UI Buttons</h1>
        <p className="text-muted-foreground">
          Interactive button components from Animate UI with smooth animations and enhanced user experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Copy Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Copy Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTileErrorBoundary>
              <PreviewTile
                title="Copy Button"
                description="Copy to clipboard with feedback"
                componentName="copy-button"
                code=""
              >
                <CopyButton />
              </PreviewTile>
            </PreviewTileErrorBoundary>
            <CodeBlock
              code={`const CopyButton = ({ text, children, ...props }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={handleCopy} className="relative overflow-hidden rounded-lg bg-primary px-4 py-2 text-primary-foreground transition-all duration-300 hover:bg-primary/90">
      <span className={\`flex items-center gap-2 transition-transform duration-300 \${copied ? 'scale-95' : 'scale-100'}\`}>
        <Copy className="h-4 w-4" />
        {copied ? 'Copied!' : children}
      </span>
      {copied && <div className="absolute inset-0 bg-green-500/20 animate-pulse rounded-lg" />}
    </button>
  );
};`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Flip Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Flip Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTileErrorBoundary>
              <PreviewTile
                title="Flip Button"
                description="3D flip animation on hover"
                componentName="flip-button"
                code=""
              >
                <FlipButton frontText="Flip Me" backText="Flipped!" />
              </PreviewTile>
            </PreviewTileErrorBoundary>
            <CodeBlock
              code={`const FlipButton = ({ children, ...props }) => (
  <button
    className="group relative overflow-hidden rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-all duration-500 hover:bg-primary/90"
    {...props}
  >
    <span className="relative block transition-transform duration-500 group-hover:scale-y-[-1]">
      {children}
    </span>
  </button>
);`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* GitHub Stars Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">GitHub Stars</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTileErrorBoundary>
              <PreviewTile
                title="GitHub Stars Button"
                description="GitHub-style star button"
                componentName="github-stars-button"
                code=""
              >
                <GitHubStarsButton username="animate-ui" repo="components" />
              </PreviewTile>
            </PreviewTileErrorBoundary>
            <CodeBlock
              code={`const GitHubStarsButton = ({ repo, stars, ...props }) => (
  <button
    className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:border-gray-400"
    {...props}
  >
    <Github className="h-4 w-4" />
    <span>Star</span>
    <div className="flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-xs">
      <Star className="h-3 w-3" />
      {stars.toLocaleString()}
    </div>
  </button>
);`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Icon Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Icon Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTileErrorBoundary>
              <PreviewTile
                title="Icon Button"
                description="Animated icon with ripple effect"
                componentName="icon-button"
                code=""
              >
                <IconButton icon={Copy} />
              </PreviewTile>
            </PreviewTileErrorBoundary>
            <CodeBlock
              code={`const IconButton = ({ icon: Icon, ...props }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 600);
  };

  return (
    <button
      onClick={handleClick}
      className="relative rounded-full bg-primary p-3 text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-110"
      {...props}
    >
      <Icon className={\`h-5 w-5 transition-transform duration-300 \${clicked ? 'scale-110' : 'scale-100'}\`} />
      {clicked && <div className="absolute inset-0 animate-ping rounded-full bg-primary/50" />}
    </button>
  );
};`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Input Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Input Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTileErrorBoundary>
              <PreviewTile
                title="Input Button"
                description="Expandable input field"
                componentName="input-button"
                code=""
              >
                <InputButton />
              </PreviewTile>
            </PreviewTileErrorBoundary>
            <CodeBlock
              code={`const InputButton = ({ placeholder, ...props }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={\`relative transition-all duration-300 \${isExpanded ? 'w-64' : 'w-12'}\`}>
      {isExpanded ? (
        <div className="flex">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className="flex-1 rounded-l-lg border border-primary px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            autoFocus
          />
          <button onClick={() => setIsExpanded(false)} className="rounded-r-lg bg-primary px-3 py-2 text-primary-foreground hover:bg-primary/90">
            <Send className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <button onClick={() => setIsExpanded(true)} className="rounded-full bg-primary p-2 text-primary-foreground transition-all duration-300 hover:bg-primary/90">
          <Send className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Liquid Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Liquid Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTileErrorBoundary>
              <PreviewTile
                title="Liquid Button"
                description="Liquid-style flow animation"
                componentName="liquid-button"
                code=""
              >
                <LiquidButton>
                  Liquid Flow
                </LiquidButton>
              </PreviewTile>
            </PreviewTileErrorBoundary>
            <CodeBlock
              code={`const LiquidButton = ({ children, ...props }) => (
  <button
    className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-white font-medium transition-all duration-500 hover:from-blue-600 hover:to-blue-700"
    {...props}
  >
    <span className="relative z-10">{children}</span>
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
    </div>
  </button>
);`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Ripple Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Ripple Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTile
              title="Ripple Button"
              description="Click ripple animation"
              componentName="ripple-button"
              code=""
            >
              <RippleButton>
                Click for Ripple
              </RippleButton>
            </PreviewTile>
            <CodeBlock
              code={`const RippleButton = ({ children, ...props }) => {
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };
    
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <button
      onClick={createRipple}
      className="relative overflow-hidden rounded-lg border-2 border-primary bg-background px-6 py-3 text-primary transition-all duration-300 hover:bg-primary/5"
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute animate-ping rounded-full bg-primary/20"
          style={{ left: ripple.x - 10, top: ripple.y - 10, width: 20, height: 20 }}
        />
      ))}
    </button>
  );
};`}
              language="tsx"
            />
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Animate UI Components Integration</h3>
        <p className="text-muted-foreground mb-4">
          To use official Animate UI components, install them via the CLI:
        </p>
        <CodeBlock
          code={`# Install individual components
npx shadcn@canary add https://animate-ui.com/r/copy-button.json
npx shadcn@canary add https://animate-ui.com/r/flip-button.json
npx shadcn@canary add https://animate-ui.com/r/github-stars-button.json
npx shadcn@canary add https://animate-ui.com/r/icon-button.json
npx shadcn@canary add https://animate-ui.com/r/input-button.json
npx shadcn@canary add https://animate-ui.com/r/liquid-button.json
npx shadcn@canary add https://animate-ui.com/r/ripple-button.json

# Then import and use
import { CopyButton } from "@/components/ui/copy-button";
import { FlipButton } from "@/components/ui/flip-button";`}
          language="bash"
        />
      </div>
    </div>
  );
}