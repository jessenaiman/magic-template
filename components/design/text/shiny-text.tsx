'use client';

import { useState } from 'react';
import { PreviewTile } from "@/components/design/preview-tile";
import ShinyText from "@/components/reactbits/TextAnimations/ShinyText/ShinyText";

interface ShinyTextPreviewProps {
  className?: string;
}

export function ShinyTextPreview({ className }: ShinyTextPreviewProps) {
  const [speed, setSpeed] = useState(5);
  const [disabled, setDisabled] = useState(false);

  const propData = [
    {
      name: 'text',
      type: 'string',
      default: '""',
      description: 'The text content to display with shiny effect.'
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Whether to disable the shine animation.'
    },
    {
      name: 'speed',
      type: 'number',
      default: '5',
      description: 'Speed of the shine animation in seconds (lower = faster).'
    },
    {
      name: 'className',
      type: 'string',
      default: '""',
      description: 'Additional CSS classes for styling.'
    }
  ];

  return (
    <PreviewTile
      title="Shiny Text Animation"
      description="Text with a shimmering shine effect that moves across the characters, creating a metallic or glossy appearance."
      componentName="ShinyText"
      category="text"
      installCommand="npm install @reactbits/text-animations"
      initialCustomization={{
        backgroundColor: '#1a1a1a',
        textColor: '#b5b5b5',
        borderRadius: 8,
        padding: 24,
        fontSize: 32
      }}
      extraActions={
        <div className="flex gap-2">
          <button
            onClick={() => setSpeed(speed === 5 ? 2 : 5)}
            className="px-3 py-1 text-xs bg-gray-800 hover:bg-gray-700 rounded border border-gray-600 transition-colors"
          >
            Speed: {speed === 5 ? 'Normal' : 'Fast'}
          </button>
          <button
            onClick={() => setDisabled(!disabled)}
            className="px-3 py-1 text-xs bg-gray-800 hover:bg-gray-700 rounded border border-gray-600 transition-colors"
          >
            Animation: {disabled ? 'Off' : 'On'}
          </button>
        </div>
      }
    >
      <ShinyText
        text="Shiny Effect"
        disabled={disabled}
        speed={speed}
        className="text-4xl font-bold"
      />
    </PreviewTile>
  );
}

export default ShinyTextPreview;