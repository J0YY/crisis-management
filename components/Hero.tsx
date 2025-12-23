"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fireConfetti } from "@/lib/party";

const floating = {
  animate: {
    y: [0, -14, 0],
    rotate: [-2, 2, -2],
    transition: { repeat: Infinity, duration: 6, ease: "easeInOut" }
  }
};

const pills = [
  "summer 2025 dump",
  "totally (un)biased",
  "scheming at its finest",
  "birthday girl",
  "mom of the group"
];

export const Hero = () => {
  const reduceMotion = useReducedMotion();

  const handleClick = () => {
    fireConfetti();
    const target = document.getElementById("begin");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-midnight via-ink to-ink pb-24 pt-20 text-white sm:pb-32 sm:pt-28">
      <div className="absolute inset-0 bg-gradient-hero opacity-80" aria-hidden />
      <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl" aria-hidden />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3">
          {pills.map((pill) => (
            <span
              key={pill}
              className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70 ring-1 ring-white/10"
            >
              {pill}
            </span>
          ))}
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6">
            <motion.h1
              initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl"
            >
              Crisis Management Wrapped 2025
              <span className="block text-honey">Happy Birthday Anjali!! 💕</span>
            </motion.h1>
            <p className="max-w-2xl text-lg text-white/80">
              The best of 2025 from the crisis management team. most iconic plots of the summer.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleClick}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-flame via-bubble to-honey px-6 py-3 font-semibold text-ink shadow-glow transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey"
              >
                Begin the Debrief
                <motion.span
                  animate={reduceMotion ? undefined : { x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6 }}
                >
                  →
                </motion.span>
              </button>
              <span className="text-sm text-white/70">
                Fueled by endless TEAAA (more to probably come)
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="glass relative rounded-3xl p-6">
              <div className="flex flex-col gap-4">
                <motion.div
                  variants={floating}
                  animate={reduceMotion ? undefined : "animate"}
                  className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">Mood</p>
                    <p className="font-semibold text-white">Busy scheming</p>
                  </div>
                  <span className="text-2xl">💗</span>
                </motion.div>
                <motion.div
                  variants={floating}
                  animate={reduceMotion ? undefined : "animate"}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">Status</p>
                    <p className="font-semibold text-white">Crisis management team ACTIVE</p>
                  </div>
                  <span className="text-2xl">📞</span>
                </motion.div>
                <motion.div
                  variants={floating}
                  animate={reduceMotion ? undefined : "animate"}
                  transition={{ delay: 1.2 }}
                  className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">Mode</p>
                    <p className="font-semibold text-white">ANJALI's BIRTHDAYYYYY!</p>
                  </div>
                  <span className="text-2xl">🎂</span>
                </motion.div>
              </div>
              <div
                aria-hidden
                className="absolute -left-10 -top-10 h-20 w-20 rounded-full bg-flame/30 blur-2xl"
              />
              <div
                aria-hidden
                className="absolute -right-10 bottom-6 h-24 w-24 rounded-full bg-bubble/25 blur-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

