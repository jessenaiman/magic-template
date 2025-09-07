'use client';

import React from "react";

import { SimpleNavbar } from "@/components/simple-navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function TextLayout({ children }: LayoutProps) {
  const tabs = {
    items: [
      { label: "HTML/CSS", value: "html-css" },
      { label: "Tailwind", value: "tailwind" },
      { label: "Shadcn", value: "shadcn" },
      { label: "MagicUI", value: "magicui" },
    ],
    basePath: "/design/text"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SimpleNavbar tabs={tabs} />
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
