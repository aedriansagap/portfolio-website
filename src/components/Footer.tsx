import { PROFILE } from "@/data/portfolio";
import { ArrowUpRightIcon } from "./Icons";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-name">
            {PROFILE.fullName}
          </p>
          <p className="footer-meta">
            © {year} · {PROFILE.location}
          </p>
        </div>

        <nav className="footer-links" aria-label="Social and quick links">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
            <ArrowUpRightIcon size={14} />
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
            <ArrowUpRightIcon size={14} />
          </a>
          <a href={`mailto:${PROFILE.email}`} className="footer-link">
            Email
            <ArrowUpRightIcon size={14} />
          </a>
          <a href="#top" className="footer-link footer-top-link">
            Back to top ↑
          </a>
        </nav>
      </div>
    </footer>
  );
}
