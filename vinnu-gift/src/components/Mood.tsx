"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

type MoodKey = "comfort" | "motivation" | "cute" | "silence";

const moods: {
  key: MoodKey;
  label: string;
  message: string | null;
}[] = [
  {
    key: "comfort",
    label: "Comfort",
    message:
      "Come here for a second. You don't need to solve everything tonight. Just breathe.",
  },
  {
    key: "motivation",
    label: "Motivation",
    message:
      "You've made it through every difficult day before this one. Take this one slowly too.",
  },
  {
    key: "cute",
    label: "Something cute",
    message:
      "Congratulations. You have officially unlocked a tiny corner of the internet dedicated entirely to making you smile. ✦",
  },
  {
    key: "silence",
    label: "Just silence",
    message: null, // special: peaceful stars only
  },
];

export default function Mood() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [selected, setSelected] = useState<MoodKey | null>(null);

  const current = moods.find((m) => m.key === selected);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="mb-12 text-center font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#e9e1ff] sm:text-4xl"
      >
        What do you need right now?
      </motion.h2>

      <div className="grid w-full max-w-sm grid-cols-1 gap-3 sm:max-w-md sm:grid-cols-2">
        {moods.map((m, i) => (
          <motion.button
            key={m.key}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
            onClick={() => setSelected(m.key)}
            className={`rounded-2xl border px-5 py-4 text-sm transition-all duration-300 sm:text-base ${
              selected === m.key
                ? "border-[rgba(155,123,255,0.5)] bg-[rgba(109,74,255,0.2)] text-white shadow-[0_0_24px_rgba(109,74,255,0.3)]"
                : "border-[rgba(201,184,255,0.15)] bg-[rgba(22,13,37,0.5)] text-[#c9b8ff] hover:border-[rgba(155,123,255,0.35)] hover:bg-[rgba(109,74,255,0.1)]"
            }`}
          >
            {m.label}
          </motion.button>
        ))}
      </div>

      <div className="mt-12 min-h-[120px] w-full max-w-md px-2">
        <AnimatePresence mode="wait">
          {selected === "silence" && (
            <motion.div
              key="silence"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex h-32 items-center justify-center overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#160d25] to-[#0d0817]" />
              {[...Array(12)].map((_, i) => (
                <span
                  key={i}
                  className="absolute rounded-full bg-[#c9b8ff]"
                  style={{
                    left: `${8 + ((i * 7) % 84)}%`,
                    top: `${20 + ((i * 13) % 60)}%`,
                    width: 2 + (i % 3),
                    height: 2 + (i % 3),
                    opacity: 0.4 + (i % 5) * 0.1,
                    animation: `twinkle ${2 + (i % 4)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
              <p className="relative z-10 text-xs tracking-widest text-[#a89bc8]/60">
                · · ·
              </p>
            </motion.div>
          )}

          {current && current.message && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl px-6 py-5 text-center"
            >
              <p className="font-[family-name:var(--font-cormorant)] text-lg leading-relaxed text-[#e9e1ff] sm:text-xl">
                {current.message}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
