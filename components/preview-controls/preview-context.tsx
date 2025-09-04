'use client';

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

export interface CustomizationSettings {
  backgroundColor: string;
  textColor: string;
  borderRadius: number;
  padding: number;
  fontSize: number;
  fontWeight?: number;
  shadowIntensity?: number;
  // New fields for content editing
  displayText?: string;
  buttonText?: string;
  // Animation controls
  duration?: number;
  delay?: number;
  // Card/layout options
  gap?: number;
  shadow?: number;
  // Component-specific options (extensible)
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  // Allow any additional custom properties
  [key: string]: any;
}

export const defaultCustomization: CustomizationSettings = {
  backgroundColor: '#ffffff',
  textColor: '#000000',
  borderRadius: 6,
  padding: 16,
  fontSize: 14,
  fontWeight: 500,
  shadowIntensity: 0,
  displayText: 'Component',
  buttonText: 'Click me',
  duration: 1.0,
  delay: 0,
  gap: 8,
  shadow: 0,
  animateBy: 'words',
  direction: 'top'
};

interface PreviewState {
  playing: boolean;
  displayText: string;
  customization: CustomizationSettings;
}

interface PreviewContextType {
  state: PreviewState;
  setPlaying: (p: boolean) => void;
  setDisplayText: (t: string) => void;
  updateCustomization: (patch: Partial<CustomizationSettings>) => void;
  reset: () => void;
}

const PreviewContext = createContext<PreviewContextType | undefined>(undefined);

interface PreviewProviderProps {
  initialText?: string;
  initialCustomization?: Partial<CustomizationSettings>;
  children: React.ReactNode;
}

export function PreviewProvider({
  initialText = 'Component',
  initialCustomization = {},
  children
}: PreviewProviderProps) {
  const mergedCustomization = useMemo(
    () => ({ ...defaultCustomization, ...initialCustomization }),
    [initialCustomization]
  );

  const [state, setState] = useState<PreviewState>({
    playing: true,
    displayText: initialText,
    customization: mergedCustomization
  });

  const setPlaying = useCallback(
    (p: boolean) => setState(s => ({ ...s, playing: p })),
    []
  );

  const setDisplayText = useCallback(
    (t: string) => setState(s => ({ ...s, displayText: t })),
    []
  );

  const updateCustomization = useCallback(
    (patch: Partial<CustomizationSettings>) =>
      setState(s => ({
        ...s,
        customization: { ...s.customization, ...patch }
      })),
    []
  );

  const reset = useCallback(
    () =>
      setState({
        playing: true,
        displayText: initialText,
        customization: mergedCustomization
      }),
    [initialText, mergedCustomization]
  );

  const value = useMemo(
    () => ({ state, setPlaying, setDisplayText, updateCustomization, reset }),
    [state, setPlaying, setDisplayText, updateCustomization, reset]
  );

  return <PreviewContext.Provider value={value}>{children}</PreviewContext.Provider>;
}

export function usePreviewContext(): PreviewContextType {
  const ctx = useContext(PreviewContext);
  if (!ctx) throw new Error('usePreviewContext must be used within PreviewProvider');
  return ctx;
}

// Utility hook for binding a single customization property to a control
export function useCustomizationProp<K extends keyof CustomizationSettings>(key: K) {
  const { state, updateCustomization } = usePreviewContext();
  return {
    value: state.customization[key],
    setValue: (v: CustomizationSettings[K]) =>
      updateCustomization({ [key]: v } as Partial<CustomizationSettings>)
  };
}

// Serialize settings for share links
export function encodePreviewState(state: PreviewState) {
  try {
    return btoa(JSON.stringify(state));
  } catch {
    return '';
  }
}

export function decodePreviewState(encoded: string): PreviewState | null {
  try {
    return JSON.parse(atob(encoded));
  } catch {
    return null;
  }
}

export type { PreviewState };