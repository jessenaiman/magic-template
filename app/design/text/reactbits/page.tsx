'use client';

import { PreviewSurface } from '@/components/preview-surface';

export default function ReactBitsTextPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">ReactBits Text Animations</h2>
        <p className="text-muted-foreground">
          Interactive text animations powered by ReactBits. These components use advanced animation libraries
          like Framer Motion and GSAP for smooth, performant effects.
        </p>
      </div>

      <PreviewSurface>
        <div className="p-4 bg-yellow-100 border border-yellow-300 rounded">
          <p className="text-yellow-800">Text animation components temporarily disabled - awaiting installation</p>
        </div>
      </PreviewSurface>
    </div>
  );
}
