'use client';

import { motion } from "motion/react";
import { FlickeringGrid } from "@/packages/components/magicui/flickering-grid";
import { MotionProvider, useMotion } from "@/src/components/motion-provider";

import HeroLanding from "@/src/components/landing/HeroLanding";
import { ToolExplorer } from "@/src/components/landing/ToolExplorer";
import WorkshopValue from "@/src/components/landing/WorkshopValue";
import SandboxTeaser from "@/src/components/landing/SandboxTeaser";
import ProfessionalPathways from "@/src/components/landing/ProfessionalPathways";
import PricingTiers from "@/src/components/landing/pricing-tiers";
import { ResourceCards } from "@/src/components/resource-cards";
import ClosingCta from "@/src/components/landing/ClosingCta";
import { useParticlePositions } from "@/src/hooks/use-particle-positions";

// Animation helpers (kept simple for type safety)
const sectionFade = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function LandingPageContent() {
  const { reduce } = useMotion();
  const positions = useParticlePositions();
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
          {/* Skip link for keyboard users */}
          <a
            href="#main-hero-heading"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
          >
            Skip to main content
          </a>
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          className="absolute inset-0"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.1}
          flickerChance={0.05}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-secondary/5 to-transparent" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <header
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
        </header>        {/* Main Flow */}
        <main role="main" className="pt-10 md:pt-12">
          {/* HERO */}
          <HeroLanding />

          {/* TOOL EXPLORER */}
          <motion.div
            id="tool-explorer-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionFade}
            transition={{ duration: 0.65, ease: [0.16, 0.8, 0.24, 1] }}
          >
            <ToolExplorer />
          </motion.div>

          {/* WORKSHOP VALUE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionFade}
            transition={{ duration: 0.65 }}
          >
            <WorkshopValue />
          </motion.div>

            {/* SANDBOX TEASER */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionFade}
            transition={{ duration: 0.65 }}
          >
            <SandboxTeaser />
          </motion.div>

          {/* PROFESSIONAL PATHWAYS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionFade}
            transition={{ duration: 0.65 }}
          >
            <ProfessionalPathways />
          </motion.div>

          {/* PRICING */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionFade}
            transition={{ duration: 0.65 }}
          >
            <PricingTiers />
          </motion.div>

          {/* EXTENDED RESOURCES */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionFade}
            transition={{ duration: 0.6 }}
            className="py-10 md:py-20"
            aria-labelledby="extended-resources-heading"
          >
            <ResourceCards />
          </motion.section>

          {/* CLOSING CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={sectionFade}
            transition={{ duration: 0.7 }}
          >
            <ClosingCta />
          </motion.div>
        </main>
      </div>

      {/* Decorative floating particles (disabled when user prefers reduced motion) */}
      {!reduce && (
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          {positions.map((position, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              style={{
                left: position.left,
                top: position.top,
                transform: 'scale(0)'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function LandingPage() {
  return (
    <MotionProvider>
      <LandingPageContent />
    </MotionProvider>
  );
}