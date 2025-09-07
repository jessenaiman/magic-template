"use client"

import * as React from "react"
import { UnifiedNavbar } from "./navigation/unified-navbar"
import { getDesignNavigation } from "@/app/navigation.config"
import { getTemplatesNavigation } from "@/app/templates-navigation.config"
import { Palette, LayoutDashboard } from "lucide-react"

const navigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Design",
    href: "/design",
    icon: Palette,
    children: getDesignNavigation()
  },
  {
    label: "Templates",
    href: "/templates",
    icon: LayoutDashboard,
    children: getTemplatesNavigation()
  },
  {
    label: "Test Report",
    href: "/test-report",
  },
]

export function TopNavbar() {
  return (
    <UnifiedNavbar
      navigationItems={navigationItems}
      showPlaybackControls={true}
      showThemeToggle={true}
      showMobileMenu={true}
      persistentState={true}
      className="border-b"
    />
  )
}
