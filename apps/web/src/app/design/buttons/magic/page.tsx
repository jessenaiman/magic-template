// Magic Buttons Page – Only valid PreviewTile demos, all broken code removed

"use client";

import { useDesignPage } from "@/components/design-page-context";
import { PreviewTile } from "@/components/preview/preview-tile";
import { Button } from "@repo/components/ui/button";
import { RainbowButton } from "@repo/components/ui/rainbow-button";
import { RippleButton } from "@repo/components/ui/ripple-button";
import React from "react";

export default function MagicButtonsPage() {
  const { setTitle, setDescription, setFields } = useDesignPage();

  React.useEffect(() => {
    setTitle("Magic Buttons");
    setDescription(
      "Official MagicUI button components with stunning animations and effects.",
    );

    setFields([
      // Removed broken custom fields to fix FieldConfig errors
      {
        id: "shimmerColor",
        label: "Shimmer Color",
        type: "color",
        description: "Color of the shimmer effect",
      },
      {
        id: "pulseColor",
        label: "Pulse Color",
        type: "color",
        description: "Color of the pulse effect",
      },
      {
        id: "rippleColor",
        label: "Ripple Color",
        type: "color",
        description: "Color of the ripple effect",
      },
    ]);
  }, [setTitle, setDescription, setFields]);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Rainbow Button */}
      <PreviewTile
          title="Rainbow Button"
          componentName="RainbowButton"
          code={`<RainbowButton>Get Unlimited Access</RainbowButton>`}
        >
          {() => <RainbowButton>Get Unlimited Access</RainbowButton>}
        </PreviewTile>
        {/* Ripple Button */}
        <PreviewTile
          title="Ripple Button"
          componentName="RippleButton"
          code={`<RippleButton rippleColor="#ADD8E6">Click me</RippleButton>`}
        >
          {() => <RippleButton rippleColor="#ADD8E6">Click me</RippleButton>}
        </PreviewTile>
        {/* Magnetic Button */}
        <PreviewTile
          title="Magnetic Button"
          componentName="Button"
          code={`<Button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110">
  <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
    Magnetic Hover
  </span>
  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
</Button>`}
        >
          {() => (
            <Button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110">
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                Magnetic Hover
              </span>
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Button>
          )}
        </PreviewTile>
        {/* Spotlight Button */}
        <PreviewTile
          title="Spotlight Button"
          componentName="Button"
          code={`<Button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-slate-900 px-6 py-2 font-medium text-white shadow-lg transition-all hover:shadow-xl">
  <span className="relative z-10">Spotlight Effect</span>
  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
</Button>`}
        >
          {() => (
            <Button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-slate-900 px-6 py-2 font-medium text-white shadow-lg transition-all hover:shadow-xl">
              <span className="relative z-10">Spotlight Effect</span>
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Button>
          )}
        </PreviewTile>
      </div>
  );
}
