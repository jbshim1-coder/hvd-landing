import Image from "next/image";
import SectionIntro from "@/components/ui/SectionIntro";
import { ASSETS, SOCIAL_PROOF } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="bg-bg py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionIntro
          eyebrow={SOCIAL_PROOF.eyebrow}
          headline={SOCIAL_PROOF.headline}
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SOCIAL_PROOF.items.map((item) => (
            <figure
              key={item.source}
              className="flex flex-col gap-4 p-6 bg-white rounded-xl border border-line"
            >
              <span className="text-3xl text-gold/40 font-serif leading-none">
                &ldquo;
              </span>
              <blockquote className="text-sm text-ink leading-relaxed -mt-4">
                {item.quote}
              </blockquote>
              <figcaption className="text-xs text-muted font-semibold">
                — {item.source}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* 현장 사진 */}
        <div className="mt-8 rounded-xl overflow-hidden">
          <Image
            src={ASSETS.hallPhoto}
            alt="하버드 디베이트 카운슬 워크샵 설명회 현장"
            width={1080}
            height={480}
            className="w-full object-cover max-h-72"
          />
        </div>
      </div>
    </section>
  );
}
