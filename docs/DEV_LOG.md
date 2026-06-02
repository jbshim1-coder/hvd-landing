# DEV_LOG — hvd-landing

---

### [2026-06-02 22:50] CCG 점검 + UI 전면 개선

**상태:** 완료

시각 품질과 코드 안정성을 대폭 개선했습니다.

- 카드 테두리를 매우 진한 warm dark(#7c776f)로 변경해 어떤 배경에서도 명확히 보이게 했습니다
- 밝은 섹션(WhyNow, Admissions, FAQ)에 크림 계열 배경(#e4dfd3)을 적용해 섹션 구분을 명확히 했습니다
- 6개 카드 상단에 Unsplash 무료 이미지를 각 주제에 맞게 삽입했습니다 (책/대학/지구/노트/도서관/마이크)
- Unsplash 도메인을 next.config.ts remotePatterns에 추가했습니다
- Thanks 페이지 배경을 bg-white로 변경했습니다
- CCG(Codex+Gemini+Claude) 3모델 점검 결과: noValidate 제거, res.ok 검사 추가, 터치 타겟 44px 확보, role="alert" 접근성 추가, Link 컴포넌트 전환
- 파비콘(32px)/애플 터치 아이콘(180px), OG 메타태그, keywords, canonical URL 추가
- 파트너 로고(ASDA KOREA · YBM EDU)를 Footer와 HarvardDiff 섹션에서 크게 표시

**다음 작업:**
- Apps Script 웹앱 URL 발급 후 `NEXT_PUBLIC_FORM_ENDPOINT` 환경변수 연결
- GA4 / Meta Pixel ID 연결
- 개인정보처리방침 내용 수령 후 `/privacy` 페이지 구현

---

### [2026-06-02 17:50] 프로젝트 초기 구현 완료

**상태:** 완료

하버드 디베이트 워크샵 랜딩페이지를 처음 만들었습니다.

- Next.js 16 + Tailwind CSS 4로 프로젝트를 세팅했습니다
- 핸드오프 패키지(CLAUDE.md, docs/, assets/)를 전부 검토하고 구현 계획서(IMPLEMENTATION_PLAN.md)를 먼저 작성했습니다
- 랜딩 페이지(/) 11개 섹션, 신청 완료 페이지(/thanks)를 구현했습니다
- 사전 상담 신청 폼(LeadForm)을 구현했습니다 — Apps Script URL이 없으면 데모 모드(콘솔 로그)로 동작합니다
- 모바일 하단 고정 CTA, iOS 인앱 브라우저 대응(100dvh/safe-area)을 적용했습니다
- 가격($4,500 등) 노출 0건, 금지어 0건 확인 완료
- `npm run build` + `typecheck` 경고 0건으로 통과

**다음 작업:**
- Apps Script 웹앱 URL 발급 후 `NEXT_PUBLIC_FORM_ENDPOINT` 환경변수 연결
- GA4 / Meta Pixel ID 연결
- 개인정보처리방침 내용 수령 후 `/privacy` 페이지 구현
