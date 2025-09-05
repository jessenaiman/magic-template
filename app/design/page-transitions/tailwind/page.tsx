"use client";
// Tailwind Page Transitions Demo using PreviewSurface/PreviewTile

import React, { useState } from "react";
import { PreviewSurface } from "@/components/preview-surface";
import { PreviewTile } from "@/components/preview-tile";

const tailwindTransitionCode = `
<div class="relative w-full h-40">
  <button class="px-4 py-2 bg-blue-500 text-white rounded" onclick="showPage('A')">Go to Page A</button>
  <button class="px-4 py-2 bg-green-500 text-white rounded ml-2" onclick="showPage('B')">Go to Page B</button>
  <div id="pageA" class="page transition-opacity duration-500 ease-in-out opacity-100">Page A Content</div>
  <div id="pageB" class="page transition-opacity duration-500 ease-in-out opacity-0">Page B Content</div>
</div>
<script>
function showPage(page) {
  document.getElementById('pageA').classList.toggle('opacity-100', page === 'A');
  document.getElementById('pageA').classList.toggle('opacity-0', page !== 'A');
  document.getElementById('pageB').classList.toggle('opacity-100', page === 'B');
  document.getElementById('pageB').classList.toggle('opacity-0', page !== 'B');
}
</script>
`;

function TailwindTransitionDemo({ customization }: { customization: Partial<Record<string, any>> }) {
  const [page, setPage] = useState<"A" | "B">("A");
  const duration = customization.duration || 500;
  const easing = customization.easing || "ease-in-out";

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
          className={`absolute w-full h-full flex items-center justify-center bg-white rounded shadow transition-opacity ${
            page === "A" ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transition: `opacity ${duration}ms ${easing}`,
            zIndex: page === "A" ? 2 : 1,
            pointerEvents: page === "A" ? "auto" : "none",
          }}
        >
          <span className="text-lg font-semibold text-blue-700">Page A Content</span>
        </div>
        <div
          className={`absolute w-full h-full flex items-center justify-center bg-white rounded shadow transition-opacity ${
            page === "B" ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transition: `opacity ${duration}ms ${easing}`,
            zIndex: page === "B" ? 2 : 1,
            pointerEvents: page === "B" ? "auto" : "none",
          }}
        >
          <span className="text-lg font-semibold text-green-700">Page B Content</span>
        </div>
      </div>
    </div>
  );
}

export default function TailwindPageTransitionsPage() {
  return (
    <PreviewSurface initialCustomization={{ duration: 500, easing: "ease-in-out" }}>
      <PreviewTile
        title="Tailwind Fade Page Transition"
        description="Simulate navigation between pages using Tailwind CSS transitions. Click the buttons to switch pages."
        componentName="Tailwind Fade Transition"
        code={tailwindTransitionCode}
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
          duration: 500,
          easing: "ease-in-out",
        }}
      >
        {(customization) => <TailwindTransitionDemo customization={customization} />}
      </PreviewTile>
    </PreviewSurface>
  );
}
