import { FACT_CHIPS } from "@/lib/content";

export default function FactChips() {
  return (
    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
      {FACT_CHIPS.map((chip) => (
        <span
          key={chip.text}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-medium"
        >
          <span aria-hidden="true">{chip.icon}</span>
          {chip.text}
        </span>
      ))}
    </div>
  );
}
