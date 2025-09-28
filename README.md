# Portfolio (Vite + React + TypeScript + Tailwind)

A modern, responsive, accessible portfolio template built with Vite, React, TypeScript, Tailwind, Framer Motion, and Lucide icons.

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build

```bash
npm run preview
```

## Prune the project

To find unused dependencies, run:

```bash
depcheck
```

To remove them, run:

```bash
npm prune <package-name>
```

To find unused code:

```bash
npm run knip
```

## Structure

```
/src
  /components    # Reusable UI components
  /layouts       # Navbar, Footer, layout shell
  /pages         # Route-level components
  /hooks         # Custom hooks
  /styles        # Global CSS (Tailwind)
  /types         # Shared TypeScript types
  /projects     # Project definitions
```

## Theming

- Theme stored in localStorage under `theme` and applied as `dark` class on `<html>`.
- Toggle via the navbar switch.

## Accessibility

- Semantic HTML, proper labels, and focus styles.

## Stack

- Vite + React + TypeScript for fast DX and type safety
- Tailwind CSS for utility-first styling and theming (dark via class)
- React Router for client-side routing
- Framer Motion for subtle transitions
- Radix UI primitives (Switch) and Lucide icons for accessible, modern UI

## Projects Page

Projects are rendered from typed data and support inline PDF viewing.

- Data files: `src/projects/data.ts` exporting `personalProjects` and `universityProjects`.
- Types: `src/types/projects.ts`.
- Components used: `ProjectCard`, `PdfList`, `PdfViewerModal`.

### Adding a new project

1. Place PDFs under `public/projects/<group>/<slug>/reports/`.
   - Example: `public/projects/fing/aagrafos/reports/Report 1.pdf`.
2. Edit `src/projects/data.ts` and add a new `Project` entry with:
   - `slug`, `title`, `type` ("personal" | "university"), `timestamp`, `description`.
   - Optional: `tags`, `tech`, `siteUrl`, `attachments`.
3. For PDFs, provide `attachments` with absolute hrefs starting with `/projects/...`.

### Viewing and downloading PDFs

- Single PDF: card shows compact View and Download actions.
- Multiple PDFs: card shows a "Reports (N)" toggle with an animated list.
- PDFs open in an accessible modal via `<object>` with graceful fallback to `<embed>`.

## Contact form (FormSubmit)

The `contact` page posts to FormSubmit using an environment-configured endpoint.

- Set the endpoint in a `.env` file (to send to your inbox):

```bash
VITE_FORMSUBMIT_ENDPOINT=https://formsubmit.co/ajax/<mail-address>
```
