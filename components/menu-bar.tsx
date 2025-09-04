"use client"

import type * as React from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { mainNavigation } from "@/app/navigation.config"

interface MenuItem {
  icon: React.ReactNode
  label: string
  href: string
  gradient: string
  iconColor: string
}

// Map icons for menu items
const iconMap = {
  Home: () => <span className="h-5 w-5">🏠</span>,
  Backgrounds: () => <span className="h-5 w-5">🎨</span>,
  Buttons: () => <span className="h-5 w-5">🔘</span>,
  "Responsive Design": () => <span className="h-5 w-5">📱</span>,
  Effects: () => <span className="h-5 w-5">✨</span>,
  "Page Transitions": () => <span className="h-5 w-5">🔄</span>,
  Text: () => <span className="h-5 w-5">📝</span>,
}

// Gradient and color definitions
const gradients = {
  blue: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
  purple: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
  green: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(21,128,61,0.06) 50%, rgba(22,101,52,0) 100%)",
  amber: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(217,119,6,0.06) 50%, rgba(180,83,9,0) 100%)",
  rose: "radial-gradient(circle, rgba(244,63,94,0.15) 0%, rgba(225,29,72,0.06) 50%, rgba(190,18,60,0) 100%)",
  pink: "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(219,39,119,0.06) 50%, rgba(201,17,95,0) 100%)",
  cyan: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(8,145,178,0.06) 50%, rgba(5,124,154,0) 100%)",
}

const iconColors = {
  blue: "text-blue-500",
  purple: "text-purple-500",
  green: "text-green-500",
  amber: "text-amber-500",
  rose: "text-rose-500",
  pink: "text-pink-500",
  cyan: "text-cyan-500",
}

// Get menu items from navigation config
function getMenuItems(): MenuItem[] {
  const designNav = mainNavigation.find(section => section.label === "Design")?.items || []
  
  const items: MenuItem[] = [
    {
      icon: iconMap.Home(),
      label: "Home",
      href: "/",
      gradient: gradients.blue,
      iconColor: iconColors.blue,
    }
  ]

  const designItems = designNav.map((item, index) => {
    const colors = Object.keys(gradients)
    const colorKey = colors[(index % colors.length) + 1] || colors[0] // +1 to skip home blue
    return {
      icon: iconMap[item.label as keyof typeof iconMap]?.(),
      label: item.label,
      href: item.href,
      gradient: gradients[colorKey as keyof typeof gradients],
      iconColor: iconColors[colorKey as keyof typeof iconColors],
    }
  })

  return [...items, ...designItems]
}

const menuItems = getMenuItems()

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

// Simplified to avoid complex nested transition typing issues in Framer Motion v12+
const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: { opacity: 1, scale: 2 },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 1 },
}

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
} as const

export function MenuBar() {
  const { theme } = useTheme()
  const pathname = usePathname()

  const isDarkTheme = theme === "dark"

  return (
    <motion.nav
      className="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden"
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className={`absolute -inset-2 bg-gradient-radial from-transparent ${
          isDarkTheme
            ? "via-blue-400/30 via-30% via-purple-400/30 via-60% via-red-400/30 via-90%"
            : "via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%"
        } to-transparent rounded-3xl z-0 pointer-events-none`}
        variants={navGlowVariants}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <ul className="flex items-center gap-2 relative z-10">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href + '/'))
          return (
            <motion.li key={item.label} className="relative">
              <motion.div
                className="block rounded-xl overflow-visible group relative"
                style={{ perspective: "600px" }}
                whileHover="hover"
                initial="initial"
              >
                <motion.div
                  className="absolute inset-0 z-0 pointer-events-none"
                  variants={glowVariants}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{
                    background: item.gradient,
                    opacity: isActive ? 0.3 : 0,
                    borderRadius: "16px",
                  }}
                />
                <motion.a
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl",
                    isActive && "text-foreground bg-accent/50"
                  )}
                  variants={itemVariants}
                  transition={sharedTransition}
                  style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                >
                  <span className={cn("transition-colors duration-300 group-hover:text-foreground", item.iconColor, isActive && "text-foreground")}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </motion.a>
                <motion.a
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl",
                    isActive && "text-foreground bg-accent/50"
                  )}
                  variants={backVariants}
                  transition={sharedTransition}
                  style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                >
                  <span className={cn("transition-colors duration-300 group-hover:text-foreground", item.iconColor, isActive && "text-foreground")}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </motion.a>
              </motion.div>
            </motion.li>
          )
        })}
      </ul>
    </motion.nav>
  )
}
