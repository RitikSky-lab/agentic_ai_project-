import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ritik Kumar — Analytics Engineer | Data Engineer | dbt Developer",
    template: "%s | Ritik Kumar",
  },
  description:
    "Building modern data platforms through analytics engineering, dimensional modeling, data quality frameworks, CI/CD automation, and business-focused analytics solutions.",
  keywords: [
    "Analytics Engineer",
    "Data Engineer",
    "dbt Developer",
    "SQL Server",
    "Data Warehousing",
    "Medallion Architecture",
    "Star Schema",
    "ETL",
    "ELT",
    "Data Quality",
    "CI/CD",
    "GitHub Actions",
    "Dimensional Modeling",
    "T-SQL",
    "Python",
    "Docker",
  ],
  authors: [{ name: "Ritik Kumar" }],
  creator: "Ritik Kumar",
  metadataBase: new URL("https://ritikkumar.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ritikkumar.dev",
    siteName: "Ritik Kumar — Portfolio",
    title: "Ritik Kumar — Analytics Engineer | Data Engineer | dbt Developer",
    description:
      "Building modern data platforms through analytics engineering, dimensional modeling, data quality frameworks, CI/CD automation, and business-focused analytics solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ritik Kumar — Analytics Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritik Kumar — Analytics Engineer | Data Engineer | dbt Developer",
    description:
      "Building modern data platforms through analytics engineering, dimensional modeling, data quality frameworks, CI/CD automation, and business-focused analytics solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0a0f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ritik Kumar",
              jobTitle: "Analytics Engineer | Data Engineer | dbt Developer",
              url: "https://ritikkumar.dev",
              sameAs: [
                "https://github.com/Ritik574-coder",
                "https://www.linkedin.com/in/ritik-kumar-b81b32375/",
              ],
              knowsAbout: [
                "Data Engineering",
                "Analytics Engineering",
                "dbt",
                "SQL Server",
                "Data Warehousing",
                "Dimensional Modeling",
                "Data Quality",
                "CI/CD",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
