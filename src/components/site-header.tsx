"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const PROJECT_FORM_URL = "https://forms.gle/AZMrRS8HRt3wu8Ys6";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-divider shadow-[0_8px_24px_-12px_rgba(44,36,32,0.18)]"
          : "bg-background/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 h-14 flex items-center justify-end gap-4">
        <a
          href={PROJECT_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 shrink-0 rounded-full bg-accent px-4 py-2 text-[12px] md:text-[13px] font-heading font-semibold uppercase tracking-widest text-[#FFFBF5] shadow-sm hover:bg-accent-hover hover:shadow-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Start a Project
          <ArrowUpRight
            size={14}
            className="opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            aria-hidden="true"
          />
        </a>
      </div>
    </header>
  );
}
