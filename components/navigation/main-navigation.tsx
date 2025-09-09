"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { NAVIGATION_CONFIG } from "@/config/navigation"
import { isNavItemActive, renderIcon, type NavItem } from "@/lib/navigation-utils"
import { ExternalLink } from "lucide-react"

export function MainNavigation() {
  const pathname = usePathname()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {NAVIGATION_CONFIG.mainNav.map((item: NavItem) => (
          <NavigationMenuItem key={item.href}>
            {item.children && item.children.length > 0 ? (
              // Dropdown navigation for items with children
              <>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isNavItemActive(item, pathname) && "bg-accent text-accent-foreground"
                  )}
                >
                  {renderIcon(item.icon, "h-4 w-4 mr-2")}
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                    {/* Parent item overview */}
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          {item.label} Overview
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {item.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>

                    {/* Child items */}
                    <div className="grid gap-1">
                      {item.children.map((child: NavItem) => (
                        <NavigationMenuLink key={child.href} asChild>
                          <Link
                            href={child.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              isNavItemActive(child, pathname) && "bg-accent text-accent-foreground"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {child.label}
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
              // Simple link for items without children
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isNavItemActive(item, pathname) && "bg-accent text-accent-foreground"
                  )}
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
  )
}
