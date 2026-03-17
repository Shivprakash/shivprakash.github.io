---
title: "Hello World: Launching My Tech Notebook"
date: "2026-04-07"
tags: ["Architecture", "Updates"]
description: "Welcome to my tech notebook. Here I'll be sharing system architecture designs, notes on AI and machine learning, and my thoughts on distributed systems."
readTime: 3
featured: true
published: true
---

Welcome to my new digital notebook! I decided to build a custom Markdown-based blogging system so that I can directly share my engineering notes and system architectures right from my repository.

Here is a quick overview of how this blog system is architected:

```mermaid
graph TD
    A[Markdown Files] -->|gray-matter| B(blog-utils.ts)
    B -->|getBlogBySlug| C{Next.js App Router}
    C -->|Params: Slug| D[Blog Post Page]
    D --> E((React Markdown Renderer))
    E -->|rehype-raw| F[HTML Output]
    E -->|Mermaid plugin| G[SVG Diagrams]
    
    style A fill:#F5EFF6,stroke:#8D6B94,stroke-width:2px
    style B fill:#EEF0F2,stroke:#B0BBBF,stroke-width:2px
    style C fill:#EFF4EE,stroke:#CADBC8,stroke-width:2px
```

## Why a custom solution?

Building it directly into `Next.js` provides several advantages:
1. **No CMS overhead:** I just commit markdown files.
2. **Version control:** Revisions are tracked alongside code.
3. **Mermaid support:** As you can see above, I can natively draw diagrams.

### Code Snippet Example

```typescript
export function getWordFrequency(blogs: BlogPost[]) {
  // calculates how often technical terms appear across all my text!
  return Object.entries(wordCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 50);
}
```

Looking forward to writing more!
