/**
 * DEPRECATED: Use components/design/preview-controls/preview-refresh-button instead.
 * Shim mapping the legacy RefreshButton (Chakra) to the new design-system PreviewRefreshButton.
 *
 * Legacy:
 *   <RefreshButton onClick={...} />
 *
 * New:
 *   <PreviewRefreshButton onClick={...} size="sm" />
 *
 * Differences:
 * - Styling / positioning now handled by consumer. This shim preserves only behavior + accessible label.
 */
import React from 'react';

const LazyRefresh = React.lazy(() =>
  import('@/components/design/preview-controls/preview-refresh-button').then(m => ({
    default: m.PreviewRefreshButton || m.default
  }))
);

const DeprecatedRefreshButton = ({ onClick }) => {
  if (process.env.NODE_ENV !== 'production') {
    if (!(window).__DEPRECATED_PREVIEW_REFRESH_BUTTON_WARNED) {
      console.warn('[Deprecated] components/common/Preview/RefreshButton is deprecated. Use components/design/preview-controls/preview-refresh-button');
      (window).__DEPRECATED_PREVIEW_REFRESH_BUTTON_WARNED = true;
    }
  }

  return (
    <React.Suspense fallback={null}>
      <LazyRefresh
        onClick={onClick}
        size="sm"
        className="!absolute top-3 right-3"
        tooltip="Replay"
      />
    </React.Suspense>
  );
};

export default DeprecatedRefreshButton;
