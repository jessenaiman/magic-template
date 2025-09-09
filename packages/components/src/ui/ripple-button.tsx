"use client";

import * as React from "react";
import { cn } from "@/src/lib/utils";
import { Button } from "@/packages/ui/src/ui/button";

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  rippleColor?: string;
}

export function RippleButton({
  className,
  children,
  rippleColor = "rgba(255, 255, 255, 0.2)",
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = React.useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const ripple = { x, y, id: Date.now() };
    setRipples((prevRipples) => [...prevRipples, ripple]);

    setTimeout(() => {
      setRipples((prevRipples) =>
        prevRipples.filter((r) => r.id !== ripple.id),
      );
    }, 1000);
  };

  return (
    <Button
      className={cn(
        "relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary px-6 py-2 text-primary-foreground shadow-lg transition-all hover:shadow-xl",
        className,
      )}
      onClick={createRipple}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute animate-ripple rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
            backgroundColor: rippleColor,
            transform: "translate(-50%, -50%)",
            width: "200%",
            paddingBottom: "200%",
          }}
        />
      ))}
    </Button>
  );
}
