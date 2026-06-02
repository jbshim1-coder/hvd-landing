import SectionIntro from "@/components/ui/SectionIntro";
import Card, { CardGrid } from "@/components/ui/Card";
import { WHY_NOW } from "@/lib/content";

export default function WhyNowSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
        <SectionIntro headline={WHY_NOW.headline} body={WHY_NOW.body} />
        <CardGrid>
          {WHY_NOW.cards.map((card) => (
            <Card
              key={card.num}
              variant="number"
              num={card.num}
              title={card.title}
              body={card.body}
            />
          ))}
        </CardGrid>
      </div>
    </section>
  );
}
