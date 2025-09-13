'use client';

import React from 'react';

import { SimpleNavbar } from '@/components/simple-navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function TextLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
