# hvd-landing — 프로젝트 대시보드

## 프로젝트 이름
2026 Harvard Debate Council Summer Workshop in Korea — 랜딩페이지

## 배포 URL
- Vercel: (배포 후 기록)

## GitHub 저장소
- https://github.com/jbshim1-coder/hvd-landing

## 클라이언트
- 클라이언트: YBM 유학사업부 / 국내 운영: ASDA KOREA & YBM

## 연동된 외부 서비스
| 서비스 | 용도 | URL / 비고 |
|---|---|---|
| Google Apps Script | 폼 제출 → 구글시트 저장 + 메일 알림 | NEXT_PUBLIC_FORM_ENDPOINT 환경변수로 연결 |
| Google Sheets | DB 수집 (탭명: DB수집) | Apps Script 연결 후 자동 생성 |
| 구글폼 (사전 설명회) | 설명회 신청 외부 링크 | https://forms.gle/oxCrL1n9SMxyzoh7A |
| KakaoTalk 채널 | 문의 채널 | http://pf.kakao.com/_IhxgKX/chat |
| cdn.imweb.me | 로고·디렉터사진·키비주얼 CDN | ASSETS_LINKS.md 참조 |

## 환경변수 이름 (값은 기록 금지)
- `NEXT_PUBLIC_FORM_ENDPOINT` — Apps Script 웹앱 URL (미설정 시 데모 모드)
- `NEXT_PUBLIC_GA4_ID` — GA4 Measurement ID
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel ID

## 기술 스택
- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4
- 배포: Vercel
- 폼 백엔드: Google Apps Script (별도 서버 없음)

## 현재 상태
진행중

## 페이지
| 페이지 | slug | 상태 |
|---|---|---|
| 랜딩 (단일 LP) | / | 완료 |
| 신청 완료 | /thanks | 완료 |
| 개인정보처리방침 | /privacy | 내용 수령 후 구현 예정 |

## 미완료 항목
- Apps Script 웹앱 URL 연결 (NEXT_PUBLIC_FORM_ENDPOINT)
- GA4 / Meta Pixel ID 연결
- 개인정보처리방침 페이지 (내용 수령 후)
- BrowserStack 실기기 크로스브라우징 검증

## 마지막 업데이트
2026-06-02
