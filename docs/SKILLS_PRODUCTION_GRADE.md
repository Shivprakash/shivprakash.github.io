# Production-Grade Website Skills

> **Purpose**: Best practices to ensure the website is performant, accessible, SEO-optimized, and visually premium.

## 1. Aesthetic Excellence
- **Typography Pairing**: Adhere to the established font system:
  - **Headers**: Montserrat (variable `--font-montserrat`).
  - **Body Text**: Lora (variable `--font-lora`).
  - **Secondary/UI**: Geist Sans or Hind Madurai.
- **Modern UI Patterns**: Use Tailwind utility classes for consistent spacing, rounded corners, and subtle shadows. Follow the "Research Website" aesthetic—clean, high-contrast, and academic yet modern.

## 2. Performance Optimization
- **Image Handling**: Always use the `next/image` component. Ensure remote patterns in `next.config.ts` are updated if adding new image sources (e.g., Unsplash).
- **Font Optimization**: Use `next/font/google` (already configured in `layout.tsx`) to prevent Layout Shift (CLS) and ensure zero-latency font loading.
- **Payload Efficiency**: Avoid importing large libraries on the client side. Prefer lightweight alternatives for animations or diagrams.

## 3. SEO & Discoverability
- **Metadata API**: Every new page must export a `Metadata` object.
  - `title`: Descriptive and unique.
  - `description`: Compelling summary under 160 characters.
- **Semantic HTML**: Use `<article>`, `<section>`, `<nav>`, and proper `<h1>`-`<h6>` hierarchy to help search engines understand page structure.

## 4. Accessibility (A11y)
- **ARIA Labels**: Add `aria-label` to interactive elements (buttons, links) that don't have visible text.
- **Keyboard Navigation**: Ensure all interactive elements are focusable and have a visible `:focus` state.
- **Color Contrast**: Maintain a high contrast ratio between text and background to ensure readability for visually impaired users.

## 5. Error Resilience
- **Error Boundaries**: Wrap dynamic sections in React Error Boundaries to prevent a single component failure from crashing the entire page.
- **Safe Data Access**: Always check for existence before accessing properties of data fetched from Markdown or JSON files (e.g., `data.title || ''`).
- **Fallbacks**: Provide loading skeletons or "Not Found" states for dynamic content.
