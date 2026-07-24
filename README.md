# Louis Thevenet — Portfolio

A single-page portfolio built with [Astro](https://astro.build), styled as a
terminal session (fits the day job: Rust/C++ systems work, NixOS, TUI apps).

## Structure

- `src/data/content.ts` — **all copy lives here.** Name, bio, experience,
  education, skills, and the list of GitHub repos to feature. Edit this file
  to update the site's content without touching any component.
- `src/components/` — one component per section (`Hero`, `Experience`,
  `Projects`, `Contributions`, `Education`, `SkillsFooter`).
- `src/components/Projects.astro` fetches live repo data (description,
  language, stars, forks, last push) from the public GitHub REST API in the
  browser at load time, using the repo names listed in `content.ts`. If the
  request fails (offline, rate-limited) it falls back to the static
  `fallback` text you provided per project — the page never breaks.

## Adding / editing projects

Open `src/data/content.ts` and edit the `projects` array:

```ts
{
  repo: "owner/repo-name",
  tags: ["Rust", "CLI"],
  fallback: "One-line description shown if the GitHub API can't be reached.",
}
```

Same pattern for `contributions` (repos you contribute to but don't own).

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static site to ./dist
npm run preview   # serve the production build locally
```

## Deploying

`npm run build` produces a fully static `dist/` folder — drop it on any
static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.). No
server or environment variables required; the GitHub API calls happen
client-side and use no auth token, so they're subject to GitHub's
unauthenticated rate limit (60 requests/hour per IP — plenty for a personal
site).
