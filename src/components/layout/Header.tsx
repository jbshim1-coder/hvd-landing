"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ASSETS, LINKS } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        scrolled ? "bg-bg/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="홈으로">
          <Image
            src={ASSETS.logo}
            alt="Harvard Debate Council Summer Workshop in Korea"
            width={160}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden sm:flex items-center gap-2">
          <a
            href={LINKS.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded text-sm font-semibold border border-crimson text-crimson hover:bg-crimson hover:text-white transition-colors"
          >
            홈페이지
          </a>
          <a
            href={LINKS.applyForm}
            className="inline-flex items-center px-4 py-2 rounded text-sm font-semibold bg-crimson text-white hover:bg-crimson-dark transition-colors"
          >
            사전 1:1 상담신청
          </a>
        </div>
      </div>
    </header>
  );
}
