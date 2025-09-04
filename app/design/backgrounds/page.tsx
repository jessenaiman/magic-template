'use client';

import * as React from 'react';
import { useDesignPage } from '@/components/design-page-context';
import { PreviewTile, PreviewTileProps } from '@/components/preview-tile';
import { FieldConfig } from '@/components/preview-customization-panel';

// This component configures the design page's title, description, and shared controls
function PageConfigurator() {
  const { setTitle, setDescription, setFields } = useDesignPage();

  React.useEffect(() => {
    setTitle('Backgrounds');
    setDescription('A collection of beautiful background patterns and effects that can be used to enhance your UI.');
    
    // Define the controls that are common to ALL background examples on this page
    const backgroundFields: FieldConfig[] = [
      { id: 'primaryColor', label: 'Primary Color', type: 'color' },
      { id: 'secondaryColor', label: 'Secondary Color', type: 'color' },
      { id: 'patternSize', label: 'Pattern Size', type: 'slider', min: 10, max: 100, step: 5, unit: 'px' },
      { id: 'opacity', label: 'Opacity', type: 'slider', min: 0.1, max: 1, step: 0.1 },
    ];
    
    setFields(backgroundFields);
  }, [setTitle, setDescription, setFields]);

  return null; // This component does not render any UI itself
}

// --- Preview Tile Configurations ---

const gradientMeshConfig: PreviewTileProps = {
  title: 'Gradient Mesh',
  description: 'A smooth gradient mesh background with customizable colors',
  componentName: 'GradientMeshBackground',
  code: `background: radial-gradient(
  circle at center,
  var(--primary-color, #3b82f6),
  var(--secondary-color, #8b5cf6)
);`,
  customFields: [
    { id: 'primaryColor', label: 'Primary Color', type: 'color' },
    { id: 'secondaryColor', label: 'Secondary Color', type: 'color' },
    { id: 'opacity', label: 'Opacity', type: 'slider', min: 0.1, max: 1, step: 0.1 },
  ],
  initialCustomization: {
    primaryColor: '#3b82f6',
    secondaryColor: '#8b5cf6',
    opacity: 0.8,
  },
  children: (customization) => (
    <div 
      className="w-full h-full rounded-lg" 
      style={{
        background: `radial-gradient(
          circle at center,
          ${customization.primaryColor || '#3b82f6'},
          ${customization.secondaryColor || '#8b5cf6'}
        )`,
        opacity: customization.opacity || 0.8,
      }}
    />
  ),
};

const gridDotsConfig: PreviewTileProps = {
  title: 'Grid Dots',
  description: 'A subtle dot grid pattern that works well for content backgrounds',
  componentName: 'GridDotsBackground',
  code: `background-image: radial-gradient(
  var(--dot-color, #e5e7eb) 1px,
  transparent 1px
);
background-size: var(--dot-size, 20px) var(--dot-size, 20px);`,
  initialCustomization: {
    dotColor: '#e5e7eb',
    dotSize: 20,
    backgroundColor: '#ffffff',
  },
  customFields: [
    { id: 'dotColor', label: 'Dot Color', type: 'color' },
    { id: 'backgroundColor', label: 'Background', type: 'color' },
    { id: 'dotSize', label: 'Dot Size', type: 'slider', min: 5, max: 50, step: 1, unit: 'px' },
    { id: 'opacity', label: 'Opacity', type: 'slider', min: 0.1, max: 1, step: 0.1 },
  ],
  children: (customization) => (
    <div 
      className="w-full h-full rounded-lg" 
      style={{
        backgroundColor: customization.backgroundColor || '#ffffff',
        backgroundImage: `radial-gradient(
          ${customization.dotColor || '#e5e7eb'} 1px, 
          transparent 1px
        )`,
        backgroundSize: `${customization.dotSize || 20}px ${customization.dotSize || 20}px`,
        opacity: customization.opacity || 1,
      }}
    />
  ),
};

export default function BackgroundsPage() {
  return (
    <>
      <PageConfigurator />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PreviewTile {...gradientMeshConfig} />
        <PreviewTile {...gridDotsConfig} />
        {/* Add more background previews here */}
      </div>
    </>
  );
}