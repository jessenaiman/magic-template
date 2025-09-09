/**
 * Theme Toggle Component
 * Handles theme switching between light and dark modes
 */

'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@repo/components/ui/button';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  persistentState?: boolean;
  className?: string;
}

export function ThemeToggle({ persistentState = true, className }: ThemeToggleProps) {
  const { setTheme, theme } = useTheme();

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (persistentState) {
      try {
        localStorage.setItem('theme', newTheme);
      } catch (error) {
        console.warn('Failed to save theme to localStorage:', error);
      }
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleThemeToggle}
      className={className}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </Button>
  );
}
