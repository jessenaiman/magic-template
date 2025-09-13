'use client';

import * as React from 'react';
import { Play, Pause, Square, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePreviewContext } from '@/components/preview/preview-context';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/app/lib/utils';
import { useCallback } from 'react';

export function PreviewControlsBar() {
  const { state, setPlaying, reset, replay } = usePreviewContext();

  // Helper to check if reset button should be disabled
  const isDefaultState = useCallback(() => {
    return (
      state.displayText === 'Component' &&
      JSON.stringify(state.customization) ===
        JSON.stringify({
          backgroundColor: '#ffffff',
          textColor: '#000000',
          borderRadius: 6,
          padding: 16,
          fontSize: 14,
          fontWeight: 500,
          shadowIntensity: 0,
          displayText: 'Component',
          buttonText: 'Click me',
          duration: 1.0,
          delay: 0,
          gap: 8,
          shadow: 0,
          animateBy: 'words',
          direction: 'top',
        })
    );
  }, [state]);

  return (
    <div className="flex items-center gap-2 p-4 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/40">
      {/* Play/Pause button */}
      <Button
        size="icon"
        variant="outline"
        className={cn(
          'h-8 w-8 transition-colors hover:bg-accent',
          state.playing && 'bg-accent/50'
        )}
        onClick={() => setPlaying(!state.playing)}
        title={state.playing ? 'Pause Animation' : 'Play Animation'}
        aria-label={state.playing ? 'Pause Animation' : 'Play Animation'}
      >
        {state.playing ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
      </Button>

      {/* Replay button */}
      <Button
        size="icon"
        variant="outline"
        className="h-8 w-8 transition-colors hover:bg-accent"
        onClick={replay}
        title="Replay Animation"
        aria-label="Replay Animation"
        disabled={!state.playing}
      >
        <RotateCcw className="h-4 w-4" />
      </Button>

      {/* Reset button */}
      <Button
        size="icon"
        variant="outline"
        className="h-8 w-8 transition-colors hover:bg-accent"
        onClick={reset}
        title="Reset All Settings"
        aria-label="Reset All Settings"
        disabled={isDefaultState()}
      >
        <Square className="h-4 w-4" />
      </Button>

      {/* Separator */}
      <div className="h-6 w-px bg-border" />

      {/* Theme toggle */}
      <ThemeToggle />
    </div>
  );
}

export default PreviewControlsBar;
