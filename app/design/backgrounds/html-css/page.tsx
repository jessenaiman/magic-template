'use client';

import * as React from 'react';
import { useDesignPage } from '@/components/design-page-context';
import { PreviewTile, PreviewTileProps } from '@/components/preview-tile';
import { FieldConfig } from '@/components/preview-customization-panel';

function PageConfigurator() {
  const { setTitle, setDescription, setFields } = useDesignPage();
  React.useEffect(() => {
    setTitle('HTML & CSS Backgrounds');
    setDescription('A collection of pure HTML/CSS background patterns.');
    const fields: FieldConfig[] = [
      { id: 'backgroundColor', label: 'Background', type: 'color' },
      { id: 'accentColor', label: 'Accent', type: 'color' },
      { id: 'opacity', label: 'Opacity', type: 'slider', min: 0, max: 100, step: 1 },
    ];
    setFields(fields);
  }, [setTitle, setDescription, setFields]);
  return null;
}

const stripesConfig: PreviewTileProps = {
  title: 'Diagonal Stripes',
  description: 'CSS repeating-linear-gradient background.',
  componentName: 'DiagonalStripes',
  code: `background: repeating-linear-gradient(45deg, var(--c1), var(--c1) 10px, var(--c2) 10px, var(--c2) 20px);`,
  initialCustomization: {
    backgroundColor: '#0f172a',
    accentColor: '#22c55e',
    opacity: 100,
  },
  children: (customization) => (
    <div
      className="h-40 w-full rounded-md border"
      style={{
        '--c1': customization.backgroundColor,
        '--c2': customization.accentColor,
        opacity: (customization.opacity ?? 100) / 100,
      } as React.CSSProperties}
    >
      <div
        className="h-full w-full rounded-md"
        style={{
          background: 'repeating-linear-gradient(45deg, var(--c1), var(--c1) 10px, var(--c2) 10px, var(--c2) 20px)',
        }}
      />
    </div>
  ),
};

export default function HtmlCssBackgroundsPage() {
  return (
    <>
      <PageConfigurator />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PreviewTile {...stripesConfig} />
      </div>
    </>
  );
}
