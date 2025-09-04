// components/preview-controls/preview-surface.tsx
'use client';

import * as React from 'react';
import { PreviewProvider, CustomizationSettings } from '@/components/preview-controls/preview-context';
import { PageControls } from '@/components/preview-controls/page-controls';

interface ExpandableChildProps {
  title: string;
  isExpanded?: boolean;
  onExpand?: () => void;
}

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
  const [expandedTile, setExpandedTile] = React.useState<string | null>(null);

  const handleExpand = (title: string) => {
    setExpandedTile(current => (current === title ? null : title));
  };

  return (
    <PreviewProvider initialCustomization={initialCustomization}>
      {showGlobalControls && <PageControls />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {React.Children.map(children, (child) => {
          if (
            React.isValidElement<ExpandableChildProps>(child) &&
            typeof child.props.title === 'string'
          ) {
            return React.cloneElement(child, {
              isExpanded: expandedTile === child.props.title,
              onExpand: () => handleExpand(child.props.title),
            });
          }
          return child;
        })}
      </div>
    </PreviewProvider>
  );
}