"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavigationControls } from "./NavigationControls";
import { ProgressBar } from "./ProgressBar";

interface WrappedControllerProps {
  slides: ReactNode[];
  onComplete?: () => void;
}

export const WrappedController = ({ slides, onComplete }: WrappedControllerProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasCompletedOnce, setHasCompletedOnce] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const totalSlides = slides.length;

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("crisis-wrapped-progress");
    if (saved) {
      const { completed, lastSlide } = JSON.parse(saved);
      setHasCompletedOnce(completed);
      if (completed) {
        // If completed, show confirmation to resume or restart
        const resume = window.confirm("Continue where you left off?");
        if (resume && lastSlide) {
          setCurrentSlide(lastSlide);
        }
      }
    }
  }, []);

  // Save progress
  useEffect(() => {
    const isComplete = currentSlide === totalSlides - 1;
    if (isComplete && !hasCompletedOnce) {
      setHasCompletedOnce(true);
      onComplete?.();
    }
    localStorage.setItem(
      "crisis-wrapped-progress",
      JSON.stringify({
        completed: hasCompletedOnce || isComplete,
        lastSlide: currentSlide
      })
    );
  }, [currentSlide, hasCompletedOnce, totalSlides, onComplete]);

  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= totalSlides) return;
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide, totalSlides]);

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Escape" && hasCompletedOnce) {
        // Could implement overview mode here
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, hasCompletedOnce]);

  // Touch/swipe handling
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-ink" style={{ height: "100dvh" }}>
      <ProgressBar
        current={currentSlide}
        total={totalSlides}
        canNavigate={hasCompletedOnce}
        onNavigate={goToSlide}
      />

      <div className="relative h-full w-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 }
            }}
            className="absolute inset-0"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      <NavigationControls
        onPrev={prevSlide}
        onNext={nextSlide}
        canGoBack={currentSlide > 0}
        canGoForward={currentSlide < totalSlides - 1}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
      />
    </div>
  );
};
