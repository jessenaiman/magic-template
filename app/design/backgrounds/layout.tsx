'use client';

import React from "react";
import { SimpleNavbar } from "@/components/simple-navbar";
import { useDesignPage } from "@/components/design-page-context";
import { getBaseFields } from "@/components/base-category-options";
import { BackgroundCustomizationPanel } from "@/components/background-customization-panel";

interface LayoutProps {
  children: React.ReactNode;
}

export default function BackgroundsLayout({ children }: LayoutProps) {
  function BackgroundsConfigurator() {
    const { setTitle, setDescription, setFields, setBackgroundCustomization } = useDesignPage();
    React.useEffect(() => {
      setTitle('Background Components');
      setDescription('Explore dynamic and interactive background patterns across different technology stacks. Each implementation demonstrates modern design techniques and performance optimizations.');
      setFields(getBaseFields('background'));
      // Initialize with default background customization
      setBackgroundCustomization({
        backgroundColor: '#0f172a',
        accentColor: '#22c55e',
        opacity: 100,
        intensity: 50,
        speed: 50
      });
    }, [setTitle, setDescription, setFields, setBackgroundCustomization]);
    return null;
  }

  const tabs = {
    items: [
      { label: "HTML/CSS", value: "html-css" },
      { label: "Tailwind", value: "tailwind" },
      { label: "MagicUI", value: "magicui" },
      { label: "ReactBits", value: "reactbits" },
      { label: "Animate UI", value: "animate-ui" }
    ],
    basePath: "/design/backgrounds"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SimpleNavbar tabs={tabs} />
      <main className="flex-1 p-4 sm:p-6 pb-24">
        <div className="container mx-auto max-w-7xl space-y-8">
          <BackgroundsConfigurator />
          {/* Background customization panel that applies to all background components */}
          <BackgroundCustomizationPanel />
          {children}
        </div>
      </main>
    </div>
  );
}
