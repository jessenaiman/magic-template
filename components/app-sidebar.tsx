'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { mainNavigation, type NavItem, getBreadcrumbItems } from '@/app/navigation.config';

function NavMenuItem({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href + '/'));
  const hasChildren = item.children && item.children.length > 0;

  return (
    <SidebarMenuItem>
      {hasChildren ? (
        <>
          <SidebarMenuButton asChild>
            <Link href={item.href} className={cn(isActive && 'bg-accent text-accent-foreground')}>
              {item.icon && <item.icon className="h-4 w-4" />}
              <span>{item.label}</span>
              <ChevronRight className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/sidebar-menu-item:rotate-90" />
            </Link>
          </SidebarMenuButton>
          <SidebarMenuSub>
            {item.children?.map((child) => (
              <SidebarMenuSubItem key={child.href}>
                <SidebarMenuSubButton asChild>
                  <Link
                    href={child.href}
                    className={cn(pathname === child.href && 'bg-accent text-accent-foreground')}
                  >
                    <span>{child.label}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </>
      ) : (
        <SidebarMenuButton asChild>
          <Link href={item.href} className={cn(isActive && 'bg-accent text-accent-foreground')}>
            {item.icon && <item.icon className="h-4 w-4" />}
            <span>{item.label}</span>
          </Link>
        </SidebarMenuButton>
      )}
    </SidebarMenuItem>
  );
}

function Breadcrumbs() {
  const pathname = usePathname();
  const breadcrumbItems = getBreadcrumbItems(pathname);

  if (breadcrumbItems.length <= 1) {
    return null; // Don't show breadcrumbs on home page
  }

  return (
    <div className="px-4 py-3 border-b border-border">
      <nav className="flex items-center gap-1 text-sm text-muted-foreground">
        {breadcrumbItems.map((item, index) => (
          <div key={item.href} className="flex items-center gap-1">
            {index > 0 && <ChevronRight className="h-3 w-3" />}
            <Link
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground",
                index === breadcrumbItems.length - 1 && "text-foreground font-medium"
              )}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}

export function AppSidebar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  // SidebarProvider controls open/collapsed state; Sidebar does not accept defaultOpen.
  return (
    <Sidebar>
      <SidebarHeader className="p-0 border-none">
        <Breadcrumbs />
      </SidebarHeader>
      <SidebarContent>
        {mainNavigation.map((section) => (
          <SidebarGroup key={section.label}>
            <SidebarGroupLabel>{section.label}</SidebarGroupLabel>
            <SidebarMenu>
              {section.items.map((item) => (
                <NavMenuItem key={item.href} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}