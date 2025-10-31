// step_definitions/scenario1_setUSCountry.steps.js
const { Given, When } = require('@cucumber/cucumber');
const { AmHomePage } = require('../pages/AmHomePage');

Given('I open the Amazon homepage', async function () {
  this.homePage = new AmHomePage(this.page);
  await this.homePage.navigate();
});

When('I click on Continue shopping', async function () {
  await this.homePage.handleContinueShopping();
});

And('I handle the "Visiting from Canada?" popup', async function () {
  await this.homePage.handleCanadaPopup();
});

And('I set the delivery country to "United States"', async function () {
  await this.homePage.setCountryToUS();
});

Then('I click on the main search bar to confirm', async function () {
  await this.homePage.clickSearchBar();
});
