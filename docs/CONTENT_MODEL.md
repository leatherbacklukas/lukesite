# Content Model

This document defines how portfolio content should be represented.

The goal is enough structure to make the website easy to maintain without creating a miniature CMS.

---

# Collections

There are two Astro Content Collections:

```text
src/content/portfolio/    discrete things that were made, performed, or presented
src/content/experience/   long-running roles, volunteer positions, and ongoing activities
```

This maps onto the content kinds in `SITE_SPEC.md`:

| Site spec kind     | Where it lives                          |
| ------------------ | --------------------------------------- |
| Projects           | `portfolio`                             |
| Experience         | `experience` with `kind: employment`    |
| Leadership/Service | `experience` with `kind: volunteer`     |
| Activities         | `experience` with `kind: activity`      |

Controlled vocabularies (types, categories, kinds, areas) are defined once in `src/lib/taxonomy.ts` and imported by the schemas in `src/content.config.ts`.

---

# Portfolio Collection

Each portfolio entry is a folder containing an `index.md` (or `index.mdx`) plus any images it uses:

```text
src/content/portfolio/
├── roll-for-reality/
│   ├── index.md
│   ├── thumbnail.jpg
│   └── stage.jpg
├── immersive-pavilion-2026/
│   └── index.md
└── example-improv-project/
    └── index.mdx
```

The folder name is the entry's ID and its URL: `roll-for-reality/` → `/work/roll-for-reality`.

There is no `slug` frontmatter field. Rename the folder to change the URL.

---

# Portfolio Schema

```ts
{
  title: string
  summary: string

  date: Date          // start or release date; used for sorting
  endDate?: Date      // for work that spans a period

  type: PortfolioType
  categories: Category[]   // at least one

  role?: string
  organization?: string

  featured?: boolean
  order?: number

  thumbnail?: ImageMetadata   // relative path, e.g. ./thumbnail.jpg
  heroImage?: ImageMetadata
  videos?: { url: string; title: string }[]   // YouTube URLs, shown as a grid

  technologies?: string[]

  links?: { label: string; url: string }[]
  credits?: { name: string; role?: string; url?: string }[]

  draft?: boolean
}
```

Dates are written as `YYYY-MM-DD` (or `YYYY-MM` / `YYYY` when that is all that is known). The displayed year is derived from `date`; there is no separate `year` field.

---

# Portfolio Types

`type` describes what something fundamentally is. Use a small controlled set:

```ts
type PortfolioType =
  | "project"      // something built or made
  | "production"   // a produced piece: film, cinematic, live production
  | "performance"  // a show or performance
  | "talk";        // a talk, panel, or workshop
```

Do not create dozens of types.

Disciplines such as teaching or volunteering are categories, not types. Long-running positions are `experience` entries, not portfolio entries.

---

# Categories

Categories describe the disciplines an item belongs to.

Controlled categories:

```ts
type Category =
  | "engineering"
  | "technical-art"
  | "cinematics-vfx"
  | "virtual-production"
  | "xr-immersive"
  | "gaming"
  | "creative-technology"
  | "improv"
  | "teaching"
  | "speaking"
  | "volunteering";
```

Unlike `type`, an item may have multiple categories.

Technologies such as Unreal Engine are not categories; they belong in `technologies`.

Example:

```yaml
type: production

categories:
  - virtual-production
  - xr-immersive
  - improv
  - creative-technology
```

This is intentional.

Many of the most interesting pieces on this website cross disciplines.

Do not force them into one bucket.

---

# Example Portfolio Entry

```md
---
title: "Roll for Reality"

summary: >
  A live improvised tabletop roleplaying performance combining
  performance, real-time virtual production, motion capture,
  and Unreal Engine.

date: 2026-01-01

type: production

categories:
  - virtual-production
  - creative-technology
  - improv

role: "Co-creator / Technical Contributor"

featured: true

technologies:
  - Unreal Engine
  - Motion Capture
  - MetaHuman

links:
  - label: "Project Page"
    url: "https://example.com"
---

## Overview

Explain the project in plain language.

## My Role

Explain exactly what Lukas contributed.

## Process

Describe the work where useful.

## Result

Describe the outcome.

## Credits

Optional prose credits can live here when a structured list is
insufficient.
```

---

# Frontmatter vs Body Content

Use frontmatter for information the website needs to:

- sort
- filter
- label
- preview
- build navigation
- generate metadata

Use Markdown/MDX body content for information meant primarily for humans to read.

Do not put large paragraphs into frontmatter.

---

# Featured Work

`featured: true` means the item is eligible to appear in prominent locations such as the homepage.

It does not guarantee placement.

Homepage components may select or order featured items.

Use `order` sparingly when manual ordering is necessary.

Do not create complicated scoring systems.

---

# Detail Pages

An entry gets a detail page at `/work/<id>` only if it has body content or videos.

An entry with frontmatter only still appears in listings (as a card or row) but does not link to an empty page.

This lets small items exist on the site without padding them out.

---

# Images

Images live in the entry's folder and are referenced with relative paths so Astro can optimize them:

```yaml
thumbnail: ./thumbnail.jpg
heroImage: ./stage.jpg
```

A portfolio item may have:

- `thumbnail`
- `heroImage`
- inline images in the content body

Not every entry needs all three.

