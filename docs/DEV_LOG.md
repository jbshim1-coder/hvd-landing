# DEV_LOG — hvd-landing

---

### [2026-06-02 오늘] 프로젝트 초기 구현 완료

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
