"use client";

import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";

export const FriendshipIntroSlide = () => {
  return (
    <SlideContainer>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass relative overflow-hidden rounded-3xl p-10 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-flame/20 via-bubble/15 to-honey/20" />
          <div className="relative space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="font-display text-4xl text-white sm:text-5xl">
                A year in the life of
                <span className="block bg-gradient-to-r from-flame via-bubble to-honey bg-clip-text text-transparent">
                  Crisis Management
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mx-auto max-w-2xl text-xl text-white/80"
            >
              From late-night strategizing to early morning debriefs, this has been a year of
              friendship, chaos, and unconditional support. Here's how we showed up for each other.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap justify-center gap-4 pt-4"
            >
              <div className="glass rounded-2xl px-6 py-3">
                <p className="text-sm text-white/60">Always available</p>
                <p className="text-2xl font-bold text-honey">24/7</p>
              </div>
              <div className="glass rounded-2xl px-6 py-3">
                <p className="text-sm text-white/60">Response time</p>
                <p className="text-2xl font-bold text-honey">&lt; 5 min</p>
              </div>
              <div className="glass rounded-2xl px-6 py-3">
                <p className="text-sm text-white/60">Success rate</p>
                <p className="text-2xl font-bold text-honey">100%</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  );
};
