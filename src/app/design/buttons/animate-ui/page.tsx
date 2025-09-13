'use client';

import { PreviewTile } from '@/components/preview/preview-tile';
import { Copy } from 'lucide-react';
import React, { useEffect } from 'react';
import { RippleButton } from '@/components/animate-ui/buttons/ripple';
import { LiquidButton } from '@/components/animate-ui/buttons/liquid';
import { FlipButton } from '@/components/animate-ui/buttons/flip';
import { CopyButton } from '@/components/animate-ui/buttons/copy';
import { GitHubStarsButton } from '@/components/animate-ui/buttons/github-stars';
import { IconButton } from '@/components/animate-ui/buttons/icon';
import { InputButton } from '@/components/animate-ui/buttons/input';
export default function AnimateUIButtonsPage() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <PreviewTile
        title="Copy Button"
        description="Copy to clipboard with feedback"
        componentName="copy-button"
        code=""
      >
        <CopyButton />
      </PreviewTile>
      <PreviewTile
        title="Input Button"
        description="Expandable input field"
        componentName="input-button"
        code=""
      >
        <InputButton />
      </PreviewTile>
      <PreviewTile
        title="Liquid Button"
        description="Liquid-style flow animation"
        componentName="liquid-button"
        code=""
      >
        <LiquidButton>Liquid Flow</LiquidButton>
      </PreviewTile>
      <PreviewTile
        title="Ripple Button"
        description="Click ripple animation"
        componentName="ripple-button"
        code=""
      >
        <RippleButton>Click for Ripple</RippleButton>
      </PreviewTile>
    </div>
  );
}
