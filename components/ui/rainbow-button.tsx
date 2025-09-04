"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function RainbowButton({
  className,
  children,
  ...props
}: RainbowButtonProps) {
  return (
    <Button
      className={cn(
        "group relative inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] font-medium text-white transition-all hover:bg-gradient-to-l",
        className,
      )}
      {...props}
    >
      <span className="relative rounded-md bg-black px-6 py-2 transition-all group-hover:bg-transparent">
        {children}
      </span>
    </Button>
  );
}
