import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

function LeafBadge() {
  return (
    <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 16" fill="currentColor">
      <path d="M6 0.5C9 2.5,12 6,11.5 10.5C11 14,8 15.5,6 15.5C4 15.5,1 14,0.5 10.5C0 6,3 2.5,6 0.5Z" />
    </svg>
  );
}

function MedicalIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.3" />
      <path d="M24 13v22M13 24h22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="6" fill="currentColor" opacity="0.12" />
    </svg>
  );
}
function CognitionIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M24 9C17 9 11 14.5 11 20.5c0 4 2 7.5 5.5 9.5L15 38h18l-1.5-8c3.5-2 5.5-5.5 5.5-9.5C37 14.5 31 9 24 9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M19 38h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="21" r="2.5" fill="currentColor" opacity="0.35" />
      <path d="M17 17c1.5-2.5 4.5-4 7-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}
function RehabIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="13" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17 23l-4 13M31 23l4 13M17 23l7 6 7-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 29l3 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
function NutritionIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M17 10C17 10 9 18.5 9 26c0 8.3 6.7 13.5 15 13.5S39 34.3 39 26c0-7.5-7-16-7-16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M32 10c-2 4.5-5.5 9-8 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
      <path d="M19 30c1.5 2 3.5 3 5.5 3s4-1 5.5-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const cards = [
  { num: "01", title: "전문 의료 서비스",   desc: "전문 의료진의 24시간 실시간 케어 시스템",   Icon: MedicalIcon,   accent: "#4a6b50", bg: "#eeeae0" },
  { num: "02", title: "치매 예방 프로그램", desc: "인지 기능 향상을 위한 맞춤형 인지 훈련",     Icon: CognitionIcon, accent: "#5a7a52", bg: "#e8e3d8" },
  { num: "03", title: "맞춤 재활 운동",     desc: "개인별 상태에 따른 기능 회복 운동 서비스",   Icon: RehabIcon,     accent: "#a06040", bg: "#ede5d8" },
  { num: "04", title: "건강 영양 식단",     desc: "신선한 식재료 및 최적의 영양 밸런스 제공",   Icon: NutritionIcon, accent: "#3d5a42", bg: "#e5e0d3" },
];

