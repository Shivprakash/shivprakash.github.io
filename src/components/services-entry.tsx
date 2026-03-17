import { ServiceCategory } from "@/data/services";

export function ServicesEntry({ serviceCategory }: { serviceCategory: ServiceCategory }) {
  return (
    <div className="group h-full p-6 rounded-2xl border border-divider-soft bg-surface/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:bg-surface hover:border-accent/50 flex flex-col">
      <h3 className="text-lg mb-2.5 font-heading font-bold text-foreground group-hover:text-accent transition-colors duration-500">{serviceCategory.title}</h3>
      <p className="text-base text-muted mb-5 leading-relaxed group-hover:text-foreground transition-colors duration-500">{serviceCategory.description}</p>
      <ul className="space-y-4">
        {serviceCategory.offerings.map((offering, index) => (
          <li key={index} className="flex items-start">
            <span className="text-hint mr-2.5 group-hover:text-accent transition-colors duration-500">→</span>
            <span className="text-base text-muted group-hover:text-foreground transition-colors duration-500">{offering}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
