"use client"

import { LucideProps, Home, Palette, LayoutDashboard, Sparkles, Repeat2, Type, Square, Activity } from "lucide-react"

export type Icon = LucideProps

export const Icons = {
  home: Home,
  palette: Palette,
  layout: LayoutDashboard,
  sparkles: Sparkles,
  transition: Repeat2,
  text: Type,
  button: Square,
  activity: Activity,
  template: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
}
