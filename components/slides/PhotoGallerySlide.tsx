"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SlideContainer } from "../SlideContainer";
import { photos } from "@/data/wrappedData";

export const PhotoGallerySlide = () => {
  return (
    <SlideContainer>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-honey">Photo Memories</p>
          <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl">
            HIGHLIGHTS in pictures.
          </h2>
          <p className="mt-3 text-lg text-white/70">The best of summer 2025 in review.</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, idx) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: photo.rotate?.includes("rotate-1")
                  ? 1
                  : photo.rotate?.includes("rotate-2")
                  ? 2
                  : photo.rotate?.includes("rotate-3")
                  ? 3
                  : photo.rotate?.includes("-rotate-1")
                  ? -1
                  : photo.rotate?.includes("-rotate-2")
                  ? -2
                  : photo.rotate?.includes("-rotate-3")
                  ? -3
                  : 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.3 + idx * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className="polaroid relative cursor-pointer overflow-hidden rounded-2xl p-4 shadow-soft"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ink">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <figcaption className="mt-3 flex items-center justify-between text-sm text-white/80">
                <span>{photo.caption}</span>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1, type: "spring" }}
                  aria-hidden
                  className="text-xl"
                >
                  {photo.accent}
                </motion.span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
};
