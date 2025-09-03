/**
 * DEPRECATED: Use components/design/preview-controls/preview-input instead.
 * This shim preserves import paths while migrating to the new preview system.
 */
import React from 'react';

// Lazy load to avoid unnecessary bundle impact
const Lazy = React.lazy(() => import('@/components/design/preview-controls/preview-input'));

const DeprecatedPreviewInput = (props) => {
  if (process.env.NODE_ENV !== 'production') {
    // Fire only once
    if (!(window).__DEPRECATED_PREVIEW_INPUT_WARNED) {
      console.warn('[Deprecated] components/common/Preview/PreviewInput is deprecated. Use components/design/preview-controls/preview-input');
      (window).__DEPRECATED_PREVIEW_INPUT_WARNED = true;
    }
  }
  return (
    <React.Suspense fallback={null}>
      <Lazy
        label={props.title}
        value={props.value}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        widthPx={props.width}
        disabled={props.isDisabled}
        onChange={props.onChange}
      />
    </React.Suspense>
  );
};

export default DeprecatedPreviewInput;
