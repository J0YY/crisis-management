"use client";

import { useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fireConfetti } from "@/lib/party";
import { useKeySequence } from "@/hooks/useKeySequence";

export const EasterEggs = () => {
  const [sparkles, setSparkles] = useState(false);
  const reduceMotion = useReducedMotion();

  const onMatch = useCallback(() => {
    setSparkles(true);
    if (!reduceMotion) fireConfetti();
    setTimeout(() => setSparkles(false), 1500);
  }, [reduceMotion]);

  useKeySequence("crisis", onMatch);

  return (
    <>
      <button
        aria-label="Spawn confetti"
        onClick={fireConfetti}
        className="fixed bottom-4 right-4 z-40 rounded-full bg-gradient-to-r from-flame to-bubble p-3 text-xl shadow-glow transition active:scale-95 sm:bottom-6 sm:right-6 sm:p-3 sm:text-2xl sm:hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey"
      >
        ❤️
      </button>
      {sparkles ? (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-30 flex items-center justify-center bg-black/30 backdrop-blur-sm"
        >
          <div className="relative h-48 w-48">
            {[...Array(12)].map((_, i) => (
              <motion.span
                key={i}
                className="sparkle absolute h-6 w-6 rounded-full"
                initial={reduceMotion ? undefined : { scale: 0, opacity: 0 }}
                animate={
                  reduceMotion
                    ? { opacity: 0.5 }
                    : { scale: [0, 1.2, 1], opacity: [0, 1, 0] }
                }
                transition={{ duration: 1.2, delay: i * 0.05 }}
                style={{
                  top: `${20 + (i % 4) * 20}%`,
                  left: `${20 + ((i * 3) % 4) * 18}%`
                }}
              />
            ))}
            <p className="absolute inset-x-0 bottom-0 text-center text-sm text-white/80">
              Sparkle mode: activated
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
};

