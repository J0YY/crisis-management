"use client";

import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";
import { hotlineMoments } from "@/data/wrappedData";

export const HotlineMomentsSlide = () => {
  return (
    <SlideContainer>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-honey">Crisis Hotline</p>
          <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl">
            📞 Always answering
          </h2>
          <p className="mt-3 text-lg text-white/70">The best advice moments</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {hotlineMoments.map((moment, idx) => (
            <motion.div
              key={moment.headline}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="glass relative overflow-hidden rounded-3xl p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-bubble/10 to-flame/10" />
              <div className="relative space-y-4">
                <div className="flex items-start gap-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + idx * 0.1, type: "spring" }}
                    className="text-2xl"
                  >
                    📞
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {moment.tag || "advice"}
                    </p>
                    <h3 className="mt-1 font-semibold text-white">{moment.headline}</h3>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="rounded-2xl bg-white/5 px-4 py-3 text-sm italic text-white/90"
                >
                  {moment.reply}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
};
