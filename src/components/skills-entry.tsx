"use client";

import { useState } from "react";
import { SkillCategory } from "@/data/skills";

export function SkillsEntry({ skillCategory }: { skillCategory: SkillCategory }) {
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
        className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
      >
        <h3
          className={`text-lg font-heading font-bold transition-colors duration-300 ${
            open ? "text-accent" : "text-foreground group-hover:text-accent"
          }`}
        >
          {skillCategory.category}
        </h3>

        {/* Chevron */}
        <span
          className={`flex-shrink-0 text-hint transition-all duration-300 text-lg ${
            open ? "rotate-180 text-accent" : "group-hover:text-accent"
          }`}
          aria-hidden="true"
        >
          ⌄
        </span>
      </button>

      {/* Collapsible skill tags */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 pt-3 border-t border-divider-soft flex flex-wrap gap-2.5">
          {skillCategory.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3.5 py-1 bg-background text-foreground text-base rounded-md border border-accent/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
