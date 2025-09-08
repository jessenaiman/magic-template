/**
 * Unified Navigation Bar Component
 * 
 * This is a client component that serves as the main navigation container.
 * It combines mobile and desktop navigation, theme toggling, and playback controls.
 * 
 * Following Single Responsibility Principle, this component acts as a wrapper
 * for smaller, focused components that handle specific functionality.
 */

'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { MobileNavigation } from './mobile-navigation';
import { DesktopControls } from './desktop-controls';
import { MobileMenuButton } from './mobile-menu-button';
import { MobileControls } from './mobile-controls';

interface UnifiedNavbarProps {
  logoText?: string;
}

export function UnifiedNavbar({ logoText = 'Magic UI' }: UnifiedNavbarProps): React.JSX.Element | null {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  // Handle navigation and close mobile menu if open
  const handleNavigate = (href: string): void => {
    router.push(href);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  // Toggle play/pause state
  const handleTogglePlay = (): void => {
    setIsPlaying(!isPlaying);
  };

  // Reset animations
  const handleReset = (): void => {
    setIsPlaying(false);
  };

  // Set mounted state for client-side only components
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything until mounted to avoid hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Mobile menu button and logo */}
        <MobileMenuButton 
          onOpenMenu={() => setMobileMenuOpen(true)} 
          logoText={logoText} 
        />

        {/* Desktop controls (navigation + theme + playback) */}
        <DesktopControls 
          playing={isPlaying}
          onTogglePlay={handleTogglePlay}
          onReset={handleReset}
          onNavigate={handleNavigate}
        />
        
        {/* Mobile controls (playback + theme) */}
        <MobileControls
          playing={isPlaying}
          onTogglePlay={handleTogglePlay}
          onReset={handleReset}
        />

        {/* Mobile menu */}
        <MobileNavigation
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          onNavigate={handleNavigate}
        />
      </div>
    </header>
  );
}
