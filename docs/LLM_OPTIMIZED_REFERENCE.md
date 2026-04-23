# LLM Optimized Reference

> **Purpose**: A condensed, high-signal reference for AI agents to quickly understand the project without reading thousands of lines of code. Keep this under 1500 tokens.

## System Architecture
- **Frontend (Static Generation)**: Next.js 15 (App Router) serving static assets and pre-rendered pages.
- **Content Management**: Local markdown files processed with `gray-matter`, `remark-gfm`, and `rehype-raw`.

## Key Technologies
- **Language**: TypeScript
- **Framework**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS
- **Markdown parsing**: react-markdown, gray-matter

## Directory Map
- `src/app/`: Next.js App Router entry points (`page.tsx`, `layout.tsx`).
- `src/components/`: Reusable UI components.
- `src/content/`: Markdown files for articles and posts.
- `src/data/`: JSON/TypeScript static data files.
- `src/temp/`: Temporary assets (CV, PDFs, etc.).
- `src/lib/`: Pure helper functions (e.g., `blog-utils.ts` for parsing markdown).
- `public/`: Static public assets.
- `docs/`: AI agent documentation and guidelines.
  - `SKILLS_TECHNICAL.md`: Coding, building, and verification rules.
  - `SKILLS_PRODUCTION_GRADE.md`: SEO, A11y, and performance best practices.

## Common Patterns

### 1. Data Fetching (Content)
Local Markdown files are parsed server-side using utilities from `src/lib/blog-utils.ts`. Use standard `fs` and `gray-matter` to fetch content. Since this is an App Router application, data fetching can occur directly inside Server Components without `getStaticProps`.

### 2. Styling
All styling is handled via Tailwind CSS utility classes directly on elements. Avoid custom CSS files or inline styles unless required for dynamic values.

### 3. Server vs Client Components
By default, components in `src/app/` are React Server Components (RSC). Use the `"use client"` directive only when hooks (`useState`, `useEffect`) or browser APIs are needed.

## What to Avoid
- Do not mutate state directly.
- Do not add new external dependencies without permission.
- Do not write inline CSS unless unavoidable; use the existing styling framework.
