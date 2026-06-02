import SectionIntro from "@/components/ui/SectionIntro";
import SpecTable from "@/components/ui/SpecTable";
import { PROGRAM_SPEC } from "@/lib/content";

export default function ProgramSpecSection() {
  return (
    <section id="program" className="bg-bg py-16 sm:py-20 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-8">
        <SectionIntro
          eyebrow={PROGRAM_SPEC.eyebrow}
          headline={PROGRAM_SPEC.headline}
        />
        <SpecTable items={PROGRAM_SPEC.items} />
      </div>
    </section>
  );
}
