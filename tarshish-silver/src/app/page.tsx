import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* ── Intro / Feature Cards ── */}
      <section id="about" className="py-20 md:py-32 bg-emerald-950 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14 md:mb-20 space-y-3">
            <span className="text-emerald-400 font-bold tracking-[0.3em] text-[11px] uppercase">
              Core Services
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              다시스의 전문 케어 서비스
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              {
                num: "01",
                title: "전문 의료 서비스",
                desc: "전문의료진의 24시간 실시간 케어 시스템",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                ),
              },
              {
                num: "02",
                title: "치매 예방 프로그램",
                desc: "인지 기능 향상을 위한 맞춤형 인지 훈련",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                ),
              },
              {
                num: "03",
                title: "맞춤 재활 운동",
                desc: "개인별 상태에 따른 기능 회복 운동 서비스",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                    <circle cx="12" cy="4" r="2" />
                    <path d="M15.89 8.11L13 11l2 5H9l2-5-2.89-2.89" />
                    <path d="M9 16l-1.5 5M15 16l1.5 5" />
                  </svg>
                ),
              },
              {
                num: "04",
                title: "건강 영양 식단",
                desc: "신선한 식재료 및 최적의 영양 밸런스 제공",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                ),
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 md:p-10 bg-emerald-900/40 border border-emerald-800/40 rounded-3xl hover:bg-emerald-800/50 hover:border-emerald-700/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <p className="text-emerald-500 font-bold text-[10px] uppercase tracking-[0.25em] mb-6">
                  Service {feature.num}
                </p>
                <div className="text-emerald-300 mb-6 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-emerald-300/60 leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy / Services ── */}
      <section
        id="services"
        className="py-20 md:py-32 bg-zinc-50 border-y border-zinc-100 overflow-hidden scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image */}
            <div className="relative w-full aspect-[4/3] lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="/interior.png"
                alt="다시스 실버케어센터 내부 라운지"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply" />
            </div>

            {/* Copy */}
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-4 md:space-y-6">
                <span className="text-emerald-600 font-bold tracking-[0.3em] text-xs uppercase">
                  Our Philosophy
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight">
                  품격 있는 공간에서
                  <br />
                  누리는 진정한 평온
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                  다시스 실버케어센터는 어르신 한 분 한 분의 삶을 소중히
                  여깁니다. 단순한 보호를 넘어, 삶의 질을 높이는 품격 있는
                  서비스를 제공합니다. 사랑하는 가족이 믿고 맡길 수 있는
                  최적의 환경을 약속드립니다.
                </p>
              </div>

              <ul className="space-y-4 md:space-y-6 pt-4 md:pt-6 border-t border-zinc-200">
                {[
                  "24시간 전문 간호 및 위생 관리 시스템",
                  "물리치료사의 체계적인 기능 회복 맞춤 훈련",
                  "제철 유기농 식재료를 이용한 맞춤형 균형 식단",
                  "다양한 여가 및 문화 활동을 통한 정서적 안정",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 md:gap-4 text-sm md:text-base text-gray-800 font-medium"
                  >
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 md:w-3.5 md:h-3.5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / Consultation ── */}
      <section
        id="consult"
        className="py-24 md:py-40 px-6 text-center scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
            <span className="block sm:inline">사랑하는 가족의 </span>
            <span className="block sm:inline">행복한 내일을 위해</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline text-emerald-600"> 지금 상담을 시작해보세요.</span>
          </h2>
          <p className="text-base md:text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            망설이지 마세요. 전문 상담사가 어르신의 상태에 맞는
            <br className="hidden md:block" />
            최적의 입소 플랜과 혜택을 안내해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 md:gap-6 pt-2">
            <Link
              href="#"
              className="px-10 py-5 md:px-12 md:py-6 bg-zinc-900 text-white font-bold text-base md:text-xl rounded-2xl hover:bg-black transition-all shadow-2xl shadow-black/20 hover:-translate-y-1 text-center"
            >
              입소 상담 예약하기
            </Link>
            <Link
              href="#"
              className="px-10 py-5 md:px-12 md:py-6 bg-white text-zinc-900 border border-zinc-200 font-bold text-base md:text-xl rounded-2xl hover:bg-zinc-50 transition-all shadow-xl shadow-black/5 hover:-translate-y-1 text-center"
            >
              시설 안내 자료 받기
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-zinc-950 text-white py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
          {/* Brand */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-white font-bold">D</span>
              </div>
              <span className="text-lg md:text-xl font-bold tracking-tight">
                다시스 실버케어
              </span>
            </div>
            <p className="text-gray-400 font-light text-sm leading-relaxed">
              어르신들의 건강하고 평온한 삶을 위해
              <br />
              항상 진심을 다하는 정성 어린 케어 서비스를 제공합니다.
              <br />
              가족의 마음으로 정직하게 모시겠습니다.
            </p>
          </div>

          {/* Quick Menu */}
          <div className="space-y-5 md:space-y-10">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-500">
              Quick Menu
            </h4>
            <nav className="flex flex-col gap-3 md:gap-5 text-gray-400 font-light text-sm">
              <Link href="#about" className="hover:text-emerald-400 transition-colors">
                요양원 소개
              </Link>
              <Link href="#services" className="hover:text-emerald-400 transition-colors">
                서비스 및 프로그램
              </Link>
              <Link href="#facilities" className="hover:text-emerald-400 transition-colors">
                시설 현황
              </Link>
              <Link href="#consult" className="hover:text-emerald-400 transition-colors">
                상담 및 신청
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-5 md:space-y-10">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-500">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4 md:gap-6 text-gray-400 font-light text-sm">
              <p>📍 서울특별시 강남구 테헤란로 (역삼동)</p>
              <p>📞 02-1234-5678</p>
              <p>📧 info@dasys.com</p>
              <p>⏰ 평일 09:00 - 18:00 (주말 예약 상담)</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 md:mt-20 pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-[10px] text-gray-500 font-bold uppercase tracking-widest text-center md:text-left">
          <p>© 2026 DASYS Silver Care Center. All rights reserved.</p>
          <div className="flex gap-6 md:gap-10">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
