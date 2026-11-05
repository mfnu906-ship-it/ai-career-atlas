# AI Career Atlas

A living field guide to emerging careers in the growing AI industry: what roles like forward deployed engineer, AI engineer, and AI evaluation engineer involve, how titles overlap, and what to look for in real job descriptions.

## Website

**Website:** https://mfnu906-ship-it.github.io/ai-career-atlas/

## Explore the guide

- [Emerging role map](docs/roles/index.md)
- [Forward deployed engineer](docs/roles/forward-deployed-engineer.md)
- [AI engineer](docs/roles/ai-engineer.md)
- [AI evaluation engineer](docs/roles/evaluation-engineer.md)
- [How to read a job description](docs/research/reading-job-descriptions.md)

## Run locally

Requires Node.js 20 or later.

```sh
npm ci
npm run docs:dev
```

Build or preview the production site with `npm run docs:build` and `npm run docs:preview`.

## Publish

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the VitePress site and deploys it to GitHub Pages whenever a commit is pushed to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

## Research approach

This project compares recurring work patterns across changing AI titles. Role descriptions are synthesis, not universal definitions. Examples link to employer descriptions; job postings change or close, so check the original source for current details. The guide is independent career research and is not employment advice.
