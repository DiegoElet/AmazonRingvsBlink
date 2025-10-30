// pages/CheckCartPage.js
const { expect } = require('@playwright/test');

class CheckCartPage {
  constructor(page) {
    this.page = page;
    this.goToCartButton = page.locator('#nav-cart');
    this.shoppingCartTitle = page.getByRole('heading', { name: 'Shopping Cart' });
    this.saveForLaterButton = page.locator('input[value="Save for later"]');
    this.subtotalText = page.locator('#sc-subtotal-label-activecart');
    this.ringDoorbellPrice = page.locator('span.sc-product-price').first(); // Assuming it's the first item
    this.ringChimePrice = page.locator('span.sc-product-price').nth(1); // Assuming it's the second
  }

  async goToCart() {
    await this.goToCartButton.click();
  }

  async validateCartPage() {
    await expect(this.shoppingCartTitle).toBeVisible();
    await expect(this.saveForLaterButton.first()).toBeVisible();
    await expect(this.subtotalText).toBeVisible();
  }

  async getProductPrices() {
    const price1 = await this.ringDoorbellPrice.innerText();
    const price2 = await this.ringChimePrice.innerText();
    return {
      doorbell: parseFloat(price1.replace('$', '')),
      chime: parseFloat(price2.replace('$', ''))
    };
  }
}

module.exports = { CheckCartPage };
