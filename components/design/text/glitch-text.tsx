'use client';

import { useState } from 'react';
import { PreviewTile } from "@/components/design/preview-tile";
import GlitchText from "@/components/reactbits/TextAnimations/GlitchText/GlitchText";

interface GlitchTextPreviewProps {
  className?: string;
}

export function GlitchTextPreview({ className }: GlitchTextPreviewProps) {
  const [speed, setSpeed] = useState(0.5);
  const [enableShadows, setEnableShadows] = useState(true);
  const [enableOnHover, setEnableOnHover] = useState(false);

  const propData = [
    {
      name: 'children',
      type: 'string',
      default: '""',
      description: 'The text content to display with glitch effect.'
    },
    {
      name: 'speed',
      type: 'number',
      default: '0.5',
      description: 'Speed of the glitch animation (lower = faster).'
    },
    {
      name: 'enableShadows',
      type: 'boolean',
      default: 'true',
      description: 'Whether to enable colored shadow effects.'
    },
    {
      name: 'enableOnHover',
      type: 'boolean',
      default: 'false',
      description: 'Whether to trigger glitch effect only on hover.'
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
      title="Glitch Text Animation"
      description="Text with a digital glitch effect that creates distorted, shifting layers with optional hover activation."
      componentName="GlitchText"
      category="text"
      installCommand="npm install @reactbits/text-animations"
      initialCustomization={{
        backgroundColor: '#060010',
        textColor: '#ffffff',
        borderRadius: 8,
        padding: 32,
        fontSize: 48
      }}
      extraActions={
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setSpeed(speed === 0.5 ? 1 : 0.5)}
            className="px-3 py-1 text-xs bg-gray-800 hover:bg-gray-700 rounded border border-gray-600 transition-colors"
          >
            Speed: {speed === 0.5 ? 'Fast' : 'Slow'}
          </button>
          <button
            onClick={() => setEnableShadows(!enableShadows)}
            className="px-3 py-1 text-xs bg-gray-800 hover:bg-gray-700 rounded border border-gray-600 transition-colors"
          >
            Shadows: {enableShadows ? 'On' : 'Off'}
          </button>
          <button
            onClick={() => setEnableOnHover(!enableOnHover)}
            className="px-3 py-1 text-xs bg-gray-800 hover:bg-gray-700 rounded border border-gray-600 transition-colors"
          >
            Hover: {enableOnHover ? 'On' : 'Off'}
          </button>
        </div>
      }
    >
      <GlitchText
        speed={speed}
        enableShadows={enableShadows}
        enableOnHover={enableOnHover}
        className="text-4xl font-black"
      >
        GLITCH EFFECT
      </GlitchText>
    </PreviewTile>
  );
}

export default GlitchTextPreview;