Use one good image rather than forcing every item into a media-heavy template.

Portfolio entries without appropriate imagery should still look intentional.

The design must support text-led portfolio entries.

---

# Videos

Videos are hosted on YouTube, never committed to the repository. List them in frontmatter:

```yaml
videos:
  - url: https://www.youtube.com/watch?v=XXXXXXXXXXX
    title: Launch cinematic
  - url: https://youtu.be/YYYYYYYYYYY
    title: Behind the scenes
```

Any common YouTube URL form works (watch, `youtu.be`, shorts, embed); the build fails on a URL it can't read.

On the detail page the videos appear as a grid of thumbnails, in list order, above the body text. Clicking a thumbnail loads the player in place (from `youtube-nocookie.com`), so no YouTube player loads until someone asks for it. Without JavaScript the tile links to the video on YouTube.

The body text then describes the work across the whole set, rather than captioning each video.

---

# Technologies

`technologies` should communicate genuinely relevant tools.

Good example:

```yaml
technologies:
  - Unreal Engine
  - Python
  - OptiTrack
```

Avoid giant lists of every package or application touched during a project.

This is a portfolio, not automated résumé keyword extraction.

---

# Experience Collection

The Home page ("Selected Experience") and the About page both need the same role data, so it lives in its own collection.

Each entry is a single Markdown file:

```text
src/content/experience/
├── example-studio.md
└── example-conference-committee.md
```

```ts
{
  title: string          // the role, e.g. "Pipeline Engineer"
  organization: string
  kind: "employment" | "volunteer" | "activity"

  startDate: Date
  endDate?: Date         // omit for current roles

  location?: string
  summary?: string       // one or two sentences
  categories: Category[]
  url?: string

  featured?: boolean
  order?: number
  draft?: boolean
}
```

Experience entries do not get their own pages. The optional Markdown body is for notes; listings use the frontmatter.

Keep this collection small. It is not a full résumé database.

---

# About Content

The About page should initially be authored as a normal Astro/MDX page rather than generated from dozens of tiny content records.

Its major conceptual sections are:

```text
About
├── Introduction
├── Career
├── Cinematics, VFX & Virtual Production
├── Gaming
├── Improv Comedy
├── Volunteering & Community
└── Other Interests
```

Each section may link to relevant portfolio entries.

For example:

```text
Improv Comedy
    ↓
selected related work
    ↓
[He/Hymns]
[Musical Improv Teaching]
[Other Performance]
```

The About page explains the person.

The portfolio entries provide deeper evidence and detail.

Do not duplicate entire project descriptions inside About.

---

# Tags

Do not create an unrestricted tagging system at the start.

Use the controlled `categories` vocabulary.

Add freeform tags only if we encounter a real use case the categories cannot handle.

This prevents variants such as:

```text
virtual production
Virtual Production
VP
virtual-production
unreal-vp
```

from slowly fragmenting the content model.

---

# URLs

Prefer clean portfolio URLs:

```text
/work/roll-for-reality
/work/example-project
```

Do not encode categories into URLs:

```text
/work/virtual-production/roll-for-reality
```

because a project may belong to multiple categories and categories may change.

---

# Drafts

Support:

```yaml
draft: true
```

Draft content is visible in `pnpm dev` but does not appear in production builds or navigation. This applies to both collections.

---

# Content Addition Workflow

Adding a new portfolio item should normally require:

1. Create a folder in `src/content/portfolio/` with an `index.md` (or `index.mdx`).
2. Fill in its frontmatter.
3. Write the project content (or leave the body empty for a listing-only entry).
4. Add media to the same folder if necessary.
5. Run the site.

It should not require:

- editing the homepage
- editing the work index
- editing category pages
- manually adding routes

unless the author specifically wants to feature or custom-present the new item.

---

# Areas

The site presents five broad parts of Lukas's life. Areas are what visitors see on Home and About; categories are what content is tagged with.

Each area is defined in `src/lib/taxonomy.ts` as a named group of categories. An item appears in an area if it has any of that area's categories.

| Area                                 | Categories                                          |
| ------------------------------------ | --------------------------------------------------- |
| Career                               | `engineering`, `technical-art`                      |
| Cinematics, VFX & Virtual Production | `cinematics-vfx`, `virtual-production`, `xr-immersive` |
| Gaming                               | `gaming`                                            |
| Improv Comedy                        | `improv`                                            |
| Volunteering & Community             | `volunteering`                                      |

`creative-technology`, `teaching`, and `speaking` cut across areas and are not assigned to one.

"Career" is named to avoid colliding with the Work page, which shows everything.

## Career

Professional engineering, pipeline, technical-art, and CGI/VFX tooling work: the job, tools, and pipeline side.

## Cinematics, VFX & Virtual Production

Real-time cinematics, filmmaking technology, VFX workflows, virtual production, motion capture, and related immersive production: the production and creative side.

Career and this area deliberately overlap. A professional VFX pipeline project can belong to both.

## Gaming

Professional game-related work as well as selected personally meaningful gaming projects or interests where appropriate.

## Improv Comedy

Performance, musical improv, shows, teaching, coaching, production, and related creative work.

## Volunteering & Community

Conference service, leadership, committees, mentorship, community organization, and other volunteer contributions.

These are not mutually exclusive.

The site should celebrate overlap rather than hiding it.