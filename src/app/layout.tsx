import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khloeobiegbu.com"),
  title: {
    default: "Khloe Obiegbu — Brand Positioning Strategist",
    template: "%s · Khloe Obiegbu",
  },
  description:
    "Your business doesn't need more attention. It needs better positioning. Khloe Obiegbu helps startups and growing businesses uncover what makes them different and attract clients who value what they offer.",
  keywords: [
    "brand positioning strategist",
    "brand strategy",
    "founder branding",
    "market differentiation",
    "messaging strategy",
    "Khloe Obiegbu",
  ],
  openGraph: {
    title: "Khloe Obiegbu — Brand Positioning Strategist",
    description:
      "Stop competing for attention. Start owning your position.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Clash Display + General Sans for headings, served by Fontshare */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=general-sans@400,500,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
