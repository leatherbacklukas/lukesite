import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORIES, EXPERIENCE_KINDS, PORTFOLIO_TYPES } from './lib/taxonomy';

const categories = z.array(z.enum(CATEGORIES)).min(1);

const portfolio = defineCollection({
  loader: glob({
    pattern: '*/index.{md,mdx}',
    base: './src/content/portfolio',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      date: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      type: z.enum(PORTFOLIO_TYPES),
      categories,
      role: z.string().optional(),
      organization: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number().optional(),
      thumbnail: image().optional(),
      heroImage: image().optional(),
      technologies: z.array(z.string()).optional(),
      links: z.array(z.object({ label: z.string(), url: z.url() })).optional(),
      credits: z
        .array(
          z.object({
            name: z.string(),
            role: z.string().optional(),
            url: z.url().optional(),
          }),
        )
        .optional(),
      draft: z.boolean().default(false),
    }),
});

const experience = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/experience' }),
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    kind: z.enum(EXPERIENCE_KINDS),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string().optional(),
    summary: z.string().optional(),
    categories,
    url: z.url().optional(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { portfolio, experience };
