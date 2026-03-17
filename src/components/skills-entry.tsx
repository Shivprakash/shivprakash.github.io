import { SkillCategory } from "@/data/skills";

export function SkillsEntry({ skillCategory }: { skillCategory: SkillCategory }) {
  return (
    <div>
      <h3 className="text-lg mb-3.5 font-heading font-bold text-foreground">{skillCategory.category}</h3>
      <div className="flex flex-wrap gap-2.5">
        {skillCategory.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3.5 py-1 bg-surface text-muted text-base rounded-md border border-divider-soft"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
