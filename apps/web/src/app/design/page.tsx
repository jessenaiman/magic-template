"use client";

import * as React from "react";
import Link from "next/link";
import { NAVIGATION_CONFIG } from "@/src/lib/navigation";
import { renderIcon, type NavItem } from "@/src/lib/navigation-utils";
import { useDesignPage } from "@/src/components/design-page-context";
import { cn } from "@/src/lib/utils";

function PageConfigurator() {
  const { setTitle, setDescription, setFields } = useDesignPage();
  React.useEffect(() => {
    setTitle("Design System Showcase");
    setDescription(
      "Browse categories of reusable UI patterns. Each category provides shared controls in the hero, and every page renders data-driven preview tiles."
    );
    setFields([]); // No global fields for the landing page
  }, [setTitle, setDescription, setFields]);
  return null;
}

function CategoryCard({ item }: { item: NavItem }) {
  return (
    <Link
      href={item.href}
      className={cn(
        "group relative rounded-lg border bg-card text-card-foreground",
        "p-5 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
      )}
    >
      <div className="flex items-start gap-3">
        {item.icon && (
          <div className="mt-0.5 rounded-md border p-2 bg-background/60">
            {renderIcon(item.icon, "h-5 w-5")}
          </div>
        )}
        <div className="space-y-1">
          <div className="text-base font-semibold tracking-tight">{item.label}</div>
          {item.description && (
            <p className="text-sm text-muted-foreground">{item.description}</p>
          )}
          {item.children && item.children.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.children
                .filter((c) => c.href !== item.href)
                .slice(0, 6)
                .map((child) => (
                  <span
                    key={child.href}
                    className="text-xs rounded-md border px-2 py-0.5 bg-background/70"
                  >
                    {child.label}
                  </span>
                ))}
              {item.children.length > 6 && (
                <span className="text-xs text-muted-foreground">+ more</span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

function DesignPage() {
  // Find the 'Design' section in mainNav
  const designSection = NAVIGATION_CONFIG.mainNav.find((item: NavItem) => item.label === 'Design');
  const categories = designSection?.children ?? [];
  return (
    <div className="space-y-6">
      <PageConfigurator />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {categories.map((cat: NavItem) => (
          <CategoryCard key={cat.href} item={cat} />
        ))}
      </div>
    </div>
  );
}

export default DesignPage;
