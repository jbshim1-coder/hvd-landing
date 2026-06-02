import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침 | Harvard Debate Council Workshop in Korea",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-dvh bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="text-xs text-muted hover:text-ink transition-colors mb-8 inline-block"
        >
          ← 홈으로 돌아가기
        </Link>

        <h1 className="text-2xl font-bold text-ink mb-2">개인정보처리방침</h1>
        <p className="text-xs text-muted mb-10">최종 업데이트: 2026년 6월</p>

        <div className="flex flex-col gap-8 text-sm text-ink leading-relaxed">
          <section>
            <h2 className="font-bold text-base mb-3">1. 수집하는 개인정보 항목</h2>
            <p className="text-muted mb-2">사전 상담 신청 시 아래 항목을 수집합니다.</p>
            <ul className="list-disc pl-5 text-muted flex flex-col gap-1">
              <li>참가자: 성명(영문), 생년월일, 성별, 국적, 학년, 학교명, 이메일, 전화번호</li>
              <li>학부모/보호자: 성함, 이메일, 전화번호</li>
              <li>디베이트 경험, 영어 능력 수준, 수상 경력 (선택)</li>
              <li>자동 수집: 유입 경로(UTM), 제출 시각</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-base mb-3">2. 개인정보 수집 및 이용 목적</h2>
            <ul className="list-disc pl-5 text-muted flex flex-col gap-1">
              <li>사전 상담 연락 및 프로그램 안내</li>
              <li>워크샵 참가 자격 검토</li>
              <li>관련 행사 및 교육 정보 안내</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-base mb-3">3. 개인정보 보유 및 이용 기간</h2>
            <p className="text-muted">
              수집 목적 달성(상담 완료) 후 <strong className="text-ink">6개월</strong> 이내 파기합니다.
              단, 관계 법령에 의해 보존이 필요한 경우 해당 기간 동안 보관합니다.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-base mb-3">4. 개인정보의 제3자 제공</h2>
            <p className="text-muted mb-3">
              수집된 정보는 원칙적으로 제3자에게 제공하지 않습니다. 다만 아래의 경우 예외로 합니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-stroke rounded-lg overflow-hidden">
                <thead className="bg-bg">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold text-ink border-b border-stroke">제공받는 자</th>
                    <th className="px-4 py-2 text-left font-semibold text-ink border-b border-stroke">제공 목적</th>
                    <th className="px-4 py-2 text-left font-semibold text-ink border-b border-stroke">보유 기간</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr>
                    <td className="px-4 py-2 border-b border-stroke">Google LLC</td>
                    <td className="px-4 py-2 border-b border-stroke">신청 데이터 저장 (Google Sheets)</td>
                    <td className="px-4 py-2 border-b border-stroke">상담 완료 후 6개월</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">ASDA KOREA / YBM</td>
                    <td className="px-4 py-2">프로그램 운영 및 참가자 관리</td>
                    <td className="px-4 py-2">상담 완료 후 6개월</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-bold text-base mb-3">5. 개인정보 처리 위탁</h2>
            <p className="text-muted">
              원활한 서비스 제공을 위해 아래와 같이 개인정보 처리를 위탁하고 있습니다.
            </p>
            <ul className="list-disc pl-5 text-muted mt-2 flex flex-col gap-1">
              <li>수탁자: Google LLC (미국) — 데이터 저장 인프라 제공</li>
              <li>수탁자: Vercel Inc. (미국) — 웹사이트 호스팅</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-base mb-3">6. 정보주체의 권리</h2>
            <p className="text-muted">
              개인정보 열람, 정정, 삭제, 처리정지를 요청할 권리가 있습니다.
              아래 이메일로 요청하시면 지체 없이 처리합니다.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-base mb-3">7. 개인정보 보호책임자</h2>
            <ul className="list-disc pl-5 text-muted flex flex-col gap-1">
              <li>운영사: ASDA KOREA / YBM EDU</li>
              <li>문의: 홈페이지 사전 상담 신청 폼 또는 담당 매니저</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-base mb-3">8. 동의 거부 권리</h2>
            <p className="text-muted">
              개인정보 수집·이용에 동의하지 않을 권리가 있습니다.
              다만, 동의를 거부하실 경우 사전 상담 신청이 제한될 수 있습니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
