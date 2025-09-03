/**
 * DEPRECATED: Use components/design/preview-controls/preview-slider instead.
 * This shim maps the legacy PreviewSlider (Chakra-based) props to the new design-system slider.
 *
 * Legacy props:
 *  - title        -> label
 *  - min          -> min
 *  - max          -> max
 *  - step         -> step
 *  - value        -> value
 *  - valueUnit    -> valueUnit
 *  - width        -> widthPx
 *  - isDisabled   -> disabled
 *  - onChange(n)  -> onChange(n)
 */
import React from 'react';

const LazySlider = React.lazy(() => import('@/components/design/preview-controls/preview-slider').then(m => ({ default: m.PreviewSlider || m.default })));

const DeprecatedPreviewSlider = ({
  title = '',
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  valueUnit = '',
  width = 150,
  isDisabled = false,
  onChange,
}) => {
  if (process.env.NODE_ENV !== 'production') {
    if (!(window).__DEPRECATED_PREVIEW_SLIDER_WARNED) {
      console.warn('[Deprecated] components/common/Preview/PreviewSlider is deprecated. Use components/design/preview-controls/preview-slider');
      (window).__DEPRECATED_PREVIEW_SLIDER_WARNED = true;
    }
  }

  return (
    <React.Suspense fallback={null}>
      <LazySlider
        label={title}
        value={value}
        min={min}
        max={max}
        step={step}
        valueUnit={valueUnit}
        widthPx={width}
        disabled={isDisabled}
        onChange={onChange}
      />
    </React.Suspense>
  );
};

export default DeprecatedPreviewSlider;
