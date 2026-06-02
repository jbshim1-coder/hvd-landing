"use client";

import { LINKS } from "@/lib/content";

export default function MobileBottomCTA() {
  return (
    <div
      className="sm:hidden fixed bottom-0 inset-x-0 z-50 flex items-center gap-2 px-4 py-3 bg-bg border-t border-line"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={LINKS.applyForm}
        className="flex-1 py-3 rounded text-center text-sm font-bold bg-crimson text-white hover:bg-crimson-dark transition-colors"
      >
        사전 상담 신청
      </a>
      <a
        href={LINKS.kakao}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="카카오톡 문의"
        className="flex-shrink-0 w-12 h-12 rounded flex items-center justify-center bg-[#FEE500] text-xl"
      >
        💬
      </a>
    </div>
  );
}
