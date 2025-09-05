'use client';

import * as React from 'react';
import { PreviewTile, PreviewTileProps } from './preview-tile';
import { useDesignPage } from './design-page-context';
import { CustomizationSettings } from './preview-context';

export interface BackgroundPreviewTileProps extends PreviewTileProps {
  // Additional props specific to background components can be added here
}

/**
 * Specialized PreviewTile for background components that automatically
 * applies category-level background customization from DesignPageContext.
 * 
 * This component extends the base PreviewTile functionality by merging
 * category-level background customization with the existing customization
 * layers (global preview context + tile-specific initial customization).
 */
export function BackgroundPreviewTile(props: BackgroundPreviewTileProps) {
  const { backgroundCustomization } = useDesignPage();
  
  // Merge the background customization with the existing initial customization
  const mergedInitialCustomization = React.useMemo(() => ({
    ...props.initialCustomization,
    ...backgroundCustomization
  }), [props.initialCustomization, backgroundCustomization]);

  return (
    <PreviewTile
      {...props}
      initialCustomization={mergedInitialCustomization}
    />
  );
}

/**
 * Higher-order component that wraps any component with background customization
 * This can be used for components that aren't using PreviewTile directly
 */
export function withBackgroundCustomization<P extends object>(
  WrappedComponent: React.ComponentType<P & { customization?: Partial<CustomizationSettings> }>
) {
  return function WithBackgroundCustomization(props: P) {
    const { backgroundCustomization } = useDesignPage();
    
    return (
      <WrappedComponent
        {...props}
        customization={backgroundCustomization}
      />
    );
  };
}