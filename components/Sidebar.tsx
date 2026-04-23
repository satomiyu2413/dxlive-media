import Link from "next/link";
import type { Article } from "@/lib/articles";
import ArticleIcon from "./ArticleIcon";

type Props = {
  relatedArticles?: Article[];
};

export default function Sidebar({ relatedArticles = [] }: Props) {
  return (
    <aside className="space-y-5">
      {/* CTA */}
      <div className="rounded-lg p-5 text-center" style={{ background: "#e8003d" }}>
        <p className="text-white font-bold text-sm mb-1">登録無料で5ptプレゼント中</p>
        <p className="text-white text-xs opacity-80 mb-4">18歳以上・今すぐ体験できます</p>
        <a
          href="https://www.dxlive.com/member"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white font-black text-sm py-2 px-4 rounded transition-opacity hover:opacity-90"
          style={{ color: "#e8003d" }}
        >
          DXLIVEを試す →
        </a>
      </div>

      {/* Popular tags */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-xs font-bold tracking-widest uppercase" style={{ color: "#e8003d" }}>
            人気タグ
          </h3>
        </div>
        <div className="p-4 flex flex-wrap gap-2">
          {["登録方法", "安全性", "退会", "会員ランク", "2ショット", "お得技", "チャトレ攻略", "イベント", "ポイント"].map(
            (tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-600 bg-gray-50"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="text-xs font-bold tracking-widest uppercase" style={{ color: "#e8003d" }}>
              関連記事
            </h3>
          </div>
          <ul className="divide-y divide-gray-100">
            {relatedArticles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/articles/${article.slug}`}
                  className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <div
                    className="w-8 h-8 rounded flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "#f5f4f2" }}
                  >
                    <ArticleIcon
                      slug={article.slug}
                      category={article.category}
                      size={16}
                      className="text-gray-500"
                    />
                  </div>
                  <div>
                    <span className="block text-xs font-bold mb-0.5" style={{ color: "#e8003d" }}>
                      {article.categoryLabel}
                    </span>
                    <span className="text-sm font-bold text-gray-800 leading-snug line-clamp-2">
                      {article.title}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Safety note */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-xs text-amber-800 leading-relaxed">
          <strong>注意事項</strong><br />
          本サービスは18歳以上限定のアダルトコンテンツです。
          利用規約・公式情報は
          <a
            href="https://www.dxlive.com/member"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            公式サイト
          </a>
          でご確認ください。
        </p>
      </div>
    </aside>
  );
}
