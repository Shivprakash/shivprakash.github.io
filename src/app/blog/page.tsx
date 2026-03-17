import { getAllBlogs, getWordFrequency } from "@/lib/blog-utils";
import BlogListNav from "@/components/blog-list-nav";
import WordHeatmap from "@/components/word-heatmap";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Notebook | Shiv Prakash",
  description: "My thoughts on architecture, machine learning, and systems.",
};

export default function BlogIndexPage() {
  const allBlogs = getAllBlogs();
  const wordFrequency = getWordFrequency(allBlogs);

  return (
    <div className="max-w-screen-lg mx-auto px-10 py-28 min-h-screen">
      <div className="mb-14">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2.5 text-text-muted hover:text-accent transition-colors text-base uppercase tracking-widest font-heading mb-7"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Profile
        </Link>
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-5">
          Tech Notebook
        </h1>
        <p className="text-text-secondary font-serif text-xl italic">
          Essays, architectures, and engineering notes.
        </p>
      </div>

      <WordHeatmap words={wordFrequency} />
      
      <BlogListNav blogs={allBlogs} />
    </div>
  );
}
