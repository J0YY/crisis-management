"use client";

import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";

export const IntroSlide = () => {
  return (
    <SlideContainer centered>
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          {/* Logo/Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-flame via-bubble to-honey p-1 shadow-glow"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-ink text-4xl">
              📞
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="font-display text-4xl leading-tight text-white sm:text-6xl lg:text-7xl">
              Crisis Management
              <span className="block bg-gradient-to-r from-flame via-bubble to-honey bg-clip-text text-transparent">
                Wrapped 2025
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-lg text-white/80 sm:text-2xl"
            >
              Anjali Edition
            </motion.p>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <span className="rounded-full bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.2em] text-white/70 ring-1 ring-white/10">
              summer 2025 dump
            </span>
            <span className="rounded-full bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.2em] text-white/70 ring-1 ring-white/10">
              birthday girl
            </span>
            <span className="rounded-full bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.2em] text-white/70 ring-1 ring-white/10">
              totally (un)biased
            </span>
          </motion.div>

          {/* Pulse animation hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 2, duration: 2, repeat: Infinity }}
            className="pt-8 text-sm text-white/50"
          >
            Press → to begin
          </motion.div>
        </motion.div>

        {/* Background decorations */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-flame/20 blur-3xl"
          aria-hidden
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-bubble/20 blur-3xl"
          aria-hidden
        />
      </div>
    </SlideContainer>
  );
};
