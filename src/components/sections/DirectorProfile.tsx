import Image from "next/image";
import SectionIntro from "@/components/ui/SectionIntro";
import { ASSETS, DIRECTOR } from "@/lib/content";

export default function DirectorProfile() {
  return (
    <section className="bg-crimson py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionIntro
          eyebrow={DIRECTOR.eyebrow}
          headline={DIRECTOR.headline}
          light
        />

        <div className="mt-10 flex flex-col sm:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <Image
              src={ASSETS.director}
              alt={`${DIRECTOR.name} — Harvard Debate Council Director`}
              width={200}
              height={227}
              className="rounded-xl object-cover w-40 sm:w-52"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg font-bold text-white">{DIRECTOR.name}</p>
            <div className="w-8 h-0.5 bg-gold" />
            <p className="text-sm text-white/80 leading-relaxed max-w-xl">
              {DIRECTOR.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
