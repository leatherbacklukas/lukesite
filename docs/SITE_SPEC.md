# Site Specification

## Purpose

This website is the personal site and portfolio of Lukas Tannenbaum.

It should communicate a career and set of interests that cross several traditionally separate disciplines:

- software and pipeline engineering
- cinematics
- visual effects
- virtual production
- gaming
- immersive / XR work
- improv comedy and musical improv
- teaching and performance
- volunteer and community leadership

The site should not force these interests into an artificial single category.

The broader story is that technical and creative work coexist.

---

# Primary Goals

The site should allow a visitor to quickly understand:

1. Who Lukas is
2. What kind of work he does
3. What he has made or contributed to
4. His involvement in creative technology
5. His interests and work in games
6. His work in performance and improv comedy
7. His volunteer and community involvement
8. How to contact or learn more about him

The site should work both as:

- a professional portfolio
- a personal home on the web

It should not feel like an online résumé with decorative graphics added to it.

---

# Likely Audiences

The site may be visited by:

- software engineers
- pipeline engineers
- technical artists
- game developers
- Unreal Engine professionals
- VFX professionals
- virtual production professionals
- XR / immersive professionals
- conference organizers
- creative technologists
- improv performers and teachers
- potential collaborators
- recruiters
- people Lukas meets professionally or socially

The site should make sense to someone who only understands one of these disciplines.

Do not assume every visitor knows industry-specific terminology.

---

# Initial Information Architecture

Start with a small primary navigation:

- Home
- Work
- About
- Contact

Resume is deferred (see Resume below) and is not in the initial navigation.

Do not create a separate top-level navigation destination for every discipline unless actual content volume eventually justifies it.

---

# Home

The homepage should answer:

> Who is this person, what does he do, and what interesting things has he worked on?

Suggested structure:

## Introduction

A concise introduction establishing Lukas as someone working between engineering and creative technology.

This should not be a giant marketing slogan.

## Selected Work

A curated set of featured portfolio items.

These may come from different disciplines.

For example:

- engineering
- virtual production
- immersive technology
- gaming
- creative projects
- speaking or leadership

## Areas of Work / Interest

A compact introduction to the major areas represented on the site:

- Career
- Cinematics, VFX & Virtual Production
- Gaming
- Improv Comedy
- Volunteering & Community

These should help explain the breadth of the site without becoming five giant feature cards.

Areas are defined in `docs/CONTENT_MODEL.md` as groups of content categories. "Career" covers engineering, pipeline, and technical-art work; it is not named "Work" because the Work page covers everything.

## Selected Experience

A small amount of professional or leadership context, drawn from featured entries in the `experience` collection.

## Current / Recent

Optional section for particularly relevant recent work, events, talks, performances, or projects.

This should only exist if it can be maintained without becoming stale.

## Contact

Simple closing CTA and links.

---

# Work

`/work`

This is the main browsable portfolio.

It should be possible to show work from different categories without forcing the visitor into separate microsites.

Categories are the controlled list in `docs/CONTENT_MODEL.md`:

- Engineering
- Technical Art
- Cinematics & VFX
- Virtual Production
- XR / Immersive
- Gaming
- Creative Technology
- Improv
- Teaching
- Speaking
- Volunteering

A project may belong to more than one category.

For example, a live virtual production show could simultaneously be:

- Virtual Production
- XR / Immersive
- Improv
- Creative Technology

(Its tools, such as Unreal Engine, are listed as technologies, not categories.)

Do not create mutually exclusive categories when the work genuinely overlaps.

The default Work page should emphasize curated work rather than presenting a giant filter interface.

At this scale, simple category links or lightweight filtering are sufficient.

---

# Portfolio Detail Pages

Individual substantial pieces of work may have their own pages at `/work/<id>`.

An entry gets a page only when it has body content; frontmatter-only entries appear in listings without a link.

Typical page structure:

## Title / Hero

- project title
- short description
- date or year
- role
- optional hero image

## Overview

What the project was.

## My Role

What Lukas actually did.

This distinction is especially important for collaborative projects.

## Context

Why the project existed or what problem was being solved.

## Work / Contribution

The most relevant technical, artistic, organizational, or performance details.

## Technology

Only when relevant.

Avoid technology lists that exist purely to create keyword density.

## Result

What was built, learned, demonstrated, shipped, performed, or achieved.

## Media

Optional.

Could contain:

- a small image gallery
- embedded video
- external video link
- diagrams
- screenshots

Media is supporting material, not the primary architecture of the site.

## Credits

When appropriate.

## Related Links

Examples:

- conference page
- paper
- GitHub repository
- video
- organization website
- press
- related project

Not every portfolio item needs every section.

---

# About

`/about`

The About page should embrace the fact that Lukas has several meaningful areas of identity and interest.

Rather than reducing the page to a chronological résumé, structure it as a narrative.

Potential sections:

## Introduction

A concise personal overview.

## Career

Professional background in software, pipelines, technical art, CGI/VFX tooling, and related technology.

## Cinematics, VFX & Virtual Production

Experience and interests around real-time production, cinematics, Unreal Engine, immersive production, motion capture, and related work.

