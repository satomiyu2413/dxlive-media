import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-8 md:mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-white text-xs font-black px-2 py-1 rounded"
                style={{ background: "#e8003d" }}
              >
                LIVE
              </span>
              <span className="font-black text-lg" style={{ color: "#111" }}>
                チャットLAB
              </span>
            </div>
            <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
              ライブチャットサービスの比較・レビュー専門メディア。
              <br />
              DXLIVEの使い方・安全性・料金を詳しく解説します。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">ガイド</p>
              <ul className="space-y-2">
                <li><Link href="/articles/registration-guide" className="text-sm text-gray-600 hover:text-gray-900">登録方法</Link></li>
                <li><Link href="/articles/safety" className="text-sm text-gray-600 hover:text-gray-900">安全性</Link></li>
                <li><Link href="/articles/cancellation" className="text-sm text-gray-600 hover:text-gray-900">退会方法</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">攻略</p>
              <ul className="space-y-2">
                <li><Link href="/articles/member-ranks" className="text-sm text-gray-600 hover:text-gray-900">会員ランク</Link></li>
                <li><Link href="/articles/tips" className="text-sm text-gray-600 hover:text-gray-900">お得な楽しみ方</Link></li>
                <li><Link href="/articles/how-to-be-liked" className="text-sm text-gray-600 hover:text-gray-900">チャトレに好かれる方法</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">レビュー</p>
              <ul className="space-y-2">
                <li><Link href="/articles/dxlive-review" className="text-sm text-gray-600 hover:text-gray-900">DXLIVEレビュー</Link></li>
                <li><Link href="/articles/av-vs-livechat" className="text-sm text-gray-600 hover:text-gray-900">AV vs ライブチャット</Link></li>
                <li><Link href="/articles/events" className="text-sm text-gray-600 hover:text-gray-900">イベント情報</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 text-xs text-gray-400 leading-relaxed">
          <p>
            本サイトはDXLIVEの紹介・解説を目的とした情報メディアです。掲載情報は公式サイトの内容をもとにしていますが、変更されている場合があります。最新情報は
            <a
              href="https://www.dxlive.com/member"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "#e8003d" }}
            >
              公式サイト
            </a>
            でご確認ください。
            <br />
            ※ 掲載サービスはすべて18歳以上を対象としています。
          </p>
        </div>
      </div>
    </footer>
  );
}
