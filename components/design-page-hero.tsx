'use client';

import * as React from 'react';
import { useDesignPage } from '@/components/design-page-context';
import { usePreviewContext } from './preview-context';
import PreviewCustomizationPanel from './preview-customization-panel';
// ... other imports

export function DesignPageHero() {
  const { title, description, fields } = useDesignPage();
  const { state, updateCustomization } = usePreviewContext();

  return (
    <div className="mb-8 rounded-lg border bg-card text-card-foreground p-6 shadow-sm">
      <div className="space-y-1.5 mb-4">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* The customization panel is now part of the hero */}
      <PreviewCustomizationPanel
        fields={fields}
        currentSettings={state.customization}
        onSettingsChange={updateCustomization}
        collapsible={false}
        className="border-none shadow-none p-0"
      />
    </div>
  );
}