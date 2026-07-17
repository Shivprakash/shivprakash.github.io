import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif, Montserrat, Lora, Hind_Madurai } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { SiteHeader } from "@/components/site-header";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// ── New pairing: Montserrat + Lora + Hind Madurai ──
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const hindMadurai = Hind_Madurai({
  variable: "--font-hind-madurai",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// SEO and OpenGraph metadata
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://profile.shiv.io";
const seoDescription = "Engineering Leader & Architect - Distributed Systems, Data Engineering, AI, Agentic AI, Machine Learning. Graduate Researcher in ML, Algorithms, HCI/AI, Robotics, Network Science, DL, RL, NLP. Industry Analyst covering Supply Chain, Data Center, Financial Research, VC.";

export const metadata: Metadata = {
  title: {
    default: "Shiv Prakash | Engineering Leader & Architect",
    template: "%s | Shiv Prakash",
  },
  description: seoDescription,
  keywords: [
    "Engineering Leader",
    "Software Architect",
    "Distributed Systems",
    "Data Engineering",
    "AI",
    "Agentic AI",
    "Machine Learning",
    "Graduate Researcher",
    "Georgia Tech",
    "Supply Chain",
    "Data Center",
    "Financial Research",
    "Venture Capital",
    "Cloud-Native Infrastructure",
    "Data Mesh",
    "Autonomous Systems",
  ],
  authors: [{ name: "Shiv Prakash", url: siteUrl }],
  creator: "Shiv Prakash",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Shiv Prakash | Engineering Leader & Architect",
    description: seoDescription,
    siteName: "Shiv Prakash",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/2737066?v=4",
        width: 1200,
        height: 630,
        alt: "Shiv Prakash - Engineering Leader & Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiv Prakash | Engineering Leader & Architect",
    description: seoDescription,
    site: "@shivprakash",
    creator: "@shivprakash",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/2737066?v=4",
        alt: "Shiv Prakash - Engineering Leader & Architect",
      },
    ],
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
  icons: {
    icon: [
      { url: "/icon.png", sizes: "1024x1024", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: [
      { url: "/icon.png", sizes: "1024x1024", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} ${montserrat.variable} ${lora.variable} ${hindMadurai.variable} antialiased`}
      >
        <SiteHeader />
        <main className="">{children}</main>
        <footer className="border-t border-divider bg-surface">
          <div className="flex flex-row mx-auto max-w-full px-12 px-7 py-14 md:flex md:items-start md:justify-between ">
            <div className="mb-5 text-base text-neutral-600 dark:text-neutral-400">
              <p>
                © {new Date().getFullYear()} {aboutMe.name}.
              </p>
              {aboutMe.secretDescription && (
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-5">
                  {aboutMe.secretDescription}
                </p>
              )}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
