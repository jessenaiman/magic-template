/**
 * Unified Navigation Configuration
 *
 * This file provides a centralized, type-safe navigation configuration
 * that merges all navigation data from the application into a single,
 * extensible structure with support for dynamic features.
 */

// import { discoverCategories, discoverTechnologyImplementations } from "@/lib/category-discovery";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

import type { LucideIcon } from 'lucide-react';
import {
  Palette,
  Sparkles,
  Frame,
  Square,
  ArrowRightLeft,
  Type,
  PieChart,
  Map,
  LayoutDashboard,
  Home,
  FileText,
  Activity,
  Zap,
  User,
  Settings,
  List,
} from 'lucide-react';

/**
 * Base navigation item interface with core properties
 */
export interface BaseNavItem {
  /** Display label for the navigation item */
  label: string;
  /** Route path (can be relative or absolute) */
  href: string;
  /** Optional icon component from lucide-react */
  icon?: LucideIcon;
  /** Optional description for tooltips or additional context */
  description?: string;
  /** Optional badge text for highlighting (e.g., "New", "Beta") */
  badge?: string;
  /** Optional external link flag */
  external?: boolean;
  /** Optional disabled state */
  disabled?: boolean;
  /** Optional conditional rendering function */
  condition?: () => boolean;
  /** Optional metadata for extensibility */
  metadata?: Record<string, any>;
}

/**
 * Navigation item with hierarchical support
 */
export interface NavItem extends BaseNavItem {
  /** Child navigation items for nested menus */
  children?: NavItem[];
  /** Optional parent reference for breadcrumb generation */
  parent?: NavItem;
}

/**
 * Navigation section grouping related items
 */
export interface NavigationSection {
  /** Section identifier */
  id: string;
  /** Section display label */
  label: string;
  /** Navigation items in this section */
  items: NavItem[];
  /** Optional section description */
  description?: string;
  /** Optional section priority for ordering */
  priority?: number;
  /** Optional conditional rendering */
  condition?: () => boolean;
}

/**
 * Complete navigation configuration
 */
export interface NavigationConfig {
  /** Main navigation sections */
  mainNav: NavigationSection[];
  /** Design sidebar navigation */
  designSidebar: NavigationSection[];
  /** Templates sidebar navigation */
  templatesSidebar: NavigationSection[];
  /** Footer navigation (future use) */
  footerNav?: NavigationSection[];
}

/**
 * Active navigation context
 */
export interface ActiveNavContext {
  section: NavigationSection | null;
  item: NavItem | null;
  parent: NavItem | null;
  breadcrumbs: Array<{ label: string; href: string }>;
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get description for category
 */
const getDescriptionForCategory = (categoryName: string): string => {
  const lowercaseName = categoryName.toLowerCase();

  if (lowercaseName.includes('animation')) return 'Animated design components and patterns';
  if (lowercaseName.includes('background')) return 'Animated and static background patterns';
  if (lowercaseName.includes('button')) return 'Interactive button components and animations';
  if (lowercaseName.includes('effect')) return 'Visual effects and animations';
  if (lowercaseName.includes('text')) return 'Typography and text effects';
  if (lowercaseName.includes('transition')) return 'Smooth page transition effects';
  if (lowercaseName.includes('responsive')) return 'Mobile-first design patterns';
  if (lowercaseName.includes('template')) return 'Reusable page templates and layouts';

  return 'Design components and implementations';
};

/**
 * Create a navigation item with proper typing
 */
const createNavItem = (
  label: string,
  href: string,
  options: Partial<Omit<NavItem, 'label' | 'href'>> = {}
): NavItem => ({
  label,
  href,
  ...options,
});

/**
 * Create a navigation section with proper typing
 */
const createNavSection = (
  id: string,
  label: string,
  items: NavItem[],
  options: Partial<Omit<NavigationSection, 'id' | 'label' | 'items'>> = {}
): NavigationSection => ({
  id,
  label,
  items,
  ...options,
});

// ============================================================================
// DESIGN NAVIGATION GENERATION
// ============================================================================

const getIconForCategory = (categorySlug: string): LucideIcon => {
  const iconMapping: { [key: string]: LucideIcon } = {
    'animations': Sparkles,
    'backgrounds': Frame,
    'buttons': Square,
    'responsive-design': ArrowRightLeft,
    'effects': Zap,
    'transitions': ArrowRightLeft,
    'text': Type,
    'charts': PieChart,
    'maps': Map,
  };
  return iconMapping[categorySlug] || Palette;
};

/**
 * Generate dynamic design navigation from discovered categories
 */
const generateDesignNavigation = (): NavigationSection => {
  // Fallback to static configuration - dynamic discovery causes build issues
  // with Node.js modules in client components

  // Fallback to static configuration
  const staticCategories = [
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
    }
  ];

  const items: NavItem[] = staticCategories.map(category => {
    const children: NavItem[] = [
      createNavItem("Overview", `/design/${category.slug}`, {
        description: `Overview of ${category.name} components`
      }),
      ...category.examples.map(example =>
        createNavItem(example.name, `/design/${category.slug}/${example.slug}`, {
          description: `${category.name} implementation using ${example.name}`
        })
      )
    ];

    return createNavItem(category.name, `/design/${category.slug}`, {
      icon: getIconForCategory(category.slug),
      description: getDescriptionForCategory(category.name),
      children
    });
  });

  return createNavSection('design', 'Design', items, {
    description: 'Interactive design components and patterns'
  });
};

// ============================================================================
// TEMPLATES NAVIGATION
// ============================================================================

/**
 * Generate templates navigation
 */
