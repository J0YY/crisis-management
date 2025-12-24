"use client";

import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";
import { vibeStats } from "@/data/wrappedData";
import CountUp from "react-countup";

export const VibeStatsSlide = () => {
  return (
    <SlideContainer>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-honey">The Year in Vibes</p>
          <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl">
            Less charts, more feelings.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {vibeStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.15 }}
              className="glass relative overflow-hidden rounded-3xl p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="relative space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/50">Vibe</p>
                    <p className="mt-1 text-lg font-semibold text-white">{stat.label}</p>
                  </div>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + idx * 0.15, type: "spring", stiffness: 200 }}
                    className="text-3xl font-bold text-honey"
                  >
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={1.5}
                      delay={0.6 + idx * 0.15}
                      suffix="%"
                    />
                  </motion.span>
                </div>
                <div className="relative h-4 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.value}%` }}
                    transition={{
                      duration: 1.2,
                      delay: 0.8 + idx * 0.15,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="absolute h-full rounded-full bg-gradient-to-r from-flame via-bubble to-honey shadow-glow"
                  />
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 + idx * 0.15 }}
                  className="text-sm text-white/70"
                >
                  {stat.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
};
