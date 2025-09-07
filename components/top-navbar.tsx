"use client"

import * as React from "react"
import { UnifiedNavbar } from "./navigation/unified-navbar"
import { getDesignNavigation, getTemplatesNavigation } from "@/config/navigation"

const navigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Design",
    href: "/design",
    icon: "Palette",
    children: getDesignNavigation()
  },
  {
    label: "Templates",
    href: "/templates",
    icon: "LayoutDashboard",
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
      showPlaybackControls={true}
      showThemeToggle={true}
      showMobileMenu={true}
      persistentState={true}
      className="border-b"
      currentSection="main"
    />
  )
}
