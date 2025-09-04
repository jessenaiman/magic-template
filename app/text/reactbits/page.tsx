import { BlurTextPreview } from "@/components/text/blur-text";
import { GlitchTextPreview } from "@/components/text/glitch-text";
import { GradientTextPreview } from "@/components/text/gradient-text";
import { RotatingTextPreview } from "@/components/text/rotating-text";
import { ShinyTextPreview } from "@/components/text/shiny-text";
import { TextCursorPreview } from "@/components/text/text-cursor";
import { CountUpPreview } from "@/components/text/count-up";

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
        <GlitchTextPreview />
        <GradientTextPreview />
        <RotatingTextPreview />
        <ShinyTextPreview />
        <TextCursorPreview />
        <CountUpPreview />
      </div>
    </div>
  );
}