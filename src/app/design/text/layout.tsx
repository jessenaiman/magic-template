'use client';

import React from "react";

import { SimpleNavbar } from "@/components/simple-navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function TextLayout({ children }: LayoutProps) {
  // Tabs configuration removed - not currently used in this layout

  return (
    <div className="flex flex-col min-h-screen">
  <SimpleNavbar />
      <main className="flex-1 p-4 sm:p-6 pb-24">
        <div className="container mx-auto max-w-7xl space-y-8">
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Explore text styling and animation components across different technology stacks.
              Each implementation showcases the same concepts using different approaches.
            </p>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
