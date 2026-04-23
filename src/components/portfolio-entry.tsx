"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Portfolio } from "@/data/portfolio";

export function PortfolioEntry({ portfolio }: { portfolio: Portfolio }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`group rounded-2xl border bg-surface/40 transition-all duration-500 hover:shadow-xl hover:bg-surface flex flex-col overflow-hidden
        ${open ? "border-accent/60 shadow-lg bg-surface" : "border-divider-soft hover:border-accent/50"}`}
    >
      {/* Optional image — always visible */}
      {portfolio.imageUrl && (
        <div className="w-full relative overflow-hidden">
          <Image
            src={portfolio.imageUrl}
            alt={portfolio.title}
            width={400}
            height={225}
            className="object-cover w-full h-auto border-b border-divider transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}

      {/* Always-visible header — clickable */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="w-full text-left p-6 flex items-start justify-between gap-4 focus:outline-none"
      >
        <h3
          className={`text-lg font-heading font-bold transition-colors duration-300 ${
            open ? "text-accent" : "text-foreground group-hover:text-accent"
          }`}
        >
          {portfolio.title}
        </h3>

        {/* Chevron */}
        <span
          className={`flex-shrink-0 text-hint transition-all duration-300 text-lg mt-0.5 ${
            open ? "rotate-180 text-accent" : "group-hover:text-accent"
          }`}
          aria-hidden="true"
        >
          ⌄
        </span>
      </button>

      {/* Collapsible body: description + tags + links */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 border-t border-divider-soft pt-4 flex flex-col gap-4">
          {/* Description (HTML) */}
          <div
            className="text-base text-foreground leading-relaxed space-y-2.5 [&>strong]:text-foreground [&>strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: portfolio.description }}
          />

          {/* Tech tags */}
          {portfolio.technologies && portfolio.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {portfolio.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 bg-background text-muted text-xs rounded-md border border-accent/30 text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          {(portfolio.projectUrl || portfolio.codeUrl) && (
            <div className="flex gap-7 pt-3 border-t border-divider-soft">
              {portfolio.projectUrl && (
                <a
                  href={portfolio.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-foreground transition-colors duration-300"
                >
                  <ArrowUpRight
                    size={15}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"
                  />
                  <span className="tracking-widest uppercase">Project</span>
                </a>
              )}
              {portfolio.codeUrl && (
                <a
                  href={portfolio.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-foreground transition-colors duration-300"
                >
                  <ArrowUpRight
                    size={15}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"
                  />
                  <span className="tracking-widest uppercase">Code</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
