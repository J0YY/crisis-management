"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { hotlineMoments } from "@/data/wrappedData";

export const HotlineMoments = () => {
  const reduceMotion = useReducedMotion();
  return (
    <SectionShell
      id="hotline"
      kicker="Crisis Hotline"
      title="The scripts that kept everyone sane."
      description="Real lines from the chat, softened for this gift. Replace with your own exports anytime."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {hotlineMoments.map((item, idx) => (
          <motion.div
            key={item.headline}
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="glass relative overflow-hidden rounded-2xl p-5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            <div className="relative space-y-2">
              <div className="text-xs uppercase tracking-[0.2em] text-white/60">
                {item.tag ?? "hotline"}
              </div>
              <h3 className="font-semibold text-white">{item.headline}</h3>
              <p className="rounded-xl bg-black/25 px-3 py-2 text-sm text-white/85 ring-1 ring-white/5">
                “{item.reply}”
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
};

