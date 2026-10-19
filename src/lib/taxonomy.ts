export const PORTFOLIO_TYPES = ['project', 'production', 'performance', 'talk'] as const;
export type PortfolioType = (typeof PORTFOLIO_TYPES)[number];

export const EXPERIENCE_KINDS = ['employment', 'volunteer', 'activity'] as const;
export type ExperienceKind = (typeof EXPERIENCE_KINDS)[number];

export const CATEGORIES = [
  'engineering',
  'technical-art',
  'cinematics-vfx',
  'virtual-production',
  'xr-immersive',
  'gaming',
  'creative-technology',
  'improv',
  'teaching',
  'speaking',
  'volunteering',
] as const;
export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<Category, string> = {
  engineering: 'Engineering',
  'technical-art': 'Technical Art',
  'cinematics-vfx': 'Cinematics & VFX',
  'virtual-production': 'Virtual Production',
  'xr-immersive': 'XR / Immersive',
  gaming: 'Gaming',
  'creative-technology': 'Creative Technology',
  improv: 'Improv',
  teaching: 'Teaching',
  speaking: 'Speaking',
  volunteering: 'Volunteering',
};

export interface Area {
  id: string;
  label: string;
  categories: readonly Category[];
}

// creative-technology, teaching, and speaking are cross-cutting and intentionally unassigned.
export const AREAS: readonly Area[] = [
  { id: 'career', label: 'Career', categories: ['engineering', 'technical-art'] },
  {
    id: 'production',
    label: 'Cinematics, VFX & Virtual Production',
    categories: ['cinematics-vfx', 'virtual-production', 'xr-immersive'],
  },
  { id: 'gaming', label: 'Gaming', categories: ['gaming'] },
  { id: 'improv', label: 'Improv Comedy', categories: ['improv'] },
  { id: 'community', label: 'Volunteering & Community', categories: ['volunteering'] },
];
