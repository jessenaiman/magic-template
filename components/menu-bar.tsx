"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { cn } from "@/lib/utils"
import { Icons } from "./icons"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface MenuItem {
  icon: keyof typeof Icons
  label: string
  href: string
  description?: string
}

// Update this array to match your [category] folders under app/design/[category]
const designCategories: Array<{ icon: keyof typeof Icons; label: string; category: string; description: string }> = [
  { icon: "palette", label: "Animations", category: "animations", description: "Animated design components and patterns" },
  { icon: "palette", label: "Backgrounds", category: "backgrounds", description: "Dynamic backgrounds and patterns" },
  { icon: "button", label: "Buttons", category: "buttons", description: "Interactive button components" },
  { icon: "layout", label: "Responsive Design", category: "responsive-design", description: "Adaptive layouts and components" },
  { icon: "sparkles", label: "Effects", category: "effects", description: "Visual effects and animations" },
  { icon: "transition", label: "Transitions", category: "transitions", description: "Navigation transitions and animations" },
  { icon: "text", label: "Text", category: "text", description: "Typography and text effects" },
]

const menuItems: MenuItem[] = [
  {
    icon: "home",
    label: "Home",
    href: "/",
    description: "Return to the homepage"
  },
  ...designCategories.map((cat) => ({
    icon: cat.icon,
    label: cat.label,
    href: `/design/${cat.category}`,
    description: cat.description
  })),
  {
    icon: "template",
    label: "Templates",
    href: "/templates",
    description: "Starter templates and layouts"
  },
  {
    icon: "activity",
    label: "Test Report",
    href: "/test-report",
    description: "Comprehensive test results and metrics"
  },
]

function MenuLink({ item, isActive }: { item: MenuItem; isActive: boolean }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const radius = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLAnchorElement>) {
    const bounds = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - bounds.left)
    mouseY.set(clientY - bounds.top)
    radius.set(Math.sqrt(Math.pow(bounds.width, 2) + Math.pow(bounds.height, 2)) / 2.5)
  }

  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, var(--menu-glow) 0%, transparent 65%)`

  const Icon = Icons[item.icon]

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={item.href}
          className={cn(
            "group relative size-12 rounded-full p-2 transition-all",
            isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"
          )}
          onMouseMove={onMouseMove}
        >
          <motion.span
            className="absolute inset-0 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
            style={{ background }}
            aria-hidden="true"
          />
          <Icon className="size-8" />
          <span className="sr-only">{item.label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p>{item.label}</p>
        {item.description && <p className="text-muted-foreground text-xs">{item.description}</p>}
      </TooltipContent>
    </Tooltip>
  )
}

export function MenuBar() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-4 left-1/2 z-[100] -translate-x-1/2 rounded-full border bg-background/80 p-1 shadow-lg backdrop-blur-md"
      style={{ 
        WebkitBackdropFilter: "blur(16px)",
        touchAction: "none",
        userSelect: "none"
      }}
    >
      <div className="flex items-center gap-1">
        {menuItems.map((item) => (
          <div key={item.label}>
            <MenuLink item={item} isActive={pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))} />
          </div>
        ))}
      </div>
    </nav>
  )
}
