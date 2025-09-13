'use client';

import React from 'react';
import { SimpleNavbar } from '@/components/simple-navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function ResponsiveDesignLayout({ children }: LayoutProps) {
  // Tabs configuration removed - not currently used in this layout

  return (
    <div className="flex flex-col min-h-screen">
      <SimpleNavbar />
      <main className="flex-1 p-4 sm:p-6 pb-24">
        <div className="container mx-auto max-w-7xl space-y-8">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Responsive Design
            </h1>
            <p className="text-sm text-muted-foreground">
              Adaptive layouts and components that work seamlessly across
              devices.
            </p>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
