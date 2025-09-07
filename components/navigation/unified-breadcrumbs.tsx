'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTransition } from 'react';
import { generateBreadcrumbs } from '@/config/navigation';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface UnifiedBreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
  separator?: React.ReactNode;
  'aria-label'?: string;
}

export function UnifiedBreadcrumbs({
  items,
  className,
  separator = <ChevronRight className="h-4 w-4" />,
  'aria-label': ariaLabel = 'Breadcrumb',
}: UnifiedBreadcrumbsProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Always use config-driven breadcrumbs unless explicit items are passed
  const breadcrumbItems = React.useMemo(() => {
    if (items) return items;
    return generateBreadcrumbs(pathname);
  }, [items, pathname]);

  const handleNavigation = (href: string) => {
    startTransition(() => {
      router.push(href);
    });
  };

  if (!breadcrumbItems || breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <nav
      className={cn("flex items-center space-x-1 text-sm text-muted-foreground", className)}
      aria-label={ariaLabel}
      role="navigation"
    >
      <ol className="flex items-center space-x-1" tabIndex={0}>
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          const isHome = item.href === '/';

          return (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <span className="flex items-center text-muted-foreground/50" aria-hidden="true">
                  {separator}
                </span>
              )}

              {isLast ? (
                <span
                  className="font-medium text-foreground outline-none"
                  aria-current="page"
                  tabIndex={0}
                >
                  {isHome ? <Home className="h-4 w-4" /> : item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isPending && "pointer-events-none opacity-50"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                  tabIndex={0}
                  aria-label={isHome ? 'Home' : item.label}
                >
                  {isHome ? <Home className="h-4 w-4" /> : item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
