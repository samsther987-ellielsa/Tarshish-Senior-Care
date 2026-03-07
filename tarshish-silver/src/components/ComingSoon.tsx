import Link from "next/link";

interface ComingSoonProps {
  category: string;
  title: string;
  breadcrumb?: { name: string; href: string }[];
}

export default function ComingSoon({ category, title, breadcrumb }: ComingSoonProps) {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Page Header */}
      <div className="bg-emerald-950 pt-32 pb-14 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-emerald-400/70 mb-5">
            <Link href="/" className="hover:text-emerald-300 transition-colors">
              홈
            </Link>
            <span>/</span>
            {breadcrumb?.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <Link href={crumb.href} className="hover:text-emerald-300 transition-colors">
                  {crumb.name}
                </Link>
                <span>/</span>
              </span>
            ))}
            <span className="text-emerald-300">{title}</span>
          </nav>

          <p className="text-emerald-400 text-[11px] font-bold tracking-[0.3em] uppercase mb-3">
            {category}
          </p>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            {title}
          </h1>
        </div>
      </div>

      {/* Coming Soon Content */}
      <div className="flex-1 flex items-center justify-center py-28 px-6">
        <div className="text-center space-y-8 max-w-md mx-auto">
          {/* Icon */}
          <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-11 h-11 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>

          {/* Message */}
          <div className="space-y-3">
            <h2 className="text-2xl font-black text-gray-900">준비중입니다</h2>
            <p className="text-gray-500 font-light leading-relaxed">
              더 나은 서비스 제공을 위해 열심히 준비하고 있습니다.
              <br />
              빠른 시일 내에 새로운 내용으로 찾아뵙겠습니다.
            </p>
          </div>

          {/* Divider */}
          <div className="w-12 h-0.5 bg-emerald-200 mx-auto" />

          {/* Contact suggestion */}
          <p className="text-sm text-gray-400 font-light">
            급하신 문의사항은 전화로 연락주세요.
            <br />
            <a
              href="tel:15445202"
              className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
            >
              1544-5202
            </a>
          </p>

          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-600/20"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
}
