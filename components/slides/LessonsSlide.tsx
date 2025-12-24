"use client";

import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";
import { lessons } from "@/data/wrappedData";

export const LessonsSlide = () => {
  return (
    <SlideContainer>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-honey">What We Learned</p>
          <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl">
            The real wrapped is the friends we made
          </h2>
        </motion.div>

        <div className="space-y-6">
          {lessons.map((lesson, idx) => (
            <motion.div
              key={lesson.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
              className="glass relative overflow-hidden rounded-3xl p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-flame/15 via-bubble/10 to-honey/15" />
              <div className="relative space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-white">{lesson.title}</h3>
                  <p className="mt-3 text-lg text-white/80">{lesson.detail}</p>
                </motion.div>
                {lesson.emphasis && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + idx * 0.2 }}
                    className="rounded-2xl bg-white/10 px-6 py-4 text-center"
                  >
                    <p className="handwritten text-2xl text-honey">{lesson.emphasis}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
};
