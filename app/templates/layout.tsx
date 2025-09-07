import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";
import { metadataKeywords } from "@/metadata";
import "@/app/globals.css";
import PageTransition from "@/components/page-transition";
import { Suspense } from "react";
import { LoadingIndicator } from "@/components/loading-indicator";
import { UnifiedNavbar } from "@/components/navigation/unified-navbar";
import { UnifiedSidebar } from "@/components/navigation/unified-sidebar";
import { UnifiedBreadcrumbs } from "@/components/navigation/unified-breadcrumbs";
import { PreviewProvider } from "@/components/preview/preview-context";
import * as React from "react";

export const viewport: Viewport = {
  themeColor: "black",
};

interface TemplatesLayoutProps {
  children: React.ReactNode;
}

export default function TemplatesLayout({ children }: TemplatesLayoutProps) {

  return (
    <PreviewProvider>
      <UnifiedNavbar currentSection="templates" />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex gap-6">
          {/* Sidebar: hidden on mobile, fixed width on md+ */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <UnifiedSidebar
              navType="templates"
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
  );
}
