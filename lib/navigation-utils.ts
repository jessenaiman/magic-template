import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

// Define the icon map with proper typing
const iconMap: Record<string, LucideIcon> = {
  Palette: LucideIcons.Palette,
  Zap: LucideIcons.Zap,
  Layout: LucideIcons.Layout,
  Sparkles: LucideIcons.Sparkles,
  ArrowRightLeft: LucideIcons.ArrowRightLeft,
  Type: LucideIcons.Type,
  Frame: LucideIcons.Frame,
  PieChart: LucideIcons.PieChart,
  Map: LucideIcons.Map,
  Activity: LucideIcons.Activity,
};

export type IconName = keyof typeof iconMap;

// NavItem type for navigation items
export interface NavItem {
  label: string;
  href: string;
  icon?: IconName;
  description?: string;
  children?: NavItem[];
  badge?: string;
  external?: boolean;
  isActive?: boolean;
}

/**
 * Checks if a navigation item is active based on the current pathname
 */
export function isNavItemActive(item: NavItem, pathname: string | null): boolean {
  if (!pathname) return false;
  
  // Check if current pathname matches the item's href
  if (item.href === pathname) return true;
  
  // Check if any child is active
  if (item.children) {
    return item.children.some(child => isNavItemActive(child, pathname));
  }
  
  return false;
}

/**
 * Renders an icon by name with optional className
 */
export function renderIcon(iconName?: IconName, className: string = 'h-4 w-4'): ReactNode {
  if (!iconName) return null;
  
  // Safely get the icon component
  const IconComponent = iconMap[iconName];
  if (!IconComponent) return null;
  
  // Create an element with the icon component and class name
  return React.createElement('span', { className }, React.createElement(IconComponent));
}
