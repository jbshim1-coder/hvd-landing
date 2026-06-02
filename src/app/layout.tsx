import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2026 Harvard Debate Council Workshop in Korea | 사전 상담 신청",
  description:
    "Harvard Debate Council이 직접 운영하는 정통 영어 디베이트 프로그램을 강남에서 만나보세요. 2026.7.27–8.8 · YBM Biz Center 강남교육연수센터 · Grade 4–12 (초4~고3).",
  openGraph: {
    title: "2026 Harvard Debate Council Workshop in Korea",
    description:
      "Harvard Debate Council이 직접 운영하는 정통 영어 디베이트 프로그램. 2026.7.27–8.8 · 강남.",
    images: [
      {
        url: "https://cdn.imweb.me/upload/S20260406852756e15d93d/95dc82c01f8bc.png",
        width: 1200,
        height: 627,
        alt: "2026 Harvard Debate Council Workshop in Korea",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2026 Harvard Debate Council Workshop in Korea",
    description:
      "Harvard Debate Council이 직접 운영하는 정통 영어 디베이트 프로그램. 2026.7.27–8.8 · 강남.",
    images: [
      "https://cdn.imweb.me/upload/S20260406852756e15d93d/95dc82c01f8bc.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-bg text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
