import type { Metadata } from "next";
import { Urbanist, Inter } from "next/font/google"; // Updated premium fonts
import "./globals.css";
import Header from "./components/Header";
import Script from "next/script";
import Footer from "./components/Footer";

// Headings font (premium, sans-serif)
const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"]
});

// Body font (modern, readable)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Raym Universe - Your Premium Software Partner",
  description: "Web & Mobile Apps | Software and Branding Services",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${urbanist.variable} ${inter.variable}`}>
      <head>
        {/* Resource hints for external resources */}
        <link rel="dns-prefetch" href="https://prod.spline.design" />
        <link rel="dns-prefetch" href="https://cloud.umami.is" />
        <link rel="preconnect" href="https://prod.spline.design" />
        <link rel="preconnect" href="https://cloud.umami.is" />
        
        {/* Prefetch Spline runtime (loaded lazily) */}
        <link rel="prefetch" href="https://prod.spline.design/kVRGrD0B5R1fJWdO/scene.splinecode" as="fetch" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-black text-gray-900">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="font-inter">{children}</main>

        {/* Analytics - deferred for better performance */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="8f2a7700-60d1-4997-a932-1ae0c732b1b3"
          strategy="lazyOnload"
        />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}