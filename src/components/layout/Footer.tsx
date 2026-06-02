import Image from "next/image";
import Link from "next/link";
import { ASSETS, FOOTER } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
          <Image
            src={ASSETS.logo}
            alt="Harvard Debate Council Summer Workshop in Korea"
            width={160}
            height={41}
            className="h-10 w-auto object-contain brightness-0 invert opacity-90"
          />
          <Image
            src={ASSETS.partnerLogos}
            alt="ASDA KOREA · YBM EDU 파트너 로고"
            width={300}
            height={109}
            className="h-14 w-auto object-contain brightness-0 invert opacity-90"
          />
        </div>

        <div className="border-t border-white/10 pt-6 space-y-1 text-xs">
          <p>{FOOTER.title}</p>
          <p>{FOOTER.org}</p>
          <p>{FOOTER.venue}</p>
          <p className="mt-3 text-white/40">{FOOTER.disclaimer}</p>
          <p className="mt-2">
            <Link href="/privacy" className="text-white/40 hover:text-white/70 underline underline-offset-2 transition-colors">
              개인정보처리방침
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
