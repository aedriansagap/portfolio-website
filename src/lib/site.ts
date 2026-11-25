import { PROFILE } from "@/data/portfolio";

const DEFAULT_LOCAL_URL = "http://localhost:3000";

function normalizeSiteUrl(rawUrl: string): string {
  const trimmed = rawUrl.trim().replace(/\/+$/, "");
  if (!trimmed) return DEFAULT_LOCAL_URL;

  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    return new URL(withProtocol).origin;
  } catch {
    return DEFAULT_LOCAL_URL;
  }
}

export function getSiteUrl(): string {
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicitUrl) {
    return normalizeSiteUrl(explicitUrl);
  }

  const firebaseProjectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID?.trim();
  if (firebaseProjectId) {
    return normalizeSiteUrl(`https://${firebaseProjectId}.web.app`);
  }

  return DEFAULT_LOCAL_URL;
}

export const SITE_URL = getSiteUrl();

export const ALLOW_INDEXING =
  process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "false";

export const SITE_SEO = {
  title: `${PROFILE.name} — Full-Stack & Applied AI Software Engineer`,
  shortTitle: PROFILE.name,
  description:
    "Aedrian Sagap — Software Engineer in the Philippines (BS CS Magna Cum Laude, PhilNITS Certified) building full-stack web, applied AI/RAG, and mobile apps.",
  ogImagePath: "/og-image.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt:
    "Aedrian Sagap — Software Engineer based in the Philippines specializing in full-stack web, applied AI/RAG, and mobile applications",
  keywords: [
    "Aedrian Sagap",
    "Aedrian Rimorin Sagap",
    "Software Engineer Philippines",
    "Full-Stack Software Engineer",
    "Applied AI Engineer",
    "RAG Systems",
    "Next.js Developer",
    "React Native Developer",
    "FastAPI",
    "TypeScript",
    "Python",
    "PhilNITS IT Passport",
    "Software Engineer Portfolio",
  ],
} as const;
