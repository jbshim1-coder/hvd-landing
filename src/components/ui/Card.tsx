// why_now 번호형 또는 pillars 라벨형 두 변형을 지원

interface CardNumberProps {
  variant: "number";
  num: string;
  title: string;
  body: string;
}

interface CardLabelProps {
  variant: "label";
  label: string;
  title: string;
  body: string;
}

type CardProps = CardNumberProps | CardLabelProps;

export default function Card(props: CardProps) {
  return (
    <div className="flex flex-col gap-3 p-6 bg-white rounded-xl border border-line h-full">
      {props.variant === "number" ? (
        <span className="text-3xl font-bold text-gold/60 font-serif">
          {props.num}
        </span>
      ) : (
        <span className="text-xs font-semibold tracking-widest uppercase text-gold">
          {props.label}
        </span>
      )}
      <h3 className="text-base font-bold text-ink">{props.title}</h3>
      <p className="text-sm text-muted leading-relaxed">{props.body}</p>
    </div>
  );
}

export function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">{children}</div>
  );
}
