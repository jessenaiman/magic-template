import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";
import { metadataKeywords } from "@/metadata";
import Footer from "@/components/footer";
import "@/app/globals.css";
import PageTransition from "@/components/page-transition";
import { Suspense } from "react";
import { LoadingIndicator } from "@/components/loading-indicator";
import { SimpleDesignNav } from "@/components/simple-design-nav";
import { DesignPageProvider } from "@/components/design-page-context";
import { PreviewProvider } from "@/components/preview-context";
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
      <PreviewProvider>
        <div className="container mx-auto max-w-7xl p-4">
          <SimpleNavbar className="mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <aside className="md:col-span-1">
              <SimpleDesignNav />
            </aside>
            <main className="md:col-span-3 space-y-8">
              <Suspense fallback={<LoadingIndicator className="h-[calc(100vh-6rem)]" />}>
                <PageTransition>
                  {children}
                </PageTransition>
              </Suspense>
            </main>
          </div>
        </div>
        <Footer />
      </PreviewProvider>
    </DesignPageProvider>
  );
}

// simple nav is now provided by a dedicated client component in components/simple-design-nav.tsx
