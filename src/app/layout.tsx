import type { Metadata } from "next";
import { Bricolage_Grotesque, Urbanist } from "next/font/google"; // Import both fonts
import "./globals.css";
import Header from "./components/Header";
import Script from "next/script";
import Footer from "./components/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'] 
});

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
  weight: ['400', '500', '600', '700'] 
});

export const metadata: Metadata = {
  title: "Raym Universe - Your Favourite Software Partner",
  description: "Web, Mpbile apps | Software and Branding Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${urbanist.variable}`}>
      <body className="font-bricolage antialiased"> {/* Use Bricolage for headings */}
        <Header />
        <main className="font-urbanist">{children}</main> {/* Use Urbanist for paragraphs */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="8f2a7700-60d1-4997-a932-1ae0c732b1b3"
          strategy="afterInteractive"
        />
        <Footer />
      </body>
    </html>
  );
}