import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#1e3020", color: "white" }}>
      {/* Decorative leaf top-right */}
      <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.06] pointer-events-none" style={{ color: "#6b8f71" }}>
        <svg viewBox="0 0 120 180" fill="currentColor">
          <path d="M60 5 C85 20,115 55,110 100 C105 140,75 170,60 175 C45 170,15 140,10 100 C5 55,35 20,60 5Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
        {/* Brand */}
        <div className="space-y-6 md:space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#4a6b50" }}>
              <span className="text-white font-bold font-serif-kr">D</span>
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight font-serif-kr">다시스 실버케어</span>
          </div>
          <p className="text-sm leading-relaxed font-light" style={{ color: "rgba(255,255,255,0.5)" }}>
            어르신들의 건강하고 평온한 삶을 위해<br />
            항상 진심을 다하는 정성 어린 케어 서비스를 제공합니다.<br />
            가족의 마음으로 정직하게 모시겠습니다.
          </p>
        </div>

        {/* Quick Menu */}
        <div className="space-y-5 md:space-y-8">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#9ab5a0" }}>
            Quick Menu
          </h4>
          <nav className="flex flex-col gap-3 md:gap-4 text-sm font-light" style={{ color: "rgba(255,255,255,0.5)" }}>
            {[
              { label: "요양원 소개",  href: "/about/greeting" },
              { label: "서비스 안내",  href: "/services"       },
              { label: "비용 안내",    href: "/costs/info"     },
              { label: "상담 신청",    href: "/costs/consult"  },
              { label: "공지사항",     href: "/news/notices"   },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-white transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="space-y-5 md:space-y-8">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#9ab5a0" }}>
            Contact Us
          </h4>
          <div className="flex flex-col gap-3 md:gap-4 text-sm font-light" style={{ color: "rgba(255,255,255,0.5)" }}>
            <p>📍 서울특별시 강남구 테헤란로 (역삼동)</p>
            <p>📞 1544-5202</p>
            <p>📧 info@dasys.com</p>
            <p>⏰ 평일 09:00 - 18:00 (주말 예약 상담)</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-12 py-6 md:py-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-center md:text-left"
        style={{ borderColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.28)" }}
      >
        <p>© 2026 DASYS Silver Care Center. All rights reserved.</p>
        <div className="flex gap-6 md:gap-10">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
