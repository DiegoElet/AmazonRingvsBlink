// pages/BlinkPlansPage.js
const { expect } = require('@playwright/test');
const { blinkUrl } = require('../config/environment');

class BlinkPlansPage {
  constructor(page) {
    this.page = page;
    // Locators
    this.planBlinkBasicText = page.getByText('Plan: Blink Basic');
    this.yearlyText = page.getByText('Yearly', { exact: true });
    
    // Locator for the yearly price associated with the basic plan
    // This selector is specific to this page's structure
    this.blinkBasicYearlyPriceText = page.locator('span.a-price')
                                        .filter({ hasText: '/year' })
                                        .filter({ has: page.locator('span.a-price-symbol', { hasText: '$' }) })
                                        .first();
  }

  async navigate() {
    await this.page.goto(blinkUrl);
  }

  async findPlanText() {
    await expect(this.planBlinkBasicText).toBeVisible();
  }

  async findYearlyText() {
    await expect(this.yearlyText).toBeVisible();
  }

  async getBasicYearlyPrice() {
    await expect(this.blinkBasicYearlyPriceText).toBeVisible();
    const priceText = await this.blinkBasicYearlyPriceText.innerText();
    // Extracts number from text like "$30.00\n/year" -> "30.00"
    const price = priceText.replace(/[^0-9.]/g, '');
    return price;
  }
}

module.exports = { BlinkPlansPage };