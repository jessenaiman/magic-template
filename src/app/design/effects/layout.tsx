'use client';

import React from 'react';

import { useDesignPage } from '@/components/design-page-context';
import { getBaseFields } from '@/components/base-category-options';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}
