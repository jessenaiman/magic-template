'use client';

import * as React from 'react';
import { ConsolidatedNavbar } from './consolidated-navbar';
import { getDesignNavigation } from '@/app/navigation.config';
import { getTemplatesNavigation } from '@/app/templates-navigation.config';
import { Palette, LayoutDashboard, Home, Activity } from 'lucide-react';

// Example navigation configuration
const navigationItems = [
  {
    label: "Home",
    href: "/",
    icon: "Home",
  },
  {
    label: "Design",
    href: "/design",
    icon: "Palette",
    children: getDesignNavigation()
  },
  {
    label: "Templates",
    href: "/templates",
    icon: "LayoutDashboard",
    children: getTemplatesNavigation()
  },
  {
    label: "Test Report",
    href: "/test-report",
    icon: "Activity",
  },
];

// Example usage of the consolidated navbar
export function ExampleNavbar() {
  return (
    <ConsolidatedNavbar
      navigationItems={navigationItems}
      showPlaybackControls={true}
      showThemeToggle={true}
      showMobileMenu={true}
      persistentState={true}
      className="border-b"
    />
  );
}

// Migration examples showing how to replace old components:

// OLD: Multiple scattered nav components
// ❌ import { SimpleNavbar } from './simple-navbar';
// ❌ import { TopNavbar } from './top-navbar';
// ❌ import { MenuBar } from './menu-bar';

// NEW: Single consolidated component
// ✅ import { ConsolidatedNavbar } from './consolidated-navbar';

// Usage examples:

// Full featured navbar (replaces TopNavbar + UnifiedNavbar)
export const FullNavbar = () => (
  <ConsolidatedNavbar
    variant="full"
    navigationItems={navigationItems}
    showPlaybackControls={true}
    showThemeToggle={true}
    showMobileMenu={true}
  />
);

// Minimal navbar (replaces SimpleNavbar)
export const MinimalNavbar = () => (
  <ConsolidatedNavbar
    variant="minimal"
    showPlaybackControls={true}
    showThemeToggle={true}
  />
);

// Sidebar navigation (replaces SimpleDesignNav + UnifiedSidebar)
export const SidebarNavigation = () => (
  <ConsolidatedNavbar
    variant="sidebar"
    navigationItems={navigationItems}
  />
);

// Backward compatibility aliases
export const UnifiedNavbar = ConsolidatedNavbar;
export const SimpleNavbar = (props: React.ComponentProps<typeof ConsolidatedNavbar>) =>
  <ConsolidatedNavbar {...props} variant="minimal" />;
export const SidebarNav = (props: React.ComponentProps<typeof ConsolidatedNavbar>) =>
  <ConsolidatedNavbar {...props} variant="sidebar" />;

export default ConsolidatedNavbar;
