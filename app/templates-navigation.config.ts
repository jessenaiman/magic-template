export interface NavItem {
  label: string;
  href: string;
  icon?: string; // Changed from React.ElementType to string
  description?: string;
  children?: NavItem[];
  badge?: string;
}

// Templates navigation structure
export const templatesNavigation: NavItem[] = [
  {
    label: "Dashboard",
    href: "/templates/dashboard",
    icon: "LayoutDashboard",
    description: "Comprehensive dashboard layouts with data visualization"
  },
  {
    label: "Login",
    href: "/templates/login",
    icon: "LogIn",
    description: "Authentication forms and login interfaces"
  },
  {
    label: "Contact",
    href: "/templates/contact",
    icon: "Mail",
    description: "Contact forms and feedback interfaces"
  }
];

// Extended navigation for future templates
export const extendedTemplatesNavigation: NavItem[] = [
  ...templatesNavigation,
  {
    label: "Profile",
    href: "/templates/profile",
    icon: "User",
    description: "User profile pages with editable fields"
  },
  {
    label: "Settings",
    href: "/templates/settings",
    icon: "Settings",
    description: "Application settings and preferences"
  },
  {
    label: "List View",
    href: "/templates/list",
    icon: "List",
    description: "Data tables and list interfaces"
  },
  {
    label: "Modal",
    href: "/templates/modal",
    icon: "Square",
    description: "Modal dialogs and overlays"
  },
  {
    label: "Landing",
    href: "/templates/landing",
    icon: "Home",
    description: "Hero sections and landing pages"
  },
  {
    label: "404",
    href: "/templates/404",
    icon: "FileText",
    description: "Error pages and not found states"
  }
];

// Utility functions for templates navigation
export const getTemplatesNavigation = (): NavItem[] => {
  return templatesNavigation;
};

export const getExtendedTemplatesNavigation = (): NavItem[] => {
  return extendedTemplatesNavigation;
};

export const findTemplateByPath = (pathname: string): NavItem | null => {
  const allTemplates = getExtendedTemplatesNavigation();
  return allTemplates.find(item => item.href === pathname) || null;
};

export const isTemplateActive = (pathname: string): boolean => {
  return pathname.startsWith('/templates/');
};

export const getTemplateTitle = (pathname: string): string => {
  const template = findTemplateByPath(pathname);
  return template?.label || 'Template';
};

export const getTemplateDescription = (pathname: string): string => {
  const template = findTemplateByPath(pathname);
  return template?.description || '';
};
