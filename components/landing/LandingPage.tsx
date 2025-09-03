"use client";

import { motion } from "framer-motion";
import { MenuBar } from "@/components/menu-bar";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import Hero from "@/components/hero";
import FeatureCards from "@/components/feature-cards";
import { ResourceCards } from "@/components/resource-cards";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
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
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-secondary/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
        >
          <MenuBar />
        </motion.header>

        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="pt-24"
        >
          {/* Hero Section */}
          <motion.section
            variants={itemVariants}
            className="relative min-h-screen flex items-center justify-center px-6"
          >
            <div className="max-w-7xl mx-auto w-full">
              <Hero />
            </div>
          </motion.section>

          {/* Feature Cards Section */}
          <motion.section
            variants={itemVariants}
            className="py-20 px-6"
          >
            <div className="max-w-7xl mx-auto w-full">
              <FeatureCards />
            </div>
          </motion.section>

          {/* Resource Cards Section */}
          <motion.section
            variants={itemVariants}
            className="py-20"
          >
            <ResourceCards />
          </motion.section>

        </motion.main>

      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              scale: 0
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  );
}