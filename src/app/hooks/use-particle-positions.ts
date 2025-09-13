import { useMemo } from 'react';

/**
 * Hook to generate deterministic particle positions for decorative elements.
 * Uses pre-defined positions to avoid hydration mismatches caused by Math.random().
 *
 * @returns Array of particle position objects
 */
export function useParticlePositions() {
  const positions = useMemo(
    () => [
      { left: '15%', top: '30%' },
      { left: '85%', top: '45%' },
      { left: '35%', top: '80%' },
      { left: '65%', top: '15%' },
      { left: '25%', top: '60%' },
      { left: '75%', top: '85%' },
      { left: '45%', top: '20%' },
      { left: '90%', top: '70%' },
      { left: '10%', top: '45%' },
      { left: '55%', top: '90%' },
      { left: '80%', top: '35%' },
      { left: '30%', top: '10%' },
      { left: '60%', top: '75%' },
      { left: '20%', top: '50%' },
      { left: '70%', top: '25%' },
      { left: '40%', top: '85%' },
      { left: '85%', top: '55%' },
      { left: '15%', top: '75%' },
    ],
    []
  );

  return positions;
}
