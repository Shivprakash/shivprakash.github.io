import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/data/blogs';

const blogsDirectory = path.join(process.cwd(), 'src/content/blogs');

export function getBlogSlugs() {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }
  return fs.readdirSync(blogsDirectory).filter(file => file.endsWith('.md') || file.endsWith('.mdx'));
}

export function getBlogBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const fullPath = path.join(blogsDirectory, `${realSlug}.md`); // Assuming .md for now
  
  let fileContents = '';
  if (fs.existsSync(fullPath)) {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } else {
    // try mdx
    const mdxPath = path.join(blogsDirectory, `${realSlug}.mdx`);
    if (fs.existsSync(mdxPath)) {
      fileContents = fs.readFileSync(mdxPath, 'utf8');
    } else {
      throw new Error(`Blog post not found: ${slug}`);
    }
  }

  const { data, content } = matter(fileContents);

  // calculate read time based on 200 words per minute
  let readTime = data.readTime;
  if (!readTime) {
    const textContent = content.replace(/<\/?[^>]+(>|$)/g, ""); // basic HTML tag strip
    const words = textContent.trim().split(/\s+/).length;
    readTime = Math.ceil(words / 200);
  }

  return {
    slug: realSlug,
    title: data.title || '',
    date: data.date || '',
    tags: data.tags || [],
    description: data.description || '',
    coverImage: data.coverImage,
    readTime: readTime,
    featured: data.featured || false,
    published: data.published !== undefined ? data.published : true,
    content: content,
  };
}

export function getAllBlogs(): BlogPost[] {
  const slugs = getBlogSlugs();
  const blogs = slugs
    .map((slug) => getBlogBySlug(slug))
    // filter out unpublished
    .filter((post) => post.published)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  
  // Return blogs without content for listing efficiency
  return blogs.map(blog => ({...blog, content: ''}));
}

export function getWordFrequency(blogs: BlogPost[]): { text: string; value: number }[] {
  const wordCount: Record<string, number> = {};
  
  blogs.forEach(blog => {
    // For heatmap, we should probably pull the full content.
    // However, if we only pass in listings, content is empty. 
    // We should parse the actual files.
    const fullBlog = getBlogBySlug(blog.slug);
    const words = fullBlog.content
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .split(/\s+/);
      
    words.forEach(word => {
      // filtering out standard english stop words is usually a good idea
      if (word.length > 3) {
        wordCount[word] = (wordCount[word] || 0) + 1;
      }
    });
  });

  return Object.entries(wordCount)
    .map(([text, value]) => ({ text, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 50); // top 50 words
}
