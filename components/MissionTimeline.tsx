"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { missions } from "@/data/wrappedData";

export const MissionTimeline = () => {
  const reduceMotion = useReducedMotion();
  return (
    <SectionShell
      id="missions"
      kicker="Mission Log"
      title="The Ameya arc, narrated like ops notes."
      description="Pulls from your texts—swap with real exports in data/wrappedData.ts. Timeline energy over spreadsheets."
    >
      <div className="relative space-y-4 border-l border-white/10 pl-6 sm:pl-8">
        <div className="absolute left-0 top-2 h-full border-l border-white/10" aria-hidden />
        {missions.map((mission, idx) => (
          <motion.div
            key={mission.title}
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="relative rounded-2xl bg-white/5 p-5 shadow-soft"
          >
            <div className="absolute -left-[13px] top-5 h-3 w-3 rounded-full bg-gradient-to-r from-flame to-bubble shadow-glow" />
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60">
              <span>{mission.tag ?? "mission"}</span>
              <span className="text-white/50">•</span>
              <span>{mission.time}</span>
            </div>
            <h3 className="mt-2 font-display text-xl text-white">{mission.title}</h3>
            <p className="mt-2 text-sm text-white/75">{mission.detail}</p>
            <p className="mt-3 rounded-xl bg-black/25 px-3 py-2 text-sm text-honey">
              “{mission.highlight}”
            </p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
};

