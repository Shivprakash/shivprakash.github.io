"use client";

import { useState } from "react";
import { ServiceCategory } from "@/data/services";

export function ServicesEntry({ serviceCategory }: { serviceCategory: ServiceCategory }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`group h-full rounded-2xl border bg-surface/40 transition-all duration-500 hover:shadow-xl hover:bg-surface flex flex-col overflow-hidden
        ${open ? "border-accent/60 shadow-lg bg-surface" : "border-divider-soft hover:border-accent/50"}`}
    >
      {/* Always-visible header — clickable */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="w-full text-left p-6 flex items-start justify-between gap-4 focus:outline-none"
      >
        <div className="flex-1">
          <h3 className={`text-lg font-heading font-bold mb-1.5 transition-colors duration-300 ${open ? "text-accent" : "text-foreground group-hover:text-accent"}`}>
            {serviceCategory.title}
          </h3>
          <p className={`text-base leading-relaxed transition-colors duration-300 ${open ? "text-foreground" : "text-muted group-hover:text-foreground"}`}>
            {serviceCategory.description}
          </p>
        </div>

        {/* Chevron */}
        <span
          className={`mt-1 flex-shrink-0 text-hint transition-all duration-300 text-lg ${open ? "rotate-180 text-accent" : "group-hover:text-accent"}`}
          aria-hidden="true"
        >
          ⌄
        </span>
      </button>

      {/* Collapsible offerings */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="px-6 pb-6 space-y-3 border-t border-divider-soft pt-4">
          {serviceCategory.offerings.map((offering, index) => (
            <li key={index} className="flex items-start">
              <span className="text-accent mr-2.5 mt-0.5 text-sm">→</span>
              <span className="text-base text-foreground leading-snug">{offering}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
