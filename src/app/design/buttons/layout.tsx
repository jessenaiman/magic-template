'use client';

import React from "react";
import { SimpleNavbar } from "@/components/simple-navbar";
import { useDesignPage } from "@/components/design-page-context";
import { getBaseFields } from "@/components/base-category-options";

interface LayoutProps {
  children: React.ReactNode;
}

export default function ButtonsLayout({ children }: LayoutProps) {
  function ButtonsConfigurator() {
    const { setTitle, setDescription, setFields } = useDesignPage();
    React.useEffect(() => {
      setTitle('Button Components');
      setDescription('Discover interactive button components with modern animations and effects. Each implementation showcases different styling approaches and interaction patterns.');
      setFields(getBaseFields('button'));
    }, [setTitle, setDescription, setFields]);
    return null;
  }

  const tabs = {
    items: [
      { label: "HTML/CSS", value: "html-css" },
      { label: "Tailwind", value: "tailwind" },
      { label: "Shadcn", value: "shadcn" },
      { label: "Magic", value: "magic" },
      { label: "Animate CSS", value: "animate-css" }
    ],
    basePath: "/design/buttons"
  };

  return (
    <div className="flex flex-col min-h-screen">
  <SimpleNavbar />
      <main className="flex-1 p-4 sm:p-6 pb-24">
        <div className="container mx-auto max-w-7xl space-y-8">
          <ButtonsConfigurator />
          {children}
        </div>
      </main>
    </div>
  );
}
