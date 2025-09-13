'use client';

import * as React from 'react';
import { Sun, Moon, Paintbrush, Play, Pause, RotateCcw } from 'lucide-react';
import { CustomizableManagementBar } from './customizable-management-bar';
import { CustomizationSettings } from './preview/preview-context';

interface DesignManagementBarProps {
  pathname: string;
  updateCustomization: (patch: Partial<CustomizationSettings>) => void;
  setPlaying: (playing: boolean) => void;
  playing: boolean;
  reset: () => void;
}

export function DesignManagementBar({
  pathname,
  updateCustomization,
  setPlaying,
  playing,
  reset,
}: DesignManagementBarProps) {
  // Get the page title from the pathname
  const getPageTitle = React.useCallback(() => {
    // Extract the last part of the pathname
    const pathParts = pathname.split('/');
    const lastPart = pathParts[pathParts.length - 1];

    // Format the title (convert kebab-case to Title Case)
    return lastPart
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }, [pathname]);

  const pageTitle = getPageTitle();

  // Set up playback control buttons
  const playbackButtons = React.useMemo(
    () => [
      {
        icon: playing ? Pause : Play,
        label: playing ? 'Pause' : 'Play',
        onClick: () => setPlaying(!playing),
        className:
          'bg-neutral-200/60 dark:bg-neutral-600/80 text-neutral-600 dark:text-neutral-200',
      },
      {
        icon: RotateCcw,
        label: 'Reset',
        onClick: () => reset(),
        className:
          'bg-neutral-200/60 dark:bg-neutral-600/80 text-neutral-600 dark:text-neutral-200',
      },
    ],
    [playing, setPlaying, reset]
  );

  // Set up theme buttons
  const themeButtons = React.useMemo(
    () => [
      {
        icon: Sun,
        label: 'Light',
        onClick: () =>
          updateCustomization({
            backgroundColor: '#ffffff',
            textColor: '#000000',
          }),
        className:
          'bg-neutral-200/60 dark:bg-neutral-600/80 text-neutral-600 dark:text-neutral-200',
      },
      {
        icon: Moon,
        label: 'Dark',
        onClick: () =>
          updateCustomization({
            backgroundColor: '#121212',
            textColor: '#ffffff',
          }),
        className:
          'bg-neutral-800/80 dark:bg-neutral-800/80 text-neutral-200 dark:text-neutral-200',
      },
      {
        icon: Paintbrush,
        label: 'Colorful',
        onClick: () =>
          updateCustomization({
            backgroundColor: '#f0f9ff',
            textColor: '#0c4a6e',
          }),
        className:
          'bg-blue-200/60 dark:bg-blue-800/80 text-blue-600 dark:text-blue-300',
      },
    ],
    [updateCustomization]
  );

  // Combine playback and theme buttons
  const actionButtons = React.useMemo(
    () => [...playbackButtons, ...themeButtons],
    [playbackButtons, themeButtons]
  );

  return (
    <CustomizableManagementBar
      actionButtons={actionButtons}
      primaryAction={{
        label: pageTitle,
        sublabel: 'Current',
        shortcut: 'D',
      }}
    />
  );
}
