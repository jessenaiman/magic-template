"use client";

import { useDesignControls } from "@/hooks/use-design-controls";
import { ManagementBar } from "@workspace/ui/components/animate-ui/ui-elements/management-bar";
import { IconButton } from "@workspace/ui/components/animate-ui/buttons/icon";
import { cn } from "@workspace/ui/lib/utils";
import { Play, Square, RefreshCcw } from "lucide-react";

// Using the modified ManagementBar component from animate-ui that now supports custom content
export function DesignControlsBar() {
  const { controls, setPlaying, resetControls } = useDesignControls();

  return (
    <ManagementBar
      className={cn(
        "fixed bottom-6 left-1/2 z-50 -translate-x-1/2",
        "flex w-fit flex-wrap items-center gap-y-2 rounded-2xl border border-border bg-background p-2 shadow-lg"
      )}
    >
      <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-neutral-200/60 dark:bg-neutral-600/80">
        <IconButton
          size="lg"
          active={controls.playing}
          onClick={() => setPlaying(true)}
          aria-label="Play"
          icon={Play}
        />
        <IconButton
          size="lg"
          active={!controls.playing}
          onClick={() => setPlaying(false)}
          aria-label="Stop"
          icon={Square}
        />
      </div>

      <div className="mx-3 h-6 w-px bg-border rounded-full" />

      <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-neutral-200/60 dark:bg-neutral-600/80">
        <IconButton
          size="lg"
          onClick={resetControls}
          aria-label="Reset"
          className="text-muted-foreground hover:text-primary"
          icon={RefreshCcw}
        />
      </div>
    </ManagementBar>
  );
}
