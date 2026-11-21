import ProjectShowcase from "@/components/ProjectShowcase";
import ContactSection from "@/components/ContactSection";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/Icons";
import { EXPERIENCE, PROFILE, SKILL_GROUPS } from "@/data/portfolio";
import "./page.css";

export default function Home() {
  return (
    <div className="page-stack">
      {/* Editorial Hero */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-primary">
          <p className="eyebrow reveal">
            {PROFILE.role} · {PROFILE.location}
          </p>
          <h1 id="hero-heading" className="hero-title reveal reveal-delay-1">
            {PROFILE.headline}
          </h1>
          <p className="hero-intro reveal reveal-delay-2">{PROFILE.intro}</p>

          <div className="hero-actions reveal reveal-delay-3">
            <a id="hero-work-cta" href="#projects" className="btn btn-primary">
              Explore Selected Work
              <ArrowDownIcon size={16} />
            </a>
            <a
              id="hero-linkedin-cta"
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <LinkedInIcon size={16} />
              LinkedIn Profile
              <ArrowUpRightIcon size={15} />
            </a>
            <a
              id="hero-github-cta"
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <GitHubIcon size={16} />
              GitHub
              <ArrowUpRightIcon size={14} />
            </a>
          </div>
        </div>

        {/* Architectural Engineering Dossier Card */}
        <aside className="hero-dossier reveal reveal-delay-2" aria-label="Engineer profile overview">
          <div className="dossier-header">
            <div>
              <p className="dossier-name">{PROFILE.fullName}</p>
              <p className="dossier-status">{PROFILE.availability}</p>
            </div>
            <span className="dossier-monogram" aria-hidden="true">
              AS
            </span>
          </div>

          <dl className="dossier-list">
            {PROFILE.credentials.map((item) => (
              <div key={item.label} className="dossier-row">
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="dossier-links">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="dossier-link"
            >
              <LinkedInIcon size={15} />
              <span>LinkedIn</span>
              <ArrowUpRightIcon size={13} className="dossier-link-arrow" />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="dossier-link"
            >
              <GitHubIcon size={15} />
              <span>@{PROFILE.githubHandle}</span>
              <ArrowUpRightIcon size={13} className="dossier-link-arrow" />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="dossier-link">
              <MailIcon size={15} />
              <span>Email</span>
              <ArrowUpRightIcon size={13} className="dossier-link-arrow" />
            </a>
          </div>
        </aside>
      </section>

      {/* 01 / Major GitHub Projects Showcase */}
      <ProjectShowcase />

      {/* 02 / Experience, Thesis & Credentials */}
      <section id="experience" className="experience-section">
        <div className="section-header">
          <div className="section-header-left">
            <span className="eyebrow">02 / Background &amp; Impact</span>
            <h2 className="section-title">Experience &amp; Education</h2>
            <p className="section-subtitle">
              From shipping permanently adopted government reporting systems at DOST to
              leading containerized LAN infrastructure and graduating Magna Cum Laude.
            </p>
          </div>
        </div>

        <ol className="experience-list">
          {EXPERIENCE.map((entry) => (
            <li key={`${entry.role}-${entry.period}`} className="experience-item">
              <div className="experience-meta">
                <span className="experience-period">{entry.period}</span>
                <span className="experience-type">{entry.type}</span>
              </div>

              <div className="experience-body">
                <h3 className="experience-role">{entry.role}</h3>
                <p className="experience-org">
                  {entry.organization} · <span>{entry.location}</span>
                </p>
                <p className="experience-summary">{entry.summary}</p>
                {entry.highlights.length > 0 && (
                  <ul className="experience-highlights">
                    {entry.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 03 / About & Technical Capabilities */}
      <section id="about" className="about-section">
        <div className="section-header">
          <div className="section-header-left">
            <span className="eyebrow">03 / Engineering Craft</span>
            <h2 className="section-title">About &amp; Capabilities</h2>
          </div>
        </div>

        <div className="about-narrative">
          <p className="about-lead">
            I care about software that feels immediate, dependable, and thoughtfully engineered—whether
            it&apos;s a multi-tenant reporting platform serving regional offices, a local RAG pipeline
            running quantized models offline, or a 60 FPS multiplayer game over WebSockets.
          </p>
          <p className="about-body">
            My work bridges practical systems architecture (Dockerized deployments, PostgreSQL Row Level
            Security, Playwright end-to-end verification, and k6 load testing) with clean frontend craft
            across Next.js, React Native, and custom tooling. Outside building products, I served as
            Secretary of the DMMMSU-SLUC Computer Science Club and earned the PhilNITS IT Passport
            certification.
          </p>
        </div>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="skill-column">
              <h3 className="skill-category">{group.category}</h3>
              <ul className="skill-items">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 04 / Contact & Social */}
      <ContactSection />
    </div>
  );
}
