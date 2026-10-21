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
    default: "Khloe Obiegbu — Building GTM Expertise",
    template: "%s · Khloe Obiegbu",
  },
  description:
    "Exploring what it takes to turn a SaaS launch into repeatable revenue. Field notes on how customers discover, adopt, pay for, and stay with software products.",
  keywords: [
    "go-to-market",
    "GTM strategy",
    "SaaS growth",
    "post-launch",
    "customer behaviour",
    "founder interviews",
    "Khloe Obiegbu",
  ],
  openGraph: {
    title: "Khloe Obiegbu — Building GTM Expertise",
    description: "Exploring what it takes to turn a SaaS launch into repeatable revenue.",
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
