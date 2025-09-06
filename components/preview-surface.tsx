"use client";
// components/preview-controls/preview-surface.tsx

import * as React from 'react';
import { PreviewProvider } from './preview-context';

// Create a dedicated context for managing tile expansion
interface PreviewTileExpansionContextType {
  expandedTile: string | null;
  setExpandedTile: React.Dispatch<React.SetStateAction<string | null>>;
}
export const PreviewTileExpansionContext = React.createContext<PreviewTileExpansionContextType | undefined>(undefined);

interface PreviewSurfaceProps {
  children: React.ReactNode;
  showGlobalControls?: boolean;
}

export function PreviewSurface({
  children,
  showGlobalControls = false, // Turn off by default since we control this at root level
}: PreviewSurfaceProps) {
  const [expandedTile, setExpandedTile] = React.useState<string | null>(null);

  const contextValue = { expandedTile, setExpandedTile };

  return (
    <PreviewProvider>
      <PreviewTileExpansionContext.Provider value={contextValue}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {children}
        </div>
      </PreviewTileExpansionContext.Provider>
    </PreviewProvider>
  );
}

// Custom hook for easy access to the expansion context
export const usePreviewTileExpansion = () => {
  const context = React.useContext(PreviewTileExpansionContext);
  if (!context) {
    throw new Error('usePreviewTileExpansion must be used within a PreviewSurface');
  }
  return context;
};