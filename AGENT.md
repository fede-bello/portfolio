# Portfolio Project - AGENT.md

> [!IMPORTANT]
> This file is the **SINGLE SOURCE OF TRUTH** for this project's coding standards, architecture, and agent behavior.
> ALL generated code and changes MUST adhere to these rules.

## 1. Project Overview

This is a personal portfolio website built with a modern React stack. It is a static-data-driven application where content (projects, experience, publications) is stored in TypeScript files (`data.ts`) rather than a backend database.

### Core Tech Stack

- **Framework**: React 18+ (Vite)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS 3.4+ configured with CSS variables
- **Icons**: `lucide-react`, `react-icons`
- **Animations**: `framer-motion`
- **Routing**: `react-router-dom`
- **Utilities**: `clsx` for class merging
- **Deployment**: Static build (`vite build`)

## 2. Architecture & Directory Structure

### Directory Map

- `src/components/`: **Presentational only**. Reusable UI elements (e.g., `Button`, `Card`) and distinct feature blocks.
- `src/pages/`: Route-level components. Maps to routes defined in `main.tsx` or router config.
- `src/layouts/`: Wrapper components like `AppLayout` providing common structure (Navbar, Footer).
- `src/hooks/`: **Business logic**. Custom hooks (e.g., `useTheme`) to keep components clean.
- `src/types/`: Shared TypeScript interfaces. Separate by domain (e.g., `projects.ts`, `experience.ts`).
- `src/data/` (or via feature folders like `src/experience/data.ts`): **Static Content**. All portfolio data resides here.
- `src/styles/`: Global styles (`globals.css`) and Tailwind setup.

### Key Architectural Patterns

- **Feature-based Data**: Data is often co-located or organized by feature (e.g., `src/experience/data.ts`).
- **Type Centralization**: Types are centralized in `src/types/` for reuse across components and data files.
- **Layouts**: Pages should be wrapped in `AppLayout` or similar layout components to ensure consistent navigation and theming.

## 3. Coding Standards (Migrated from .cursor/rules)

### General React

- **Functional Components Only**: No class components.
- **Named Exports**: Use named exports (`export const Component = ...`) instead of `export default`.
- **Composition**: Prefer component composition over complex abstractions.
- **Simple hooks**: Logic extracted to `src/hooks` when reusable or complex.

### TypeScript

- **Strict Typing**: No `any`. Define interfaces for all props and data.
- **No Enums**: Prefer union types (`'light' | 'dark'`) over enums unless absolutely necessary.

### Styling (Tailwind CSS)

- **Utility-First**: Use Tailwind utility classes for 99% of styling.
- **CSS Variables**: Use CSS variables for theme correctness (e.g., colors that change in dark mode).
- **Dark Mode**: Implemented via the `class` strategy (toggling a class on `html`).
- **Helpers**: Use `clsx` for conditional class application.

### Accessibility (a11y)

- **Semantic HTML**: Use `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`.
- **Labels**: Ensure all inputs and buttons have labels or `aria-label`.
- **Focus**: Maintain visible focus states for keyboard navigation.

### Animations

- **Framer Motion**: Use for page transitions and micro-interactions. Keep animations subtle and performant.

## 4. Workflow & Conventions

### Imports

- **Absolute Imports**: Use `@/` alias for `src/` (e.g., `import { Button } from "@/components/Botton"`).

### Formatting

- **Line Length**: Max 100 characters.
- **Quotes**: Double quotes for strings (consistency with Prettier/ESLint).
- **Semicolons**: Always use semicolons.

### Git & Build

- **No Secrets**: Never commit `.env` files or secrets.
- **Build Output**: Do not commit `dist/`.
- **Package Manager**: `npm` is the primary package manager (based on `package-lock.json`).

## 5. Agent Behavior Protocols

1.  **Search First**: When fixing a bug or adding a feature, search existing files to check for established patterns (e.g., how `ExperienceCard` is implemented before making `PublicationCard`).
2.  **Respect Data Structure**: When adding new portfolio items, update the corresponding `data.ts` file and ensure it matches the `type` definition in `src/types/`.
3.  **UI Consistency**: When creating new components, check `tailwind.config.ts` and `globals.css` to use existing color variables and font families (`font-inter`).
4.  **No "Any"**: If you encounter a typing difficulty, solve it with proper generics or utility types, not `any`.

---

_Created by Agent on 2025-12-16 based on .cursor/rules and repository analysis._
