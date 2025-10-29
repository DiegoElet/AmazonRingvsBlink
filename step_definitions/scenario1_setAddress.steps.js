// step_definitions/scenario1_setAddress.steps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { HomePage } = require('../pages/HomePage');

Given('I open the Amazon homepage', async function () {
  this.homePage = new HomePage(this.page);
  await this.homePage.navigate();
});

When ('I click on Continue shopping', async function () {
  await this.homePage.clickContinueShopping();
});

When('I handle the "Visiting from Canada?" popup', async function () {
  await this.homePage.handleAddressPopup();
});

When('I set the US address to {string}', async function (zip) {
  await this.homePage.setUSAddress(zip);
});

Then('I click on the main search bar to confirm', async function () {
  await this.homePage.clickSearchBar();
});