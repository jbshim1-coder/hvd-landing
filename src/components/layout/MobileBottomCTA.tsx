"use client";

import { LINKS } from "@/lib/content";

export default function MobileBottomCTA() {
  return (
    <div
      className="sm:hidden fixed bottom-0 inset-x-0 z-50 px-4 py-3 bg-bg border-t border-line"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-2">
        <a
          href={LINKS.applyForm}
          className="flex-1 py-3 rounded text-center text-sm font-bold bg-crimson text-white hover:bg-crimson-dark transition-colors"
        >
          사전 1:1 상담신청
        </a>
        <a
          href={LINKS.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 rounded text-center text-sm font-bold border border-crimson text-crimson bg-white hover:bg-crimson hover:text-white transition-colors"
        >
          홈페이지
        </a>
      </div>
    </div>
  );
}
