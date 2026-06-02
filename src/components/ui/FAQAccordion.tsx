"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: readonly FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-line border border-line rounded-xl overflow-hidden">
      {items.map((item, i) => (
        <div key={item.q}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-bg transition-colors"
            aria-expanded={open === i}
          >
            <span className="text-sm font-semibold text-ink">{item.q}</span>
            <span
              className={`flex-shrink-0 text-gold transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            >
              ▾
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-4 pt-2 bg-bg">
              <p className="text-sm text-muted leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
