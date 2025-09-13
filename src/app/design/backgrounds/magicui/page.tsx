// app/design/backgrounds/magicui/page.tsx
'use client';

// app/design/backgrounds/magicui/page.tsx
import * as React from 'react';
import { PreviewTile } from '@/components/preview/preview-tile';
import { UnifiedBreadcrumbs } from '@/components/navigation/unified-breadcrumbs';

// MagicUI backgrounds (installed components; do not modify)
import { WarpBackground } from '@/components/magicui/warp-background';

export default function MagicUIBackgroundsPage() {
  return (
    <>
      <div className="mb-4">
        <UnifiedBreadcrumbs />
      </div>
      <PreviewTile
        title="Warp Background"
        componentName="WarpBackground"
        description="Hyperspace warp background effect for immersive visuals."
        code={`<WarpBackground />`}
        customFields={[
          { id: 'perspective', label: 'Perspective', type: 'slider', min: 50, max: 300, step: 10 },
          { id: 'beamsPerSide', label: 'Beams/Side', type: 'slider', min: 1, max: 8, step: 1 },
          { id: 'beamSize', label: 'Beam Size %', type: 'slider', min: 2, max: 10, step: 1 },
          { id: 'backgroundColor', label: 'Background', type: 'color' },
        ]}
      >
        {(customization) => (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <WarpBackground
              perspective={(customization.perspective as number) ?? 100}
              beamsPerSide={(customization.beamsPerSide as number) ?? 3}
              beamSize={(customization.beamSize as number) ?? 5}
            >
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-white">
                  <div className="text-lg font-bold">Warp Effect</div>
                  <div className="text-sm opacity-75">Background Animation</div>
                </div>
              </div>
            </WarpBackground>
          </div>
        )}
      </PreviewTile>
    </>
  );
}