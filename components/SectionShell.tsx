"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  id: string;
  kicker?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export const SectionShell = ({ id, kicker, title, description, children }: Props) => {
  const reduceMotion = useReducedMotion();
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30" aria-hidden>
        <div className="grid-fade h-full w-full" />
      </div>
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-6"
      >
        <div className="space-y-3">
          {kicker ? (
            <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-honey/90 ring-1 ring-white/10">
              {kicker}
            </span>
          ) : null}
          <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-3xl text-lg text-white/80">{description}</p>
          ) : null}
        </div>
        {children}
      </motion.div>
    </section>
  );
};

