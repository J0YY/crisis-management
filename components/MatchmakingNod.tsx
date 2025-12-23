"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionShell } from "./SectionShell";

export const MatchmakingNod = () => {
  const reduceMotion = useReducedMotion();
  return (
    <SectionShell
      id="matchmaking"
      kicker="That One Era"
      title="A brief chapter in the saga."
      description="A funny footnote: optimism, spreadsheets, and absolutely no chill."
    >
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
        className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-flame/10 via-bubble/10 to-honey/10" />
        <div className="relative flex flex-col gap-3">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/60">
            <span className="rounded-full bg-white/10 px-3 py-1">Matchmaking Era</span>
            <span className="rounded-full bg-white/10 px-3 py-1">One card, one laugh</span>
          </div>
          <h3 className="font-display text-2xl text-white">“That One Era We All Remember”</h3>
          <p className="text-lg text-white/80">
            A brief period of optimism, spreadsheets, and absolutely no chill. We tried to schedule
            romance like a group project. It was hilarious, chaotic, and very us. Moving on with love.
          </p>
        </div>
      </motion.div>
    </SectionShell>
  );
};

