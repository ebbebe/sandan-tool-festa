import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2025 산단툴페스타 인천 | INDUSTRIAL COMPLEX TOOLFESTA",
  description: "2025년 11월 15일-16일, 소래포구 해오름 광장에서 개최되는 산업단지 툴페스타 인천. 산업용 제품·부품·소재·공구 전시 및 채용 박람회",
  keywords: "산단툴페스타, 인천, 산업박람회, 공구전시회, 채용박람회",
  openGraph: {
    title: "2025 산단툴페스타 인천",
    description: "2025년 11월 15일-16일, 소래포구 해오름 광장에서 개최되는 산업단지 툴페스타 인천",
    images: [
      {
        url: "/assets/meta.png",
        width: 1200,
        height: 630,
        alt: "2025 산단툴페스타 인천",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2025 산단툴페스타 인천",
    description: "2025년 11월 15일-16일, 소래포구 해오름 광장에서 개최되는 산업단지 툴페스타 인천",
    images: ["/assets/meta.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/npm/wantedgothic@1.0.3/css/wantedgothic.css"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
