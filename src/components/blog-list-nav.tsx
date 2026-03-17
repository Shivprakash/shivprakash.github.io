"use client";

import { useState } from "react";
import { BlogPost } from "@/data/blogs";
import BlogCard from "./blog-card";

export default function BlogListNav({ blogs }: { blogs: BlogPost[] }) {
  const [tab, setTab] = useState<"latest" | "featured">("latest");

  const displayedBlogs = tab === "latest" 
    ? blogs 
    : blogs.filter(b => b.featured);

  return (
    <div>
      <div className="flex space-x-6 border-b border-divider mb-10">
        <button
          onClick={() => setTab("latest")}
          className={`pb-3.5 font-heading font-medium transition-colors ${
            tab === "latest" 
              ? "text-accent border-b-2 border-accent" 
              : "text-muted hover:text-foreground"
          }`}
        >
          Latest Posts
        </button>
        <button
          onClick={() => setTab("featured")}
          className={`pb-3.5 font-heading font-medium transition-colors ${
            tab === "featured" 
              ? "text-accent border-b-2 border-accent" 
              : "text-muted hover:text-foreground"
          }`}
        >
          Top Reads
        </button>
      </div>

      <div className="flex flex-col">
        {displayedBlogs.length > 0 ? (
          displayedBlogs.map(blog => (
            <BlogCard key={blog.slug} post={blog} />
          ))
        ) : (
          <p className="text-muted italic py-10 text-center">
            No posts found in this category.
          </p>
        )}
      </div>
    </div>
  );
}
