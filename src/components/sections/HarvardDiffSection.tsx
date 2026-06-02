import Image from "next/image";
import SectionIntro from "@/components/ui/SectionIntro";
import Checklist from "@/components/ui/Checklist";
import { ASSETS, HARVARD_DIFF, LINKS } from "@/lib/content";

export default function HarvardDiffSection() {
  return (
    <section className="bg-crimson py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
        <SectionIntro
          eyebrow={HARVARD_DIFF.eyebrow}
          headline={HARVARD_DIFF.headline}
          light
        />

        <Checklist items={HARVARD_DIFF.items} light />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href={LINKS.applyForm}
            className="inline-flex items-center px-6 py-3 rounded bg-gold text-ink text-sm font-bold hover:bg-gold-soft transition-colors"
          >
            {HARVARD_DIFF.cta}
          </a>
          <Image
            src={ASSETS.partnerLogos}
            alt="Harvard Debate Council · ASDA KOREA · YBM 파트너 로고"
            width={280}
            height={102}
            className="h-10 w-auto object-contain brightness-0 invert opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
