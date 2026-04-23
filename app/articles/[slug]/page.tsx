import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import Sidebar from "@/components/Sidebar";
import ArticleCard from "@/components/ArticleCard";
import ArticleIcon from "@/components/ArticleIcon";
import ThumbnailIllustration from "@/components/ThumbnailIllustration";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  props: PageProps<"/articles/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);
  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage(props: PageProps<"/articles/[slug]">) {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);
  const allArticles = getAllArticles();
  const related = allArticles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 4);
  const others = allArticles
    .filter((a) => a.slug !== slug && !related.find((r) => r.slug === a.slug))
    .slice(0, 4 - related.length);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 mb-4 flex items-center gap-1">
        <Link href="/" className="hover:text-gray-700">ホーム</Link>
        <span>›</span>
        <Link href={`/category/${article.category}`} className="hover:text-gray-700">
          {article.categoryLabel}
        </Link>
        <span>›</span>
        <span className="text-gray-600 truncate">{article.title}</span>
      </nav>

      <div className="flex gap-6 items-start">
        {/* Article */}
        <article className="flex-1 min-w-0">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
            {/* Hero */}
            <div
              className="h-48 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #1a1828 0%, #2a1020 100%)" }}
            >
              <ThumbnailIllustration slug={article.slug} category={article.category} />
            </div>

            <div className="p-6 md:p-8">
              {/* Meta */}
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span
                  className="text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded"
                  style={{ color: "#e8003d", background: "#fff0f3" }}
                >
                  {article.categoryLabel}
                </span>
                <span className="text-xs text-gray-400">{article.date}</span>
                <span className="text-xs text-gray-400">読了 {article.readTime}分</span>
              </div>

              <h1 className="font-black text-xl md:text-2xl leading-snug mb-4 text-gray-900">
                {article.title}
              </h1>
              <p className="text-sm text-gray-500 leading-relaxed border-l-4 pl-4 mb-8" style={{ borderColor: "#e8003d" }}>
                {article.description}
              </p>

              {/* CTA inline top */}
              <div
                className="rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8"
                style={{ background: "#fff0f3", border: "1px solid #f5c0cc" }}
              >
                <div className="flex-1">
                  <p className="font-bold text-sm text-gray-900">DXLIVEを今すぐ体験</p>
                  <p className="text-xs text-gray-500 mt-0.5">登録無料・5ptプレゼント中 ／ 18歳以上限定</p>
                </div>
                <a
                  href="https://www.dxlive.com/member"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-white text-sm font-bold px-5 py-2 rounded transition-opacity hover:opacity-90"
                  style={{ background: "#e8003d" }}
                >
                  公式サイトへ →
                </a>
              </div>

              {/* Article content */}
              <div className="article-content">
                <MDXRemote source={article.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
              </div>

              {/* CTA inline bottom */}
              <div
                className="rounded-lg p-6 text-center mt-10"
                style={{ background: "linear-gradient(135deg, #fff0f3, #ffe8ee)", border: "1px solid #f5c0cc" }}
              >
                <p className="font-black text-lg text-gray-900 mb-2">DXLIVEを試してみる</p>
                <p className="text-sm text-gray-500 mb-4">登録無料・5チャットポイントプレゼント中 ／ 18歳以上限定</p>
                <a
                  href="https://www.dxlive.com/member"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white font-black px-8 py-3 rounded-lg transition-opacity hover:opacity-90"
                  style={{ background: "#e8003d" }}
                >
                  公式サイトで無料登録する →
                </a>
              </div>
            </div>
          </div>

          {/* Related articles */}
          {[...related, ...others].length > 0 && (
            <div>
              <h2 className="font-black text-base text-gray-800 mb-3">関連記事</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[...related, ...others].map((a) => (
                  <ArticleCard key={a.slug} article={a} variant="featured" />
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Sidebar */}
        <div className="hidden lg:block w-72 shrink-0">
          <Sidebar relatedArticles={[...related, ...others]} />
        </div>
      </div>
    </div>
  );
}
