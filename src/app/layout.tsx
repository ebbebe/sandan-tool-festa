import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2025 산단툴페스타 인천 | INDUSTRIAL COMPLEX TOOLFESTA",
  description: "2025년 11월 15일-16일, 소래포구 해오름 광장에서 개최되는 산업단지 툴페스타 인천. 산업용 제품·부품·소재·공구 전시 및 채용 박람회",
  keywords: "산단툴페스타, 인천, 산업박람회, 공구전시회, 채용박람회",
  verification: {
    google: "FTYPh0ZGWso4MFlypJy3-JiTTTFEig5zy4mDJos-J4Q",
    other: {
      "naver-site-verification": "d808f0a639f2323e7cebb39a268347424ff887c7",
    },
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "2025 산단툴페스타 인천",
              "description": "산업용 제품·부품·소재·공구 전시 및 채용 박람회",
              "startDate": "2025-11-15T10:00:00+09:00",
              "endDate": "2025-11-16T18:00:00+09:00",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "소래포구 해오름 광장",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "인천",
                  "addressCountry": "KR"
                }
              },
              "organizer": {
                "@type": "Organization",
                "name": "산업단지공단",
                "url": "https://www.sandantoolfesta.co.kr"
              },
              "image": [
                "https://www.sandantoolfesta.co.kr/assets/meta.png"
              ],
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "price": "0",
                "priceCurrency": "KRW",
                "url": "https://www.sandantoolfesta.co.kr"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
