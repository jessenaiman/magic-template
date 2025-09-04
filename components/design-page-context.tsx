'use client';

import * as React from 'react';
import { FieldConfig } from '@/components/preview-customization-panel';

// Context for the hero content (title, description, fields)
interface DesignPageContextType {
  title: string;
  description: string;
  fields: FieldConfig[];
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setFields: (fields: FieldConfig[]) => void;
}

const DesignPageContext = React.createContext<DesignPageContextType | undefined>(undefined);

// Context for managing which preview tile is expanded
interface PreviewTileExpansionContextType {
  expandedTile: string | null;
  setExpandedTile: React.Dispatch<React.SetStateAction<string | null>>;
}
export const PreviewTileExpansionContext = React.createContext<PreviewTileExpansionContextType | undefined>(undefined);


export function DesignPageProvider({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [fields, setFields] = React.useState<FieldConfig[]>([]);
  const [expandedTile, setExpandedTile] = React.useState<string | null>(null);

  const designPageValue = { title, description, fields, setTitle, setDescription, setFields };
  const expansionValue = { expandedTile, setExpandedTile };

  return (
    <DesignPageContext.Provider value={designPageValue}>
      <PreviewTileExpansionContext.Provider value={expansionValue}>
        {children}
      </PreviewTileExpansionContext.Provider>
    </DesignPageContext.Provider>
  );
}

export function useDesignPage() {
  const context = React.useContext(DesignPageContext);
  if (!context) {
    throw new Error('useDesignPage must be used within a DesignPageProvider');
  }
  return context;
}

export const usePreviewTileExpansion = () => {
    const context = React.useContext(PreviewTileExpansionContext);
    if (!context) {
        throw new Error('usePreviewTileExpansion must be used within a PreviewSurface');
    }
    return context;
};