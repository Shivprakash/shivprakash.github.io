import { ArrowUpRight } from "lucide-react";
import { News } from "@/data/news";

export function NewsEntry({ news }: { news: News }) {
  return (
    <div className="flex flex-row gap-7">
      <div className="flex flex-col flex-1">
        <p className="text-sm text-hint mb-2.5">{news.date}</p>
        <h3 className="font-heading font-bold text-lg mb-2.5">
          {news.link ? (
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 hover:text-accent transition-colors duration-300"
            >
              {news.title}
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            news.title
          )}
        </h3>
        <p className="text-base text-muted leading-relaxed">{news.description}</p>
      </div>
    </div>
  );
}
