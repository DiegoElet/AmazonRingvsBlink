// support/world.js
const { setWorldConstructor, Before, After, World } = require('@cucumber/cucumber');
const { chromium, firefox } = require('playwright');
const config = require('./playwright.config');

class CustomWorld extends World {
  constructor(options) {
    super(options);
    // Variables to store across steps
    this.ringBasicYearlyPrice = null;
    this.blinkBasicYearlyPrice = null;
  }
}

setWorldConstructor(CustomWorld);

// Launch the browser based on the BROWSER environment variable
Before(async function () {
  const browserName = process.env.BROWSER || 'firefox';
  const browserOptions = config.use;

  switch (browserName) {
    case 'chrome':
      this.browser = await chromium.launch(browserOptions);
      break;
    case 'firefox':
      this.browser = await firefox.launch(browserOptions);
      break;
    default:
      throw new Error(`Unsupported browser: ${browserName}`);
  }

  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

// Clean up after each scenario
After(async function () {
  if (this.page) {
    await this.page.close();
  }
  if (this.context) {
    await this.context.close();
  }
  if (this.browser) {
    await this.browser.close();
  }
});