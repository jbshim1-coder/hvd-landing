interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: readonly FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="divide-y divide-line border border-line rounded-xl overflow-hidden">
      {items.map((item) => (
        <div key={item.q}>
          <div className="px-5 py-4 bg-white">
            <p className="text-sm font-semibold text-ink">{item.q}</p>
          </div>
          <div className="px-5 pb-4 pt-2 bg-bg">
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
