/**
 * Design Section Layout Component
 *
 * ARCHITECTURE: Server Component
 * - No 'use client' directive - runs on server
 * - Handles design section layout and navigation structure
 * - Composes client components for interactive features
 *
 * SERVER-SIDE FEATURES:
 * - Static navigation data access (designNav.children)
 * - Layout composition and metadata
 * - Route-based conditional rendering
 *
 * CLIENT-SIDE FEATURES (via child components):
 * - Interactive navigation (UnifiedNavbar, UnifiedSidebar)
 * - Breadcrumb generation (UnifiedBreadcrumbs)
 * - Design page context (DesignPageProvider)
 * - Preview functionality (PreviewProvider)
 * - Page transitions (PageTransition)
 *
 * PATTERN: Server Layout with Client Navigation
 * - Server component handles layout structure and data
 * - Client components handle user interactions and state
 * - Clean separation between static layout and dynamic features
 */

import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/app/lib/site";
import { metadataKeywords } from "@/metadata";
import "@/app/globals.css";
import PageTransition from "@/components/page-transition";
import { Suspense } from "react";
import { LoadingIndicator } from "@/components/loading-indicator";
import { UnifiedBreadcrumbs } from "@/components/navigation/unified-breadcrumbs";
import { DesignPageProvider } from "@/components/design-page-context";
import { PreviewProvider } from "@/components/preview/preview-context";

import * as React from "react";

export const viewport: Viewport = {
  themeColor: "black",
};

interface DesignLayoutProps {
  children: React.ReactNode;
}

export default function DesignLayout({ children }: DesignLayoutProps) {


  return (
    <DesignPageProvider>
      <PreviewProvider>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-6">
            {/* Sidebar: hidden on mobile, fixed width on md+ */}
            <aside className="hidden md:block w-64 flex-shrink-0">
            </aside>
            {/* Main content grows and prevents overflow */}
            <main className="flex-1 min-w-0">
              <div className="mb-4">
                <UnifiedBreadcrumbs />
              </div>
              <Suspense fallback={<LoadingIndicator className="h-[calc(100vh-6rem)]" />}>
                <PageTransition>
                  {children}
                </PageTransition>
              </Suspense>
            </main>
          </div>
        </div>
      </PreviewProvider>
    </DesignPageProvider>
  );
}
