import SectionIntro from "@/components/ui/SectionIntro";
import Card, { CardGrid } from "@/components/ui/Card";
import { PILLARS } from "@/lib/content";

export default function PillarsSection() {
  return (
    <section className="bg-bg py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
        <SectionIntro
          eyebrow={PILLARS.eyebrow}
          headline={PILLARS.headline}
          body={PILLARS.body}
        />
        <CardGrid>
          {PILLARS.cards.map((card) => (
            <Card
              key={card.label}
              variant="label"
              label={card.label}
              title={card.title}
              body={card.body}
            />
          ))}
        </CardGrid>
      </div>
    </section>
  );
}
