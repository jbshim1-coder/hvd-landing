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

        <a
          href={LINKS.applyForm}
          className="hidden sm:inline-flex items-center px-4 py-2 rounded text-sm font-semibold bg-crimson text-white hover:bg-crimson-dark transition-colors"
        >
          사전 상담 신청
        </a>
      </div>
    </header>
  );
}
