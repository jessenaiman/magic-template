/**
 * Root Layout Component
 *
 * ARCHITECTURE: Server Component
 * - No 'use client' directive - runs on server
 * - Handles metadata, viewport, and root HTML structure
 * - Wraps client components with necessary providers
 * - Manages global layout and navigation structure
 *
 * SERVER-SIDE FEATURES:
 * - Metadata generation for SEO
 * - Viewport configuration
 * - Font loading and optimization
 * - Global CSS imports
 *
 * CLIENT-SIDE FEATURES (via child components):
 * - Theme switching (ThemeProvider)
 * - Navigation interactions (UnifiedNavbar)
 * - Tooltips (TooltipProvider)
 * - Preview functionality (PreviewProvider)
 */

import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site";
import { metadataKeywords } from "../metadata";
import Footer from "@/components/footer";
import "@/app/globals.css";
import { UnifiedNavbar } from "@/components/navigation/unified-navbar";
import { TooltipProvider } from '@/components/ui/tooltip';
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { PreviewProvider } from "@/components/preview/preview-context";

export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  metadataBase: process.env.NODE_ENV === 'production' ? new URL(siteConfig.url) : undefined,
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: metadataKeywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        <div suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <PreviewProvider>
            <TooltipProvider>
              {/* Background - fixed full viewport behind all content */}
              <div className="fixed inset-0 -z-10">
                <FlickeringGrid
                  className="absolute inset-0"
                  squareSize={4}
                  gridGap={6}
                  color="#6B7280"
                  maxOpacity={0.5}
                  flickerChance={0.1}
                />
                <div className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_25%,black_95%)] pointer-events-none" />
              </div>

              {/* Shell: full height, vertical stack */}
              <div className="flex min-h-screen flex-col">
                <UnifiedNavbar currentSection="main" />
                <div className="flex flex-1 w-full">
                  <main className="flex-1 w-full">
                    {children}
                  </main>
                </div>
                <Footer />
              </div>
            </TooltipProvider>
          </PreviewProvider>
        </ThemeProvider>
      </div>
      </body>
    </html>
  );
}
