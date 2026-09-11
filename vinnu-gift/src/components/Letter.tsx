"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

const letterBody = `Vinnu,

I don't really know how to make someone feel better through a screen.
I wish I could do more than just ask if you're okay.

But even when you don't say much,
even when you keep things to yourself,
I still care.

So please rest.
Take care of yourself.
Don't force yourself to be okay every second.

And whenever things feel a little heavy,
I hope this tiny corner of the internet reminds you
that somewhere, someone is thinking about you
and genuinely wants you to be okay.

No pressure.
No expectations.
Just take care of yourself.

— Rayyan`;

export default function Letter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const [opened, setOpened] = useState(false);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="mb-12 max-w-md text-center font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#e9e1ff] sm:text-4xl"
      >
        Open when you need a little warmth.
      </motion.h2>

      <div className="relative w-full max-w-md">
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
              transition={{ duration: 0.5 }}
              className="glass flex flex-col items-center gap-6 rounded-3xl px-8 py-12 text-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(201,184,255,0.2)] bg-[rgba(109,74,255,0.1)]">
                <span className="text-3xl opacity-80">✉</span>
              </div>
              <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#c9b8ff]">
                There&apos;s a little letter here.
              </p>
              <button
                onClick={() => setOpened(true)}
                className="btn-glow mt-2 text-sm"
              >
                Open it
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="letter-paper rounded-2xl px-6 py-8 sm:px-8 sm:py-10"
            >
              <div className="max-h-[60vh] overflow-y-auto pr-1">
                {letterBody.split("\n").map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.04 }}
                    className={`font-[family-name:var(--font-cormorant)] leading-relaxed text-[#e9e1ff]/90 ${
                      line === ""
                        ? "h-3"
                        : line.startsWith("—")
                          ? "mt-6 text-right text-[#c9b8ff]"
                          : line === "Vinnu,"
                            ? "mb-4 text-lg text-[#e9e1ff]"
                            : "text-base sm:text-lg"
                    }`}
                  >
                    {line || "\u00A0"}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
