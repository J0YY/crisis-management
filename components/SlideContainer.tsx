"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SlideContainerProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

export const SlideContainer = ({
  children,
  className = "",
  centered = true
}: SlideContainerProps) => {
  return (
    <div
      className={`h-full w-full overflow-y-auto overflow-x-hidden ${
        centered ? "flex items-center justify-center" : ""
      }`}
    >
      <div className={`w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 ${className}`}>
        {children}
      </div>
    </div>
  );
};

interface SequentialRevealProps {
  children: ReactNode[];
  delay?: number;
  staggerDelay?: number;
}

export const SequentialReveal = ({
  children,
  delay = 0,
  staggerDelay = 0.15
}: SequentialRevealProps) => {
  return (
    <>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + index * staggerDelay,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
};
