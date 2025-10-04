import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "How to Find Circumference of a Circle - Formula, Calculator & Examples",
  description: "Learn how to find the circumference of a circle using C=2πr or C=πd formulas. Free calculator with step-by-step examples from radius, diameter, or area. Master circumference calculations.",
  keywords: "how to find circumference of a circle, circumference formula, circle circumference calculator, C=2πr, find circumference from radius, find circumference from diameter",
  authors: [{ name: "Circle Calculator Network" }],
  openGraph: {
    title: "How to Find Circumference of a Circle - Complete Guide",
    description: "Step-by-step guide with calculator, formulas, and examples for finding circle circumference.",
    url: "https://howtofindcircumferenceofacircle.com",
    siteName: "How to Find Circumference of a Circle",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Find Circumference of a Circle",
    description: "Complete guide with calculator and examples for finding circle circumference.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1DC7BCMQKZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1DC7BCMQKZ');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}