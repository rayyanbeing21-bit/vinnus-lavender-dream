"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicControl() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [showTip, setShowTip] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => {
        // Autoplay blocked or missing file — still toggle UI
        setPlaying(true);
      });
      setPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-2">
      <AnimatePresence>
        {showTip && (
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="rounded-full bg-[#160d25]/90 px-3 py-1.5 text-xs text-[#c9b8ff] backdrop-blur-md border border-[rgba(201,184,255,0.15)]"
          >
            {playing ? "Music on" : "Music off"}
          </motion.span>
        )}
      </AnimatePresence>

      <button
        onClick={toggle}
        onMouseEnter={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
        onFocus={() => setShowTip(true)}
        onBlur={() => setShowTip(false)}
        aria-label={playing ? "Pause music" : "Play music"}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(201,184,255,0.2)] bg-[rgba(22,13,37,0.7)] text-[#c9b8ff] backdrop-blur-md transition-all hover:border-[rgba(155,123,255,0.5)] hover:text-white hover:shadow-[0_0_20px_rgba(109,74,255,0.35)]"
      >
        <span className="text-lg leading-none">{playing ? "♫" : "♪"}</span>
      </button>

      {/* 
        PLACEHOLDER AUDIO — replace public/audio/background.mp3 with your track.
        Keep the default state OFF (no autoplay).
      */}
      <audio ref={audioRef} loop preload="none">
        <source src="/audio/background.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
