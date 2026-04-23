import { getArticlesByCategory, getAllArticles, CATEGORY_LABELS } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return Object.keys(CATEGORY_LABELS).map((cat) => ({ cat }));
}

export async function generateMetadata(
  props: PageProps<"/category/[cat]">
): Promise<Metadata> {
  const { cat } = await props.params;
  const label = CATEGORY_LABELS[cat];
  if (!label) notFound();
  return {
    title: `${label}の記事一覧`,
    description: `DXLIVEに関する「${label}」カテゴリの記事一覧です。`,
  };
}

export default async function CategoryPage(props: PageProps<"/category/[cat]">) {
  const { cat } = await props.params;
  const label = CATEGORY_LABELS[cat];
  if (!label) notFound();

  const articles = getArticlesByCategory(cat);
  const allArticles = getAllArticles();
  const others = allArticles.filter((a) => a.category !== cat).slice(0, 5);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Category tabs */}
      <div className="bg-white border border-gray-200 rounded-lg mb-6">
        <div className="flex flex-wrap">
          <Link
            href="/"
            className="px-5 py-3 text-sm font-bold border-b-2 border-transparent text-gray-500 whitespace-nowrap hover:text-gray-800 transition-colors"
          >
            すべて
          </Link>
          {Object.entries(CATEGORY_LABELS).map(([key, lbl]) => (
            <Link
              key={key}
              href={`/category/${key}`}
              className="px-5 py-3 text-sm font-bold border-b-2 whitespace-nowrap transition-colors"
              style={
                key === cat
                  ? { borderColor: "#e8003d", color: "#e8003d" }
                  : { borderColor: "transparent", color: "#6b7280" }
              }
            >
              {lbl}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex gap-6 items-start">
        <div className="flex-1 min-w-0">
          <h1 className="font-black text-xl text-gray-900 mb-4">
            {label}の記事一覧
            <span className="text-sm font-normal text-gray-400 ml-2">{articles.length}件</span>
          </h1>

          {articles.length === 0 ? (
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center text-gray-500">
              このカテゴリの記事はまだありません
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {articles.map((a) => (
                <ArticleCard key={a.slug} article={a} variant="featured" />
              ))}
            </div>
          )}
        </div>

        <div className="hidden lg:block w-72 shrink-0">
          <Sidebar relatedArticles={others} />
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="lg:hidden mt-6 rounded-lg p-5 text-center" style={{ background: "#e8003d" }}>
        <p className="text-white font-bold text-sm mb-1">登録無料で5ptプレゼント中</p>
        <p className="text-white text-xs opacity-80 mb-4">18歳以上・今すぐ体験できます</p>
        <a
          href="https://www.dxlive.com/member"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white font-black text-sm py-2.5 px-4 rounded transition-opacity hover:opacity-90"
          style={{ color: "#e8003d" }}
        >
          DXLIVEを無料で試す →
        </a>
      </div>
    </div>
  );
}
