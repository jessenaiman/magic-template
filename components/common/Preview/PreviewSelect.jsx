/**
 * DEPRECATED: Use components/design/preview-controls/preview-select instead.
 * Shim mapping legacy PreviewSelect (Chakra) props to new design-system select.
 *
 * Legacy props:
 *  - title       -> label
 *  - options     -> options (expects [{ value, label }])
 *  - value       -> value
 *  - width       -> widthPx
 *  - isDisabled  -> disabled
 *  - name        -> name
 *  - onChange(v) -> onChange(v)
 */
import React from 'react';

const LazySelect = React.lazy(() =>
  import('@/components/design/preview-controls/preview-select').then(m => ({
    default: m.PreviewSelect || m.default
  }))
);

const DeprecatedPreviewSelect = ({
  title = '',
  options = [],
  value = '',
  width = 200,
  isDisabled = false,
  name = '',
  onChange,
}) => {
  if (process.env.NODE_ENV !== 'production') {
    if (!(window).__DEPRECATED_PREVIEW_SELECT_WARNED) {
      console.warn('[Deprecated] components/common/Preview/PreviewSelect is deprecated. Use components/design/preview-controls/preview-select');
      (window).__DEPRECATED_PREVIEW_SELECT_WARNED = true;
    }
  }

  return (
    <React.Suspense fallback={null}>
      <LazySelect
        label={title}
        value={value}
        options={options}
        widthPx={width}
        disabled={isDisabled}
        name={name}
        onChange={onChange}
      />
    </React.Suspense>
  );
};

export default DeprecatedPreviewSelect;
