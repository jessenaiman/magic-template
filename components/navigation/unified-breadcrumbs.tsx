'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTransition } from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface UnifiedBreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
  showHome?: boolean;
  separator?: React.ReactNode;
}

export function UnifiedBreadcrumbs({
  items,
  className,
  showHome = true,
  separator = <ChevronRight className="h-4 w-4" />
}: UnifiedBreadcrumbsProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Generate breadcrumbs from pathname if not provided
  const breadcrumbItems = React.useMemo(() => {
    if (items) return items;

    const breadcrumbs: BreadcrumbItem[] = [];
    const pathParts = pathname.split('/').filter(Boolean);

    if (showHome) {
      breadcrumbs.push({ label: 'Home', href: '/' });
    }

    let currentPath = '';
    pathParts.forEach((part, index) => {
      currentPath += `/${part}`;
      const label = part.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');

      // Don't add the current page as a link
      if (index === pathParts.length - 1) {
        breadcrumbs.push({ label, href: currentPath });
      } else {
        breadcrumbs.push({ label, href: currentPath });
      }
    });

    return breadcrumbs;
  }, [items, pathname, showHome]);

  const handleNavigation = (href: string) => {
    startTransition(() => {
      router.push(href);
    });
  };

  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <nav
      className={cn("flex items-center space-x-1 text-sm text-muted-foreground", className)}
      aria-label="Breadcrumb"
    >
      {breadcrumbItems.map((item, index) => {
        const isLast = index === breadcrumbItems.length - 1;
        const isHome = item.href === '/';

        return (
          <React.Fragment key={item.href}>
            {index > 0 && (
              <span className="flex items-center text-muted-foreground/50">
                {separator}
              </span>
            )}

            {isLast ? (
              <span
                className="font-medium text-foreground"
                aria-current="page"
              >
                {isHome ? <Home className="h-4 w-4" /> : item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  "flex items-center hover:text-foreground transition-colors",
                  isPending && "pointer-events-none opacity-50"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.href);
                }}
              >
                {isHome ? <Home className="h-4 w-4" /> : item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
