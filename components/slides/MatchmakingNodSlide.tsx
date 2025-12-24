"use client";

import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";

export const MatchmakingNodSlide = () => {
  return (
    <SlideContainer>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-honey">Scheming Committee</p>
          <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl">
            The matchmaking chronicles
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass relative overflow-hidden rounded-3xl p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-flame/15 via-bubble/10 to-honey/15" />
          <div className="relative space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white">
                We tried. We really, really tried.
              </h3>
              <p className="text-lg text-white/80">
                From elaborate seating arrangements to strategic movie theater positioning, the
                crisis management team deployed all available resources for Operation Ameya.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="grid gap-4 sm:grid-cols-3"
            >
              <div className="rounded-2xl bg-white/10 p-5 text-center">
                <p className="text-3xl">🎭</p>
                <p className="mt-2 text-sm text-white/70">Strategic seating deployed</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5 text-center">
                <p className="text-3xl">📋</p>
                <p className="mt-2 text-sm text-white/70">Mission plans drafted</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5 text-center">
                <p className="text-3xl">💬</p>
                <p className="mt-2 text-sm text-white/70">Group chat on standby</p>
              </div>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="rounded-2xl bg-white/5 px-6 py-5 text-center"
            >
              <p className="handwritten text-2xl text-white">
                "No more scheming about my love life seriously"
              </p>
              <p className="mt-2 text-sm text-white/60">— Famous last words</p>
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-center text-white/70"
            >
              The committee may have disbanded, but the friendship report remains undefeated.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  );
};
