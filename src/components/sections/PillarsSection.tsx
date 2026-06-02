import SectionIntro from "@/components/ui/SectionIntro";
import Card, { CardGrid } from "@/components/ui/Card";
import { PILLARS } from "@/lib/content";

const CARD_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=75",
    alt: "구조적 사고력 — 노트와 기획",
  },
  {
    src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=75",
    alt: "근거 기반 사고력 — 도서관 리서치",
  },
  {
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=75",
    alt: "설득력 있는 커뮤니케이션 — 마이크",
  },
];

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
          {PILLARS.cards.map((card, i) => (
            <Card
              key={card.label}
              variant="label"
              label={card.label}
              title={card.title}
              body={card.body}
              image={CARD_IMAGES[i].src}
              imageAlt={CARD_IMAGES[i].alt}
            />
          ))}
        </CardGrid>
      </div>
    </section>
  );
}
