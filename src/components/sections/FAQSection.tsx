import SectionIntro from "@/components/ui/SectionIntro";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { FAQ_ITEMS, LINKS } from "@/lib/content";

export default function FAQSection() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col gap-8">
        <SectionIntro eyebrow="faq" headline="자주 묻는 질문" center />
        <FAQAccordion items={FAQ_ITEMS} />

        {/* 3차 CTA */}
        <div className="text-center">
          <a
            href={LINKS.applyForm}
            className="inline-flex items-center px-8 py-3 rounded bg-crimson text-white text-sm font-bold hover:bg-crimson-dark transition-colors"
          >
            사전 1:1 상담신청하기
          </a>
        </div>
      </div>
    </section>
  );
}
