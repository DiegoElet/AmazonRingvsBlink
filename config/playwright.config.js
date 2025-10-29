// config/playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // Timeout for each test
  timeout: 60 * 1000, // 60 seconds
  
  // Timeout for assertions
  expect: {
    timeout: 10 * 1000, // 10 seconds
  },

  use: {
    // Run browser in headed mode or not
    headless: process.env.HEADLESS === 'false' ? false : true,
    // Record trace for each test, 'on-first-retry' is a good default
    trace: 'on-first-retry',
    // Capture screenshot on failure
    screenshot: 'only-on-failure',
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});