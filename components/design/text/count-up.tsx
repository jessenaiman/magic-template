'use client';

import { useState } from 'react';
import { PreviewTile } from "@/components/design/preview-tile";
import CountUp from "@/components/reactbits/TextAnimations/CountUp/CountUp";

interface CountUpPreviewProps {
  className?: string;
}

export function CountUpPreview({ className }: CountUpPreviewProps) {
  const [duration, setDuration] = useState(2);
  const [direction, setDirection] = useState<'up' | 'down'>('up');
  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(1000);

  const propData = [
    {
      name: 'to',
      type: 'number',
      default: '0',
      description: 'The target number to count up/down to.'
    },
    {
      name: 'from',
      type: 'number',
      default: '0',
      description: 'The starting number to begin counting from.'
    },
    {
      name: 'direction',
      type: '"up" | "down"',
      default: '"up"',
      description: 'Direction of the counting animation.'
    },
    {
      name: 'delay',
      type: 'number',
      default: '0',
      description: 'Delay before starting the animation in seconds.'
    },
    {
      name: 'duration',
      type: 'number',
      default: '2',
      description: 'Duration of the counting animation in seconds.'
    },
    {
      name: 'className',
      type: 'string',
      default: '""',
      description: 'Additional CSS classes for styling.'
    },
    {
      name: 'startWhen',
      type: 'boolean',
      default: 'true',
      description: 'Whether to start the animation automatically.'
    },
    {
      name: 'separator',
      type: 'string',
      default: '""',
      description: 'Custom separator for number formatting (e.g., "," for thousands).'
    }
  ];

  return (
    <PreviewTile
      title="Count Up/Down Animation"
      description="Smooth numerical counting animation that transitions between values with configurable timing, direction, and formatting options."
      componentName="CountUp"
      category="text"
      designSystem="reactbits"
      installCommand="npm install framer-motion @reactbits/text-animations"
      initialCustomization={{
        backgroundColor: '#1a1a1a',
        textColor: '#ffffff',
        borderRadius: 12,
        padding: 32,
        fontSize: 48
      }}
      extraActions={
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setDuration(duration === 2 ? 4 : 2)}
            className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 rounded border border-blue-500 transition-colors text-white"
          >
            Speed: {duration === 2 ? 'Fast' : 'Slow'}
          </button>
          <button
            onClick={() => setDirection(direction === 'up' ? 'down' : 'up')}
            className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 rounded border border-blue-500 transition-colors text-white"
          >
            Direction: {direction}
          </button>
          <button
            onClick={() => {
              setStartValue(0);
              setEndValue(1000);
            }}
            className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 rounded border border-blue-500 transition-colors text-white"
          >
            Reset Values
          </button>
        </div>
      }
      showAdvancedControls={true}
    >
      <div className="text-center space-y-2">
        <CountUp
          to={endValue}
          from={startValue}
          direction={direction}
          duration={duration}
          className="text-6xl font-bold text-white"
          separator=","
        />
        <p className="text-gray-400 text-sm">
          Counting {direction === 'up' ? 'up' : 'down'} from {startValue} to {endValue}
        </p>
      </div>
    </PreviewTile>
  );
}

export default CountUpPreview;