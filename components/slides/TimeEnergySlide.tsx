"use client";

import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";
import { timeEnergy } from "@/data/wrappedData";

export const TimeEnergySlide = () => {
  return (
    <SlideContainer>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-honey">Peak Hours</p>
          <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl">
            When the group chat hits different
          </h2>
        </motion.div>

        <div className="space-y-5">
          {timeEnergy.map((time, idx) => (
            <motion.div
              key={time.label}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="glass relative overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent" />
              <div className="relative space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{time.label}</h3>
                    <p className="text-sm text-white/60">{time.note}</p>
                  </div>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + idx * 0.1, type: "spring" }}
                    className="text-2xl font-bold text-honey"
                  >
                    {time.value}%
                  </motion.span>
                </div>
                <div className="relative h-3 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${time.value}%` }}
                    transition={{
                      duration: 1,
                      delay: 0.5 + idx * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="absolute h-full rounded-full bg-gradient-to-r from-flame via-bubble to-honey"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
};
