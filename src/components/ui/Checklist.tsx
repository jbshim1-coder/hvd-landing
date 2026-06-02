interface ChecklistProps {
  items: readonly string[];
  light?: boolean;
}

export default function Checklist({ items, light = false }: ChecklistProps) {
  const textColor = light ? "text-white/90" : "text-ink";
  const iconColor = light ? "text-gold-soft" : "text-gold";

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
      {items.map((item) => (
        <li key={item} className={`flex gap-3 text-sm leading-relaxed ${textColor}`}>
          <span className={`mt-0.5 flex-shrink-0 ${iconColor}`} aria-hidden="true">
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
