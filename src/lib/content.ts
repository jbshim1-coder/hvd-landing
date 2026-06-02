// 02_CONTENT_MATRIX.csv 원고 기반 — 임의 생성 금지

export const LINKS = {
  applyForm: "#apply",
  seminarForm: "https://forms.gle/oxCrL1n9SMxyzoh7A",
} as const;

export const ASSETS = {
  logo: "https://cdn.imweb.me/thumbnail/20260526/51e7d6dbc72d0.png",
  partnerLogos:
    "https://cdn.imweb.me/upload/S20260406852756e15d93d/6fc5460e8e77b.png",
  director:
    "https://cdn.imweb.me/upload/S20260405b7f7ad706a136/f83ff9bf02c09.png",
  heroWide:
    "https://cdn.imweb.me/upload/S20260406852756e15d93d/6d29c3c27b8ca.png",
  hallPhoto: "/images/03_설명회현장.jpg",
  keyVisual: "/images/04_메인포스터_키비주얼.png",
} as const;

export const HERO = {
  headline: "미국에 가지 않고, 서울에서 경험하는 2026 Harvard Debate Council Workshop",
  body: "영어를 배우는 것이 아니라, 영어로 생각하는 법을 배웁니다. 하버드 디베이트 카운슬이 직접 운영하는 정통 영어 디베이트 프로그램을 강남에서 만나보세요.",
  ctaPrimary: "사전 1:1 상담신청하기",
  ctaSecondary: "프로그램 알아보기",
} as const;

export const FACT_CHIPS = [
  { icon: "📅", text: "2026.7.27–8.8 (2주 집중)" },
  { icon: "🎓", text: "Grade 4–12 (초4~고3)" },
  { icon: "📍", text: "YBM Biz Center 강남" },
  { icon: "🏆", text: "TOC Korea 토너먼트 포함" },
] as const;

export const WHY_NOW = {
  headline: "왜 지금, 디베이트일까요?",
  body: "국제학교가 AP 중심에서 IB 중심으로 전환하면서, 학교 수업도 발표·토론·리서치·에세이 중심으로 바뀌고 있습니다. 이제 영어 점수보다 '영어로 생각하고 분석하고 설득하는 능력'이 더 중요한 시대입니다.",
  cards: [
    {
      num: "01",
      title: "SAT·TOEFL보다 먼저",
      body: "읽기·쓰기·에세이의 기반은 논리적 사고력입니다. 디베이트는 영어 점수보다 사고력을 먼저 훈련하는 과정입니다.",
    },
    {
      num: "02",
      title: "입시 차별화 활동",
      body: "운동·음악은 단순 참여로 변별력이 약합니다. Debate는 Academic Activity·Leadership·Research·Public Speaking이 결합된 활동입니다.",
    },
    {
      num: "03",
      title: "글로벌 이슈를 영어로",
      body: "AI·국제정치·환경·경제 등 실제 세계의 이슈를 영어로 분석하고 토론하며 배경지식까지 함께 쌓습니다.",
    },
  ],
} as const;

export const PILLARS = {
  eyebrow: "core skills",
  headline: "디베이트가 길러주는 세 가지 힘",
  body: "Debate is not arguing — 읽기·쓰기·리서치·말하기를 하나로 통합한 역량입니다.",
  cards: [
    {
      label: "Structured Thinking",
      title: "구조적 사고력",
      body: "생각을 논리적으로 조직하고, 명확한 주장을 세우며, 문제를 구조적으로 접근하는 훈련을 합니다.",
    },
    {
      label: "Evidence-Based Reasoning",
      title: "근거 기반 사고력",
      body: "모든 주장을 리서치와 근거로 뒷받침합니다. 정보를 분석하고 출처를 평가하는 능력을 기릅니다.",
    },
    {
      label: "Persuasive Communication",
      title: "설득력 있는 커뮤니케이션",
      body: "명확하게 표현하고, 자신감 있게 말하며, 정교하게 설득하는 실전 스피킹을 연습합니다.",
    },
  ],
} as const;

export const HARVARD_DIFF = {
  eyebrow: "harvard difference",
  headline: "하버드 정통 프로그램, 그대로 한국에서",
  cta: "사전 1:1 상담신청하기",
  items: [
    "Harvard Debate Council이 직접 기획·운영하는 공식 프로그램",
    "디렉터 Dr. Tripp Rebrovick 및 하버드 코치진 직접 참여",
    "수료생 전원 하버드 공식 수료증 발급 (보스턴 캠퍼스와 동일 형식)",
    "워크샵 기간 중 TOC Korea 공식 토너먼트 참가, 성적 충족 시 TOC Bid 획득",
    "미국·해외 대학 지원 시 활용 가능한 Leadership & Activity 경험",
    "미국행 항공·숙박비 없이 국내에서 동일 커리큘럼 경험",
  ],
} as const;

