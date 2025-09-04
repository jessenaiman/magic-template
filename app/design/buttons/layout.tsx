'use client';

import React from "react";
import { DesignNavigation } from "@/components/ui/design-navigation";
import { DesignTabs } from "@/components/design-tabs";

interface LayoutProps {
  children: React.ReactNode;
}

export default function ButtonsLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 sm:p-6 pb-24">
        <div className="container mx-auto max-w-7xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Button Components</h1>
            <p className="text-muted-foreground">
              Discover interactive button components with modern animations and effects.
              Each implementation showcases different styling approaches and interaction patterns.
            </p>
          </div>
          
          <DesignTabs 
            items={[
              { label: "HTML/CSS", value: "html-css" },
              { label: "Tailwind", value: "tailwind" },
              { label: "Shadcn", value: "shadcn" },
              { label: "Magic", value: "magic" },
              { label: "Animate CSS", value: "animate-css" }
            ]}
            basePath="/design/buttons"
          />
          
          {children}
        </div>
      </main>
    </div>
  );
}
