import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PROFILE } from "@/data/portfolio";
import { ALLOW_INDEXING, SITE_SEO, SITE_URL } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const googleVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#111210" },
    { media: "(prefers-color-scheme: light)", color: "#f6f3ec" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_SEO.title,
    template: `%s | ${SITE_SEO.shortTitle}`,
  },
  description: SITE_SEO.description,
  applicationName: `${PROFILE.name} Portfolio`,
  keywords: [...SITE_SEO.keywords],
  authors: [{ name: PROFILE.fullName, url: PROFILE.github }],
  creator: PROFILE.fullName,
  publisher: PROFILE.fullName,
  category: "technology",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  robots: ALLOW_INDEXING
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : {
        index: false,
        follow: false,
      },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: `${PROFILE.name} — Portfolio`,
    title: SITE_SEO.title,
    description: SITE_SEO.description,
    images: [
      {
        url: SITE_SEO.ogImagePath,
        width: SITE_SEO.ogImageWidth,
        height: SITE_SEO.ogImageHeight,
        alt: SITE_SEO.ogImageAlt,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_SEO.title,
    description: SITE_SEO.description,
    images: [
      {
        url: SITE_SEO.ogImagePath,
        alt: SITE_SEO.ogImageAlt,
      },
    ],
  },
  verification: googleVerification
    ? { google: googleVerification }
    : undefined,
};

const themeInitScript = `
(function() {
  try {
    var saved = localStorage.getItem('portfolio-theme');
    var theme = saved === 'light' || saved === 'dark' ? saved : 'dark';
    document.documentElement.dataset.theme = theme;
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${fraunces.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body id="top">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="ambient-wash" aria-hidden="true" />
        <Header />
        <main id="main-content" className="main-content container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
