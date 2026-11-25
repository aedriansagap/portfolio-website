"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PROFILE } from "@/data/portfolio";
import { CloseIcon, GitHubIcon, LinkedInIcon, MenuIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";
import "./Header.css";

const NAV_LINKS = [
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-mark" aria-label={`${PROFILE.name} — Home`}>
          <span className="brand-name">{PROFILE.name}</span>
          <span className="brand-dot" aria-hidden="true">.</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul>
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a
            id="header-github-link"
            href={PROFILE.github}
            target="_blank"
            rel="me noopener noreferrer"
            className="icon-btn"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <GitHubIcon size={17} />
          </a>
          <a
            id="header-linkedin-link"
            href={PROFILE.linkedin}
            target="_blank"
            rel="me noopener noreferrer"
            className="icon-btn"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <LinkedInIcon size={17} />
          </a>
          <ThemeToggle />
          <button
            id="mobile-menu-toggle"
            type="button"
            className="icon-btn mobile-menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <CloseIcon size={19} /> : <MenuIcon size={19} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav-drawer" className="mobile-drawer" aria-label="Mobile navigation">
          <div className="container mobile-drawer-inner">
            <ul>
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-drawer-links">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                className="btn btn-secondary"
              >
                <LinkedInIcon size={16} />
                LinkedIn
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="me noopener noreferrer"
                className="btn btn-secondary"
              >
                <GitHubIcon size={16} />
                GitHub
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
