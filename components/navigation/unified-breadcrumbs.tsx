'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { getBreadcrumbItems } from '@/config/navigation';

interface UnifiedBreadcrumbsProps {
  className?: string;
  separator?: React.ReactNode;
  'aria-label'?: string;
}

export function UnifiedBreadcrumbs({
  className,
  separator,
  'aria-label': ariaLabel = 'Breadcrumb',
}: UnifiedBreadcrumbsProps) {
  const pathname = usePathname();
  const items = getBreadcrumbItems(pathname);

  if (!items || items.length <= 1) return null;

  return (
    <Breadcrumb className={className} aria-label={ariaLabel}>
      <BreadcrumbList>
        {items.map((item: { label: string; href: string }, idx: number) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={item.href}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && (
                <BreadcrumbSeparator>
                  {separator}
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
