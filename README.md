# Portfolio (React + Tailwind + Framer Motion)

A visually polished, single-page portfolio built for GitHub Pages.

## 1) Edit your content (no layout breakage)

Open:

- `src/content/profile.ts`

Everything on the site is driven from this file (About, Experience, Skills, Projects, Research, Blogs, Open Source).

If you want to add your PDF resume:

- place it at `public/resume.pdf`
- and keep `links.resume` as `./resume.pdf`

## 2) Run locally

Prereqs: Node.js 20+

```bash
npm install
npm run dev
```

Vite will print a local URL (usually http://localhost:5173).

## 3) Build locally (optional)

```bash
npm run build
npm run preview
```

## 4) Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `rajan-portfolio`) and push this code to `main`.
2. In the repo:
   - **Settings → Pages**
   - **Build and deployment → Source = GitHub Actions**
3. Push to `main` again (or run the workflow manually).
4. Your site will appear at:

`https://<your-username>.github.io/<repo-name>/`

### Custom domain (optional)

Add a `CNAME` file in `public/` with your domain name.


## Open-source section (PRs)

Edit `profile.openSource` in `src/content/profile.ts`.
Each contribution supports a `prs` array with title, link, status (Merged/Under Review/Draft/Closed), plus impact and metrics.

## Keeping the site readable as it grows

Most sections show a short preview by default (e.g., top PRs, top bullets) with **Show more** controls.
This keeps the homepage clean while still storing full detail in `src/content/profile.ts`.
