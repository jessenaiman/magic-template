'use client';

import React from "react";
import { DesignTabs } from "@/components/design-tabs";

interface LayoutProps {
  children: React.ReactNode;
}

export default function BackgroundsLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 sm:p-6 pb-24">
        <div className="container mx-auto max-w-7xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Background Components</h1>
            <p className="text-muted-foreground">
              Explore dynamic and interactive background patterns across different technology stacks.
              Each implementation demonstrates modern design techniques and performance optimizations.
            </p>
          </div>
          
          <DesignTabs 
            items={[
              { label: "HTML/CSS", value: "html-css" },
              { label: "Tailwind", value: "tailwind" },
              { label: "MagicUI", value: "magicui" },
              { label: "ReactBits", value: "reactbits" },
              { label: "Animate UI", value: "animate-ui" }
            ]}
            basePath="/design/backgrounds"
          />
          
          {children}
        </div>
      </main>
    </div>
  );
}
