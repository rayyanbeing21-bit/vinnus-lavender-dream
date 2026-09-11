"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "@/components/Particles";
import MusicControl from "@/components/MusicControl";
import Hero from "@/components/Hero";
import LittleNote from "@/components/LittleNote";
import Reminders from "@/components/Reminders";
import Universe from "@/components/Universe";
import Memories from "@/components/Memories";
import Letter from "@/components/Letter";
import Mood from "@/components/Mood";
import Surprise from "@/components/Surprise";
import FinalScreen from "@/components/FinalScreen";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="relative min-h-[100dvh] overflow-x-hidden bg-[#0d0817]">
      <Particles count={50} />
      <MusicControl />

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="landing"
            exit={{
              opacity: 0,
              scale: 1.04,
              filter: "blur(12px)",
            }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Hero onOpen={() => setOpened(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="journey"
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <LittleNote />
            <Reminders />
            <Universe />
            <Memories />
            <Letter />
            <Mood />
            <Surprise />
            <FinalScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
