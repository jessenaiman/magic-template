'use client';

import { useState } from 'react';
import { PreviewTile } from "@/components/preview-tile";
import TextCursor from "@/components/reactbits/TextAnimations/TextCursor/TextCursor";

interface TextCursorPreviewProps {
  className?: string;
}

export function TextCursorPreview({ className }: TextCursorPreviewProps) {
  const [followMouseDirection, setFollowMouseDirection] = useState(true);
  const [randomFloat, setRandomFloat] = useState(true);
  const [cursorText, setCursorText] = useState('⚛️');

  const propData = [
    {
      name: 'text',
      type: 'string',
      default: '"⚛️"',
      description: 'The text or emoji to use as the cursor trail element.'
    },
    {
      name: 'delay',
      type: 'number',
      default: '0.01',
      description: 'Delay between trail element appearances in seconds.'
    },
    {
      name: 'spacing',
      type: 'number',
      default: '100',
      description: 'Minimum distance between trail elements in pixels.'
    },
    {
      name: 'followMouseDirection',
      type: 'boolean',
      default: 'true',
      description: 'Whether trail elements should rotate to follow mouse direction.'
    },
    {
      name: 'randomFloat',
      type: 'boolean',
      default: 'true',
      description: 'Whether to add random floating animation to trail elements.'
    },
    {
      name: 'exitDuration',
      type: 'number',
      default: '0.5',
      description: 'Duration of fade-out animation in seconds.'
    },
    {
      name: 'removalInterval',
      type: 'number',
      default: '30',
      description: 'Time between trail element removal checks in milliseconds.'
    },
    {
      name: 'maxPoints',
      type: 'number',
      default: '5',
      description: 'Maximum number of trail elements to display.'
    }
  ];

  const cursorOptions = ['⚛️', '✨', '🌟', '💫', '⭐', '🔥'];

  return (
    <PreviewTile
      title="Text Cursor Trail"
      description="Interactive cursor that leaves a trail of text or emoji elements that follow mouse movement with configurable physics and animation behaviors."
      componentName="TextCursor"
      category="text"
      designSystem="reactbits"
      installCommand="npm install framer-motion @reactbits/text-animations"
      canvasHeight={200}
      initialCustomization={{
        backgroundColor: '#0a0a0a',
        textColor: '#ffffff',
        borderRadius: 12,
        padding: 32,
        fontSize: 24
      }}
      extraActions={
        <div className="flex gap-2 flex-wrap">
          <select
            value={cursorText}
            onChange={(e) => setCursorText(e.target.value)}
            className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 rounded border border-blue-500 transition-colors text-white"
          >
            {cursorOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <button
            onClick={() => setFollowMouseDirection(!followMouseDirection)}
            className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 rounded border border-blue-500 transition-colors text-white"
          >
            Direction: {followMouseDirection ? 'On' : 'Off'}
          </button>
          <button
            onClick={() => setRandomFloat(!randomFloat)}
            className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 rounded border border-blue-500 transition-colors text-white"
          >
            Float: {randomFloat ? 'On' : 'Off'}
          </button>
        </div>
      }
      showAdvancedControls={true}
    >
      <div className="w-full h-48 relative border border-dashed border-gray-600 rounded-lg overflow-hidden">
        <TextCursor
          text={cursorText}
          followMouseDirection={followMouseDirection}
          randomFloat={randomFloat}
          delay={0.005}
          spacing={80}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-gray-400 text-sm">Move your cursor here to see the trail effect</p>
        </div>
      </div>
    </PreviewTile>
  );
}

export default TextCursorPreview;