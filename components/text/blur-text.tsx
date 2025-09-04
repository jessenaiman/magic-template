'use client';

import { useState } from 'react';
import { PreviewTile } from "@/components/preview-tile";
import BlurText from "@/components/reactbits/TextAnimations/BlurText/BlurText";
import { mergeWithBaseOptions } from "@/components/preview-controls/base-category-options";
import { PreviewProvider usePreviewContext } from "@/components/preview-controls/preview-context";

interface BlurTextPreviewProps {
  className?: string;
}

export function BlurTextPreview({ className }: BlurTextPreviewProps) {
  const { state } = usePreviewContext();
  const customization = state.customization;
  const customFields = mergeWithBaseOptions('text', [
    {
      id: 'animateBy',
      label: 'Animate By',
      type: 'custom',
      render: ({ settings, update }) => (
        <div className="flex gap-2">
          <button
            onClick={() => update({ animateBy: 'words' })}
            className={`px-3 py-1 text-xs rounded border transition-colors ${
              settings.animateBy === 'words' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary hover:bg-secondary/80'
            }`}
          >
            Words
          </button>
          <button
            onClick={() => update({ animateBy: 'letters' })}
            className={`px-3 py-1 text-xs rounded border transition-colors ${
              settings.animateBy === 'letters' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary hover:bg-secondary/80'
            }`}
          >
            Letters
          </button>
        </div>
      )
    },
    {
      id: 'direction',
      label: 'Direction',
      type: 'custom',
      render: ({ settings, update }) => (
        <div className="flex gap-2">
          <button
            onClick={() => update({ direction: 'top' })}
            className={`px-3 py-1 text-xs rounded border transition-colors ${
              settings.direction === 'top' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary hover:bg-secondary/80'
            }`}
          >
            Top
          </button>
          <button
            onClick={() => update({ direction: 'bottom' })}
            className={`px-3 py-1 text-xs rounded border transition-colors ${
              settings.direction === 'bottom' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary hover:bg-secondary/80'
            }`}
          >
            Bottom
          </button>
        </div>
      )
    },
    {
      id: 'delay',
      label: 'Animation Delay',
      type: 'slider',
      min: 50,
      max: 500,
      step: 50,
      unit: 'ms'
    }
  ]);

  const propData = [
    {
      name: 'text',
      type: 'string',
      default: '""',
      description: 'The text content to animate.'
    },
    {
      name: 'animateBy',
      type: '"words" | "letters"',
      default: '"words"',
      description: "Determines whether to animate by 'words' or 'letters'."
    },
    {
      name: 'direction',
      type: '"top" | "bottom"',
      default: '"top"',
      description: "Direction from which the words/letters appear ('top' or 'bottom')."
    },
    {
      name: 'delay',
      type: 'number',
      default: '200',
      description: 'Delay between animations for each word/letter (in ms).'
    },
    {
      name: 'stepDuration',
      type: 'number',
      default: '0.35',
      description: 'The time taken for each letter/word to animate (in seconds).'
    },
    {
      name: 'threshold',
      type: 'number',
      default: '0.1',
      description: 'Intersection threshold for triggering the animation.'
    },
    {
      name: 'rootMargin',
      type: 'string',
      default: '"0px"',
      description: 'Root margin for the intersection observer.'
    },
    {
      name: 'onAnimationComplete',
      type: 'function',
      default: 'undefined',
      description: 'Callback function triggered when all animations complete.'
    }
  ];


  return (
    <PreviewTile
      title="Blur Text Animation"
      description="Text that animates in with a blur effect, revealing words or letters sequentially with customizable timing and direction."
      componentName="BlurText"
      category="text"
      installCommand="npm install framer-motion"
      initialCustomization={{
        backgroundColor: '#170D27',
        textColor: '#ffffff',
        borderRadius: 12,
        padding: 24,
        fontSize: 18,
        displayText: "Isn't this so cool?!",
        animateBy: 'words',
        direction: 'top',
        delay: 200
      }}
      customFields={customFields}
      showAdvancedControls={true}
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

export default BlurTextPreview;