"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/*
  PHOTO PLACEHOLDERS
  Replace the images in /public/photos/ with your own.
  Recommended: square or 4:5 ratio, optimized webp/jpg under 400kb each.
  File names expected:
    photo-1.jpg, photo-2.jpg, photo-3.jpg, photo-4.jpg
  Update the `src` and `caption` fields below as needed.
*/

const memories = [
  {
    id: 1,
    // REPLACE: change src to "/photos/photo-1.jpg" (or .webp) when you add real photos
    src: "/photos/photo-1.svg",
    caption: "this one makes me smile.",
    alt: "Memory photo 1 — replace with your photo",
  },
  {
    id: 2,
    src: "/photos/photo-2.svg",
    caption: "one of my favourite memories.",
    alt: "Memory photo 2 — replace with your photo",
  },
  {
    id: 3,
    src: "/photos/photo-3.svg",
    caption: "you probably don't know how much this means to me.",
    alt: "Memory photo 3 — replace with your photo",
  },
  {
    id: 4,
    src: "/photos/photo-4.svg",
    caption: "just keeping this here.",
    alt: "Memory photo 4 — replace with your photo",
  },
];


export default function Memories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="mb-14 max-w-md text-center font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#e9e1ff] sm:text-4xl"
      >
        Little things I never want to forget.
      </motion.h2>

      <div className="grid w-full max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
        {memories.map((m, i) => (
          <motion.figure
            key={m.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 + i * 0.12 }}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[rgba(201,184,255,0.12)] bg-[#160d25] shadow-[0_8px_40px_rgba(0,0,0,0.4)] transition-all duration-500 group-hover:border-[rgba(155,123,255,0.35)] group-hover:shadow-[0_0_40px_rgba(109,74,255,0.2)]">
              {/* Placeholder visual — replace with real <img> when photos are added */}
              <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-[#1a1028] via-[#160d25] to-[#0d0817]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.src}
                  alt={m.alt}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
                  onError={(e) => {
                    // Show elegant placeholder if image missing
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector(".placeholder-label")) {
                      const label = document.createElement("div");
                      label.className =
                        "placeholder-label absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center";
                      label.innerHTML = `
                        <span style="font-size:2rem;opacity:0.4">✦</span>
                        <span style="font-size:0.75rem;color:#a89bc8;letter-spacing:0.05em">
                          Add photo-${m.id}.jpg here
                        </span>
                        <span style="font-size:0.65rem;color:#6d4aff99;margin-top:0.25rem">
                          public/photos/
                        </span>
                      `;
                      parent.appendChild(label);
                    }
                  }}
                />
                {/* Soft violet edge glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[rgba(155,123,255,0.1)]" />
              </div>
            </div>
            <figcaption className="mt-3 px-1 text-center font-[family-name:var(--font-cormorant)] text-sm italic text-[#a89bc8] sm:text-base">
              {m.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
