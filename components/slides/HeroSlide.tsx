"use client";

import { motion } from "framer-motion";
import { SlideContainer, SequentialReveal } from "../SlideContainer";
import { fireConfetti } from "@/lib/party";

export const HeroSlide = () => {
  return (
    <SlideContainer centered>
      <div className="text-center space-y-8">
        <SequentialReveal delay={0.2} staggerDelay={0.2}>
          <div>
            <motion.h1
              className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl text-white"
            >
              Happy Birthday
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="block text-6xl sm:text-7xl lg:text-8xl bg-gradient-to-r from-flame via-bubble to-honey bg-clip-text text-transparent"
              >
                Anjali!!
              </motion.span>
            </motion.h1>
          </div>

          <div>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-7xl sm:text-8xl"
            >
              🎂
            </motion.div>
          </div>

          <div>
            <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto">
              The best of 2025 from the crisis management team.<br />
              The most iconic plots of the summer.
            </p>
          </div>

          <div>
            <motion.button
              onClick={fireConfetti}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-flame via-bubble to-honey px-8 py-4 text-lg font-semibold text-ink shadow-glow transition"
            >
              🎉 Celebrate!
            </motion.button>
          </div>

          <div>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {["birthday girl", "mom of the group", "scheming at its finest"].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70 ring-1 ring-white/10"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </SequentialReveal>
      </div>
    </SlideContainer>
  );
};
