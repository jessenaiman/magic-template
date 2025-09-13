'use client';

import React from 'react';

import { SimpleNavbar } from '@/components/simple-navbar';
import { ConsolidatedNavbar } from '@/components/consolidated-navbar';
import { useDesignPage } from '@/components/design-page-context';
import { getBaseFields } from '@/components/base-category-options';
import { BackgroundCustomizationPanel } from '@/components/background-customization-panel';

interface LayoutProps {
  children: React.ReactNode;
}

export default function BackgroundsLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
