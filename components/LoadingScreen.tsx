"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const loadingMessages = [
  "Loading the tea...",
  "Preparing crisis protocols...",
  "Gathering receipts...",
  "Charging confetti cannons...",
  "Assembling the scheming committee...",
  "Warming up the hotline...",
  "Almost there..."
];

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
        >
          {/* Background gradient blobs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-flame/30 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-bubble/30 blur-3xl"
          />

          <div className="relative z-10 w-full max-w-md space-y-8 px-6">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-flame via-bubble to-honey p-1 shadow-glow"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-ink text-4xl">
                📞
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h1 className="font-display text-3xl text-white">Crisis Management</h1>
              <p className="mt-2 text-honey">Wrapped 2025</p>
            </motion.div>

            {/* Progress bar */}
            <div className="space-y-3">
              <div className="relative h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="absolute h-full rounded-full bg-gradient-to-r from-flame via-bubble to-honey shadow-glow"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={messageIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center text-sm text-white/60"
                >
                  {loadingMessages[messageIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Percentage */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-2xl font-bold text-white"
            >
              {progress}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
