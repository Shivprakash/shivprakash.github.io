import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Portfolio } from "@/data/portfolio";

export function PortfolioEntry({ portfolio }: { portfolio: Portfolio }) {
  return (
    <div className="group h-full p-6 rounded-2xl border border-divider-soft bg-surface/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:bg-surface hover:border-accent/50 flex flex-col">
      {portfolio.imageUrl && (
        <div className="w-full mb-5 relative overflow-hidden rounded-lg">
          <Image
            src={portfolio.imageUrl}
            alt={portfolio.title}
            width={400}
            height={225}
            className="rounded-lg object-cover w-full h-auto border border-divider transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-heading font-bold mb-2.5 text-foreground group-hover:text-accent transition-colors duration-500">
          {portfolio.title}
        </h3>

        <div 
          className="text-base text-muted leading-relaxed mb-6 mt-1 transition-colors duration-500 group-hover:text-foreground space-y-2.5 [&>strong]:text-foreground [&>strong]:font-medium"
          dangerouslySetInnerHTML={{ __html: portfolio.description }}
        />

        {portfolio.technologies && portfolio.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {portfolio.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-background text-muted text-xs rounded-md border border-divider-soft transition-colors duration-500 group-hover:border-accent/30 group-hover:text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links row */}
        {(portfolio.projectUrl || portfolio.codeUrl) && (
          <div className="flex gap-7 mt-auto pt-4 border-t border-divider-soft">
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
  );
}
