"use client";

import { LINKS } from "@/lib/content";

export default function MobileBottomCTA() {
  return (
    <div
      className="sm:hidden fixed bottom-0 inset-x-0 z-50 px-4 py-3 bg-bg border-t border-line"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={LINKS.applyForm}
        className="block w-full py-3 rounded text-center text-sm font-bold bg-crimson text-white hover:bg-crimson-dark transition-colors"
      >
        사전 1:1 상담신청
      </a>
    </div>
  );
}
