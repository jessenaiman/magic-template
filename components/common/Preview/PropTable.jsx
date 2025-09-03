/**
 * DEPRECATED: Use components/design/preview-controls/preview-prop-table instead.
 * Shim that adapts legacy PropTable `data` prop to the new PreviewPropTable `propsList` API.
 *
 * Legacy shape:
 *   <PropTable data={[{ name, type, default, description }]} />
 *
 * New shape:
 *   <PreviewPropTable propsList={[{ name, type, default, description }]} />
 *
 * NOTES:
 * - Styling, copy buttons, filtering, and required highlighting are now handled by the new table.
 * - This shim purposefully keeps only the legacy surface. Prefer migrating to the new component directly.
 */
import React from 'react';

const LazyPropTable = React.lazy(() =>
  import('@/components/design/preview-controls/preview-prop-table').then(m => ({
    default: m.PreviewPropTable || m.default
  }))
);

const DeprecatedPropTable = ({ data = [] }) => {
  if (process.env.NODE_ENV !== 'production') {
    if (!(window).__DEPRECATED_PREVIEW_PROP_TABLE_WARNED) {
      console.warn(
        '[Deprecated] components/common/Preview/PropTable is deprecated. Use components/design/preview-controls/preview-prop-table'
      );
      (window).__DEPRECATED_PREVIEW_PROP_TABLE_WARNED = true;
    }
  }

  // Basic normalization (ensure required field presence)
  const normalized = Array.isArray(data)
    ? data.map(row => ({
        name: row.name ?? '',
        type: row.type ?? '—',
        default: row.default,
        description: row.description,
        // best-effort heuristic: mark required if default is undefined/null and description contains 'required'
        required:
          row.required === true ||
          (!row.default && typeof row.description === 'string' && /required/i.test(row.description))
      }))
    : [];

  return (
    <React.Suspense fallback={null}>
      <LazyPropTable
        title="Props"
        propsList={normalized}
        highlightRequired
        showCopyButtons
      />
    </React.Suspense>
  );
};

export default DeprecatedPropTable;
