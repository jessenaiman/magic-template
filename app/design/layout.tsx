import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";
import { metadataKeywords } from "@/metadata";
import "@/app/globals.css";
import PageTransition from "@/components/page-transition";
import { Suspense } from "react";
import { LoadingIndicator } from "@/components/loading-indicator";
import { UnifiedSidebar } from "@/components/navigation/unified-sidebar";
import { UnifiedBreadcrumbs } from "@/components/navigation/unified-breadcrumbs";
import { DesignPageProvider } from "@/components/design-page-context";
import { PreviewProvider } from "@/components/preview/preview-context";
import { getDesignNavigation } from "@/app/navigation.config";
import * as React from "react";

export const viewport: Viewport = {
  themeColor: "black",
};

interface DesignLayoutProps {
  children: React.ReactNode;
}

export default function DesignLayout({ children }: DesignLayoutProps) {
  const designItems = getDesignNavigation();

  return (
    <DesignPageProvider>
      <PreviewProvider>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-6">
            {/* Sidebar: hidden on mobile, fixed width on md+ */}
            <aside className="hidden md:block w-64 flex-shrink-0">
              <UnifiedSidebar
                items={designItems}
                collapsible={true}
                defaultCollapsed={false}
                showIcons={true}
                showDescriptions={true}
              />
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
