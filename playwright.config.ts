import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  fullyParallel: true,
    reporter: [
    ['html'],
    ['list']
  ],
  use: {
    headless: true,
    viewport: { width: 1280, height: 800 },
    baseURL: 'https://demo.relbase.cl',
    // Prefiero tener screenshots solo cuando falla para no llenar el disco
    screenshot: 'only-on-failure',
    // Video me ayuda mucho para debuggear cuando trabajo remoto
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    ignoreHTTPSErrors: true,
  },
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
    // Decidí usar solo Chrome para este challenge porque es más estable
  // En un proyecto real usaría los 3 browsers
    projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
