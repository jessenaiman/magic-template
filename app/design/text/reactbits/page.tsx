import { BlurTextPreview } from "@/components/design/text/blur-text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToyBrick } from "lucide-react";

export default function ReactBitsTextPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">ReactBits Text Animations</h2>
        <p className="text-muted-foreground">
          Interactive text animations powered by ReactBits. These components use advanced animation libraries
          like Framer Motion and GSAP for smooth, performant effects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <BlurTextPreview />
        
        <Card className="flex flex-col items-center justify-center p-8 text-center">
          <CardHeader>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ToyBrick className="h-6 w-6" />
            </div>
            <CardTitle>More ReactBits Components Coming Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Additional ReactBits text components are being migrated. Check back soon for GlitchText,
              ShinyText, TextCursor, and more interactive text animations!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}