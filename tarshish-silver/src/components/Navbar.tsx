"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "요양원 소개", href: "#about" },
    { name: "서비스 안내", href: "#services" },
    { name: "시설 안내", href: "#facilities" },
    { name: "상담 및 문의", href: "#consult" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-emerald-700 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
            <span className="text-white font-black text-xl">D</span>
          </div>
          <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}>
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

        {/* Action Button */}
        <Link
          href="#consult"
          className={`px-6 py-2.5 rounded-full text-xs font-black tracking-widest uppercase transition-all transform hover:scale-105 active:scale-95 shadow-lg ${
            isScrolled
              ? "bg-emerald-600 text-white shadow-emerald-600/20 hover:bg-emerald-700"
              : "bg-white text-emerald-900 shadow-black/10 hover:bg-emerald-50"
          }`}
        >
          입소 상담
        </Link>
      </div>
    </nav>
  );
}
