"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  "You're allowed to rest.",
  "You don't have to pretend you're okay.",
  "You don't have to explain everything.",
  "Take your time.",
  "Be gentle with yourself.",
  "And please remember that someone is quietly rooting for you.",
];

export default function Reminders() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 py-24"
    >
      {/* Glowing orb behind content */}
      <div
        className="orb animate-breathe pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(109,74,255,0.35) 0%, transparent 65%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.6,
        }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="relative z-10 mb-14 text-center font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#e9e1ff] sm:text-4xl"
      >
        Just a reminder.
      </motion.h2>

      <div className="relative z-10 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
        {cards.map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
            className="glass-soft rounded-2xl px-6 py-5 text-center transition-all duration-300 hover:border-[rgba(155,123,255,0.3)] hover:shadow-[0_0_30px_rgba(109,74,255,0.15)]"
          >
            <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#e9e1ff]/95 sm:text-xl">
              {text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
