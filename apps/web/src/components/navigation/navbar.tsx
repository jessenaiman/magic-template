/**
 * Unified Navbar Component - Refactored
 * Clean, maintainable navigation following Next.js best practices
 * Uses sub-components for Single Responsibility Principle compliance
 */

'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { usePreviewContext } from '../preview/preview-context';
import { Skeleton } from '@repo/components/ui/skeleton';
import { useTransition } from 'react';

// Import sub-components for Single Responsibility
import { ThemeToggle } from './theme-toggle';
import { PlaybackControls } from './playback-controls';
import { MainNavigation } from './main-navigation';
import { MobileNavigation } from './mobile-navigation';

interface UnifiedNavbarProps {
  className?: string;
}

export function UnifiedNavbar({ className }: UnifiedNavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { state, setPlaying, reset } = usePreviewContext();
  const [mounted, setMounted] = React.useState(false);
  const [isPending, startTransition] = useTransition();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Page transition wrapper with loading state
  const handleNavigation = (href: string) => {
    startTransition(() => {
      router.push(href);
      setMobileMenuOpen(false);
    });
  };

  if (!mounted) {
    return <Skeleton className="h-16 w-full" />;
  }

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      className
    )}>
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 font-bold text-xl hover:opacity-80 transition-opacity"
        >
          <span>Magic Template</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <MainNavigation />

          {/* Desktop Controls */}
          <div className="flex items-center space-x-2 ml-4">
            <ThemeToggle />
            <PlaybackControls
              playing={state.playing}
              onTogglePlay={() => setPlaying(!state.playing)}
              onReset={() => reset()}
            />
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <MobileNavigation
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            onNavigate={handleNavigation}
          />
        </div>
      </div>

      {/* Loading indicator */}
      {isPending && (
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
    </header>
  );
}
