import { Palette, Zap, Layout, Sparkles, ArrowRightLeft, Type, Frame, PieChart, Map, Activity } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon?: React.ElementType;
  description?: string;
  children?: NavItem[];
  badge?: string;
};

export type NavigationSection = {
  label: string;
  items: NavItem[];
};

// Main navigation sections
export const mainNavigation: NavigationSection[] = [
  {
    label: "Design",
    items: [
      {
        label: "Backgrounds",
        href: "/design/backgrounds",
        icon: Palette,
        description: "Animated and static background patterns",
        children: [
          { label: "Overview", href: "/design/backgrounds" },
          { label: "Animate UI", href: "/design/backgrounds/animate-ui" },
          { label: "HTML CSS", href: "/design/backgrounds/html-css" },
          { label: "MagicUI", href: "/design/backgrounds/magicui" },
          { label: "ReactBits", href: "/design/backgrounds/reactbits" },
          { label: "Tailwind", href: "/design/backgrounds/tailwind" },
        ]
      },
      {
        label: "Buttons",
        href: "/design/buttons",
        icon: Zap,
        description: "Interactive button components and animations",
        children: [
          { label: "Overview", href: "/design/buttons" },
          { label: "Animate CSS", href: "/design/buttons/animate-css" },
          { label: "HTML CSS", href: "/design/buttons/html-css" },
          { label: "Magic", href: "/design/buttons/magic" },
          { label: "Shadcn", href: "/design/buttons/shadcn" },
          { label: "Tailwind", href: "/design/buttons/tailwind" }
        ]
      },
      {
        label: "Responsive Design",
        href: "/design/responsive-design",
        icon: Layout,
        description: "Mobile-first design patterns",
        children: [
          { label: "Overview", href: "/design/responsive-design" },
          { label: "HTML CSS", href: "/design/responsive-design/html-css" },
          { label: "MagicUI", href: "/design/responsive-design/magicui" },
          { label: "Next.js", href: "/design/responsive-design/nextjs" }
        ]
      },
      {
        label: "Effects",
        href: "/design/effects",
        icon: Sparkles,
        description: "Visual effects and animations",
        children: [
          { label: "Overview", href: "/design/effects" },
          { label: "HTML CSS", href: "/design/effects/html-css" },
          { label: "MagicUI", href: "/design/effects/magicui" },
          { label: "Tailwind", href: "/design/effects/tailwind" }
        ]
      },
      {
        label: "Transitions",
        href: "/design/transitions",
        icon: ArrowRightLeft,
        description: "Smooth page transition effects",
        children: [
          { label: "Overview", href: "/design/transitions" },
          { label: "HTML CSS", href: "/design/transitions/html-css" },
          { label: "MagicUI", href: "/design/transitions/magicui" },
          { label: "Next.js", href: "/design/transitions/nextjs" },
          { label: "Tailwind", href: "/design/transitions/tailwind" }
        ]
      },
      {
        label: "Text",
        href: "/design/text",
        icon: Type,
        description: "Typography and text effects",
        children: [
          { label: "Overview", href: "/design/text" },
          { label: "HTML CSS", href: "/design/text/html-css" },
          { label: "MagicUI", href: "/design/text/magicui" },
          { label: "ReactBits", href: "/design/text/reactbits" },
          { label: "Shadcn", href: "/design/text/shadcn" },
          { label: "Tailwind", href: "/design/text/tailwind" }
        ]
      }
    ]
  },
  {
    label: "Projects",
    items: [
      {
        label: "Event Planning & Game Hosting",
        href: "#",
        icon: Frame,
        description: "External event planning and game hosting workshop"
      },
      {
        label: "D&D and Tabletop Games",
        href: "#",
        icon: PieChart,
        description: "External D&D and tabletop games workshop"
      },
      {
        label: "AI & Machine Learning",
        href: "#",
        icon: Map,
        description: "External AI and machine learning workshop"
      }
    ]
  },
  {
    label: "Testing",
    items: [
      {
        label: "Test Report",
        href: "/test-report",
        icon: Activity,
        description: "Comprehensive test results and metrics dashboard"
      }
    ]
  }
];

// Utility functions
export const getDesignNavigation = (): NavItem[] => {
  return mainNavigation.find(section => section.label === "Design")?.items || [];
};

export const findNavItemByPath = (pathname: string, items: NavItem[] = []): NavItem | null => {
  for (const item of items) {
    if (item.href === pathname) return item;
    if (item.children) {
      const found = findNavItemByPath(pathname, item.children);
      if (found) return found;
    }
  }
  return null;
};

export const isNavItemActive = (item: NavItem, pathname: string): boolean => {
  if (item.href === pathname) return true;
  if (item.children) {
    return item.children.some(child => isNavItemActive(child, pathname));
  }
  return false;
};

export const getActiveNavItems = (pathname: string): { section: NavigationSection | null; item: NavItem | null; parent: NavItem | null } => {
  for (const section of mainNavigation) {
    for (const item of section.items) {
      if (isNavItemActive(item, pathname)) {
        return { section, item, parent: null };
      }
      if (item.children) {
        for (const child of item.children) {
          if (child.href === pathname) {
            return { section, item: child, parent: item };
          }
        }
      }
    }
  }
  return { section: null, item: null, parent: null };
};

// Breadcrumb generation utility
export const getBreadcrumbItems = (pathname: string): Array<{ label: string; href: string }> => {
  const breadcrumbs: Array<{ label: string; href: string }> = [];
  
  // Always include home
  breadcrumbs.push({ label: 'Home', href: '/' });

  if (pathname === '/') return breadcrumbs;

  // Find the active navigation item
  const { item, parent } = getActiveNavItems(pathname);
  
  if (parent) {
    breadcrumbs.push({ label: parent.label, href: parent.href });
  }
  
  if (item && item.href !== '/') {
    breadcrumbs.push({ label: item.label, href: item.href });
  }

  return breadcrumbs;
};
