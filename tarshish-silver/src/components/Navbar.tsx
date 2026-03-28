"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface NavChild { name: string; href: string; }
interface NavItem  { name: string; href: string; children?: NavChild[]; }

const navItems: NavItem[] = [
  {
    name: "요양원 소개", href: "/about",
    children: [
      { name: "인사말",    href: "/about/greeting"   },
      { name: "시설안내",  href: "/about/facilities"  },
      { name: "기관현황",  href: "/about/status"      },
      { name: "오시는 길", href: "/about/location"    },
    ],
  },
  {
    name: "서비스안내", href: "/services",
    children: [
      { name: "노인장기요양보험",  href: "/services/insurance" },
      { name: "요양",              href: "/services/care"      },
      { name: "간호/의료",         href: "/services/medical"   },
      { name: "물리(작업) 치료",   href: "/services/therapy"   },
      { name: "인지향상",          href: "/services/cognitive" },
      { name: "여가지원",          href: "/services/leisure"   },
      { name: "정서지원",          href: "/services/emotional" },
      { name: "가족지원",          href: "/services/family"    },
    ],
  },
  {
    name: "비용 및 상담신청", href: "/costs",
    children: [
      { name: "비용안내",          href: "/costs/info"        },
      { name: "대상 및 절차",      href: "/costs/eligibility" },
      { name: "상담신청",          href: "/costs/consult"     },
      { name: "장기요양 신청절차", href: "/costs/application" },
    ],
  },
  {
    name: "알림마당", href: "/news",
    children: [
      { name: "공지사항",     href: "/news/notices"         },
      { name: "시설포토앨범", href: "/news/facility-photos" },
      { name: "활동포토앨범", href: "/news/activity-photos" },
      { name: "식단표",       href: "/news/menu"            },
    ],
  },
  {
    name: "후원 및 자원봉사", href: "/support",
    children: [
      { name: "후원안내",      href: "/support/donation"  },
      { name: "자원봉사 안내", href: "/support/volunteer" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled,     setIsScrolled]     = useState(false);
  const [isMobileOpen,   setIsMobileOpen]   = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (isMobileOpen) setIsMobileOpen(false);
      setActiveDropdown(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobileOpen]);

  const hasBg       = isScrolled || isMobileOpen || activeDropdown !== null;
  const closeMobile = () => { setIsMobileOpen(false); setMobileExpanded(null); };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${hasBg ? "py-3" : "py-5"}`}
      style={hasBg
        ? { background: "rgba(250,247,242,0.96)", backdropFilter: "blur(12px)", boxShadow: "0 1px 0 rgba(107,143,113,0.12)" }
        : {}}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0" onClick={closeMobile}>
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12 shrink-0"
            style={{ background: "#4a6b50" }}
          >
            <span className="text-white font-black text-lg font-serif-kr">D</span>
          </div>
          <span
            className="text-base font-bold tracking-tight transition-colors duration-300"
            style={{ color: hasBg ? "#2a2620" : "white" }}
          >
            다시스 <span style={{ color: "#6b8f71" }}>실버케어</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-3 xl:px-4 py-2 text-[13px] font-bold transition-colors duration-200"
                style={{ color: hasBg ? "#3a3228" : "rgba(255,255,255,0.88)" }}
              >
                {item.name}
                {item.children && (
                  <svg className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {item.children && (
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    activeDropdown === item.name ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  <div
                    className={`rounded-2xl py-2 overflow-hidden ${item.children.length > 4 ? "w-72" : "min-w-[170px]"}`}
                    style={{ background: "#faf7f2", boxShadow: "0 8px 32px rgba(42,38,32,0.12), 0 1px 0 rgba(107,143,113,0.1)" }}
                  >
                    <div className={item.children.length > 4 ? "grid grid-cols-2" : "flex flex-col"}>
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-5 py-2.5 text-[13px] font-medium whitespace-nowrap transition-all duration-150"
                          style={{ color: "#3a3228" }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.color = "#4a6b50";
                            el.style.background = "rgba(107,143,113,0.08)";
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.color = "#3a3228";
                            el.style.background = "";
                          }}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:15445202"
            className="hidden lg:flex items-center gap-1.5 text-[13px] font-black transition-colors duration-200"
            style={{ color: hasBg ? "#3a3228" : "rgba(255,255,255,0.85)" }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
            </svg>
            1544-5202
          </a>

          <Link
            href="/costs/consult"
            className="hidden lg:inline-flex px-5 py-2 rounded-full text-[11px] font-black tracking-widest uppercase transition-all duration-200 hover:scale-105 active:scale-95 text-white"
            style={hasBg
              ? { background: "#4a6b50", boxShadow: "0 4px 14px rgba(74,107,80,0.3)" }
              : { background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.22)" }
            }
          >
            입소 상담
          </Link>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isMobileOpen}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg"
            style={{ color: hasBg ? "#2a2620" : "white" }}
          >
            <span className={`block h-0.5 w-5 bg-current transition-all duration-300 origin-center ${isMobileOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current mt-[5px] transition-all duration-300 ${isMobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current mt-[5px] transition-all duration-300 origin-center ${isMobileOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileOpen ? "max-h-screen" : "max-h-0"}`}>
        <div
          className="px-6 pt-3 pb-6 flex flex-col border-t overflow-y-auto max-h-[80vh]"
          style={{ background: "rgba(250,247,242,0.98)", borderColor: "rgba(107,143,113,0.14)" }}
        >
          {navItems.map((item) => (
            <div key={item.name} className="border-b last:border-0" style={{ borderColor: "rgba(107,143,113,0.1)" }}>
              {item.children ? (
                <>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                    className="w-full flex items-center justify-between py-3.5 text-[15px] font-bold transition-colors"
                    style={{ color: "#2a2620" }}
                  >
                    <span>{item.name}</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === item.name ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${mobileExpanded === item.name ? "max-h-96 pb-3" : "max-h-0"}`}>
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link key={child.name} href={child.href} onClick={closeMobile} className="block py-2 text-sm font-medium" style={{ color: "#5a4a3a" }}>
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link href={item.href} onClick={closeMobile} className="block py-3.5 text-[15px] font-bold" style={{ color: "#2a2620" }}>
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-5 space-y-3">
            <a href="tel:15445202" className="flex items-center gap-2 py-3 text-[15px] font-bold" style={{ color: "#2a2620" }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
              </svg>
              1544-5202
            </a>
            <Link
              href="/costs/consult"
              onClick={closeMobile}
              className="block py-4 font-black text-sm rounded-full text-center tracking-widest uppercase text-white transition-colors"
              style={{ background: "#4a6b50" }}
            >
              입소 상담
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
