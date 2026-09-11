"use client";

import { motion } from "framer-motion";

interface HeroProps {
  onOpen: () => void;
}

export default function Hero({ onOpen }: HeroProps) {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
      <div
        className="orb animate-breathe"
        style={{
          width: 320,
          height: 320,
          background: "radial-gradient(circle, #6d4aff 0%, transparent 70%)",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.25,
        }}
      />
      <div
        className="orb"
        style={{
          width: 200,
          height: 200,
          background: "radial-gradient(circle, #9b7bff 0%, transparent 70%)",
          bottom: "15%",
          right: "10%",
          opacity: 0.15,
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="mb-4 text-sm tracking-[0.25em] uppercase text-[#a89bc8]"
      >
        for vinnu
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="font-[family-name:var(--font-cormorant)] text-5xl font-light tracking-tight text-[#e9e1ff] sm:text-6xl md:text-7xl"
      >
        Hey, you.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.0 }}
        className="mt-5 max-w-sm text-base text-[#c9b8ff]/80 sm:text-lg"
      >
        I made you a little something.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 1.5 }}
        className="mt-12"
      >
        <button onClick={onOpen} className="btn-glow text-sm sm:text-base">
          Open it ✦
        </button>
      </motion.div>
    </section>
  );
}
