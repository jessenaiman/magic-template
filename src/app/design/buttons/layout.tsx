'use client';

import * as React from 'react';

// This layout is now a pass-through to the shared layout. Category-specific config should be set in the page or via context.
export default function ButtonsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
