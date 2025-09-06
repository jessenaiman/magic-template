"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Backgrounds",
    href: "/design/backgrounds",
  },
  {
    label: "Buttons",
    href: "/design/buttons",
  },
  {
    label: "Responsive Design",
    href: "/design/responsive-design",
  },
  {
    label: "Effects",
    href: "/design/effects",
  },
  {
    label: "Page Transitions",
    href: "/design/page-transitions",
  },
  {
    label: "Typography",
    href: "/design/typography",
  },
  {
    label: "Test Report",
    href: "/test-report",
  },
]

export function TopNavbar() {
  return (
    <NavigationMenu className="w-full flex justify-center">
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuLink asChild>
              <Link href={item.href} className="px-4 py-2">
                {item.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <NavigationMenuIndicator />
      <NavigationMenuViewport />
    </NavigationMenu>
  )
}
