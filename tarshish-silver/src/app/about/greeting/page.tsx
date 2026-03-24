import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "인사말 | 다시스 실버케어센터" };

export default function GreetingPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Page Header */}
      <div className="bg-emerald-950 pt-32 pb-14 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-emerald-400/70 mb-5">
            <Link href="/" className="hover:text-emerald-300 transition-colors">홈</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-emerald-300 transition-colors">요양원 소개</Link>
            <span>/</span>
            <span className="text-emerald-300">인사말</span>
          </nav>
          <p className="text-emerald-400 text-[11px] font-bold tracking-[0.3em] uppercase mb-3">
            About Us
          </p>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            인사말
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Hero Greeting — Text Left / Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">

            {/* Left: Text */}
            <div className="space-y-6">
              {/* Tagline */}
              <div className="border-l-4 border-emerald-600 pl-5">
                <p className="text-emerald-700 font-bold text-lg md:text-xl leading-snug">
                  &ldquo;평안의 항구 다시스에서,<br />
                  어르신의 새로운 일상이 시작됩니다&rdquo;
                </p>
              </div>

              <p className="text-gray-500 text-sm font-semibold tracking-[0.2em] uppercase">
                다시스 실버케어센터
              </p>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[15px] md:text-base">
                <p>
                  안녕하세요, 다시스 실버케어센터입니다.
                </p>
                <p>
                  우리가 지향하는 요양원 운영은 단순히 어르신을 모시는 시설을 넘어,
                  한 분 한 분의 소중한 <strong className="text-gray-900">&lsquo;삶의 질&rsquo;</strong>을 높이고
                  가족분들이 안심하고 맡길 수 있는 <strong className="text-gray-900">&lsquo;깊은 신뢰&rsquo;</strong>를
                  구축하는 데 그 본질이 있습니다.
                </p>
                <p>
                  성경 속 솔로몬의 배들이 평안과 풍요를 싣고 돌아왔던 전설적인 항구
                  <strong className="text-emerald-700"> &lsquo;다시스(Tarshish)&rsquo;</strong>처럼,
                  저희 센터는 어르신들이 고단했던 삶의 짐을 내려놓고
                  평온한 안식을 누리실 수 있는 쉼터가 되고자 합니다.
                </p>
              </div>

              {/* Closing */}
              <div className="pt-4 space-y-3 text-gray-700 text-[15px] md:text-base leading-relaxed">
                <p>
                  다시스 실버케어센터를 선택하신 결정이 어르신에게는
                  <strong className="text-gray-900"> 행복한 일상의 시작</strong>이 되고,
                  보호자님께는 <strong className="text-gray-900">평안한 마음의 휴식</strong>이 될 수 있도록
                  저희 모든 임직원이 정성과 사랑으로 함께하겠습니다.
                </p>
                <p>여러분의 가정에 평안과 축복이 가득하시길 기원합니다.</p>
              </div>

              {/* Signature */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-gray-500 text-sm mb-1">다시스 실버케어센터</p>
                <p className="text-gray-900 font-bold text-lg tracking-wide">임직원 일동</p>
              </div>
            </div>

            {/* Right: Team Photo */}
            <div className="relative">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl shadow-gray-200">
                <Image
                  src="/staff-team.png"
                  alt="다시스 실버케어센터 임직원 일동"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Caption */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500 font-medium">다시스 실버케어센터 임직원 일동</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-16">
            <div className="flex-1 h-px bg-gray-100" />
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {/* Three Promises */}
          <div className="mb-12 text-center">
            <p className="text-emerald-600 text-[11px] font-bold tracking-[0.3em] uppercase mb-3">Our Promise</p>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
              다시스 실버케어센터의 약속
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "존엄한 삶을 위한 전문 케어",
                desc: "단순한 수발을 넘어, 어르신이 주체적으로 일상을 즐기실 수 있도록 맞춤형 재활과 인지 프로그램을 통해 삶의 활력을 찾아드립니다.",
              },
              {
                num: "02",
                title: "가족의 마음을 잇는 투명한 소통",
                desc: "요양원은 고도의 서비스업이자 책임감 있는 복지 사업이라는 사명감을 가지고, 보호자께서 내 부모님처럼 믿고 의지하실 수 있도록 모든 운영 과정을 정직하고 투명하게 공유합니다.",
              },
              {
                num: "03",
                title: "사랑과 정성이 깃든 안식처",
                desc: "쾌적한 시설은 기본입니다. 그 공간을 채우는 것은 어르신을 향한 진심 어린 존중과 따뜻한 사랑입니다.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all duration-300"
              >
                <span className="text-emerald-500 font-black text-3xl leading-none block mb-4">
                  {item.num}
                </span>
                <h3 className="text-gray-900 font-bold text-base mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
