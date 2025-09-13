/**
 * Theme Provider Component
 *
 * ARCHITECTURE: Client Component
 * - Uses 'use client' directive for theme state management
 * - Wraps next-themes provider for client-side theme switching
 * - Handles system theme detection and user preferences
 *
 * CLIENT-SIDE FEATURES:
 * - localStorage for theme persistence
 * - System theme detection (prefers-color-scheme)
 * - Dynamic theme switching without page reload
 * - Theme context for child components
 *
 * WHY CLIENT COMPONENT:
 * - Theme state must persist across navigation
 * - Requires access to browser APIs (localStorage, matchMedia)
 * - Needs to respond to system theme changes
 * - Cannot be determined server-side (no access to user preferences)
 */

"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
} 