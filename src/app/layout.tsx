import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PROFILE } from "@/data/portfolio";

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

export const metadata: Metadata = {
  title: `${PROFILE.name} — ${PROFILE.role}`,
  description:
    "Personal portfolio of Aedrian Rimorin Sagap — BS Computer Science (Magna Cum Laude), PhilNITS IT Passport Certified Software Engineer building full-stack systems, applied AI/RAG tools, and mobile applications.",
  keywords: [
    "Aedrian Sagap",
    "Software Engineer",
    "Full-Stack Developer",
    "Applied AI",
    "Next.js",
    "React Native",
    "FastAPI",
    "Portfolio",
  ],
  authors: [{ name: PROFILE.fullName, url: PROFILE.github }],
  openGraph: {
    title: `${PROFILE.name} — ${PROFILE.role}`,
    description:
      "Full-stack software engineer specializing in intelligent AI systems, real-time web applications, and cross-platform mobile apps.",
    type: "website",
  },
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
