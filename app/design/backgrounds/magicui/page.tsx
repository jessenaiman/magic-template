import { PreviewTile } from "@/components/design/preview-tile";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { WarpBackground } from "@/components/magicui/warp-background";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="relative">
      <pre className="max-h-48 overflow-auto rounded-md border bg-gray-900 p-3 text-sm text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function MagicUIBackgroundsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Magic UI Backgrounds</h1>
        <p className="text-muted-foreground">
          Advanced animated background components from Magic UI for enhanced visual experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Animated Grid Pattern */}
        <PreviewTile
          title="Animated Grid"
          description="Dynamic animated grid pattern with customizable properties."
          componentName="AnimatedGridPattern"
        >
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background">
            <p className="z-10 whitespace-pre-wrap text-center text-2xl font-medium tracking-tighter text-foreground">
              Grid Animation
            </p>
            <AnimatedGridPattern
              numSquares={15}
              maxOpacity={0.3}
              duration={2}
              repeatDelay={0.5}
              className={cn(
                "[mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
              )}
            />
          </div>
        </PreviewTile>

        {/* Dot Pattern */}
        <PreviewTile
          title="Dot Pattern"
          description="Clean, minimalist dot pattern background."
          componentName="DotPattern"
        >
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background">
            <p className="z-10 whitespace-pre-wrap text-center text-2xl font-medium tracking-tighter text-foreground">
              Dot Matrix
            </p>
            <DotPattern
              width={20}
              height={20}
              cx={1}
              cy={1}
              cr={1}
              className={cn(
                "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
              )}
            />
          </div>
        </PreviewTile>

        {/* Retro Grid */}
        <PreviewTile
          title="Retro Grid"
          description="Nostalgic 80s-style animated grid background."
          componentName="RetroGrid"
        >
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background">
            <p className="z-10 whitespace-pre-wrap text-center text-2xl font-medium tracking-tighter text-foreground">
              Retro Vibes
            </p>
            <RetroGrid />
          </div>
        </PreviewTile>

        {/* Warp Background */}
        <PreviewTile
          title="Warp Background"
          description="3D perspective warp effect background."
          componentName="WarpBackground"
        >
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background">
            <p className="z-10 whitespace-pre-wrap text-center text-2xl font-medium tracking-tighter text-foreground">
              Warp Speed
            </p>
            <WarpBackground>
              <div />
            </WarpBackground>
          </div>
        </PreviewTile>

        {/* Custom Pattern Combination */}
        <PreviewTile
          title="Combined Effects"
          description="Multiple Magic UI patterns layered together."
          componentName="CombinedEffects"
        >
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background">
            <p className="z-20 whitespace-pre-wrap text-center text-2xl font-medium tracking-tighter text-foreground">
              Layered Magic
            </p>
            <DotPattern
              width={15}
              height={15}
              cx={1}
              cy={1}
              cr={1}
              className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                "opacity-30"
              )}
            />
            <AnimatedGridPattern
              numSquares={10}
              maxOpacity={0.1}
              duration={4}
              repeatDelay={1}
              className={cn(
                "[mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]",
                "inset-x-0 inset-y-[-20%] h-[200%]",
                "absolute"
              )}
            />
          </div>
        </PreviewTile>

        {/* Minimal Grid */}
        <PreviewTile
          title="Subtle Grid"
          description="Minimalist grid with reduced opacity."
          componentName="SubtleGrid"
        >
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background">
            <p className="z-10 whitespace-pre-wrap text-center text-2xl font-medium tracking-tighter text-foreground">
              Subtle Touch
            </p>
            <AnimatedGridPattern
              numSquares={20}
              maxOpacity={0.1}
              duration={6}
              repeatDelay={2}
              className={cn(
                "[mask-image:radial-gradient(ellipse_at_center,white,transparent_90%)]",
                "inset-x-0 inset-y-[-10%] h-[120%]",
              )}
            />
          </div>
        </PreviewTile>
      </div>

      {/* Implementation Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Magic UI Implementation</h2>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Animated Grid Pattern</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`import { AnimatedGridPattern } from "@workspace/ui/components/magicui/animated-grid-pattern";
import { cn } from "@workspace/ui/lib/utils";

<div className="relative">
  <AnimatedGridPattern
    numSquares={30}
    maxOpacity={0.5}
    duration={3}
    repeatDelay={1}
    className={cn(
      "[mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]",
      "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
    )}
  />
</div>`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dot Pattern Background</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`import { DotPattern } from "@workspace/ui/components/magicui/dot-pattern";
import { cn } from "@workspace/ui/lib/utils";

<div className="relative">
  <DotPattern
    width={20}
    height={20}
    cx={1}
    cy={1}
    cr={1}
    className={cn(
      "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]"
    )}
  />
</div>`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Retro Grid Effect</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`import { RetroGrid } from "@workspace/ui/components/magicui/retro-grid";

<div className="relative flex items-center justify-center">
  <div className="z-10">Your content here</div>
  <RetroGrid />
</div>`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Layered Backgrounds</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`// Combine multiple Magic UI backgrounds
<div className="relative">
  <DotPattern className="opacity-30" />
  <AnimatedGridPattern 
    className="absolute opacity-20"
    numSquares={10}
    maxOpacity={0.1}
  />
  <div className="relative z-10">Content</div>
</div>`}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}