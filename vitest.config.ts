import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    include: ['__tests__/**/*.test.{ts,tsx}'],
    exclude: ['node_modules', '.next', 'e2e', 'stories'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}', 'lib/**/*.{ts,tsx}'],
      exclude: [
        'node_modules/',
        '.next/',
        '.storybook/',
        'stories/',
        'vitest.config.ts',
        'vitest.setup.ts',
        'vitest.shims.d.ts',
        'playwright.config.ts',
        'e2e/',
        '**/*.stories.tsx',
        '**/*.config.*',
        'app/layout.tsx',
        'app/not-found.tsx',
        'app/loading.tsx',
        'app/projects/[slug]/page.tsx'
      ],
      thresholds: {
        lines: 97,
        functions: 80,
        branches: 93,
        statements: 100
      }
    }
  }
});
