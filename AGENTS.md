# Agent Instructions

This file contains instructions and context for AI agents working on this codebase.

## Project Overview
- **Architecture**: React application built with Vite, Tailwind CSS, and shadcn/ui components.
- **Landing Page**: Structure and component composition are defined in `src/pages/Index.tsx`.
- **Backend**: Integrates with Supabase, configured in `src/integrations/supabase/client.ts`.

## Development Workflow
- **Package Manager**: Use `pnpm`. Do not use `npm` or `yarn`.
- **Commands**:
  - Build: `pnpm build`
  - Lint: `pnpm lint`
  - Dev Server: `pnpm dev`
  - Preview: `pnpm preview`
- **Testing**: There is currently no test script or test runner configured.

## Coding Standards & Constraints
- **Scope**: Code changes must focus on micro-UX improvements (<50 lines).
- **Styling**: Use existing Tailwind classes.
- **Accessibility**: Prioritize accessibility (e.g., adding ARIA labels) without adding new dependencies.
- **Mobile Navigation**: Implemented using the `Sheet` component from `src/components/ui/sheet.tsx`.

## Known Issues
- **Linting**: `pnpm lint` fails due to pre-existing errors in `src/components/ui` and `tailwind.config.ts`. Distinguish these from new errors.

## Documentation
- **UX/Accessibility**: Record critical learnings in `.Jules/palette.md` following the specific format if the file exists or is created.
- **Security**: Record critical security learnings in `.Jules/sentinel.md` following the specific format.
