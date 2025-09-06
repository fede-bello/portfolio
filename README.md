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
