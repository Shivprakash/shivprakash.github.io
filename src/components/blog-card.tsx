import Link from 'next/link';
import { BlogPost } from '@/data/blogs';
import { Calendar, Clock } from 'lucide-react';

export default function BlogCard({ post }: { post: BlogPost }) {
  // Format date nicely
  const dateObj = new Date(post.date);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Link href={`/blog/${post.slug}`} className="group block mb-7">
      <div className="bg-surface border border-divider hover:border-accent transition-colors duration-300 rounded-lg p-7">
        <div className="flex justify-between items-start mb-2.5">
          <h2 className="font-heading text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
            {post.title}
          </h2>
        </div>
        
        <div className="flex flex-wrap gap-5 items-center text-hint text-base mb-5">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <p className="text-muted leading-relaxed mb-5">
          {post.description}
        </p>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2.5">
            {post.tags.map(tag => (
              <span 
                key={tag} 
                className="text-sm px-3.5 py-1 bg-surface border border-divider-soft text-muted rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
