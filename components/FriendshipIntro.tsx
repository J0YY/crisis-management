"use client";

import { SectionShell } from "./SectionShell";
import { motion, useReducedMotion } from "framer-motion";

export const FriendshipIntro = () => {
  const reduceMotion = useReducedMotion();
  return (
    <SectionShell
      id="begin"
      kicker="Friendship First"
      title="This is about you, not just the chat."
      description="A warm love letter disguised as a report. No metrics can measure how much you mean to us."
    >
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-flame/10 via-bubble/10 to-honey/10" />
        <p className="relative max-w-3xl text-lg leading-relaxed text-white/85">
          This isn’t about messages sent or crises survived. It’s about friendship, laughter,
          and the fact that life is better with you in it. We took every meme, late-night voice
          note, and feral brainstorm and turned it into this little birthday love capsule.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/70">
          <span className="rounded-full bg-white/5 px-3 py-1">Made with zero chill</span>
          <span className="rounded-full bg-white/5 px-3 py-1">Data: 100% placeholder, 0% AI scrape</span>
          <span className="rounded-full bg-white/5 px-3 py-1">Tone: affectionate & silly</span>
        </div>
      </motion.div>
    </SectionShell>
  );
};

