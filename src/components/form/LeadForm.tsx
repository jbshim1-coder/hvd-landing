"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import SectionIntro from "@/components/ui/SectionIntro";
import { LEAD_FORM } from "@/lib/content";

type FormStatus = "idle" | "submitting" | "error";

const GRADES = ["G4", "G5", "G6", "G7", "G8", "G9", "G10", "G11", "G12"];

function getUtmSource(): string {
  if (typeof window === "undefined") return "";
  const p = new URLSearchParams(window.location.search);
  const parts = [p.get("utm_source"), p.get("utm_medium"), p.get("utm_campaign")]
    .filter(Boolean)
    .join(" / ");
  return parts || "direct";
}

export default function LeadForm() {
  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const utmRef = useRef("");

  useEffect(() => {
    utmRef.current = getUtmSource();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("유입경로", utmRef.current);
    data.set(
      "제출시각",
      new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })
    );

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    if (!endpoint) {
      // 데모 모드 — Apps Script URL 미설정 시
      console.log("[LeadForm Demo] 제출 데이터:", Object.fromEntries(data));
      router.push("/thanks");
      return;
    }

    try {
      const res = await fetch(endpoint, { method: "POST", body: data });
      if (!res.ok) throw new Error(`서버 오류 (${res.status})`);
      const json = await res.json();
      if (json.result === "success") {
        router.push("/thanks");
      } else {
        throw new Error(json.message || "제출 실패");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "오류가 발생했습니다. 다시 시도해 주세요."
      );
    }
  }

  const inputCls =
    "w-full px-3 py-3 rounded border border-line bg-white text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-crimson/30 focus:border-crimson transition-colors";
  const labelCls = "block text-xs font-semibold text-ink mb-1";
  const requiredMark = <span className="text-crimson ml-0.5">*</span>;

  return (
    <section id="apply" className="bg-crimson py-16 sm:py-20 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionIntro
          eyebrow={LEAD_FORM.eyebrow}
          headline={LEAD_FORM.headline}
          body={LEAD_FORM.subtext}
          light
        />
        <p className="mt-2 text-xs text-white/60">{LEAD_FORM.notice}</p>

        <div className="mt-8 bg-white rounded-2xl border-2 border-gold/40 shadow-xl p-6 sm:p-8">
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          {/* 참가자 정보 */}
          <fieldset className="flex flex-col gap-4">
            <legend className="text-sm font-bold text-crimson mb-1">
              참가자 정보
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="참가자성명" className={labelCls}>
                  참가자 성명 (영문){requiredMark}
                </label>
                <input
                  id="참가자성명"
                  name="참가자성명"
                  type="text"
                  required
                  placeholder="Hong Gil Dong"
                  className={inputCls}
                />
              </div>

              <div>
                <label htmlFor="생년월일" className={labelCls}>
                  생년월일{requiredMark}
                </label>
                <input
                  id="생년월일"
                  name="생년월일"
                  type="date"
                  required
                  className={inputCls}
                />
              </div>

              <div>
                <label htmlFor="성별" className={labelCls}>
                  성별{requiredMark}
                </label>
                <select id="성별" name="성별" required className={inputCls}>
                  <option value="">선택</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>

              <div>
                <label htmlFor="국적" className={labelCls}>
                  국적{requiredMark}
                </label>
                <input
                  id="국적"
                  name="국적"
                  type="text"
                  required
                  placeholder="Korean"
                  className={inputCls}
                />
              </div>

              <div>
                <label htmlFor="현재학년" className={labelCls}>
                  현재 학년{requiredMark}
                </label>
                <select
                  id="현재학년"
                  name="현재학년"
                  required
                  className={inputCls}
                >
                  <option value="">선택</option>
                  {GRADES.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="학교명" className={labelCls}>
                  학교명{requiredMark}
                </label>
                <input
                  id="학교명"
                  name="학교명"
                  type="text"
                  required
                  placeholder="OO 초등학교 / OO International School"
                  className={inputCls}
                />
              </div>

              <div>
                <label htmlFor="참가자이메일" className={labelCls}>
                  참가자 이메일{requiredMark}
                </label>
                <input
                  id="참가자이메일"
                  name="참가자이메일"
                  type="email"
                  required
                  placeholder="student@example.com"
                  className={inputCls}
                />
              </div>

              <div>
                <label htmlFor="참가자전화" className={labelCls}>
                  참가자 전화 <span className="text-muted font-normal">(선택)</span>
                </label>
                <input
                  id="참가자전화"
                  name="참가자전화"
                  type="tel"
                  placeholder="010-0000-0000"
                  className={inputCls}
                />
              </div>
            </div>
          </fieldset>

          {/* 학부모 정보 */}
          <fieldset className="flex flex-col gap-4">
            <legend className="text-sm font-bold text-crimson mb-1">
              학부모 / 보호자 정보
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="학부모성함" className={labelCls}>
                  학부모 성함{requiredMark}
                </label>
                <input
                  id="학부모성함"
                  name="학부모성함"
                  type="text"
                  required
                  placeholder="홍길동"
                  className={inputCls}
                />
              </div>

              <div>
                <label htmlFor="학부모이메일" className={labelCls}>
                  학부모 이메일{requiredMark}
                </label>
                <input
                  id="학부모이메일"
                  name="학부모이메일"
                  type="email"
                  required
                  placeholder="parent@example.com"
                  className={inputCls}
                />
              </div>

              <div>
                <label htmlFor="학부모전화" className={labelCls}>
                  학부모 전화{requiredMark}
                </label>
                <input
                  id="학부모전화"
                  name="학부모전화"
                  type="tel"
                  required
                  placeholder="010-0000-0000"
                  className={inputCls}
                />
              </div>
            </div>
          </fieldset>

          {/* 배경 (선택) */}
          <fieldset className="flex flex-col gap-4">
            <legend className="text-sm font-bold text-muted mb-1">
              디베이트 / 학업 배경{" "}
              <span className="font-normal">(선택)</span>
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="디베이트경험" className={labelCls}>
                  디베이트 경험
                </label>
                <select
                  id="디베이트경험"
                  name="디베이트경험"
                  className={inputCls}
                >
                  <option value="">선택</option>
                  <option value="None">None — 경험 없음</option>
                  <option value="Beginner">Beginner — 초급</option>
                  <option value="Intermediate">Intermediate — 중급</option>
                  <option value="Advanced">Advanced — 상급</option>
                </select>
              </div>

              <div>
                <label htmlFor="영어능력" className={labelCls}>
                  영어 능력 수준
                </label>
                <input
                  id="영어능력"
                  name="영어능력"
                  type="text"
                  placeholder="예: 국제학교 재학, TOEFL 80 등"
                  className={inputCls}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="수상경력" className={labelCls}>
                  수상 경력
                </label>
                <input
                  id="수상경력"
                  name="수상경력"
                  type="text"
                  placeholder="예: TOC 지역 대회 참가, NSDA 입상 등"
                  className={inputCls}
                />
              </div>
            </div>
          </fieldset>

          {/* 개인정보 동의 (필수) */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-line">
            <input
              id="개인정보동의"
              name="개인정보동의"
              type="checkbox"
              required
              value="on"
              className="mt-0.5 w-4 h-4 accent-crimson flex-shrink-0"
            />
            <label htmlFor="개인정보동의" className="text-xs text-muted leading-relaxed cursor-pointer">
              <span className="text-crimson font-semibold">[필수]</span>{" "}
              개인정보 수집·이용에 동의합니다. 수집 항목: 성명, 연락처, 이메일,
              학교명, 학년. 수집 목적: 사전 상담 및 프로그램 안내. 보관 기간:
              상담 완료 후 6개월. 동의를 거부할 권리가 있으나 미동의 시 신청이
              제한됩니다.{requiredMark}
            </label>
          </div>

          {errorMsg && (
            <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-4 py-3">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-4 rounded bg-crimson text-white text-base font-bold hover:bg-crimson-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "신청 중…" : LEAD_FORM.cta}
          </button>
        </form>
        </div>
      </div>
    </section>
  );
}
