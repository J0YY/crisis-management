"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";

export const LoveLetterSlide = () => {
  const [letter, setLetter] = useState<string>(
    "Loading the love letter from Joy & Socrates..."
  );

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
    <SlideContainer>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-honey">What We Love About You</p>
          <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl">
            This is the part where we cry a little.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-flame/20 via-ink to-bubble/20 p-10 shadow-glow"
        >
          <div className="absolute inset-0 opacity-30">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="sparkle absolute left-10 top-10 h-20 w-20 rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="sparkle absolute right-12 bottom-10 h-24 w-24 rounded-full"
            />
          </div>
          <div className="relative space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <p className="handwritten text-3xl leading-relaxed text-white whitespace-pre-wrap">
                {letter}
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-right text-xl font-semibold text-white"
            >
              — Joy & Socrates
            </motion.p>
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  );
};
