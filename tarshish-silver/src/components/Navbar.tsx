"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "요양원 소개", href: "#about" },
  { name: "서비스 안내", href: "#services" },
  { name: "시설 안내", href: "#facilities" },
  { name: "상담 및 문의", href: "#consult" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const solidBg = isScrolled || isOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solidBg
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-10 h-10 bg-emerald-700 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12 shrink-0">
            <span className="text-white font-black text-xl">D</span>
          </div>
          <span
            className={`text-lg font-bold tracking-tight transition-colors ${
              solidBg ? "text-gray-900" : "text-white"
            }`}
          >
            다시스 <span className="text-emerald-500">실버케어</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-bold transition-all hover:text-emerald-500 ${
                isScrolled ? "text-gray-600" : "text-white/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Desktop CTA */}
          <Link
            href="#consult"
            className={`hidden md:inline-flex px-6 py-2.5 rounded-full text-xs font-black tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-lg ${
              isScrolled
                ? "bg-emerald-600 text-white shadow-emerald-600/20 hover:bg-emerald-700"
                : "bg-white text-emerald-900 shadow-black/10 hover:bg-emerald-50"
            }`}
          >
            입소 상담
          </Link>

          {/* Hamburger Button (mobile only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isOpen}
            className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg gap-0 transition-colors ${
              solidBg ? "text-gray-900" : "text-white"
            }`}
          >
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-300 origin-center ${
                isOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current mt-[5px] transition-all duration-300 ${
                isOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current mt-[5px] transition-all duration-300 origin-center ${
                isOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pt-3 pb-6 flex flex-col border-t border-gray-100 bg-white/95">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-3.5 text-[15px] font-bold text-gray-700 hover:text-emerald-600 border-b border-gray-100 last:border-0 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#consult"
            onClick={() => setIsOpen(false)}
            className="mt-5 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm rounded-full text-center tracking-widest uppercase transition-colors"
          >
            입소 상담
          </Link>
        </div>
      </div>
    </nav>
  );
}
