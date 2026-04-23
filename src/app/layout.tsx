import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif, Montserrat, Lora, Hind_Madurai } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";
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

export const metadata: Metadata = {
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
  icons: {
    icon: "/icon.png",
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
            <div className="mb-5">
              <p className="text-base text-neutral-500 dark:text-neutral-500 justify">
                Built with{" "}
                <a
                  href="https://github.com/tovacinni/research-website-template"
                  className="underline hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors"
                >
                  research-website-template
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