const generateTemplatesNavigation = (): NavigationSection => {
  const items: NavItem[] = [
    createNavItem("Dashboard", "/templates/dashboard", {
      icon: "LayoutDashboard",
      description: "Comprehensive dashboard layouts with data visualization"
    }),
    createNavItem("Login", "/templates/login", {
      icon: "LogIn",
      description: "Authentication forms and login interfaces"
    }),
    createNavItem("Contact", "/templates/contact", {
      icon: "Mail",
      description: "Contact forms and feedback interfaces"
    }),
    createNavItem("Profile", "/templates/profile", {
      icon: User,
      description: "User profile pages with editable fields"
    }),
    createNavItem("Settings", "/templates/settings", {
      icon: Settings,
      description: "Application settings and preferences"
    }),
    createNavItem("List View", "/templates/list", {
      icon: List,
      description: "Data tables and list interfaces"
    }),
    createNavItem("Modal", "/templates/modal", {
      icon: Square,
      description: "Modal dialogs and overlays"
    }),
    createNavItem("Landing", "/templates/landing", {
      icon: Home,
      description: "Hero sections and landing pages"
    }),
    createNavItem("404", "/templates/404", {
      icon: FileText,
      description: "Error pages and not found states"
    })
  ];

  return createNavSection('templates', 'Templates', items, {
    description: 'Reusable page templates and layouts'
  });
};

// ============================================================================
// MAIN NAVIGATION CONFIGURATION
// ============================================================================

/**
 * Main navigation sections for the header/navbar
 */
const mainNavigationSections: NavigationSection[] = [
  generateDesignNavigation(),
  createNavSection('projects', 'Projects', [
    createNavItem("Event Planning & Game Hosting", "#", {
      icon: Frame,
      description: "External event planning and game hosting workshop",
      external: true
    }),
    createNavItem("D&D and Tabletop Games", "#", {
      icon: PieChart,
      description: "External D&D and tabletop games workshop",
      external: true
    }),
    createNavItem("AI & Machine Learning", "#", {
      icon: Map,
      description: "External AI and machine learning workshop",
      external: true
    })
  ], {
    description: 'External project workshops and resources'
  }),
  createNavSection('testing', 'Testing', [
    createNavItem("Test Report", "/test-report", {
      icon: Activity,
      description: "Comprehensive test results and metrics dashboard"
    })
  ], {
    description: 'Quality assurance and testing resources'
  })
];

// ============================================================================
// UNIFIED NAVIGATION CONFIG
// ============================================================================

/**
 * Complete unified navigation configuration
 */
const navigationConfig: NavigationConfig = {
  mainNav: mainNavigationSections,
  designSidebar: [generateDesignNavigation()],
  templatesSidebar: [generateTemplatesNavigation()],
  footerNav: [] // Future use
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Find navigation item by path
 */
const findNavItemByPath = (
  pathname: string,
  items: NavItem[] = []
): NavItem | null => {
  for (const item of items) {
    if (item.href === pathname) return item;
    if (item.children) {
      const found = findNavItemByPath(pathname, item.children);
      if (found) return found;
    }
  }
  return null;
};

/**
 * Check if navigation item is active
 */
const isNavItemActive = (item: NavItem, pathname: string): boolean => {
  if (item.href === pathname) return true;
  if (item.children) {
    return item.children.some(child => isNavItemActive(child, pathname));
  }
  return false;
};

/**
 * Get active navigation context
 */
const getActiveNavContext = (pathname: string): ActiveNavContext => {
  for (const section of navigationConfig.mainNav) {
    for (const item of section.items) {
      if (isNavItemActive(item, pathname)) {
        return {
          section,
          item,
          parent: null,
          breadcrumbs: generateBreadcrumbs(pathname)
        };
      }
      if (item.children) {
        for (const child of item.children) {
          if (child.href === pathname) {
            return {
              section,
              item: child,
              parent: item,
              breadcrumbs: generateBreadcrumbs(pathname)
            };
          }
        }
      }
    }
  }
  return {
    section: null,
    item: null,
    parent: null,
    breadcrumbs: generateBreadcrumbs(pathname)
  };
};

/**
 * Generate breadcrumb items for a path
 */
const generateBreadcrumbs = (pathname: string): Array<{ label: string; href: string }> => {
  const breadcrumbs: Array<{ label: string; href: string }> = [];

  // Always include home
  breadcrumbs.push({ label: 'Home', href: '/' });

  if (pathname === '/') return breadcrumbs;

  // Find the active navigation item
  const { item, parent } = getActiveNavContext(pathname);

  if (parent) {
    breadcrumbs.push({ label: parent.label, href: parent.href });
  }

  if (item && item.href !== '/') {
    breadcrumbs.push({ label: item.label, href: item.href });
  }

  return breadcrumbs;
};

/**
 * Get design navigation items
 */
const getDesignNavigation = (): NavItem[] => {
  return navigationConfig.designSidebar[0]?.items || [];
};

/**
 * Get templates navigation items
 */
const getTemplatesNavigation = (): NavItem[] => {
  return navigationConfig.templatesSidebar[0]?.items || [];
};

/**
 * Check if path is in design section
 */
const isDesignPath = (pathname: string): boolean => {
  return pathname.startsWith('/design/');
};

/**
 * Check if path is in templates section
 */
const isTemplatesPath = (pathname: string): boolean => {
  return pathname.startsWith('/templates/');
};

// ============================================================================
// EXPORTS
// ============================================================================

export {
  navigationConfig,
  findNavItemByPath,
  isNavItemActive,
  getActiveNavContext,
  generateBreadcrumbs,
  getDesignNavigation,
  getTemplatesNavigation,
  isDesignPath,
  isTemplatesPath,
  createNavItem,
  createNavSection,
  generateDesignNavigation,
  generateTemplatesNavigation
};