import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowUpRight,
  GraduationCap,
  Cpu,
  BarChart3,
  FlaskConical,
  LucideIcon,
} from "lucide-react";
import { AboutMe } from "@/data/aboutme";
import { rolePillarsData, PillarIconName } from "@/data/profile-pillars";

// Icon registry — maps data iconName strings to lucide components.
// Icons are a UI concern so this mapping lives in the component, not the data file.
const iconMap: Record<PillarIconName, LucideIcon> = {
  Cpu,
  FlaskConical,
  BarChart3,
};

interface ProfileSectionProps {
  aboutMe: AboutMe;
}

export function ProfileSection({ aboutMe }: ProfileSectionProps) {
  if (!aboutMe) {
    return null;
  }

  return (
    <div className="md:sticky top-14 flex flex-col gap-5 md:space-y-6">

      {/* Photo — centred on mobile, left-aligned on desktop */}
      {aboutMe.imageUrl && (
        <div className="w-full flex-shrink-0 flex justify-center md:block">
          <div className="relative w-[55%] md:w-[65%] aspect-[3/4]">
            <Image
              src={aboutMe.imageUrl}
              alt={aboutMe.name}
              fill
              priority
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="w-full">

        {/* Name — centred on mobile, left-aligned on desktop */}
        <div className="mb-1 text-center md:text-left">
          <h1 className="font-heading text-[2.5rem] leading-tight font-bold tracking-tight text-foreground">
            {aboutMe.name}
          </h1>
          {aboutMe.altName && (
            <p className="text-muted text-base mt-0.5 tracking-wide">
              {aboutMe.altName}
            </p>
          )}
        </div>

        {/* Divider — full width, Sand Dune */}
        <div className="h-0.5 rounded-full my-3.5 w-full bg-divider" />

        {/* Role pillars — data-driven from src/data/profile-pillars.ts */}
        <div className="flex flex-col gap-2.5 mb-6">
          {rolePillarsData.map((pillar) => {
            const Icon = iconMap[pillar.iconName];
            return (
              <div
                key={pillar.label}
                className={`group flex items-start gap-3 px-3.5 py-3 rounded-lg border ${pillar.bgClass} ${pillar.borderClass} transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-surface hover:border-accent/50`}
              >
                <span className={`mt-0.5 flex-shrink-0 ${pillar.textClass}`}>
                  <Icon size={16} strokeWidth={2.2} />
                </span>
                <div className="min-w-0">
                  <p className={`text-[14px] font-semibold uppercase tracking-widest leading-none mb-1 ${pillar.textClass}`}>
                    {pillar.label}
                  </p>
                  <p className="text-[13px] leading-snug font-medium tracking-wide font-serif italic text-muted">
                    {pillar.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notebook / CV / Blog quick links */}
        {(aboutMe.notesUrl || aboutMe.cvUrl || aboutMe.blogUrl) && (
          <div className="flex gap-5 mb-6">
            {aboutMe.notesUrl && (
              <Link
                href={aboutMe.notesUrl}
                className="group inline-flex items-center gap-2 text-[14px] font-semibold text-muted hover:text-foreground transition-colors duration-300 uppercase tracking-widest"
              >
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
                Notebook
              </Link>
            )}
            {aboutMe.cvUrl && (
              <a
                href={aboutMe.cvUrl}
                className="group inline-flex items-center gap-2 text-[14px] font-semibold text-muted hover:text-foreground transition-colors duration-300 uppercase tracking-widest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
                CV
              </a>
            )}
            {aboutMe.blogUrl && (
              <a
                href={aboutMe.blogUrl}
                className="group inline-flex items-center gap-2 text-[14px] font-semibold text-muted hover:text-foreground transition-colors duration-300 uppercase tracking-widest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
                Blog
              </a>
            )}
          </div>
        )}

        {/* Social / contact links */}
        <div className="flex flex-col gap-2.5">
          <a
            href={`mailto:${aboutMe.email}`}
            className="inline-flex items-center gap-2.5 text-sm text-muted hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={15} strokeWidth={2} />
            <span>{aboutMe.email}</span>
          </a>

          {aboutMe.googleScholarUrl && (
            <a
              href={aboutMe.googleScholarUrl}
              className="inline-flex items-center gap-2.5 text-sm text-muted hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GraduationCap size={15} strokeWidth={2} />
              <span>Google Scholar</span>
            </a>
          )}

          {aboutMe.twitterUsername && (
            <a
              href={`https://twitter.com/${aboutMe.twitterUsername}`}
              className="inline-flex items-center gap-2.5 text-sm text-muted hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={15} strokeWidth={2} />
              <span>@{aboutMe.twitterUsername}</span>
            </a>
          )}

          {aboutMe.githubUsername && (
            <a
              href={`https://github.com/${aboutMe.githubUsername}`}
              className="inline-flex items-center gap-2.5 text-sm text-muted hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={15} strokeWidth={2} />
              <span>github.com/{aboutMe.githubUsername}</span>
            </a>
          )}

          {aboutMe.linkedinUsername && (
            <a
              href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
              className="inline-flex items-center gap-2.5 text-sm text-muted hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={15} strokeWidth={2} />
              <span>linkedin.com/in/{aboutMe.linkedinUsername}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
