'use client';

import * as React from 'react';
import { PreviewCustomizationPanel, FieldConfig, PreviewCustomizationPanelProps } from './preview-customization-panel';
import { PreviewProvider } from './preview-context';

export interface TemplateCustomizationPanelProps extends Omit<PreviewCustomizationPanelProps, 'fields'> {
  fields?: FieldConfig[];
}

export function TemplateCustomizationPanel({
  fields = [],
  ...props
}: TemplateCustomizationPanelProps) {
  return (
    <PreviewCustomizationPanel
      fields={fields}
      {...props}
    />
  );
}

export function TemplateCustomizationProvider({
  children,
  initialText = 'Template',
  initialCustomization = {},
}: {
  children: React.ReactNode;
  initialText?: string;
  initialCustomization?: Record<string, any>;
}) {
  return (
    <PreviewProvider
      initialText={initialText}
      initialCustomization={initialCustomization}
    >
      {children}
    </PreviewProvider>
  );
}

export default TemplateCustomizationPanel;
