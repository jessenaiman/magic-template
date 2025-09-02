"use client"

import * as React from "react"
import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { usePathname } from "next/navigation"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { mainNavigation } from "@/navigation.config"

// Base (sample) user / team / project data (unchanged UI)
const baseContextData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

// Runtime transform so we can use pathname for active state
// Design requirement: Promote each Design child category to its own top-level entry.
function buildNav(pathname: string) {
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(href + "/")
  }

  const result: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: { title: string; url: string }[]
  }[] = []

  for (const item of mainNavigation) {
    // Promote Design's children
    if (item.label === "Design" && item.children) {
      for (const child of item.children) {
        const subItems =
          child.children?.map((gc) => ({
            title: gc.label,
            url: gc.href,
          })) ?? undefined
        result.push({
          title: child.label,
          url: child.href,
          // Optionally reuse the parent icon. Omitted to keep UI minimal; add `icon: item.icon as LucideIcon` if desired.
          isActive: isActive(child.href),
          items: subItems,
        })
      }
      continue
    }

    // Normal (non-Design) item handling (one-level flatten like before)
    const subItems = item.children
      ? item.children.map((child) => ({
          title: child.label,
          url: child.href,
        }))
      : undefined

    result.push({
      title: item.label,
      url: item.href,
      icon: item.icon as LucideIcon,
      isActive: isActive(item.href),
      items: subItems,
    })
  }

  return result
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const navMain = React.useMemo(() => buildNav(pathname), [pathname])

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={baseContextData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
        <NavProjects projects={baseContextData.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={baseContextData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
