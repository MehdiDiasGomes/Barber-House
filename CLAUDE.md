# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 16** project with **React 19**, **TypeScript**, and **Tailwind CSS v4**. It's a barber house application built with the App Router pattern (Next.js app directory). The project uses **Bun** as the package manager.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Lint code with ESLint
bun run lint
```

## Architecture and Structure

### Project Layout

- **`/app`** - Next.js app directory containing all routes and layout
  - `layout.tsx` - Root layout with global metadata and font configuration
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with Tailwind CSS
  - `favicon.ico` - Application favicon

- **`/public`** - Static assets
  - `/images/hero/` - Hero section images (bg.jpg)
  - `/images/sections/` - Other section images

- **`/components`** - React components
  - `/ui/` - Reusable UI components (Icon, etc.)
  - `/sections/` - Layout sections (Navbar, etc.)

- **`/constants`** - Application constants and configuration

- **`/types`** - TypeScript type definitions

### Tech Stack Details

- **Framework**: Next.js 16.1.6 with App Router
- **React**: 19.2.3 with JSX support
- **Styling**: Tailwind CSS v4 with PostCSS
- **Language**: TypeScript 5 with strict mode enabled
- **Linting**: ESLint 9 with Next.js core web vitals and TypeScript rules
- **Package Manager**: Bun

### Key Configuration Files

- **`tsconfig.json`** - TypeScript configuration with `@/*` path alias pointing to repository root
- **`eslint.config.mjs`** - ESLint configuration extends Next.js defaults (core-web-vitals and TypeScript)
- **`next.config.ts`** - Next.js configuration (currently empty, ready for customization)
- **`postcss.config.mjs`** - PostCSS configuration with Tailwind CSS v4

## Development Notes

### Path Aliases

Use the `@/` alias for absolute imports throughout the codebase. For example:
```typescript
import Layout from "@/app/layout";
```

### TypeScript Settings

- **Target**: ES2017
- **Strict Mode**: Enabled
- **Module Resolution**: bundler
- **JSX**: react-jsx

### Styling

The project uses **Tailwind CSS v4** with the new PostCSS plugin. Global styles are in `app/globals.css`. Use Tailwind utility classes for component styling.

**IMPORTANT:** No border radius on this project. Do NOT use:
- `rounded`, `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-full`
- Any variant of border-radius

All components must have sharp corners (0 radius).

### Font Optimization

The project uses Next.js font optimization with Google Fonts:
- **Cinzel** - For headings and titles (h1-h6) - elegant and premium
- **Montserrat** - For body text and general content

Fonts are configured in `app/layout.tsx` with CSS variables (`--font-cinzel`, `--font-montserrat`) available globally. All headings automatically use Cinzel font family.

### Global Typography (DRY Principle)

All heading sizes are defined globally in `app/globals.css` using Tailwind's `@apply` directive. **Never hardcode typography classes in components** - let CSS handle it:

```css
h1 { @apply text-5xl lg:text-7xl font-bold; }
h2 { @apply text-4xl lg:text-5xl font-bold; }
h3 { @apply text-4xl lg:text-5xl font-bold; }
h4 { @apply text-xl lg:text-2xl font-bold; }
```

Use semantic HTML tags and let global styles apply automatically:
```typescript
// ✅ CORRECT - Let CSS handle sizing
<h1>Page Title</h1>
<h3 className="text-center">Section Title</h3>

// ❌ WRONG - Never hardcode typography sizes
<h3 className="text-4xl lg:text-5xl font-bold">Section Title</h3>
```

For exceptions (e.g., smaller stat numbers), use `!` modifier to override:
```typescript
// ✅ Override when needed
<h3 className="!text-3xl lg:!text-4xl">999+</h3>
```

## Git Commit Conventions

### Commit Message Format

Use the following structure with gitMoji:

```
[emoji] [type]: [description]
```

### Commit Types

- **🐛 fix**: Bug fixes and corrections
- **🚑️ hotfix**: Critical hotfixes (should be rare)
- **✨ feat**: New features or significant additions
- **🏷️ types**: Type definitions and TypeScript improvements
- **♻️ refactor**: Code refactoring without functionality changes
- **📝 docs**: Documentation updates
- **💄 style**: Formatting, styling changes (CSS, Tailwind)
- **⚡ perf**: Performance improvements
- **🧪 test**: Test additions and modifications
- **🔧 chore**: Configuration, dependencies, build tools

### Examples

```bash
# New feature
git commit -m "✨ feat: create ServiceCard component with proper typing"

# Type definitions
git commit -m "🏷️ types: add Service and NavLink interfaces"

# Bug fix
git commit -m "🐛 fix: correct font family variable reference in globals.css"

# Refactor
git commit -m "♻️ refactor: extract navigation data to constants"
```

## Code Standards & Architecture

### TypeScript & Type Safety

**CRITICAL RULES:**
- **No `any` or `unknown` types** - Every variable, function parameter, and return type must be explicitly typed
- All types must be declared in `/types` directory
- Use specific type imports: `import type { Service } from "@/types"`
- Use strict null checking (already enabled in `tsconfig.json`)

### Directory Structure

```
/app                    # Next.js app directory (routes & pages)
/components             # Reusable React components
  /ui                   # Generic UI components (Button, Card, etc.)
  /sections             # Page sections (Hero, Services, Contact, etc.)
/types                  # TypeScript type definitions
  /index.ts             # Central export file for all types
  /service.ts           # Service-related types
  /navigation.ts        # Navigation-related types
  /contact.ts           # Contact-related types
/constants              # Application constants
/hooks                  # Custom React hooks
/utils                  # Utility functions
```

### Clean Code Principles

1. **DRY (Don't Repeat Yourself)**
   - Extract reusable logic into components
   - Create utility functions for repeated operations
   - Use constants instead of hardcoded values

2. **Component Reusability**
   - Build small, focused components
   - Props should be properly typed with interfaces
   - Components in `/components/ui` are generic and reusable
   - Components in `/components/sections` are page-specific but composable

3. **File Naming**
   - Component files: PascalCase (e.g., `ServiceCard.tsx`)
   - Utility files: camelCase (e.g., `formatPrice.ts`)
   - Type files: camelCase (e.g., `service.ts`)

4. **Comments & Documentation**
   - **NO inline comments** anywhere in the code
   - Use **TSDoc** comments ONLY for:
     - Complex functions or functions with multiple steps
     - Do NOT comment component functions (components that render JSX/HTML)
   - Do NOT comment simple variables, interfaces, or straightforward functions
   - TSDoc must be concise and clear in English
   - TSDoc format: `/** Description */` for single-line, `/** ... */` for multi-line

5. **React Components**
   - **Do NOT use JSX.Element return type** - Let TypeScript infer the type
   - Component function example:
     ```typescript
     export function Hero() {
       return (
         <section>...</section>
       );
     }
     ```
   - Do NOT add TSDoc comments on component functions (the JSX is self-documenting)

### TSDoc Examples

```typescript
export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
}

const toggleMenu = (): void => {
  setIsOpen(!isOpen);
};

/**
 * Formats a price value to currency format.
 * @param price - The price as a number
 * @returns Formatted price string (e.g., "$25.00")
 */
function formatPrice(price: number): string {
  return `$${(price / 100).toFixed(2)}`;
}

/**
 * Renders the main navigation bar with responsive desktop and mobile layouts.
 * Includes logo, navigation links, and CTA button with mobile hamburger menu.
 */
export function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // ...
}
```

4. **Props Interface Pattern**
   ```typescript
   interface ButtonProps {
     label: string;
     onClick: () => void;
     variant?: 'primary' | 'secondary';
   }

   export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
     // ...
   }
   ```

5. **Constants & Configuration**
   - Store service data, navigation links, contact info in `/constants`
   - Never hardcode values in components
   - Export constants with proper types

6. **Imports**
   - Use `@/` path alias for all imports
   - Group imports: React, Next.js, internal imports, types
   - Use type imports for types: `import type { Service }`

### Example Type Declaration

File: `/types/service.ts`
```typescript
export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
}
```

File: `/components/ServiceCard.tsx`
```typescript
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    // Component JSX
  );
}
```
