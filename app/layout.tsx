import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "ライブチャットLAB | DXLIVEレビュー・比較・使い方ガイド",
    template: "%s | ライブチャットLAB",
  },
  description:
    "DXLIVEの登録方法・料金・安全性・退会方法を徹底解説。AVやエロ漫画との比較、会員ランクや攻略情報もまとめた専門メディアです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
