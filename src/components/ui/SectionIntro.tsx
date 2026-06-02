interface SectionIntroProps {
  eyebrow?: string;
  headline: string;
  body?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionIntro({
  eyebrow,
  headline,
  body,
  center = false,
  light = false,
}: SectionIntroProps) {
  const align = center ? "text-center items-center" : "items-start";
  const textColor = light ? "text-white" : "text-ink";
  const subColor = light ? "text-white/70" : "text-muted";

  return (
    <div className={`flex flex-col gap-3 ${align}`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold tracking-widest uppercase ${
            light ? "text-gold-soft" : "text-gold"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`text-2xl sm:text-3xl font-bold leading-snug ${textColor}`}>
        {headline}
      </h2>
      <div
        className={`w-10 h-0.5 ${
          light ? "bg-gold-soft" : "bg-gold"
        } ${center ? "mx-auto" : ""}`}
      />
      {body && (
        <p className={`text-sm sm:text-base leading-relaxed max-w-2xl ${subColor}`}>
          {body}
        </p>
      )}
    </div>
  );
}
