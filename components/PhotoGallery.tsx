"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { photos } from "@/data/wrappedData";

export const PhotoGallery = () => {
  const reduceMotion = useReducedMotion();
  return (
    <SectionShell
      id="photos"
      kicker="Photo Memories"
      title="Tender, blurry, perfect moments."
      description="Replace /public/photos/* with real images — JPG or PNG. Captions can be edited in data/wrappedData.ts."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, idx) => (
          <motion.figure
            key={photo.src}
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className={`polaroid relative overflow-hidden rounded-2xl p-4 shadow-soft ${photo.rotate ?? ""}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ink">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
                className="h-full w-full object-cover"
                priority={idx < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute inset-0 opacity-0 transition hover:opacity-100 focus-within:opacity-100">
                <div className="absolute inset-0 bg-ink/70 backdrop-blur-md" />
                <p className="relative p-4 text-sm leading-relaxed text-white/90">
                  {photo.caption}
                </p>
              </div>
            </div>
            <figcaption className="mt-3 flex items-center justify-between text-sm text-white/80">
              <span>{photo.caption}</span>
              <span aria-hidden className="text-lg">
                {photo.accent}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </SectionShell>
  );
};

