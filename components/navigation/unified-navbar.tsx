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
  X,
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

interface NavigationItem {
  label: string;
  href: string;
  icon?: string; // Changed from React.ElementType to string
  description?: string;
  children?: NavigationItem[];
  badge?: string;
}

// Icon mapping function
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

interface UnifiedNavbarProps {
  className?: string;
  navigationItems?: NavigationItem[];
  showPlaybackControls?: boolean;
  showThemeToggle?: boolean;
  showMobileMenu?: boolean;
  persistentState?: boolean;
}

export function UnifiedNavbar({
  className,
  navigationItems = [],
  showPlaybackControls = true,
  showThemeToggle = true,
  showMobileMenu = true,
  persistentState = true
}: UnifiedNavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const { state, setPlaying, reset } = usePreviewContext();
  const [mounted, setMounted] = React.useState(false);
  const [isPending, startTransition] = useTransition();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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

  // Extract page title from pathname
  const getPageTitle = () => {
    const pathParts = pathname.split('/').filter(Boolean);
    if (pathParts.length === 0) return 'Home';

    // Handle templates
    if (pathParts[0] === 'templates') {
      if (pathParts.length === 1) return 'Templates';
      return pathParts[1].charAt(0).toUpperCase() + pathParts[1].slice(1) + ' Template';
    }

    // Handle design
    if (pathParts[0] === 'design') {
      if (pathParts.length === 1) return 'Design';
      return pathParts[1].split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
    }

    return pathParts[pathParts.length - 1].split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  if (!mounted) {
    return <Skeleton className="h-16 w-full" />;
  }

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      className
    )}>
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex items-center space-x-2 font-bold text-xl hover:opacity-80 transition-opacity"
          >
            <span>Magic Template</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  "flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.href);
                }}
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
                <div className="absolute top-full left-0 mt-1 w-48 bg-popover border rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-2">
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
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          {showThemeToggle && (
            <div className="flex items-center space-x-1 border rounded-md p-1">
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
                {theme === 'light' ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>
            </div>
          )}

          {/* Playback Controls */}
          {showPlaybackControls && (
            <div className="flex items-center space-x-1 border rounded-md p-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setPlaying(!state.playing)}
                className="h-8 w-8 p-0"
                aria-label={state.playing ? "Pause animations" : "Play animations"}
              >
                {state.playing ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
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

          {/* Mobile Menu */}
          {showMobileMenu && (
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden h-8 w-8 p-0"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-4">
                  <div className="font-semibold text-lg">{getPageTitle()}</div>
                  <nav className="flex flex-col space-y-2">
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
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>

      {/* Loading indicator for page transitions */}
      {isPending && (
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
    </header>
  );
}
