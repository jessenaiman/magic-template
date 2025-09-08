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
  LogIn,
  Mail,
} from 'lucide-react';

/**
 * Navigation configuration data - simplified to just data, no logic
 */
export type NavItem = {
  label: string;
  href: string;
  icon?: LucideIcon;
  description?: string;
  children?: NavItem[];
  external?: boolean;
  badge?: string;
};

export type NavigationSection = NavItem[];

export type NavigationConfig = {
  mainNav: NavigationSection;
  authNav: {
    authenticated: NavigationSection;
    unauthenticated: NavigationSection;
  };
};

export const navigationConfig: NavigationConfig = {
  mainNav: [
    {
      label: 'Home',
      href: '/',
      icon: Home,
      description: 'Go to homepage'
    },
    {
      label: 'Design',
      href: '/design',
      icon: Palette,
      description: 'Design system and components',
      children: [
        {
          label: 'Getting Started',
          href: '/design/getting-started',
          description: 'Introduction to the design system'
        },
        {
          label: 'Components',
          href: '/design/components',
          description: 'Available UI components'
        },
        {
          label: 'Patterns',
          href: '/design/patterns',
          description: 'Common design patterns'
        }
      ]
    },
    {
      label: 'Templates',
      href: '/templates',
      icon: Frame,
      description: 'Template library',
      children: [
        {
          label: 'Web Pages',
          href: '/templates/pages',
          description: 'Pre-built page templates'
        },
        {
          label: 'Components',
          href: '/templates/components',
          description: 'Component templates'
        }
      ]
    },
    {
      label: 'Projects',
      href: '/projects',
      icon: Activity,
      description: 'External project resources',
      children: [
        {
          label: 'Event Planning & Game Hosting',
          href: '/projects/event-planning',
          description: 'External event planning workshop',
          external: true
        },
        {
          label: 'D&D and Tabletop Games',
          href: '/projects/tabletop-games',
          description: 'External D&D workshop',
          external: true
        },
        {
          label: 'AI & Machine Learning',
          href: '/projects/ai-ml',
          description: 'External AI workshop',
          external: true
        }
      ]
    },
    {
      label: 'Testing',
      href: '/test-report',
      icon: Activity,
      description: 'Quality assurance resources'
    }
  ],

  authNav: {
    authenticated: [
      {
        label: 'Profile',
        href: '/profile',
        icon: User
      },
      {
        label: 'Settings',
        href: '/settings',
        icon: Settings
      },
      {
        label: 'Logout',
        href: '/logout',
        icon: LogIn
      }
    ],
    unauthenticated: [
      {
        label: 'Login',
        href: '/login',
        icon: LogIn
      }
    ]
  }
};