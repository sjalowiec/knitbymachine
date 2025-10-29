export interface GlossaryTerm {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: string;
  excerpt?: string;
  definition?: any;
  image?: string;
  imageAlt?: string;
  relatedLinks?: Array<{
    label: string;
    url: string;
    kind?: string;
  }>;
  aliases?: string[];
  related?: Array<{
    title: string;
    slug: string;
  }>;
  tips?: string[];
  notes?: string[];
  videoUrl?: string;
}
