import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    // Test the STATIC EXPORT that actually ships (output: 'export'), not the dev
    // server — dynamic [slug] routes compile on-demand in dev and blow the nav timeout.
    command: 'npm run build && npx serve out -l 3000',
    url: 'http://localhost:3000',
    timeout: 180_000,
    reuseExistingServer: !process.env.CI,
  },
});
