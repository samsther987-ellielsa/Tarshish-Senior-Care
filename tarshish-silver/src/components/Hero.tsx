import Image from "next/image";
import Link from "next/link";

function LeafDecor({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M60 5 C85 20, 115 55, 110 100 C105 140, 75 170, 60 175 C45 170, 15 140, 10 100 C5 55, 35 20, 60 5Z"
        fill="currentColor"
      />
      <path d="M60 5 L60 175" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="5 4" />
      <path d="M60 60 C75 52, 95 56, 105 68"  stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <path d="M60 90 C42 82, 25 86, 16 98"   stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <path d="M60 120 C76 112, 96 116, 106 128" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-banner.png"
          alt="다시스 실버케어센터의 편안하고 따뜻한 정경"
          fill
          priority
          className="object-cover object-center animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a24]/80 via-[#2d4a32]/60 to-[#b87355]/25 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1e]/70 via-transparent to-transparent z-10" />
      </div>

      {/* Decorative leaves */}
      <div className="absolute top-20 right-6 md:right-14 z-20 opacity-15 animate-float pointer-events-none">
        <LeafDecor className="w-28 h-40 md:w-44 md:h-64 text-[#6b8f71]" />
      </div>
      <div className="absolute bottom-28 left-4 z-20 opacity-10 animate-leaf-sway pointer-events-none">
        <LeafDecor className="w-14 h-20 md:w-20 md:h-28 text-[#9ab5a0] rotate-45" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-3xl space-y-7 md:space-y-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md animate-fade-in">
            <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#9ab5a0' }}>
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2 4 4 8 4 5 9-3 5-6 8-8 8-2 0-3-2-3-4 2-1 5-4 7-8z" />
            </svg>
            <span className="text-[10px] md:text-[11px] font-bold text-white/85 uppercase tracking-[0.22em] leading-none">
              Premium Silver Care Center
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif-kr animate-fade-in-up delay-100">
            <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.18] tracking-tight">
              어르신의 일상을
            </span>
            <span
              className="block text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.18] tracking-tight mt-1"
              style={{ color: '#9ab5a0' }}
            >
              자연처럼
            </span>
            <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.18] tracking-tight mt-1">
              소중히 돌봅니다.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg leading-relaxed font-light max-w-lg animate-fade-in-up delay-300" style={{ color: 'rgba(255,255,255,0.65)' }}>
            전문 의료진과 자연을 닮은 따뜻한 환경에서 어르신의 몸과 마음이
            진정한 쉼과 활력을 찾을 수 있도록 함께합니다.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 pt-2 animate-fade-in-up delay-500">
            <Link
              href="#consult"
              className="px-8 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-base md:text-lg text-center text-white transition-all duration-300 hover:-translate-y-1"
              style={{ background: '#6b8f71', boxShadow: '0 10px 28px rgba(45,74,50,0.45)' }}
            >
              입소 상담하기
            </Link>
            <Link
              href="#about"
              className="px-8 py-4 md:px-10 md:py-5 bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md rounded-2xl font-bold text-base md:text-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              시설 둘러보기 →
            </Link>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap items-center gap-8 md:gap-14 pt-8 md:pt-12 border-t animate-fade-in-up delay-700"
            style={{ borderColor: 'rgba(255,255,255,0.12)' }}
          >
            {[
              { num: "24h", label: "의료진 상주",   glyph: "♡" },
              { num: "1:1", label: "맞춤 프로그램", glyph: "✦" },
              { num: "VIP", label: "프리미엄 식단", glyph: "◎" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="text-lg opacity-40" style={{ color: '#9ab5a0' }}>{s.glyph}</span>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-white font-serif-kr tracking-tight">{s.num}</div>
                  <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-30 pointer-events-none">
        <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 bg-white rounded-full animate-scroll-hint" />
        </div>
        <span className="text-[9px] text-white font-bold uppercase tracking-widest">scroll</span>
      </div>
    </section>
  );
}
