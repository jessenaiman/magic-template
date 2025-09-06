"use client";

import * as React from "react";
import PageTransition from "@/components/page-transition";
import { Suspense } from "react";
import { LoadingIndicator } from "@/components/loading-indicator";
import { SimpleDesignNav } from "@/components/simple-design-nav";
import { DesignPageProvider } from "@/components/design-page-context";
import { SimpleNavbar } from '@/components/simple-navbar';
import PreviewGrid from "@/components/preview/preview-grid";

// 1. Define the context and hook here in the client component.
interface PreviewTileExpansionContextType {
  expandedTile: string | null;
  setExpandedTile: React.Dispatch<React.SetStateAction<string | null>>;
}

export const PreviewTileExpansionContext = React.createContext<PreviewTileExpansionContextType | undefined>(undefined);

export const usePreviewTileExpansion = () => {
  const context = React.useContext(PreviewTileExpansionContext);
  if (!context) {
    throw new Error('usePreviewTileExpansion must be used within a PreviewTileExpansionContext.Provider');
  }
  return context;
};

interface DesignLayoutClientProps {
  children: React.ReactNode;
}

// 2. This component will manage the state and provide the context.
export default function DesignLayoutClient({ children }: DesignLayoutClientProps) {
  const [expandedTile, setExpandedTile] = React.useState<string | null>(null);
  const contextValue = React.useMemo(() => ({ expandedTile, setExpandedTile }), [expandedTile]);

  return (
    <DesignPageProvider>
      <PreviewTileExpansionContext.Provider value={contextValue}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <SimpleNavbar className="mb-6" />
          <div className="flex gap-6">
            <aside className="hidden md:block w-64 flex-shrink-0">
              <SimpleDesignNav />
            </aside>
            <main className="flex-1 min-w-0">
              <Suspense fallback={<LoadingIndicator className="h-[calc(100vh-6rem)]" />}>
                <PageTransition>
                  <PreviewGrid minColPx={320} gapClass="gap-6">
                    {children}
                  </PreviewGrid>
                </PageTransition>
              </Suspense>
            </main>
          </div>
        </div>
      </PreviewTileExpansionContext.Provider>
    </DesignPageProvider>
  );
}
