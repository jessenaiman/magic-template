"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface PreviewGridProps {
  children: React.ReactNode;
  className?: string;
  /** Minimum column width in pixels before wrapping to next row. Default 280 */
  minColPx?: number;
  /** Gap utility classes, e.g. "gap-6". Default gap-6 */
  gapClass?: string;
}

/**
 * Responsive auto-fit grid for preview tiles.
 * - 1 tile: stretches full width
 * - 2+ tiles: evenly fills each row without squishing
 * - Uses CSS Grid repeat(auto-fit, minmax(var(--tile-min, 280px), 1fr))
 */
export function PreviewGrid({ children, className, minColPx = 280, gapClass = "gap-6" }: PreviewGridProps) {
  return (
    <div
      className={cn(
        "grid",
        gapClass,
        "[grid-template-columns:repeat(auto-fit,minmax(var(--tile-min,280px),1fr))]",
        className
      )}
      style={{
        // @ts-expect-error: CSS var is fine here
        "--tile-min": `${minColPx}px`,
      }}
    >
      {children}
    </div>
  );
}

export default PreviewGrid;
