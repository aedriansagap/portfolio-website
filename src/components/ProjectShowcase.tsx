"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  ARCHIVE_REPOS,
  FEATURED_PROJECTS,
  PROFILE,
  type ProjectCategory,
  type ProjectItem,
} from "@/data/portfolio";
import { ArrowUpRightIcon, CloseIcon, GitHubIcon, StarIcon } from "./Icons";
import "./ProjectShowcase.css";

const CATEGORIES: ProjectCategory[] = [
  "All",
  "AI & ML",
  "Full-Stack & Web",
  "Mobile & Tools",
];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const counts = useMemo(() => {
    const map: Record<ProjectCategory, number> = {
      All: FEATURED_PROJECTS.length,
      "AI & ML": 0,
      "Full-Stack & Web": 0,
      "Mobile & Tools": 0,
    };
    for (const project of FEATURED_PROJECTS) {
      map[project.category] += 1;
    }
    return map;
  }, []);

  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") return FEATURED_PROJECTS;
    return FEATURED_PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <div className="section-header-left">
          <span className="eyebrow">01 / Selected GitHub Work</span>
          <h2 className="section-title">Major Projects</h2>
          <p className="section-subtitle">
            Curated directly from my GitHub repositories—spanning autonomous AI agents,
            real-time multiplayer engines, cross-platform mobile apps, and developer tools.
          </p>
        </div>

        <div className="filter-bar" role="tablist" aria-label="Filter projects by category">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                id={`filter-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`filter-tab ${isActive ? "is-active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                <span>{category}</span>
                <span className="filter-count">{counts[category]}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="projects-grid">
        {visibleProjects.map((project, index) => {
          const isWide = activeCategory === "All" && project.featured;
          return (
            <article
              key={project.id}
              className={`project-card ${isWide ? "project-card-wide" : ""}`}
            >
              <button
                type="button"
                className="project-media-trigger"
                onClick={() => setSelectedProject(project)}
                aria-label={`Inspect technical breakdown for ${project.title}`}
              >
                <div className="project-media">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes={
                      isWide
                        ? "(max-width: 960px) 100vw, 560px"
                        : "(max-width: 768px) 100vw, 560px"
                    }
                    priority={index < 2}
                    className="project-img"
                  />
                  <span className="media-inspect-cue">Read breakdown</span>
                </div>
              </button>

              <div className="project-body">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="meta-sep" aria-hidden="true">·</span>
                  <span className="project-lang">{project.language}</span>
                  {project.liveUrl && (
                    <>
                      <span className="meta-sep" aria-hidden="true">·</span>
                      <span className="meta-live">Live</span>
                    </>
                  )}
                  {project.stars ? (
                    <span className="meta-stars" title={`${project.stars} GitHub star`}>
                      <StarIcon size={12} />
                      {project.stars}
                    </span>
                  ) : null}
                </div>

                <h3 className="project-title">
                  <button
                    type="button"
                    className="project-title-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </button>
                </h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-description">{project.description}</p>

                <ul className="project-stack" aria-label="Technologies used">
                  {project.techStack.slice(0, isWide ? 6 : 5).map((tech) => (
                    <li key={tech} className="tech-tag">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="project-actions">
                  {project.liveUrl && (
                    <a
                      id={`live-${project.id}`}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link-primary"
                    >
                      Live Demo
                      <ArrowUpRightIcon size={14} />
                    </a>
                  )}
                  <a
                    id={`repo-${project.id}`}
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <GitHubIcon size={15} />
                    Source
                    <ArrowUpRightIcon size={13} />
                  </a>
                  <button
                    id={`details-${project.id}`}
                    type="button"
                    className="project-link project-link-muted"
                    onClick={() => setSelectedProject(project)}
                  >
                    Architecture →
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Compact Archive Index for Additional Notable GitHub Repositories */}
      <div className="archive-block">
        <div className="archive-header">
          <div>
            <span className="eyebrow">Also on GitHub</span>
            <h3 className="archive-title">Additional Repositories &amp; Experiments</h3>
          </div>
          <a
            id="view-all-github-repos"
            href={`${PROFILE.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="archive-all-link"
          >
            View all 20 repositories
            <ArrowUpRightIcon size={15} />
          </a>
        </div>

        <ul className="archive-list">
          {ARCHIVE_REPOS.map((repo) => (
            <li key={repo.name} className="archive-row">
              <a
                href={repo.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="archive-row-link"
              >
                <span className="archive-name">
                  {repo.name}
                  {repo.pinned && <span className="archive-pin">Pinned</span>}
                </span>
                <span className="archive-summary">{repo.summary}</span>
                <span className="archive-lang">{repo.language}</span>
                <span className="archive-arrow" aria-hidden="true">
                  <ArrowUpRightIcon size={15} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Technical Breakdown Modal */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <div className="modal-top-bar">
              <div className="project-meta">
                <span className="project-category">{selectedProject.category}</span>
                <span className="meta-sep" aria-hidden="true">·</span>
                <span className="project-lang">{selectedProject.year}</span>
                <span className="meta-sep" aria-hidden="true">·</span>
                <span className="project-lang">{selectedProject.slug}</span>
              </div>
              <button
                id="close-project-modal"
                type="button"
                className="icon-btn"
                aria-label="Close project details"
                onClick={() => setSelectedProject(null)}
              >
                <CloseIcon size={18} />
              </button>
            </div>

            <div className="modal-scroll">
              <div className="modal-media">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  fill
                  sizes="(max-width: 780px) 100vw, 720px"
                  className="project-img"
                />
              </div>

              <div className="modal-content">
                <h3 id="modal-project-title" className="modal-title">
                  {selectedProject.title}
                </h3>
                <p className="modal-tagline">{selectedProject.tagline}</p>
                <p className="modal-description">{selectedProject.description}</p>

                <div className="modal-section">
                  <h4 className="modal-heading">Key Engineering Highlights</h4>
                  <ul className="modal-highlights">
                    {selectedProject.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h4 className="modal-heading">System Architecture</h4>
                  <p className="modal-arch">{selectedProject.architectureNote}</p>
                </div>

                <div className="modal-section">
                  <h4 className="modal-heading">Stack</h4>
                  <ul className="project-stack">
                    {selectedProject.techStack.map((tech) => (
                      <li key={tech} className="tech-tag">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Open Live Demo
                  <ArrowUpRightIcon size={16} />
                </a>
              )}
              <a
                href={selectedProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <GitHubIcon size={16} />
                Inspect Repository
                <ArrowUpRightIcon size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
