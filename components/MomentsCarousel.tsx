"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { iconicMoments } from "@/data/wrappedData";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0
  })
};

export const MomentsCarousel = () => {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const paginate = (direction: number) => {
    setIndex((prev) => (prev + direction + iconicMoments.length) % iconicMoments.length);
  };

  return (
    <SectionShell
      id="moments"
      kicker="Iconic Moments"
      title="Wrapped-style highlight reel."
      description="A carousel of chaos, tenderness, and quotes that still make us laugh-cry."
    >
      <div className="relative overflow-hidden rounded-3xl bg-white/5 p-6 sm:p-8">
        <div className="grid gap-6 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div className="relative h-full min-h-[220px]">
            <AnimatePresence custom={reduceMotion ? 0 : 1} initial={false} mode="popLayout">
              <motion.div
                key={index}
                custom={reduceMotion ? 0 : 1}
                variants={reduceMotion ? undefined : variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="glass card-shimmer absolute inset-0 rounded-2xl p-5 shadow-soft"
              >
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-white/60">
                  <span>{iconicMoments[index].tag ?? "moment"}</span>
                  <span>
                    {index + 1}/{iconicMoments.length}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl text-white">
                  {iconicMoments[index].title}
                </h3>
                <p className="mt-2 text-honey">{iconicMoments[index].stat}</p>
                <p className="mt-4 rounded-xl bg-black/30 p-4 text-lg text-white/90">
                  “{iconicMoments[index].quote}”
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-white/70">
              Swap the fake quotes and stats with your own highlights in `data/wrappedData.ts`.
              Keep it affectionate, keep it silly.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => paginate(-1)}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey"
              >
                ← Prev
              </button>
              <button
                onClick={() => paginate(1)}
                className="rounded-full bg-gradient-to-r from-bubble to-flame px-4 py-2 text-sm font-semibold text-ink shadow-glow transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              >
                Next →
              </button>
            </div>
            <p className="text-xs text-white/60">
              Tip: Hover or tap to reveal easter eggs elsewhere. Hearts may detonate confetti.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