## Gaming

Relationship with games both professionally and personally.

This does not need to pretend every gaming interest is professionally relevant.

Personal enthusiasm is appropriate on a personal website.

## Improv Comedy

Performance, musical improv, teaching, directing/coaching, shows, and the creative community around them.

This section should feel like a legitimate part of the person rather than an amusing footnote to an engineering career.

## Volunteering & Community

Conference involvement, community leadership, mentoring, volunteer work, and similar contributions.

## Other Interests

Optional and intentionally lightweight.

This can evolve naturally as the site becomes more personal.

---

# Contact

`/contact`

Keep this simple.

Possible elements:

- email
- LinkedIn
- GitHub
- other selected professional/social profiles

A contact form is not initially necessary.

Use a direct email link unless spam becomes a real problem.

---

# Resume

Deferred. Not part of the initial build.

When added, it will be a static PDF at `public/resume.pdf`, linked from navigation or Contact.

No custom resume-management system is needed.

---

# Content Philosophy

Not everything meaningful needs to be a "project."

The site should distinguish between:

## Projects

Discrete things that were built, performed, created, produced, presented, or shipped.

## Experience

Long-running roles or positions.

## Activities

Ongoing participation such as improv groups, teaching, communities, or interests.

## Leadership / Service

Volunteer, conference, committee, organizational, or community leadership.

These can overlap in presentation but should not be forced into identical data structures when doing so makes the content awkward.

Projects live in the `portfolio` collection. Experience, Activities, and Leadership/Service live in the `experience` collection, distinguished by `kind`. See `docs/CONTENT_MODEL.md`.

---

# Visual Direction

The visual language should bridge technology and creativity.

Potential characteristics:

- editorial rather than corporate
- strong typography
- restrained color
- thoughtful spacing
- high-quality photography when available
- occasional large media moments
- selective use of technical detail
- subtle visual references to filmmaking, stagecraft, games, or production workflows

Do not turn these ideas into literal visual gimmicks.

## Decided

- **Type:** Instrument Sans throughout, self-hosted through Astro's fonts API.
- **Headings:** Instrument Sans semibold (600) with slight negative tracking. Instrument Serif (too thin) and a bold condensed Instrument Sans were tried and rejected.
- **Theme:** light only, using the warm "Clay" neutrals.
- **Density:** balanced.
- **Color roles:** reddish orange is the one interactive accent (links, focus, current nav). Cerulean is secondary and may be used for larger surfaces; teal is rare. A brighter orange is for decoration only (rules, underlines), never text. All text colors must meet 4.5:1 contrast.
- **Cerulean surfaces:** the site header and footer are solid cerulean bands. A closing contact section is a solid cerulean block.
- **Text on cerulean:** text on solid cerulean uses the canvas color; orange links do not have enough contrast on it.
- **Headings:** page and section headings (`h1`, `h2`) and headings inside long-form body text are cerulean. Item titles in lists (work rows, experience) stay ink.
- **Section bands:** the page intro sits on the canvas. Every section after it is a full-width band (`.band`), and consecutive bands alternate deeper peach (`#F3CFB8`) and light peach (`#F8E3D5`) automatically. Inside bands, orange links use the deeper `accent-on-band` (`#A33206`) to keep 4.5:1. Avoid a bright red-orange such as `#FF1F00` on peach; it fails contrast.
- **Layout:** editorial. Sections are full width; their content sits in `page-container` (`max-w-wide`, 72rem, with gutters). Reading text uses a narrower column (`max-w-measure`, about 40rem); media may use the full container width.
- **Tokens:** colors and spacing are CSS variables in `src/styles/global.css`, exposed to Tailwind (`bg-canvas`, `text-muted`, `px-gutter`, `gap-section`, …). Tailwind's default color palette is disabled so only site colors are used.

The website should not look like:

- a game HUD
- a movie-editing interface
- a terminal
- a futuristic dashboard

unless a very subtle element naturally supports the design.

---

# Media Strategy

Expected media scale is small.

Approximately:

- 10–50 total portfolio or experience items
- occasional images
- occasional video

Store ordinary site images with the project.

Use Astro's image functionality when optimization is useful.

Do not add:

- Cloudinary
- an image CDN
- an asset database
- DAM software
- complex gallery infrastructure

unless actual requirements later justify them.

For video, prefer externally hosted or embedded video when appropriate rather than committing large video files directly to the Git repository.

---

# Search and Filtering

Do not implement search initially.

At this content scale, visitors should be able to understand and browse the site through information architecture alone.

Filtering should only be introduced if it materially improves `/work`.

A simple category/tag filter is preferable to a complex search system.

---

# Future Features

The architecture should leave room for, but should not proactively build:

- writing / blog posts
- talks
- upcoming performances
- event listings
- interactive demos
- contact form
- project search
- private project pages

These are possibilities, not initial requirements.

---

# Definition of Success

The site is successful if a visitor can spend two minutes on it and come away understanding that Lukas is not simply:

- a software engineer
- an artist
- an improviser
- a game developer
- or a conference volunteer

but someone whose work and interests sit at the intersection of several of those worlds.