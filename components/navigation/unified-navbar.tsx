/**
 * Unified Navbar Component using shadcn Navigation Menu
 *
 * This component provides a modern navigation experience using Radix UI Navigation Menu
 * with support for nested menus, keyboard navigation, and responsive design.
 */

'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { usePreviewContext } from '../preview/preview-context';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import { useTransition } from 'react';
import { navigationConfig, type NavItem } from '@/config/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Moon,
  Sun,
  Play,
  Pause,
  RotateCcw,
  Menu,
  LucideIcon,
  ExternalLink,
} from 'lucide-react';

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

// Helper function for consistent icon rendering
const renderIcon = (icon: LucideIcon | undefined, className: string = 'h-4 w-4') => {
  return icon ? React.createElement(icon, { className }) : null;
};

// Check if navigation item is active
const isNavItemActive = (item: NavItem, pathname: string): boolean => {
  if (item.href === pathname) return true;
  if (item.children) {
    return item.children.some(child => isNavItemActive(child, pathname));
  }
  return false;
};

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
  // Ref for the desktop navigation container (must be defined before any early returns)
  const navRef = React.useRef<HTMLDivElement>(null);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Persistent navigation state using localStorage - safer approach for SSR
  React.useEffect(() => {
    if (persistentState && mounted) {
      try {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme && savedTheme !== theme) {
          setTheme(savedTheme);
        }
      } catch (error) {
        // Silently handle localStorage errors (e.g., in SSR or private browsing)
        console.warn('Failed to access localStorage for theme:', error);
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

  // Auth-dependent menu items
  const authMenu = isLoggedIn
    ? navigationConfig.authNav.authenticated
    : navigationConfig.authNav.unauthenticated;

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
                      {navigationConfig.mainNav.map((item) => (
                        <div key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                              isNavItemActive(item, pathname)
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-accent hover:text-accent-foreground"
                            )}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigation(item.href);
                            }}
                            tabIndex={0}
                          >
                            {renderIcon(item.icon)}
                            <span>{item.label}</span>
                            {item.external && <ExternalLink className="h-3 w-3 ml-1" />}
                          </Link>
                          {/* Mobile children */}
                          {item.children && item.children.length > 0 && isNavItemActive(item, pathname) && (
                            <div className="ml-6 mt-2 space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={cn(
                                    "block px-3 py-2 text-sm rounded-sm transition-colors",
                                    isNavItemActive(child, pathname)
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
                                  {child.external && <ExternalLink className="h-3 w-3 ml-1 inline" />}
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
                            isNavItemActive(item, pathname)
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-accent hover:text-accent-foreground"
                          )}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigation(item.href);
                          }}
                          tabIndex={0}
                        >
                          {renderIcon(item.icon)}
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

        {/* Desktop Navigation using shadcn Navigation Menu */}
        <div className="hidden md:flex items-center space-x-6 w-full md:w-auto" ref={navRef} aria-label="Main navigation">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationConfig.mainNav.map((item) => (
                <NavigationMenuItem key={item.href}>
                  {item.children && item.children.length > 0 ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn(
                          navigationMenuTriggerStyle(),
                          isNavItemActive(item, pathname) && "bg-accent text-accent-foreground"
                        )}
                        onClick={() => handleNavigation(item.href)}
                      >
                        {renderIcon(item.icon, "h-4 w-4 mr-2")}
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                          <div className="grid gap-1">
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                  isNavItemActive(item, pathname) && "bg-accent text-accent-foreground"
                                )}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleNavigation(item.href);
                                }}
                              >
                                <div className="text-sm font-medium leading-none">
                                  {item.label} Overview
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </div>
                          <div className="grid gap-1">
                            {item.children.map((child) => (
                              <NavigationMenuLink key={child.href} asChild>
                                <Link
                                  href={child.href}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    isNavItemActive(child, pathname) && "bg-accent text-accent-foreground"
                                  )}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation(child.href);
                                  }}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="text-sm font-medium leading-none">
                                      {child.label}
                                    </div>
                                    {child.external && <ExternalLink className="h-3 w-3" />}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {child.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none  focus-visible:ring-[3px] focus-visible:outline-1",
                          isNavItemActive(item, pathname) && "bg-accent text-accent-foreground"
                        )}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation(item.href);
                        }}
                      >
                        {renderIcon(item.icon, "h-4 w-4 mr-2")}
                        {item.label}
                        {item.external && <ExternalLink className="h-3 w-3 ml-1" />}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}

              {/* Auth menu */}
              {authMenu.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none  focus-visible:ring-[3px] focus-visible:outline-1",
                        isNavItemActive(item, pathname) && "bg-accent text-accent-foreground"
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.href);
                      }}
                    >
                      {renderIcon(item.icon, "h-4 w-4 mr-2")}
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

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
