// Magic Buttons Page – Only valid PreviewTile demos, all broken code removed

"use client";

import { useDesignPage } from "@/components/design-page-context";
import { PreviewTile } from "@/components/preview/preview-tile";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { RippleButton } from "@/components/ui/ripple-button";
import React from "react";

export default function MagicButtonsPage() {
  const { setTitle, setDescription, setFields } = useDesignPage();

  React.useEffect(() => {
    setTitle("Magic Buttons");
    setDescription(
      "Official MagicUI button components with stunning animations and effects.",
    );

    setFields([
      {
        id: "buttonText",
        label: "Button Text",
        type: "text",
        description: "Text displayed on buttons",
      },
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
      {
        id: "gradientFrom",
        label: "Gradient From",
        type: "color",
        description: "Start color of gradient",
      },
      {
        id: "gradientTo",
        label: "Gradient To",
        type: "color",
        description: "End color of gradient",
      },
      {
        id: "spotlightBackground",
        label: "Spotlight Background",
        type: "color",
        description: "Background color for spotlight effect",
      },
    ]);
  }, [setTitle, setDescription, setFields]);

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* Rainbow Button */}
      <PreviewTile
          title="Rainbow Button"
          componentName="RainbowButton"
          code={`<RainbowButton>{buttonText}</RainbowButton>`}
        >
          {(customization) => <RainbowButton>{customization.buttonText || "Get Unlimited Access"}</RainbowButton>}
        </PreviewTile>
        {/* Ripple Button */}
        <PreviewTile
          title="Ripple Button"
          componentName="RippleButton"
          code={`<RippleButton rippleColor="{rippleColor}">{buttonText}</RippleButton>`}
        >
          {(customization) => <RippleButton rippleColor={customization.rippleColor || "#ADD8E6"}>{customization.buttonText || "Click me"}</RippleButton>}
        </PreviewTile>
        {/* Magnetic Button */}
        <PreviewTile
          title="Magnetic Button"
          componentName="Button"
          code={`<Button className="group relative inline-flex h-12 items-center justify-center rounded-md px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110" style={{ background: \`linear-gradient(to right, \${gradientFrom}, \${gradientTo})\` }}>
  <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
    {buttonText}
  </span>
  <div className="absolute inset-0 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: \`linear-gradient(to right, \${gradientFrom}dd, \${gradientTo}dd)\` }}></div>
</Button>`}
        >
          {(customization) => (
            <Button className="group relative inline-flex h-12 items-center justify-center rounded-md px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110" style={{ background: `linear-gradient(to right, ${customization.gradientFrom || "#8b5cf6"}, ${customization.gradientTo || "#ec4899"})` }}>
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                {customization.buttonText || "Magnetic Hover"}
              </span>
              <div className="absolute inset-0 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: `linear-gradient(to right, ${customization.gradientFrom || "#8b5cf6"}dd, ${customization.gradientTo || "#ec4899"}dd)` }}></div>
            </Button>
          )}
        </PreviewTile>
        {/* Spotlight Button */}
        <PreviewTile
          title="Spotlight Button"
          componentName="Button"
          code={`<Button className="group relative inline-flex h-12 items-center justify-center rounded-md px-6 py-2 font-medium text-white shadow-lg transition-all hover:shadow-xl" style={{ backgroundColor: \`\${spotlightBackground}\` }}>
  <span className="relative z-10">{buttonText}</span>
  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
</Button>`}
        >
          {(customization) => (
            <Button className="group relative inline-flex h-12 items-center justify-center rounded-md px-6 py-2 font-medium text-white shadow-lg transition-all hover:shadow-xl" style={{ backgroundColor: customization.spotlightBackground || "#0f172a" }}>
              <span className="relative z-10">{customization.buttonText || "Spotlight Effect"}</span>
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Button>
          )}
        </PreviewTile>
      </div>
  );
}
