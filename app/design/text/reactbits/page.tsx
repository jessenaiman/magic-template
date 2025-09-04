'use client';

import { PreviewSurface } from '@/components/preview-controls/preview-surface';
import { PreviewTile } from '@/components/preview-tile';
import { usePreviewContext } from '@/components/design/preview-context';
import { mergeWithBaseOptions } from "@/components/preview-controls/base-category-options";

// Import the actual components being demonstrated
import BlurText from "@/components/reactbits/TextAnimations/BlurText/BlurText";
import GlitchText from "@/components/reactbits/TextAnimations/GlitchText/GlitchText";
import GradientText from "@/components/reactbits/TextAnimations/GradientText/GradientText";
import RotatingText from "@/components/reactbits/TextAnimations/RotatingText/RotatingText";
import ShinyText from "@/components/reactbits/TextAnimations/ShinyText/ShinyText";
import TextCursor from "@/components/reactbits/TextAnimations/TextCursor/TextCursor";
import CountUp from "@/components/reactbits/TextAnimations/CountUp/CountUp";

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

      <PreviewSurface>
        <BlurTextPreview />
        <GlitchTextPreview />
        <GradientTextPreview />
        <RotatingTextPreview />
        <ShinyTextPreview />
        <TextCursorPreview />
        <CountUpPreview />
      </PreviewSurface>
    </div>
  );
}

// --- All Preview Components are now defined locally in this file ---

function BlurTextPreview() {
  const { state } = usePreviewContext();
  const customization = state.customization;

  const customFields = mergeWithBaseOptions('text', [
    {
      id: 'animateBy',
      label: 'Animate By',
      type: 'custom',
      render: ({ settings, update }) => (
        <div className="flex gap-2">
          <button onClick={() => update({ animateBy: 'words' })} className={`px-3 py-1 text-xs rounded border transition-colors ${settings.animateBy === 'words' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}>Words</button>
          <button onClick={() => update({ animateBy: 'letters' })} className={`px-3 py-1 text-xs rounded border transition-colors ${settings.animateBy === 'letters' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}>Letters</button>
        </div>
      )
    },
    {
      id: 'direction',
      label: 'Direction',
      type: 'custom',
      render: ({ settings, update }) => (
        <div className="flex gap-2">
          <button onClick={() => update({ direction: 'top' })} className={`px-3 py-1 text-xs rounded border transition-colors ${settings.direction === 'top' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}>Top</button>
          <button onClick={() => update({ direction: 'bottom' })} className={`px-3 py-1 text-xs rounded border transition-colors ${settings.direction === 'bottom' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}>Bottom</button>
        </div>
      )
    },
    { id: 'delay', label: 'Animation Delay', type: 'slider', min: 50, max: 500, step: 50, unit: 'ms' }
  ]);

  return (
    <PreviewTile
      title="Blur Text Animation"
      description="Text that animates in with a blur effect, revealing words or letters sequentially."
      componentName="BlurText"
      category="text"
      installCommand="npm install framer-motion"
      initialCustomization={{
        backgroundColor: '#170D27',
        textColor: '#ffffff',
        displayText: "Isn't this so cool?!",
        animateBy: 'words',
        direction: 'top',
        delay: 200
      }}
      customFields={customFields}
    >
      <BlurText
        text={customization.displayText || "Isn't this so cool?!"}
        animateBy={customization.animateBy || 'words'}
        direction={customization.direction || 'top'}
        delay={customization.delay || 200}
        className="text-2xl font-semibold"
      />
    </PreviewTile>
  );
}

function GlitchTextPreview() {
    const { state } = usePreviewContext();
    return (
        <PreviewTile
            title="Glitch Effect Text"
            description="A text component that applies a 'glitch' effect, perfect for futuristic or tech-themed UIs."
            componentName="GlitchText"
            category="text"
            installCommand="npm install framer-motion"
            initialCustomization={{
                backgroundColor: '#000000',
                textColor: '#00ff00',
                displayText: "Cyberpunk 2077",
            }}
        >
            <GlitchText
                // GlitchText expects its content as children
            >
                {state.customization.displayText || "Cyberpunk 2077"}
            </GlitchText>
        </PreviewTile>
    );
}

function GradientTextPreview() {
    const { state } = usePreviewContext();
    return (
        <PreviewTile
            title="Gradient Text"
            description="Easily create text with a gradient fill for a visually striking effect."
            componentName="GradientText"
            category="text"
            initialCustomization={{
                backgroundColor: '#111827',
                displayText: "Stunning Gradients",
            }}
        >
            <GradientText
                // GradientText uses children as the content
                className="text-4xl font-extrabold"
                // Keep gradient via colors prop if desired; passing via style-like prop isn't part of its API
                colors={["#ec4899", "#8b5cf6"]}
            >
                {state.customization.displayText || "Stunning Gradients"}
            </GradientText>
        </PreviewTile>
    );
}

function RotatingTextPreview() {
    const { state } = usePreviewContext();
    return (
        <PreviewTile
            title="Rotating Text"
            description="Animate through a series of words with a fun rotating effect."
            componentName="RotatingText"
            category="text"
            installCommand="npm install framer-motion"
            initialCustomization={{
                backgroundColor: '#ffffff',
                textColor: '#1f2937',
                displayText: "Magic UI is;Awesome;Beautiful;Powerful",
            }}
        >
            <RotatingText
                // RotatingText expects `texts` as an array
                texts={(state.customization.displayText || "Magic UI is;Awesome;Beautiful;Powerful").split(';')}
                mainClassName="text-2xl font-semibold"
            />
        </PreviewTile>
    );
}

function ShinyTextPreview() {
    const { state } = usePreviewContext();
    return (
        <PreviewTile
            title="Shiny Text"
            description="A component that adds a shiny, reflective effect to text as if light is passing over it."
            componentName="ShinyText"
            category="text"
            initialCustomization={{
                backgroundColor: '#0a0a0a',
                displayText: "Get Started",
            }}
        >
            <ShinyText
                // ShinyText expects `text` prop
                text={state.customization.displayText || "Get Started"}
                className="text-3xl font-bold"
            />
        </PreviewTile>
    );
}

function TextCursorPreview() {
    const { state } = usePreviewContext();
    return (
        <PreviewTile
            title="Text with Cursor"
            description="Simulates a typing effect with a blinking cursor for dynamic text presentation."
            componentName="TextCursor"
            category="text"
            initialCustomization={{
                backgroundColor: '#1e293b',
                textColor: '#f8fafc',
                displayText: "This is a typing effect.",
            }}
        >
                        <div className="text-2xl">
                            <TextCursor
                                text={state.customization.displayText || "This is a typing effect."}
                            />
                        </div>
        </PreviewTile>
    );
}

function CountUpPreview() {
    const { state } = usePreviewContext();
    const customFields = mergeWithBaseOptions('text', [
        {
            id: 'endValue',
            label: 'End Value',
            type: 'text',
        }
    ]);

    return (
        <PreviewTile
            title="Count Up Animation"
            description="Animates a number from zero to a target value with a smooth counting effect."
            componentName="CountUp"
            category="text"
            installCommand="npm install framer-motion"
            initialCustomization={{
                backgroundColor: '#f1f5f9',
                textColor: '#1e293b',
                endValue: 12345,
            }}
            customFields={customFields}
        >
            <div className="text-4xl font-bold">
                <CountUp
                    to={Number(state.customization.endValue) || 12345}
                    duration={2}
                />
            </div>
        </PreviewTile>
    );
}