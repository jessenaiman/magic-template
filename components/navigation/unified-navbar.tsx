'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Moon,
  Sun,
  Play,
  Pause,
  RotateCcw,
  Menu,
  LayoutDashboard,
  LogIn,
  Mail,
  User,
  Settings,
  List,
  Square,
  Home,
  FileText,
  Palette,
  Zap,
  Sparkles,
  Type,
  ArrowRightLeft,
  Frame,
  PieChart,
  MapIcon,
  Activity,
  LucideIcon
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { usePreviewContext } from '../preview/preview-context';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import { useTransition } from 'react';
import { navigationConfig, getDesignNavigation, getTemplatesNavigation, generateBreadcrumbs } from '@/config/navigation';
import { useMemo } from 'react';

import { UnifiedBreadcrumbs } from './unified-breadcrumbs';
// Breadcrumb UI primitives (shadcn/ui)
import {
  Breadcrumb as UIBreadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

type SectionType = 'main' | 'design' | 'templates';

interface UnifiedNavbarProps {
  className?: string;
  showPlaybackControls?: boolean;
  showThemeToggle?: boolean;
  showMobileMenu?: boolean;
  persistentState?: boolean;
  showBreadcrumbs?: boolean;
  isLoggedIn?: boolean;
  currentSection?: SectionType;
}

const getIconComponent = (iconName?: string): LucideIcon | null => {
  const iconMap: Record<string, LucideIcon> = {
    LayoutDashboard,
    LogIn,
    Mail,
    User,
    Settings,
    List,
    Square,
    Home,
    FileText,
    Palette,
    Zap,
    Sparkles,
    Type,
    ArrowRightLeft,
    Frame,
    PieChart,
    Map: MapIcon,
    Activity,
  };
  return iconName ? iconMap[iconName] || null : null;
};

function getSectionNavigation(section: SectionType | undefined): import('@/config/navigation').NavItem[] {
  if (section === 'design') return getDesignNavigation();
  if (section === 'templates') return getTemplatesNavigation();
  // Default to mainNav (flattened)
  return navigationConfig.mainNav.flatMap(s => s.items);
}

export function UnifiedNavbar({
  className,
  showPlaybackControls = true,
  showThemeToggle = true,
  showMobileMenu = true,
  persistentState = true,
  showBreadcrumbs = false,
  isLoggedIn = false,
  currentSection = 'main',
}: UnifiedNavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const { state, setPlaying, reset } = usePreviewContext();
  const [mounted, setMounted] = React.useState(false);
  const [isPending, startTransition] = useTransition();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Select navigation items based on section
  const navigationItems = useMemo(() => getSectionNavigation(currentSection), [currentSection]);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Persistent navigation state using cookies
  React.useEffect(() => {
    if (persistentState && mounted) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme && savedTheme !== theme) {
        setTheme(savedTheme);
      }
    }
  }, [mounted, theme, setTheme, persistentState]);

  // Page transition wrapper
  const handleNavigation = (href: string) => {
    startTransition(() => {
      router.push(href);
      setMobileMenuOpen(false);
    });
  };

  // Breadcrumbs
  const breadcrumbs = useMemo(() => generateBreadcrumbs(pathname), [pathname]);

  // Accessibility: keyboard navigation for menu
  const navRef = React.useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  // Auth-dependent menu items
  const authMenu = isLoggedIn
    ? [
        {
          label: 'Profile',
          href: '/profile',
          icon: 'User',
        },
        {
          label: 'Logout',
          href: '/logout',
          icon: 'LogIn',
        },
      ]
    : [
        {
          label: 'Login',
          href: '/login',
          icon: 'LogIn',
        },
      ];

  if (!mounted) {
    return <Skeleton className="h-16 w-full" />;
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
      role="banner"
    >
      <div className="container flex flex-col gap-0 md:flex-row md:items-center md:justify-between h-auto md:h-16 px-4">
        {/* Top row: Brand + Controls */}
        <div className="flex items-center justify-between w-full md:w-auto py-2 md:py-0">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="flex items-center space-x-2 font-bold text-xl hover:opacity-80 transition-opacity"
            aria-label="Home"
          >
            <span>Magic Template</span>
          </Link>
          <div className="flex items-center space-x-2 md:hidden">
            {/* Mobile Controls */}
            {showThemeToggle && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  const newTheme = theme === 'light' ? 'dark' : 'light';
                  setTheme(newTheme);
                  if (persistentState) {
                    localStorage.setItem('theme', newTheme);
                  }
                }}
                className="h-8 w-8 p-0"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
            )}
            {showMobileMenu && (
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    aria-label="Open navigation menu"
                  >
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80" aria-label="Mobile navigation menu">
                  <div className="flex flex-col space-y-4 mt-4">
                    <nav className="flex flex-col space-y-2" aria-label="Mobile navigation">
                      {navigationItems.map((item) => (
                        <div key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                              isActive(item.href)
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-accent hover:text-accent-foreground"
                            )}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigation(item.href);
                            }}
                            tabIndex={0}
                          >
                            {item.icon && (() => {
                              const IconComponent = getIconComponent(item.icon);
                              return IconComponent ? <IconComponent className="h-4 w-4" /> : null;
                            })()}
                            <span>{item.label}</span>
                            {item.badge && (
                              <span className="ml-auto px-2 py-0.5 text-xs bg-primary text-primary-foreground rounded-full">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                          {/* Mobile children */}
                          {item.children && item.children.length > 0 && isActive(item.href) && (
                            <div className="ml-6 mt-2 space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={cn(
                                    "block px-3 py-2 text-sm rounded-sm transition-colors",
                                    isActive(child.href)
                                      ? "bg-accent text-accent-foreground font-medium"
                                      : "hover:bg-accent hover:text-accent-foreground"
                                  )}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation(child.href);
                                  }}
                                  tabIndex={0}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                      {/* Auth menu */}
                      {authMenu.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                            isActive(item.href)
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-accent hover:text-accent-foreground"
                          )}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigation(item.href);
                          }}
                          tabIndex={0}
                        >
                          {item.icon && (() => {
                            const IconComponent = getIconComponent(item.icon);
                            return IconComponent ? <IconComponent className="h-4 w-4" /> : null;
                          })()}
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>

        {/* Breadcrumbs */}
        {showBreadcrumbs && (
          <div className="w-full md:w-auto py-2 md:py-0">
            <UnifiedBreadcrumbs items={breadcrumbs} />
          </div>
        )}

        {/* Desktop Navigation & Controls */}
        <div className="hidden md:flex items-center space-x-6 w-full md:w-auto" ref={navRef} aria-label="Main navigation">
          <nav className="flex items-center space-x-6" role="navigation" aria-label="Primary">
            {navigationItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                  tabIndex={0}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.icon && (() => {
                    const IconComponent = getIconComponent(item.icon);
                    return IconComponent ? <IconComponent className="h-4 w-4" /> : null;
                  })()}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-2 px-2 py-0.5 text-xs bg-primary text-primary-foreground rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
                {/* Dropdown for children */}
                {item.children && item.children.length > 0 && (
                  <div
                    className="absolute top-full left-0 mt-1 w-48 bg-popover border rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                    role="menu"
                    aria-label={`${item.label} submenu`}
                  >
                    <div className="p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block px-3 py-2 text-sm rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                            isActive(child.href)
                              ? "bg-accent text-accent-foreground font-medium"
                              : "hover:bg-accent hover:text-accent-foreground"
                          )}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigation(child.href);
                          }}
                          tabIndex={0}
                          aria-current={isActive(child.href) ? "page" : undefined}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* Auth menu */}
            {authMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.href);
                }}
                tabIndex={0}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.icon && (() => {
                  const IconComponent = getIconComponent(item.icon);
                  return IconComponent ? <IconComponent className="h-4 w-4" /> : null;
                })()}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
          {/* Controls */}
          <div className="flex items-center space-x-2 ml-4">
            {showThemeToggle && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  const newTheme = theme === 'light' ? 'dark' : 'light';
                  setTheme(newTheme);
                  if (persistentState) {
                    localStorage.setItem('theme', newTheme);
                  }
                }}
                className="h-8 w-8 p-0"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
            )}
            {showPlaybackControls && (
              <div className="flex items-center space-x-1 border rounded-md p-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setPlaying(!state.playing)}
                  className="h-8 w-8 p-0"
                  aria-label={state.playing ? "Pause animations" : "Play animations"}
                >
                  {state.playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => reset()}
                  className="h-8 w-8 p-0"
                  aria-label="Reset animations"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Loading indicator for page transitions */}
      {isPending && (
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center" aria-live="polite">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
    </header>
  );
}
