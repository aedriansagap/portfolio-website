export type ProjectCategory = "All" | "AI & ML" | "Full-Stack & Web" | "Mobile & Tools";

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: Exclude<ProjectCategory, "All">;
  year: string;
  image: string;
  imageAlt: string;
  repoUrl: string;
  liveUrl?: string;
  featured?: boolean;
  pinned?: boolean;
  stars?: number;
  language: string;
  techStack: string[];
  highlights: string[];
  architectureNote: string;
}

export interface ArchiveRepo {
  name: string;
  language: string;
  year: string;
  summary: string;
  repoUrl: string;
  pinned?: boolean;
}

export interface ExperienceEntry {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: "Experience" | "Thesis" | "Education" | "Credential";
  summary: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const PROFILE = {
  name: "Aedrian Sagap",
  fullName: "Aedrian Rimorin Sagap",
  role: "Software Engineer",
  headline: "Engineering intelligent systems, real-time apps & human-centered tools.",
  intro:
    "BS Computer Science graduate (Magna Cum Laude, DMMMSU) and PhilNITS IT Passport certified engineer based in the Philippines. I build production full-stack software, applied AI & RAG systems, cross-platform mobile apps, and low-latency multiplayer experiences.",
  location: "Philippines",
  email: "sagapaedrian@gmail.com",
  github: "https://github.com/aedriansagap",
  githubHandle: "aedriansagap",
  linkedin: "https://www.linkedin.com/in/aedrian-sagap-936191247/",
  linkedinLabel: "linkedin.com/in/aedrian-sagap-936191247",
  availability: "Open to software engineering roles & collaborations",
  credentials: [
    { label: "Education", value: "BS Computer Science · Magna Cum Laude (2026)" },
    { label: "Certification", value: "PhilNITS IT Passport (IP) Certified" },
    { label: "Core Focus", value: "Full-Stack · Applied AI / RAG · Mobile" },
    { label: "Public Work", value: "20 GitHub Repositories · 4 Live Web Apps" },
  ],
} as const;

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "agentic-ticketing",
    slug: "Agentic-Ticketing-System",
    title: "Agentic Ticketing System",
    tagline: "Autonomous LLM-powered enterprise support platform with SLA tracking",
    description:
      "An intelligent support ticketing platform powered by an autonomous Groq LLM ReAct agent that reads, triages, and resolves customer tickets via tool calls—complete with priority SLA countdowns, real-time WebSocket broadcasts, immutable audit logging, and executive analytics.",
    category: "AI & ML",
    year: "2026",
    image: "/projects/agentic-ticketing.jpg",
    imageAlt: "Minimalist architectural workflow diagram representing the Agentic Ticketing System",
    repoUrl: "https://github.com/aedriansagap/Agentic-Ticketing-System",
    liveUrl: "https://agentic-ticketing-system.vercel.app",
    featured: true,
    language: "Python",
    techStack: ["FastAPI", "React", "TypeScript", "Groq LLM", "PostgreSQL", "WebSockets", "Docker"],
    highlights: [
      "ReAct agent powered by Groq llama-3.3-70b-versatile with automatic llama-3.1-8b-instant failover.",
      "SLA policy engine tracking breach countdowns, MTTR, First Response Time, CSAT, and AI deflection KPIs.",
      "Inbound email webhook & outbound SMTP notifications alongside JWT auth, bcrypt, rate limiting, and audit trails.",
    ],
    architectureNote:
      "FastAPI backend with Alembic migrations (SQLite zero-config or PostgreSQL 16 via Docker Compose), WebSocket state fan-out, and container readiness/liveness probes (/readyz, /healthz).",
  },
  {
    id: "perfgate",
    slug: "perfgate",
    title: "PerfGate — CI Latency & API Gate",
    tagline: "Zero-Docker TypeScript CLI & GitHub Action for PR latency and contract regression gating",
    description:
      "An open-source developer tool and native Node 20 GitHub Action that benchmarks API endpoints on pull requests, validates JSON and header contracts, filters flaky CI jitter via a configurable millisecond noise floor, and upserts sticky Markdown latency diff tables.",
    category: "Mobile & Tools",
    year: "2026",
    image: "/projects/perfgate.jpg",
    imageAlt: "Minimalist obsidian histogram columns intersected by a copper latency threshold beam representing PerfGate",
    repoUrl: "https://github.com/aedriansagap/perfgate",
    liveUrl: "https://aedriansagap.github.io/perfgate",
    featured: true,
    language: "TypeScript",
    techStack: ["TypeScript", "Node.js", "GitHub Actions", "Zod", "Vitest", "esbuild", "CLI"],
    highlights: [
      "Bounded-concurrency HTTP benchmark engine with warmup exclusion and exact linear-interpolated p50/p95/p99 stats.",
      "Dual-condition regression gate combining percentage thresholds with a minDeltaMs noise floor to eliminate flaky CI failures.",
      "Zero-Docker pre-bundled GitHub Action emitting sticky PR diff comments, Step Summaries, JUnit XML, and an interactive playground.",
    ],
    architectureNote:
      "Dual-target tsup + esbuild pipeline publishing a typed ESM CLI/library alongside a single-file Node 20 GitHub Action bundle verified by self-dogfooding CI workflows and Vitest integration suites.",
  },
  {
    id: "typeclash",
    slug: "TypeClash",
    title: "TypeClash",
    tagline: "Real-time competitive multiplayer typing survival arena",
    description:
      "Turns classic typing tests into a head-to-head Tetris-style survival duel. Words cascade down an HTML5 Canvas arena; chaining flawless combos sends chaotic 'garbage' words to overwhelm opponents across private 6-digit WebSocket rooms with persistent global leaderboards.",
    category: "Full-Stack & Web",
    year: "2026",
    image: "/projects/typeclash.jpg",
    imageAlt: "Geometric split-screen mechanical keyboard illustration representing TypeClash",
    repoUrl: "https://github.com/aedriansagap/TypeClash",
    liveUrl: "https://type-clash.vercel.app",
    featured: true,
    pinned: true,
    stars: 1,
    language: "TypeScript",
    techStack: ["Next.js", "TypeScript", "HTML5 Canvas", "Socket.io", "Node.js", "Express", "MongoDB"],
    highlights: [
      "Deterministic multiplayer word synchronization via seedrandom so both opponents face identical spawns.",
      "Every 5-combo streak dispatches accelerated garbage waves to disrupt the opponent's screen.",
      "Live WPM, accuracy, and garbage telemetry with 1-, 3-, and 5-minute MongoDB leaderboard divisions.",
    ],
    architectureNote:
      "Next.js client rendering a custom HTML5 Canvas loop with Vanilla CSS Modules, paired with an Express + Socket.io real-time match server and Mongoose persistence.",
  },
  {
    id: "reclaim",
    slug: "lost-and-found-app",
    title: "RECLAIM — Lost & Found",
    tagline: "Cross-platform mobile, web & admin ecosystem for returning lost items",
    description:
      "A multi-platform Lost & Found system built as team leader and lead developer—spanning a React Native (Expo) mobile app, a responsive Netlify web portal, and an admin monitoring dashboard backed by Supabase real-time subscriptions and PostgreSQL Row Level Security.",
    category: "Mobile & Tools",
    year: "2026",
    image: "/projects/reclaim.jpg",
    imageAlt: "Topographic map with beacon rings representing RECLAIM Lost and Found",
    repoUrl: "https://github.com/aedriansagap/lost-and-found-app",
    liveUrl: "https://reclaim-web.netlify.app",
    pinned: true,
    language: "TypeScript",
    techStack: ["React Native", "Expo Router", "TypeScript", "Supabase", "PostgreSQL RLS", "Netlify"],
    highlights: [
      "Compressed multi-image uploads (up to 5 photos per post) with smart grid display and full-screen zoom.",
      "Real-time feed updates, threaded comments, location/date tagging, category filters, and push alerts.",
      "Offline caching, automatic system dark/light theming, and strict Supabase Row Level Security policies.",
    ],
    architectureNote:
      "Shared Supabase PostgreSQL + Storage backend powering an Expo mobile app, responsive web client, and admin monitoring console with end-to-end RLS isolation.",
  },
  {
    id: "ai-portfolio-assistant",
    slug: "ai-portfolio-assistant",
    title: "AI Portfolio Assistant",
    tagline: "Privacy-first local LLM & RAG interview representative",
    description:
      "A Retrieval-Augmented Generation (RAG) personal assistant that answers interview questions and explains my engineering background—running quantized GGUF models locally via llama.cpp and grounding every response in ChromaDB vector search to minimize hallucinations.",
    category: "AI & ML",
    year: "2026",
    image: "/projects/ai-assistant.jpg",
    imageAlt: "Layered architectural knowledge monoliths illuminated by amber light representing AI Portfolio Assistant",
    repoUrl: "https://github.com/aedriansagap/ai-portfolio-assistant",
    pinned: true,
    language: "Python",
    techStack: ["Python", "Flask", "llama.cpp", "ChromaDB", "SentenceTransformers", "Docker"],
    highlights: [
      "100% local LLM inference with llama-cpp-python supporting quantized GGUF weights (Gemma, Llama 3, Mistral).",
      "Curated knowledge ingestion pipeline embedding chunks with BAAI/bge-small-en-v1.5 into persistent ChromaDB.",
      "Containerized with Docker and automated GitHub Actions deployment workflow to Hugging Face Spaces.",
    ],
    architectureNote:
      "Lightweight Flask API orchestrating vector similarity retrieval against local ChromaDB collections before constructing grounded prompt contexts for local LLM inference.",
  },
  {
    id: "cybermon",
    slug: "cybersecurity-pokemon-fighting-game",
    title: "CyberMon: Tekken Protocol",
    tagline: "2.5D Tekken-inspired cybersecurity tournament fighting game",
    description:
      "Built for an internal 2026 company cybersecurity tournament—pairing a custom 60 FPS HTML5 Canvas fighting engine (4-limb attacks, air juggles, 3D sidestepping, Firewall guard gauges) with an authoritative FastAPI WebSocket backend for LAN & online PvP.",
    category: "Full-Stack & Web",
    year: "2026",
    image: "/projects/cybermon.jpg",
    imageAlt: "Isometric hexagonal firewall arena illustration representing CyberMon Tekken Protocol",
    repoUrl: "https://github.com/aedriansagap/cybersecurity-pokemon-fighting-game",
    language: "JavaScript",
    techStack: ["FastAPI", "Python", "WebSockets", "HTML5 Canvas", "JavaScript"],
    highlights: [
      "Tekken-style 4-limb combat, high/mid/low guard hierarchy, launchers, air juggles, and 2.5D lane sidesteps.",
      "Zero-Day Rage Arts require solving live cybersecurity challenges to authenticate and unleash super moves.",
      "Supports 4 AI threat levels, local 2-player PvP, SOC frame-data training, and room-code LAN matchmaking.",
    ],
    architectureNote:
      "Authoritative Python FastAPI + WebSocket game server broadcasting room states across local networks, driving a zero-dependency 60 FPS Canvas renderer with 15+ incident-response trivia scenarios.",
  },
  {
    id: "epub-reader",
    slug: "epub_reader",
    title: "EPUB Reader & Digital Library",
    tagline: "Offline-first mobile reading sanctuary with telemetry & annotations",
    description:
      "A sleek React Native & Expo digital library engineered for distraction-free reading. Includes paginated and continuous scroll engines, four curated reading themes, multi-color highlights with notes, instant dictionary lookups, reading streaks, and full JSON backup portability.",
    category: "Mobile & Tools",
    year: "2026",
    image: "/projects/epub-reader.jpg",
    imageAlt: "Sculptural open book with copper ribbon in gallery lighting representing EPUB Reader",
    repoUrl: "https://github.com/aedriansagap/epub_reader",
    pinned: true,
    language: "JavaScript",
    techStack: ["React Native", "Expo", "Epub.js", "React Navigation", "AsyncStorage"],
    highlights: [
      "Paginated & scrolled reading modes, hierarchical TOC, full-text search, sleep timer, and instant dictionary API.",
      "Four handcrafted reading themes (Obsidian, Slate, Sepia, Paper) with dynamic font scaling and serif/mono options.",
      "Session telemetry tracking active reading seconds, daily goal streaks, custom bookshelves, and JSON export/restore.",
    ],
    architectureNote:
      "Offline-first architecture built on React Native 0.86, Expo SDK 57, Epub.js WebView bridge, and local AsyncStorage persistence with portable JSON schema backups.",
  },
  {
    id: "vit-eurosat",
    slug: "vit-eurosat",
    title: "Satellite Land Cover Classifier",
    tagline: "Vision Transformer (ViT) fine-tuned on 27,000 Sentinel-2 satellite images",
    description:
      "An end-to-end computer vision training and serving pipeline that fine-tunes a Vision Transformer on the EuroSAT RGB dataset to classify 10 land-use and land-cover categories, complete with automated Hugging Face Hub publishing and a real-time Gradio web app.",
    category: "AI & ML",
    year: "2026",
    image: "/projects/vit-eurosat.svg",
    imageAlt: "Top-down Vision Transformer satellite patch attention mosaic representing ViT EuroSAT",
    repoUrl: "https://github.com/aedriansagap/vit-eurosat",
    language: "Python",
    techStack: ["Python", "Vision Transformer", "PyTorch", "Hugging Face", "Gradio"],
    highlights: [
      "Parameterized train.py handling 80/10/10 dataset splitting, image augmentations, evaluation, and Hub upload.",
      "Classifies 10 Sentinel-2 LULC categories including Forest, River, Industrial, Residential, and AnnualCrop.",
      "Interactive Gradio inference interface supporting dynamic model loading from the Hugging Face Hub.",
    ],
    architectureNote:
      "Modular Hugging Face Trainer pipeline paired with a lightweight Gradio serving frontend ready for Hugging Face Spaces deployment.",
  },
  {
    id: "aedex-simpleui",
    slug: "aedex-simpleUI",
    title: "aedex-simpleUI",
    tagline: "Zero-verbosity, strongly-typed CSS-in-JS styling engine for React",
    description:
      "A lightweight CSS-in-JS library built to eliminate utility-class clutter in JSX. Compiles strongly-typed style objects with responsive breakpoints and keyframes into hashed, cached CSS rules backed by native CSS variables for zero-rerender theming.",
    category: "Mobile & Tools",
    year: "2026",
    image: "/projects/aedex-ui.jpg",
    imageAlt: "Interlocking matte architectural design token blocks representing aedex-simpleUI",
    repoUrl: "https://github.com/aedriansagap/aedex-simpleUI",
    stars: 1,
    language: "TypeScript",
    techStack: ["TypeScript", "React", "CSS Variables", "Style Engine"],
    highlights: [
      "Keeps JSX purely structural via clean object spreading (<div {...styles.card}>) with full autocomplete.",
      "Nested responsive breakpoints, pseudo-classes, and first-class createKeyframes animation helpers.",
      "CSS Custom Property <ThemeProvider> repaints themes natively in the browser without React re-renders.",
    ],
    architectureNote:
      "Deterministic style-hash generator with deduplicated <head> stylesheet injection and compile-time TypeScript token inference.",
  },
];

