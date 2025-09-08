/**
 * Desktop Navigation Component
 * Handles desktop-specific navigation rendering using shadcn Navigation Menu
 */

'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navigationConfig } from '@/config/navigation';
import { isNavItemActive, renderIcon } from '@/lib/navigation-utils';
import type { NavItem } from '@/lib/navigation-utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ExternalLink } from 'lucide-react';



interface DesktopNavigationProps {
  onNavigate: (href: string) => void;
}

export function DesktopNavigation({ onNavigate }: DesktopNavigationProps): React.JSX.Element {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationConfig.mainNav.map((item: NavItem) => (
          <NavigationMenuItem key={item.href}>
            {item.children && item.children.length > 0 ? (
              <>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isNavItemActive(item, pathname) && "bg-accent text-accent-foreground"
                  )}
                  onClick={() => onNavigate(item.href)}
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
                            onNavigate(item.href);
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
                      {item.children.map((child: NavItem) => (
                        <NavigationMenuLink key={child.href} asChild>
                          <Link
                            href={child.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              isNavItemActive(child, pathname) && "bg-accent text-accent-foreground"
                            )}
                            onClick={(e) => {
                              e.preventDefault();
                              onNavigate(child.href);
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
                    onNavigate(item.href);
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
      </NavigationMenuList>
    </NavigationMenu>
  );
}
