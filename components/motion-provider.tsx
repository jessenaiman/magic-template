/**
 * MotionProvider Component
 *
 * ARCHITECTURE: Client Component
 * - Handles useReducedMotion hook and provides motion context
 * - Isolates client-side motion detection logic
 * - Allows parent components to remain server components
 */

'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useReducedMotion } from 'motion/react';

interface MotionContextType {
  reduce: boolean;
}

const MotionContext = createContext<MotionContextType>({ reduce: false });

export function useMotion() {
  return useContext(MotionContext);
}

interface MotionProviderProps {
  children: ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  const reduce = useReducedMotion() ?? false; // Default to false if null
  return (
    <MotionContext.Provider value={{ reduce }}>
      {children}
    </MotionContext.Provider>
  );
}
