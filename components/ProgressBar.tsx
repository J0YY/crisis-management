"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
  canNavigate: boolean;
  onNavigate: (index: number) => void;
}

export const ProgressBar = ({ current, total, canNavigate, onNavigate }: ProgressBarProps) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 to-transparent px-3 py-3 backdrop-blur-sm sm:px-8 sm:py-4">
      <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-3 sm:gap-4">
        {/* Progress bar */}
        <div className="flex-1">
          <div className="relative h-1 overflow-hidden rounded-full bg-white/10 sm:h-1.5">
            <motion.div
              className="absolute h-full rounded-full bg-gradient-to-r from-flame via-bubble to-honey"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Counter */}
        <div className="flex items-center gap-1.5 text-xs text-white/80 sm:gap-2 sm:text-sm">
          <span className="font-semibold text-white">{current + 1}</span>
          <span>/</span>
          <span>{total}</span>
        </div>
      </div>

      {/* Dot navigation (optional, appears after first completion) */}
      {canNavigate && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-auto mx-auto mt-2 hidden max-w-6xl justify-center gap-2 sm:mt-3 sm:flex"
        >
          {Array.from({ length: total }).map((_, index) => (
            <button
              key={index}
              onClick={() => onNavigate(index)}
              className={`h-2 rounded-full transition-all ${
                index === current
                  ? "w-8 bg-honey"
                  : index < current
                  ? "w-2 bg-white/40"
                  : "w-2 bg-white/20"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};
