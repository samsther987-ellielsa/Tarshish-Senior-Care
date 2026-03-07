import Link from "next/link";

export default function Footer() {
  return (
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
            <Link href="/about/greeting" className="hover:text-emerald-400 transition-colors">
              요양원 소개
            </Link>
            <Link href="/services" className="hover:text-emerald-400 transition-colors">
              서비스 안내
            </Link>
            <Link href="/costs/info" className="hover:text-emerald-400 transition-colors">
              비용 안내
            </Link>
            <Link href="/costs/consult" className="hover:text-emerald-400 transition-colors">
              상담 신청
            </Link>
            <Link href="/news/notices" className="hover:text-emerald-400 transition-colors">
              공지사항
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
            <p>📞 1544-5202</p>
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
  );
}
