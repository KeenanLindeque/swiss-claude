"use client";

import { motion } from "framer-motion";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SilkBackground } from "@/components/ui/silk-background-animation";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <SilkBackground
        colorR={22}
        colorG={42}
        colorB={82}
        speed={0.015}
        scale={2.2}
        noiseIntensity={0.7}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[2] h-px bg-gradient-to-r from-transparent via-silver/15 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 opacity-0"
        >
          <span className="text-[10px] font-light tracking-[0.5em] uppercase text-silver/60">
            Independent Quality Assessment
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-6xl font-light leading-none tracking-[-0.03em] text-snow opacity-0 sm:text-8xl md:text-9xl"
        >
          Swiss
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-6xl font-extralight leading-none tracking-[-0.03em] text-silver opacity-0 sm:text-8xl md:text-9xl"
        >
          Hospitality
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 flex items-center justify-center opacity-0"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-silver/40 to-transparent" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mx-auto mt-10 max-w-2xl text-base font-light leading-relaxed tracking-wide text-snow/60 opacity-0 sm:text-lg"
        >
          Delivering independent quality assessment, experience auditing,
          recognition, and hospitality intelligence for hotels and operators
          worldwide.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-silver/50 opacity-0"
        >
          We evaluate what truly defines excellence: service integrity,
          operational discipline, and guest experience performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-12 flex flex-col items-center gap-4 opacity-0 sm:flex-row sm:justify-center"
        >
          <ShimmerButton>Discover Our Services</ShimmerButton>
          <a
            href="#contact"
            className="text-[11px] font-light tracking-[0.2em] uppercase text-snow/40 transition-colors duration-300 hover:text-silver"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 opacity-0"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-snow/25">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-silver/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
