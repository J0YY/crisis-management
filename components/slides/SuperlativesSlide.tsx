"use client";

import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";
import { superlatives } from "@/data/wrappedData";
import { fireConfetti } from "@/lib/party";
import { useEffect } from "react";

export const SuperlativesSlide = () => {
  useEffect(() => {
    // Auto-fire confetti when this slide loads
    const timer = setTimeout(() => {
      fireConfetti();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SlideContainer>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-honey">Superlatives</p>
          <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl">
            The awards you deserve 🏆
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {superlatives.map((award, idx) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + idx * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="glass relative overflow-hidden rounded-3xl p-6 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-honey/20 via-bubble/10 to-flame/20" />
              <div className="relative space-y-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1, type: "spring" }}
                  className="text-5xl"
                >
                  {award.icon}
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-white">{award.title}</h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="mt-2 text-sm text-white/70"
                  >
                    {award.detail}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
};
