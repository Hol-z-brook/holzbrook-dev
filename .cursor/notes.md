# Project Notes

## Astro Components

- All Astro components must have front matter delimited by `---` at the start and end of the front matter section.
- Front matter is required for:
  - Component imports
  - Type definitions
  - Props interface
  - Any JavaScript/TypeScript code that needs to run at build time
- The front matter section must be the first thing in the file
- For client-side interactivity, use `client:*` directives (e.g., `client:load`, `client:visible`)
- Components should be organized by domain/feature path:
  - `src/lib/ui` - Shared, reusable components
  - `src/lib/[domain]/components/` - Domain-specific components
  - `src/lib/[domain]/layouts/` - Layout components
  - `src/pages/` - Page components

Example:

```astro
---
import { Component } from 'astro';
import type { Props } from './types';

interface Props {
  title: string;
  isInteractive?: boolean;
}

const { title, isInteractive = false } = Astro.props;
---

<Component
  title={title}
  class:list={['base', { 'interactive': isInteractive }]}
  client:load={isInteractive}
/>
```

### Best Practices

- Keep components focused and single-responsibility
- Use TypeScript for type safety
- Document complex props with JSDoc comments
- Prefer composition over inheritance
- Use CSS modules or scoped styles for component-specific styling
- Place components in their appropriate domain directory to maintain clear separation of concerns

---

## Icon Components

- All icon components follow a consistent pattern:
  - Use the `astro-icon` package
  - Import from `astro-icon/components`
  - Accept `class`, `size`, and `color` props
  - Use local SVG files in `src/lib/ui/icons/local/`
  - Naming convention: `*Icon.astro`

### Icon Usage Guidelines

- Standard sizes: 16px, 24px, 32px, 48px
- Use semantic color tokens for icon colors
- Always include an aria-label or aria-hidden="true"
- For interactive icons, use `client:load` directive

Example:

```astro
---
import { Icon } from 'astro-icon/components';

interface Props {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  label?: string;
}

const { name, size = 'md', color = 'currentColor', label } = Astro.props;
const sizes = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48
};
---

<Icon
  name={name}
  size={sizes[size]}
  color={color}
  aria-label={label}
  aria-hidden={!label}
  class:list={['icon', `icon-${size}`]}
/>
```

### Best Practices

- Keep SVG files optimized and clean
- Use consistent stroke widths (1.5px or 2px)
- Document icon usage in Storybook
- Group related icons in subdirectories
- Use semantic names that describe the icon's purpose

---

## E2E Testing with Playwright (Cursor Standard)

### 🔧 Setup Instructions

1. **Install Playwright**

```bash
pnpm install -D @playwright/test
npx playwright install
```

2. **Create Playwright Config**

Save as `playwright.config.ts` at the root:

```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  timeout: 30000,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report' }],
    ['junit', { outputFile: 'results/junit.xml' }],
  ],
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    headless: process.env.CI ? true : false,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1280, height: 720 },
  },
  projects: [
    {
      name: 'colocated',
      testDir: './src',
      testMatch: /.*\\.e2e\\.ts/,
    },
    {
      name: 'flows',
      testDir: './tests/flows',
    },
    {
      name: 'smoke',
      testDir: './tests/smoke',
    },
  ],
});
```

3. **Add Test Scripts to `package.json`**

```json
{
  "scripts": {
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:e2e:debug": "playwright test --debug",
    "test:e2e:report": "playwright show-report"
  }
}
```

### 📁 Directory Structure for E2E

```txt
src/
  lib/
    ui/
      components/
        ProjectCard/
          ProjectCard.astro
          ProjectCard.e2e.ts          ← Colocated test
    [domain]/
      components/
        Experience/
          Experience.astro
          Experience.e2e.ts           ← Domain-specific test
      layouts/
        MainLayout.astro
        MainLayout.e2e.ts             ← Layout test
  pages/
    _/
      test/
        setup.ts                      ← Test setup and utilities
        fixtures.ts                   ← Test fixtures
    projects/
      index.astro
      _e2e/
        projects.e2e.ts               ← Hidden colocated test

tests/
  flows/
    navigation-flow.spec.ts           ← Full flow tests
  smoke/
    basic-access.spec.ts             ← Core smoke tests
```

### ✅ Testing Best Practices

- **Colocate feature or page-specific tests** directly with their source code using `.e2e.ts`
- **Place broader flows or smoke tests** under `/tests/flows` or `/tests/smoke`
- **Avoid polluting Astro routes** by placing test files in `/_e2e/` folders
- **Use `data-testid` or `getByRole()`** for selectors
- **Avoid implementation details** in tests – focus on user behavior
- **Use Cursor's jump-to-test shortcut** to stay in flow
- **Prefer declarative setup**: `await page.goto('/')` → click through UI as user would
- **Use test isolation** - each test should be independent
- **Implement proper cleanup** after tests
- **Use meaningful test descriptions** that explain the expected behavior
- **Leverage test fixtures** for common setup and teardown
- **Implement proper error handling** and retries for flaky tests

### 🧪 Example Test

```ts
import { test, expect } from '@playwright/test';

test('projects page displays project cards', async ({ page }) => {
  await page.goto('/projects');
  const projectCards = page.getByTestId('project-card');
  await expect(projectCards).toHaveCount(3);
  await expect(projectCards.first()).toContainText('Project Title');
});
```
