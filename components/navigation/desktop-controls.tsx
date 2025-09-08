/**
 * Desktop Controls Component
 * Combines desktop navigation with theme and playback controls
 */

'use client';

import * as React from 'react';
import { DesktopNavigation } from './desktop-navigation';
import { ThemeToggle } from './theme-toggle';
import { PlaybackControls } from './playback-controls';

interface DesktopControlsProps {
  showThemeToggle?: boolean;
  showPlaybackControls?: boolean;
  playing: boolean;
  onTogglePlay: () => void;
  onReset: () => void;
  onNavigate: (href: string) => void;
  persistentState?: boolean;
}

export function DesktopControls({
  showThemeToggle = true,
  showPlaybackControls = true,
  playing,
  onTogglePlay,
  onReset,
  onNavigate,
  persistentState = true
}: DesktopControlsProps) {
  return (
    <div className="hidden md:flex items-center space-x-6 w-full md:w-auto">
      <DesktopNavigation onNavigate={onNavigate} />

      <div className="flex items-center space-x-2 ml-4">
        {showThemeToggle && (
          <ThemeToggle persistentState={persistentState} className="h-8 w-8 p-0" />
        )}

        {showPlaybackControls && (
          <PlaybackControls
            playing={playing}
            onTogglePlay={onTogglePlay}
            onReset={onReset}
          />
        )}
      </div>
    </div>
  );
}
