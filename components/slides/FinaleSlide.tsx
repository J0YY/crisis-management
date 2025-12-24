"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";
import { toPng } from "html-to-image";
import { fireConfetti } from "@/lib/party";

export const FinaleSlide = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    // Auto-fire confetti when reaching finale
    const timer = setTimeout(() => {
      fireConfetti();
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const downloadCard = async () => {
    if (!cardRef.current) return;
    setIsDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2
      });
      const link = document.createElement("a");
      link.download = "crisis-management-wrapped-anjali.png";
      link.href = dataUrl;
      link.click();
      fireConfetti();
    } catch (error) {
      console.error("Download failed", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <SlideContainer>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-honey">Birthday Finale</p>
          <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl">
            Happy Birthday, Anjali 🎂
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass relative overflow-hidden rounded-3xl p-8"
            ref={cardRef}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-flame/15 via-bubble/10 to-honey/15" />
            <div className="relative space-y-5">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm uppercase tracking-[0.2em] text-white/60"
              >
                Crisis Management Wrapped 2025
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="font-display text-4xl text-white"
              >
                Happy Birthday, Anjali 🎂
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-lg text-white/80"
              >
                A friendship report filled with chaos, comfort, and relentless love.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="grid gap-3 sm:grid-cols-2"
              >
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/60">Top Vibe</p>
                  <p className="text-xl font-semibold text-honey">Wholesome Chaos</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                    Emergency Hotline
                  </p>
                  <p className="text-xl font-semibold text-honey">Always On</p>
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="handwritten text-4xl text-white"
              >
                We love you so much it hurts.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="flex flex-wrap gap-2 text-sm text-white/70"
              >
                <span className="rounded-full bg-white/10 px-3 py-1">Confetti ready</span>
                <span className="rounded-full bg-white/10 px-3 py-1">Card sized for sharing</span>
                <span className="rounded-full bg-white/10 px-3 py-1">
                  Click hearts for more joy
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-white/80">
              Thank you for being the safest place, the loudest laugh, and the calm in the chaos.
              Your friendship is the plot twist we'll always choose.
            </p>
            <motion.button
              onClick={downloadCard}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-honey via-bubble to-flame px-8 py-4 font-semibold text-ink shadow-glow transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey"
              disabled={isDownloading}
            >
              {isDownloading ? "Preparing card..." : "Download Your Wrapped Card"}
            </motion.button>
            <p className="text-sm text-white/60">
              The PNG is generated locally (no uploads). Share it however you like!
            </p>
          </motion.div>
        </div>
      </div>
    </SlideContainer>
  );
};
