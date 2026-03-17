// Blog post data interface.
// content is only populated in single-post view (getBlogBySlug).
// In listing views, content is empty string to avoid loading full MD for every post.

export interface BlogPost {
  slug: string;
  title: string;
  date: string;          // ISO format "YYYY-MM-DD"
  tags: string[];
  description: string;
  coverImage?: string;   // path under /public, e.g. "/blog-images/post.jpg"
  readTime: number;      // minutes (auto-calculated if not in frontmatter)
  featured?: boolean;    // true = appears in "Top Reads"
  published: boolean;    // false = hidden from public listing; set in frontmatter
  content: string;       // raw markdown — empty for listing views
}
