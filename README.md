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

## Notes

- Replace placeholders like [Your Bio Here] with your content.
- Contact form is non-functional; wire it to a backend or form service.
- Smooth scrolling is enabled; use anchor links as needed.

## Theming

- Theme stored in localStorage under `theme` and applied as `dark` class on `<html>`.
- Toggle via the navbar switch.

## Accessibility

- Semantic HTML, proper labels, and focus styles.
