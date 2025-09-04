'use client';

import * as React from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Type,
  Sun,
  Moon,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';

interface PageControlsProps {
  onPlayAll?: () => void;
  onPauseAll?: () => void;
  onResetAll?: () => void;
  onGlobalTextChange?: (text: string) => void;
  globalText?: string;
  className?: string;
}

const BUTTON_MOTION_CONFIG = {
  initial: 'rest',
  whileHover: 'hover',
  whileTap: 'tap',
  variants: {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  },
  transition: { type: 'spring', stiffness: 250, damping: 25 },
} as const;

export function PageControls({
  onPlayAll,
  onPauseAll,
  onResetAll,
  onGlobalTextChange,
  globalText = 'Sample Text',
  className = ''
}: PageControlsProps) {
  const { theme, setTheme } = useTheme();
  const [isPlaying, setIsPlaying] = React.useState(true);

  const handlePlayPause = React.useCallback(() => {
    if (isPlaying) {
      onPauseAll?.();
    } else {
      onPlayAll?.();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying, onPlayAll, onPauseAll]);

  const handleReset = React.useCallback(() => {
    onResetAll?.();
    setIsPlaying(true);
  }, [onResetAll]);

  const handleThemeToggle = React.useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  return (
    <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 ${className}`}>
      <div className="flex items-center gap-2 rounded-2xl border border-border bg-background/95 backdrop-blur-sm p-2 shadow-lg">
        {/* Play/Pause Control */}
        <motion.button
          {...BUTTON_MOTION_CONFIG}
          onClick={handlePlayPause}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          aria-label={isPlaying ? 'Pause all animations' : 'Play all animations'}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </motion.button>

        {/* Reset Control */}
        <motion.button
          {...BUTTON_MOTION_CONFIG}
          onClick={handleReset}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          aria-label="Reset all animations"
        >
          <RotateCcw size={16} />
        </motion.button>

        <div className="mx-2 h-6 w-px bg-border rounded-full" />

        {/* Global Text Input */}
        <div className="flex items-center gap-2">
          <Type size={16} className="text-muted-foreground" />
          <input
            type="text"
            value={globalText}
            onChange={(e) => onGlobalTextChange?.(e.target.value)}
            className="w-32 px-2 py-1 text-sm bg-secondary/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
            placeholder="Global text..."
          />
        </div>

        <div className="mx-2 h-6 w-px bg-border rounded-full" />

        {/* Theme Toggle */}
        <motion.button
          {...BUTTON_MOTION_CONFIG}
          onClick={handleThemeToggle}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </motion.button>
      </div>
    </div>
  );
}
