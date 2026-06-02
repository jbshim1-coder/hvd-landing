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

function SmallCard({ item }: { item: OrgCardItem }) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-xl border border-stroke h-full">
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
  );
}

function FeaturedCard({ item }: { item: OrgCardItem }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-8 bg-white rounded-xl border-2 border-gold/50 shadow-md">
      <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-4 flex-shrink-0">
        <div className="w-16 h-16 rounded-xl bg-crimson flex items-center justify-center">
          <span className="text-sm font-bold text-white">{item.abbrev}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-gold/20 text-gold uppercase tracking-wide w-fit">
            {item.role}
          </span>
          <p className="text-base font-bold text-ink leading-snug">{item.name}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 flex-1">
        <p className="text-sm text-muted leading-relaxed">{item.description}</p>
        {item.notice && (
          <p className="text-[11px] text-muted/70 leading-relaxed border-t border-line pt-3">
            {item.notice}
          </p>
        )}
      </div>
    </div>
  );
}

export default function OrgCards({ items }: OrgCardsProps) {
  // 레이아웃: [0][1] 상단 2열 / [2] 센터 피처드 / [3][4] 하단 2열
  const top = items.slice(0, 2);
  const featured = items[2];
  const bottom = items.slice(3, 5);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {top.map((item) => (
          <SmallCard key={item.abbrev} item={item} />
        ))}
      </div>
      {featured && <FeaturedCard item={featured} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {bottom.map((item) => (
          <SmallCard key={item.abbrev} item={item} />
        ))}
      </div>
    </div>
  );
}
