"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="다시스 실버케어센터의 편안하고 따뜻한 정경"
          fill
          priority
          className="object-cover object-center animate-subtle-zoom"
        />
        {/* Scrim & Gradient Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/60 via-transparent to-transparent z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
        <div className="max-w-3xl space-y-10 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold text-emerald-50 uppercase tracking-[0.2em] leading-none">
              Premium Silver Care Center
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] tracking-tight">
            다시스 실버케어센터; <br />
            <span className="text-emerald-300">당신의 소중한 가족을 위한</span> <br />
            따뜻한 안식처
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-emerald-50/80 leading-relaxed font-light max-w-xl">
            전문 의료 서비스와 운동 프로그램을 위한 건강한 생활, <br />
            어르신들의 몸과 마음이 쉼과 활력을 찾아드립니다.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-5 pt-4">
            <Link
              href="#consult"
              className="w-full sm:w-auto px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl shadow-emerald-900/30 transform hover:-translate-y-1 text-center"
            >
              입소 상담하기
            </Link>
            <Link
              href="#facilities"
              className="w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md rounded-2xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              시설 둘러보기
            </Link>
          </div>

          {/* Stat Icons */}
          <div className="flex items-center gap-10 pt-16 border-t border-white/10">
            {[
              { label: "24h", text: "의료진 상주" },
              { label: "1:1", text: "맞춤 프로그램" },
              { label: "VIP", text: "프리미엄 식단" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <span className="text-3xl font-bold text-white tracking-tighter">{stat.label}</span>
                <span className="text-[10px] text-white/40 font-bold uppercase tracking-[0.1em]">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-50">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 bg-white rounded-full animate-scroll-hint" />
        </div>
        <span className="text-[10px] text-white font-bold uppercase tracking-widest">scroll</span>
      </div>

      <style jsx>{`
        @keyframes scroll-hint {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-scroll-hint { animation: scroll-hint 1.5s infinite; }
        .animate-subtle-zoom { animation: subtle-zoom 20s linear infinite alternate; }
        .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      `}</style>
    </section>
  );
}
