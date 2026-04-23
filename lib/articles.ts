import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { CATEGORY_LABELS } from "./constants";

const ARTICLES_DIR = path.join(process.cwd(), "content/articles");

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryLabel: string;
  date: string;
  emoji: string;
  readTime: number;
  featured?: boolean;
};

export function getAllArticles(): Article[] {
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"));

  const articles = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title as string,
      description: data.description as string,
      category: data.category as string,
      categoryLabel: CATEGORY_LABELS[data.category as string] ?? data.category,
      date: data.date as string,
      emoji: data.emoji as string,
      readTime: data.readTime as number,
      featured: data.featured as boolean | undefined,
    };
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug: string) {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    category: data.category as string,
    categoryLabel: CATEGORY_LABELS[data.category as string] ?? data.category,
    date: data.date as string,
    emoji: data.emoji as string,
    readTime: data.readTime as number,
    content,
  };
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}

export { CATEGORY_LABELS };

