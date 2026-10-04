import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SITE_URL } from "@/shared/config/links";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = "Neon Muse — AI Creators";
const description = "Discover AI-powered virtual creators across tech, travel, fashion and wellness.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: "Neon Muse",
  keywords: ["AI creators", "virtual creators", "AI chat", "creator showcase", "Telegram"],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Neon Muse",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#07070a",
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
