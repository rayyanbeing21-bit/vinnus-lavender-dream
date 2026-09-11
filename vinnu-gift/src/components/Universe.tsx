"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";

const messages = [
  "Drink some water.",
  "Get some rest.",
  "Don't forget to breathe.",
  "You've got this.",
  "Today doesn't have to be a productive day.",
  "You're more cared for than you probably realize.",
  "One bad day doesn't define you.",
  "Rest first. Everything else can wait.",
  "It's okay to take up space.",
  "Soft days are still days worth living.",
];

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  message: string;
}

export default function Universe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [active, setActive] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);

  const stars: Star[] = useMemo(() => {
    // Deterministic-ish positions so layout is stable
    const positions = [
      { x: 12, y: 18 },
      { x: 28, y: 42 },
      { x: 45, y: 15 },
      { x: 62, y: 35 },
      { x: 78, y: 22 },
      { x: 18, y: 65 },
      { x: 38, y: 72 },
      { x: 55, y: 58 },
      { x: 72, y: 68 },
      { x: 88, y: 48 },
    ];
    return positions.map((pos, i) => ({
      id: i,
      x: pos.x,
      y: pos.y,
      size: 4 + (i % 3) * 2,
      delay: i * 0.15,
      message: messages[i % messages.length],
    }));
  }, []);

  const handleStar = (star: Star) => {
    setActiveId(star.id);
    setActive(star.message);
    // Auto-hide after a few seconds
    setTimeout(() => {
      setActive(null);
      setActiveId(null);
    }, 4000);
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="relative z-10 mb-4 text-center font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#e9e1ff] sm:text-4xl"
      >
        A little universe, just for you.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="relative z-10 mb-12 text-sm text-[#a89bc8]"
      >
        Tap a star
      </motion.p>

      <div className="relative h-[55vh] w-full max-w-lg sm:max-w-xl">
        {stars.map((star) => (
          <motion.button
            key={star.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={
              inView
                ? {
                    opacity: activeId === star.id ? 1 : 0.7,
                    scale: activeId === star.id ? 1.4 : 1,
                  }
                : {}
            }
            transition={{ duration: 0.6, delay: 0.4 + star.delay }}
            onClick={() => handleStar(star)}
            aria-label={`Star message: ${star.message}`}
            className="absolute rounded-full bg-[#c9b8ff] transition-shadow focus:outline-none"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              boxShadow:
                activeId === star.id
                  ? "0 0 16px 4px rgba(155,123,255,0.8)"
                  : "0 0 8px 2px rgba(155,123,255,0.4)",
              animation: `twinkle ${2.5 + (star.id % 3)}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}

        {/* Gentle floating ambient dots */}
        {[...Array(8)].map((_, i) => (
          <span
            key={`dot-${i}`}
            className="pointer-events-none absolute rounded-full bg-[#9b7bff]/30"
            style={{
              left: `${10 + ((i * 11) % 80)}%`,
              top: `${15 + ((i * 17) % 70)}%`,
              width: 2,
              height: 2,
              animation: `float ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="glass absolute bottom-16 left-1/2 z-20 w-[90%] max-w-sm -translate-x-1/2 rounded-2xl px-6 py-4 text-center sm:bottom-24"
          >
            <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#e9e1ff] sm:text-xl">
              {active}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
