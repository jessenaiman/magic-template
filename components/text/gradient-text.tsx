'use client';

import { useState } from 'react';
import { PreviewTile } from "@/components/preview-tile";
import GradientText from "@/components/reactbits/TextAnimations/GradientText/GradientText";

interface GradientTextPreviewProps {
  className?: string;
}

export function GradientTextPreview({ className }: GradientTextPreviewProps) {
  const [animationSpeed, setAnimationSpeed] = useState(8);
  const [showBorder, setShowBorder] = useState(false);
  const [colorPreset, setColorPreset] = useState<'rainbow' | 'sunset' | 'ocean'>('rainbow');

  const colorPresets = {
    rainbow: ['#ffaa40', '#9c40ff', '#ff6b6b', '#4ecdc4', '#ffaa40'],
    sunset: ['#ff6b6b', '#ffaa40', '#feca57', '#ff6b6b'],
    ocean: ['#4ecdc4', '#45b7d1', '#96ceb4', '#4ecdc4']
  };

  const propData = [
    {
      name: 'children',
      type: 'ReactNode',
      default: '""',
      description: 'The text content to display with gradient effect.'
    },
    {
      name: 'className',
      type: 'string',
      default: '""',
      description: 'Additional CSS classes for styling.'
    },
    {
      name: 'colors',
      type: 'string[]',
      default: '["#ffaa40", "#9c40ff", "#ffaa40"]',
      description: 'Array of colors for the gradient animation.'
    },
    {
      name: 'animationSpeed',
      type: 'number',
      default: '8',
      description: 'Speed of the gradient animation in seconds.'
    },
    {
      name: 'showBorder',
      type: 'boolean',
      default: 'false',
      description: 'Whether to show an animated border around the text.'
    }
  ];

  return (
    <PreviewTile
      title="Animated Gradient Text"
      description="Text with a smoothly animated gradient background that cycles through colors with customizable speed and border effects."
      componentName="GradientText"
      category="text"
      designSystem="reactbits"
      installCommand="npm install @reactbits/text-animations"
      initialCustomization={{
        backgroundColor: '#0a0a0a',
        textColor: '#ffffff',
        borderRadius: 20,
        padding: 24,
        fontSize: 24
      }}
      extraActions={
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setAnimationSpeed(animationSpeed === 8 ? 4 : 8)}
            className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 rounded border border-blue-500 transition-colors text-white"
          >
            Speed: {animationSpeed === 8 ? 'Normal' : 'Fast'}
          </button>
          <button
            onClick={() => setShowBorder(!showBorder)}
            className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 rounded border border-blue-500 transition-colors text-white"
          >
            Border: {showBorder ? 'On' : 'Off'}
          </button>
          <select
            value={colorPreset}
            onChange={(e) => setColorPreset(e.target.value as 'rainbow' | 'sunset' | 'ocean')}
            className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 rounded border border-blue-500 transition-colors text-white"
          >
            <option value="rainbow">Rainbow</option>
            <option value="sunset">Sunset</option>
            <option value="ocean">Ocean</option>
          </select>
        </div>
      }
      showAdvancedControls={true}
    >
      <GradientText
        colors={colorPresets[colorPreset]}
        animationSpeed={animationSpeed}
        showBorder={showBorder}
        className="text-2xl font-semibold"
      >
        Gradient Magic
      </GradientText>
    </PreviewTile>
  );
}

export default GradientTextPreview;