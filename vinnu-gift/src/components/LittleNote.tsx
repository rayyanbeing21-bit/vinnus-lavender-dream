"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const lines = [
  "Sometimes I wish I could just be there.",
  "Not to fix everything.",
  "Not to ask a hundred questions.",
  "Just to sit beside you,",
  "make sure you're okay,",
  "and stay until you feel a little better.",
  "",
  "So since I can't always be there,",
  "I made you this little place.",
];

export default function LittleNote() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 py-24"
    >
      <div
        className="orb"
        style={{
          width: 280,
          height: 280,
          background: "radial-gradient(circle, #6d4aff33 0%, transparent 70%)",
          top: "30%",
          left: "15%",
        }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="mb-12 max-w-md text-center font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#e9e1ff] sm:text-4xl md:text-5xl"
      >
        For the days you don&apos;t feel okay.
      </motion.h2>

      <div className="max-w-lg space-y-3 text-center">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 + i * 0.18 }}
            className={`font-[family-name:var(--font-cormorant)] text-lg leading-relaxed text-[#c9b8ff]/90 sm:text-xl ${
              line === "" ? "h-4" : ""
            }`}
          >
            {line || "\u00A0"}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
