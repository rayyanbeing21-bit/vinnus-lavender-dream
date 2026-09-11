"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalScreen() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 py-24"
    >
      {/* Slow shifting background wash */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(109,74,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(155,123,255,0.1) 0%, transparent 50%)",
          animation: "soft-breathe 12s ease-in-out infinite",
        }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="mb-6 text-xs tracking-[0.2em] text-[#a89bc8]"
      >
        Made with a little too much thought.
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#e9e1ff] sm:text-5xl md:text-6xl"
      >
        For Vinnu. ♡
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="mt-6 text-base text-[#c9b8ff]/80"
      >
        Get well soon.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 1.1 }}
        className="mt-10 font-[family-name:var(--font-cormorant)] text-lg text-[#a89bc8]"
      >
        — Rayyan
      </motion.p>
    </section>
  );
}
