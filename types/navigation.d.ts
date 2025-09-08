declare module '@/config/navigation' {
  export interface NavItem {
    title: string;
    href: string;
    type?: 'link' | 'dropdown';
    description?: string;
    items?: NavItem[];
    disabled?: boolean;
    external?: boolean;
  }

  export interface NavigationConfig {
    mainNav: NavItem[];
  }

  const config: NavigationConfig;
  export default config;
}
