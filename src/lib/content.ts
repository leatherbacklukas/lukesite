import { getCollection, type CollectionEntry } from 'astro:content';

export type PortfolioEntry = CollectionEntry<'portfolio'>;
export type ExperienceEntry = CollectionEntry<'experience'>;

const isPublished = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;

// Entries with an explicit `order` come first (ascending); the rest are newest first.
function byOrderThenDate(a: { order?: number; date: Date }, b: { order?: number; date: Date }) {
  if (a.order !== undefined || b.order !== undefined) {
    return (a.order ?? Infinity) - (b.order ?? Infinity);
  }
  return b.date.valueOf() - a.date.valueOf();
}

export async function getPortfolio(): Promise<PortfolioEntry[]> {
  const entries = await getCollection('portfolio', isPublished);
  return entries.sort((a, b) => byOrderThenDate(a.data, b.data));
}

export async function getExperience(): Promise<ExperienceEntry[]> {
  const entries = await getCollection('experience', isPublished);
  return entries.sort((a, b) =>
    byOrderThenDate(
      { order: a.data.order, date: a.data.startDate },
      { order: b.data.order, date: b.data.startDate },
    ),
  );
}

export function hasDetailPage(entry: PortfolioEntry): boolean {
  return Boolean(entry.body?.trim() || entry.data.images?.length || entry.data.videos?.length);
}
