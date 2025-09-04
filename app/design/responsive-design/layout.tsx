'use client';

import { DesignNavigation } from "@/components/ui/design-navigation";
import { DesignTabs } from "@/components/design-tabs";

interface LayoutProps {
  children: React.ReactNode;
}

export default function ResponsiveDesignLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 sm:p-6 pb-24">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Responsive Design</h1>
            <p className="text-sm text-muted-foreground">
              Adaptive layouts and components that work seamlessly across devices.
            </p>
          </div>
          <DesignTabs 
            items={[
              { label: "HTML/CSS", value: "html-css" },
              { label: "Tailwind", value: "tailwind" },
              { label: "MagicUI", value: "magicui" },
              { label: "Next.js", value: "nextjs" }
            ]}
            basePath="/design/responsive-design"
          />
          {children}
        </div>
      </main>
    </div>
  );
}
