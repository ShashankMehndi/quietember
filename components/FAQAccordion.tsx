"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type FAQItem = { q: string; a: string };

export default function FAQAccordion({
  items,
  defaultOpen = 0,
  numbered = false,
}: {
  items: FAQItem[];
  defaultOpen?: number | null;
  /** Balancia-style Q1:, Q2: prefixes */
  numbered?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="divide-y" style={{ borderColor: "var(--border)" }}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-t first:border-t-0" style={{ borderColor: "var(--border)" }}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-4 text-left md:py-5"
              aria-expanded={isOpen}
            >
              <span className="text-[15px] font-medium md:text-[16px]" style={{ color: "var(--text-dark)" }}>
                {numbered ? (
                  <>
                    <span className="mr-2 font-semibold text-[var(--teal-dark)]">Q{i + 1}:</span>
                    {item.q}
                  </>
                ) : (
                  item.q
                )}
              </span>
              <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="h-5 w-5 shrink-0" style={{ color: "var(--text-muted)" }} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="whitespace-pre-line pb-5 pr-8 text-[14px] leading-relaxed" style={{ color: "var(--text-body)" }}>
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
