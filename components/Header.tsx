import Link from "next/link";

export default function Header() {
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
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-white text-xs font-black px-2 py-1 rounded" style={{ background: "#e8003d" }}>
              LIVE
            </span>
            <span className="font-black text-lg" style={{ color: "#111", letterSpacing: "-0.02em" }}>
              チャットLAB
            </span>
          </Link>

          <a
            href="https://www.dxlive.com/member"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xs font-bold px-4 py-2 rounded transition-opacity hover:opacity-80"
            style={{ background: "#e8003d" }}
          >
            無料で試す
          </a>
        </div>
      </div>
    </header>
  );
}
