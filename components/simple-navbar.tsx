'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Play, Pause, RotateCcw } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { usePreviewContext } from './preview-context';

interface SimpleNavbarProps {
  className?: string;
}

export function SimpleNavbar({ className }: SimpleNavbarProps) {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  const { state, setPlaying, reset } = usePreviewContext();
  
  // Extract page title from pathname
  const getPageTitle = () => {
    const pathParts = pathname.split('/');
    if (pathParts.length >= 3) {
      // Convert kebab-case to Title Case
      const category = pathParts[2].split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      // If there's a subcategory
      if (pathParts.length >= 4 && pathParts[3]) {
        const subcategory = pathParts[3].split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        return `${category} / ${subcategory}`;
      }
      
      return category;
    }
    return 'Design';
  };

  return (
    <div className={cn(
      "flex items-center justify-between py-2 px-4 bg-background border-b mb-4",
      className
    )}>
      <div className="font-medium text-lg">{getPageTitle()}</div>
      
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <div className="flex items-center space-x-2 border rounded-md p-1">
          <button
            onClick={() => setTheme('light')}
            className={cn(
              "p-1 rounded-sm",
              theme === 'light' ? "bg-muted" : "hover:bg-muted/50"
            )}
            aria-label="Light theme"
          >
            <Sun className="h-4 w-4" />
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={cn(
              "p-1 rounded-sm",
              theme === 'dark' ? "bg-muted" : "hover:bg-muted/50"
            )}
            aria-label="Dark theme"
          >
            <Moon className="h-4 w-4" />
          </button>
        </div>
        
        {/* Playback Controls */}
        <div className="flex items-center space-x-2 border rounded-md p-1">
          <button
            onClick={() => setPlaying(!state.playing)}
            className="p-1 rounded-sm hover:bg-muted/50"
            aria-label={state.playing ? "Pause" : "Play"}
          >
            {state.playing ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </button>
          <button
            onClick={() => reset()}
            className="p-1 rounded-sm hover:bg-muted/50"
            aria-label="Reset"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
