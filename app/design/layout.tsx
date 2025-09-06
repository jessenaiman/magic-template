import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";
import { metadataKeywords } from "@/metadata";
import "@/app/globals.css";
import PageTransition from "@/components/page-transition";
import { Suspense } from "react";
import { LoadingIndicator } from "@/components/loading-indicator";
import { SimpleNavbar } from "@/components/simple-navbar";
import { SimpleDesignNav } from "@/components/simple-design-nav";
import { DesignPageProvider } from "@/components/design-page-context";
import { PreviewProvider } from "@/components/preview/preview-context";
import PreviewGrid from "@/components/preview/preview-grid";
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
          <SimpleNavbar className="mb-6" />
          <div className="flex gap-6">
            {/* Sidebar: hidden on mobile, fixed width on md+ */}
            <aside className="hidden md:block w-64 flex-shrink-0">
              <SimpleDesignNav />
            </aside>
            {/* Main content grows and prevents overflow */}
            <main className="flex-1 min-w-0">
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

// simple nav is now provided by a dedicated client component in components/simple-design-nav.tsx
