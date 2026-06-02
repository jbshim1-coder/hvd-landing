interface OrgCardItem {
  readonly abbrev: string;
  readonly name: string;
  readonly role: string;
  readonly description: string;
  readonly notice?: string;
}

interface OrgCardsProps {
  items: readonly OrgCardItem[];
}

export default function OrgCards({ items }: OrgCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <div
          key={item.abbrev}
          className="flex flex-col gap-4 p-6 bg-white rounded-xl border border-stroke h-full"
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-crimson flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] font-bold text-white leading-tight text-center px-1">
                {item.abbrev}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold/20 text-gold uppercase tracking-wide w-fit">
                {item.role}
              </span>
              <p className="text-sm font-bold text-ink leading-snug">{item.name}</p>
            </div>
          </div>
          <p className="text-sm text-muted leading-relaxed flex-1">{item.description}</p>
          {item.notice && (
            <p className="text-[11px] text-muted/70 leading-relaxed border-t border-line pt-3">
              {item.notice}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
