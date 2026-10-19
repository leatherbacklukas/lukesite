# AGENTS.md

This file contains persistent instructions for AI coding agents working on this website.

Read this file and the files in `/docs` before making architectural or structural changes.

## Project

This is the personal portfolio website of Lukas Tannenbaum.

It is a relatively small, primarily static website intended to present Lukas's professional, technical, creative, performance, and volunteer work.

Expected scale:

- Approximately 10–50 portfolio or experience items
- Mostly text
- A modest number of images
- Occasional embedded or hosted video
- No user accounts
- No application dashboard
- No large-scale content system
- No need to optimize for thousands of records

Do not over-engineer this project.

---

# Core Technology

Use:

- Astro
- TypeScript
- Tailwind CSS
- Markdown / MDX
- Astro Content Collections
- pnpm
- Git
- GitHub
- Cloudflare Workers for static deployment

Approved packages for this stack:

- `astro`, `@astrojs/mdx`
- `tailwindcss`, `@tailwindcss/vite`, `@tailwindcss/typography` (for Markdown body styling)
- `typescript`, `@astrojs/check` (dev, for `pnpm check`)

Tooling: Node.js LTS and pnpm (installed with `npm install -g pnpm`; `corepack enable` needs admin rights on Windows).

Keep `typescript` on 6.x until `astro check` supports TypeScript 7.

pnpm blocks dependency install scripts by default. Allowed ones are listed under `allowBuilds` in `pnpm-workspace.yaml`; only add to it when a package genuinely needs its script (currently just `esbuild`).

Verify changes with `pnpm check` and `pnpm build`.

The site should be statically generated unless a concrete future requirement requires server-side behavior.

Do not add a backend simply to support ordinary portfolio functionality.

---

# Framework Rules

## Astro First

Prefer `.astro` components for:

- layouts
- navigation
- cards
- page sections
- project displays
- content presentation
- typography
- image layouts

Do not use React merely because it is familiar.

React may be introduced for an individual component when that component genuinely requires significant client-side state or interaction.

If React is added:

- keep it isolated
- hydrate it only where necessary
- do not convert surrounding Astro components into React without a reason

---

# Content Rules

Portfolio and experience content must not be hardcoded into page components when it represents reusable site content.

Use Astro Content Collections for structured content such as:

- projects
- professional work
- cinematics
- VFX
- virtual production
- gaming projects
- improv comedy
- speaking
- teaching
- volunteering
- community involvement

Pages should query content and render it through reusable components.

Adding a new portfolio item should generally require creating a content file, not editing application logic.

---

# Dependency Rules

Avoid unnecessary dependencies.

Before adding a new dependency, determine whether the problem can reasonably be solved with:

1. Astro
2. TypeScript
3. CSS / Tailwind
4. native browser functionality

Do not introduce major libraries for small UI conveniences.

Do not add without an explicit need:

- database systems
- Supabase
- Firebase
- Prisma
- headless CMS platforms
- Redux
- large component libraries
- large animation frameworks
- object-storage infrastructure
- custom image CDNs
- search infrastructure

If recommending one of these later, explain the actual requirement it solves.

---

# TypeScript

Use TypeScript wherever applicable.

Prefer:

- explicit interfaces for reusable data structures
- Astro Content Collection schemas for content validation
- clear component prop types
- narrow types over `any`

Avoid `any` unless interfacing with an API for which typing is genuinely unavailable.

---

# Styling

Use Tailwind CSS for the main styling system.

Custom CSS is acceptable when it makes an implementation significantly clearer, particularly for:

- typography
- animation
- unusual layouts
- reusable visual effects

Do not force every styling decision into a giant Tailwind class list.

Extract repeated UI patterns into components.

---

# Design Principles

This is a portfolio for someone whose work spans engineering and creative technology.

The site should feel:

- thoughtful
- technical
- creative
- mature
- personal
- cinematic when appropriate
- restrained rather than flashy

The work should remain the focus.

Avoid default AI-generated portfolio aesthetics.

In particular, avoid excessive:

- gradients
- glowing borders
- glassmorphism
- floating cards
- pill-shaped UI
- huge hero text
- animated backgrounds
- decorative dashboards
- random technology-logo clouds
- unnecessary scroll animation

Do not make the website look like a SaaS landing page.

---

# Motion

Motion should have a purpose.

Good uses include:

- revealing hierarchy
- indicating interaction
- transitions between UI states
- subtle page polish

Avoid animation simply because it is possible.

Respect `prefers-reduced-motion`.

---

# Responsive Design

Design intentionally for:

- desktop
- laptop
- tablet
- mobile

Do not simply allow the desktop layout to collapse until it technically fits.

Navigation, typography, media layouts, and spacing should have intentional mobile behavior.

---

# Accessibility

Use:

- semantic HTML
- sensible heading hierarchy
- keyboard-accessible controls
- visible focus states
- alt text where appropriate
- sufficient text contrast
- descriptive links

Interactive elements must not rely solely on hover.

---

# Performance

This is a small static website. Keep it lightweight.

Prefer:

- static generation
- optimized images
- responsive images
- lazy loading for non-critical media
- minimal client JavaScript
- system functionality over JavaScript libraries

Do not prematurely optimize around hypothetical traffic or content scale.

---

# Code Organization

Prefer a structure similar to:

```text
src/
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── content/
│   └── ui/
├── content/
│   ├── portfolio/      one folder per entry: <id>/index.md + images
│   └── experience/     one .md file per role
├── layouts/
├── lib/
│   ├── taxonomy.ts     controlled vocabularies: types, categories, kinds, areas
│   └── content.ts      collection queries (draft filtering, sorting)
├── pages/
├── styles/
└── content.config.ts
```

Pages should query collections through `src/lib/content.ts` so draft filtering and sorting stay consistent.

Component folders may evolve as the actual site develops.

Do not create abstractions before there are multiple concrete uses for them.

---

# Change Discipline

When implementing a feature:

1. Understand the existing structure first.
2. Make the smallest coherent change.
3. Avoid modifying unrelated files.
4. Reuse existing patterns.
5. Do not silently introduce a new architectural pattern.

Before making a substantial architectural change, explain:

- what is changing
- why it is needed
- what tradeoffs it introduces

---

# Development Philosophy

Prefer understandable code over clever code.

Prefer boring infrastructure over unnecessary infrastructure.

Prefer content-driven pages over hardcoded repeated markup.

Prefer incremental improvements over large rewrites.

Build the website we currently need rather than a hypothetical platform we might need someday.