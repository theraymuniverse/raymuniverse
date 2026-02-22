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
      <body className="antialiased bg-white text-gray-900">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="font-inter">{children}</main>

        {/* Analytics */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="8f2a7700-60d1-4997-a932-1ae0c732b1b3"
          strategy="afterInteractive"
        />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}