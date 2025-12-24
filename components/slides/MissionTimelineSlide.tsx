"use client";

import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";
import { missions } from "@/data/wrappedData";

export const MissionTimelineSlide = () => {
  return (
    <SlideContainer>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-honey">Mission Timeline</p>
          <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl">
            Operation: Ameya Arc
          </h2>
          <p className="mt-3 text-lg text-white/70">A complete mission debrief</p>
        </motion.div>

        <div className="relative space-y-6">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-flame via-bubble to-honey opacity-30" />

          {missions.map((mission, idx) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
              className="relative flex gap-6"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.15, type: "spring" }}
                className="relative z-10 mt-2 h-4 w-4 flex-shrink-0 rounded-full bg-gradient-to-br from-flame to-bubble shadow-glow"
              />

              {/* Content */}
              <div className="glass flex-1 overflow-hidden rounded-2xl p-5">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                <div className="relative space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                        {mission.time}
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-white">{mission.title}</h3>
                    </div>
                    {mission.tag && (
                      <span className="rounded-full bg-honey/20 px-3 py-1 text-xs text-honey">
                        {mission.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-white/70">{mission.detail}</p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + idx * 0.15 }}
                    className="rounded-xl bg-white/5 px-4 py-3 text-sm italic text-white/80"
                  >
                    {mission.highlight}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
};
