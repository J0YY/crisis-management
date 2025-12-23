"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { chatReceipts } from "@/data/wrappedData";

export const ChatReceipts = () => {
  const reduceMotion = useReducedMotion();
  return (
    <SectionShell
      id="receipts"
      kicker="Chat Receipts"
      title="Best of Chat Receipts"
      description="Top Silliest Messages Sent by the Crisis Management Team"
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {chatReceipts.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="glass relative overflow-hidden rounded-2xl p-5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            <div className="relative space-y-3">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/60">
                <span>{item.tag ?? "chat"}</span>
                <span>{idx + 1}/{chatReceipts.length}</span>
              </div>
              <h3 className="font-display text-xl text-white">{item.title}</h3>
              <p className="text-sm text-white/75">{item.summary}</p>
              <div className="space-y-2 rounded-xl bg-black/25 p-3">
                {item.messages.map((msg) => (
                  <div
                    key={msg}
                    className="rounded-lg bg-white/5 px-3 py-2 text-sm text-white/85 ring-1 ring-white/5"
                  >
                    {msg}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
};

