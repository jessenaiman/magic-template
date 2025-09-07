'use client';

import * as React from 'react';
import { PreviewTile } from '../preview/preview-tile';
import { FieldConfig } from '../preview/preview-customization-panel';

export interface TemplatePreviewProps {
  title: string;
  description?: string;
  componentName: string;
  code: string;
  customFields?: FieldConfig[];
  initialCustomization?: Record<string, any>;
  children: React.ReactNode | ((customization: Record<string, any>) => React.ReactNode);
  className?: string;
  codeType?: 'jsx' | 'css' | 'tailwind' | 'html' | 'tsx';
}

export function TemplatePreview({
  title,
  description,
  componentName,
  code,
  customFields = [],
  initialCustomization = {},
  children,
  className,
  codeType = 'jsx',
}: TemplatePreviewProps) {
  return (
    <div className={className}>
      <PreviewTile
        title={title}
        description={description}
        componentName={componentName}
        code={code}
        customFields={customFields}
        initialCustomization={initialCustomization}
        codeType={codeType}
      >
        {children}
      </PreviewTile>
    </div>
  );
}

export default TemplatePreview;
