"use client";

import { motion, AnimatePresence } from "framer-motion";

interface NavigationControlsProps {
  onPrev: () => void;
  onNext: () => void;
  canGoBack: boolean;
  canGoForward: boolean;
  currentSlide: number;
  totalSlides: number;
}

export const NavigationControls = ({
  onPrev,
  onNext,
  canGoBack,
  canGoForward,
  currentSlide,
  totalSlides
}: NavigationControlsProps) => {
  return (
    <>
      {/* Left Arrow */}
      <AnimatePresence>
        {canGoBack && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={onPrev}
            className="fixed left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-md transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-honey sm:left-8 sm:p-4"
            aria-label="Previous slide"
          >
            <svg
              className="h-6 w-6 text-white sm:h-8 sm:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Right Arrow */}
      <AnimatePresence>
        {canGoForward && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onClick={onNext}
            className="fixed right-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-md transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-honey sm:right-8 sm:p-4"
            aria-label="Next slide"
          >
            <svg
              className="h-6 w-6 text-white sm:h-8 sm:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Bottom hint */}
      <AnimatePresence>
        {currentSlide === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1 }}
            className="fixed bottom-8 left-1/2 z-40 -translate-x-1/2 text-center text-sm text-white/60"
          >
            <p>Press → or swipe to continue</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
