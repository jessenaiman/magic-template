// components/preview-surface.tsx
'use client';

import { PreviewProvider, CustomizationSettings } from '@/components/preview-controls/preview-context';
import { PageControls } from '@/components/preview-controls/page-controls';

interface PreviewSurfaceProps {
  children: React.ReactNode;
  initialCustomization?: Partial<CustomizationSettings>;
  showGlobalControls?: boolean;
}

export function PreviewSurface({
  children,
  initialCustomization = {},
  showGlobalControls = true,
}: PreviewSurfaceProps) {
  return (
    <PreviewProvider initialCustomization={initialCustomization}>
      {/* Page-level controls that affect all children */}
      {showGlobalControls && <PageControls />}

      {/* Responsive grid for the preview tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </PreviewProvider>
  );
}