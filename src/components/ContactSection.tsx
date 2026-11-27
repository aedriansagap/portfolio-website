"use client";

import { useState } from "react";
import { PROFILE } from "@/data/portfolio";
import {
  ArrowUpRightIcon,
  CheckIcon,
  CopyIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "./Icons";
import "./ContactSection.css";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-surface">
        <div className="contact-lead">
          <span className="eyebrow">04 / Get in Touch</span>
          <h2 className="contact-title">
            Let&apos;s build something thoughtful together.
          </h2>
          <p className="contact-copy">
            I&apos;m currently open to software engineering roles, full-stack &amp; applied AI
            projects, and technical collaborations. Reach out directly on LinkedIn or by email.
          </p>
          <div className="contact-primary-actions">
            <a
              id="contact-linkedin-cta"
              href={PROFILE.linkedin}
              target="_blank"
              rel="me noopener noreferrer"
              className="btn btn-primary"
            >
              <LinkedInIcon size={17} />
              Connect on LinkedIn
              <ArrowUpRightIcon size={15} />
            </a>
            <button
              id="copy-email-btn"
              type="button"
              onClick={handleCopyEmail}
              className="btn btn-secondary"
            >
              {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
              {copied ? "Email Copied" : PROFILE.email}
            </button>
          </div>
        </div>

        <div className="contact-channels">
          <a
            id="channel-linkedin"
            href={PROFILE.linkedin}
            target="_blank"
            rel="me noopener noreferrer"
            className="channel-card"
          >
            <div className="channel-top">
              <span className="channel-icon">
                <LinkedInIcon size={18} />
              </span>
              <span className="channel-label">LinkedIn</span>
              <ArrowUpRightIcon size={15} className="channel-arrow" />
            </div>
            <p className="channel-value">{PROFILE.linkedinLabel}</p>
            <p className="channel-hint">Professional experience, credentials &amp; direct messaging</p>
          </a>

          <a
            id="channel-github"
            href={PROFILE.github}
            target="_blank"
            rel="me noopener noreferrer"
            className="channel-card"
          >
            <div className="channel-top">
              <span className="channel-icon">
                <GitHubIcon size={18} />
              </span>
              <span className="channel-label">GitHub</span>
              <ArrowUpRightIcon size={15} className="channel-arrow" />
            </div>
            <p className="channel-value">github.com/{PROFILE.githubHandle}</p>
            <p className="channel-hint">20 public repositories, codebases &amp; live deployments</p>
          </a>

          <a
            id="channel-email"
            href={`mailto:${PROFILE.email}`}
            className="channel-card"
          >
            <div className="channel-top">
              <span className="channel-icon">
                <MailIcon size={18} />
              </span>
              <span className="channel-label">Email</span>
              <ArrowUpRightIcon size={15} className="channel-arrow" />
            </div>
            <p className="channel-value">{PROFILE.email}</p>
            <p className="channel-hint">Direct inquiries · {PROFILE.location}</p>
          </a>
        </div>
      </div>
    </section>
  );
}
