import type { CaseStudy } from "../data/caseStudies";
import { caseStudies as fallbackCaseStudies } from "../data/caseStudies";

const STRAPI_URL = import.meta.env.STRAPI_URL ?? "http://localhost:1337";

/** Strapi v5 uses flattened API: attributes at top level, documentId instead of id */
interface StrapiEntryFlat {
  documentId?: string;
  id?: number;
  slug?: string;
  title?: string;
  company?: string;
  author?: string;
  role?: string;
  quote?: string;
  metric?: string;
  metricLabel?: string | null;
  product?: string;
  challenges?: string[] | null;
  roles?: string[] | null;
  hasVideo?: boolean;
  featured?: boolean;
  realStory?: boolean;
  image?: { url?: string } | { data?: { attributes?: { url?: string } } } | Array<{ url?: string }> | null;
}

interface StrapiListResponse {
  data?: StrapiEntryFlat[] | null;
}

function getImageUrl(image: StrapiEntryFlat["image"], baseUrl: string): string | undefined {
  if (!image) return undefined;
  const raw = Array.isArray(image) ? image[0] : image;
  if (!raw) return undefined;
  const url =
    typeof (raw as { url?: string }).url === "string"
      ? (raw as { url: string }).url
      : (raw as { data?: { attributes?: { url?: string } } })?.data?.attributes?.url;
  if (!url) return undefined;
  return url.startsWith("http") ? url : `${baseUrl.replace(/\/$/, "")}${url}`;
}

/** Normalize slug for URL: lowercase, spaces to hyphens, so paths and lookups match */
function normalizeSlug(s: string): string {
  return s
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();
}

function mapStrapiEntryToCaseStudy(entry: StrapiEntryFlat, baseUrl: string): CaseStudy {
  const rawSlug = entry.slug ?? entry.documentId ?? String(entry.id ?? "");
  const slug = normalizeSlug(rawSlug);
  return {
    slug,
    title: entry.title ?? "",
    company: entry.company ?? "",
    author: entry.author ?? "",
    role: entry.role ?? "",
    quote: entry.quote ?? "",
    metric: entry.metric ?? "",
    metricLabel: entry.metricLabel ?? undefined,
    product: entry.product ?? "",
    challenges: Array.isArray(entry.challenges) ? entry.challenges : [],
    roles: Array.isArray(entry.roles) ? entry.roles : [],
    hasVideo: entry.hasVideo ?? false,
    featured: entry.featured ?? false,
    realStory: entry.realStory ?? false,
    imageUrl: getImageUrl(entry.image, baseUrl),
  };
}

/**
 * Fetches all case studies from Strapi. Falls back to local data if Strapi is unreachable.
 */
export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/case-studies?pagination[pageSize]=100`
    );
    if (!res.ok) throw new Error(`Strapi returned ${res.status}`);
    const json = (await res.json()) as StrapiListResponse;
    const data = json.data;
    if (!Array.isArray(data) || data.length === 0) return fallbackCaseStudies;
    return data.map((entry) => mapStrapiEntryToCaseStudy(entry, STRAPI_URL));
  } catch {
    return fallbackCaseStudies;
  }
}

/**
 * Fetches a single case study by slug. Uses Strapi if available, otherwise local data.
 */
export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const all = await getCaseStudies();
  const normalized = normalizeSlug(slug);
  return all.find((c) => c.slug === normalized) ?? null;
}
