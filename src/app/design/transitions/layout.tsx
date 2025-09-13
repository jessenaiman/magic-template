'use client';

import React from 'react';
import { SimpleNavbar } from '@/components/simple-navbar';
import { useDesignPage } from '@/components/design-page-context';
import { getBaseFields } from '@/components/base-category-options';
import { TransitionControlPanel } from '@/components/transition-control-panel';

interface LayoutProps {
  children: React.ReactNode;
}

export default function TransitionsLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
