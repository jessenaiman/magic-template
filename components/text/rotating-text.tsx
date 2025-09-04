'use client';

import { useState } from 'react';
import { PreviewTile } from "@/components/preview-tile";
import RotatingText from "@/components/reactbits/TextAnimations/RotatingText/RotatingText";

interface RotatingTextPreviewProps {
  className?: string;
}

export function RotatingTextPreview({ className }: RotatingTextPreviewProps) {
  const [rotationInterval, setRotationInterval] = useState(2000);
  const [splitBy, setSplitBy] = useState<'characters' | 'words'>('words');
  const [autoRotate, setAutoRotate] = useState(true);

  const texts = [
    "Amazing Text Effects",
    "Smooth Animations",
    "Interactive Components",
    "Modern Web Design",
    "Creative Typography"
  ];

  const propData = [
    {
      name: 'texts',
      type: 'string[]',
      default: '[]',
      description: 'Array of text strings to rotate through.'
    },
    {
      name: 'rotationInterval',
      type: 'number',
      default: '2000',
      description: 'Time in milliseconds between rotations when auto is enabled.'
    },
    {
      name: 'splitBy',
      type: '"characters" | "words" | "lines" | string',
      default: '"characters"',
      description: 'How to split the text for animation effects.'
    },
    {
      name: 'auto',
      type: 'boolean',
      default: 'true',
      description: 'Whether to automatically rotate through texts.'
    },
    {
      name: 'staggerDuration',
      type: 'number',
      default: '0',
      description: 'Duration between animating individual characters/words.'
    },
    {
      name: 'transition',
      type: 'object',
      default: '{ type: "spring", damping: 25, stiffness: 300 }',
      description: 'Framer Motion transition configuration.'
    }
  ];

  return (
    <PreviewTile
      title="Rotating Text Animation"
      description="Text that smoothly rotates through multiple phrases with configurable animation timing, splitting behavior, and automatic rotation."
      componentName="RotatingText"
      category="text"
      designSystem="reactbits"
      installCommand="npm install framer-motion @reactbits/text-animations"
      initialCustomization={{
        backgroundColor: '#1a1a1a',
        textColor: '#ffffff',
        borderRadius: 12,
        padding: 32,
        fontSize: 28
      }}
      extraActions={
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setRotationInterval(rotationInterval === 2000 ? 1000 : 2000)}
            className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 rounded border border-blue-500 transition-colors text-white"
          >
            Speed: {rotationInterval === 2000 ? 'Normal' : 'Fast'}
          </button>
          <button
            onClick={() => setSplitBy(splitBy === 'words' ? 'characters' : 'words')}
            className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 rounded border border-blue-500 transition-colors text-white"
          >
            Split: {splitBy}
          </button>
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 rounded border border-blue-500 transition-colors text-white"
          >
            Auto: {autoRotate ? 'On' : 'Off'}
          </button>
        </div>
      }
      showAdvancedControls={true}
    >
      <RotatingText
        texts={texts}
        rotationInterval={rotationInterval}
        splitBy={splitBy}
        auto={autoRotate}
        staggerDuration={0.05}
        className="text-3xl font-bold text-center"
        mainClassName="justify-center text-center"
      />
    </PreviewTile>
  );
}

export default RotatingTextPreview;