'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Menu, X } from 'lucide-react';

interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

interface ConsolidatedNavbarProps {
  navigationItems: NavigationItem[];
  className?: string;
  title?: string;
}

export function ConsolidatedNavbar({
  navigationItems,
  className = '',
  title = 'Navigation'
}: ConsolidatedNavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set());
  const pathname = usePathname();

  const toggleExpanded = (href: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(href)) {
      newExpanded.delete(href);
    } else {
      newExpanded.add(href);
    }
    setExpandedItems(newExpanded);
  };

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  const renderNavigationItem = (item: NavigationItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.href);
    const active = isActive(item.href);

    return (
      <div key={item.href}>
        <div className="flex items-center">
          <Link
            href={item.href}
            className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              active
                ? 'text-primary bg-primary/10'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent'
            } ${level > 0 ? 'ml-4' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
          {hasChildren && (
            <button
              onClick={() => toggleExpanded(item.href)}
              className="p-1 ml-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
            >
              <ChevronRight
                className={`h-4 w-4 transition-transform ${
                  isExpanded ? 'rotate-90' : ''
                }`}
              />
            </button>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div className="mt-1">
            {item.children?.map((child) => renderNavigationItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className={`bg-background border-b ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">{title}</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => renderNavigationItem(item))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
              {navigationItems.map((item) => renderNavigationItem(item))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
