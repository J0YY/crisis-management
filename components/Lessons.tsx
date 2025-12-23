"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { lessons } from "@/data/wrappedData";

export const Lessons = () => {
  const reduceMotion = useReducedMotion();
  return (
    <SectionShell
      id="lessons"
      kicker="What We Learned"
      title="Takeaways from the Ameya arc."
      description="Sweet, non-roasty reflections. Update freely in data/wrappedData.ts."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {lessons.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="glass relative overflow-hidden rounded-2xl p-5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            <h3 className="font-display text-xl text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-white/75">{item.detail}</p>
            {item.emphasis ? (
              <p className="mt-3 rounded-xl bg-black/20 px-3 py-2 text-sm text-honey">
                {item.emphasis}
              </p>
            ) : null}
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
};

