'use client';

import { useState } from 'react';
import { PreviewTile } from "@/components/design/preview-tile";
import BlurText from "@/components/reactbits/TextAnimations/BlurText/BlurText";

interface BlurTextPreviewProps {
  className?: string;
}

export function BlurTextPreview({ className }: BlurTextPreviewProps) {
  const [animateBy, setAnimateBy] = useState<'words' | 'letters'>('words');
  const [direction, setDirection] = useState<'top' | 'bottom'>('top');
  const [delay, setDelay] = useState(200);

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
        fontSize: 18
      }}
      extraActions={
        <div className="flex gap-2">
          <button
            onClick={() => setAnimateBy(animateBy === 'words' ? 'letters' : 'words')}
            className="px-3 py-1 text-xs bg-gray-800 hover:bg-gray-700 rounded border border-gray-600 transition-colors"
          >
            Animate By: {animateBy}
          </button>
          <button
            onClick={() => setDirection(direction === 'top' ? 'bottom' : 'top')}
            className="px-3 py-1 text-xs bg-gray-800 hover:bg-gray-700 rounded border border-gray-600 transition-colors"
          >
            Direction: {direction}
          </button>
        </div>
      }
    >
      <BlurText
        text="Isn't this so cool?!"
        animateBy={animateBy}
        direction={direction}
        delay={delay}
        className="text-2xl font-semibold"
      />
    </PreviewTile>
  );
}

export default BlurTextPreview;