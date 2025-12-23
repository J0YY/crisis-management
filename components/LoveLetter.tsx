"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionShell } from "./SectionShell";

export const LoveLetter = () => {
  const [letter, setLetter] = useState<string>(
    "Loading the love letter from Joy & Socrates..."
  );
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const fetchLetter = async () => {
      try {
        const res = await fetch("/letters/love-letter.txt");
        const text = await res.text();
        setLetter(text);
      } catch (error) {
        console.error("Failed to load letter", error);
        setLetter(
          "Joy & Socrates wrote a very sappy note here. Replace /public/letters/love-letter.txt with the real words."
        );
      }
    };
    fetchLetter();
  }, []);

  return (
    <SectionShell
      id="love"
      kicker="What We Love About You"
      title="This is the part where we cry a little."
      description="A handwritten-style letter from Joy & Socrates. Replace /public/letters/love-letter.txt with the real one."
    >
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-flame/20 via-ink to-bubble/20 p-8 shadow-glow"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="sparkle absolute left-10 top-10 h-20 w-20 rounded-full" />
          <div className="sparkle absolute right-12 bottom-10 h-24 w-24 rounded-full" />
        </div>
        <div className="relative space-y-4">
          <p className="handwritten text-3xl leading-relaxed text-white">{letter}</p>
          <p className="text-right text-lg font-semibold text-white">— Joy & Socrates</p>
        </div>
      </motion.div>
    </SectionShell>
  );
};

