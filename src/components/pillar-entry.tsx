"use client";

import { useState } from "react";
import { RolePillar, PillarIconName } from "@/data/profile-pillars";
import { Cpu, FlaskConical, BarChart3, LucideIcon } from "lucide-react";

const iconMap: Record<PillarIconName, LucideIcon> = {
  Cpu,
  FlaskConical,
  BarChart3,
};

interface PillarEntryProps {
  pillar: RolePillar;
}

export function PillarEntry({ pillar }: PillarEntryProps) {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[pillar.iconName];

  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className={`group w-full flex flex-col gap-0.5 px-3.5 py-3 rounded-lg border transition-all duration-500 overflow-hidden text-left
        ${pillar.bgClass} ${pillar.borderClass} 
        ${open ? "shadow-md bg-surface border-accent/60" : "hover:-translate-y-1 hover:shadow-md hover:bg-surface hover:border-accent/50"}`}
    >
      <div className="flex items-start gap-3 w-full">
        <span className={`mt-0.5 flex-shrink-0 ${pillar.textClass}`}>
          <Icon size={16} strokeWidth={2.2} />
        </span>
        <div className="flex-1 min-w-0">
          <p className={`text-[14px] font-semibold uppercase tracking-widest leading-none mt-1 ${pillar.textClass}`}>
            {pillar.label}
          </p>
        </div>
        <span
          className={`flex-shrink-0 text-hint transition-all duration-300 text-sm mt-0.5 ${
            open ? "rotate-180 text-accent" : "group-hover:text-accent"
          }`}
        >
          ⌄
        </span>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-32 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[13px] leading-snug font-medium tracking-wide font-serif italic text-muted pl-7">
          {pillar.sub}
        </p>
      </div>
    </button>
  );
}