const philosophy = [
  "24시간 전문 간호 및 위생 관리 시스템",
  "물리치료사의 체계적인 기능 회복 맞춤 훈련",
  "제철 유기농 식재료를 이용한 맞춤형 균형 식단",
  "다양한 여가 및 문화 활동을 통한 정서적 안정",
];

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#faf7f2" }}>
      <Hero />

      {/* ── Feature Cards ── */}
      <section id="about" className="py-20 md:py-32 scroll-mt-20 relative overflow-hidden" style={{ background: "#faf7f2" }}>
        <div className="absolute -top-28 -right-28 w-80 h-80 rounded-full opacity-[0.07] pointer-events-none" style={{ background: "radial-gradient(circle, #6b8f71, transparent 70%)" }} />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-[0.06] pointer-events-none" style={{ background: "radial-gradient(circle, #b87355, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14 md:mb-20 space-y-3">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.32em] uppercase" style={{ color: "#6b8f71" }}>
              <LeafBadge />
              Core Services
            </span>
            <h2 className="font-serif-kr text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: "#2a2620" }}>
              다시스의 전문 케어 서비스
            </h2>
            <p className="text-sm md:text-base font-light max-w-sm mx-auto leading-relaxed" style={{ color: "#5a4a3a", opacity: 0.7 }}>
              자연의 원리를 담은 전인적 케어
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {cards.map((c, i) => (
              <div
                key={i}
                className="group flex flex-col p-7 md:p-9 rounded-3xl border transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-default animate-card-rise"
                style={{
                  background: c.bg,
                  borderColor: "rgba(107,143,113,0.14)",
                  boxShadow: "0 2px 18px rgba(42,38,32,0.06)",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] mb-6" style={{ color: c.accent, opacity: 0.65 }}>
                  Service {c.num}
                </p>
                <div className="mb-6 transition-transform duration-300 group-hover:scale-110 origin-left" style={{ color: c.accent }}>
                  <c.Icon />
                </div>
                <h3 className="font-serif-kr text-lg font-bold mb-2.5 leading-snug" style={{ color: "#2a2620" }}>
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed font-light flex-1" style={{ color: "#5a4a3a", opacity: 0.75 }}>
                  {c.desc}
                </p>
                <div
                  className="mt-6 pt-4 border-t flex items-center gap-1.5 text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderColor: "rgba(107,143,113,0.18)", color: c.accent }}
                >
                  자세히 보기 <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section
        id="services"
        className="py-20 md:py-32 scroll-mt-20 grain relative overflow-hidden"
        style={{ background: "#e8ddd0" }}
      >
        <div className="absolute top-0 right-0 w-56 h-56 opacity-[0.06] pointer-events-none" style={{ color: "#2d4a32" }}>
          <svg viewBox="0 0 200 200" fill="currentColor">
            <path d="M200 0C200 0 200 120 100 160C40 185 0 200 0 200C0 200 60 120 80 80C110 20 200 0 200 0Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image */}
            <div className="relative w-full aspect-[4/3] lg:aspect-[4/5]">
              <div
                className="absolute -top-5 -left-5 w-full h-full rounded-[40%_60%_70%_30%/45%_55%_65%_50%] opacity-20 pointer-events-none"
                style={{ background: "#6b8f71" }}
              />
              <div
                className="relative w-full h-full overflow-hidden shadow-2xl"
                style={{ borderRadius: "2rem 3rem 2rem 3rem", boxShadow: "0 24px 64px rgba(45,74,50,0.18)" }}
              >
                <Image
                  src="/interior.png"
                  alt="다시스 실버케어센터 내부 라운지"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 px-5 py-3 rounded-2xl shadow-xl"
                style={{ background: "#2d4a32", color: "white" }}
              >
                <div className="font-serif-kr text-xl md:text-2xl font-bold">15년+</div>
                <div className="text-[10px] font-bold uppercase tracking-wider mt-0.5" style={{ opacity: 0.55 }}>전문 케어 경험</div>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-4 md:space-y-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.32em]" style={{ color: "#6b8f71" }}>
                  <LeafBadge />
                  Our Philosophy
                </span>
                <h2 className="font-serif-kr text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight" style={{ color: "#2a2620" }}>
                  자연의 온기로<br />
                  <span style={{ color: "#3d5a42" }}>품격 있는 쉼</span>을<br />
                  드립니다
                </h2>
                <p className="text-base md:text-lg leading-relaxed font-light" style={{ color: "#5a4a3a", opacity: 0.85 }}>
                  다시스 실버케어센터는 어르신 한 분 한 분의 삶을 소중히 여깁니다.
                  단순한 보호를 넘어, 자연을 닮은 따뜻한 환경에서 삶의 질을 높이는
                  품격 있는 서비스를 제공합니다.
                </p>
              </div>

              <ul className="space-y-4 md:space-y-5 pt-6 border-t" style={{ borderColor: "rgba(107,143,113,0.25)" }}>
                {philosophy.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 md:gap-4 text-sm md:text-base font-medium" style={{ color: "#2a2620" }}>
                    <div
                      className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "rgba(107,143,113,0.18)" }}
                    >
                      <svg className="w-3 h-3 md:w-3.5 md:h-3.5" style={{ color: "#3d5a42" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-200 hover:gap-3"
                style={{ color: "#3d5a42" }}
              >
                서비스 전체 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="consult"
        className="relative py-24 md:py-40 px-6 text-center scroll-mt-20 overflow-hidden grain"
        style={{ background: "#2d4a32" }}
      >
        <div className="absolute top-8 left-8 opacity-10 animate-float pointer-events-none" style={{ color: "#6b8f71" }}>
          <svg viewBox="0 0 120 180" fill="currentColor" className="w-24 h-36 md:w-36 md:h-52">
            <path d="M60 5 C85 20,115 55,110 100 C105 140,75 170,60 175 C45 170,15 140,10 100 C5 55,35 20,60 5Z" />
          </svg>
        </div>
        <div className="absolute bottom-8 right-8 opacity-[0.08] animate-leaf-sway rotate-180 pointer-events-none" style={{ color: "#6b8f71" }}>
          <svg viewBox="0 0 120 180" fill="currentColor" className="w-20 h-28 md:w-28 md:h-40">
            <path d="M60 5 C85 20,115 55,110 100 C105 140,75 170,60 175 C45 170,15 140,10 100 C5 55,35 20,60 5Z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8 md:space-y-12">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.32em]" style={{ color: "#9ab5a0" }}>
            <LeafBadge />
            입소 상담
          </span>

          <h2 className="font-serif-kr text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight text-white">
            사랑하는 가족의<br />
            행복한 내일을 위해<br />
            <span style={{ color: "#9ab5a0" }}>지금 상담을 시작해보세요.</span>
          </h2>

          <p className="text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            망설이지 마세요. 전문 상담사가 어르신의 상태에 맞는
            최적의 입소 플랜과 혜택을 안내해 드립니다.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 md:gap-5 pt-2">
            <Link
              href="#"
              className="px-10 py-5 md:px-12 md:py-6 font-bold text-base md:text-lg rounded-2xl text-center text-white transition-all duration-300 hover:-translate-y-1"
              style={{ background: "#b87355", boxShadow: "0 12px 32px rgba(184,115,85,0.38)" }}
            >
              입소 상담 예약하기
            </Link>
            <Link
              href="#"
              className="px-10 py-5 md:px-12 md:py-6 font-bold text-base md:text-lg rounded-2xl text-center text-white border transition-all duration-300 hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.18)" }}
            >
              시설 안내 자료 받기
            </Link>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-sm font-bold" style={{ color: "rgba(255,255,255,0.35)" }}>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
            </svg>
            <a href="tel:15445202" className="hover:text-white transition-colors">1544-5202</a>
            <span style={{ opacity: 0.35 }}>·</span>
            <span>평일 09:00 – 18:00</span>
          </div>
        </div>
      </section>
    </main>
  );
}
