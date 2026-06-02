import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomCTA from "@/components/layout/MobileBottomCTA";
import Hero from "@/components/sections/Hero";
import WhyNowSection from "@/components/sections/WhyNowSection";
import PillarsSection from "@/components/sections/PillarsSection";
import HarvardDiffSection from "@/components/sections/HarvardDiffSection";
import AdmissionsSection from "@/components/sections/AdmissionsSection";
import ProgramSpecSection from "@/components/sections/ProgramSpecSection";
import DirectorProfile from "@/components/sections/DirectorProfile";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import LeadForm from "@/components/form/LeadForm";

// 섹션 순서: 03_PAGE_SPECS/landing.md 기준 11개 고정
export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero */}
        <Hero />
        {/* 2. Why Now */}
        <WhyNowSection />
        {/* 3. Pillars */}
        <PillarsSection />
        {/* 4. Harvard Difference */}
        <HarvardDiffSection />
        {/* 5. Admissions */}
        <AdmissionsSection />
        {/* 6. Program Spec */}
        <ProgramSpecSection />
        {/* 7. Director */}
        <DirectorProfile />
        {/* 8. Social Proof */}
        <Testimonials />
        {/* 9. FAQ */}
        <FAQSection />
        {/* 10. Lead Form */}
        <LeadForm />
      </main>
      {/* 11. Footer */}
      <Footer />
      {/* 모바일 하단 고정 CTA */}
      <MobileBottomCTA />
    </>
  );
}
