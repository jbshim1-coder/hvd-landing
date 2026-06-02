interface SpecTableProps {
  items: readonly { label: string; value: string }[];
}

export default function SpecTable({ items }: SpecTableProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map(({ label, value }) => (
        <div
          key={label}
          className="flex flex-col gap-1 p-4 rounded-xl bg-white border border-stroke"
        >
          <span className="text-xs font-semibold text-gold uppercase tracking-wide">
            {label}
          </span>
          <span className="text-sm font-medium text-ink">{value}</span>
        </div>
      ))}
    </div>
  );
}
