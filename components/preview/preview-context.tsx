'use client';

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react';

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
  direction: 'top',
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
  replay: () => void;
  expandedTile: string | null;
  setExpandedTile: React.Dispatch<React.SetStateAction<string | null>>;
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
  children,
}: PreviewProviderProps) {
  // Store the initial values in a ref so they don't change on re-renders
  const initialValues = React.useRef({
    text: initialText,
    customization: { ...defaultCustomization, ...initialCustomization },
  });

  const [state, setState] = useState<PreviewState>(() => ({
    playing: true,
    displayText: initialText,
    customization: { ...defaultCustomization, ...initialCustomization },
  }));

  const [expandedTile, setExpandedTile] = useState<string | null>(null);

  const setPlaying = useCallback(
    (p: boolean) => setState((s) => ({ ...s, playing: p })),
    [],
  );

  const setDisplayText = useCallback(
    (t: string) => setState((s) => ({ ...s, displayText: t })),
    [],
  );

  const updateCustomization = useCallback(
    (patch: Partial<CustomizationSettings>) =>
      setState((s) => {
        const newCustomization = { ...s.customization, ...patch };
        if (typeof window !== 'undefined') {
          try {
            localStorage.setItem(
              'preview-customization',
              JSON.stringify(newCustomization),
            );
          } catch (e) {
            console.warn('Failed to persist preview customization:', e);
          }
        }
        return { ...s, customization: newCustomization };
      }),
    [],
  );

  const reset = useCallback(
    () =>
      setState({
        playing: true,
        displayText: initialValues.current.text,
        customization: { ...initialValues.current.customization },
      }),
    [], // No dependencies since we use refs
  );

  const replay = useCallback(
    () => setState((s) => ({ ...s, playing: true })),
    [],
  );

  const value = useMemo(
    () => ({
      state,
      setPlaying,
      setDisplayText,
      updateCustomization,
      reset,
      replay,
      expandedTile,
      setExpandedTile,
    }),
    [
      state,
      setPlaying,
      setDisplayText,
      updateCustomization,
      reset,
      expandedTile,
      setExpandedTile,
    ],
  );

  return (
    <PreviewContext.Provider value={value}>{children}</PreviewContext.Provider>
  );
}

export function usePreviewContext(): PreviewContextType {
  const ctx = useContext(PreviewContext);
  if (!ctx)
    throw new Error('usePreviewContext must be used within PreviewProvider');
  return ctx;
}

// Custom hook for easy access to the expansion context
export const usePreviewTileExpansion = () => {
  const context = useContext(PreviewContext);
  if (!context) {
    throw new Error(
      'usePreviewTileExpansion must be used within a PreviewProvider',
    );
  }
  return {
    expandedTile: context.expandedTile,
    setExpandedTile: context.setExpandedTile,
  };
};

// Utility hook for binding a single customization property to a control
export function useCustomizationProp<K extends keyof CustomizationSettings>(
  key: K,
) {
  const { state, updateCustomization } = usePreviewContext();
  return {
    value: state.customization[key],
    setValue: (v: CustomizationSettings[K]) =>
      updateCustomization({ [key]: v } as Partial<CustomizationSettings>),
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