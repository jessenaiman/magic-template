'use client';

import * as React from 'react';
import { Play, Pause, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePreviewContext } from '@/components/preview-context';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

export function PreviewControlsBar() {
  const { state, setPlaying, reset } = usePreviewContext();

  return (
    <div className="flex items-center gap-2 p-4 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/40">
      {/* Play/Pause button */}
      <Button
        size="icon"
        variant="outline"
        className="h-8 w-8"
        onClick={() => setPlaying(!state.playing)}
        title={state.playing ? 'Pause' : 'Play'}
      >
        {state.playing ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
      </Button>

      {/* Reset button */}
      <Button
        size="icon"
        variant="outline"
        className="h-8 w-8"
        onClick={reset}
        title="Reset"
      >
        <Square className="h-4 w-4" />
      </Button>

      {/* Theme toggle */}
      <ThemeToggle />
    </div>
  );
}

export default PreviewControlsBar;