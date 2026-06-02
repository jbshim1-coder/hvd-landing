import Image from "next/image";
import { ASSETS, LINKS, FOOTER } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
          <Image
            src={ASSETS.logo}
            alt="Harvard Debate Council Summer Workshop in Korea"
            width={140}
            height={36}
            className="h-8 w-auto object-contain brightness-0 invert opacity-80"
          />
          <a
            href={LINKS.kakao}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#FEE500] text-[#3A1D1D] text-sm font-semibold hover:opacity-90 transition-opacity w-fit"
          >
            <span>💬</span> 카카오톡 문의
          </a>
        </div>

        <div className="border-t border-white/10 pt-6 space-y-1 text-xs">
          <p>{FOOTER.title}</p>
          <p>{FOOTER.org}</p>
          <p>{FOOTER.venue}</p>
          <p className="mt-3 text-white/40">{FOOTER.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
