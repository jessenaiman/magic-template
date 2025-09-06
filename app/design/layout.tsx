import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";
import { metadataKeywords } from "@/metadata";
import "@/app/globals.css";
import PageTransition from "@/components/page-transition";
import { Suspense } from "react";
import { LoadingIndicator } from "@/components/loading-indicator";
import { SimpleDesignNav } from "@/components/simple-design-nav";
import { DesignPageProvider } from "@/components/design-page-context";
import { PreviewSurface } from "@/components/preview-surface";
import { SimpleNavbar } from '@/components/simple-navbar';

export const viewport: Viewport = {
  themeColor: "black",
};
// ... existing code ...
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: metadataKeywords,
};

interface DesignLayoutProps {
  children: React.ReactNode;
}

export default function DesignLayout({ children }: DesignLayoutProps) {
  return (
    <DesignPageProvider>
      <PreviewSurface layout="none">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <SimpleNavbar className="mb-6" />
          <div className="flex gap-6">
            {/* Sidebar: hidden on mobile, fixed width on md+ */}
            <aside className="hidden md:block w-64 flex-shrink-0">
              <SimpleDesignNav />
            </aside>
            {/* Main content grows and prevents overflow */}
            <main className="flex-1 min-w-0">
              {/* Standard preview grid for design pages */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
              <Suspense fallback={<LoadingIndicator className="h-[calc(100vh-6rem)]" />}>
                <PageTransition>
                  {children}
                </PageTransition>
              </Suspense>
              </div>
            </main>
          </div>
        </div>
      </PreviewSurface>
    </DesignPageProvider>
  );
}

// simple nav is now provided by a dedicated client component in components/simple-design-nav.tsx
