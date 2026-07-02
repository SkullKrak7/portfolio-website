@AGENTS.md

# Portfolio Website — Comprehensive Project Manual

## 1. Project Overview & Architecture
This is a modern, **statically-exported** personal portfolio for Sai Karthik Kagolanu. It acts as an interactive resume showcasing backend systems, MLOps, AI agents, and applied ML.

### Core Stack
- **Framework:** Next.js 16.2.10 (App Router, **`output: 'export'`**)
- **UI:** React 19.2, Tailwind CSS v4 (CSS-first, `@import "tailwindcss"`)
- **Language:** TypeScript 5.9 (strict mode)
- **Testing:** Vitest (unit/coverage), Playwright (E2E)
- **Deployment:** Vercel (static deployment)

### The "Static Export" Constraint (CRITICAL)
Because `next.config.js` sets `output: 'export'`, the site builds to pure HTML/JS/CSS with **no Node server at runtime**:
- **NO API Routes, Server Actions, or Middleware.**
- **NO Next.js Image Optimization:** Images must use `unoptimized: true` (configured globally).
- **Pre-generated Dynamic Routes:** The `app/projects/[slug]/page.tsx` route requires `generateStaticParams()` to fetch every valid slug at build time.
- **Client-Side Forms:** The contact form cannot use Server Actions; it relies on `fetch()` to an external service (Formspree).

---

## 2. Content & Data Model

### The Source of Truth: `lib/projects.ts`
All portfolio project data lives strictly in the typed `projects` array within `lib/projects.ts`. **Never hardcode project data directly into page components.**

#### `Project` Interface:
- `slug` (string) - Used for URL generation (`/projects/<slug>`).
- `title`, `description`, `longDescription` (strings).
- `tags` (string array) - e.g., `['Python', 'FastAPI', 'Kafka']`.
- `category` ('ML' | 'Backend' | 'Full-Stack' | 'Hackathon').
- `github`, `demo`, `image` (optional).
- `images` (optional array for the Image Carousel).
- `stats` (optional object: `loc`, `files`, `coverage`, `accuracy`).
- `highlights`, `techStack` (optional string arrays).
- `featured` (optional boolean) - Used to pin top projects to the Homepage.

---

## 3. Page Implementations

### Homepage (`app/page.tsx`)
- **Hero Section:** Introduction, role ("ML Engineer & Full-Stack Developer"), and dual CTA buttons (View Projects, Download CV).
- **Stats Grid:** Highlights project breadth, production impact, and hackathon wins.
- **Featured Projects:** Displays selected featured projects by mapping over `featuredProjects` from `lib/projects.ts` (driven dynamically by `featured: true`).

### About Page (`app/about/page.tsx`)
- **My Journey (Timeline):** A vertical roadmap detailing professional and academic milestones (e.g., Fuse Energy, MSc Robotics, Double Hackathon Winner). Built with an absolute-positioned left border line and custom icons.
- **Technical Skills Grid:** A 4-column compact grid categorized by "ML & Data", "Backend & Engineering", "Infrastructure & DevOps", and "Frontend".

### Projects Listing (`app/projects/page.tsx`)
- A simple grid layout that maps over the entire `projects` array from `lib/projects.ts`, utilizing the `ProjectCard` component. (Note: Client-side category filtering was completely removed for simplicity).

### Project Detail Page (`app/projects/[slug]/page.tsx`)
- Reads the `slug` param.
- **`generateStaticParams()`**: Iterates through `projects` to generate all static paths at build time.
- Displays comprehensive details: main image, `ImageCarousel` (if multiple images exist), GitHub/Demo links, tech stack badges, key highlights, and statistical metrics.

### Contact Page (`app/contact/page.tsx`)
- Displays direct email and phone contact info, including a "Copy to Clipboard" utility with toast notifications.
- **`ContactForm` Component:** Extracted to `components/ContactForm.tsx` to comply with Next 16's strict rule against exporting non-page variables from page files. Handles state ('idle', 'sending', 'success', 'error') and sends data to Formspree.

---

## 4. Shared Components (`components/`)
- **`Header.tsx` & `Footer.tsx`:** Standard layout elements. Header includes the Theme Toggle for dark/light mode.
- **`ProjectCard.tsx`:** Reusable card component for project lists.
- **`ImageCarousel.tsx`:** A horizontally scrollable row of images (relies on `.scrollbar-hide` utility class) with snap-scrolling capabilities.
- **`Toast.tsx`:** A bottom-right notification pop-up used by the Contact form.
- **`ScrollToTop.tsx`:** A floating button that appears after scrolling down.
- **`WebVitals.tsx`:** Hooks into `useReportWebVitals` for performance monitoring.

---

## 5. Design & Styling (Tailwind v4)
- **CSS-First Architecture:** Tailwind v4 is imported via `@import "tailwindcss"` in `app/globals.css`.
- **CSS Variables:** The site uses custom CSS variables on `:root` and `.dark` selectors for theming (e.g., `--bg-page`, `--text-primary`, `--accent`).
- **DO NOT hardcode hex colors** (like `text-blue-500` or `bg-gray-900`). Always use style attributes mapping to CSS variables (e.g., `style={{ color: 'var(--accent)' }}`) or utility classes explicitly mapped in the global CSS.

---

## 6. Testing & CI Strategy

### Unit Tests (Vitest + React Testing Library)
- Found in `__tests__/`.
- Unit tests are maintained in `__tests__/` and should remain green before deployment.
- Run with `npm run test` or `npm run test:coverage`.
- **Mocking:** `fetch` is mocked globally in `contact.test.tsx`; `next/web-vitals` is mocked in `WebVitals.test.tsx`.

### E2E Tests (Playwright)
- Found in `e2e/portfolio.spec.ts`.
- Validates critical paths: homepage render, navigation, project detail load, dark mode toggle, and keyboard accessibility.
- Run with `npm run test:e2e`.

### Next.js Linting Quirk (Windows)
- In this specific environment (Next 16 + Windows), `next lint` fails by misinterpreting "lint" as a folder path.
- The `ci` script in `package.json` was updated to bypass this: `"ci": "npm run type-check && npm run test:coverage && npm run build"`.

### Security & Vercel Configuration
- Defined in `vercel.json`.
- Implements strict security headers (`X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, etc.).
- Keeps routing clean and secure for static deployments.

---

## 7. Developer Workflow & Rules

1. **Changing Content:** To add a project, edit `lib/projects.ts`. To change resume details, edit `app/page.tsx` and `app/about/page.tsx`.
2. **Pre-commit Checklist:** Always run `npm run ci` to ensure types, tests, and static builds are perfectly green before deploying.
3. **Adding Pages:** Any new dynamic route MUST implement `generateStaticParams()`.
4. **Environment:** No secrets in the codebase. Formspree URLs are safe for client-side forms.
