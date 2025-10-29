// pages/HomePage.js
const { expect } = require('@playwright/test');
const { amazonUrl } = require('../config/environment');

class HomePage {
  constructor(page) {
    this.page = page;
    // Locators
    this.continueShoppingButton = page.locator('button', { name: 'Continue shopping' });
    this.canadaPopup = page.locator('div[role="dialog"]:has-text("Visiting from Canada?")');
    this.stayOnAmazonButton = page.getByRole('button', { name: 'Stay on Amazon.com' });
    this.changeAddressButton = page.locator('#nav-global-location-popover-link');
    this.changeAddressLink = page.getByRole('link', { name: 'Change address' });
    this.zipCodeInput = page.locator('#GLUXZipUpdateInput');
    this.zipCodeApplyButton = page.locator('input[aria-labelledby="GLUXZipUpdate-announce"]');
    this.zipCodeContinueButton = page.getByRole('button', { name: 'Continue' });
    this.searchBar = page.locator('#twotabsearchtextbox');
    this.searchSubmitButton = page.locator('#nav-search-submit-button');
    this.goToCartButton = page.locator('#nav-cart');
  }

  async navigate() {
    await this.page.goto(amazonUrl);
  }

  async clickContinueShopping() {
    const continueShoppingButton = this.page.getByRole('button', { name: 'Continue shopping' , timeout: 33000});
    await expect(continueShoppingButton).toBeVisible();
    await continueShoppingButton.click();
  }

  async handleAddressPopup() {
    // Use Promise.race to handle the popup which may or may not appear
    await Promise.race([
      this.canadaPopup.waitFor({ state: 'visible', timeout: 5000 }),
      this.changeAddressButton.waitFor({ state: 'visible', timeout: 5000 })
    ]);

    if (await this.canadaPopup.isVisible()) {
      await this.stayOnAmazonButton.click();
    }
  }

  async setUSAddress(zip) {
    await expect(this.changeAddressButton).toBeVisible();
    await this.changeAddressButton.click();

    // Sometimes an extra "Change address" link appears
    try {
      await this.changeAddressLink.click({ timeout: 2000 });
    } catch (e) {
      // If it's not there, continue
    }
    
    await expect(this.zipCodeInput).toBeVisible();
    await this.zipCodeInput.fill(zip);
    await this.zipCodeApplyButton.click();
    
    // Wait for the "Continue" button to be clickable after applying
    await this.zipCodeContinueButton.waitFor({ state: 'visible', timeout: 5000 });
    await this.zipCodeContinueButton.click();
    
    // Wait for page to reload after address change
    await this.page.waitForLoadState('networkidle');
  }

  async clickSearchBar() {
    await expect(this.searchBar).toBeVisible();
    await this.searchBar.click();
  }

  async searchForItem(item) {
    await this.searchBar.fill(item);
    await this.searchSubmitButton.click();
  }

  async goToCart() {
    await expect(this.goToCartButton).toBeVisible();
    await this.goToCartButton.click();
  }
}

module.exports = { HomePage };