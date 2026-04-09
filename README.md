# Portfolio Website — Sushanth Kakarlapudi

A personal portfolio website built with [Astro](https://astro.build/) and [TailwindCSS](https://tailwindcss.com/), showcasing my experience, AI projects, skills, and certifications.

## Sections

- **Hero** — Introduction with name, title, and professional summary
- **Experience** — Work history at Walmart Global Tech, American Airlines, USAA, and AT&T
- **Projects** — Featured AI projects: DocPilot (RAG), LLM Task Manager (Agentic AI), LuminaAI (Inference Engine)
- **Skills & Certifications** — Technical skills across 6 categories + professional certifications
- **About** — Bio and background

## Features

- Minimalist, dark-themed design
- Mobile-first responsive layout
- SEO-friendly with Open Graph and Twitter card meta tags
- Single configuration file for all content (`src/config/index.ts`)
- Sticky project cards with scroll animation
- Accessible navigation with mobile menu

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/shawnk1188/portfolio-website.git
cd portfolio-website
```

| Command         | Action                                       |
| :-------------- | :------------------------------------------- |
| `pnpm install`  | Install dependencies                         |
| `pnpm dev`      | Start local dev server at `localhost:4321`    |
| `pnpm build`    | Build production site to `./dist/`            |
| `pnpm preview`  | Preview build locally before deploying        |

## Customization

All site content is managed in a single file: `src/config/index.ts`

- **Hero**: Name, title, summary, email
- **Experience**: Company, role, dates, bullet points
- **Projects**: Name, description, GitHub link, preview image
- **Skills**: Category groupings with technology tags
- **About**: Bio text and profile image

Images are stored in the `public/` directory.

## Deployment

This site is configured for deployment on [Vercel](https://vercel.com/):

```bash
pnpm build
```

Or connect your GitHub repository to Vercel for automatic deployments on push.

## Tech Stack

- [Astro](https://astro.build/) — Static site framework
- [TailwindCSS v4](https://tailwindcss.com/) — Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Gabarito](https://fonts.google.com/specimen/Gabarito) + [Be Vietnam Pro](https://fonts.google.com/specimen/Be+Vietnam+Pro) — Typography
