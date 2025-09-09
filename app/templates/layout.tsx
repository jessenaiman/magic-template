import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";
import "@/app/globals.css";
import PageTransition from "@/components/page-transition";
import { Suspense } from "react";
import { LoadingIndicator } from "@/components/loading-indicator";
import { UnifiedNavbar } from "@/components/navigation/navbar";
import { PageBreadcrumb } from "@/components/navigation/page-breadcrumb";
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
      <UnifiedNavbar />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex gap-6">
          {/* Sidebar: hidden on mobile, fixed width on md+ */}
            <main className="flex-1 min-w-0">
            <div className="mb-4">
              <PageBreadcrumb />
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
