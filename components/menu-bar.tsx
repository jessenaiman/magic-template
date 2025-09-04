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

const menuItems: MenuItem[] = [
  {
    icon: "home",
    label: "Home",
    href: "/",
    description: "Return to the homepage"
  },
  {
    icon: "palette",
    label: "Backgrounds",
    href: "/design/backgrounds",
    description: "Dynamic backgrounds and patterns"
  },
  {
    icon: "button",
    label: "Buttons",
    href: "/design/buttons",
    description: "Interactive button components"
  },
  {
    icon: "layout",
    label: "Responsive Design",
    href: "/design/responsive-design",
    description: "Adaptive layouts and components"
  },
  {
    icon: "sparkles",
    label: "Effects",
    href: "/design/effects",
    description: "Visual effects and animations"
  },
  {
    icon: "transition",
    label: "Page Transitions",
    href: "/design/page-transitions",
    description: "Smooth page transitions"
  },
  {
    icon: "text",
    label: "Text",
    href: "/design/text",
    description: "Typography and text effects"
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
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link 
            href={item.href} 
            className={cn(
              "relative flex h-9 w-9 items-center justify-center rounded-md border",
              "transition-colors hover:bg-accent",
              isActive ? "border-border bg-accent" : "border-transparent"
            )}
            onMouseMove={onMouseMove}
          >
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-md opacity-0 transition-opacity hover:opacity-100"
              style={{ background }}
            />
            <Icon className="h-4 w-4" />
            <span className="sr-only">{item.label}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="bottom" sideOffset={10}>
          <p className="text-sm">{item.label}</p>
          {item.description && (
            <p className="text-xs text-muted-foreground">{item.description}</p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function MenuBar() {
  const pathname = usePathname()

  return (
    <nav 
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full border bg-background/80 p-1 shadow-lg backdrop-blur-md"
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
          )
        })}
      </ul>
    </motion.nav>
  )
}
