"use client";
import Link from "next/link";
import { useState } from "react";
import { CATEGORY_LABELS } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div style={{ background: "#111", color: "#888" }} className="text-xs py-1.5 px-4 flex justify-between items-center">
        <span>ライブチャット比較・レビュー専門メディア</span>
        <span className="hidden sm:block">18歳以上対象のアダルトサービス紹介サイトです</span>
      </div>

      {/* Main nav */}
      <div className="border-b-4" style={{ borderColor: "#e8003d" }}>
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-white text-xs font-black px-2 py-1 rounded" style={{ background: "#e8003d" }}>
              LIVE
            </span>
            <span className="font-black text-lg" style={{ color: "#111", letterSpacing: "-0.02em" }}>
              チャットLAB
            </span>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.dxlive.com/member"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xs font-bold px-4 py-2 rounded transition-opacity hover:opacity-80"
              style={{ background: "#e8003d" }}
            >
              無料で試す
            </a>
            {/* Hamburger for mobile */}
            <button
              className="md:hidden p-1 text-gray-600"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="メニュー"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3">
          <Link
            href="/"
            className="block py-2.5 text-sm font-bold border-b border-gray-100 text-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            すべての記事
          </Link>
          {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
            <Link
              key={key}
              href={`/category/${key}`}
              className="block py-2.5 text-sm font-bold border-b border-gray-100 last:border-0 text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
