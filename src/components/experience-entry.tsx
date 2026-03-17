import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="grid grid-cols-4 gap-x-2.5">
      <span className="text-sm text-hint mt-1">{experience.date}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-lg font-heading font-bold">
          {experience.title} —{" "}
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              className="hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          ) : (
            experience.company
          )}
        </h3>
        {experience.advisor && (
          <p className="text-base text-muted leading-relaxed font-serif italic mt-2.5">
            Advisor: {experience.advisor}
          </p>
        )}
        {experience.manager && (
          <p className="text-base text-muted leading-relaxed font-serif italic mt-2.5">
            Manager: {experience.manager}
          </p>
        )}
        {experience.description && (
          <div 
            className="text-base text-muted leading-relaxed mt-2.5 space-y-2.5 [&>strong]:text-foreground [&>strong]:font-medium"
            dangerouslySetInnerHTML={{ __html: experience.description }}
          />
        )}
      </div>
    </div>
  );
}
