
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rows4 } from "lucide-react";
import { PreviewTile } from "@/components/preview-tile";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function PageTransitionsPage() {
  return (
    <div className="container mx-auto max-w-7xl space-y-8 p-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Page Transitions Overview</h1>
        <p className="text-muted-foreground">
          The Page Transitions section demonstrates smooth entrance, exit, and content transitions for modern web apps. Use these components to create seamless navigation and engaging user experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PreviewTile
          title="Blur Fade"
          description="A transition that blurs and fades content in."
          componentName="BlurFade"
        >
          <BlurFade delay={0.25} inView>
            <h2 className="text-2xl font-bold tracking-tighter">Revealed with a blur.</h2>
          </BlurFade>
        </PreviewTile>
      </div>
    </div>
  );
}
