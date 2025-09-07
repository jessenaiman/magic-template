import { Palette, Zap, Layout, Sparkles, ArrowRightLeft, Type, Frame, PieChart, Map, Activity } from "lucide-react";

import { discoverCategories, discoverTechnologyImplementations } from "@/lib/category-discovery";

export type NavItem = {
  label: string;
  href: string;
  icon?: string; // Changed from React.ElementType to string
  description?: string;
  children?: NavItem[];
  badge?: string;
};

export type NavigationSection = {
  label: string;
  items: NavItem[];
};

// Helper function to get icon for category based on slug
const getIconForCategory = (categorySlug: string) => {
  const iconMap: Record<string, string> = {
    'animations': 'Palette',
    'backgrounds': 'Palette',
    'buttons': 'Zap',
    'effects': 'Sparkles',
    'text': 'Type',
    'transitions': 'ArrowRightLeft',
    'responsive-design': 'Layout',
  };
  return iconMap[categorySlug] || 'Palette'; // default to Palette
};

// Helper function to get description for category
const getDescriptionForCategory = (categoryName: string) => {
  const lowercaseName = categoryName.toLowerCase();

  if (lowercaseName.includes('animation')) return 'Animated design components and patterns';
  if (lowercaseName.includes('background')) return 'Animated and static background patterns';
  if (lowercaseName.includes('button')) return 'Interactive button components and animations';
  if (lowercaseName.includes('effect')) return 'Visual effects and animations';
  if (lowercaseName.includes('text')) return 'Typography and text effects';
  if (lowercaseName.includes('transition')) return 'Smooth page transition effects';
  if (lowercaseName.includes('responsive')) return 'Mobile-first design patterns';

  return 'Design components and implementations';
};

// Generate dynamic Design section using the new [category]/[example] structure
const generateDynamicDesignSection = (): NavigationSection => {
  const categoryData = [
    {
      slug: 'animations',
      name: 'Animations',
      examples: [
        { slug: 'animate-ui', name: 'Animate UI' },
        { slug: 'animatecss', name: 'Animate.css' },
        { slug: 'magicui', name: 'Magic UI' },
        { slug: 'reactbits', name: 'React Bits' }
      ]
    },
    {
      slug: 'backgrounds',
      name: 'Backgrounds',
      examples: [
        { slug: 'animate-ui', name: 'Animate UI' },
        { slug: 'html-css', name: 'HTML/CSS' },
        { slug: 'magicui', name: 'Magic UI' },
        { slug: 'tailwind', name: 'Tailwind' }
      ]
    },
    {
      slug: 'buttons',
      name: 'Buttons',
      examples: [
        { slug: 'animate-css', name: 'Animate.css' },
        { slug: 'animate-ui', name: 'Animate UI' },
        { slug: 'customize', name: 'Customize' },
        { slug: 'html-css', name: 'HTML/CSS' },
        { slug: 'magic', name: 'Magic UI' },
        { slug: 'shadcn', name: 'Shadcn' },
        { slug: 'tailwind', name: 'Tailwind' }
      ]
    },
    {
      slug: 'effects',
      name: 'Effects',
      examples: [
        { slug: 'html-css', name: 'HTML/CSS' },
        { slug: 'magicui', name: 'Magic UI' },
        { slug: 'tailwind', name: 'Tailwind' }
      ]
    },
    {
      slug: 'responsive-design',
      name: 'Responsive Design',
      examples: [
        { slug: 'html-css', name: 'HTML/CSS' },
        { slug: 'magicui', name: 'Magic UI' },
        { slug: 'nextjs', name: 'Next.js' },
        { slug: 'tailwindcss', name: 'Tailwind CSS' }
      ]
    },
    {
      slug: 'text',
      name: 'Text',
      examples: [
        { slug: 'html-css', name: 'HTML/CSS' },
        { slug: 'magicui', name: 'Magic UI' },
        { slug: 'reactbits', name: 'React Bits' },
        { slug: 'shadcn', name: 'Shadcn' },
        { slug: 'tailwind', name: 'Tailwind' }
      ]
    },
    {
      slug: 'transitions',
      name: 'Transitions',
      examples: [
        { slug: 'html-css', name: 'HTML/CSS' },
        { slug: 'magicui', name: 'Magic UI' },
        { slug: 'nextjs', name: 'Next.js' },
        { slug: 'tailwind', name: 'Tailwind' }
      ]
    },
    {
      slug: 'templates',
      name: 'Templates',
      examples: [] // No examples for templates yet
    }
  ];

  return {
    label: "Design",
    items: categoryData.map(category => {
      const children: NavItem[] = [
        {
          label: "Overview",
          href: `/design/${category.slug}`
        },
        ...category.examples.map(example => ({
          label: example.name,
          href: `/design/${category.slug}/${example.slug}`
        }))
      ];

      return {
        label: category.name,
        href: `/design/${category.slug}`,
        icon: getIconForCategory(category.slug),
        description: getDescriptionForCategory(category.name),
        children
      };
    })
  };
};

// Main navigation sections
export const mainNavigation: NavigationSection[] = [
  generateDynamicDesignSection(),
  {
    label: "Projects",
    items: [
      {
        label: "Event Planning & Game Hosting",
        href: "#",
        icon: "Frame",
        description: "External event planning and game hosting workshop"
      },
      {
        label: "D&D and Tabletop Games",
        href: "#",
        icon: "PieChart",
        description: "External D&D and tabletop games workshop"
      },
      {
        label: "AI & Machine Learning",
        href: "#",
        icon: "Map",
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
        icon: "Activity",
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
