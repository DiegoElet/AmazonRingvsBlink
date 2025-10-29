// pages/SearchResultsPage.js
const { expect } = require('@playwright/test');

class SearchResultsPage {
  constructor(page) {
    this.page = page;
  }

  async clickProduct(productName) {
    // Using a case-insensitive regex to find the product link
    const productLink = this.page.getByRole('link', { name: new RegExp(productName, 'i') }).first();
    await expect(productLink).toBeVisible();
    await productLink.click();
  }
}

module.exports = { SearchResultsPage };