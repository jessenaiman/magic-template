import { Palette, Zap, Layout, Sparkles, ArrowRightLeft, Type, Frame, PieChart, Map, Activity, User, LogOut, LogIn, UserPlus } from "lucide-react";

// Types
export type NavItem = {
  label: string;
  href: string;
  icon?: string; // Icon name as string
  description?: string;
  children?: NavItem[];
  badge?: string;
};

export type NavigationSection = {
  label: string;
  items: NavItem[];
};

// Icon map for proper rendering
export const iconMap: Record<string, any> = {
  'Palette': Palette,
  'Zap': Zap,
  'Layout': Layout,
  'Sparkles': Sparkles,
  'ArrowRightLeft': ArrowRightLeft,
  'Type': Type,
  'Frame': Frame,
  'PieChart': PieChart,
  'Map': Map,
  'Activity': Activity,
  'User': User,
  'LogOut': LogOut,
  'LogIn': LogIn,
  'UserPlus': UserPlus,
};

// Helper: icon for category
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
  return iconMap[categorySlug] || 'Palette';
};

// Helper: description for category
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

// Dynamic Design section
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
      examples: []
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
export const navigationConfig = {
  mainNav: [
    ...generateDynamicDesignSection().items,
    {
      label: "Projects",
      href: "/projects",
      icon: "Frame",
      description: "Project workshops and resources",
      children: [
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
      href: "/testing",
      icon: "Activity",
      description: "Testing resources and reports",
      children: [
        {
          label: "Test Report",
          href: "/test-report",
          icon: "Activity",
          description: "Comprehensive test results and metrics dashboard"
        }
      ]
    }
  ],
  authNav: {
    authenticated: [
      {
        label: "Profile",
        href: "/profile",
        icon: "User"
      },
      {
        label: "Logout",
        href: "/logout",
        icon: "LogOut"
      }
    ],
    unauthenticated: [
      {
        label: "Login",
        href: "/login",
        icon: "LogIn"
      },
      {
        label: "Sign Up",
        href: "/signup",
        icon: "UserPlus"
      }
    ]
  }
};

// Utility functions
export const getDesignNavigation = (): NavItem[] => {
  const designItem = navigationConfig.mainNav.find(item => item.label === "Design");
  return designItem ? designItem.children || [] : [];
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
  for (const item of navigationConfig.mainNav) {
    if (isNavItemActive(item, pathname)) {
      return { section: null, item, parent: null };
    }
    if (item.children) {
      for (const child of item.children) {
        if (child.href === pathname) {
          return { section: null, item: child, parent: item };
        }
      }
    }
  }
  return { section: null, item: null, parent: null };
};

// Breadcrumb generation utility
export const getBreadcrumbItems = (pathname: string): Array<{ label: string; href: string }> => {
  const breadcrumbs: Array<{ label: string; href: string }> = [];
  breadcrumbs.push({ label: 'Home', href: '/' });
  if (pathname === '/') return breadcrumbs;
  const { item, parent } = getActiveNavItems(pathname);
  if (parent) {
    breadcrumbs.push({ label: parent.label, href: parent.href });
  }
  if (item && item.href !== '/') {
    breadcrumbs.push({ label: item.label, href: item.href });
  }
  return breadcrumbs;
};