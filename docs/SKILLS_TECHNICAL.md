# Technical Skills for Development & Verification

> **Purpose**: Guidelines for coding, building, and verifying changes within this repository to ensure technical excellence and consistency.

## 1. Coding Skills
### Next.js 15 & React 19 Patterns
- **Server-First Mindset**: Use React Server Components (RSC) by default (no `"use client"` at the top). Only use Client Components for interactivity (state, effects, event listeners).
- **Component Anatomy**: Place reusable UI in `src/components/` and page-specific logic in `src/app/`.
- **Type Safety**: Define interfaces for all data structures (see `src/data/blogs.ts` as a reference). Avoid `any`.

### Data Fetching & Content
- **Utility Logic**: Keep file-system operations and data parsing in `src/lib/`.
- **Slug Management**: Ensure blog slugs match filename conventions exactly to avoid 404s during static generation.

---

## 2. Build Skills
### Production Builds
- **Static Generation Check**: Always run `npm run build` to ensure all dynamic routes (like `/blog/[slug]`) can be pre-rendered correctly.
- **Linting**: Ensure `npm run lint` passes without warnings. We use ESLint 9 and Prettier for code consistency.

---

## 3. Verification & Testing Skills
### Manual Verification Checklist
- **Responsiveness**: Verify layouts on mobile (375px), tablet (768px), and desktop (1024px+).
- **Hydration Errors**: Check the browser console for "Hydration failed" warnings, which occur when server and client HTML mismatch.
- **Network Performance**: Use the Network tab to ensure images are being served in optimized formats (WebP/AVIF).

### Automated Testing (Recommended)
- **Unit Testing**: Add Vitest or Jest to test utilities in `src/lib/`. Specifically, test:
  - `getBlogBySlug`: Returns correct frontmatter and content.
  - `getAllBlogs`: Correctly filters and sorts posts.
- **End-to-End**: Use Playwright for critical paths like navigation and blog post rendering.

---

## 4. Debugging Skills
- **Server Logs**: Check terminal output for errors during data fetching in Server Components.
- **Client Logs**: Use browser dev tools to inspect state transitions in interactive components (like `profile-section.tsx`).
