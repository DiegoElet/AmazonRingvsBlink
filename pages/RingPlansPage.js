// pages/RingPlansPage.js
const { expect } = require('@playwright/test');
const { ringUrl } = require('../config/environment');

class RingPlansPage {
  constructor(page) {
    this.page = page;
    // Locators
    this.protectPlansTab = page.getByRole('tab', { name: 'Protect Plans' });
    this.comparePlansText = page.getByRole('heading', { name: 'Compare Protect Plans' });
    this.basicPlanText = page.getByRole('heading', { name: 'Basic' });
    
    // Locator for the 'Basic' plan card and its yearly price
    this.basicPlanCard = page.locator('div.subscription-card').filter({ hasText: 'Basic' });
    this.basicYearlyPriceText = this.basicPlanCard.getByText('/year');
  }

  async navigate() {
    await this.page.goto(ringUrl);
  }

  async findComparePlans() {
    await expect(this.protectPlansTab).toBeVisible();
    await this.protectPlansTab.click();
    await expect(this.comparePlansText).toBeVisible();
  }

  async findBasicPlan() {
    await expect(this.basicPlanText).toBeVisible();
  }

  async getBasicYearlyPrice() {
    await expect(this.basicYearlyPriceText).toBeVisible();
    const priceText = await this.basicYearlyPriceText.innerText();
    // Extracts number from text like "$49.99/year" -> "49.99"
    const price = priceText.replace(/[^0-9.]/g, '');
    return price;
  }
}

module.exports = { RingPlansPage };