"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { toPng } from "html-to-image";
import { fireConfetti } from "@/lib/party";

export const BirthdayFinale = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const reduceMotion = useReducedMotion();

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
      if (!reduceMotion) {
        fireConfetti();
      }
    } catch (error) {
      console.error("Download failed", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <SectionShell
      id="finale"
      kicker="Birthday Finale"
      title="Happy Birthday, Anjali"
      description="A celebratory ending with confetti and a shareable card. Click the button to save it."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8"
          ref={cardRef}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-flame/15 via-bubble/10 to-honey/15" />
          <div className="relative space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Crisis Management Wrapped 2025
            </p>
            <h3 className="font-display text-3xl text-white">Happy Birthday, Anjali 🎂</h3>
            <p className="text-lg text-white/80">
              A friendship report filled with chaos, comfort, and relentless love.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">Top Vibe</p>
                <p className="text-xl font-semibold text-honey">Wholesome Chaos</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">Emergency Hotline</p>
                <p className="text-xl font-semibold text-honey">Always On</p>
              </div>
            </div>
            <p className="handwritten text-3xl text-white">We love you so much it hurts.</p>
            <div className="flex flex-wrap gap-2 text-sm text-white/70">
              <span className="rounded-full bg-white/10 px-3 py-1">Confetti ready</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Card sized for sharing</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Click hearts for more joy</span>
            </div>
          </div>
        </motion.div>
        <div className="space-y-4">
          <p className="text-lg text-white/80">
            Thank you for being the safest place, the loudest laugh, and the calm in the chaos.
            Your friendship is the plot twist we’ll always choose.
          </p>
          <button
            onClick={downloadCard}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-honey via-bubble to-flame px-6 py-3 font-semibold text-ink shadow-glow transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey"
            disabled={isDownloading}
          >
            {isDownloading ? "Preparing card..." : "Download Your Wrapped Card"}
          </button>
          <p className="text-sm text-white/60">
            The PNG is generated locally (no uploads). Swap text and colors however you like.
          </p>
        </div>
      </div>
    </SectionShell>
  );
};

