import { PreviewTile } from "@/components/design/preview-tile";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { AuroraText } from "@/components/magicui/aurora-text";
import { FlipText } from "@/components/magicui/flip-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { WordRotate } from "@/components/magicui/word-rotate";
import { TextReveal } from "@/components/magicui/text-reveal";

export default function MagicUITextPage() {
  return (
    <div className="container mx-auto max-w-7xl space-y-8 p-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Magic UI Text Components</h1>
        <p className="text-muted-foreground">
          Explore animated and interactive text components powered by Magic UI. These components add motion, engagement, and visual appeal to your typography.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PreviewTile
          title="Animated Gradient Text"
          description="Text with an animated gradient background that shifts colors."
          componentName="AnimatedGradientText"
        >
          <AnimatedGradientText>Hello World</AnimatedGradientText>
        </PreviewTile>

        <PreviewTile
          title="Aurora Text"
          description="Text with a magical aurora/galaxy effect background."
          componentName="AuroraText"
        >
          <AuroraText className="text-2xl">Aurora Magic</AuroraText>
        </PreviewTile>

        <PreviewTile
          title="Flip Text"
          description="Text that flips in character by character with a spring animation."
          componentName="FlipText"
        >
          <FlipText>Flipping Great</FlipText>
        </PreviewTile>

        <PreviewTile
          title="Sparkles Text"
          description="Text with animated sparkles that appear and disappear."
          componentName="SparklesText"
        >
          <SparklesText>Sparkly Text</SparklesText>
        </PreviewTile>

        <PreviewTile
          title="Text Animate"
          description="Text animation with various effects and timing controls."
          componentName="TextAnimate"
        >
          <TextAnimate>Animated Text</TextAnimate>
        </PreviewTile>

        <PreviewTile
          title="Word Rotate"
          description="Rotates through a series of words with smooth transitions."
          componentName="WordRotate"
        >
          <WordRotate words={["Innovate", "Create", "Design"]} />
        </PreviewTile>

        <PreviewTile
          title="Text Reveal"
          description="Text that reveals itself with animation on scroll."
          componentName="TextReveal"
        >
          <div className="h-32 overflow-y-auto rounded-md border border-dashed p-4 bg-muted/20">
            <TextReveal>
              Experience the magic as this text reveals itself with smooth animation. Scroll to see the effect in action!
            </TextReveal>
          </div>
        </PreviewTile>
      </div>
    </div>
  );
}