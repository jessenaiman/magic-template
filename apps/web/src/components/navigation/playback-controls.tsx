/**
 * Playback Controls Component
 * Handles animation playback state management
 */

'use client';

import * as React from 'react';
import { Button } from '@repo/components/ui/button';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface PlaybackControlsProps {
  playing: boolean;
  onTogglePlay: () => void;
  onReset: () => void;
  className?: string;
}

export function PlaybackControls({
  playing,
  onTogglePlay,
  onReset,
  className
}: PlaybackControlsProps) {
  return (
    <div className={`flex items-center space-x-1 border rounded-md p-1 ${className || ''}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={onTogglePlay}
        className="h-8 w-8 p-0"
        aria-label={playing ? "Pause animations" : "Play animations"}
      >
        {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={onReset}
        className="h-8 w-8 p-0"
        aria-label="Reset animations"
      >
        <RotateCcw className="h-4 w-4" />
      </Button>
    </div>
  );
}
