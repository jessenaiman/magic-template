'use client';

import React from "react";
import { DesignTabs } from "@/components/design-tabs";

interface LayoutProps {
  children: React.ReactNode;
}

export default function TextLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 sm:p-6 pb-24">
        <div className="container mx-auto max-w-7xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Text Components</h1>
            <p className="text-muted-foreground">
              Explore text styling and animation components across different technology stacks.
              Each implementation showcases the same concepts using different approaches.
            </p>
          </div>
          
          <DesignTabs 
            items={[
              { label: "HTML/CSS", value: "html-css" },
              { label: "Tailwind", value: "tailwind" },
              { label: "Shadcn", value: "shadcn" },
              { label: "MagicUI", value: "magicui" },
              { label: "ReactBits", value: "reactbits" }
            ]}
            basePath="/design/text"
          />
          
          {children}
        </div>
      </main>
    </div>
  );
}
