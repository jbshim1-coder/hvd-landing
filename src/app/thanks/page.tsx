import type { Metadata } from "next";
import Image from "next/image";
import { ASSETS, LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "신청 완료 | Harvard Debate Council Workshop in Korea",
  robots: { index: false },
};

export default function ThanksPage() {
  return (
    <div className="min-h-dvh bg-bg flex flex-col items-center justify-center px-4 py-16">
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
            <br />더 빠른 상담을 원하시면 카카오톡으로 문의해 주세요.
          </p>
        </div>

        <a
          href={LINKS.kakao}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#FEE500] text-[#3A1D1D] text-sm font-bold hover:opacity-90 transition-opacity"
        >
          <span>💬</span> 카카오톡 문의하기
        </a>

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
