'use client';

import React from "react";

import { SimpleNavbar } from "@/components/simple-navbar";
import { UnifiedNavbar } from "@/components/navigation/unified-navbar";
import { useDesignPage } from "@/src/components/design-page-context";
import { getBaseFields } from "@/src/components/base-category-options";
import { BackgroundCustomizationPanel } from "@/src/components/background-customization-panel";

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
      { label: "Animate UI", value: "animate-ui" }
    ],
    basePath: "/design/backgrounds"
  };

  // Convert tabs to navigationItems format for ConsolidatedNavbar
  const navigationItems = tabs.items.map(item => ({
    label: item.label,
    href: `${tabs.basePath}/${item.value}`
  }));

  return (
    <div className="flex flex-col min-h-screen w-full">
  <SimpleNavbar />
  <UnifiedNavbar />
      <main className="flex-1 w-full">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-8">
          <BackgroundsConfigurator />
          {/* Background customization panel that applies to all background components */}
          <BackgroundCustomizationPanel />
          {children}
        </div>
      </main>
    </div>
  );
}
