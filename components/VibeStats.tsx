"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { vibeStats } from "@/data/wrappedData";

export const VibeStats = () => {
  const reduceMotion = useReducedMotion();
  return (
    <SectionShell
      id="vibes"
      kicker="The Year in Vibes"
      title="Less charts, more feelings."
      description="Friendly meters instead of leaderboards. Everything here is an excuse to say we adore you."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {vibeStats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="glass relative overflow-hidden rounded-2xl p-5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            <div className="relative space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/50">Vibe</p>
                  <p className="font-semibold text-white">{stat.label}</p>
                </div>
                <span className="text-xl font-semibold text-honey">{stat.value}%</span>
              </div>
              <div className="relative h-3 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={reduceMotion ? undefined : { width: 0 }}
                  whileInView={reduceMotion ? undefined : { width: `${stat.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="absolute h-full rounded-full bg-gradient-to-r from-flame via-bubble to-honey shadow-glow"
                />
              </div>
              <p className="text-sm text-white/70">{stat.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
};

