import type { NavItem } from '@/lib/navigation-utils';

// Simple navigation configuration
// Add new navigation items here - that's it!
export const navigationItems: NavItem[] = [
  {
    label: "Workshop",
    href: "/design",
    icon: "Palette",
    description: "Design components and examples",
    children: [
      {
        label: "Animations",
        href: "/design/animations",
        icon: "Sparkles",
        description: "Animated design components"
      },
      {
        label: "Backgrounds",
        href: "/design/backgrounds",
        icon: "Palette",
        description: "Background patterns and effects"
      },
      {
        label: "Buttons",
        href: "/design/buttons",
        icon: "Zap",
        description: "Interactive button components"
      }
    ],
    isActive: false,
    external: false
  },
  {
    label: "Templates",
    href: "/template",
    icon: "Layout",
    description: "Template components and examples",
    children: [
      {
        label: "Landing Pages",
        href: "/template/landing",
        icon: "Layout",
        description: "Landing page templates"
      },
      {
        label: "Dashboards",
        href: "/template/dashboard",
        icon: "Layout",
        description: "Dashboard templates"
      }
    ],
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
export const NAVIGATION_CONFIG = {
  mainNav: navigationItems
};

// Simple breadcrumb utility
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