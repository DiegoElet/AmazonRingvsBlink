// pages/AllProductsPage.js
const { expect } = require('@playwright/test');

class AllProductsPage {
  constructor(page) {
    this.page = page;
    this.searchBar = page.locator('#twotabsearchtextbox');
    this.searchSubmitButton = page.locator('#nav-search-submit-button');
    this.addToCartButton = page.locator('#add-to-cart-button');
    this.addedToCartMessage = page.locator('div#NATC_SMART_WAGON_CONF_MSG_SUCCESS');
    this.noThanksButton = page.getByRole('button', { name: 'No Thanks' });
  }

  async searchForItems(item) {
    await this.searchBar.fill(item);
    await this.searchSubmitButton.click();
    
  }

  async clickProduct(productName) {
    await this.page.getByRole('link', { name: new RegExp(productName, 'i') }).first().click();
  }

  async selectQuantity(qty) {
    await this.page.locator('#quantity').selectOption(qty);
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async validateAddedToCart() {
    await expect(this.addedToCartMessage).toBeVisible();
  }
  
  async dismissEnhancements() {
    // This handles popups that may appear after adding to cart
    if (await this.noThanksButton.isVisible()) {
      await this.noThanksButton.click();
    }
  }
}

module.exports = { AllProductsPage };
