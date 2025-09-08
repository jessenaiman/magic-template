import type { NavItem } from '@/lib/navigation-utils';

// Simple static navigation configuration
// Add new navigation items here - that's it!
export const navigationItems: NavItem[] = [
  {
    label: "Workshop",
    href: "/design",
    icon: "Palette",
    description: "Design components and examples",
    children: [], // Will be populated dynamically
    isActive: false,
    external: false
  },
  {
    label: "Templates",
    href: "/template",
    icon: "Layout",
    description: "Template components and examples",
    children: [], // Will be populated dynamically
    isActive: false,
    external: false
  },
  {
    label: "Security",
    href: "/test-report",
    icon: "Activity",
    description: "Comprehensive test results and metrics dashboard",
    children: [],
    isActive: false,
    external: false
  },
  {
    label: "About",
    href: "/about",
    icon: "Frame",
    description: "About this template",
    children: [],
    isActive: false,
    external: false
  }
];

// Navigation configuration
export const navigationConfig = {
  mainNav: navigationItems
};

// Simple utility functions
export const getBreadcrumbItems = (pathname: string): Array<{ label: string; href: string }> => {
  const items: Array<{ label: string; href: string }> = [{ label: 'Home', href: '/' }];

  if (pathname === '/') return items;

  // Find matching navigation item
  for (const item of navigationItems) {
    if (item.href === pathname) {
      items.push({ label: item.label, href: item.href });
      break;
    }
    if (item.children) {
      const child = item.children.find(c => c.href === pathname);
      if (child) {
        items.push({ label: item.label, href: item.href });
        items.push({ label: child.label, href: child.href });
        break;
      }
    }
  }

  return items;
};
