import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist_Mono, Hanken_Grotesk } from "next/font/google";
import { SITE } from "@/data/content";
import "./globals.css";

// Self-hosted variable fonts (no render-blocking request to Google at runtime).
const display = Bricolage_Grotesque({ subsets: ["latin"], axes: ["opsz"], variable: "--nf-display", display: "swap" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--nf-body", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--nf-mono", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "ZBE Power Engineering (ZBE) — zbepowereng.com", template: `%s | ${SITE.name}` },
  description: `ZBE is ZBE Power Engineering. The official website is ${SITE.url}. ${SITE.description}`,
  applicationName: SITE.name,
  keywords: [
    "ZBE",
    "zbe",
    "ZBE Power Engineering",
    "zbepowereng",
    "zbepowereng.com",
    "best power engineering company Addis Ababa",
    "best power engineering company Ethiopia",
    "best electrical installation company Addis Ababa",
    "power engineering company Ethiopia",
    "power engineering Addis Ababa",
    "electrical maintenance Ethiopia",
    "electrical maintenance Addis Ababa",
    "electrician Addis Ababa",
    "electrical installation Ethiopia",
    "electrical materials Addis Ababa",
    "construction materials Addis Ababa",
    "PVC conduit Ethiopia",
    "junction box Addis Ababa",
    "ICT infrastructure",
    "PCB design and manufacturing",
    "electronic prototyping",
    "24/7 emergency electrical support",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Electrical engineering",
  formatDetection: { telephone: true, email: true, address: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "ZBE Power Engineering (ZBE) — zbepowereng.com",
    description: `ZBE is ZBE Power Engineering. The official website is ${SITE.url}. ${SITE.description}`,
    url: "/",
    locale: "en_ET",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZBE Power Engineering (ZBE) — zbepowereng.com",
    description: `ZBE is ZBE Power Engineering. The official website is ${SITE.url}. ${SITE.description}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#007acc",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="Plain-language summary of ZBE Power Engineering" />
      </head>
      <body>
        <a
          className="fixed -top-[60px] left-3 z-[200] rounded-lg bg-brand px-4 py-2.5 font-body text-sm font-medium text-white transition-[top] focus:top-3"
          href="#main"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
