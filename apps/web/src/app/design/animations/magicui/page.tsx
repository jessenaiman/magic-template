// MagicUI Animation Demo Page
"use client";
import { PreviewTile } from "@/components/preview/preview-tile";
import { BlurFade } from "@repo/components/magicui/blur-fade";
import { TextAnimate } from "@repo/components/magicui/text-animate";
import { NumberTicker } from "@repo/components/magicui/number-ticker";
import { AnimatedShinyText } from "@repo/components/magicui/animated-shiny-text";
import { MorphingText } from "@repo/components/magicui/morphing-text";

export default function Page() {
  return (
    <>
      <PreviewTile
        title="BlurFade"
        description="Content fades in with a blur effect"
        componentName="blurfade"
        code={`import { BlurFade } from "@/components/magicui";\n<BlurFade>BlurFade Animation</BlurFade>`}
      >
        {() => (
          <div className="flex justify-center">
            <BlurFade>
              <div className="text-lg font-semibold p-8 bg-white rounded shadow text-center">BlurFade Animation</div>
            </BlurFade>
          </div>
        )}
      </PreviewTile>
      <PreviewTile
        title="TextAnimate"
        description="Animated text entrance"
        componentName="textanimate"
        code={`import { TextAnimate } from "@/components/magicui";\n<TextAnimate>Animated Text</TextAnimate>`}
      >
        {() => (
          <TextAnimate>
            Animated Text
          </TextAnimate>
        )}
      </PreviewTile>
      <PreviewTile
        title="NumberTicker"
        description="Animated number counting up"
        componentName="numberticker"
        code={`import { NumberTicker } from "@/components/magicui";\n<NumberTicker value={2025} />`}
      >
        {() => (
          <NumberTicker value={2025} />
        )}
      </PreviewTile>
      <PreviewTile
        title="AnimatedShinyText"
        description="Text with animated shiny effect"
        componentName="animatedshinytext"
        code={`import { AnimatedShinyText } from "@/components/magicui";\n<AnimatedShinyText>Shiny Text</AnimatedShinyText>`}
      >
        {() => (
          <AnimatedShinyText>
            <span className="text-lg font-semibold">Shiny Text</span>
          </AnimatedShinyText>
        )}
      </PreviewTile>
      <PreviewTile
        title="MorphingText"
        description="Text morphs between words"
        componentName="morphingtext"
        code={`import { MorphingText } from "@/components/magicui";\n<MorphingText words={['Hello', 'World', 'MagicUI']} />`}
      >
        {() => (
          <MorphingText texts={['Hello', 'World', 'MagicUI']} />
        )}
      </PreviewTile>
    </>
  );
}