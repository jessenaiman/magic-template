"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PreviewTile } from "@/components/preview-tile";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { CheckIcon, ChevronRightIcon, ArrowRight } from "lucide-react";

function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="relative">
      <pre className="max-h-48 overflow-auto rounded-md border bg-gray-900 p-3 text-sm text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Shimmer Button Implementation
const ShimmerButton = ({ children, className = "", ...props }: any) => (
  <button
    className={`group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-neutral-950 px-6 py-3 font-medium text-neutral-200 transition-all duration-300 hover:bg-neutral-800 ${className}`}
    {...props}
  >
    <span className="relative z-10">{children}</span>
    <div
      className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"
    />
  </button>
);

// Shiny Button Implementation  
const ShinyButton = ({ children, className = "", ...props }: any) => (
  <button
    className={`group relative cursor-pointer rounded-lg px-6 py-2 font-medium backdrop-blur-xl border transition-shadow duration-300 ease-in-out hover:shadow ${className}`}
    {...props}
  >
    <span className="relative block size-full text-sm uppercase tracking-wide">
      {children}
    </span>
  </button>
);

// Interactive Hover Button Implementation
const InteractiveHoverButton = ({ children, className = "", ...props }: any) => (
  <button
    className={`group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold ${className}`}
    {...props}
  >
    <div className="flex items-center gap-2">
      <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]"></div>
      <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {children}
      </span>
    </div>
    <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
      <span>{children}</span>
      <ArrowRight />
    </div>
  </button>
);

// Pulsating Button Implementation
const PulsatingButton = ({ children, className = "", ...props }: any) => (
  <button
    className={`relative flex cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-2 text-center text-primary-foreground ${className}`}
    {...props}
  >
    <div className="relative z-10">{children}</div>
    <div className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-lg bg-inherit" />
  </button>
);

export default function EnhancedMagicButtonsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Magic UI Buttons</h1>
        <p className="text-muted-foreground">
          Advanced animated button components with magical effects for enhanced user experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Rainbow Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Rainbow Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTile
              title="Rainbow Button"
              description="Animated rainbow gradient border"
              componentName="rainbowbutton"
            >
              <RainbowButton>
                Get Unlimited Access
              </RainbowButton>
            </PreviewTile>
            <CodeBlock
              code={`const RainbowButton = ({ children, ...props }) => (
  <button
    className="group relative inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] font-medium text-white transition-all hover:bg-gradient-to-l"
    {...props}
  >
    <span className="relative rounded-md bg-black px-6 py-2 transition-all group-hover:bg-transparent">
      {children}
    </span>
  </button>
);`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Shimmer Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Shimmer Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTile
              title="Shimmer Button"
              description="Animated shimmer effect"
              componentName="shimmer-button"
            >
              <style jsx>{`
                @keyframes shimmer {
                  100% {
                    transform: translateX(100%);
                  }
                }
              `}</style>
              <ShimmerButton>
                Shimmer Effect
              </ShimmerButton>
            </PreviewTile>
            <CodeBlock
              code={`/* CSS */
@keyframes shimmer {
  100% { transform: translateX(100%); }
}

/* Component */
const ShimmerButton = ({ children, ...props }) => (
  <button
    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-neutral-950 px-6 py-3 font-medium text-neutral-200 transition-all duration-300 hover:bg-neutral-800"
    {...props}
  >
    <span className="relative z-10">{children}</span>
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
  </button>
);`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Interactive Hover Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Interactive Hover</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTile
              title="Interactive Button"
              description="Smooth hover interactions"
              componentName="interactive-hover-button"
            >
              <InteractiveHoverButton>
                Hover Me
              </InteractiveHoverButton>
            </PreviewTile>
            <CodeBlock
              code={`const InteractiveHoverButton = ({ children, ...props }) => (
  <button
    className="group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold"
    {...props}
  >
    <div className="flex items-center gap-2">
      <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]"></div>
      <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {children}
      </span>
    </div>
    <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
      <span>{children}</span>
      <ArrowRight />
    </div>
  </button>
);`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Pulsating Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pulsating Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTile
              title="Pulsating Button"
              description="Gentle pulsing effect"
              componentName="pulsating-button"
            >
              <PulsatingButton>
                Join Program
              </PulsatingButton>
            </PreviewTile>
            <CodeBlock
              code={`const PulsatingButton = ({ children, ...props }) => (
  <button
    className="relative flex cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-2 text-center text-primary-foreground"
    {...props}
  >
    <div className="relative z-10">{children}</div>
    <div className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-lg bg-inherit" />
  </button>
);`}
              language="tsx"
            />
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Magic UI Components Integration</h3>
        <p className="text-muted-foreground mb-4">
          To use the official Magic UI components in your project, install them via CLI:
        </p>
        <CodeBlock
          code={`# Install Magic UI components
pnpm dlx shadcn@latest add "https://magicui.design/r/rainbow-button.json"
pnpm dlx shadcn@latest add "https://magicui.design/r/shimmer-button.json"
pnpm dlx shadcn@latest add "https://magicui.design/r/interactive-hover-button.json"
pnpm dlx shadcn@latest add "https://magicui.design/r/pulsating-button.json"

# Then import and use
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ShimmerButton } from "@/components/ui/shimmer-button";`}
          language="bash"
        />
      </div>
    </div>
  );
}