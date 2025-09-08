'use client';

import * as React from 'react';
import { PlaybackControls } from './playback-controls';
import { ThemeToggle } from './theme-toggle';

interface MobileControlsProps {
  playing: boolean;
  onTogglePlay: () => void;
  onReset: () => void;
  showThemeToggle?: boolean;
  showPlaybackControls?: boolean;
}

export function MobileControls({
  playing,
  onTogglePlay,
  onReset,
  showThemeToggle = true,
  showPlaybackControls = true
}: MobileControlsProps): React.JSX.Element {
  return (
    <div className="flex items-center space-x-2 md:hidden">
      {showPlaybackControls && (
        <PlaybackControls 
          playing={playing}
          onTogglePlay={onTogglePlay}
          onReset={onReset}
          className="mr-2"
        />
      )}
      
      {showThemeToggle && (
        <ThemeToggle className="h-8 w-8 p-0" />
      )}
    </div>
  );
}
