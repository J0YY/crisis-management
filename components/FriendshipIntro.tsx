"use client";

import { SectionShell } from "./SectionShell";
import { motion, useReducedMotion } from "framer-motion";

export const FriendshipIntro = () => {
  const reduceMotion = useReducedMotion();
  return (
    <SectionShell
      id="begin"
      kicker="Friendship First"
      title="A riddle for the chaos trio."
      description="Crack it if you’ve ever timed ads, ferried chargers, or whispered “COME NOWWW” outside a theater."
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
          Riddle me this: who texts “once again” until you’re home, prays to the ad gods at 10:25,
          ferries a Canon charger like it’s state secrets, and can run a whole operation while
          whispering “no more scheming… probably”? If you answered “us, with you at the center,”
          you solved it. Prize: this feral birthday dossier.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/70">
          <span className="rounded-full bg-white/5 px-3 py-1">Clue: “COME NOWWW”</span>
          <span className="rounded-full bg-white/5 px-3 py-1">Clue: Charger secured</span>
          <span className="rounded-full bg-white/5 px-3 py-1">Clue: No more scheming (allegedly)</span>
        </div>
      </motion.div>
    </SectionShell>
  );
};