export const ARCHIVE_REPOS: ArchiveRepo[] = [
  {
    name: "wpm_checker",
    language: "Rust / Tauri",
    year: "2026",
    summary: "Lightweight native desktop typing speed tracker built with Tauri v2, Rust, React 19, and TypeScript.",
    repoUrl: "https://github.com/aedriansagap/wpm_checker",
    pinned: true,
  },
  {
    name: "vndb-mobile",
    language: "TypeScript / Expo",
    year: "2026",
    summary: "Native dark-mode React Native mobile client for the Visual Novel Database powered by VNDB Kana API v2.",
    repoUrl: "https://github.com/aedriansagap/vndb-mobile",
  },
  {
    name: "journal-cli",
    language: "Python",
    year: "2025",
    summary: "Minimalist pipx-installable command-line journal for logging daily thoughts, moods, and reflections.",
    repoUrl: "https://github.com/aedriansagap/journal-cli",
  },
  {
    name: "PersonalTaskTracker",
    language: "C#",
    year: "2026",
    summary: "Structured personal task and workflow tracker engineered in C#.",
    repoUrl: "https://github.com/aedriansagap/PersonalTaskTracker",
  },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    period: "May 2025 — Jul 2025",
    role: "Information Technology Intern (Team Lead)",
    organization: "Department of Science and Technology (DOST) — Regional Office I",
    location: "La Union, Philippines",
    type: "Experience",
    summary:
      "Led an internship engineering team to architect and ship E-sumite, a financial reporting platform for the Accounting Office—permanently adopted by the agency and rebranded as FTRACS (Financial Tracking Reports and Compliance System).",
    highlights: [
      "Designed a multi-tenant reporting architecture uniting Regional Office I and provincial offices.",
      "Collaborated directly with the ITSM Unit to harden and deploy production-ready code.",
    ],
  },
  {
    period: "2025 — 2026",
    role: "Lead Developer — Undergraduate Thesis (VisitTrack)",
    organization: "BJMP Agoo District Jail Office",
    location: "Agoo, La Union, Philippines",
    type: "Thesis",
    summary:
      "Led architecture and full-stack implementation of VisitTrack, a secure, low-latency LAN-based visitor monitoring system tailored for institutional deployment.",
    highlights: [
      "Containerized the full application stack using Docker for reproducible on-premise deployment.",
      "Implemented automated end-to-end Playwright test suites and k6 high-volume stress testing.",
    ],
  },
  {
    period: "Graduated May 2026",
    role: "BS in Computer Science — Magna Cum Laude",
    organization: "Don Mariano Marcos Memorial State University (DMMMSU-SLUC)",
    location: "Agoo, La Union, Philippines",
    type: "Education",
    summary:
      "Completed Bachelor of Science in Computer Science with Latin honors while serving as Club Secretary of the Computer Science Club (S.Y. 2024–2025).",
    highlights: [
      "Led academic software engineering projects spanning mobile, web, and applied AI.",
      "Completed PSA Community Based Monitoring System (CBMS) data-driven governance orientation (Dec 2025).",
    ],
  },
  {
    period: "Certified",
    role: "PhilNITS IT Passport (IP) Certified Professional",
    organization: "Philippine National IT Standards Foundation",
    location: "Philippines",
    type: "Credential",
    summary:
      "Nationally recognized certification validating core foundations in software engineering, systems strategy, management, and information security.",
    highlights: [],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "Python", "JavaScript", "SQL", "C#", "C", "Java", "Rust", "HTML / CSS"],
  },
  {
    category: "Frameworks & UI",
    items: ["Next.js", "React", "React Native (Expo)", "FastAPI", "Node.js & Express", "Flask", "Tauri"],
  },
  {
    category: "Data & Applied AI",
    items: ["PostgreSQL", "Supabase (RLS)", "MongoDB", "MariaDB", "ChromaDB", "llama.cpp", "Groq LLM", "PyTorch / ViT"],
  },
  {
    category: "Quality & Infrastructure",
    items: ["Docker", "Playwright E2E", "k6 Load Testing", "WebSockets / Socket.io", "Linux", "Git & GitHub Actions"],
  },
];
