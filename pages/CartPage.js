// pages/CartPage.js
const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    // Locators
    this.shoppingCartTitle = this.page.getByRole('heading', { name: 'Shopping Cart' });
    this.saveForLaterButton = this.page.locator('input[value="Save for later"]').first();
    this.subtotalText = this.page.getByText('Subtotal');
  }

  async validateCartPage() {
    await expect(this.shoppingCartTitle).toBeVisible();
    await expect(this.saveForLaterButton).toBeVisible();
    await expect(this.subtotalText).toBeVisible();
  }
}

module.exports = { CartPage };