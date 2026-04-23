"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Publication } from "@/data/publication";

export function PublicationEntry({ publication }: { publication: Publication }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`group rounded-2xl border bg-surface/40 transition-all duration-500 hover:shadow-xl hover:bg-surface overflow-hidden
        ${open ? "border-accent/60 shadow-lg bg-surface" : "border-divider-soft hover:border-accent/50"}`}
    >
      {/* Always-visible header */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="w-full text-left p-6 flex items-start justify-between gap-4 focus:outline-none"
      >
        <div className="flex flex-col gap-1.5 flex-1">
          {/* Conference + award row */}
          <div className="flex flex-row gap-3 items-center flex-wrap">
            <p className="text-sm text-hint">
              {publication.conference} {publication.year}
            </p>
            {publication.award && (
              <div className="group/award flex px-2.5 py-0.5 bg-gradient-to-r from-amber-50 to-rose-50 rounded-md items-center shadow-sm border border-amber-100/50 relative overflow-hidden hover:rotate-1 transition-all duration-300">
                <div className="absolute inset-0 translate-x-[-100%] group-hover/award:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/90 to-transparent" />
                <p className="text-xs text-amber-700 font-medium relative">{publication.award}</p>
              </div>
            )}
          </div>

          {/* Title */}
          <h3
            className={`font-heading font-bold text-lg transition-colors duration-300 ${
              open ? "text-accent" : "text-foreground group-hover:text-accent"
            }`}
          >
            {publication.title}
          </h3>
        </div>

        {/* Chevron */}
        <span
          className={`flex-shrink-0 text-hint transition-all duration-300 text-lg mt-1 ${
            open ? "rotate-180 text-accent" : "group-hover:text-accent"
          }`}
          aria-hidden="true"
        >
          ⌄
        </span>
      </button>

      {/* Collapsible body: image + authors + links + tldr */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-4 border-t border-divider-soft flex flex-col sm:flex-row gap-6">
          {/* Optional thumbnail */}
          {publication.imageUrl && (
            <div className="w-full sm:w-1/4 min-w-[120px] flex-shrink-0">
              <Image
                src={publication.imageUrl}
                alt={publication.title}
                width={160}
                height={200}
                className="rounded-lg transition-all duration-300 w-full h-auto"
              />
            </div>
          )}

          <div className="flex flex-col gap-4 flex-1">
            {/* Authors */}
            <p className="text-base text-muted leading-relaxed">{publication.authors}</p>

            {/* TL;DR */}
            {publication.tldr && (
              <p className="text-base text-foreground leading-relaxed">{publication.tldr}</p>
            )}

            {/* Links */}
            {(publication.paperUrl || publication.codeUrl || publication.bibtex) && (
              <div className="flex flex-row gap-6 pt-2 border-t border-divider-soft">
                {publication.paperUrl && (
                  <a
                    href={publication.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-300"
                  >
                    <ArrowUpRight size={15} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                    <span className="tracking-widest uppercase">Paper</span>
                  </a>
                )}
                {publication.codeUrl && (
                  <a
                    href={publication.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-300"
                  >
                    <ArrowUpRight size={15} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                    <span className="tracking-widest uppercase">Code</span>
                  </a>
                )}
                {publication.bibtex && (
                  <a
                    href={publication.bibtex}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-300"
                  >
                    <ArrowUpRight size={15} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                    <span className="tracking-widest uppercase">BibTeX</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
