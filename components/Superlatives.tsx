"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { superlatives } from "@/data/wrappedData";

export const Superlatives = () => {
  const reduceMotion = useReducedMotion();
  return (
    <SectionShell
      id="superlatives"
      kicker="Friendship Superlatives"
      title="Everyone wins. Especially you."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {superlatives.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            className="glass card-shimmer relative overflow-hidden rounded-2xl p-5"
          >
            <div className="absolute right-4 top-4 text-2xl">{item.icon}</div>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-white/75">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
};

