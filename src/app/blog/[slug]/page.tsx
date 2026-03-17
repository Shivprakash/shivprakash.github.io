import { getBlogBySlug, getBlogSlugs } from "@/lib/blog-utils";
import BlogRenderer from "@/components/blog-renderer";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

// Next.js dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getBlogBySlug(slug);
    return {
      title: `${post.title} | Shiv Prakash`,
      description: post.description,
    };
  } catch (e) {
    return {
      title: "Post Not Found",
    };
  }
}

// Generate static params for all blogs
export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx?$/, ""),
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let post;
  
  try {
    post = getBlogBySlug(slug);
  } catch (error) {
    return (
      <div className="max-w-screen-lg mx-auto px-10 py-28 text-center">
        <h1 className="text-3xl font-bold font-heading text-foreground mb-5">Post not found</h1>
        <Link href="/blog" className="text-accent hover:underline">Return to blog list</Link>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <article className="max-w-screen-lg mx-auto px-10 py-28 min-h-screen">
      <Link 
        href="/blog" 
        className="inline-flex items-center gap-2.5 text-text-muted hover:text-accent transition-colors text-base uppercase tracking-widest font-heading mb-14"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Tech Notebook
      </Link>

      <div className="mb-14">
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2.5 mb-7">
            {post.tags.map(tag => (
              <span 
                key={tag} 
                className="text-sm px-3.5 py-1 bg-divider-soft text-text-muted rounded-full uppercase tracking-wider font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-7 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap gap-7 items-center text-text-hint text-base border-y border-divider py-5">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock className="w-5 h-5" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </div>

      <BlogRenderer content={post.content} />
    </article>
  );
}
