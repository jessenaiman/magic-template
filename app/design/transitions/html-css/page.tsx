"use client";
// HTML/CSS Page Transitions Demo using PreviewSurface/PreviewTile

import React, { useState } from "react";
import { PreviewTile } from "@/components/preview-tile";

const transitionCode = `
<div class="transition-demo">
  <button onclick="showPage('A')">Go to Page A</button>
  <button onclick="showPage('B')">Go to Page B</button>
  <div id="pageA" class="page fade-in">Page A Content</div>
  <div id="pageB" class="page">Page B Content</div>
</div>
<style>
.page {
  opacity: 0;
  pointer-events: none;
  transition: opacity 400ms cubic-bezier(0.4,0,0.2,1);
  position: absolute;
  width: 100%;
}
.page.fade-in {
  opacity: 1;
  pointer-events: auto;
}
</style>
<script>
function showPage(page) {
  document.getElementById('pageA').classList.remove('fade-in');
  document.getElementById('pageB').classList.remove('fade-in');
  document.getElementById('page' + page).classList.add('fade-in');
}
</script>
`;

function CssTransitionDemo({ customization }: { customization: Partial<Record<string, any>> }) {
  const [page, setPage] = useState<"A" | "B">("A");
  const duration = customization.duration || 400;
  const easing = customization.easing || "cubic-bezier(0.4,0,0.2,1)";

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
          className="px-4 py-2 rounded bg-green-500 text-white font-medium transition-colors hover:bg-green-600"
          onClick={() => setPage("B")}
        >
          Go to Page B
        </button>
      </div>
      <div className="relative w-full h-24 flex items-center justify-center">
        <div
          className={`absolute w-full h-full flex items-center justify-center bg-white rounded shadow transition-opacity duration-[${
            duration
          }]`}
          style={{
            opacity: page === "A" ? 1 : 0,
            pointerEvents: page === "A" ? "auto" : "none",
            transition: `opacity ${duration}ms ${easing}`,
            zIndex: page === "A" ? 2 : 1,
          }}
        >
          <span className="text-lg font-semibold text-blue-700">Page A Content</span>
        </div>
        <div
          className={`absolute w-full h-full flex items-center justify-center bg-white rounded shadow transition-opacity duration-[${
            duration
          }]`}
          style={{
            opacity: page === "B" ? 1 : 0,
            pointerEvents: page === "B" ? "auto" : "none",
            transition: `opacity ${duration}ms ${easing}`,
            zIndex: page === "B" ? 2 : 1,
          }}
        >
          <span className="text-lg font-semibold text-green-700">Page B Content</span>
        </div>
      </div>
    </div>
  );
}

export default function HtmlCssPageTransitionsPage() {
  return (
    <>
      <PreviewTile
        title="CSS Fade Page Transition"
        description="Simulate navigation between pages using pure CSS transitions. Click the buttons to switch pages."
        componentName="CSS Fade Transition"
        code={transitionCode}
        codeType="html"
        customFields={[
          {
            id: "duration",
            label: "Duration (ms)",
            type: "slider",
            min: 100,
            max: 2000,
            step: 50,
          },
          {
            id: "easing",
            label: "Easing",
            type: "text",
          },
        ]}
        initialCustomization={{
          duration: 400,
          easing: "cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {(customization) => <CssTransitionDemo customization={customization} />}
      </PreviewTile>
    </>
  );
}