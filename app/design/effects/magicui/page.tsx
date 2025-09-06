// app/design/effects/magicui/page.tsx
'use client';

import * as React from 'react';
import { PreviewTile } from '@/components/preview-tile';
import { CustomizationSettings } from '@/components/preview-context';

// MagicUI effects (installed components; do not modify)
import { GridBeams } from '@/components/magicui/grid-beams';
import { Meteors } from '@/components/magicui/meteors';
import { RetroGrid } from '@/components/magicui/retro-grid';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { FlickeringGrid } from '@/components/magicui/flickering-grid';
import { WarpBackground } from '@/components/magicui/warp-background';

function Container({ children, customization }: { children: React.ReactNode; customization: Partial<CustomizationSettings>; }) {
  const { backgroundColor, borderRadius = 12, padding = 16 } = customization;
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: backgroundColor as string | undefined,
        borderRadius: typeof borderRadius === 'number' ? borderRadius : 12,
        padding: typeof padding === 'number' ? padding : 16,
      }}
    >
      {children}
    </div>
  );
}

export default function MagicUIEffectsPage() {
  return (
    <>
      <div className="col-span-full mb-4">
        <h2 className="text-2xl font-bold tracking-tight">MagicUI Effects</h2>
        <p className="text-muted-foreground">
          A collection of modern web design effects created with MagicUI components.
        </p>
      </div>
      
      <PreviewTile
        title="Grid Beams"
        componentName="GridBeams"
        description="Animated grid with sweeping light beams."
        code={`<GridBeams />`}
        customFields={[
          { id: 'gridSize', label: 'Grid Size', type: 'slider', min: 20, max: 80, step: 5 },
          { id: 'rayCount', label: 'Ray Count', type: 'slider', min: 5, max: 25, step: 1 },
          { id: 'rayOpacity', label: 'Ray Opacity', type: 'slider', min: 0, max: 1, step: 0.05 },
          { id: 'raySpeed', label: 'Ray Speed', type: 'slider', min: 0.5, max: 2.0, step: 0.1 },
          { id: 'backgroundColor', label: 'Background', type: 'color' },
        ]}
      >
        {(customization) => (
          <Container customization={customization}>
            <GridBeams
              gridSize={(customization.gridSize as number) ?? 40}
              rayCount={(customization.rayCount as number) ?? 15}
              rayOpacity={(customization.rayOpacity as number) ?? 0.35}
              raySpeed={(customization.raySpeed as number) ?? 1}
              backgroundColor={(customization.backgroundColor as string) ?? '#020412'}
            >
              <div />
            </GridBeams>
          </Container>
        )}
      </PreviewTile>

      <PreviewTile
        title="Meteors"
        componentName="Meteors"
        description="Falling meteor particles creating motion."
        code={`<Meteors />`}
        customFields={[
          { id: 'number', label: 'Count', type: 'slider', min: 5, max: 60, step: 1 },
          { id: 'angle', label: 'Angle', type: 'slider', min: 0, max: 360, step: 5 },
          { id: 'backgroundColor', label: 'Background', type: 'color' },
        ]}
      >
        {(customization) => (
          <Container customization={customization}>
            <Meteors
              number={(customization.number as number) ?? 20}
              angle={(customization.angle as number) ?? 215}
            />
          </Container>
        )}
      </PreviewTile>

      <PreviewTile
        title="Retro Grid"
        componentName="RetroGrid"
        description="Retro perspective grid background."
        code={`<RetroGrid />`}
        customFields={[
          { id: 'angle', label: 'Angle', type: 'slider', min: 30, max: 80, step: 1 },
          { id: 'cellSize', label: 'Cell Size', type: 'slider', min: 20, max: 120, step: 5 },
          { id: 'opacity', label: 'Opacity', type: 'slider', min: 0.1, max: 1, step: 0.05 },
          { id: 'backgroundColor', label: 'Background', type: 'color' },
        ]}
      >
        {(customization) => (
          <Container customization={customization}>
            <RetroGrid
              angle={(customization.angle as number) ?? 65}
              cellSize={(customization.cellSize as number) ?? 60}
              opacity={(customization.opacity as number) ?? 0.5}
            />
          </Container>
        )}
      </PreviewTile>

      <PreviewTile
        title="Dot Pattern"
        componentName="DotPattern"
        description="Subtle dotted pattern overlay."
        code={`<DotPattern />`}
        customFields={[
          { id: 'backgroundColor', label: 'Background', type: 'color' },
        ]}
      >
        {(customization) => (
          <Container customization={customization}>
            <DotPattern />
          </Container>
        )}
      </PreviewTile>

      <PreviewTile
        title="Flickering Grid"
        componentName="FlickeringGrid"
        description="Organic flickering grid animation."
        code={`<FlickeringGrid />`}
        customFields={[
          { id: 'backgroundColor', label: 'Background', type: 'color' },
        ]}
      >
        {(customization) => (
          <Container customization={customization}>
            <FlickeringGrid />
            </Container>
        )}
      </PreviewTile>

      <PreviewTile
        title="Warp Background"
        componentName="WarpBackground"
        description="Hyperspace warp background effect."
        code={`<WarpBackground />`}
        customFields={[
          { id: 'perspective', label: 'Perspective', type: 'slider', min: 50, max: 300, step: 10 },
          { id: 'beamsPerSide', label: 'Beams/Side', type: 'slider', min: 1, max: 8, step: 1 },
          { id: 'beamSize', label: 'Beam Size %', type: 'slider', min: 2, max: 10, step: 1 },
          { id: 'backgroundColor', label: 'Background', type: 'color' },
        ]}
      >
        {(customization) => (
          <Container customization={customization}>
            <WarpBackground
              perspective={(customization.perspective as number) ?? 100}
              beamsPerSide={(customization.beamsPerSide as number) ?? 3}
              beamSize={(customization.beamSize as number) ?? 5}
            >
              <div />
            </WarpBackground>
          </Container>
        )}
      </PreviewTile>
    </>
  );
}