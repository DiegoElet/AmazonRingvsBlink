// pages/ProductPage.js
const { expect } = require('@playwright/test');

class ProductPage {
  constructor(page) {
    this.page = page;
    // Locators
    this.addToCartButton = page.locator('#add-to-cart-button');
    this.noThanksButton = page.locator('#attachSiNoCoverage'); // Also matches role 'button', { name: 'No, thanks' }
    this.addedToCartMessage = page.getByText('Added to Cart');
    this.quantityDropdown = page.locator('#quantity');
  }

  async selectQuantity(qty) {
    await expect(this.quantityDropdown).toBeVisible();
    await this.quantityDropdown.selectOption(qty);
  }

  async addToCart() {
    await expect(this.addToCartButton).toBeVisible();
    await this.addToCartButton.click();
  }

  async dismissEnhancements() {
    // Handle the "Enhance your purchase" popup if it appears
    try {
      await this.noThanksButton.click({ timeout: 5000 });
    } catch (error) {
      // If the popup doesn't appear, just log it and continue
      console.log('Enhancement popup did not appear.');
    }
  }

  async validateAddedToCart() {
    await expect(this.addedToCartMessage).toBeVisible();
  }
}

module.exports = { ProductPage };