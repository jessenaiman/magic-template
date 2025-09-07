'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  ChevronRight,
  ChevronDown,
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

interface UnifiedSidebarProps {
  items: NavigationItem[];
  className?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  showIcons?: boolean;
  showDescriptions?: boolean;
}

export function UnifiedSidebar({
  items,
  className,
  collapsible = true,
  defaultCollapsed = false,
  showIcons = true,
  showDescriptions = true
}: UnifiedSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);
  const [isPending, startTransition] = useTransition();
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set());

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

  const renderNavItem = (item: NavigationItem, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.href);
    const active = isActive(item.href);

    return (
      <div key={item.href} className="space-y-1">
        <div className="flex items-center">
          <Link
            href={item.href}
            className={cn(
              "flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md transition-colors",
              active
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent hover:text-accent-foreground",
              depth > 0 && "ml-4"
            )}
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
          <div className="ml-2 space-y-1">
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

  return (
    <div className={cn("flex flex-col h-full", className)}>
      <ScrollArea className="flex-1">
        <nav className="space-y-2 p-4">
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
