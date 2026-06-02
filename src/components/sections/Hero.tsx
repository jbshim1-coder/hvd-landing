import Image from "next/image";
import FactChips from "@/components/ui/FactChips";
import { ASSETS, HERO, LINKS } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center overflow-hidden">
      {/* 배경 키비주얼 */}
      <Image
        src={ASSETS.heroWide}
        alt="2026 Harvard Debate Council Workshop Korea 키비주얼"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* 크림슨 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-r from-crimson-dark/90 via-crimson/80 to-crimson/40" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="max-w-2xl flex flex-col gap-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
            {HERO.headline}
          </h1>
          <p className="text-sm sm:text-base text-white/85 leading-relaxed">
            {HERO.body}
          </p>

          <FactChips />

          {/* CTA 버튼 최대 2개 */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={LINKS.applyForm}
              className="inline-flex items-center justify-center px-6 py-3 rounded bg-gold text-ink text-sm font-bold hover:bg-gold-soft transition-colors"
            >
              {HERO.ctaPrimary}
            </a>
            <a
              href="#program"
              className="inline-flex items-center justify-center px-6 py-3 rounded border border-white/50 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              {HERO.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
