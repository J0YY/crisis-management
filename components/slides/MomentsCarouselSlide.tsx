"use client";

import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";
import { iconicMoments } from "@/data/wrappedData";

export const MomentsCarouselSlide = () => {
  return (
    <SlideContainer>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-honey">Iconic Moments</p>
          <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl">
            The quotes that defined us
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {iconicMoments.map((moment, idx) => (
            <motion.div
              key={moment.title}
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glass relative overflow-hidden rounded-3xl p-6"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-flame/10 via-bubble/10 to-honey/10" />
              <div className="relative space-y-4">
                <div>
                  {moment.tag && (
                    <span className="rounded-full bg-honey/20 px-3 py-1 text-xs uppercase tracking-wider text-honey">
                      {moment.tag}
                    </span>
                  )}
                  <h3 className="mt-2 text-lg font-bold text-white">{moment.title}</h3>
                  <p className="text-sm text-white/60">{moment.stat}</p>
                </div>
                <motion.blockquote
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="rounded-2xl bg-white/5 px-4 py-4 text-base italic text-white/90"
                >
                  "{moment.quote}"
                </motion.blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
};
