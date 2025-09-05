"use client";
// MagicUI Page Transitions Demo using PreviewSurface/PreviewTile

import React, { useState } from "react";
import { PreviewSurface } from "@/components/preview-surface";
import { PreviewTile } from "@/components/preview-tile";
import { BlurFade } from "@/components/magicui/blur-fade";

const magicuiTransitionCode = `
import { BlurFade } from "@/components/magicui/blur-fade";

function Demo() {
  const [page, setPage] = useState("A");
  return (
    <>
      <button onClick={() => setPage("A")}>Go to Page A</button>
      <button onClick={() => setPage("B")}>Go to Page B</button>
      <BlurFade duration={0.6} direction="up">
        {page === "A" ? "Page A Content" : "Page B Content"}
      </BlurFade>
    </>
  );
}
`;

function MagicUITransitionDemo({ customization }: { customization: Partial<Record<string, any>> }) {
  const [page, setPage] = useState<"A" | "B">("A");
  const duration = customization.duration ?? 0.6;
  const direction = customization.direction || "top";
  const ease = customization.ease || "easeOut";

  return (
    <div className="relative w-full h-40 flex flex-col items-center justify-center">
      <div className="mb-4 flex gap-4">
        <button
          className="px-4 py-2 rounded bg-blue-500 text-white font-medium transition-colors hover:bg-blue-600"
          onClick={() => setPage("A")}
        >
          Go to Page A
        </button>
        <button
          className="px-4 py-2 rounded bg-purple-500 text-white font-medium transition-colors hover:bg-purple-600"
          onClick={() => setPage("B")}
        >
          Go to Page B
        </button>
      </div>
      <div className="relative w-full h-24 flex items-center justify-center">
        <BlurFade
          duration={duration}
          direction={direction}
          className="absolute w-full h-full flex items-center justify-center bg-white rounded shadow"
          style={{
            zIndex: 2,
          }}
          key={page}
        >
          <span className={`text-lg font-semibold ${page === "A" ? "text-blue-700" : "text-purple-700"}`}>
            {page === "A" ? "Page A Content" : "Page B Content"}
          </span>
        </BlurFade>
      </div>
    </div>
  );
}

export default function MagicUIPageTransitionsPage() {
  return (
    <PreviewSurface initialCustomization={{ duration: 0.6, direction: "top", ease: "easeOut" }}>
      <PreviewTile
        title="MagicUI BlurFade Page Transition"
        description="Simulate navigation between pages using MagicUI's BlurFade animation. Click the buttons to switch pages."
        componentName="BlurFade"
        code={magicuiTransitionCode}
        codeType="tsx"
        customFields={[
          {
            id: "duration",
            label: "Duration (s)",
            type: "slider",
            min: 0.2,
            max: 2,
            step: 0.05,
          },
          {
            id: "direction",
            label: "Direction (top or bottom)",
            type: "text",
          },
          {
            id: "ease",
            label: "Easing",
            type: "text",
          },
        ]}
        initialCustomization={{
          duration: 0.6,
          direction: "top",
          ease: "easeOut",
        }}
      >
        {(customization) => <MagicUITransitionDemo customization={customization} />}
      </PreviewTile>
    </PreviewSurface>
  );
}