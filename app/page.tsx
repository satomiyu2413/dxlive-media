import { getAllArticles, CATEGORY_LABELS } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import ThumbnailIllustration from "@/components/ThumbnailIllustration";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function HomePage() {
  const articles = getAllArticles();
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const rest = articles.filter((a) => a.slug !== featured.slug);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Category tabs */}
      <div className="bg-white border border-gray-200 rounded-lg mb-6 overflow-x-auto">
        <div className="flex min-w-max">
          <Link
            href="/"
            className="px-5 py-3 text-sm font-bold border-b-2 whitespace-nowrap"
            style={{ borderColor: "#e8003d", color: "#e8003d" }}
          >
            すべて
          </Link>
          {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
            <Link
              key={key}
              href={`/category/${key}`}
              className="px-5 py-3 text-sm font-bold border-b-2 border-transparent text-gray-500 whitespace-nowrap hover:text-gray-800 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex gap-6 items-start">
        {/* Main */}
        <div className="flex-1 min-w-0 space-y-6">
          {/* Featured */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-xs font-black px-2 py-0.5 rounded text-white"
                style={{ background: "#e8003d" }}
              >
                注目記事
              </span>
            </div>
            <Link
              href={`/articles/${featured.slug}`}
              className="flex gap-4 bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div
                className="w-44 shrink-0 flex items-center justify-center overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #1a1828 0%, #2a1020 100%)",
                  minHeight: "130px",
                }}
              >
                <ThumbnailIllustration slug={featured.slug} category={featured.category} />
              </div>
              <div className="p-4 flex flex-col justify-center">
                <span
                  className="text-xs font-bold uppercase tracking-wide"
                  style={{ color: "#e8003d" }}
                >
                  {featured.categoryLabel}
                </span>
                <h2 className="font-black text-lg leading-snug mt-1 mb-2 text-gray-900">
                  {featured.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {featured.description}
                </p>
                <div className="mt-3 text-xs text-gray-400">
                  {featured.date} ・ 読了{featured.readTime}分
                </div>
              </div>
            </Link>
          </div>

          {/* Grid */}
          <div>
            <h2 className="font-black text-base text-gray-800 mb-3">最新記事</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {rest.slice(0, 4).map((a) => (
                <ArticleCard key={a.slug} article={a} variant="featured" />
              ))}
            </div>
          </div>

          {/* List */}
          {rest.length > 4 && (
            <div className="space-y-3">
              {rest.slice(4).map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block w-72 shrink-0">
          <Sidebar relatedArticles={rest.slice(0, 5)} />
        </div>
      </div>
    </div>
  );
}
