import SectionIntro from "@/components/ui/SectionIntro";
import { ADMISSIONS } from "@/lib/content";

export default function AdmissionsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-6">
        <SectionIntro
          eyebrow={ADMISSIONS.eyebrow}
          headline={ADMISSIONS.headline}
        />
        <p className="text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
          {ADMISSIONS.body}
        </p>
      </div>
    </section>
  );
}
