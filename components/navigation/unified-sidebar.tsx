'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  ChevronRight,
  ChevronDown,
  ChevronLeft,
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
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
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

type NavType = "main" | "design" | "templates";

interface UnifiedSidebarProps {
  navType: NavType;
  className?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  showIcons?: boolean;
  showDescriptions?: boolean;
  mobileBreakpoint?: number; // px, default 1024
}

import {
  getDesignNavigation,
  getTemplatesNavigation,
  navigationConfig,
} from "@/config/navigation";
import { useIsMobile } from "@/hooks/use-mobile";

export function UnifiedSidebar({
  navType,
  className,
  collapsible = true,
  defaultCollapsed = false,
  showIcons = true,
  showDescriptions = true,
  mobileBreakpoint = 1024,
}: UnifiedSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);
  const [isPending, startTransition] = useTransition();
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set());
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Responsive: detect mobile
  const isMobile = useIsMobile();

  // Dynamically select navigation items
  let items: NavigationItem[] = [];
  if (navType === "design") items = getDesignNavigation();
  else if (navType === "templates") items = getTemplatesNavigation();
  else if (navType === "main") items = navigationConfig.mainNav.flatMap(s => s.items);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-expand active items
  React.useEffect(() => {
    const activeParents = new Set<string>();
    const findActiveParents = (navItems: NavigationItem[], parentHref?: string) => {
      for (const item of navItems) {
        if (pathname.startsWith(item.href) && item.children) {
          if (parentHref) activeParents.add(parentHref);
          findActiveParents(item.children, item.href);
        }
      }
    };
    findActiveParents(items);
    setExpandedItems(activeParents);
  }, [pathname, items]);

  // Close mobile overlay on route change
  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Page transition wrapper
  const handleNavigation = (href: string) => {
    startTransition(() => {
      router.push(href);
    });
  };

  const toggleExpanded = (href: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(href)) {
        newSet.delete(href);
      } else {
        newSet.add(href);
      }
      return newSet;
    });
  };

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  // Keyboard navigation: handle arrow keys and enter/space for expand/collapse
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    item: NavigationItem,
    hasChildren: boolean,
    isExpanded: boolean
  ) => {
    if (!hasChildren) return;
    if (e.key === "ArrowRight" && !isExpanded) {
      e.preventDefault();
      toggleExpanded(item.href);
    }
    if (e.key === "ArrowLeft" && isExpanded) {
      e.preventDefault();
      toggleExpanded(item.href);
    }
    if ((e.key === "Enter" || e.key === " ") && hasChildren) {
      e.preventDefault();
      toggleExpanded(item.href);
    }
  };

  const renderNavItem = (item: NavigationItem, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.href);
    const active = isActive(item.href);

    return (
      <div
        key={item.href}
        className="space-y-1"
        role="none"
      >
        <div
          className="flex items-center"
          tabIndex={-1}
          role="treeitem"
          aria-expanded={hasChildren ? isExpanded : undefined}
          aria-current={active ? "page" : undefined}
          aria-label={item.label}
          onKeyDown={e => handleKeyDown(e, item, hasChildren, !!isExpanded)}
        >
          <Link
            href={item.href}
            className={cn(
              "flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary",
              active
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent hover:text-accent-foreground",
              depth > 0 && "ml-4"
            )}
            tabIndex={0}
            aria-label={item.label}
            aria-current={active ? "page" : undefined}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation(item.href);
            }}
          >
            <div className="flex items-center space-x-2 min-w-0 flex-1">
              {showIcons && item.icon && (() => {
                const IconComponent = getIconComponent(item.icon);
                return IconComponent ? <IconComponent className="h-4 w-4 flex-shrink-0" /> : null;
              })()}
              <span className="truncate">{item.label}</span>
              {item.badge && (
                <span className="ml-2 px-1.5 py-0.5 text-xs bg-primary text-primary-foreground rounded-full flex-shrink-0">
                  {item.badge}
                </span>
              )}
            </div>
          </Link>

          {hasChildren && collapsible && (
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 ml-1 flex-shrink-0"
              onClick={() => toggleExpanded(item.href)}
              aria-label={isExpanded ? "Collapse" : "Expand"}
              tabIndex={0}
            >
              {isExpanded ? (
                <ChevronDown className="h-3 w-3" />
              ) : (
                <ChevronRight className="h-3 w-3" />
              )}
            </Button>
          )}
        </div>

        {showDescriptions && item.description && active && (
          <p className="text-xs text-muted-foreground ml-3 mb-2">
            {item.description}
          </p>
        )}

        {hasChildren && (!collapsible || isExpanded) && (
          <div className="ml-2 space-y-1" role="group">
            {item.children!.map(child => renderNavItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  if (!mounted) {
    return (
      <div className={cn("space-y-4", className)}>
        <Skeleton className="h-4 w-24" />
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-full" />
          ))}
        </div>
      </div>
    );
  }

  // Mobile overlay
  if (isMobile) {
    return (
      <>
        <Button
          className="fixed top-4 left-4 z-40 md:hidden"
          variant="outline"
          aria-label="Open sidebar navigation"
          onClick={() => setMobileOpen(true)}
        >
          <span className="sr-only">Open navigation</span>
          <List className="h-5 w-5" />
        </Button>
        <div
          className={cn(
            "fixed inset-0 z-50 bg-black/40 transition-opacity",
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          aria-hidden={!mobileOpen}
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            "fixed top-0 left-0 z-50 h-full w-72 bg-background shadow-lg transition-transform duration-300 ease-in-out md:hidden",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Sidebar navigation"
        >
          <ScrollArea className="flex-1 h-full">
            <nav className="space-y-2 p-4" role="tree" aria-label="Sidebar navigation">
              {items.map(item => renderNavItem(item))}
            </nav>
          </ScrollArea>
          <Button
            className="absolute top-4 right-4"
            variant="ghost"
            aria-label="Close sidebar navigation"
            onClick={() => setMobileOpen(false)}
          >
            <span className="sr-only">Close navigation</span>
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </aside>
      </>
    );
  }

  // Desktop sidebar
  return (
    <div className={cn("flex flex-col h-full", className)} role="complementary" aria-label="Sidebar navigation">
      <ScrollArea className="flex-1">
        <nav className="space-y-2 p-4" role="tree" aria-label="Sidebar navigation">
          {items.map(item => renderNavItem(item))}
        </nav>
      </ScrollArea>

      {/* Loading indicator */}
      {isPending && (
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center rounded-md">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  );
}
