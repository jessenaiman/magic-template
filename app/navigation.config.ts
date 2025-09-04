import { Palette, Zap, Layout, Sparkles, ArrowRightLeft, Type, Frame, PieChart, Map } from "lucide-react";

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
        href: "/backgrounds",
        icon: Palette,
        description: "Animated and static background patterns",
        children: [
          { label: "Overview", href: "/backgrounds" },
          { label: "Animate UI", href: "/backgrounds/animate-ui" },
          { label: "HTML CSS", href: "/backgrounds/html-css" },
          { label: "MagicUI", href: "/backgrounds/magicui" },
          { label: "ReactBits", href: "/backgrounds/reactbits" },
          { label: "Tailwind", href: "/backgrounds/tailwind" },
        ]
      },
      {
        label: "Buttons",
        href: "/buttons",
        icon: Zap,
        description: "Interactive button components and animations",
        children: [
          { label: "Overview", href: "/buttons" },
          { label: "Animate CSS", href: "/buttons/animate-css" },
          { label: "Customize", href: "/buttons/customize" },
          { label: "HTML CSS", href: "/buttons/html-css" },
          { label: "Magic", href: "/buttons/magic" },
          { label: "Shadcn", href: "/buttons/shadcn" },
          { label: "Tailwind", href: "/buttons/tailwind" }
        ]
      },
      {
        label: "Responsive Design",
        href: "/responsive-design",
        icon: Layout,
        description: "Mobile-first design patterns",
        children: [
          { label: "Overview", href: "/responsive-design" },
          { label: "Customize", href: "/responsive-design/customize" },
          { label: "HTML CSS", href: "/responsive-design/html-css" },
          { label: "MagicUI", href: "/responsive-design/magicui" },
          { label: "Next.js", href: "/responsive-design/nextjs" }
        ]
      },
      {
        label: "Effects",
        href: "/effects",
        icon: Sparkles,
        description: "Visual effects and animations",
        children: [
          { label: "Overview", href: "/effects" },
          { label: "Customize", href: "/effects/customize" },
          { label: "HTML CSS", href: "/effects/html-css" },
          { label: "MagicUI", href: "/effects/magicui" },
          { label: "Tailwind", href: "/effects/tailwind" }
        ]
      },
      {
        label: "Page Transitions",
        href: "/page-transitions",
        icon: ArrowRightLeft,
        description: "Smooth page transition effects",
        children: [
          { label: "Overview", href: "/page-transitions" },
          { label: "Customize", href: "/page-transitions/customize" },
          { label: "HTML CSS", href: "/page-transitions/html-css" },
          { label: "MagicUI", href: "/page-transitions/magicui" },
          { label: "Next.js", href: "/page-transitions/nextjs" },
          { label: "Tailwind", href: "/page-transitions/tailwind" }
        ]
      },
      {
        label: "Text",
        href: "/text",
        icon: Type,
        description: "Typography and text effects",
        children: [
          { label: "Overview", href: "/text" },
          { label: "Customize", href: "/text/customize" },
          { label: "HTML CSS", href: "/text/html-css" },
          { label: "MagicUI", href: "/text/magicui" },
          { label: "ReactBits", href: "/text/reactbits" },
          { label: "Shadcn", href: "/text/shadcn" },
          { label: "Tailwind", href: "/text/tailwind" }
        ]
      }
    ]
  },
  {
    label: "Projects",
    items: [
      {
        label: "Design Engineering",
        href: "#",
        icon: Frame,
        description: "External design engineering workshop"
      },
      {
        label: "Sales & Marketing",
        href: "#",
        icon: PieChart,
        description: "External sales and marketing workshop"
      },
      {
        label: "Travel",
        href: "#",
        icon: Map,
        description: "External travel workshop"
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
