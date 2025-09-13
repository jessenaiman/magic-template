"use client";

import * as React from "react";
import { cn } from "@/src/app/lib/utils";

interface PreviewGridProps {
  children: React.ReactNode;
  className?: string;
  /** Gap utility classes for spacing between tiles. Default gap-6 */
  gapClass?: string;
}

/**
 * Responsive grid container for preview tiles with explicit breakpoints:
 * - Mobile (default): 1 column
 * - Tablet (sm): 2 columns
 * - Desktop (lg): 3 columns
 * - Large screens (xl): 4 columns
 *
 * Maintains 4:3 aspect ratio through individual tile styling.
 * Each tile handles its own expansion behavior when selected.
 */
export function PreviewGrid({ children, className, gapClass = "gap-6" }: PreviewGridProps) {
  return (
    <div
      className={cn(
        "grid",
        // Responsive column layout
        "grid-cols-1", // Mobile: 1 column
        "sm:grid-cols-2", // Tablet: 2 columns
        "lg:grid-cols-3", // Desktop: 3 columns
        "xl:grid-cols-4", // Large screens: 4 columns
        "min-[1440px]:grid-cols-4", // ≥1440px: exactly 4 columns
        gapClass,
        className
      )}
    >
      {children}
    </div>
  );
}

export default PreviewGrid;
