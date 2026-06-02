import Image from "next/image";

interface CardNumberProps {
  variant: "number";
  num: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
}

interface CardLabelProps {
  variant: "label";
  label: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
}

type CardProps = CardNumberProps | CardLabelProps;

export default function Card(props: CardProps) {
  return (
    <div className="flex flex-col bg-white rounded-xl border border-stroke h-full overflow-hidden">
      {props.image && (
        <div className="relative h-36 flex-shrink-0">
          <Image
            src={props.image}
            alt={props.imageAlt ?? ""}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="flex flex-col gap-3 p-6">
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
    </div>
  );
}

export function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">{children}</div>
  );
}
