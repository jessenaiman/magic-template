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


export function DesignPageProvider({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [fields, setFields] = React.useState<FieldConfig[]>([]);
  const designPageValue = { title, description, fields, setTitle, setDescription, setFields };
  return (
    <DesignPageContext.Provider value={designPageValue}>
      {children}
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

