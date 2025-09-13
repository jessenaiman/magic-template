'use client';

import * as React from 'react';
import {
  PreviewCustomizationPanel,
  FieldConfig,
  PreviewCustomizationPanelProps,
} from '../preview/preview-customization-panel';

export interface TemplateCustomizationPanelProps
  extends Omit<PreviewCustomizationPanelProps, 'fields'> {
  fields?: FieldConfig[];
}

export function TemplateCustomizationPanel({
  fields = [],
  ...props
}: TemplateCustomizationPanelProps) {
  return <PreviewCustomizationPanel fields={fields} {...props} />;
}

export default TemplateCustomizationPanel;
