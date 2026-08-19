# fetiai.github.io

The F.E.T.I. organization site — one page showing the group's two projects, served at
<https://fetiai.github.io/>.

This is the **organization** Pages site, so it is published at the domain root. That is
the one thing that differs from `fetiai/magic-cube`, which is a *project* site living at
the `/magic-cube` subpath and therefore sets a `base`. Here `base` stays `/`, and every
asset path in the source is written root-absolute.

## Stack

Astro with Tailwind CSS v4. No client-side framework and no interactive state — the page
ships a single inline script, which disables video autoplay when the visitor prefers
reduced motion.

## Running it

```bash
npm install
npm run dev                        # http://localhost:4321
npm run build && npm run preview   # check the real output before pushing
```

## Content

`src/data/projects.js` and `src/data/team.js` hold everything the page renders. The org
profile README at `fetiai/.github` mirrors that same content by hand — when either data
module changes, update the README block that matches and ship both together.

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds and publishes
`dist/`.

**The repository's Pages source must be set to "GitHub Actions"** under Settings → Pages.
Under the default "Deploy from a branch", `actions/deploy-pages` fails.
