import SectionIntro from "@/components/ui/SectionIntro";
import Card, { CardGrid } from "@/components/ui/Card";
import { WHY_NOW } from "@/lib/content";

const CARD_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=75",
    alt: "논리적 사고력 기반 독서",
  },
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=75",
    alt: "대학 입시 캠퍼스",
  },
  {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=75",
    alt: "글로벌 이슈와 세계",
  },
];

export default function WhyNowSection() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
        <SectionIntro headline={WHY_NOW.headline} body={WHY_NOW.body} />
        <CardGrid>
          {WHY_NOW.cards.map((card, i) => (
            <Card
              key={card.num}
              variant="number"
              num={card.num}
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
