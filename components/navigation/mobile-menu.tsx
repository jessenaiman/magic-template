/**
 * Mobile Menu Component
 * Combines mobile navigation and mobile controls
 */

'use client';

import * as React from 'react';
import { MobileNavigation } from './mobile-navigation';
import { ThemeToggle } from './theme-toggle';

interface MobileMenuProps {
  showThemeToggle?: boolean;
  showMobileMenu?: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onNavigate: (href: string) => void;
  persistentState?: boolean;
}

export function MobileMenu({
  showThemeToggle = true,
  showMobileMenu = true,
  mobileMenuOpen,
  setMobileMenuOpen,
  onNavigate,
  persistentState = true
}: MobileMenuProps) {
  return (
    <div className="flex items-center space-x-2 md:hidden">
      {showThemeToggle && (
        <ThemeToggle persistentState={persistentState} className="h-8 w-8 p-0" />
      )}

      {showMobileMenu && (
        <MobileNavigation
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
}
