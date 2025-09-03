/**
 * DEPRECATED: Previous visual marketing/demo overlay used in legacy preview system.
 *
 * This component is no longer part of the refactored preview architecture.
 * Replace usages by composing your own overlay inside the new <PreviewTile> children
 * or by creating a purpose-built wrapper colocated with the feature being demonstrated.
 *
 * Migration Guidance:
 *  - Import removed Chakra-specific layout/styling.
 *  - Move any nested interactive elements directly into the new preview body.
 *  - Use tailwind utility classes for styling.
 *
 * Example (old):
 *   <BackgroundContent headline="Explore" />
 *
 * New (compose manually):
 *   <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
 *     <span className="px-3 py-1 rounded-full text-xs font-medium bg-background/50 border">New Component</span>
 *     <h2 className="mt-4 text-center text-3xl font-bold tracking-tight max-w-sm">Explore the depths of creativity</h2>
 *   </div>
 *
 * This shim intentionally renders only minimal structure to avoid shipping unused legacy markup.
 */
import React from 'react';

const DeprecatedBackgroundContent = ({
  children,
  // Retain legacy prop names for drop-in safety (ignored)
  pillText,
  pillIcon,
  headline,
  mainCtaText,
  secondCtaText,
  ...rest
}) => {
  if (process.env.NODE_ENV !== 'production') {
    if (!(window).__DEPRECATED_PREVIEW_BACKGROUND_CONTENT_WARNED) {
      console.warn(
        '[Deprecated] components/common/Preview/BackgroundContent has been removed. Compose overlays directly within the new PreviewTile.'
      );
      (window).__DEPRECATED_PREVIEW_BACKGROUND_CONTENT_WARNED = true;
    }
  }

  return (
    <div
      {...rest}
      className="relative w-full h-full pointer-events-none text-center flex items-center justify-center"
      data-deprecated-preview-background=""
    >
      {children || (
        <div className="text-[11px] text-muted-foreground italic">Deprecated BackgroundContent placeholder</div>
      )}
    </div>
  );
};

export default DeprecatedBackgroundContent;
