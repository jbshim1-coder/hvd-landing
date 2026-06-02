import type { Metadata } from "next";
import Image from "next/image";
import { ASSETS } from "@/lib/content";

export const metadata: Metadata = {
  title: "신청 완료 | Harvard Debate Council Workshop in Korea",
  robots: { index: false },
};

export default function ThanksPage() {
  return (
    <div className="min-h-dvh bg-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-md w-full flex flex-col items-center gap-8 text-center">
        <Image
          src={ASSETS.logo}
          alt="Harvard Debate Council Summer Workshop in Korea"
          width={180}
          height={46}
          className="h-10 w-auto object-contain"
        />

        <div className="flex flex-col gap-3">
          <div className="text-4xl" aria-hidden="true">✅</div>
          <h1 className="text-2xl font-bold text-ink">신청이 완료되었습니다</h1>
          <div className="w-10 h-0.5 bg-gold mx-auto" />
          <p className="text-sm text-muted leading-relaxed">
            담당 매니저가 빠르게 연락드리겠습니다.
          </p>
        </div>

        <a
          href="/"
          className="text-sm text-muted underline underline-offset-2 hover:text-ink transition-colors"
        >
          홈으로 돌아가기
        </a>
      </div>
    </div>
  );
}
