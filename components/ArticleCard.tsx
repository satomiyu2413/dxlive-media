import Link from "next/link";
import type { Article } from "@/lib/articles";
import ArticleIcon from "./ArticleIcon";
import ThumbnailIllustration from "./ThumbnailIllustration";

type Props = {
  article: Article;
  variant?: "default" | "featured" | "compact";
};

export default function ArticleCard({ article, variant = "default" }: Props) {
  if (variant === "featured") {
    return (
      <Link
        href={`/articles/${article.slug}`}
        className="block bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
      >
        <div
          className="h-36 flex items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a1828 0%, #2a1020 100%)" }}
        >
          <ThumbnailIllustration slug={article.slug} category={article.category} />
        </div>
        <div className="p-4">
          <span
            className="text-xs font-bold tracking-wide uppercase"
            style={{ color: "#e8003d" }}
          >
            {article.categoryLabel}
          </span>
          <h2 className="font-black text-sm leading-snug mt-1 mb-2 text-gray-900 line-clamp-2">
            {article.title}
          </h2>
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
            {article.description}
          </p>
          <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
            <span>{article.date}</span>
            <span>読了 {article.readTime}分</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        href={`/articles/${article.slug}`}
        className="flex items-start gap-3 bg-white rounded-lg border border-gray-200 p-3 hover:shadow-sm transition-shadow"
      >
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: "#f5f4f2" }}
        >
          <ArticleIcon slug={article.slug} category={article.category} size={18} className="text-gray-500" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "#e8003d" }}>
            {article.categoryLabel}
          </span>
          <p className="text-sm font-bold text-gray-800 leading-snug mt-0.5 line-clamp-2">
            {article.title}
          </p>
        </div>
      </Link>
    );
  }

  // default list style
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="flex gap-4 items-start bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-sm transition-shadow"
    >
      <div
        className="h-20 w-28 shrink-0 flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #1a1828 0%, #2a1020 100%)" }}
      >
        <ThumbnailIllustration slug={article.slug} category={article.category} />
      </div>
      <div className="flex-1 min-w-0 py-3 pr-4">
        <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "#e8003d" }}>
          {article.categoryLabel}
        </span>
        <h3 className="font-bold text-gray-900 leading-snug mt-0.5 mb-1 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-1">
          {article.description}
        </p>
        <div className="mt-1.5 text-xs text-gray-400">
          {article.date} ・ 読了{article.readTime}分
        </div>
      </div>
    </Link>
  );
}
