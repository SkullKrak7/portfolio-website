# Agent Instructions

<!--
AGENTS.md → HOW the agent should think and behave (tool-agnostic).
CLAUDE.md  → WHAT this project is and its specific rules.
-->

## Before writing a single line of code

1. Read `CLAUDE.md` in full — stack (Next.js 16 / React 19 / Tailwind v4), structure, rules.
2. Read every file you plan to touch. Project data lives in `lib/projects.ts` — never duplicate it.
3. Check `e2e/` (Playwright) and the Vitest setup for test patterns before writing tests.
4. If a change spans more than 3 files or touches shared layout/data, state your plan in 2–3 sentences and wait for approval.

## How to approach a task

**Next.js 16 + React 19.** APIs and conventions may differ from older training data — App Router, async `params`/`searchParams`, Tailwind v4 (CSS-first config). Verify before assuming an older API.

**Content is data-driven.** Projects render from the typed `projects` array in `lib/projects.ts` (`Project` interface + `filterProjects`). To add/edit a project, update that file — don't hardcode project markup into pages.

**Match the existing component patterns** in `components/` (Header, Footer, ProjectCard, etc.) and the design tokens in `app/globals.css`.

**Verify before declaring done.** Run `npm run ci` (type-check + lint + coverage + build). For UI, `npm run dev` and click through the affected pages. If you can't run it, say so explicitly.

## Hard limits — never do these without explicit instruction

- Do not commit or push, open PRs, or merge branches
- Do not deploy (`deploy.sh` / Vercel) without explicit approval
- Do not delete `public/` assets (resume.pdf, project images) without being asked
- Do not hardcode secrets

## Quality bar — every change must clear this

- `npm run ci` clean: `tsc --noEmit`, `next lint`, Vitest coverage, `next build`
- TypeScript strict: no `any` without a justifying comment
- Bundle stays under the size-limit budget (200 KB on `.next/static/**/*.js`)
- Accessibility preserved (semantic HTML; a11y addons/axe are wired in)
- No unused imports or dead code; comments explain WHY, never WHAT
