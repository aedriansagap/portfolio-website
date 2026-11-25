import { FEATURED_PROJECTS, PROFILE, SKILL_GROUPS } from "@/data/portfolio";
import { SITE_SEO, SITE_URL } from "@/lib/site";

export function buildPortfolioJsonLd() {
  const skills = SKILL_GROUPS.flatMap((group) => group.items);
  const ogImageUrl = `${SITE_URL}${SITE_SEO.ogImagePath}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_SEO.title,
        description: SITE_SEO.description,
        inLanguage: "en",
        publisher: {
          "@id": `${SITE_URL}/#person`,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: SITE_SEO.title,
        description: SITE_SEO.description,
        inLanguage: "en",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        mainEntity: {
          "@id": `${SITE_URL}/#person`,
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: PROFILE.fullName,
        alternateName: [PROFILE.name, PROFILE.githubHandle],
        identifier: PROFILE.githubHandle,
        jobTitle: PROFILE.role,
        description: PROFILE.intro,
        url: SITE_URL,
        image: ogImageUrl,
        email: `mailto:${PROFILE.email}`,
        address: {
          "@type": "PostalAddress",
          addressCountry: "PH",
        },
        sameAs: [PROFILE.github, PROFILE.linkedin],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Don Mariano Marcos Memorial State University",
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          name: "PhilNITS IT Passport (IP) Certification",
          credentialCategory: "certification",
          recognizedBy: {
            "@type": "Organization",
            name: "Philippine National IT Standards Foundation",
          },
        },
        knowsAbout: skills,
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#projects`,
        name: `Selected Software Engineering Projects by ${PROFILE.name}`,
        numberOfItems: FEATURED_PROJECTS.length,
        itemListElement: FEATURED_PROJECTS.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareSourceCode",
            name: project.title,
            description: project.description,
            codeRepository: project.repoUrl,
            url: project.liveUrl ?? project.repoUrl,
            programmingLanguage: project.language,
            keywords: project.techStack,
            image: `${SITE_URL}${project.image}`,
            author: {
              "@id": `${SITE_URL}/#person`,
            },
          },
        })),
      },
    ],
  };
}
