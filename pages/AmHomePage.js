// pages/AmHomePage.js
const { expect } = require('@playwright/test');
const { amazonUrl } = require('../config/environment');

class AmHomePage {
  constructor(page) {
    this.page = page;
    // Locators for setting country and address
    this.countryPopup = page.locator('div[role="dialog"]:has-text("You are on Amazon.com")');
    this.continueShoppingButton = page.getByRole('button', { name: 'Continue shopping' });
    this.canadaPopup = page.locator('div[role="dialog"]:has-text("Visiting from Canada?")');
    this.stayOnAmazonButton = page.getByRole('button', { name: 'Stay on Amazon.com' });
    this.changeAddressButton = page.locator('#nav-global-location-popover-link');
    this.zipCodeInput = page.locator('#GLUXZipUpdateInput');
    this.zipCodeApplyButton = page.locator('input[aria-labelledby="GLUXZipUpdate-announce"]');
    this.zipCodeContinueButton = page.getByRole('button', { name: 'Continue' });
    this.searchBar = page.locator('#twotabsearchtextbox');
  }

  async navigate() {
    await this.page.goto(amazonUrl);
  }

  async handleContinueShopping() {
    if (await this.continueShoppingButton.isVisible()) {
      await this.continueShoppingButton.click();
    }
  }

  async handleCanadaPopup() {
    if (await this.canadaPopup.isVisible()) {
      await this.stayOnAmazonButton.click();
    }
  }

  async setCountryToUS() {
    await this.countryPopup.click();
    await this.page.getByRole('option', { name: 'United States' }).click();
  }

    async clickSearchBar() {
    await this.searchBar.click();
  }


  //Scenario 2 methods

  async clickDeliverToAddress() {
    await this.changeAddressButton.click();
  }

  async setUSAddress(zip) {
    await this.changeAddressButton.click();
    await this.zipCodeInput.fill(zip);
    await this.zipCodeApplyButton.click();
    await this.zipCodeContinueButton.waitFor({ state: 'visible', timeout: 5000 });
    await this.zipCodeContinueButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickDonebutton() {
    const doneButton = this.page.getByRole('button', { name: 'Done' });
    await expect(doneButton).toBeVisible();
    await doneButton.click();
  }

}

module.exports = { AmHomePage };
