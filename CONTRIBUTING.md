# Contributing to Queo

Thank you for your interest in contributing to Queo! This guide will help you get started with your contribution.

## Getting Started

### Prerequisites

- Node.js 20+

### Development Setup

1. Fork the repository
2. Clone your fork
3. Create a new branch for your component:
    ```bash
    git checkout -b feat/your-component-name
    ```
4. Install dependencies:
    ```bash
    pnpm install
    ```
5. Start the development build:
    ```bash
    pnpm build
    ```
    This will start the build in watch mode for all three packages.

## Development Process

### 1. Create Component Types

1. Navigate to `packages/core/src/types`
2. Create your component types file (e.g., `your-component.ts`)
3. Add your types to `index.ts` following existing patterns

### 2. Add Component Styles

1. Create your styles in `src/styles/components/your-component.scss`
2. Import them in `main.scss`
3. Import in `index.ts`

### 3. Implement React Component

1. Navigate to `packages/react/src/components/your-component`
2. Create your component following existing patterns
3. Export it in `index.ts`

### 4. Implement Vue Component

1. Navigate to `packages/vue/src/components/your-component`
2. Create your component
3. Import it in:
    - `types/index.d.ts`
    - `src/index.ts`

## Project Structure

```
queo/
├── packages/
│   ├── core/          # Shared types and styles
│   ├── react/         # React components
│   └── vue/           # Vue components
├── examples/
│   ├── react/         # React example app
│   └── vue/           # Vue example app
```

## Pull Request Process

1. Ensure all checks pass
2. Update documentation if needed
3. Request review from maintainers

## Development Tips

- The build runs in watch mode, so changes are reflected immediately
- Test in both frameworks to ensure consistency
- Follow existing patterns for component implementation
- Keep components framework-agnostic where possible

## Need Help?

- Create an issue for questions
- Join our Discord community (if applicable)
- Check existing components for reference

## Code Style

- Follow TypeScript best practices
- Use consistent naming conventions
- Write clear comments
- Follow framework-specific conventions

Thank you for contributing! 🎉
