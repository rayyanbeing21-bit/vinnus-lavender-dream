"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Surprise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [stage, setStage] = useState(0); // 0: button, 1: glow+line1, 2: line2, 3: line3, 4: final

  const handleClick = () => {
    setStage(1);
    setTimeout(() => setStage(2), 2200);
    setTimeout(() => setStage(3), 4000);
    setTimeout(() => setStage(4), 5800);
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 py-24"
    >
      <AnimatePresence mode="wait">
        {stage === 0 && (
          <motion.button
            key="btn"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
            transition={{ duration: 0.6 }}
            onClick={handleClick}
            className="rounded-full border border-[rgba(201,184,255,0.25)] bg-[rgba(109,74,255,0.12)] px-8 py-4 text-sm text-[#c9b8ff] transition-all hover:border-[rgba(155,123,255,0.5)] hover:bg-[rgba(109,74,255,0.2)] hover:text-white hover:shadow-[0_0_30px_rgba(109,74,255,0.3)] sm:text-base"
          >
            One last thing...
          </motion.button>
        )}

        {stage >= 1 && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative flex flex-col items-center text-center"
          >
            {/* Fullscreen soft glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 0.5, scale: 1.4 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(109,74,255,0.5) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            <div className="relative z-10 space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="font-[family-name:var(--font-cormorant)] text-2xl text-[#e9e1ff] sm:text-3xl"
              >
                I hope tomorrow is a little kinder to you.
              </motion.p>

              {stage >= 2 && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  className="font-[family-name:var(--font-cormorant)] text-xl text-[#c9b8ff] sm:text-2xl"
                >
                  And if it isn&apos;t...
                </motion.p>
              )}

              {stage >= 3 && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  className="font-[family-name:var(--font-cormorant)] text-xl text-[#c9b8ff] sm:text-2xl"
                >
                  we&apos;ll take it one day at a time.
                </motion.p>
              )}

              {stage >= 4 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className="mt-8 text-sm text-[#a89bc8]"
                >
                  That&apos;s all. Now go rest. 🤍
                </motion.p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