export const PARTNERS = {
  eyebrow: "partners",
  headline: "이 프로그램을 함께 만드는 기관",
  items: [
    {
      abbrev: "HDC",
      name: "Harvard Debate Council",
      role: "주최·기획",
      description:
        "1892년 설립된 하버드 칼리지의 디베이트 단체로 미국 정상급 디베이트 교육·대회를 이끌어 왔습니다. 본 워크샵의 커리큘럼과 운영 기준을 직접 설계하며 디렉터 Dr. Tripp Rebrovick과 코치진이 참여합니다.",
      notice: "The Harvard Debate Council is a student organization at Harvard College.",
    },
    {
      abbrev: "ASDA",
      name: "ASDA KOREA",
      role: "국내 운영",
      description:
        "국내에서 유일하게 Harvard Debate Council과 직접 소통하는 공식 협회로, 프로그램의 국내 도입과 현장 운영·반 편성·상담을 담당합니다.",
      notice: undefined,
    },
    {
      abbrev: "YBM",
      name: "YBM",
      role: "행정·운영 지원",
      description:
        "1961년 창립 이래 60여 년간 한국의 영어교육을 이끌어 온 국내 대표 영어교육 기업입니다. 국내 TOEIC 시행 기관이자 어학 교육·교재 출판·공인 영어평가 전 분야에 걸친 전문성과 신뢰를 바탕으로, 본 워크샵의 국내 행정과 운영을 안정적으로 뒷받침하고 강남 중심의 전용 교육 공간인 YBM Biz Center 강남교육연수센터를 제공합니다.",
      notice: undefined,
    },
    {
      abbrev: "NSDA",
      name: "NSDA",
      role: "후원",
      description:
        "National Speech & Debate Association. 미국 최대 규모의 스피치·디베이트 협회입니다.",
      notice: undefined,
    },
    {
      abbrev: "TOC",
      name: "Tournament of Champions",
      role: "토너먼트 연계",
      description:
        "미국 디베이트 챔피언십으로, 본 워크샵 참가자에게 TOC Korea 토너먼트 참가 및 시드권(Bid) 기회가 연계됩니다.",
      notice: undefined,
    },
  ],
} as const;

export const ADMISSIONS = {
  eyebrow: "college admissions",
  headline: "입시에서 어떻게 활용되나",
  body: "운동·음악은 단순 참여로 변별력이 약합니다. Debate는 Academic Activity + Leadership + Research + Public Speaking이 결합된 활동으로 미국·해외 대학 지원 포트폴리오 활용도가 높습니다. TOC·NSDA 입상은 상위권 대학·아이비리그 입학관이 주목하는 성취로 평가됩니다.",
} as const;

export const PROGRAM_SPEC = {
  eyebrow: "program overview",
  headline: "프로그램 개요",
  items: [
    { label: "기간", value: "2026.7.27–8.8 (2주 집중)" },
    { label: "대상", value: "Grade 4–12 (초4~고3)" },
    { label: "시간", value: "평일 09:00–17:00" },
    { label: "장소", value: "YBM Biz Center 강남교육연수센터" },
    { label: "식사", value: "참가 학생 중식 제공" },
    { label: "토요일", value: "TOC Korea Tournament" },
  ],
} as const;

export const DIRECTOR = {
  eyebrow: "director",
  headline: "하버드 디렉터가 직접",
  name: "Dr. Tripp Rebrovick",
  bio: "Harvard Debate Council 디렉터(2017~), 2005 Tournament of Champions 전국 챔피언 & Top Speaker, Harvard National Speech & Debate Tournament(연 5,000명+) 디렉터, 20년+ 코칭. A.B. Harvard College / Ph.D. Johns Hopkins University.",
} as const;

export const SOCIAL_PROOF = {
  eyebrow: "testimonials",
  headline: "수료생·학부모의 이야기",
  items: [
    {
      quote:
        "best and favorite camp experience ever … I grew so much as a debater.",
      source: "Public Forum Student",
    },
    {
      quote:
        "정말 잘 조직된 프로그램이었고, 강사진이 훌륭했습니다.",
      source: "학부모",
    },
  ],
} as const;

export const FAQ_ITEMS = [
  {
    q: "대상 학년은 어떻게 되나요?",
    a: "초4~고3(Grade 4–12)이 대상입니다.",
  },
  {
    q: "영어가 부족해도 참가할 수 있나요?",
    a: "나이·학년·영어·경험을 종합해 수준별 반을 편성합니다. 레벨테스트는 필수가 아닙니다.",
  },
  {
    q: "참가비는 얼마인가요?",
    a: "상담 시 정확히 안내드립니다. 신청해 주시면 담당 매니저가 연락드립니다.",
  },
  {
    q: "수료 혜택은 무엇인가요?",
    a: "하버드 공식 수료증 발급, TOC Korea 토너먼트 참가·Bid 획득 기회가 제공됩니다.",
  },
] as const;

export const LEAD_FORM = {
  eyebrow: "apply now",
  headline: "사전 1:1 상담신청",
  subtext:
    "정원 선착순 마감. 신청해 주시면 담당 매니저가 빠르게 연락드려 일정·반 편성·참가 안내를 도와드립니다.",
  notice:
    "※ 참가비 및 상세 안내는 신청 후 개별 상담을 통해 안내드립니다.",
  cta: "상담 신청 제출하기",
} as const;

export const FOOTER = {
  title: "Harvard Debate Council Summer Workshop in Korea",
  org: "주최: Harvard Debate Council · 국내 운영: ASDA KOREA & YBM",
  venue: "YBM Biz Center 강남교육연수센터 · 기간: 2026.7.27–8.8",
  disclaimer:
    "The Harvard Debate Council is a student organization at Harvard College.",
} as const;
