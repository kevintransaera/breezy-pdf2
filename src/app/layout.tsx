import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://breezy-pdf.com"),
  title: {
    default: "Breezy PDF — Free Online PDF Tools | Private & Fast",
    template: "%s | Breezy PDF",
  },
  description:
    "Free online PDF tools that work entirely in your browser. Merge, split, compress, convert, rotate, and more. Your files never leave your device.",
  keywords: [
    "pdf tools",
    "merge pdf",
    "split pdf",
    "compress pdf",
    "pdf to images",
    "free pdf tools",
    "online pdf editor",
    "private pdf tools",
    "browser pdf tools",
    "client-side pdf",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Breezy PDF",
    title: "Breezy PDF — Free Online PDF Tools | Private & Fast",
    description:
      "Free browser-based PDF tools. Merge, split, compress, convert, and more. Your files never leave your device.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breezy PDF — Free Online PDF Tools | Private & Fast",
    description:
      "Free browser-based PDF tools. Merge, split, compress, convert, and more. Your files never leave your device.",
  },
  alternates: {
    canonical: "/",
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
};

const siteSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Breezy PDF",
    url: "https://breezy-pdf.com",
    description:
      "Free, private, browser-based PDF tools. Merge, split, compress, convert, rotate, and more.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Breezy PDF",
    url: "https://breezy-pdf.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://breezy-pdf.com/#tools",
      "query-input": "required name=search_term_string",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${playfair.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID !== 'ca-pub-XXXXXXXXXXXXXXXX' && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
