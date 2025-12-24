"use client";

import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";
import { chatReceipts } from "@/data/wrappedData";

export const ChatReceiptsSlide = () => {
  return (
    <SlideContainer>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-honey">Chat Receipts</p>
          <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl">
            The receipts speak for themselves.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {chatReceipts.slice(0, 2).map((receipt, idx) => (
            <motion.div
              key={receipt.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
              className="glass relative overflow-hidden rounded-3xl p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-flame/10 via-bubble/5 to-honey/10" />
              <div className="relative space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                    {receipt.tag || "conversation"}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-white">{receipt.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{receipt.summary}</p>
                </div>
                <div className="space-y-2">
                  {receipt.messages.slice(0, 4).map((msg, msgIdx) => (
                    <motion.div
                      key={msgIdx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.15 + msgIdx * 0.08 }}
                      className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/90"
                    >
                      {msg}
                    </motion.div>
                  ))}
                  {receipt.messages.length > 4 && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + idx * 0.15 }}
                      className="text-center text-xs text-white/50"
                    >
                      +{receipt.messages.length - 4} more messages
                    </motion.p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
};
