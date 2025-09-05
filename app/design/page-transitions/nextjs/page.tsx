"use client";
// Next.js Page Transitions Demo using PreviewSurface/PreviewTile

import React, { useState } from "react";
import { PreviewSurface } from "@/components/preview-surface";
import { PreviewTile } from "@/components/preview-tile";
import { motion, AnimatePresence } from "framer-motion";

const nextjsTransitionCode = `
import { motion, AnimatePresence } from "framer-motion";

function Demo() {
  const [page, setPage] = useState("A");
  return (
    <>
      <button onClick={() => setPage("A")}>Go to Page A</button>
      <button onClick={() => setPage("B")}>Go to Page B</button>
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, x: page === "A" ? -40 : 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: page === "A" ? 40 : -40 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {page === "A" ? "Page A Content" : "Page B Content"}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
`;

function NextjsTransitionDemo({ customization }: { customization: Partial<Record<string, any>> }) {
  const [page, setPage] = useState<"A" | "B">("A");
  const duration = customization.duration || 0.5;
  const ease = customization.ease || "easeInOut";
  const direction = customization.direction || "horizontal";

  // Slide direction: horizontal (x) or vertical (y)
  const getMotionProps = () => {
    if (direction === "vertical") {
      return {
        initial: { opacity: 0, y: page === "A" ? -40 : 40 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: page === "A" ? 40 : -40 },
      };
    }
    // Default: horizontal
    return {
      initial: { opacity: 0, x: page === "A" ? -40 : 40 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: page === "A" ? 40 : -40 },
    };
  };

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
          className="px-4 py-2 rounded bg-pink-500 text-white font-medium transition-colors hover:bg-pink-600"
          onClick={() => setPage("B")}
        >
          Go to Page B
        </button>
      </div>
      <div className="relative w-full h-24 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            {...getMotionProps()}
            transition={{ duration, ease }}
            className="absolute w-full h-full flex items-center justify-center bg-white rounded shadow"
            style={{
              zIndex: 2,
            }}
          >
            <span className={`text-lg font-semibold ${page === "A" ? "text-blue-700" : "text-pink-700"}`}>
              {page === "A" ? "Page A Content" : "Page B Content"}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function NextjsPageTransitionsPage() {
  return (
    <PreviewSurface initialCustomization={{ duration: 0.5, ease: "easeInOut" }}>
      <PreviewTile
        title="Next.js Animated Page Transition"
        description="Simulate Next.js route transitions using Framer Motion. Click the buttons to switch pages."
        componentName="Framer Motion"
        code={nextjsTransitionCode}
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
            id: "ease",
            label: "Easing",
            type: "text",
          },
        ]}
        initialCustomization={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        {(customization) => <NextjsTransitionDemo customization={customization} />}
      </PreviewTile>
    </PreviewSurface>
  );
}