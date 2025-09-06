'use client';

import * as React from 'react';
import { FieldConfig } from '@/components/preview/preview-customization-panel';

// Context for the hero content (title, description, fields, background customization)
interface DesignPageContextType {
  title: string;
  description: string;
  fields: FieldConfig[];
  // Background-specific customization for the entire category
  backgroundCustomization: Record<string, any>;
  // Transition control state
  isTransitionPlaying: boolean;
  triggerTransitionReplay: () => void;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setFields: (fields: FieldConfig[]) => void;
  setBackgroundCustomization: (customization: Record<string, any>) => void;
  updateBackgroundCustomization: (patch: Record<string, any>) => void;
}

const DesignPageContext = React.createContext<DesignPageContextType | undefined>(undefined);

// Context for managing which preview tile is expanded


export function DesignPageProvider({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [fields, setFields] = React.useState<FieldConfig[]>([]);
  const [backgroundCustomization, setBackgroundCustomization] = React.useState<Record<string, any>>({});
  const [isTransitionPlaying, setIsTransitionPlaying] = React.useState(false);
  
  const updateBackgroundCustomization = React.useCallback((patch: Record<string, any>) => {
    setBackgroundCustomization(prev => ({ ...prev, ...patch }));
  }, []);

  const triggerTransitionReplay = React.useCallback(() => {
    setIsTransitionPlaying(false);
    // Trigger a re-render by briefly setting to false then true
    setTimeout(() => setIsTransitionPlaying(true), 0);
  }, []);

  const designPageValue = {
    title,
    description,
    fields,
    backgroundCustomization,
    isTransitionPlaying,
    triggerTransitionReplay,
    setTitle,
    setDescription,
    setFields,
    setBackgroundCustomization,
    updateBackgroundCustomization
  };
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

