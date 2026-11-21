# Aedrian Sagap — Personal Portfolio

Personal portfolio website for **Aedrian Rimorin Sagap**, Software Engineer (BS Computer Science, Magna Cum Laude · PhilNITS IT Passport Certified).

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Vanilla CSS** using a Warm Obsidian & Paper editorial design system.

## Highlights

- **Curated GitHub Project Showcase** — Highlights major repositories (`Agentic-Ticketing-System`, `TypeClash`, `lost-and-found-app` / RECLAIM, `ai-portfolio-assistant`, `cybersecurity-pokemon-fighting-game`, `epub_reader`, `vit-eurosat`, and `aedex-simpleUI`) with live demo links, source links, category filtering, and technical breakdown modals.
- **Experience, Thesis & Credentials Ledger** — Details DOST Regional Office I internship impact (E-sumite / FTRACS), VisitTrack LAN thesis (Docker, Playwright, k6), DMMMSU BS Computer Science (Magna Cum Laude), and PhilNITS IT Passport certification.
- **Direct Social & Contact Channels** — LinkedIn (`linkedin.com/in/aedrian-sagap-936191247`), GitHub (`github.com/aedriansagap`), and one-click copyable email.
- **Dual Theme Support** — Persistent Obsidian (dark) and Paper (light) modes with accessible keyboard navigation and responsive layout.

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Verification

```bash
npm run lint
npm run build
```

## Deploy to Firebase Hosting

This project is configured for Next.js static export (`output: "export"` in `next.config.ts`) and includes a ready-to-use `firebase.json` serving the generated `out/` directory (compatible with Firebase's free Spark plan).

### Manual Deploy

```bash
npm install -g firebase-tools
firebase login
firebase use --add   # select your Firebase project
npm run build
firebase deploy --only hosting
```

### Automatic Deploys via GitHub Actions

Two workflows are preconfigured in `.github/workflows/`:

- **`firebase-hosting-merge.yml`** — Lints, builds `out/`, and deploys to the `live` Firebase Hosting channel on every push to `main` (and via manual `workflow_dispatch`).
- **`firebase-hosting-pull-request.yml`** — Runs lint + build checks on every PR and publishes a temporary 7-day Firebase preview URL once credentials are configured.

To activate automatic deploys, add two entries in **GitHub Repository → Settings → Secrets and variables → Actions**:

1. **`FIREBASE_SERVICE_ACCOUNT`** *(Repository Secret)* — JSON key for a Firebase service account with the **Firebase Hosting Admin** role (generate in Firebase Console → Project Settings → Service Accounts, or via Google Cloud IAM).
2. **`FIREBASE_PROJECT_ID`** *(Repository Variable or Secret)* — Your Firebase project ID (e.g., `my-portfolio-12345`).
