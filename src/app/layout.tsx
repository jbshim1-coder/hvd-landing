import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://hvd-landing.vercel.app";
const OG_IMAGE = "https://cdn.imweb.me/upload/S20260406852756e15d93d/95dc82c01f8bc.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "2026 Harvard Debate Council Workshop in Korea | 사전 상담 신청",
    template: "%s | Harvard Debate Council Korea",
  },
  description:
    "Harvard Debate Council이 직접 운영하는 정통 영어 디베이트 프로그램을 강남에서 만나보세요. 2026.7.27–8.8 · YBM Biz Center 강남교육연수센터 · Grade 4–12 (초4~고3).",
  keywords: [
    "Harvard Debate Council",
    "하버드 디베이트",
    "영어 디베이트 캠프",
    "여름 디베이트 워크숍",
    "디베이트 학원 강남",
    "Harvard Debate Korea",
    "NSDA 디베이트",
    "중학생 영어 디베이트",
    "고등학생 디베이트",
    "YBM 강남",
  ],
  authors: [{ name: "Harvard Debate Council" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "2026 Harvard Debate Council Workshop in Korea",
    description:
      "Harvard Debate Council이 직접 운영하는 정통 영어 디베이트 프로그램. 2026.7.27–8.8 · 강남 YBM · Grade 4–12.",
    url: SITE_URL,
    siteName: "Harvard Debate Council Korea",
    images: [
      {
        url: OG_IMAGE,
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
      "Harvard Debate Council이 직접 운영하는 정통 영어 디베이트 프로그램. 2026.7.27–8.8 · 강남 YBM · Grade 4–12.",
    images: [OG_IMAGE],
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
