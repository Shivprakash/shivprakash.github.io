"use client";
import type { ComponentPropsWithoutRef } from "react";

import { useEffect, useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import mermaid from "mermaid";

const MermaidRenderer = ({ chart }: { chart: string }) => {
  const [svg, setSvg] = useState<string>("");
  const id = useRef(`mermaid-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false, theme: "default" });
    const renderChart = async () => {
      try {
        const { svg: renderedSvg } = await mermaid.render(id.current, chart);
        setSvg(renderedSvg);
      } catch (error) {
        console.error("Mermaid parsing error", error);
        setSvg(`<div class="text-red-500 bg-red-50 p-5 border border-red-200">Error rendering Mermaid chart</div>`);
      }
    };
    renderChart();
  }, [chart]);

  return <div className="flex justify-center my-10 w-full overflow-x-auto" dangerouslySetInnerHTML={{ __html: svg }} />;
};

export default function BlogRenderer({ content }: { content: string }) {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({...props}) => <h1 className="font-heading text-4xl font-bold mt-10 mb-5 text-foreground" {...props} />,
          h2: ({...props}) => <h2 className="font-heading text-3xl font-bold mt-10 mb-5 text-foreground border-b border-divider pb-2.5" {...props} />,
          h3: ({...props}) => <h3 className="font-heading text-2xl font-bold mt-7 mb-3.5 text-foreground" {...props} />,
          p: ({...props}) => <p className="mb-5 text-muted leading-relaxed" {...props} />,
          a: ({...props}) => <a className="text-accent hover:text-accent-hover underline" {...props} />,
          ul: ({...props}) => <ul className="list-disc list-outside pl-7 mb-5 text-muted" {...props} />,
          ol: ({...props}) => <ol className="list-decimal list-outside pl-7 mb-5 text-muted" {...props} />,
          li: ({...props}) => <li className="mb-1" {...props} />,
          blockquote: ({...props}) => <blockquote className="border-l-4 border-accent pl-5 italic text-hint my-7" {...props} />,
          code({ className, children, ...props }: ComponentPropsWithoutRef<'code'>) {
            const inline = !className || !className.includes('language-');
            const match = /language-(\w+)/.exec(className || "");
            const language = match ? match[1] : "";
            
            if (!inline && language === "mermaid") {
              return <MermaidRenderer chart={String(children).replace(/\n$/, "")} />;
            }
            return !inline ? (
              <pre className="p-5 rounded-lg overflow-x-auto my-7 text-base bg-surface border border-divider">
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            ) : (
              <code className="bg-surface px-2 py-0.5 rounded text-base text-accent border border-divider" {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
