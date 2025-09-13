'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/src/app/lib/utils';

const designCategories = [
  {
    name: 'Backgrounds',
    href: '/design/backgrounds',
  },
  {
    name: 'Buttons',
    href: '/design/buttons',
  },
  {
    name: 'Effects',
    href: '/design/effects',
  },
  {
    name: 'Page Transitions',
    href: '/design/page-transitions',
  },
  {
    name: 'Responsive Design',
    href: '/design/responsive-design',
  },
  {
    name: 'Text',
    href: '/design/text',
  },
];

export function DesignNavigation() {
  const pathname = usePathname();
  
  return (
    <div className="mb-8 border-b border-border pb-4">
      <nav className="flex space-x-4 overflow-x-auto">
        {designCategories.map((category) => {
          const isActive = pathname.startsWith(category.href);
          return (
            <Link
              key={category.name}
              href={category.href}
              className={cn(
                'whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors hover:text-foreground',
                isActive
                  ? 'border-b-2 border-foreground text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {category.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
