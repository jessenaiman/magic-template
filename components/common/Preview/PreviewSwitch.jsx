/**
 * DEPRECATED: Use components/design/preview-controls/preview-switch instead.
 * Shim mapping legacy PreviewSwitch (Chakra) API to new design-system switch.
 *
 * Legacy props:
 *  - title      -> label
 *  - isChecked  -> checked
 *  - onChange   -> onChange
 *  - isDisabled -> disabled
 */
import React from 'react';

const LazySwitch = React.lazy(() =>
  import('@/components/design/preview-controls/preview-switch').then(m => ({
    default: m.PreviewSwitch || m.default
  }))
);

const DeprecatedPreviewSwitch = ({
  title = '',
  isChecked = false,
  onChange,
  isDisabled = false,
}) => {
  if (process.env.NODE_ENV !== 'production') {
    if (!(window).__DEPRECATED_PREVIEW_SWITCH_WARNED) {
      console.warn('[Deprecated] components/common/Preview/PreviewSwitch is deprecated. Use components/design/preview-controls/preview-switch');
      (window).__DEPRECATED_PREVIEW_SWITCH_WARNED = true;
    }
  }

  return (
    <React.Suspense fallback={null}>
      <LazySwitch
        label={title}
        checked={isChecked}
        onChange={onChange}
        disabled={isDisabled}
        size="md"
      />
    </React.Suspense>
  );
};

export default DeprecatedPreviewSwitch;
