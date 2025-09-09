"use client";

import { PreviewTile } from "@/components/preview/preview-tile";
import { Copy } from "lucide-react";
import React, { useEffect } from "react";
import { RippleButton } from "@repo/components/animate-ui/buttons/ripple";
import { LiquidButton } from "@repo/components/animate-ui/buttons/liquid";
import { FlipButton } from "@repo/components/animate-ui/buttons/flip";
import { CopyButton } from "@repo/components/animate-ui/buttons/copy";
import { GitHubStarsButton } from "@repo/components/animate-ui/buttons/github-stars";
import { IconButton } from "@repo/components/animate-ui/buttons/icon";
import { InputButton } from "@repo/components/animate-ui/buttons/input";
import { useDesignPage } from "@/components/design-page-context";

export default function AnimateUIButtonsPage() {
  const { setTitle, setDescription } = useDesignPage();

  useEffect(() => {
    setTitle("Animate UI Buttons");
    setDescription(
      "Interactive button components from Animate UI with smooth animations and enhanced user experiences.",
    );
  }, [setTitle, setDescription]);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <PreviewTile
        title="Copy Button"
        description="Copy to clipboard with feedback"
        componentName="copy-button"
        code=""
      >
        <CopyButton />
      </PreviewTile>

      <PreviewTile
        title="Flip Button"
        description="3D flip animation on hover"
        componentName="flip-button"
        code=""
      >
        <FlipButton frontText="Flip Me" backText="Flipped!" />
      </PreviewTile>

      <PreviewTile
        title="GitHub Stars Button"
        description="GitHub-style star button"
        componentName="github-stars-button"
        code=""
      >
        <GitHubStarsButton username="animate-ui" repo="components" />
      </PreviewTile>

      <PreviewTile
        title="Icon Button"
        description="Animated icon with ripple effect"
        componentName="icon-button"
        code=""
      >
        <IconButton icon={Copy} />
      </PreviewTile>

      <PreviewTile
        title="Input Button"
        description="Expandable input field"
        componentName="input-button"
        code=""
      >
        <InputButton />
      </PreviewTile>

      <PreviewTile
        title="Liquid Button"
        description="Liquid-style flow animation"
        componentName="liquid-button"
        code=""
      >
        <LiquidButton>Liquid Flow</LiquidButton>
      </PreviewTile>

      <PreviewTile
        title="Ripple Button"
        description="Click ripple animation"
        componentName="ripple-button"
        code=""
      >
        <RippleButton>Click for Ripple</RippleButton>
      </PreviewTile>
    </div>
  );
}