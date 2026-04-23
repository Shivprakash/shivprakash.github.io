"use client";

import { useState } from "react";
import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
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
          <p className="text-sm text-hint">{experience.date}</p>
          <h3
            className={`font-heading font-bold text-lg transition-colors duration-300 ${
              open ? "text-accent" : "text-foreground group-hover:text-accent"
            }`}
          >
            {experience.title} — {experience.company}
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

      {/* Collapsible body */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-4 border-t border-divider-soft flex flex-col gap-4">
          {(experience.advisor || experience.manager || experience.companyUrl) && (
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {experience.companyUrl && (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-accent hover:text-accent-hover transition-colors flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visit {experience.company}
                  <span className="text-xs">↗</span>
                </a>
              )}
              {experience.advisor && (
                <p className="text-sm text-muted leading-relaxed font-serif italic">
                  <span className="font-sans not-italic font-semibold mr-1 text-foreground">Advisor:</span> {experience.advisor}
                </p>
              )}
              {experience.manager && (
                <p className="text-sm text-muted leading-relaxed font-serif italic">
                  <span className="font-sans not-italic font-semibold mr-1 text-foreground">Manager:</span> {experience.manager}
                </p>
              )}
            </div>
          )}
          
          {experience.description && (
            <div
              className="text-base text-foreground leading-relaxed space-y-2.5 [&>strong]:text-foreground [&>strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: experience.description }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
