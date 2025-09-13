'use client';
// components/preview-controls/preview-surface.tsx

import * as React from 'react';
import { PreviewProvider } from './preview-context';

interface PreviewSurfaceProps {
  children: React.ReactNode;
  showGlobalControls?: boolean;
  layout?: 'none' | 'grid';
  className?: string;
}

export function PreviewSurface({
  children,
  showGlobalControls = false, // Turn off by default since we control this at root level
  layout = 'grid',
  className = '',
}: PreviewSurfaceProps) {
  return (
    <PreviewProvider>
      {layout === 'grid' ? (
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr ${className}`}
        >
          {children}
        </div>
      ) : (
        <div className={className}>{children}</div>
      )}
    </PreviewProvider>
  );
}
