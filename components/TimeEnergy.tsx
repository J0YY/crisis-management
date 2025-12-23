"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { timeEnergy } from "@/data/wrappedData";

export const TimeEnergy = () => {
  const reduceMotion = useReducedMotion();
  return (
    <SectionShell
      id="time"
      kicker="Time & Energy Patterns"
      title="We should be asleep, but friendship said otherwise."
      description="Cozy visuals instead of hard analytics. Replace these with your own beats."
    >
      <div className="space-y-4 rounded-3xl bg-white/5 p-6">
        {timeEnergy.map((slot, idx) => (
          <motion.div
            key={slot.label}
            initial={reduceMotion ? undefined : { opacity: 0, x: -12 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="flex flex-col gap-2 rounded-2xl bg-white/5 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">Window</p>
              <p className="font-semibold text-white">{slot.label}</p>
              <p className="text-sm text-white/70">{slot.note}</p>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-3 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={reduceMotion ? undefined : { width: 0 }}
                  whileInView={reduceMotion ? undefined : { width: `${slot.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="absolute h-full rounded-full bg-gradient-to-r from-bubble via-honey to-flame shadow-glow"
                />
              </div>
              <p className="mt-2 text-right text-xs text-white/60">{slot.value}% energy</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
};

