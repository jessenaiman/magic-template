import { Home, BookOpen, LayoutDashboard, PenTool, Palette, Folder, Zap, Layout, Sparkles, ArrowRightLeft, Type } from "lucide-react";

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
          { label: "Overview", href: "/design/buttons/overview" },
          { label: "Animate CSS", href: "/design/buttons/animate-css" },
          { label: "Customize", href: "/design/buttons/customize" },
          { label: "HTML CSS", href: "/design/buttons/html-css" },
          { label: "Magic", href: "/design/buttons/magic" },
          { label: "Shadcn", href: "/design/buttons/shadcn" }
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
        label: "Page Transitions",
        href: "/design/page-transitions",
        icon: ArrowRightLeft,
        description: "Smooth page transition effects",
        children: [
          { label: "Overview", href: "/design/page-transitions" },
          { label: "HTML CSS", href: "/design/page-transitions/html-css" },
          { label: "MagicUI", href: "/design/page-transitions/magicui" },
          { label: "Next.js", href: "/design/page-transitions/nextjs" }
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
          { label: "Tailwind", href: "/design/text/tailwind" },
        ]
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
