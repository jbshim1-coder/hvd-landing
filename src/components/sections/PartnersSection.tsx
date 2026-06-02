import SectionIntro from "@/components/ui/SectionIntro";
import OrgCards from "@/components/ui/OrgCards";
import { PARTNERS } from "@/lib/content";

export default function PartnersSection() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
        <SectionIntro
          eyebrow={PARTNERS.eyebrow}
          headline={PARTNERS.headline}
        />
        <OrgCards items={PARTNERS.items} />
      </div>
    </section>
  );
}
