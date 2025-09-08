'use client';

import React from 'react';
import { SimpleNavbar } from "@/components/simple-navbar";
import { useDesignPage } from "@/components/design-page-context";
import { getBaseFields } from "@/components/base-category-options";
import { TransitionControlPanel } from "@/components/transition-control-panel";

interface LayoutProps {
  children: React.ReactNode;
}

export default function TransitionsLayout({ children }: LayoutProps) {
  function TransitionsConfigurator() {
    const { setTitle, setDescription, setFields } = useDesignPage();
    React.useEffect(() => {
      setTitle('Transitions');
      setDescription('Smooth and engaging transitions for pages, elements, and content. Click the replay button to see transitions in action.');
      setFields(getBaseFields('page-transition'));
    }, [setTitle, setDescription, setFields]);
    return null;
  }

  const tabs = {
    items: [
      { label: "HTML/CSS", value: "html-css" },
      { label: "Tailwind", value: "tailwind" },
      { label: "MagicUI", value: "magicui" },
      { label: "Next.js", value: "nextjs" }
    ],
    basePath: "/design/transitions"
  };

  return (
    <div className="flex flex-col min-h-screen">
  <SimpleNavbar />
      <main className="flex-1 p-4 sm:p-6 pb-24">
        <div className="container mx-auto max-w-7xl space-y-8">
          <TransitionsConfigurator />
          {/* Transition control panel that applies to all transition components */}
          <TransitionControlPanel />
          {children}
        </div>
      </main>
    </div>
  );
}
